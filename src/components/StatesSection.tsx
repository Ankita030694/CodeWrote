"use client";

import React from "react";
import Link from "next/link";

const regions = [
  { name: "Delhi", href: "/high-ranking-website-in-delhi" },
  { name: "Haryana", href: "/high-ranking-website-in-haryana" },
  { name: "Uttar Pradesh", href: "/high-ranking-website-in-uttar-pradesh" },
  { name: "Madhya Pradesh", href: "/high-ranking-website-in-madhya-pradesh" },
  { name: "Himachal Pradesh", href: "/high-ranking-website-in-himachal-pradesh" },
  { name: "Maharashtra", href: "/high-ranking-website-in-maharashtra" },
  { name: "Gurgaon", href: "/high-ranking-website-in-gurgaon" },
  { name: "Noida", href: "/high-ranking-website-in-noida" },
  { name: "Indore", href: "/high-ranking-website-in-indore" },
  { name: "Bengaluru", href: "/high-ranking-website-in-bengaluru" },
  { name: "Hyderabad", href: "/high-ranking-website-in-hyderabad" },
  { name: "Chennai", href: "/high-ranking-website-in-chennai" },
  { name: "Chandigarh", href: "/high-ranking-website-in-chandigarh" },
  { name: "Faridabad", href: "/high-ranking-website-in-faridabad" },
  { name: "Punjab", href: "/high-ranking-website-in-punjab" },
  { name: "Karnataka", href: "/high-ranking-website-in-karnataka" }
];

export default function StatesSection() {
  return (
    <section className="py-24 px-6 md:px-[120px] bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E61F93]/5 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 blur-[120px] rounded-full -ml-64 -mb-64" />
      
      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-6 bg-gray-50 border border-gray-100 rounded-full">
           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E61F93]">Regional Coverage</span>
        </div>
        
        <h2 className="text-[32px] md:text-[54px] font-black text-black uppercase leading-[1.05] tracking-tight font-['Switzer'] mb-4">
          Dominating <span className="text-[#E61F93]">Search</span> 
          <br className="hidden md:block" /> Across India
        </h2>
        
        <p className="text-gray-500 font-medium max-w-2xl mx-auto mb-16 text-lg">
          We build high-performance, high-ranking websites specialized for regional markets. Explore our in-depth SEO strategies for your state.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {regions.map((region, index) => (
            <Link
              key={index}
              href={region.href}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E61F93] to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative px-8 py-4 bg-white border border-gray-100 rounded-2xl flex items-center gap-3 transition-all duration-300 group-hover:border-[#E61F93]/30 group-hover:-translate-y-1 shadow-sm hover:shadow-xl">
                 <div className="w-2 h-2 rounded-full bg-[#E61F93]" />
                 <span className="text-[14px] font-black text-black uppercase tracking-tight font-['Switzer'] group-hover:text-[#E61F93]">
                    {region.name}
                 </span>
                 <svg 
                   className="w-4 h-4 text-gray-300 group-hover:text-[#E61F93] transition-colors" 
                   fill="none" 
                   viewBox="0 0 24 24" 
                   stroke="currentColor"
                   strokeWidth={3}
                 >
                   <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-20 pt-12 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-12">
              <div className="text-left">
                 <div className="text-[24px] font-black text-black">100%</div>
                 <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Target Keywords</div>
              </div>
              <div className="text-left">
                 <div className="text-[24px] font-black text-black">#1</div>
                 <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ranking Target</div>
              </div>
              <div className="text-left">
                 <div className="text-[24px] font-black text-black">5000+</div>
                 <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Words per Guide</div>
              </div>
           </div>
           
           <Link href="/contact" className="px-8 py-4 bg-black text-white rounded-full font-black text-[12px] uppercase tracking-widest hover:bg-[#E61F93] transition-all flex items-center gap-3 group">
              Get Your Local Strategy 
              <span className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">→</span>
           </Link>
        </div>
      </div>
    </section>
  );
}
