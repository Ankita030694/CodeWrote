"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

// Inline SVG components
const PlusIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

const MinusIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services does CodeWrote provide?",
    answer: "CodeWrote offers a full suite of digital solutions, including custom web development, UI/UX design, mobile app development, Framer development, Shopify e-commerce stores, and WordPress websites. We specialize in turning complex ideas into high-performing, scalable products."
  },
  {
    question: "How long does it take to build a custom website or app?",
    answer: "The timeline depends on project complexity. A high-converting Framer or WordPress site typically takes 3 to 4 weeks, while a complex custom web application or mobile app may take 2-4 months. We provide detailed timelines during our initial strategy session."
  },
  {
    question: "Why should I choose Framer for my website?",
    answer: "Framer is ideal for high-impact landing pages and marketing sites. It allows for pixel-perfect design, lightning-fast performance, and superior animations. Plus, Framer sites are inherently SEO-friendly, with fast load times that search engines love."
  },
  {
    question: "Are your websites SEO-optimized?",
    answer: "Absolutely. Every project we ship includes technical SEO best practices: clean semantic HTML, fast loading speeds, mobile-first design, schema markup, and optimized metadata. We build with visibility in mind from day one."
  },
  {
    question: "Do you develop custom e-commerce stores on Shopify?",
    answer: "Yes, we are experts in Shopify development. We can build custom themes, set up advanced product filtering, and integrate third-party apps to create a seamless shopping experience that converts visitors into customers."
  },
  {
    question: "Can you help with WordPress development and security?",
    answer: "Definitely. We provide custom WordPress theme development, plugin integration, and site maintenance. We focus on performance and security, ensuring your WordPress site is robust, fast-loading, and secure from threats."
  },
  {
    question: "What is your UI/UX design process?",
    answer: "Our design process is user-centric. We start with research and wireframing, move to high-fidelity prototypes in Figma, and then gather feedback. Our goal is to create intuitive interfaces that enhance user engagement and drive results."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Yes, all our websites and applications are fully responsive. We design for a mobile-first world, ensuring your site looks and functions perfectly on smartphones, tablets, and desktops."
  },
  {
    question: "Do you offer custom software and CRM development?",
    answer: "Yes, we build tailor-made software solutions and CRM systems designed to fit your business workflows. Custom software eliminates the bloat of off-the-shelf products and gives you a competitive edge through efficiency and integration."
  },
  {
    question: "How do I get started with a project?",
    answer: "Getting started is easy. Click any of our 'Let's Build Something' buttons or contact us directly. We'll set up a discovery call to understand your goals, define the scope, and provide a transparent quote."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ Schema Markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="w-full py-20 bg-white" id="faqs">
      <div className="max-w-[1200px] mx-auto lg:px-[140px] px-6">
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <div className="flex flex-col mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#E61F93] font-bold text-sm uppercase tracking-widest mb-4 block"
          >
            Questions? We've Got Answers
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[56px] leading-[1.1] font-semibold text-[#0F0F0F] font-['Switzer'] uppercase"
          >
            Frequently Asked <span className="text-[#A1A1A1]">Questions</span>
          </motion.h2>
        </div>

        <div className="flex flex-col gap-4 mx-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border-b border-gray-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className={`text-lg lg:text-xl font-medium font-['Switzer'] transition-colors ${activeIndex === index ? 'text-[#E61F93]' : 'text-[#0F0F0F] group-hover:text-[#E61F93]'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all ${activeIndex === index ? 'bg-[#E61F93] text-white rotate-180' : 'bg-gray-50 text-[#A1A1A1]'}`}>
                  {activeIndex === index ? <MinusIcon size={20} /> : <PlusIcon size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-[#666666] leading-relaxed font-['Switzer'] max-w-[900px]">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
