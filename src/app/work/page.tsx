"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import FAQPractical from "@/components/FAQPractical";

export default function OurWorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [layout, setLayout] = useState("carousel"); // 'carousel' or 'grid'
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Most projects take between 4-8 weeks depending on complexity, features, and design requirements."
    },
    {
      question: "What is your development process?",
      answer: "We follow a structured phase-based approach: Discovery, Design, Development, Testing, and Deployment."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, we provide 30 days of complimentary support followed by flexible maintenance plans."
    }
  ];

  const categories = ["Web Apps", "Custom", "Framer", "WordPress", "Shopify"];

  const projects = [
    {
      id: 1,
      title: "CredSettle",
      category: "Web Apps",
      image: "/assets/project/be9706899244af1b1308806bc79ba38c35e79ca1.jpg",
    },
    {
      id: 2,
      title: "Jivo IT Solutions",
      category: "Custom",
      image: "/assets/project/Jivo.jpg",
    },
    {
      id: 3,
      title: "IPR Management",
      category: "Framer",
      image: "/assets/project/IPR.jpg",
    },
    {
      id: 4,
      title: "Financial Dashboard",
      category: "WordPress",
      image: "/assets/project/a66a1d1dcc1827bd19660a58c80322f8c54b2f48.jpg",
    },
    {
      id: 5,
      title: "E-commerce Platform",
      category: "Shopify",
      image: "/assets/project/c5a15d1bdfc4bd723e151869e29258f86b79b9a7.jpg",
    },
    {
      id: 6,
      title: "Cloud Services",
      category: "Web Apps",
      image: "/assets/project/73320c0b49b2e2e9597d2981f03d244e11474300.png",
    },
  ];

  // Filter projects
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Duplicate projects for seamless scroll
  const displayProjects = layout === "carousel" ? [...filteredProjects, ...filteredProjects] : filteredProjects;

  // Auto-scroll logic for carousel
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (layout !== "carousel" || isPaused || filteredProjects.length === 0) return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.8; // pixels per frame
    let animationFrameId: number;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [layout, isPaused, filteredProjects]);

  return (
    <div className="min-h-screen bg-white flex flex-col font-['Switzer'] overflow-x-hidden">
      <Navbar />

      <main className="flex-1 flex flex-col pt-40 md:pt-48 pb-32">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto px-6 text-[switzer]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[64px] md:text-[96px] lg:text-[110px]  leading-[1.05] tracking-tight text-[#1a1a1a] mb-8"
          >
            Our <span className="text-[#E61F93]">Work</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#111] text-xl md:text-[22px] font-medium leading-relaxed tracking-tight"
          >
            <p>80+ Projects Delivered.</p>
            <p>100+ Happy Clients.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 text-white font-bold text-xl md:text-2xl transition-all relative group"
                style={{
                  borderRadius: "45px",
                  background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                  boxShadow: "0 10px 24px 0 rgba(230, 31, 147, 0.4), 0 -3px 13.8px 0 rgba(232, 232, 232, 0.76) inset, 0 4px 13.8px 0 rgba(232, 232, 232, 0.76) inset"
                }}
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Controls Section */}
        <div className="flex justify-between items-center px-6 md:px-12 mb-16 max-w-[1400px] mx-auto w-full relative z-40">
          {/* Left: Filters */}
          <div className="flex items-center gap-5 relative">
            <button
              onClick={() => {
                setActiveFilter("All");
                setIsDropdownOpen(false);
              }}
              style={{
                background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                boxShadow: "0 4px 4.8px 0 rgba(255, 255, 255, 0.46) inset",
                filter: "drop-shadow(0 16px 25.5px rgba(0, 0, 0, 0.38))",
              }}
              className={`px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 active:scale-95 text-white`}
            >
              All
            </button>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{
                background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                boxShadow: "0 4px 4.8px 0 rgba(255, 255, 255, 0.46) inset",
                filter: "drop-shadow(0 16px 25.5px rgba(0, 0, 0, 0.38))",
              }}
              className="w-16 h-16 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 text-white"
            >
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 13l5 5 5-5M12 6v12" />
                </svg>
              </motion.div>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                  boxShadow: "0 4px 4.8px 0 rgba(255, 255, 255, 0.46) inset",
                  filter: "drop-shadow(0 16px 25.5px rgba(0, 0, 0, 0.38))",
                }}
                className="absolute top-[80px] left-0 w-[260px] rounded-[32px] p-4 flex flex-col gap-2 z-[50]"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveFilter(cat);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-6 py-3 rounded-2xl hover:bg-white/10 text-white text-xl font-medium transition-all"
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right: Layout Toggle */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setLayout("carousel")}
              style={layout === "carousel" ? {
                background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                boxShadow: "0 4px 4.8px 0 rgba(255, 255, 255, 0.46) inset",
                filter: "drop-shadow(0 16px 25.5px rgba(0, 0, 0, 0.38))",
              } : {
                background: "#E0E0E0",
                filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.1))",
              }}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-105 active:scale-95 ${layout === "carousel" ? "text-white" : "text-[#111]"
                }`}
            >
              <svg width="36" height="20" viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.6836 1.19043H1.18359V23.8095H23.6836V1.19043Z" stroke="currentColor" strokeWidth="4" />
                <path d="M43.8164 1.19043H21.3164V23.8095H43.8164V1.19043Z" stroke="currentColor" strokeWidth="4" />
              </svg>
            </button>
            <button
              onClick={() => setLayout("grid")}
              style={layout === "grid" ? {
                background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                boxShadow: "0 4px 4.8px 0 rgba(255, 255, 255, 0.46) inset",
                filter: "drop-shadow(0 16px 25.5px rgba(0, 0, 0, 0.38))",
              } : {
                background: "#E0E0E0",
                filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.1))",
              }}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-105 active:scale-95 ${layout === "grid" ? "text-white" : "text-[#111]"
                }`}
            >
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0909 22.6367H1V34.7276H13.0909V22.6367Z" stroke="currentColor" strokeWidth="2.5" />
                <path d="M23.9093 22.6367H11.8184V34.7276H23.9093V22.6367Z" stroke="currentColor" strokeWidth="2.5" />
                <path d="M34.7276 22.6367H22.6367V34.7276H34.7276V22.6367Z" stroke="currentColor" strokeWidth="2.5" />
                <path d="M13.0909 11.8184H1V23.9093H13.0909V11.8184Z" stroke="currentColor" strokeWidth="2.5" />
                <path d="M23.9093 11.8184H11.8184V23.9093H23.9093V11.8184Z" stroke="currentColor" strokeWidth="2.5" />
                <path d="M34.7276 11.8184H22.6367V23.9093H34.7276V11.8184Z" stroke="currentColor" strokeWidth="2.5" />
                <path d="M13.0909 1H1V13.0909H13.0909V1Z" stroke="currentColor" strokeWidth="2.5" />
                <path d="M23.9093 1H11.8184V13.0909H23.9093V1Z" stroke="currentColor" strokeWidth="2.5" />
                <path d="M34.7276 1H22.6367V13.0909H34.7276V1Z" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12">
          <div className="w-full overflow-hidden rounded-[48px]">
            {layout === "carousel" ? (
              <div
                ref={scrollRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="carousel-container overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing"
              >
                <div className="flex gap-6 md:gap-8 w-max pb-20">
                  {displayProjects.map((project, idx) => (
                    <div key={`${project.id}-${idx}`} className="w-[360px] md:w-[500px] flex-shrink-0 flex flex-col gap-5">
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.01 }}
                        className="w-full aspect-[16/10] rounded-[40px] overflow-hidden bg-[#E8EBF0] relative group shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-700"
                      >
                        <div className="w-full h-full flex items-center justify-center p-8 md:p-14">
                          <div className="w-full h-full bg-transparent flex items-center justify-center overflow-hidden relative">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-[92%] h-[92%] md:w-[85%] md:h-[85%] object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.2)]"
                            />
                          </div>
                        </div>
                      </motion.div>

                      <div className="flex justify-between items-center px-2">
                        <span className="text-[#1a1a1a] text-xl md:text-2xl font-bold tracking-tight">{project.title}</span>
                        <span className="text-[#a1a1aa] text-base md:text-lg font-medium tracking-tight">{"{"}{project.category}{"}"}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-12 pb-32">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="flex flex-row md:flex-col items-center md:items-stretch py-5 md:py-0 border-b border-[#dddddd] md:border-none gap-4 md:gap-5"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -10 }}
                      className="w-[115px] h-[115px] sm:w-[140px] sm:h-[140px] md:w-full md:h-auto md:aspect-[4/3] shrink-0 rounded-[16px] md:rounded-[32px] overflow-hidden bg-[#9CA3AF] md:bg-[#E8EBF0] relative group shadow-sm md:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.06)] transition-all duration-500 md:border md:border-gray-100/50"
                    >
                      <div className="w-full h-full flex items-center justify-center md:p-6 lg:p-8">
                        <div className="w-full h-full bg-transparent flex items-center justify-center overflow-hidden relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover md:w-[85%] md:h-[85%] md:object-contain md:drop-shadow-[0_20px_25px_rgba(0,0,0,0.12)]"
                          />
                        </div>
                      </div>
                    </motion.div>

                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center px-0 md:px-2 flex-1">
                      <span className="text-[#1a1a1a] text-[17px] md:text-xl font-medium md:font-bold tracking-tight">{project.title}</span>
                      <span className="text-[#a1a1aa] text-[14px] md:text-base font-medium tracking-tight mt-[2px] md:mt-0">{"{"}{project.category}{"}"}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <FAQPractical faqs={faqs} />

        <CTASection />
      </main>

      <Footer />

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
