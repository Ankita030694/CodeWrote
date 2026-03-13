"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const comparisonData = [
  {
    feature: "Pricing",
    codeWrote: "₹",
    otherAgencies: "₹₹₹",
    codeWroteCheck: true,
  },
  {
    feature: "Expertise",
    codeWrote: "Senior developers and product designers",
    otherAgencies: "Mixed experience levels",
    codeWroteCheck: true,
  },
  {
    feature: "Project Speed",
    codeWrote: "Fast turnaround for modern web projects",
    otherAgencies: "Timelines vary by agency schedule",
    codeWroteCheck: true,
  },
  {
    feature: "Revisions & Improvements",
    codeWrote: "Flexible iterations to refine your product",
    otherAgencies: "Extra charges for revisions",
    codeWroteCheck: true,
  },
  {
    feature: "Communication",
    codeWrote: "Direct collaboration and clear updates",
    otherAgencies: "Often slow communication cycles",
    codeWroteCheck: true,
  },
  {
    feature: "Scalability",
    codeWrote: "Easily scale projects as your business grows",
    otherAgencies: "Limited by team size",
    codeWroteCheck: true,
  },
  {
    feature: "Technology Expertise",
    codeWrote: "Experts in modern web technologies and platforms",
    otherAgencies: "Varies depending on assigned team",
    codeWroteCheck: true,
  },
  {
    feature: "Product Quality",
    codeWrote: "High-quality, scalable digital products",
    otherAgencies: "Quality varies across projects",
    codeWroteCheck: true,
  },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path d="M15 5L5 15M5 5L15 15" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function WhyChooseSection() {
  return (
    <section className="w-full py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-[44px] md:text-[51px] leading-tight font-semibold text-[#A1A1A1] font-['Switzer'] uppercase tracking-tight">
            WHY CHOOSE
          </h2>
          <h2 className="text-[44px] md:text-[51px] leading-tight font-bold text-[#0F0F0F] font-['Switzer'] uppercase tracking-tight -mt-2">
            CODEWROTE
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-medium font-['Switzer'] mt-3">
            A smarter way to build digital products
          </p>
        </div>

        {/* Table Headers (Outside Container) */}
        <div className="max-w-[960px] mx-auto px-4 md:px-8 mb-5">
          <div className="w-full">
            <div className="grid grid-cols-[220px_1fr_1fr] md:grid-cols-[240px_1fr_1fr]">
              <div className="h-full bg-transparent"></div> {/* Empty space above features */}
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/Property 1=Frame 427318371.svg"
                  alt="CodeWrote Logo"
                  width={112}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <span className="text-[18px] md:text-[21px] font-bold text-[#0F0F0F] font-['Switzer']">Other Agencies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-[960px] mx-auto bg-white rounded-[32px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] overflow-hidden p-3 md:p-6 pt-0">

          <div className="w-full overflow-x-auto">
            <div className="min-w-[640px] grid grid-cols-[220px_1fr_1fr] md:grid-cols-[240px_1fr_1fr] auto-rows-fr">
              {/* Table Body Rows */}
              {comparisonData.map((row, idx) => (
                <React.Fragment key={idx}>
                  {/* Feature Column (Grey Background) */}
                  <div className={`bg-[#F4F4F4] px-6 py-4 flex items-center ${idx === 0 ? "rounded-t-[24px] mt-6" : ""} ${idx === comparisonData.length - 1 ? "rounded-b-[24px]" : "border-b border-gray-200"}`}>
                    <span className="text-[14px] font-semibold text-[#333] font-['Switzer']">{row.feature}</span>
                  </div>

                  {/* CodeWrote Column */}
                  <div className={`px-3 md:px-8 py-4 flex items-center gap-3 ${idx === 0 ? "mt-6" : ""} ${idx !== comparisonData.length - 1 ? "border-b border-gray-200" : ""}`}>
                    <CheckIcon />
                    <span className="text-[14px] font-medium text-[#111] font-['Switzer'] leading-snug">{row.codeWrote}</span>
                  </div>

                  {/* Other Agencies Column */}
                  <div className={`px-3 md:px-8 py-4 flex items-center gap-3 ${idx === 0 ? "mt-6" : ""} ${idx !== comparisonData.length - 1 ? "border-b border-gray-200" : ""}`}>
                    <CrossIcon />
                    <span className="text-[14px] font-medium text-[#111] font-['Switzer'] leading-snug">{row.otherAgencies}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
