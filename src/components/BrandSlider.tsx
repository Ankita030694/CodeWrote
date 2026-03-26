"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const brandAssets = [
  { src: "/assets/1.svg", alt: "Credsettle Logo" },
  { src: "/assets/2.svg", alt: "Group 130" },
  { src: "/assets/3.svg", alt: "Group 133" },
  { src: "/assets/4.svg", alt: "Group 134" },
  { src: "/assets/5.svg", alt: "Group 136" },
  { src: "/assets/6.svg", alt: "Group 151" },
  { src: "/assets/7.svg", alt: "Group 214" },
  { src: "/assets/8.svg", alt: "Group 216" },
  { src: "/assets/10.svg", alt: "Logo White" },
  { src: "/assets/11.svg", alt: "Mil Logo" },
  { src: "/assets/12.svg", alt: "Rectangle" },
  { src: "/assets/13.svg", alt: "Rectangle 1" },
  { src: "/assets/9.svg", alt: "Rectangle 1" },
  { src: "/assets/14.svg", alt: "Rectangle 1" },
  { src: "/assets/15.svg", alt: "Rectangle 1" }
];

// Duplicate brands to create a seamless loop
const duplicatedBrands = [...brandAssets, ...brandAssets, ...brandAssets];

interface BrandSliderProps {
  transparent?: boolean;
  hideLabel?: boolean;
}

export default function BrandSlider({ transparent = false, hideLabel = false }: BrandSliderProps = {}) {
  return (
    <div className={`w-full flex justify-center overflow-hidden relative ${transparent ? 'py-4' : 'py-10 border-y border-gray-100 bg-white'}`}>
      <div className={`flex flex-col md:flex-row items-center gap-5 md:gap-8 px-4 w-full ${hideLabel ? 'max-w-[1200px]' : 'lg:px-[140px]'}`}>
        {/* Left Side Label */}
        {!hideLabel && (
          <div className={`flex-shrink-0 flex items-center gap-2 pr-4 md:pr-8 z-10 ${transparent ? '' : 'bg-white'}`}>
            <span className="text-[20px] md:text-[30px] md:leading-[35px] font-normal text-[#A1A1A1] font-['Switzer'] whitespace-nowrap">
              BRANDS LOVE
            </span>
            <span className="text-[20px] md:text-[30px] leading-[35px] font-semibold text-[#000] font-['Switzer'] whitespace-nowrap">
              CODEWROTE
            </span>
          </div>
        )}

        {/* Marquee Container */}
        <div 
          className="flex-grow overflow-hidden relative h-20 flex items-center w-full"
          style={transparent ? {
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          } : undefined}
        >
          {/* Gradient Overlays for smooth entry/exit */}
          {!transparent && (
            <>
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-20" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-20" />
            </>
          )}
          
          <motion.div
            className="flex items-center gap-11 whitespace-nowrap will-change-transform"
            style={{ 
              transform: "translateZ(0)",
              backfaceVisibility: "hidden"
            }}
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
                className="flex flex-shrink-0 items-center justify-center min-w-[80px] md:min-w-[100px]"
                style={{ transform: "translateZ(0)" }}
              >
                <div className="relative h-8 w-[100px] md:h-14 md:w-[120px] grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
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
