"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function CTASection() {
  return (
    <section className="w-full py-14 bg-[#FAFAFA]">
      <div className="max-w-[1100px] mx-auto px-6">
        
        <div className="relative w-full rounded-[30px] overflow-hidden min-h-[440px] flex items-center justify-center p-7 bg-black">
          
          {/* Background Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
          >
            <source src="/assets/CTA%20VIDEO/12421542_3840_2160_30fps.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay for better text readability if the video is bright */}
          <div className="absolute inset-0 bg-black/30 z-0"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-[800px] mx-auto py-8">
            
            <h2 className="flex flex-col gap-0 uppercase mb-6">
              <span className="text-[30px] md:text-[56px] leading-[1.1] md:leading-[56px] font-semibold text-white/50 font-['Switzer']">
                Ideas are cheap.
              </span>
              <span className="text-[30px] md:text-[56px] leading-[1.1] md:leading-[56px] font-semibold text-white font-['Switzer']">
                Build it.
              </span>
            </h2>
            
            <p className="text-[13px] md:text-[14px] text-[#D1D1D1] font-medium font-['Switzer'] leading-[1.5] mb-8 max-w-[350px] mx-auto">
              Stop overthinking and start shipping.<br className="hidden md:block" />
              Websites, apps, CRM systems we turn ideas<br className="hidden md:block" />
              into real products.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#E61F93] to-[#FF4FB1] text-white font-bold text-[13px] font-['Switzer'] shadow-[0_10px_30px_rgba(230,31,147,0.4)] tracking-wide"
            >
              
              Let's Build Something
            </motion.button>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}
