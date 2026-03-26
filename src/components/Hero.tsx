"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-[260px] md:pt-60 pb-20 md:pb-40 overflow-hidden">
      {/* Background gradients to match the reference */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-pink-500/20 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[5%] left-[-20%] w-[100%] h-[200px] bg-[#E61F93]/30 blur-[80px] rounded-full md:hidden pointer-events-none -z-10" />

      {/* Badge/Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-5 px-4"
      >
        <div className="px-5 py-2 rounded-full border border-gray-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.3)] flex items-center justify-center">
          <span className="text-[#E61F93] font-semibold tracking-[0.1em] text-[8px] md:text-[12px]">
            CONVERT. AUTOMATE. GROW.
          </span>
        </div>
      </motion.div>

      {/* Headline */}
      <div className="sr-only">
        <h1>Premier Website Development Agency & Professional Website Maker</h1>
        <p>Expert website developers creating high-converting websites and automated systems for business growth.</p>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-center mb-5 flex flex-col items-center relative z-10 px-4"
      >
        <div className="flex flex-col gap-0 md:gap-2">
          <span className="text-[35px] md:text-[51px] lg:text-[68px] leading-[0.95] text-[#9CA3AF] font-bold tracking-[-0.03em] whitespace-nowrap">
            Websites That <span className="text-black font-black">Sell.</span>
          </span>
          <span className="text-[35px] md:text-[51px] lg:text-[68px] leading-[0.95] text-[#9CA3AF] font-bold tracking-[-0.03em] whitespace-nowrap">
            Systems That <span className="text-black font-black">Run.</span>
          </span>
        </div>
      </motion.h1>

      {/* Subheadline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-10 max-w-xl relative z-10 px-4"
      >
        <p className="text-[#4B5563] text-[12px] md:text-[16px] font-bold leading-normal">
          Designed by expert <span className="text-[#E61F93]">website developers</span> to convert. Built to automate.<br />
          <span className="font-bold">Your go-to website development company for results that scale.</span>
        </p>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-20"
      >
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <div 
              className="relative flex items-center gap-3 pl-2 pr-8 py-2.5"
              style={{ 
                borderRadius: "45px",
                background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                boxShadow: "0 10px 24px 0 rgba(230, 31, 147, 0.4), 0 -3px 13.8px 0 rgba(232, 232, 232, 0.76) inset, 0 4px 13.8px 0 rgba(232, 232, 232, 0.76) inset"
              }}
            >
              <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center p-1.5 shadow-sm">
                <Image src="/logo.png" alt="CodeWrote" width={24} height={24} className="object-contain" />
              </div>
              <span className="text-white font-bold text-sm md:text-lg tracking-tight">
                Start The Launch
              </span>
            </div>
          </motion.button>
        </Link>
      </motion.div>

      {/* Hero Background Spaceship */}
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="w-full relative z-0 flex justify-center md:-mt-62 md:-ml-20 -ml-10"
      >
        <div className="w-full relative">
          <Image
            src="/assets/space_ship.png"
            alt="Space Ship Illustration"
            width={1920}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
