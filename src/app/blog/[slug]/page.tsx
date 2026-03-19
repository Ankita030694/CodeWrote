import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";
import { getBlogBySlug } from "@/lib/blogs";
import { notFound } from "next/navigation";
import TableOfContents from "@/components/TableOfContents";
import BlogContentClient from "@/components/BlogContentClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Define author bios
const authorBios = {
  "Team Codewrote": {
    name: "Team Codewrote",
    description: "Our in-house team of website developers and automation experts dedicated to sharing the latest digital growth strategies.",
    image: "/logo.png",
    linkedInUrl: "#"
  },
  "Anuj Anand Malik": {
    name: "Anuj Anand Malik",
    description: "Founder of CodeWrote, expert in website development and business automation systems with a focus on high-conversion results.",
    image: "/logo.png", // Will be replaced with real image if available
    linkedInUrl: "#"
  }
};

const processContent = (html: string) => {
  const sections: { id: string, title: string }[] = [];
  if (!html) return { content: '', sections: [] };

  const modifiedContent = html.replace(/<(h[2])(.*?)>(.*?)<\/\1>/g, (match, tag, attrs, title) => {
    const cleanTitle = title.replace(/<[^>]*>/g, '').trim();
    const id = cleanTitle.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    sections.push({ id, title: cleanTitle });
    
    if (attrs.includes('id=')) return match;
    return `<${tag} id="${id}"${attrs}>${title}</${tag}>`;
  });

  return { content: modifiedContent, sections };
};

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const { content: processedContent, sections: tocSections } = processContent(blog.content || '');

  const author = blog.author && authorBios[blog.author as keyof typeof authorBios] 
    ? authorBios[blog.author as keyof typeof authorBios] 
    : authorBios["Team Codewrote"];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-[160px] md:pt-[200px]">
        {/* Blog Header & Hero */}
        <section className="px-6 mb-16 md:mb-20">
          <div className="max-w-[1200px] mx-auto">
            {/* Breadcrumbs Placeholder */}
            <div className="flex items-center gap-4 text-gray-400 mb-12 font-bold text-[11px] uppercase tracking-[0.2em] font-['Switzer']">
              <Link href="/blog" className="hover:text-[#E61F93]">Blog</Link>
              <span className="text-black line-clamp-1">{blog.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-end mb-12">
              <div>
                <div className="flex items-center gap-6 mb-8">
                  {blog.category && (
                    <div className="bg-[#E61F93]/10 px-4 py-1.5 rounded-full">
                      <span className="text-[#E61F93] text-[10px] font-black uppercase tracking-[0.15em] font-['Switzer']">
                        {blog.category}
                      </span>
                    </div>
                  )}
                  <span className="text-[11px] font-black text-gray-400 font-['Switzer'] uppercase tracking-[0.15em]">
                    {blog.date ? new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recently Published'}
                  </span>
                </div>
                <h1 className="text-[40px] md:text-[60px] lg:text-[72px] font-black leading-[1.05] text-black tracking-[-0.03em] font-['Switzer'] uppercase">
                  {blog.title}
                </h1>
              </div>
              
              <div className="flex flex-col lg:items-end">
                <div className="flex items-center gap-4 pt-8 w-full lg:justify-end">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center p-2 overflow-hidden">
                    <Image src={author.image} alt={author.name} width={48} height={48} className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-black font-['Switzer'] uppercase tracking-[0.1em]">{author.name}</span>
                    <span className="text-[12px] font-medium text-gray-500 font-['Switzer']">Expert Strategy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="w-full h-[400px] md:h-[650px] relative rounded-[40px] overflow-hidden shadow-2xl shadow-pink-500/5">
              {blog.image ? (
                <Image src={blog.image} alt={blog.title} fill className="object-cover" priority />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#FAFAFA] to-[#F1F1F1]" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </section>

        {/* 3-Column Content Layout */}
        <section className="px-6 pb-32">
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-12 items-start">
              
              {/* Left Sidebar - TOC (Desktop) */}
              <div className="hidden lg:block sticky top-32">
                 <TableOfContents sections={tocSections} orientation="vertical" />
              </div>

              {/* Main Content Area */}
              <div className="min-w-0">
                <BlogContentClient 
                  blog={JSON.parse(JSON.stringify(blog))} 
                  processedContent={processedContent} 
                  tocSections={tocSections} 
                />
              </div>

              {/* Right Sidebar - Author & CTA */}
              <div className="space-y-8 lg:sticky lg:top-32">
                {/* Author Card */}
                <div className="bg-[#FAFAFA] p-8 rounded-[32px]">
                  <h3 className="text-[12px] font-black text-[#A1A1A1] uppercase tracking-[0.2em] mb-6 font-['Switzer']">Written By</h3>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <Image src={author.image} alt={author.name} width={64} height={64} className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black font-['Switzer'] uppercase text-[15px]">{author.name}</h4>
                      <Link href={author.linkedInUrl} className="text-[11px] text-[#E61F93] font-bold uppercase tracking-wide hover:underline">View Profile</Link>
                    </div>
                  </div>
                  <p className="text-[13px] text-gray-600 font-medium font-['Switzer'] leading-relaxed mb-6">
                    {author.description}
                  </p>
                  <button className="w-full py-3 rounded-full bg-white border border-gray-100 text-[12px] font-bold uppercase tracking-widest text-black hover:bg-[#E61F93] hover:text-white hover:border-[#E61F93] transition-all duration-300 font-['Switzer']">
                    Follow Updates
                  </button>
                </div>

                {/* Vertical CTA Card */}
                <div className="bg-black p-8 rounded-[32px] text-white overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#E61F93]/20 blur-[60px] rounded-full -mr-16 -mt-16 group-hover:bg-[#E61F93]/40 transition-colors duration-700" />
                  <h3 className="text-[20px] font-bold font-['Switzer'] uppercase mb-4 relative z-10 leading-tight">Need a Website That Actually Sells?</h3>
                  <p className="text-[13px] text-gray-400 font-medium font-['Switzer'] leading-relaxed mb-8 relative z-10">
                    Get expert help in building systems that automate your growth.
                  </p>
                  <Link 
                    href="/contact" 
                    className="block w-full bg-[#E61F93] text-white text-center py-4 rounded-full font-bold text-[13px] uppercase tracking-widest hover:bg-[#FF4FB1] transition-all relative z-10 font-['Switzer'] shadow-[0_10px_30px_rgba(230,31,147,0.3)]"
                  >
                    Start Project
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
      
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content h2 {
          font-weight: 800;
          color: #000;
          font-size: 30px;
          margin-top: 60px;
          margin-bottom: 25px;
          line-height: 1.1;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          scroll-margin-top: 140px;
        }
        .blog-content p {
          margin-bottom: 30px;
        }
        .blog-content ul {
          list-style: none;
          padding: 0;
          margin-bottom: 40px;
        }
        .blog-content li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 15px;
        }
      `}} />
    </div>
  );
}
