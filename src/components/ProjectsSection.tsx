"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function ProjectsSection() {
  return (
    <section className="w-full py-20 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-11 flex flex-col items-center">
          <h2 className="flex flex-col gap-0 uppercase">
            <span className="text-[40px] md:text-[76px] leading-[1.1] md:leading-[76px] font-semibold text-[#A1A1A1] font-['Switzer']">
              PROJECTS THAT
            </span>
            <span className="text-[40px] md:text-[76px] leading-[1.1] md:leading-[46px] font-semibold text-[#0F0F0F] font-['Switzer']">
              SHIP
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-[1240px] mx-auto">

          {/* Inline Tags & Title (Full Width) */}
          <h3 className="text-[35px] md:text-[34px] leading-[1.3] font-medium text-[#0F0F0F] font-['Switzer'] mb-8 tracking-tight">
            <span className="block mb-4 ml-2 md:inline md:mb-0 md:ml-0">
              <span className="inline-flex items-center px-4 md:px-4 py-2.5 md:py-2 rounded-[24px] border border-gray-200 text-[#333] font-medium text-[16px] md:text-[15px] font-['Switzer'] mr-2 align-middle mt-[-4px]">
                Web Design
              </span>
              <span className="inline-flex items-center px-4 md:px-4 py-2.5 md:py-2 rounded-[24px] border border-gray-200 text-[#333] font-medium text-[16px] md:text-[15px] font-['Switzer'] mr-3 md:mr-3 mr-0 align-middle mt-[-4px]">
                Website Development
              </span>
            </span>
            We redesigned Ama Legal Solutions entire digital experience from structure to launch.
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-[22px] items-end">

            {/* Left Column - Description + Button */}
            <div className="flex flex-col justify-end w-full order-1 lg:order-1">

              {/* Description */}
              <p className="text-[18px] md:text-[14px] leading-[1.6] text-[#7A7A7A] font-medium font-['Switzer'] mb-7 max-w-[380px]">
                Most legal websites look outdated, confusing, and impossible to trust. So we rebuilt <span className="font-semibold text-[#0F0F0F]">Ama Legal Solutions website</span> from the ground up focusing on clarity, credibility, and a modern digital experience that actually converts visitors into clients.
              </p>

              {/* Action Button */}
              <div className="mb-0 lg:mb-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-full border border-dashed border-[#E61F93] text-[#0F0F0F] font-semibold text-[18px] md:text-[13px] font-['Switzer'] hover:bg-[#E61F93]/5 transition-colors"
                >
                  View CaseStudy
                </motion.button>
              </div>

              {/* Bottom Cards — desktop only (shown inside left column on lg+) */}
              <div className="hidden lg:flex flex-row gap-[16px] mt-10 items-end w-full">

                {/* Results Card */}
                <div className="bg-white rounded-[16px] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex-1 w-full min-w-[160px] min-h-[170px] flex flex-col">
                  <h4 className="text-[17px] font-bold text-[#0F0F0F] font-['Switzer'] mb-3 mt-1">Results.</h4>
                  <div className="space-y-3 mt-auto">
                    <div>
                      <p className="text-[#A1A1A1] font-medium text-[11px] mb-1 font-['Switzer']">Client inquiries.</p>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#0F0F0F] font-bold font-['Switzer'] text-[17px]">48%</span>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[#0F0F0F] font-bold font-['Switzer'] text-[17px]">85%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#A1A1A1] font-medium text-[11px] mb-1 font-['Switzer']">Page load speed.</p>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#0F0F0F] font-bold font-['Switzer'] text-[17px]">2.3s</span>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[#0F0F0F] font-bold font-['Switzer'] text-[17px]">0.9s</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Card */}
                <div className="bg-white rounded-[16px] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col h-[210px] flex-1 w-full min-w-[170px]">
                  <div className="flex flex-col gap-2 mb-3">
                    <div className="w-14 h-14 rounded-[12px] overflow-hidden relative flex-shrink-0 bg-gray-100">
                      <Image src="/assets/project/73320c0b49b2e2e9597d2981f03d244e11474300.png" alt="Anuj Anand Malik" fill className="object-contain" />
                    </div>
                    <div>
                      <h5 className="text-[17px] font-bold text-[#0F0F0F] font-['Switzer'] leading-tight">Anuj Anand Malik</h5>
                      <p className="text-[12px] text-[#A1A1A1] font-medium font-['Switzer'] mt-0.5">Founder</p>
                    </div>
                  </div>
                  <p className="text-[15px] leading-[1.5] text-[#111] font-medium font-['Switzer'] mt-auto">
                    "CodeWrote transformed our online presence and made our services clearer and more trustworthy."
                  </p>
                </div>

              </div>
            </div>

            {/* Large Image Card */}
            <div className="bg-[#EAE8DE] rounded-[24px] flex items-center justify-center p-8 min-h-[350px] lg:h-[400px] w-full ml-auto order-2 lg:order-2">
              <div className="relative w-full max-w-[250px] aspect-[2/1]">
                <Image src="/assets/project/Logo.svg" alt="AMA Legal Solutions" fill className="object-contain mix-blend-multiply" />
              </div>
            </div>

            {/* Mobile-only Bottom Cards (order-3, hidden on lg+) */}
            <div className="flex lg:hidden flex-col sm:flex-row gap-[16px] items-end w-full order-3">

              {/* Testimonial Card */}
              <div className="bg-white rounded-[16px] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col min-h-[320px] flex-1 w-full min-w-[170px]">
                <div className="flex flex-col gap-2 mb-3">
                  <div className="w-20 h-20 rounded-[12px] overflow-hidden relative flex-shrink-0 bg-gray-100">
                    <Image src="/assets/project/73320c0b49b2e2e9597d2981f03d244e11474300.png" alt="Anuj Anand Malik" fill className="object-contain" />
                  </div>
                  <div>
                    <h5 className="text-[20px] font-bold text-[#0F0F0F] font-['Switzer'] leading-tight">Anuj Anand Malik</h5>
                    <p className="text-[14px] text-[#A1A1A1] font-medium font-['Switzer'] mt-0.5">Founder</p>
                  </div>
                </div>
                <p className="text-[23px] leading-[1.5] text-[#111] font-medium font-['Switzer'] mt-auto">
                  "CodeWrote transformed our online presence and made our services clearer and more trustworthy."
                </p>
              </div>

              {/* Results Card */}
              <div className="bg-white rounded-[16px] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex-1 w-full min-w-[160px] flex flex-col">
                <h4 className="text-[30px] font-bold text-[#0F0F0F] font-['Switzer'] mb-3 mt-1">Results.</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-[#A1A1A1] font-medium text-[20px] mb-1 font-['Switzer']">Client inquiries.</p>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#0F0F0F] font-bold font-['Switzer'] text-[20px]">48%</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[#0F0F0F] font-bold font-['Switzer'] text-[20px]">85%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#A1A1A1] font-medium text-[20px] mb-1 font-['Switzer']">Page load speed.</p>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#0F0F0F] font-bold font-['Switzer'] text-[20px]">2.3s</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[#0F0F0F] font-bold font-['Switzer'] text-[20px]">0.9s</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* New Project Image Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-[16px] mt-[16px]">

            {/* Left Column - Two Apps Staked */}
            <div className="flex flex-row lg:flex-col gap-[16px]">
              {/* Application 1 */}
              <div className="w-full relative rounded-[24px] overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image
                  src="/assets/project/IPR.jpg"
                  alt="Project View 1"
                  width={800}
                  height={600}
                  className="w-full h-auto block"
                />
              </div>

              {/* Application 2 */}
              <div className="w-full relative rounded-[20px] overflow-hidden bg-[#DFF4E5] flex items-center justify-center">
                <Image
                  src="/assets/project/Jivo.jpg"
                  alt="Project View 2"
                  width={800}
                  height={600}
                  className="w-full h-auto block"
                />
              </div>
            </div>

            {/* Right Column - Large Desktop View */}
            <div className="w-full relative rounded-[24px] overflow-hidden lg:h-full min-h-[400px] bg-[#D7D8E6] flex items-center justify-center p-8">
              <Image
                src="/assets/project/a66a1d1dcc1827bd19660a58c80322f8c54b2f48.jpg"
                alt="Project View Large"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* See More Projects Button */}
          <div className="mt-11 flex justify-center w-full">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E61F93] to-[#FF4FB1] text-white font-bold text-[13px] font-['Switzer'] shadow-[0_10px_30px_rgba(230,31,147,0.4)] tracking-wide"
            >
              SEE MORE PROJECTS
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
}
