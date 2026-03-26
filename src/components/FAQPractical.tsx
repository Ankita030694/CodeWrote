"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
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

interface FAQPracticalProps {
  faqs?: FAQItem[];
}

export default function FAQPractical({ faqs = defaultFaqs }: FAQPracticalProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full mx-auto px-8 md:px-12 max-w-8xl mt-32 pb-16 font-['Switzer']">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#1a1a1a] tracking-tight mb-4 leading-[1.1]">
          Practical Info & <span className="text-[#a1a1aa] font-medium font-sans">Clarifications.</span>
        </h2>
        <p className="text-[#1a1a1a] text-lg md:text-[20px] font-medium tracking-tight">
          No fluff. Just straight answers.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Accordions */}
        <div className="lg:w-[65%] flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="bg-[#f4f4f4] rounded-[1.5rem] px-6 py-5 md:px-8 md:py-6 flex flex-col cursor-pointer transition-colors"
                onClick={() => setOpenFaq(isOpen ? null : i)}
              >
                <div className="flex justify-between items-center w-full">
                  <span className="text-lg md:text-[22px] text-[#1a1a1a] font-medium tracking-tight pr-4">
                    {faq.question}
                  </span>
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white shrink-0 shadow-[0_8px_16px_rgba(230,31,147,0.35)] transition-transform duration-300"
                    style={{
                      background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                    }}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 5v14m0 0l-5-5m5 5l5-5"></path>
                    </svg>
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#888888] text-base md:text-[17px] leading-relaxed pr-8 md:pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right Column - CTA Card */}
        <div className="lg:w-[35%] w-full lg:h-fit lg:self-center bg-[#f4f4f4] rounded-[2rem] p-8 md:p-10 flex flex-col items-center justify-center text-center">
          <h4 className="text-xl md:text-[22px] text-[#9ca3af] font-medium tracking-tight mb-1">Need more clarity?</h4>
          <h3 className="text-2xl md:text-[28px] font-bold text-[#1a1a1a] mb-8 tracking-tight">Let's talk.</h3>

          <Link href="/contact" className="w-full">
            <button
              className="w-full mt-auto py-4 md:py-5 font-bold text-white text-lg md:text-[20px] hover:scale-[1.02] active:scale-[0.98] transition-all"
              style={{
                borderRadius: "45px",
                background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                boxShadow: "0 10px 24px 0 rgba(230, 31, 147, 0.4), 0 -3px 13.8px 0 rgba(232, 232, 232, 0.76) inset, 0 4px 13.8px 0 rgba(232, 232, 232, 0.76) inset"
              }}
            >
              Schedule a call
            </button>
          </Link>

          <p className="mt-8 text-[#9ca3af] text-sm md:text-base font-medium">
            or email us at<br />
            <a href="mailto:hello@codewrote.com" className="text-[#1a1a1a] hover:text-[#E61F93] transition-colors mt-1 inline-block">hello@codewrote.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
