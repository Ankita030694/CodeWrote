"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-24 md:pt-40 pb-64 md:pb-80 px-4 min-h-[900px] overflow-hidden">
      {/* Background gradients to match the reference */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-pink-500/20 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />

      {/* Badge/Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-5"
      >
        <div className="px-4 py-1.5 rounded-full border border-gray-100 bg-white/50 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex items-center justify-center">
          <span className="text-[#E61F93] font-semibold tracking-[0.1em] text-[8px] md:text-[10px]">
            CONVERT. AUTOMATE. GROW.
          </span>
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-center mb-5 flex flex-col items-center relative z-10"
      >
        <div className="flex flex-col gap-0 md:gap-2">
          <span className="text-[32px] md:text-[51px] lg:text-[68px] leading-[0.95] text-[#9CA3AF] font-bold tracking-[-0.03em] whitespace-nowrap">
            Websites That <span className="text-black font-black">Sell.</span>
          </span>
          <span className="text-[32px] md:text-[51px] lg:text-[68px] leading-[0.95] text-[#9CA3AF] font-bold tracking-[-0.03em] whitespace-nowrap">
            Systems That <span className="text-black font-black">Run.</span>
          </span>
        </div>
      </motion.h1>

      {/* Subheadline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-8 max-w-xl relative z-10"
      >
        <p className="text-[#4B5563] text-[13px] md:text-[16px] font-medium leading-normal">
          Designed to convert. Built to automate.<br />
          <span className="opacity-80">Less busy work. More results.</span>
        </p>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative"
        >
          <div className="absolute -inset-1 bg-pink-500 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center gap-3 bg-gradient-to-r from-[#E61F93] to-[#FF4FB1] pl-2 pr-8 py-2.5 rounded-full shadow-lg">
            <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center p-1.5 shadow-sm">
              <Image src="/logo.png" alt="CodeWrote" width={24} height={24} className="object-contain" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Start The Launch
            </span>
          </div>
        </motion.button>
      </motion.div>

      {/* Hero Background Spaceship */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="absolute inset-x-0 bottom-[-50px] w-full h-[450px] md:h-[650px] pointer-events-none z-0"
      >
        <Image
          src="/assets/space_ship.png"
          alt="Space Ship Illustration"
          fill
          className="object-contain object-right-bottom opacity-90"
          priority
        />
      </motion.div>
    </section>
  );
}
