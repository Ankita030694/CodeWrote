"use client";

import { motion } from "framer-motion";
import React from "react";

interface StatCard {
  value: string;
  title: string;
  description: string;
  yOffset?: string;
}

const stats: StatCard[] = [
  {
    value: "5+",
    title: "Years in the game",
    description: "Designing, building, and launching modern digital products for startups and businesses.",
    yOffset: "120px",
  },
  {
    value: "80+",
    title: "Projects launched",
    description: "Websites, web apps, Shopify stores, and CRM systems delivered and running.",
    yOffset: "80px",
  },
  {
    value: "40+",
    title: "Happy clients",
    description: "Founders, startups, and growing brands working with CodeWrote.",
    yOffset: "40px",
  },
  {
    value: "10+",
    title: "Technologies mastered",
    description: "From Framer and Shopify to full-stack web apps and automation systems.",
    yOffset: "0px",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full pt-11 pb-20 bg-white relative overflow-hidden">
      <div className="lg:px-[140px] px-6">
        {/* Heading */}
        <div className="mb-0">
          <h2 className="flex flex-col gap-0">
            <span className="text-[46px] leading-[46px] font-semibold text-[#A1A1A1] font-['Switzer']">
              STATS THAT
            </span>
            <span className="text-[46px] leading-[46px] font-semibold text-[#0F0F0F] font-['Switzer']">
              HIT
            </span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              style={{ marginTop: stat.yOffset }}
              className="relative group p-6 rounded-[28px] bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col items-center text-center min-h-[330px]"
            >
              {/* Strong Slanted Pink Glow */}
              <div className="absolute top-1/2 left-[-25%] w-[150%] h-[80px] -translate-y-1/2 -rotate-[15deg] bg-gradient-to-r from-transparent via-[#E61F93]/70 to-transparent blur-[40px] pointer-events-none" />
              
              {/* Core intense slanted line */}
              <div className="absolute top-1/2 left-[-25%] w-[150%] h-[20px] -translate-y-1/2 -rotate-[15deg] bg-[#E61F93]/25 blur-[25px] pointer-events-none" />

              <div className="relative z-10 mt-auto mb-auto">
                <span className="text-[51px] leading-none font-black text-[#0F0F0F] font-['Switzer'] block mb-4">
                  {stat.value}
                </span>
                <h3 className="text-[22px] leading-[1.2] font-bold text-[#0F0F0F] font-['Switzer'] mb-4 max-w-[140px] mx-auto">
                  {stat.title}
                </h3>
                <p className="text-[12px] text-gray-500 font-medium leading-relaxed max-w-[190px] mx-auto">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
