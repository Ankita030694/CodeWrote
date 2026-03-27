'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, faUsers, faChartLine, faClipboardList, faCog, 
  faPlus, faEdit, faTrash, faUpload, faMagic, faSearch,
  faEnvelopeOpenText, faSignOutAlt, faThLarge, faFileAlt,
  faQuestionCircle, faStar, faTimes
} from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { db, auth, storage } from '@/lib/firebase';
import { useRouter } from 'next/navigation'; 
import dynamic from 'next/dynamic';

// Dynamically import Tiptap editor with client-side rendering only
const TiptapEditor = dynamic(() => import('@/components/TiptapEditor'), { 
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});

// Interfaces
interface FAQ {
  id?: string;
  question: string;
  answer: string;
}

interface Review {
  id?: string;
  name: string;
  rating: number;
  review: string;
}

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

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  message: string;
  createdAt: string;
}

const BlogsDashboard = () => {
  const [activeView, setActiveView] = useState<'blogs' | 'leads'>('blogs');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [newBlog, setNewBlog] = useState<Blog>({
    title: '',
    subtitle: '',
    description: '',
    date: new Date().toISOString().split('T')[0], 
    image: '',
    created: Date.now(),
    metaTitle: '',
    metaDescription: '',
    slug: '', 
    faqs: [], 
    reviews: [], 
  });
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
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
  const [leadSearchTerm, setLeadSearchTerm] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [leadPage, setLeadPage] = useState(1);
  const leadsPerPage = 10;

  // Colors based on website: #E61F93 (Pink), Black, White
  const primaryColor = '#E61F93';

  useEffect(() => {
    // Force zoom to 1 to override global zoom: 0.8 which causes white gaps
    document.documentElement.style.zoom = "1";
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) router.push('/login');
    });

    return () => {
      unsubscribe();
      // Optional: restore if needed, but usually admin is separate
    };
  }, [router]);

  useEffect(() => {
    fetchBlogs();
    fetchLeads();
  }, []);

  const fetchBlogs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Blog));
      setBlogs(data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    } catch (e) {
      console.error(e);
    }
  };

  const fetchLeads = async () => {
    try {
      const resp = await fetch('/api/leads');
      const data = await resp.json();
      if (Array.isArray(data)) setLeads(data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  // Blog Logic
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
    if (!primaryKeyword) return;
    setIsGenerating(true);
    try {
      const resp = await fetch('/api/generate-article', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ primaryKeyword, secondaryKeyword })
      });
      const data = await resp.json();
      setNewBlog(p => ({ ...p, ...data }));
      setImagePrompt(data.suggestedImagePrompt || '');
      if (data.image) setImagePreview(data.image);
    } finally { setIsGenerating(false); }
  };

  const handleGenerateImage = async () => {
    if (!imagePrompt) return;
    setIsGeneratingImage(true);
    try {
      const resp = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: imagePrompt })
      });
      const data = await resp.json();
      setGeneratedImageUrl(data.imageUrl);
    } finally { setIsGeneratingImage(false); }
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

  // FAQ/Review Helpers
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

  const handleSubmitBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    const blogData = { ...newBlog, created: formMode === 'add' ? Date.now() : newBlog.created };
    const { faqs, reviews, ...mainData } = blogData;
    let blogId = newBlog.id;

    if (formMode === 'add') {
      const ref = await addDoc(collection(db, 'blogs'), mainData);
      blogId = ref.id;
    } else if (blogId) {
      await updateDoc(doc(db, 'blogs', blogId), mainData);
    }

    if (blogId) {
      if (faqs) {
        const snap = await getDocs(collection(db, 'blogs', blogId, 'faqs'));
        for (const d of snap.docs) await deleteDoc(d.ref);
        for (const f of faqs) await addDoc(collection(db, 'blogs', blogId, 'faqs'), f);
      }
      if (reviews) {
        const snap = await getDocs(collection(db, 'blogs', blogId, 'reviews'));
        for (const d of snap.docs) await deleteDoc(d.ref);
        for (const r of reviews) await addDoc(collection(db, 'blogs', blogId, 'reviews'), r);
      }
    }
    resetForm();
    fetchBlogs();
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
    const fSnap = await getDocs(collection(db, 'blogs', blog.id!, 'faqs'));
    const rSnap = await getDocs(collection(db, 'blogs', blog.id!, 'reviews'));
    setNewBlog({
      ...blog,
      faqs: fSnap.docs.map(d => d.data() as FAQ),
      reviews: rSnap.docs.map(d => d.data() as Review)
    });
    setFormMode('edit');
    setShowBlogForm(true);
    if (blog.image) setImagePreview(blog.image);
  };

  const handleDelete = async (id: string | undefined) => {
    if (id && window.confirm('Delete this blog?')) {
      await deleteDoc(doc(db, 'blogs', id));
      fetchBlogs();
    }
  };

  const filteredBlogs = blogs.filter(b => b.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const currentBlogs = filteredBlogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const filteredLeads = leads.filter(l =>
    l.name?.toLowerCase().includes(leadSearchTerm.toLowerCase()) ||
    l.email?.toLowerCase().includes(leadSearchTerm.toLowerCase()) ||
    l.phone?.includes(leadSearchTerm) ||
    l.state?.toLowerCase().includes(leadSearchTerm.toLowerCase())
  );
  const totalLeadPages = Math.max(1, Math.ceil(filteredLeads.length / leadsPerPage));
  const currentLeads = filteredLeads.slice((leadPage - 1) * leadsPerPage, leadPage * leadsPerPage);

  const now = new Date();
  const leadsThisMonth = leads.filter(l => {
    const d = new Date(l.createdAt);
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;
  const leadsToday = leads.filter(l => {
    const d = new Date(l.createdAt);
    return d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;

  return (
    <div className="flex h-screen w-screen bg-black text-black font-sans overflow-hidden">
      {/* Sidebar - Fixed height and width */}
      <aside className="w-20 md:w-64 h-screen bg-black text-white flex flex-col items-center md:items-stretch py-8 border-r border-gray-800 z-[60] shrink-0 transition-all">
        <div className="px-6 mb-12 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#E61F93] rounded-full flex items-center justify-center shrink-0">
            <FontAwesomeIcon icon={faThLarge} className="text-white" />
          </div>
          <span className="hidden md:block font-black text-xl tracking-tighter">CodeWrote <span className="text-[#E61F93]">Admin</span></span>
        </div>

        <nav className="flex-grow space-y-2 px-3">
          <button 
            onClick={() => { setActiveView('blogs'); setShowBlogForm(false); }}
            className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${activeView === 'blogs' ? 'bg-[#E61F93] text-white' : 'hover:bg-gray-900 text-gray-400'}`}
          >
            <FontAwesomeIcon icon={faFileAlt} className="text-xl" />
            <span className="hidden md:block font-bold">Blog Management</span>
          </button>
          
          <button 
            onClick={() => { setActiveView('leads'); setShowBlogForm(false); }}
            className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${activeView === 'leads' ? 'bg-[#E61F93] text-white' : 'hover:bg-gray-900 text-gray-400'}`}
          >
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-xl" />
            <span className="hidden md:block font-bold">Leads & Enquiries</span>
          </button>
        </nav>

        <div className="px-3 pt-8 border-t border-gray-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-red-500/10 text-red-500 transition-all font-bold"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="text-xl" />
            <span className="hidden md:block">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area - Full height and flex grow */}
      <main className="flex-grow flex flex-col h-screen overflow-hidden bg-white">
        {/* Top Header */}
        <header className="h-20 border-b border-gray-100 flex items-center justify-between px-8 bg-white shrink-0">
          <div>
            <h2 className="text-2xl font-black text-black">
              {activeView === 'blogs' ? (showBlogForm ? 'Create Article' : 'Blog Center') : 'Leads Dashboard'}
            </h2>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest -mt-1">
              Dashboard / {activeView}
            </p>
          </div>
          
          <div className="flex items-center gap-6">
             {activeView === 'blogs' && !showBlogForm && (
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
            {activeView === 'blogs' ? (
              showBlogForm ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="max-w-5xl mx-auto"
                >
                  <form onSubmit={handleSubmitBlog} className="space-y-8 pb-32">
                    {/* AI Suite */}
                    <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-pink-100 text-[#E61F93] rounded-lg flex items-center justify-center">
                          <FontAwesomeIcon icon={faMagic} />
                        </div>
                        <h3 className="text-lg font-black uppercase tracking-tight">AI Content Strategist</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-3">
                           <p className="text-[10px] font-black text-[#E61F93] uppercase">Generator</p>
                           <input type="text" placeholder="Primary Keyword" className="w-full text-black px-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-1 focus:ring-pink-300" value={primaryKeyword} onChange={e => setPrimaryKeyword(e.target.value)} />
                           <input type="text" placeholder="Secondary Keywords" className="w-full text-black px-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-1 focus:ring-pink-300 mt-2" value={secondaryKeyword} onChange={e => setSecondaryKeyword(e.target.value)} />
                           <button type="button" onClick={handleGenerate} disabled={isGenerating} className="w-full py-3 bg-black text-white rounded-xl font-bold text-sm hover:bg-[#E61F93] transition-all disabled:opacity-50">{isGenerating ? 'Drafting...' : 'Generate Blog'}</button>
                        </div>
                        <div className="space-y-3">
                           <p className="text-[10px] font-black text-[#E61F93] uppercase">Visuals</p>
                           <textarea placeholder="Image Prompt..." className="w-full text-black px-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-1 focus:ring-pink-300 min-h-[92px]" value={imagePrompt} onChange={e => setImagePrompt(e.target.value)} />
                           <button type="button" onClick={handleGenerateImage} disabled={isGeneratingImage} className="w-full py-3 bg-[#E61F93] text-white rounded-xl font-bold text-sm hover:shadow-lg transition-all disabled:opacity-50">{isGeneratingImage ? 'Drawing...' : 'AI Image'}</button>
                        </div>
                        <div className="space-y-3">
                           <p className="text-[10px] font-black text-[#E61F93] uppercase">SEO Booster</p>
                           <textarea placeholder="Specific section to expand..." className="w-full text-black px-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-1 focus:ring-pink-300 min-h-[92px]" value={expansionPrompt} onChange={e => setExpansionPrompt(e.target.value)} />
                           <button type="button" onClick={handleExpandContent} disabled={isExpanding} className="w-full py-3 bg-gray-100 text-black border border-gray-200 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all disabled:opacity-50">{isExpanding ? 'Expanding...' : 'Scale Content'}</button>
                        </div>
                      </div>
                    </div>

                    {generatedImageUrl && (
                      <div className="p-4 bg-white border border-gray-100 rounded-2xl flex items-center justify-between shadow-md">
                         <div className="flex items-center gap-4">
                           <img src={generatedImageUrl} className="w-20 h-20 rounded-xl object-cover" />
                           <p className="text-sm font-bold">AI image ready! Confirm to use as header.</p>
                         </div>
                         <button type="button" onClick={handleUploadGeneratedImage} className="bg-[#E61F93] text-white px-6 py-2 rounded-full font-bold">Confirm Image</button>
                      </div>
                    )}

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

                    {/* Featured Image */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6">
                       <h4 className="text-sm font-black uppercase text-gray-400 mb-2">Featured Image</h4>
                       <div className="flex flex-col md:flex-row items-center gap-8">
                           <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full md:w-64 h-40 bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:border-pink-300 transition-colors"
                           >
                             <FontAwesomeIcon icon={faUpload} className="text-gray-300 text-xl mb-2" />
                             <span className="text-[10px] font-black uppercase text-gray-400">Upload Header Image</span>
                             <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" />
                           </div>
                           {(imagePreview || newBlog.image) && (
                             <div className="relative group">
                               <img src={imagePreview || newBlog.image} className="w-full md:w-80 h-40 object-cover rounded-3xl shadow-lg" />
                               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-3xl">
                                  <button type="button" onClick={() => {setImagePreview(null); setNewBlog(p => ({...p, image: ''}));}} className="bg-white text-red-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"><FontAwesomeIcon icon={faTrash} /></button>
                               </div>
                             </div>
                           )}
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
                       <button type="submit" className="px-12 py-5 bg-black text-white rounded-full font-black text-sm hover:bg-[#E61F93] transition-all shadow-xl shadow-pink-500/10 active:scale-95">
                         {formMode === 'add' ? 'Publish Online' : 'Save Changes'}
                       </button>
                    </div>
                  </form>
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
              )
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6 pb-20"
              >
                {/* Lead Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    { label: 'Total Leads', value: leads.length, color: primaryColor },
                    { label: 'This Month', value: leadsThisMonth, color: '#7C3AED' },
                    { label: 'Today', value: leadsToday, color: '#059669' },
                  ].map(s => (
                    <div key={s.label} className="bg-white border border-gray-100 rounded-3xl p-6 flex items-center justify-between shadow-sm">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                        <p className="text-4xl font-black" style={{ color: s.color }}>{s.value}</p>
                      </div>
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: s.color + '15' }}>
                        <svg className="w-7 h-7" fill="none" stroke={s.color} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Search + Refresh */}
                <div className="flex items-center justify-between gap-4">
                  <div className="relative w-96">
                    <FontAwesomeIcon icon={faSearch} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input
                      type="text"
                      placeholder="Search by name, email, phone, state..."
                      className="w-full pl-14 pr-4 py-4 bg-white border border-gray-100 rounded-3xl outline-none text-black font-medium"
                      value={leadSearchTerm}
                      onChange={e => { setLeadSearchTerm(e.target.value); setLeadPage(1); }}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 font-bold">{filteredLeads.length} results</span>
                    <button onClick={fetchLeads} className="bg-pink-50 text-[#E61F93] px-6 py-3 rounded-full text-xs font-black uppercase hover:bg-[#E61F93] hover:text-white transition-all">Refresh</button>
                  </div>
                </div>

                {/* Leads Table */}
                <div className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-100">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-50 text-black">
                      <thead className="bg-[#FAFAFA]">
                        <tr>
                          <th className="px-8 py-5 text-left text-[10px] font-black uppercase text-gray-400 tracking-widest">Client</th>
                          <th className="px-8 py-5 text-left text-[10px] font-black uppercase text-gray-400 tracking-widest">Email</th>
                          <th className="px-8 py-5 text-left text-[10px] font-black uppercase text-gray-400 tracking-widest">Phone</th>
                          <th className="px-8 py-5 text-left text-[10px] font-black uppercase text-gray-400 tracking-widest">State</th>
                          <th className="px-8 py-5 text-left text-[10px] font-black uppercase text-gray-400 tracking-widest">Message</th>
                          <th className="px-8 py-5 text-left text-[10px] font-black uppercase text-gray-400 tracking-widest">Date</th>
                          <th className="px-8 py-5"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {currentLeads.map((lead) => (
                          <tr key={lead._id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                                  <span className="text-[#E61F93] font-black text-sm">{lead.name?.charAt(0)?.toUpperCase()}</span>
                                </div>
                                <span className="font-bold text-black text-sm">{lead.name}</span>
                              </div>
                            </td>
                            <td className="px-8 py-6 text-gray-500 text-sm">{lead.email}</td>
                            <td className="px-8 py-6 text-gray-500 text-sm font-mono">{lead.phone}</td>
                            <td className="px-8 py-6">
                              <span className="bg-gray-100 px-3 py-1 rounded-full text-[10px] font-black uppercase text-gray-600">{lead.state}</span>
                            </td>
                            <td className="px-8 py-6 text-gray-400 text-sm max-w-xs">
                              <p className="line-clamp-2 leading-relaxed italic">{lead.message}</p>
                            </td>
                            <td className="px-8 py-6 text-xs font-bold text-gray-300 whitespace-nowrap">
                              {new Date(lead.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                            </td>
                            <td className="px-8 py-6">
                              <button
                                onClick={() => setSelectedLead(lead)}
                                className="text-[10px] font-black uppercase text-[#E61F93] hover:underline tracking-widest"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                        {filteredLeads.length === 0 && (
                          <tr><td colSpan={7} className="px-10 py-24 text-center text-gray-300 font-black uppercase tracking-widest text-sm">No leads found</td></tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Lead Pagination */}
                {totalLeadPages > 1 && (
                  <div className="flex justify-center items-center gap-6 py-6">
                    <button onClick={() => setLeadPage(p => Math.max(1, p - 1))} disabled={leadPage === 1} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center disabled:opacity-30 hover:bg-black hover:text-white transition-all text-black">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <div className="bg-white px-6 py-3 rounded-full border border-gray-100 shadow-sm">
                      <span className="font-black text-black text-sm">PAGE {leadPage} OF {totalLeadPages}</span>
                    </div>
                    <button onClick={() => setLeadPage(p => Math.min(totalLeadPages, p + 1))} disabled={leadPage === totalLeadPages} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center disabled:opacity-30 hover:bg-black hover:text-white transition-all text-black">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Lead Detail Modal */}
      <AnimatePresence>
        {selectedLead && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
            onClick={() => setSelectedLead(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-[40px] p-10 max-w-lg w-full shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center">
                    <span className="text-[#E61F93] font-black text-2xl">{selectedLead.name?.charAt(0)?.toUpperCase()}</span>
                  </div>
                  <div>
                    <h2 className="font-black text-2xl text-black">{selectedLead.name}</h2>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{selectedLead.state}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedLead(null)} className="text-gray-300 hover:text-black transition-colors">
                  <FontAwesomeIcon icon={faTimes} className="text-xl" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-2xl p-4">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black mb-1">Email</p>
                  <p className="text-sm font-bold text-black break-all">{selectedLead.email}</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black mb-1">Phone</p>
                  <p className="text-sm font-bold text-black font-mono">{selectedLead.phone}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black mb-2">Message</p>
                <p className="text-sm text-gray-600 leading-relaxed">{selectedLead.message}</p>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-5">
                <span className="text-xs text-gray-400 font-bold">
                  {new Date(selectedLead.createdAt).toLocaleString('en-IN')}
                </span>
                <a
                  href={`mailto:${selectedLead.email}`}
                  className="bg-black text-white px-6 py-3 rounded-full text-xs font-black hover:bg-[#E61F93] transition-all"
                >
                  Reply via Email
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogsDashboard;
