'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, faPlus, faTrash, faUpload, faMagic, faSearch,
  faThLarge, faTimes
} from '@fortawesome/free-solid-svg-icons';
import { ref, uploadBytes, uploadString, getDownloadURL } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import dynamic from 'next/dynamic';

const TiptapEditor = dynamic(() => import('@/components/TiptapEditor'), { 
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});

interface FAQ { id?: string; question: string; answer: string; }
interface Review { id?: string; name: string; rating: number; review: string; }
interface Blog {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  image: string;
  created: number;
  metaTitle?: string;
  metaDescription?: string;
  slug: string; 
  faqs?: FAQ[]; 
  reviews?: Review[]; 
}

export default function BlogsDashboard() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [newBlog, setNewBlog] = useState<Blog>({
    title: '', subtitle: '', description: '',
    date: new Date().toISOString().split('T')[0], 
    image: '', created: Date.now(),
    metaTitle: '', metaDescription: '', slug: '', 
    faqs: [], reviews: [], 
  });
  
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; 
  const [searchTerm, setSearchTerm] = useState('');
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [primaryKeyword, setPrimaryKeyword] = useState('');
  const [secondaryKeyword, setSecondaryKeyword] = useState('');
  
  const [imagePrompt, setImagePrompt] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [isUploadingGenerated, setIsUploadingGenerated] = useState(false);
  
  const [expansionPrompt, setExpansionPrompt] = useState('');
  const [isExpanding, setIsExpanding] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blog');
      if (!response.ok) throw new Error('Failed to fetch blogs');
      const data = await response.json();
      setBlogs(data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewBlog(prev => {
      if (name === 'title' && (!prev.slug || prev.slug === generateSlug(prev.title))) {
        return { ...prev, [name]: value, slug: generateSlug(value) };
      }
      return { ...prev, [name]: value };
    });
  };

  const generateSlug = (t: string) => t.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').trim();
  const handleEditorChange = (c: string) => setNewBlog(p => ({ ...p, description: c }));

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const storageRef = ref(storage, `blog-images/${Date.now()}_${file.name}`);
      const snap = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snap.ref);
      setNewBlog(p => ({ ...p, image: url }));
      setImagePreview(url);
    } catch (err) { alert("Upload failed"); }
    finally { setUploading(false); }
  };

  const handleGenerate = async () => {
    if (!primaryKeyword) {
      alert('Please enter the blog context');
      return;
    }

    try {
      setIsGenerating(true);
      const response = await fetch('/api/blog/generate-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ context: primaryKeyword }),
      });

      if (!response.ok) throw new Error('Failed to generate');

      // The backend streams JSON back
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let result = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          result += decoder.decode(value, { stream: true });
        }
      }

      const generatedData = JSON.parse(result);

      // Auto-fill the form with the AI's response
      setNewBlog((prev) => ({
        ...prev,
        title: generatedData.title || prev.title,
        subtitle: generatedData.subtitle || prev.subtitle,
        description: generatedData.description || prev.description,
        metaTitle: generatedData.metaTitle || prev.metaTitle,
        metaDescription: generatedData.metaDescription || prev.metaDescription,
        slug: generatedData.slug || prev.slug,
        faqs: generatedData.faqs || prev.faqs,
        reviews: generatedData.reviews || prev.reviews,
      }));

      // Pre-fill the image prompt suggestion
      if (generatedData.suggestedImagePrompt) {
        setImagePrompt(generatedData.suggestedImagePrompt);
      }

      alert('Blog generated successfully!');
    } catch (error) {
      alert(`Failed to generate blog: ${error}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateImage = async () => {
    if (!imagePrompt) {
      alert('Please enter an image prompt');
      return;
    }

    try {
      setIsGeneratingImage(true);
      const response = await fetch('/api/blog/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: imagePrompt }),
      });

      if (!response.ok) throw new Error('Failed to generate image');

      const data = await response.json();
      let finalImageUrl = data.url;

      // Automatically upload the AI generated image to Firebase Storage
      if (finalImageUrl.startsWith('data:image')) {
        const storageRef = ref(storage, `blog-images/ai_${Date.now()}.png`);
        const snap = await uploadString(storageRef, finalImageUrl, 'data_url');
        finalImageUrl = await getDownloadURL(snap.ref);
      } else if (finalImageUrl.startsWith('http')) {
        const proxyResp = await fetch(`/api/proxy-image?url=${encodeURIComponent(finalImageUrl)}`);
        const blob = await proxyResp.blob();
        const storageRef = ref(storage, `blog-images/ai_${Date.now()}.png`);
        const snap = await uploadBytes(storageRef, blob);
        finalImageUrl = await getDownloadURL(snap.ref);
      }

      // Display the generated image and save the permanent Firebase URL
      setNewBlog((prev) => ({ ...prev, image: finalImageUrl }));
      setImagePreview(finalImageUrl);
      
    } catch (error) {
      console.error("Image gen/upload error:", error);
      alert('Image generation or upload failed.');
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleUploadGeneratedImage = async () => {
    if (!generatedImageUrl) return;
    setIsUploadingGenerated(true);
    try {
      const proxyResp = await fetch(`/api/proxy-image?url=${encodeURIComponent(generatedImageUrl)}`);
      const blob = await proxyResp.blob();
      const storageRef = ref(storage, `blog-images/${Date.now()}_ai.png`);
      const snap = await uploadBytes(storageRef, blob);
      const url = await getDownloadURL(snap.ref);
      setNewBlog(p => ({ ...p, image: url }));
      setImagePreview(url);
      setGeneratedImageUrl(null);
    } finally { setIsUploadingGenerated(false); }
  };

  const handleExpandContent = async () => {
    if (!newBlog.description) return;
    setIsExpanding(true);
    try {
      const resp = await fetch('/api/expand-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newBlog.description, prompt: expansionPrompt })
      });
      const expanded = await resp.text();
      setNewBlog(p => ({ ...p, description: expanded }));
    } finally { setIsExpanding(false); }
  };

  const addFAQ = () => setNewBlog(p => ({ ...p, faqs: [...(p.faqs || []), { question: '', answer: '' }] }));
  const removeFAQ = (idx: number) => setNewBlog(p => ({ ...p, faqs: p.faqs?.filter((_, i) => i !== idx) }));
  const updateFAQ = (idx: number, field: 'question' | 'answer', val: string) => {
    const updated = [...(newBlog.faqs || [])];
    updated[idx] = { ...updated[idx], [field]: val };
    setNewBlog(p => ({ ...p, faqs: updated }));
  };

  const addReview = () => setNewBlog(p => ({ ...p, reviews: [...(p.reviews || []), { name: '', rating: 5, review: '' }] }));
  const removeReview = (idx: number) => setNewBlog(p => ({ ...p, reviews: p.reviews?.filter((_, i) => i !== idx) }));
  const updateReview = (idx: number, field: keyof Review, val: string | number) => {
    const updated = [...(newBlog.reviews || [])];
    updated[idx] = { ...updated[idx], [field]: val };
    setNewBlog(p => ({ ...p, reviews: updated }));
  };

  const handleSubmitBlog = async (e?: React.FormEvent | React.MouseEvent) => {
    if (e) e.preventDefault();
    console.log("🚀 [handleSubmitBlog] Publish Button Clicked!");
    
    if (!newBlog.title || !newBlog.slug || !newBlog.subtitle || !newBlog.date) {
      console.warn("⚠️ [handleSubmitBlog] Validation failed. Missing required fields.");
      alert("Please fill in the Article Title, URL Slug, Subtitle, and Publication Date fields before publishing.");
      return;
    }

    try {
      console.log("📝 [handleSubmitBlog] Preparing data payload...", newBlog);
      const blogData = { ...newBlog, created: formMode === 'add' ? Date.now() : newBlog.created };
      
      const { id, ...mainDataRaw } = blogData;
      
      console.log("🧹 [handleSubmitBlog] Cleaning undefined fields from main data...");
      const mainData = Object.fromEntries(Object.entries(mainDataRaw).filter(([_, v]) => v !== undefined));

      if (formMode === 'add') {
        console.log("☁️ [handleSubmitBlog] Sending POST request to MongoDB API...");
        const res = await fetch('/api/blog', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mainData)
        });
        if (!res.ok) throw new Error(await res.text());
        console.log("✅ [handleSubmitBlog] Successfully added!");
      } else if (id) {
        console.log(`☁️ [handleSubmitBlog] Sending PUT request to MongoDB API for document ${id}...`);
        const res = await fetch(`/api/blog/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mainData)
        });
        if (!res.ok) throw new Error(await res.text());
        console.log("✅ [handleSubmitBlog] Successfully updated Document.");
      }
      
      console.log("🎉 [handleSubmitBlog] All database operations complete. Refreshing dashboard.");
      resetForm();
      fetchBlogs();
      alert(formMode === 'add' ? 'Blog published successfully!' : 'Blog updated successfully!');
    } catch (error: any) {
      console.error("❌ [handleSubmitBlog] CRITICAL ERROR saving blog to MongoDB:", error);
      alert(`Failed to save blog: ${error.message || error}`);
    }
  };

  const resetForm = () => {
    setNewBlog({
      title: '', subtitle: '', description: '',
      date: new Date().toISOString().split('T')[0],
      image: '', created: Date.now(), metaTitle: '', metaDescription: '',
      slug: '', faqs: [], reviews: []
    });
    setFormMode('add');
    setShowBlogForm(false);
    setImagePreview(null);
  };

  const handleEdit = async (blog: Blog) => {
    setNewBlog({
      ...blog,
      faqs: blog.faqs || [],
      reviews: blog.reviews || [],
    });
    setFormMode('edit');
    setShowBlogForm(true);
    if (blog.image) setImagePreview(blog.image);
  };

  const handleDelete = async (id: string | undefined) => {
    if (id && window.confirm('Delete this blog?')) {
      try {
        await fetch(`/api/blog/${id}`, { method: 'DELETE' });
        fetchBlogs();
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  const filteredBlogs = blogs.filter(b => b.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const currentBlogs = filteredBlogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      {/* Top Header */}
      <header className="h-20 border-b border-gray-100 flex items-center justify-between px-8 bg-white shrink-0">
        <div>
          <h2 className="text-2xl font-black text-black">
            {showBlogForm ? 'Create Article' : 'Blog Center'}
          </h2>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest -mt-1">
            Dashboard / blogs
          </p>
        </div>
        
        <div className="flex items-center gap-6">
            {!showBlogForm && (
              <button 
              onClick={() => { setShowBlogForm(true); setFormMode('add'); }}
              className="bg-black text-white px-6 py-2.5 rounded-full font-black flex items-center gap-2 hover:bg-[#E61F93] transition-colors shadow-lg shadow-pink-500/20"
              >
                <FontAwesomeIcon icon={faPlus} />
                New Post
              </button>
            )}
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black font-bold border border-gray-200">
              AB
            </div>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-8 bg-[#FAFAFA]">
        <AnimatePresence mode="wait">
            {showBlogForm ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-5xl mx-auto"
              >
                <div className="space-y-8 pb-32">
                  {/* AI Suite */}
                  {/* --- AI GENERATION BLOCK --- */}
                  <div className="p-6 border border-blue-200/80 bg-gradient-to-br from-blue-50/40 to-orange-50/10 rounded-2xl shadow-sm relative overflow-hidden mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-100 text-blue-600 font-bold animate-pulse">✨</span>
                      <div>
                        <h3 className="text-slate-800 text-sm font-bold uppercase tracking-wider">AI Writeup Auto-Generator</h3>
                        <p className="text-slate-500 text-xs mt-1">Paste the raw writeup or keyword below. The AI will draft the title, slug, HTML body, FAQs, and reviews automatically.</p>
                      </div>
                    </div>

                    <textarea
                      value={primaryKeyword}
                      onChange={(e) => setPrimaryKeyword(e.target.value)}
                      placeholder="Enter primary keyword or draft notes here..."
                      rows={4}
                      className="w-full p-3 bg-white border border-slate-200 focus:border-blue-400 rounded-xl text-sm text-slate-800 focus:outline-none shadow-sm"
                      disabled={isGenerating}
                    />

                    <div className="flex justify-end mt-4">
                      <button
                        type="button"
                        onClick={handleGenerate}
                        disabled={isGenerating || !primaryKeyword}
                        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-sm transition-all disabled:opacity-50"
                      >
                        {isGenerating ? '💫 Generating Content...' : '✨ Generate Blog with AI'}
                      </button>
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6">
                    <h4 className="text-sm font-black uppercase text-gray-400 mb-2">Basic Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase text-gray-400 pl-1">Article Title</label>
                          <input type="text" name="title" value={newBlog.title} onChange={handleInputChange} className="w-full text-black px-6 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-pink-100" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase text-gray-400 pl-1">URL Slug</label>
                          <input type="text" name="slug" value={newBlog.slug} onChange={handleInputChange} className="w-full text-black px-6 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-pink-100" required />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase text-gray-400 pl-1">Subtitle / Keywords</label>
                          <input type="text" name="subtitle" value={newBlog.subtitle} onChange={handleInputChange} className="w-full text-black px-6 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-pink-100" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase text-gray-400 pl-1">Publication Date</label>
                          <input type="date" name="date" value={newBlog.date} onChange={handleInputChange} className="w-full text-black px-6 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-pink-100" required />
                        </div>
                    </div>
                  </div>

                  {/* SEO Meta */}
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6">
                    <h4 className="text-sm font-black uppercase text-gray-400 mb-2">SEO Meta Data</h4>
                    <div className="space-y-6">
                      <div className="space-y-2">
                          <label className="text-xs font-black uppercase text-gray-400 pl-1">Meta Title</label>
                          <input type="text" name="metaTitle" value={newBlog.metaTitle || ''} onChange={handleInputChange} className="w-full text-black px-6 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-pink-100" />
                      </div>
                      <div className="space-y-2">
                          <label className="text-xs font-black uppercase text-gray-400 pl-1">Meta Description</label>
                          <textarea name="metaDescription" value={newBlog.metaDescription || ''} onChange={handleInputChange} className="w-full text-black px-6 py-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-pink-100" rows={2} />
                      </div>
                    </div>
                  </div>

                  {/* Featured Image & AI Image Generation */}
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-100/50 via-purple-100/30 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-black uppercase text-gray-800 flex items-center gap-2">
                          <FontAwesomeIcon icon={faMagic} className="text-pink-500" /> Cover Image Studio
                        </h4>
                        <p className="text-xs text-gray-400 mt-1 font-medium">Upload your own image or generate a unique one with AI.</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 relative z-10">
                      
                      {/* Upload / URL Input */}
                      <div className="flex flex-col md:flex-row gap-3">
                        <div className="flex-1 relative">
                          <input
                            type="text"
                            readOnly
                            value={newBlog.image}
                            placeholder="Image URL will appear here..."
                            className="w-full p-4 pl-5 border border-gray-100 rounded-2xl bg-gray-50/50 text-gray-700 font-medium text-sm focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                          />
                        </div>
                        
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="px-6 py-4 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md rounded-2xl text-sm font-black text-gray-700 transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                          <FontAwesomeIcon icon={faUpload} />
                          Upload File
                        </button>
                      </div>

                      {/* AI Generation Box */}
                      <div className="p-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mt-2 shadow-lg shadow-pink-500/20">
                        <div className="bg-white rounded-xl p-5 flex flex-col md:flex-row gap-3 items-center">
                          <div className="flex-1 w-full relative">
                            <input
                              type="text"
                              value={imagePrompt}
                              onChange={(e) => setImagePrompt(e.target.value)}
                              placeholder="Describe your perfect cover image..."
                              className="w-full p-4 border border-gray-100 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-100 bg-gray-50"
                              disabled={isGeneratingImage}
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 uppercase tracking-wider">Prompt</div>
                          </div>
                          
                          <button
                            type="button"
                            onClick={handleGenerateImage}
                            disabled={isGeneratingImage || !imagePrompt}
                            className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-xl text-sm font-black disabled:opacity-50 transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
                          >
                            {isGeneratingImage ? (
                              <>
                                <FontAwesomeIcon icon={faMagic} className="animate-spin" />
                                Generating...
                              </>
                            ) : (
                              <>
                                <FontAwesomeIcon icon={faMagic} />
                                Generate AI Image
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Image Preview Area */}
                      {(imagePreview || newBlog.image) && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-6 relative group rounded-2xl overflow-hidden shadow-xl max-w-2xl mx-auto border-4 border-white"
                        >
                          <img 
                            src={imagePreview || newBlog.image} 
                            alt="Cover Preview" 
                            className="w-full h-64 object-cover" 
                          />
                          
                          {/* Elegant Top-Right Delete Button */}
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                             <button 
                               type="button" 
                               onClick={() => {
                                 setImagePreview(null); 
                                 setNewBlog(p => ({...p, image: ''}));
                               }} 
                               className="bg-white text-red-500 hover:bg-red-500 hover:text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors"
                               title="Remove Image"
                             >
                               <FontAwesomeIcon icon={faTrash} />
                             </button>
                          </div>
                        </motion.div>
                      )}
                      
                      <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" />
                    </div>
                  </div>

                  {/* Editor */}
                  <div className="bg-white border border-gray-100 rounded-[40px] overflow-hidden min-h-[600px] shadow-sm">
                      <TiptapEditor content={newBlog.description} onChange={handleEditorChange} />
                  </div>

                  {/* FAQs Section */}
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-black uppercase text-gray-400">Frequently Asked Questions</h4>
                      <button type="button" onClick={addFAQ} className="text-[10px] font-black uppercase bg-black text-white px-3 py-1 rounded-full"><FontAwesomeIcon icon={faPlus} className="mr-1" /> Add FAQ</button>
                    </div>
                    <div className="space-y-4">
                      {(newBlog.faqs || []).map((faq, idx) => (
                        <div key={idx} className="p-6 bg-gray-50 rounded-2xl relative space-y-3">
                          <button type="button" onClick={() => removeFAQ(idx)} className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors"><FontAwesomeIcon icon={faTimes} /></button>
                          <input type="text" placeholder="Question" className="w-full bg-white border border-gray-100 px-4 py-2 rounded-xl text-black font-bold outline-none" value={faq.question} onChange={e => updateFAQ(idx, 'question', e.target.value)} />
                          <textarea placeholder="Answer" className="w-full bg-white border border-gray-100 px-4 py-2 rounded-xl text-black outline-none" rows={2} value={faq.answer} onChange={e => updateFAQ(idx, 'answer', e.target.value)} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reviews Section */}
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-black uppercase text-gray-400">Client Reviews</h4>
                      <button type="button" onClick={addReview} className="text-[10px] font-black uppercase bg-black text-white px-3 py-1 rounded-full"><FontAwesomeIcon icon={faPlus} className="mr-1" /> Add Review</button>
                    </div>
                    <div className="space-y-4">
                      {(newBlog.reviews || []).map((rev, idx) => (
                        <div key={idx} className="p-6 bg-gray-50 rounded-2xl relative grid grid-cols-1 md:grid-cols-4 gap-4">
                          <button type="button" onClick={() => removeReview(idx)} className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors"><FontAwesomeIcon icon={faTimes} /></button>
                          <div className="md:col-span-2 space-y-2">
                              <p className="text-[8px] font-black text-gray-400 uppercase">Client Name</p>
                              <input type="text" placeholder="Name" className="w-full bg-white border border-gray-100 px-4 py-2 rounded-xl text-black font-bold outline-none" value={rev.name} onChange={e => updateReview(idx, 'name', e.target.value)} />
                          </div>
                          <div className="space-y-2">
                              <p className="text-[8px] font-black text-gray-400 uppercase">Rating</p>
                              <select className="w-full bg-white border border-gray-100 px-4 py-2 rounded-xl text-black font-bold outline-none" value={rev.rating} onChange={e => updateReview(idx, 'rating', Number(e.target.value))}>
                                <option value={5}>5 Stars</option>
                                <option value={4}>4 Stars</option>
                                <option value={3}>3 Stars</option>
                              </select>
                          </div>
                          <div className="md:col-span-4 space-y-2">
                              <p className="text-[8px] font-black text-gray-400 uppercase">Review Feedback</p>
                              <textarea placeholder="Review text..." className="w-full bg-white border border-gray-100 px-4 py-2 rounded-xl text-black outline-none" rows={2} value={rev.review} onChange={e => updateReview(idx, 'review', e.target.value)} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end gap-4">
                      <button type="button" onClick={resetForm} className="px-10 py-5 font-black uppercase text-sm text-gray-400 hover:text-black transition-colors">Discard</button>
                      <button type="button" onClick={handleSubmitBlog} className="px-12 py-5 bg-black text-white rounded-full font-black text-sm hover:bg-[#E61F93] transition-all shadow-xl shadow-pink-500/10 active:scale-95">
                        {formMode === 'add' ? 'Publish Online' : 'Save Changes'}
                      </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6 pb-20"
              >
                <div className="flex items-center justify-between">
                    <div className="relative w-96">
                      <FontAwesomeIcon icon={faSearch} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" />
                      <input type="text" placeholder="Search saved articles..." className="w-full pl-14 pr-4 py-4 bg-white border border-gray-100 rounded-3xl outline-none text-black font-medium" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {currentBlogs.map((blog: Blog) => (
                    <motion.div 
                      key={blog.id} 
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-100 flex flex-col group"
                    >
                      <div className="h-44 w-full relative overflow-hidden">
                        <img src={blog.image} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase">{new Date(blog.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="p-8 flex-grow flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-black text-lg line-clamp-2 leading-[1.2] mb-2">{blog.title}</h4>
                          <p className="text-gray-400 text-xs font-medium line-clamp-2">{blog.subtitle}</p>
                        </div>
                        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-50">
                            <button onClick={() => handleEdit(blog)} className="text-[10px] font-black uppercase hover:text-[#E61F93] tracking-widest">Edit Entry</button>
                            <button onClick={() => handleDelete(blog.id)} className="text-[10px] text-red-500 font-black uppercase tracking-widest">Remove</button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {currentBlogs.length === 0 && (
                    <div className="col-span-full py-20 text-center text-gray-300 font-black uppercase tracking-widest text-sm">No match found</div>
                  )}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-6 py-10">
                  <button onClick={() => {setCurrentPage(p => Math.max(1, p-1)); window.scrollTo(0,0);}} disabled={currentPage === 1} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center disabled:opacity-30 hover:bg-black hover:text-white transition-all text-black"><FontAwesomeIcon icon={faHome} /></button>
                  <div className="bg-white px-6 py-3 rounded-full border border-gray-100 shadow-sm">
                      <span className="font-black text-black text-sm">PAGE {currentPage} OF {totalPages || 1}</span>
                  </div>
                  <button onClick={() => {setCurrentPage(p => Math.min(totalPages ?? 1, p+1)); window.scrollTo(0,0);}} disabled={currentPage === totalPages} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center disabled:opacity-30 hover:bg-black hover:text-white transition-all text-black"><FontAwesomeIcon icon={faThLarge} /></button>
                </div>
              </motion.div>
            )}
        </AnimatePresence>
      </div>
    </>
  );
}
