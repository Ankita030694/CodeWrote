"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-[#f4f4f4] flex flex-col font-['Switzer'] font-[500] text-[#1a1a1a]">
      <Navbar />

      <main className="flex-1 flex flex-col justify-between px-6 md:px-16 lg:px-32 xl:px-35 pt-40 md:pt-22 pb-16 w-full mx-auto max-w-[1920px]">

        {/* Top Section */}
        <div className="flex flex-col items-start justify-center mt-10 md:mt-20">
          <h1 className="text-[45px] md:text-[76px] lg:text-[80px] leading-[1.05] tracking-tight text-[#1a1a1a] mb-6 font-medium">
            Services That Hit Different.<br />
            <span className="text-[#E61F93]">Built to Scale Fast.</span>
          </h1>

          <p className="text-[#4a4a4a] text-[18px] md:text-[20px] lg:text-[22px] max-w-full md:max-w-[900px] leading-[1.4] mb-10 md:mb-14 px-2 md:px-0 font-medium">
            No fluff. Just high-impact design, smart development, and systems that<br className="hidden md:block" /> help you launch, grow, and win online.
          </p>

          <button
            className="px-10 mx-1 md:mx-0 py-[18px] font-bold text-white text-base md:text-[18px] hover:scale-[1.02] active:scale-[0.98] transition-all w-fit"
            style={{
              borderRadius: "45px",
              background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
              boxShadow: "0 10px 24px 0 rgba(230, 31, 147, 0.4), 0 -3px 13.8px 0 rgba(232, 232, 232, 0.76) inset, 0 4px 13.8px 0 rgba(232, 232, 232, 0.76) inset"
            }}
          >
            Start Your Project
          </button>
        </div>

        {/* Bottom Right Quote Section */}
        <div className="flex justify-end w-full mb-8 lg:mb-12 mt-16 lg:mt-18">
          <p className="text-[#a1a1aa] text-[22px] md:text-[24px] lg:text-[28px] xl:text-[32px] leading-[1.2] max-w-[600px] text-right tracking-tight font-medium px-4 md:px-0">
            Strategy first. Clean design. Smooth<br className="hidden lg:block" /> development. <span className="text-[#1a1a1a]">Real growth no noise.</span>
          </p>
        </div>

      </main>

      
      <Footer />
    </div>
  );
}
