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

          {/* Logo */}
          <div className="col-span-1 flex items-center">
            <div className="relative w-[190px] h-[80px]">
              <Image
                src="/assets/Property 1=Frame 427318371.svg"
                alt="CodeWrote Logo"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <span className="text-[20px] md:text-[15px] text-[#A1A1A1] font-medium font-['Switzer']">Email</span>
            <a
              href="mailto:info@codewrote.com"
              className="text-[22px] md:text-[18px] font-semibold text-[#0F0F0F] font-['Switzer']"
            >
              info@codewrote.com
            </a>
          </div>

          {/* Start Your Project */}
          <div className="flex flex-col gap-1">
            <span className="text-[20px] md:text-[15px] text-[#555] font-medium font-['Switzer']">Start Your Project</span>
            <a
              href="#"
              className="text-[22px] md:text-[18px] font-semibold text-[#E61F93] font-['Switzer'] hover:opacity-80 transition-opacity"
            >
              Try Codewrote
            </a>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-1">
            <span className="text-[20px] md:text-[15px] text-[#555] font-medium font-['Switzer']">Menu</span>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-1">
              <a href="#" className="text-[22px] md:text-[18px] font-semibold text-[#0F0F0F] font-['Switzer']">Home</a>
              <a href="#" className="text-[22px] md:text-[18px] font-semibold text-[#0F0F0F] font-['Switzer']">Our Work</a>
              <a href="#" className="text-[22px] md:text-[18px] font-semibold text-[#0F0F0F] font-['Switzer']">About Us</a>
              <a href="#" className="text-[22px] md:text-[18px] font-semibold text-[#0F0F0F] font-['Switzer']">Services</a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-[#0F0F0F] w-full py-9 px-8">
        <div className="lg:px-[140px] px-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

          {/* Left - Legal links */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full md:w-auto">
            <a href="#" className="text-[18px] md:text-[13px] text-white font-medium font-['Switzer'] hover:opacity-70 transition-opacity">
              Terms of Service
            </a>
            <a href="#" className="text-[18px] md:text-[13px] text-white font-medium font-['Switzer'] hover:opacity-70 transition-opacity">
              Privacy Policy
            </a>
          </div>

          {/* Center - Copyright */}
          <p className="w-full md:w-auto text-[18px] md:text-[13px] text-[#A1A1A1] font-medium font-['Switzer'] text-center order-last md:order-none mt-4 md:mt-0">
            © 2025 CodeWrote. All Rights Reserved.
          </p>

          {/* Right - Address */}
          <div className="flex flex-col items-start md:items-end w-full md:w-auto mt-2 md:mt-0">
            <span className="hidden md:block text-[16px] md:text-[11px] text-[#A1A1A1] font-medium font-['Switzer'] mb-0.5">Address</span>
            <span className="text-[18px] md:text-[13px] text-white font-medium font-['Switzer'] text-left md:text-right leading-snug">
              Sector 57 Gurgaon,<br />
              Sushant Lok Phase 2, India
            </span>
          </div>

        </div>
      </div>

    </footer>
  );
}
