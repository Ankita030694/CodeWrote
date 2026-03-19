"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/lib/blogs";

interface BlogGridProps {
  blogs: Blog[];
}

export default function BlogGrid({ blogs }: BlogGridProps) {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-2xl font-bold text-black font-['Switzer'] mb-4 uppercase tracking-tighter">No posts found</h3>
        <p className="text-gray-500 font-medium font-['Switzer']">Check back soon for new insights.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
      {blogs.map((blog, index) => (
        <motion.article
          key={blog._id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex flex-col group relative"
        >
          {/* Post Image Container */}
          <Link 
            href={`/blog/${blog.slug || blog._id}`} 
            className="block mb-8 overflow-hidden rounded-[32px] border-2 border-[#D1D1D1]/30 shadow-none relative aspect-[14/10] bg-white transition-all duration-500 hover:border-[#E61F93]/40 group"
          >
            {/* Pink Glow Effect on Card Hover (similar to StatsSection) */}
            <div className={`absolute top-1/2 left-[-25%] w-[150%] h-[60px] -translate-y-1/2 -rotate-[15deg] bg-gradient-to-r from-transparent via-[#E61F93]/30 to-transparent blur-[40px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10`} />
            
            {blog.image ? (
              <Image 
                src={blog.image} 
                alt={blog.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-10">
                <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-[24px] flex items-center justify-center opacity-40">
                  <span className="text-gray-300 font-bold uppercase tracking-[0.2em] text-[10px] font-['Switzer']">CodeWrote Insight</span>
                </div>
              </div>
            )}
            
            {blog.category && (
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full z-20 shadow-sm">
                <span className="text-[#E61F93] text-[9px] font-black uppercase tracking-[0.2em] font-['Switzer']">
                  {blog.category}
                </span>
              </div>
            )}
          </Link>

          {/* Post Content */}
          <div className="flex flex-col flex-grow px-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] font-black text-[#A1A1A1] font-['Switzer'] uppercase tracking-[0.15em]">
                {blog.date ? new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently'}
              </span>
              <div className="w-1.5 h-1.5 bg-[#E61F93]/40 rounded-full" />
              <span className="text-[11px] font-black text-[#E61F93] font-['Switzer'] uppercase tracking-[0.15em]">
                 {Math.ceil((blog.content?.length || 0) / 1000) || 5} min read
              </span>
            </div>
            
            <Link href={`/blog/${blog.slug || blog._id}`} className="group-hover:text-[#E61F93] transition-colors duration-300">
              <h2 className="text-[28px] md:text-[34px] font-bold leading-[1.05] mb-5 font-['Switzer'] text-black tracking-tight line-clamp-2 uppercase">
                {blog.title}
              </h2>
            </Link>
            
            <p className="text-[#4B5563] text-[15px] leading-relaxed mb-8 font-medium font-['Switzer'] line-clamp-3 opacity-90">
              {blog.excerpt || blog.content?.replace(/<[^>]*>/g, '').substring(0, 160) + '...'}
            </p>
            
            <div className="mt-auto">
              <Link 
                href={`/blog/${blog.slug || blog._id}`}
                className="inline-flex items-center gap-4 text-black font-black text-[13px] uppercase tracking-[0.2em] font-['Switzer'] group/link py-1"
              >
                <span className="relative overflow-hidden flex flex-col">
                  <span className="transition-transform duration-500 group-hover/link:-translate-y-full">Read Article</span>
                  <span className="absolute top-full transition-transform duration-500 group-hover/link:-translate-y-full text-[#E61F93]">Read Article</span>
                </span>
                <div className="w-12 h-[2px] bg-[#E61F93] transition-all duration-500 group-hover/link:w-16" />
              </Link>
            </div>
          </div>
        </motion.article>

      ))}
    </div>
  );
}
