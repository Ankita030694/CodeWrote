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
            </div>
          </div>

        </div>

        {/* Queries Section */}
        <div className="mt-16 pt-12 border-t border-[#E5E5E5]">
          <span className="text-[18px] md:text-[15px] text-[#555] font-medium font-['Switzer'] mb-6 block uppercase tracking-wider">Explore More</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <a href="/what-are-the-top-companies-for-custom-software-development-in-the-us" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity">Top Software Companies</a>
            <a href="/how-do-i-choose-the-best-custom-software-developer-for-my-business" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity ">Guide: How to Choose a Developer</a>
            <a href="/what-services-are-typically-included-in-custom-software-development" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity ">Software Development Services</a>
            <a href="/what-is-the-difference-between-custom-software-development-and-off-the-shelf-software" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity">Custom vs Off-the-Shelf Comparison</a>
            <a href="/lead-generating-website" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black">Lead Generating Website Guide</a>
            <a href="/high-ranking-website" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black">High Ranking Website Blueprint</a>
            <a href="/custom-web-development" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black">Custom Web Development Guide</a>
            <a href="/search-engine-optimization" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black">Search Engine Optimization Mastery</a>
            <a href="/best-platforms-for-developing-an-e-commerce-website-in-india" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">Best E-commerce Platforms in India</a>
            <a href="/what-are-the-most-user-friendly-website-builders-for-small-businesses" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">User-Friendly Website Builders Guide</a>
            <a href="/top-website-builders-for-small-businesses-with-hosting-services" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">Website Builders with Hosting</a>
            <a href="/compare-different-hosting-options-for-high-traffic-e-commerce-site" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">High-Traffic Hosting Guide</a>
            <a href="/how-to-choose-a-reliable-web-development-company-near-me" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">Reliable Local Developer Guide</a>
            <a href="/how-much-does-it-cost-to-develop-a-custom-e-commerce-website-in-india" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">E-commerce Cost Guide India</a>
            <a href="/affordable-website-development-packages-for-startups" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">Affordable Startup Packages</a>
            <a href="/where-can-i-find-a-directory-of-web-development-agencies-in-india" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">Web Agency Directory Guide</a>
            <a href="/compare-website-development-frameworks-for-responsive-design" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">Responsive Frameworks Comparison</a>
            <a href="/what-are-the-best-content-management-systems-for-a-large-corporate-blog" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">Best Corporate Blog CMS</a>
            <a href="/freelance-web-developers-with-expertise-in-custom-cms-development" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">Freelance CMS Expert Guide</a>
            <a href="/steps-to-secure-a-website-from-common-cyber-threats" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">Website Security Strategy</a>
            <a href="/which-website-hosting-providers-offer-the-fastest-loading-speeds-in-india" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">Fastest Hosting India Guide</a>
            <a href="/which-tools-are-essential-for-frontend-web-developers" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">Essential Frontend Tools Guide</a>
            <a href="/step-by-step-guide-to-launching-a-business-website-using-managed-services" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">Managed Services Guide</a>
            <a href="/get-a-free-consultation-for-a-new-business-website-project" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">Free Project Consultation</a>
            <a href="/best-tools-for-creating-multilingual-websites-for-indian-audiences" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">Multilingual Website Tools</a>
            <a href="/what-are-the-benifits-of-using-a-headless-cms-for-content-delivery" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">Headless CMS Benefits</a>
            <a href="/how-to-integrate-payment-gateways-into-an-online-store-website" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">Payment Integrations</a>
            <a href="/cost-of-building-a-professional-portfolio-website-with-premium-features" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">Portfolio Website Cost</a>
            <a href="/where-to-find-reviews-of-web-development-agencies-specializing-in-mobile-apps" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">Mobile Agency Reviews Guide</a>
            <a href="/how-to-choose-a-domain-name-registrar-and-hosting-packages" className="text-[14px] md:text-[15px] font-semibold text-[#0F0F0F] font-['Switzer'] hover:opacity-80 transition-opacity font-black text-[#E61F93]">Domain & Hosting Guide</a>
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
