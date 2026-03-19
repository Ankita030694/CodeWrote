"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Section {
  id: string;
  title: string;
}

interface TOCProps {
  sections: Section[];
  orientation?: 'vertical' | 'horizontal';
}

export default function TableOfContents({ sections, orientation = 'horizontal' }: TOCProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth',
      });
    }
  };

  if (!sections || sections.length === 0) return null;

  if (orientation === 'vertical') {
    return (
      <aside className="w-full">
        <h3 className="text-[12px] font-black text-[#A1A1A1] uppercase tracking-[0.2em] mb-6 font-['Switzer']">
          On This Page
        </h3>
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => handleClick(e, section.id)}
                className={`text-[13px] font-bold font-['Switzer'] uppercase tracking-tight transition-all duration-300 block leading-[1.3] ${
                  activeId === section.id 
                    ? 'text-[#E61F93] translate-x-1' 
                    : 'text-[#4B5563] hover:text-black'
                }`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    );
  }

  // Mobile/Horizontal version
  return (
    <div className="p-8 rounded-[32px] bg-[#FAFAFA] border border-gray-100">
      <h3 className="text-[14px] font-black text-black uppercase tracking-[0.1em] mb-6 font-['Switzer'] flex items-center gap-2">
        <span className="w-4 h-[2px] bg-[#E61F93]"></span> Jump to Section
      </h3>
      <div className="flex flex-wrap gap-3">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleClick(e, section.id)}
            className={`px-4 py-2 rounded-full text-[12px] font-bold font-['Switzer'] uppercase border transition-all duration-300 ${
              activeId === section.id 
                ? 'bg-black text-white border-black' 
                : 'bg-white text-[#4B5563] border-gray-100 hover:border-[#E61F93]/30'
            }`}
          >
            {section.title}
          </a>
        ))}
      </div>
    </div>
  );
}
