import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "@/lib/blogs";
import BlogGrid from "@/components/BlogGrid";

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-[200px] md:pt-[240px]">
        {/* Blog Hero */}
        <section className="px-6 mb-20 md:mb-32">
          <div className="max-w-[1200px] mx-auto text-center">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-gray-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <span className="text-[#E61F93] font-semibold tracking-[0.1em] text-[10px] uppercase font-['Switzer']">
                Insights & Updates
              </span>
            </div>
            
            <h1 className="text-[40px] md:text-[68px] lg:text-[80px] font-black leading-[0.95] text-black tracking-[-0.03em] font-['Switzer'] uppercase">
              The <span className="text-[#9CA3AF]">Blog.</span>
            </h1>
            
            <p className="mt-6 text-[#4B5563] text-[16px] md:text-[18px] font-medium max-w-2xl mx-auto font-['Switzer']">
              Stay updated with the latest trends in website development, automation, and business growth systems.
            </p>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="py-20 md:py-32 px-6 bg-[#FAFAFA]">
          <div className="max-w-[1200px] mx-auto">
            <BlogGrid blogs={JSON.parse(JSON.stringify(blogs))} />
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
