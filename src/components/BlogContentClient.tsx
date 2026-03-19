"use client";

import React, { useState, useEffect } from "react";
import { Blog } from "@/lib/blogs";
import TableOfContents from "@/components/TableOfContents";

interface BlogContentClientProps {
  blog: Blog;
  processedContent: string;
  tocSections: { id: string, title: string }[];
}

export default function BlogContentClient({ blog, processedContent, tocSections }: BlogContentClientProps) {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleShare = (platform: string) => {
    const title = blog.title;
    let shareUrl = '';
    switch(platform) {
      case 'facebook': shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`; break;
      case 'twitter': shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`; break;
      case 'linkedin': shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`; break;
      default: return;
    }
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <>
      {/* TOC (Mobile) */}
      <div className="lg:hidden mb-12">
        <TableOfContents sections={tocSections} />
      </div>

      <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
        <div 
          className="blog-content text-[#4B5563] text-[18px] md:text-[20px] font-medium leading-[1.8] font-['Switzer']"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />

        {/* Share Card */}
        <div className="mt-20 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-[13px] font-black uppercase tracking-[0.2em] text-black font-['Switzer']">Spread the knowledge</span>
          <div className="flex gap-4">
            {['facebook', 'twitter', 'linkedin'].map((platform) => (
              <button 
                key={platform}
                onClick={() => handleShare(platform)}
                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#E61F93] hover:text-white hover:border-[#E61F93] transition-all duration-300 text-gray-400"
              >
                <span className="sr-only font-['Switzer']">{platform}</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  {platform === 'facebook' && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>}
                  {platform === 'twitter' && <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>}
                  {platform === 'linkedin' && <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>}
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
