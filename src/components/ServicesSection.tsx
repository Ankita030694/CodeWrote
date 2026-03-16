"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const tools = [
  { src: "/next.svg", name: "Next.js" },
  { src: "/assets/Tools SVG/Group 28.svg", name: "React" },
  { src: "/assets/Tools SVG/Vector.svg", name: "Figma" },
  { src: "/assets/Tools SVG/Group 25.svg", name: "Framer" },
  { src: "/assets/Tools SVG/Group 26.svg", name: "Shopify" },
  { src: "/assets/Tools SVG/Vector-4.svg", name: "Node.js" },
  { src: "/assets/Tools SVG/Vector-1.svg", name: "Docker" },
  { src: "/assets/Tools SVG/github.svg", name: "GitHub" },
  { src: "/assets/Tools SVG/wordpress.svg", name: "WordPress" },
  { src: "/assets/Tools SVG/Vector-2.svg", name: "Tailwind" },
  { src: "/assets/Tools SVG/Vector-3.svg", name: "Flutter" },
  { src: "/assets/Tools SVG/javascript.svg", name: "JavaScript" },
  { src: "/assets/Tools SVG/Vector-6.svg", name: "AWS" },
  { src: "/assets/Tools SVG/Vector-7.svg", name: "Cloud" },
  { src: "/assets/Tools SVG/Group 27.svg", name: "Firebase" },
  { src: "/assets/Tools SVG/Vector-8.svg", name: "MongoDB" },
  { src: "/assets/Tools SVG/Group.svg", name: "PostgreSQL" },
];

const services = [
  { icon: "/assets/serviceicons/Frame 427318388-5.svg", name: "UI/UX Design" },
  { icon: "/assets/serviceicons/Frame 427318388-4.svg", name: "Framer Development" },
  { icon: "/assets/serviceicons/Frame 427318388-3.svg", name: "Shopify Development" },
  { icon: "/assets/serviceicons/Frame 427318388 copy.svg", name: "Custom Websites" },
  { icon: "/assets/serviceicons/Frame 427318388-1.svg", name: "App Development" },
  { icon: "/assets/serviceicons/Frame 427318388.svg", name: "WordPress Development" },
  { icon: "/assets/serviceicons/Frame 427318388.png", name: "Custom Software" },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-20 bg-white relative overflow-hidden flex justify-center">
      <div className="max-w-[1200px] mx-auto lg:px-[140px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-11 lg:gap-16">

        {/* Left Column */}
        <div className="flex flex-col items-start gap-12 lg:gap-16">
          {/* Badge */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#E61F93] to-[#FF4FB1] text-white font-bold text-[15px] shadow-[0_10px_30px_rgba(230,31,147,0.4)]"
          >
            Explore All Services
          </motion.button>

          {/* Title */}
          <div className="mb-0">
            <h2 className="flex flex-col gap-0 uppercase">
              <span className="text-[56px] leading-[56px] font-semibold text-[#A1A1A1] font-['Switzer']">
                Services that
              </span>
              <span className="text-[56px] leading-[56px] font-semibold text-[#0F0F0F] font-['Switzer']">
                build <span className="font-bold">real products</span>
              </span>
            </h2>
          </div>

          {/* Tools Grid Area */}
          <div className="w-full flex flex-col gap-5">
            <h3 className="text-lg font-bold text-[#0F0F0F] font-['Switzer']">
              Tools we ship with
            </h3>
            <div className="grid grid-cols-6 md:grid-cols-7 gap-3">
              {tools.map((tool, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-14 h-14 md:w-13 md:h-13 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2 grayscale hover:grayscale-0 transition-all duration-300"
                  title={tool.name}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={tool.src.startsWith("/public") ? tool.src.replace("/public", "") : tool.src}
                      alt={tool.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-0.5 lg:pl-10 justify-start">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-4 p-1.5 rounded-2xl hover:bg-gray-50 transition-colors group cursor-pointer"
            >
              <div className="relative w-16 h-16 rounded-full bg-gray-50 border border-gray-100 overflow-hidden flex-shrink-0">
                <Image
                  src={service.icon}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-[19px] lg:text-[21px] font-medium text-[#0F0F0F] font-['Switzer'] group-hover:font-semibold transition-all leading-tight">
                {service.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
