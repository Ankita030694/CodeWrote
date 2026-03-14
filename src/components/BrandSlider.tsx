"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const brandAssets = [
  { src: "/assets/Credsettle Logo 3.svg", alt: "Credsettle Logo" },
  { src: "/assets/Group 130 2.svg", alt: "Group 130" },
  { src: "/assets/Group 133 2.svg", alt: "Group 133" },
  { src: "/assets/Group 134 2.svg", alt: "Group 134" },
  { src: "/assets/Group 136 1.svg", alt: "Group 136" },
  { src: "/assets/Group 151.svg", alt: "Group 151" },
  { src: "/assets/Group 214.svg", alt: "Group 214" },
  { src: "/assets/Group 216.svg", alt: "Group 216" },
  { src: "/assets/16 1.png", alt: "16 1" },
  { src: "/assets/logo-white.png", alt: "Logo White" },
  { src: "/assets/mil-logo 1.png", alt: "Mil Logo" },
  { src: "/assets/Clip path group.svg", alt: "Rectangle" },
  { src: "/assets/17 1.svg", alt: "Rectangle 1" },
  { src: "/assets/16 1.svg", alt: "Rectangle 1" },
  { src: "/assets/10 1.svg", alt: "Rectangle 1" },
  { src: "/assets/9 1.svg", alt: "Rectangle 1" }
];

// Duplicate brands to create a seamless loop
const duplicatedBrands = [...brandAssets, ...brandAssets, ...brandAssets];

export default function BrandSlider() {
  return (
    <div className="w-full py-10 border-y border-gray-100 bg-white overflow-hidden relative">
      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8 lg:px-[140px] px-4">
        {/* Left Side Label */}
        <div className="flex-shrink-0 flex items-center gap-2 pr-4 md:pr-8 bg-white z-10">
          <span className="text-[25px] leading-[25px] font-normal text-[#A1A1A1] font-['Switzer'] whitespace-nowrap">
            BRANDS LOVE
          </span>
          <span className="text-[25px] leading-[25px] font-semibold text-[#000] font-['Switzer'] whitespace-nowrap">
            CODEWROTE
          </span>
        </div>

        {/* Marquee Container */}
        <div className="flex-grow overflow-hidden relative h-[56px] flex items-center">
          {/* Gradient Overlays for smooth entry/exit */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-20" />
          
          <motion.div
            className="flex items-center gap-11 whitespace-nowrap"
            animate={{
              x: ["0%", "-33.33%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={index}
                className="flex flex-shrink-0 items-center justify-center min-w-[80px]"
              >
                <div className="relative h-8 w-[90px] grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
