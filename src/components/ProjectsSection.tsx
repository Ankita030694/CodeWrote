"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function ProjectsSection() {
  return (
    <section className="w-full py-28 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-[50px] md:text-[58px] leading-tight font-semibold text-[#A1A1A1] font-['Switzer'] uppercase tracking-tight">
            PROJECTS THAT
          </h2>
          <h2 className="text-[50px] md:text-[58px] leading-tight font-bold text-[#0F0F0F] font-['Switzer'] uppercase tracking-tight -mt-2">
            SHIP
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-[1240px] mx-auto">

          {/* Inline Tags & Title (Full Width) */}
          <h3 className="text-[34px] md:text-[40px] leading-[1.3] font-medium text-[#0F0F0F] font-['Switzer'] mb-12 tracking-tight">
            <span className="inline-flex items-center px-5 py-2 rounded-[24px] border border-gray-200 text-[#333] font-medium text-[15px] font-['Switzer'] mr-3 align-middle mt-[-4px]">
              Web Design
            </span>
            <span className="inline-flex items-center px-5 py-2 rounded-[24px] border border-gray-200 text-[#333] font-medium text-[15px] font-['Switzer'] mr-4 align-middle mt-[-4px]">
              Website Development
            </span>
            We redesigned Ama Legal Solutions entire digital experience from structure to launch.
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-[22px] items-end">

            {/* Left Column - Content */}
            <div className="flex flex-col justify-end w-full">

              {/* Description */}
              <p className="text-[17px] leading-[1.6] text-[#7A7A7A] font-medium font-['Switzer'] mb-10 max-w-[540px]">
                Most legal websites look outdated, confusing, and impossible to trust. So we rebuilt <span className="font-semibold text-[#0F0F0F]">Ama Legal Solutions website</span> from the ground up focusing on clarity, credibility, and a modern digital experience that actually converts visitors into clients.
              </p>

              {/* Action Button */}
              <div className="mb-14">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-2.5 rounded-full border border-dashed border-[#E61F93] text-[#0F0F0F] font-semibold text-[15px] font-['Switzer'] hover:bg-[#E61F93]/5 transition-colors"
                >
                  View CaseStudy
                </motion.button>
              </div>

              {/* Bottom Cards Grid */}
              <div className="flex flex-col sm:flex-row gap-[22px] mt-4 items-end w-full">

                {/* Results Card */}
                <div className="bg-white rounded-[24px] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex-1 w-full min-w-[220px] h-[200px] flex flex-col">
                  <h4 className="text-[20px] font-bold text-[#0F0F0F] font-['Switzer'] mb-4 mt-1">
                    Results.
                  </h4>

                  <div className="space-y-4 mt-auto">
                    <div>
                      <p className="text-[#A1A1A1] font-medium text-[13px] mb-1 font-['Switzer']">Client inquiries.</p>
                      <div className="flex items-center gap-2">
                        <span className="text-[#0F0F0F] font-bold font-['Switzer'] text-[20px]">48%</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[#0F0F0F] font-bold font-['Switzer'] text-[20px]">85%</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-[#A1A1A1] font-medium text-[13px] mb-1 font-['Switzer']">Page load speed.</p>
                      <div className="flex items-center gap-2">
                        <span className="text-[#0F0F0F] font-bold font-['Switzer'] text-[20px]">2.3s</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[#0F0F0F] font-bold font-['Switzer'] text-[20px]">0.9s</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Card */}
                <div className="bg-white rounded-[24px] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col h-[300px] flex-1 w-full min-w-[240px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl overflow-hidden relative flex-shrink-0 bg-gray-100">
                      <Image
                        src="/assets/project/73320c0b49b2e2e9597d2981f03d244e11474300.png"
                        alt="Anuj Anand Malik"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="text-[20px] font-bold text-[#0F0F0F] font-['Switzer'] leading-tight">Anuj Anand Malik</h5>
                      <p className="text-[14px] text-[#A1A1A1] font-medium font-['Switzer'] mt-0.5">Founder</p>
                    </div>
                  </div>

                  <p className="text-[20px] leading-[1.5] text-[#111] font-medium font-['Switzer'] mt-auto">
                    "CodeWrote transformed our online presence and made our services clearer and more trustworthy."
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column - Large Image Card */}
            <div className="bg-[#EAE8DE] rounded-[32px] flex items-center justify-center p-12 min-h-[500px] lg:h-[580px] w-full ml-auto">
              <div className="relative w-full max-w-[360px] aspect-[2/1]">
                <Image
                  src="/assets/project/Logo.svg"
                  alt="AMA Legal Solutions"
                  fill
                  className="object-contain mix-blend-multiply"
                />
              </div>
            </div>

          </div>

          {/* New Project Image Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[22px] mt-[22px]">

            {/* Left Column - Two Apps Staked */}
            <div className="flex flex-col gap-[22px]">
              {/* Application 1 */}
              <div className="w-full relative rounded-[32px] overflow-hidden h-[380px] bg-gray-100 flex items-center justify-center p-6">
                <Image
                  src="/assets/project/be9706899244af1b1308806bc79ba38c35e79ca1.jpg"
                  alt="Project View 1"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Application 2 */}
              <div className="w-full relative rounded-[32px] overflow-hidden h-[380px] bg-gray-100 flex items-center justify-center p-6 bg-[#DFF4E5]">
                <Image
                  src="/assets/project/c5a15d1bdfc4bd723e151869e29258f86b79b9a7.jpg"
                  alt="Project View 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column - Large Desktop View */}
            <div className="w-full relative rounded-[32px] overflow-hidden h-full min-h-[500px] bg-[#D7D8E6] flex items-center justify-center p-12">
              <Image
                src="/assets/project/a66a1d1dcc1827bd19660a58c80322f8c54b2f48.jpg"
                alt="Project View Large"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* See More Projects Button */}
          <div className="mt-16 flex justify-center w-full">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E61F93] to-[#FF4FB1] text-white font-bold text-[16px] font-['Switzer'] shadow-[0_10px_30px_rgba(230,31,147,0.4)] tracking-wide"
            >
              SEE MORE PROJECTS
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
}
