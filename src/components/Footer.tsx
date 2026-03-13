"use client";

import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white relative">

      {/* Blurred Oval Gradient Background */}
      <div
        className="absolute pointer-events-none z-0"
        style={{ inset: 0, overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            width: "1116.699px",
            height: "581.486px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%) rotate(27.276deg)",
            borderRadius: "1116.699px",
            background:
              "linear-gradient(252deg, #FFAEDD 14.02%, #88CADF 42.18%, #FF0090 69.71%, #E61F93 78.37%)",
            filter: "blur(61.1px)",
            opacity: 0.75,
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 pt-48 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-start">

          {/* Logo */}
          <div className="col-span-2 md:col-span-1 flex items-center">
            <div className="relative w-[140px] h-[60px]">
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
            <span className="text-[13px] text-[#A1A1A1] font-medium font-['Switzer']">Email</span>
            <a
              href="mailto:info@codewrote.com"
              className="text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:text-[#E61F93] transition-colors"
            >
              info@codewrote.com
            </a>
          </div>

          {/* Start Your Project */}
          <div className="flex flex-col gap-1">
            <span className="text-[13px] text-[#A1A1A1] font-medium font-['Switzer']">Start Your Project</span>
            <a
              href="#"
              className="text-[15px] font-semibold text-[#E61F93] font-['Switzer'] hover:opacity-80 transition-opacity"
            >
              Try Codewrote
            </a>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-1">
            <span className="text-[13px] text-[#A1A1A1] font-medium font-['Switzer']">Menu</span>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-1">
              <a href="#" className="text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:text-[#E61F93] transition-colors">Home</a>
              <a href="#" className="text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:text-[#E61F93] transition-colors">Our Work</a>
              <a href="#" className="text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:text-[#E61F93] transition-colors">About Us</a>
              <a href="#" className="text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:text-[#E61F93] transition-colors">Services</a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-[#0F0F0F] w-full py-6 px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

          {/* Left - Legal links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-[13px] text-white font-medium font-['Switzer'] hover:opacity-70 transition-opacity">
              Terms of Service
            </a>
            <a href="#" className="text-[13px] text-white font-medium font-['Switzer'] hover:opacity-70 transition-opacity">
              Privacy Policy
            </a>
          </div>

          {/* Center - Copyright */}
          <p className="text-[13px] text-[#A1A1A1] font-medium font-['Switzer'] text-center order-last md:order-none">
            © 2025 CodeWrote. All Rights Reserved.
          </p>

          {/* Right - Address */}
          <div className="flex flex-col items-start md:items-end">
            <span className="text-[11px] text-[#A1A1A1] font-medium font-['Switzer'] mb-0.5">Address</span>
            <span className="text-[13px] text-white font-medium font-['Switzer'] text-right leading-snug">
              Sector 57 Gurgaon,<br />
              Sushant Lok Phase 2, India
            </span>
          </div>

        </div>
      </div>

    </footer>
  );
}
