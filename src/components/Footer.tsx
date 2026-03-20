"use client";

import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white relative">

      {/* Footer Gradient Background Image */}
      <div className="absolute top-0 left-[20%] w-[75%] h-[75%] pointer-events-none z-0 overflow-hidden">
        <Image
          src="/assets/Footer Gradient.png"
          alt="Footer Gradient"
          fill
          className="object-cover object-top-left"
          priority
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 lg:px-[140px] px-8 pt-48 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">

          {/* Logo & About Blurb */}
          <div className="col-span-1 flex flex-col items-start gap-4">
            <div className="relative w-[190px] h-[80px]">
              <Image
                src="/assets/Property 1=Frame 427318371.svg"
                alt="CodeWrote Logo - Premier Website Development Agency"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-[14px] text-[#555] font-['Switzer'] leading-relaxed max-w-[250px]">
              CodeWrote is a premier <span className="font-semibold text-[#0F0F0F]">website development company</span> and professional <span className="font-semibold text-[#0F0F0F]">website maker</span>. We build high-converting systems that run your business on autopilot.
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <span className="text-[20px] md:text-[15px] text-[#A1A1A1] font-medium font-['Switzer']">Email</span>
            <a
              href="mailto:info@codewrote.com"
              className="text-[16px] md:text-[18px] font-semibold text-[#0F0F0F] font-['Switzer']"
            >
              info@codewrote.com
            </a>
          </div>

          {/* Start Your Project */}
          <div className="flex flex-col gap-1">
            <span className="text-[16px] md:text-[15px] text-[#555] font-medium font-['Switzer']">Start Your Project</span>
            <a
              href="#"
              className="text-[16px] md:text-[18px] font-semibold text-[#E61F93] font-['Switzer'] hover:opacity-80 transition-opacity"
            >
              Try Codewrote
            </a>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-1">
            <span className="text-[18px] md:text-[15px] text-[#555] font-medium font-['Switzer']">Menu</span>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-1">
              <a href="/" className="text-[16px] md:text-[18px] font-semibold text-[#0F0F0F] font-['Switzer']">Home</a>
              <a href="/work" className="text-[16px] md:text-[18px] font-semibold text-[#0F0F0F] font-['Switzer']">Our Work</a>
              <a href="/about" className="text-[16px] md:text-[18px] font-semibold text-[#0F0F0F] font-['Switzer']">About Us</a>
              <a href="/services" className="text-[16px] md:text-[18px] font-semibold text-[#0F0F0F] font-['Switzer']">Services</a>
              <a href="/blog" className="text-[16px] md:text-[18px] font-semibold text-[#0F0F0F] font-['Switzer']">Blog</a>
              <a href="/contact" className="text-[16px] md:text-[18px] font-semibold text-[#0F0F0F] font-['Switzer']">Contact</a>
              <a href="/what-are-the-top-companies-for-custom-software-development-in-the-us" className="text-[14px] md:text-[15px] font-semibold text-[#E61F93] font-['Switzer'] hover:opacity-80 transition-opacity col-span-2 mt-2">Top Software Companies</a>
              <a href="/how-do-i-choose-the-best-custom-software-developer-for-my-business" className="text-[14px] md:text-[15px] font-semibold text-[#E61F93] font-['Switzer'] hover:opacity-80 transition-opacity col-span-2 mt-1 underline">Guide: How to Choose a Developer</a>
              <a href="/what-services-are-typically-included-in-custom-software-development" className="text-[14px] md:text-[15px] font-semibold text-[#E61F93] font-['Switzer'] hover:opacity-80 transition-opacity col-span-2 mt-1 underline">Software Development Services</a>
              <a href="/what-is-the-difference-between-custom-software-development-and-off-the-shelf-software" className="text-[14px] md:text-[15px] font-semibold text-[#E61F93] font-['Switzer'] hover:opacity-80 transition-opacity col-span-2 mt-1 underline italic">Custom vs Off-the-Shelf Comparison</a>
              <a href="/lead-generating-website" className="text-[14px] md:text-[15px] font-semibold text-[#E61F93] font-['Switzer'] hover:opacity-80 transition-opacity col-span-2 mt-1 underline font-black">Lead Generating Website Guide</a>
              <a href="/high-ranking-website" className="text-[14px] md:text-[15px] font-semibold text-[#E61F93] font-['Switzer'] hover:opacity-80 transition-opacity col-span-2 mt-1 underline font-black uppercase">High Ranking Website Blueprint</a>
              <a href="/custom-web-development" className="text-[14px] md:text-[15px] font-semibold text-[#E61F93] font-['Switzer'] hover:opacity-80 transition-opacity col-span-2 mt-1 underline font-black">Custom Web Development Guide</a>
              <a href="/search-engine-optimization" className="text-[14px] md:text-[15px] font-semibold text-[#E61F93] font-['Switzer'] hover:opacity-80 transition-opacity col-span-2 mt-1 underline font-black uppercase">Search Engine Optimization Mastery</a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-[#0F0F0F] w-full py-9 px-8">
        <div className="lg:px-[140px] px-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

          {/* Left - Legal links */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full md:w-auto">
            <a href="#" className="text-[16px] md:text-[13px] text-white font-medium font-['Switzer'] hover:opacity-70 transition-opacity">
              Terms of Service
            </a>
            <a href="#" className="text-[16px] md:text-[13px] text-white font-medium font-['Switzer'] hover:opacity-70 transition-opacity">
              Privacy Policy
            </a>
          </div>

          {/* Center - Copyright */}
          <p className="w-full md:w-auto text-[16px] md:text-[13px] text-[#A1A1A1] font-medium font-['Switzer'] text-center order-last md:order-none mt-4 md:mt-0">
            © 2026 CodeWrote. All Rights Reserved.
          </p>

          {/* Right - Address */}
          <div className="flex flex-col items-start md:items-end w-full md:w-auto mt-2 md:mt-0">
            <span className="hidden md:block text-[16px] md:text-[11px] text-[#A1A1A1] font-medium font-['Switzer'] mb-0.5">Address</span>
            <span className="text-[16px] md:text-[13px] text-white font-medium font-['Switzer'] text-left md:text-right leading-snug">
              Sector 57 Gurgaon,<br />
              Sushant Lok Phase 2, India
            </span>
          </div>

        </div>
      </div>

    </footer>
  );
}
