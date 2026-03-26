"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandSlider from "@/components/BrandSlider";
import CTASection from "@/components/CTASection";
import Link from "next/link";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutUsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who do you usually work with?",
      answer: "Startups, creators, and growing brands that want clean design and smart systems, not just pretty screens."
    },
    {
      question: "What tools do you find most effective?",
      answer: "Startups, creators, and growing brands that want clean design and smart systems, not just pretty screens."
    },
    {
      question: "How do you measure project success?",
      answer: "Startups, creators, and growing brands that want clean design and smart systems, not just pretty screens."
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-['Switzer'] font-[500] text-[#1a1a1a]">
      <Navbar />

      <main className="flex-1 flex flex-col justify-between px-6 md:px-16 lg:px-32 xl:px-35 pt-45 md:pt-46 pb-16 w-full mx-auto max-w-[1920px]">

        {/* Top Section */}
        <div className="flex flex-col items-start justify-center order-1 md:order-none">
          <h1 className="text-[45px] md:text-[76px] lg:text-[80px] leading-[1.05] tracking-tight text-[#1a1a1a] mb-6 font-medium">
            Crafting Brands.<br />
            Building <span className="text-[#E61F93]">Digital Impact.</span>
          </h1>

          <p className="text-[#4a4a4a] text-[20px] md:text-[20px] lg:text-[22px] max-w-[800px] leading-[1.4] mb-10 md:mb-14 px-2 md:px-0">
            From concept to launch, we create purposeful digital experiences designed to convert, automate, and scale.
          </p>

          <Link href="/contact">
            <button
              className="px-10 mx-1 md:mx-0 py-[18px] font-bold text-white text-base md:text-[18px] hover:scale-[1.02] active:scale-[0.98] transition-all w-fit"
              style={{
                borderRadius: "45px",
                background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                boxShadow: "0 10px 24px 0 rgba(230, 31, 147, 0.4), 0 -3px 13.8px 0 rgba(232, 232, 232, 0.76) inset, 0 4px 13.8px 0 rgba(232, 232, 232, 0.76) inset"
              }}
            >
              Start Your Project
            </button>
          </Link>
        </div>

        {/* Bottom Right Quote Section */}
        <div className="flex justify-end w-full mt-24 lg:mt-8 order-2 md:order-none">
          <p className="text-[#a1a1aa] text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] leading-[1.2] max-w-[900px] text-right tracking-tight font-medium px-4 md:px-0">
            Driven by <span className="text-[#1a1a1a]">strategy</span>, powered by<br className="block md:hidden" /> <span className="text-[#1a1a1a]">design &<br className="hidden md:block" /> development</span>, and focused<br className="block md:hidden" /> on measurable<br className="hidden md:block" /> <span className="text-[#1a1a1a]">business growth.</span>
          </p>
        </div>

        {/* Why Brands Choose Us Section */}
        <section className="mt-32 w-full pt-12 pb-12 order-3 md:order-none">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 mb-10 w-full">
            <h2 className="text-[48px] md:text-[64px] lg:text-[76px] leading-[1.0] tracking-tight font-medium px-2 md:px-0">
              <span className="text-[#1a1a1a]">Why Brands</span><br />
              <span className="text-[#a1a1aa]">Choose Us</span>
            </h2>
            <div className="flex flex-col items-start gap-5 lg:gap-6 lg:max-w-[460px] lg:pt-4">
              <p className="text-[#4a4a4a] text-[19px] md:text-[18px] lg:text-[20px] leading-[1.4] font-medium px-2 md:px-0">
                We don't just deliver visuals we create systems<br className="block md:hidden" /> that convert, scale, and drive real business<br className="block md:hidden" /> impact.
              </p>
              <Link href="/contact">
                <button
                  className="px-8 py-3.5 font-bold text-white text-[16px] hover:scale-[1.02] active:scale-[0.98] transition-all w-fit mx-1 md:mx-0"
                  style={{
                    borderRadius: "45px",
                    background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                    boxShadow: "0 10px 24px 0 rgba(230, 31, 147, 0.4), 0 -3px 13.8px 0 rgba(232, 232, 232, 0.76) inset, 0 4px 13.8px 0 rgba(232, 232, 232, 0.76) inset"
                  }}
                >
                  Let's Build Together
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[574fr_854fr] gap-6 w-full max-w-[1452px] mx-auto mt-10">
            {/* Left Column */}
            <div className="flex flex-col gap-6 w-full">
              {/* Speed with Precision */}
              <div className="bg-[#f5f5f5] rounded-[32px] p-8 md:p-10 flex flex-col justify-end w-full aspect-[574/534] relative overflow-hidden group">
                <img
                  src="/assets/about us/lighting.svg"
                  alt="Lightning"
                  className="absolute top-0 left-0 max-w-[50%] h-auto md:max-w-[240px] xl:max-w-[300px] object-contain transition-transform duration-500 group-hover:scale-105"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)'
                  }}
                />
                <div className="relative z-10 mt-auto pt-24">
                  <h3 className="text-[28px] md:text-[32px] font-medium text-[#1a1a1a] mb-3">Speed with Precision</h3>
                  <p className="text-[#8e8e8e] text-[16px] md:text-[18px] leading-[1.4] max-w-[95%]">
                    We move fast, but never compromise on quality. Every deliverable is built with clarity, purpose, and performance in mind.
                  </p>
                </div>
              </div>

              {/* Long-Term Partnership */}
              <div className="bg-[#f5f5f5] rounded-[32px] p-8 md:p-10 flex flex-col justify-end w-full aspect-[574/490] relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[65%] max-w-full mx-auto px-8 md:px-10">
                  <img src="/assets/about us/handhake.svg" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" alt="Handshake" />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f5f5f5] to-transparent"></div>
                </div>
                <div className="relative z-10 mt-auto pt-32">
                  <h3 className="text-[28px] md:text-[32px] font-medium text-[#1a1a1a] mb-3">Long-Term Partnership</h3>
                  <p className="text-[#8e8e8e] text-[16px] md:text-[18px] leading-[1.4] max-w-[95%]">
                    More than a one-time project, we support your growth with strategy, design, and development working together.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 w-full">
              {/* Flexible Collaboration */}
              <div className="bg-[#f5f5f5] rounded-[32px] p-8 md:p-10 flex flex-col justify-between w-full aspect-[854/440]">
                <div>
                  <h3 className="text-[28px] md:text-[32px] font-medium text-[#1a1a1a] mb-3">Flexible Collaboration</h3>
                  <p className="text-[#a1a1aa] text-[16px] md:text-[18px] leading-[1.4] max-w-[85%]">
                    Get consistent access to design and development support that scales with your needs.
                  </p>
                </div>

                <div className="flex flex-col items-start md:items-end mt-12 w-full">
                  <ul className="flex flex-col gap-3.5 text-[#a1a1aa] text-[16px] font-medium">
                    <li className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#fbb041]"></span> Fast turnarounds
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#fbb041]"></span> Priority support
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#fbb041]"></span> Built for growing businesses
                    </li>
                  </ul>
                </div>
              </div>

              {/* Transparent Pricing */}
              <div
                className="rounded-[32px] p-8 md:p-10 flex flex-col justify-between w-full aspect-[854/590] relative overflow-hidden group"
                style={{
                  backgroundImage: "url('/assets/about us/Leather_wallet_holding_202603241646 1.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]/95"></div>

                <div className="relative z-10 self-end text-sm md:text-base font-medium text-white/90">
                  Built to scale with your business, not limit it.
                </div>

                <div className="relative z-10 mt-auto">
                  <h3 className="text-[28px] md:text-[32px] font-medium text-white mb-3">Transparent Pricing</h3>
                  <p className="text-white/80 text-[16px] md:text-[18px] leading-[1.4] max-w-[95%]">
                    No hidden costs. No confusing packages. Just flexible pricing aligned with your goals and project scope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact That Speaks Section Header */}
        <div className="mt-20 lg:mt-32 text-left md:text-center mb-12 md:mb-16 flex flex-col items-start md:items-center px-6 md:px-12 lg:px-20 w-full mx-auto max-w-[1452px] order-4 md:order-none">
          <h2 className="text-[40px] md:text-[56px] lg:text-[76px] font-medium leading-[1.0] tracking-tight mb-4">
            Impact That Speaks <span className="text-[#a1a1aa]">For Itself.</span>
          </h2>
          <p className="text-[#4a4a4a] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] max-w-[680px]">
            From first ideas to launched products, here's a snapshot of the momentum we're building and the results we deliver.
          </p>
        </div>

        {/* Impact That Speaks Colored Background Section */}
        <section className="w-full max-w-[1452px] mx-auto rounded-[32px] md:rounded-[40px] pt-16 lg:pt-20 pb-16 relative overflow-hidden order-5 md:order-none" style={{ background: "linear-gradient(135deg, #fff5f7 0%, #fff0f3 50%, #ffeaf0 100%)" }}>

          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#ffe4e6] rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#fce7f3] rounded-full blur-[120px] opacity-60"></div>

          <div className="relative z-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 lg:mb-32 px-6 md:px-12 lg:px-20">
              {/* Card 1 */}
              <div className="bg-white rounded-[32px] p-8 flex flex-col justify-between h-[340px] md:h-[380px] shadow-[0_12px_40px_rgba(0,0,0,0.04)] relative z-10 transition-transform duration-500 hover:-translate-y-2">
                <p className="text-[#4a4a4a] text-[14px] md:text-[15px] leading-[1.4] text-right ml-auto max-w-[95%] font-medium">Helping brands go from idea to launch, faster, smarter, and<br className="hidden lg:block" /> built to perform.</p>
                <h3 className="text-[40px] lg:text-[48px] font-medium leading-[1.05] tracking-tight text-[#1a1a1a]">80+<br />Projects<br />done</h3>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-[32px] p-8 flex flex-col justify-between h-[340px] md:h-[380px] lg:translate-y-12 shadow-[0_12px_40px_rgba(0,0,0,0.04)] relative z-10 transition-transform duration-500 hover:translate-y-10">
                <h3 className="text-[40px] lg:text-[48px] font-medium leading-[1.05] tracking-tight text-[#1a1a1a]">40+<br />Brand<br />Collabs</h3>
                <p className="text-[#4a4a4a] text-[14px] md:text-[15px] leading-[1.4] text-right ml-auto max-w-[95%] font-medium">Partnering with growing businesses to create bold,<br className="hidden lg:block" /> scalable digital experiences.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-[32px] p-8 flex flex-col justify-between h-[340px] md:h-[380px] shadow-[0_12px_40px_rgba(0,0,0,0.04)] relative z-10 transition-transform duration-500 hover:-translate-y-2">
                <p className="text-[#4a4a4a] text-[14px] md:text-[15px] leading-[1.4] text-right ml-auto max-w-[95%] font-medium">From startups to scaling companies across diverse<br className="hidden lg:block" /> markets.</p>
                <h3 className="text-[40px] lg:text-[48px] font-medium leading-[1.05] tracking-tight text-[#1a1a1a]">15+<br />Industries<br />Served</h3>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-[32px] p-8 flex flex-col justify-between h-[340px] md:h-[380px] lg:translate-y-12 shadow-[0_12px_40px_rgba(0,0,0,0.04)] relative z-10 transition-transform duration-500 hover:translate-y-10">
                <h3 className="text-[40px] lg:text-[48px] font-medium leading-[1.05] tracking-tight text-[#1a1a1a]">200+<br />UX Audits<br />done</h3>
                <p className="text-[#4a4a4a] text-[14px] md:text-[15px] leading-[1.4] text-right ml-auto max-w-[95%] font-medium">Optimizing user journeys to boost engagement and<br className="hidden lg:block" /> conversions.</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-[20px] md:text-[24px] font-medium text-[#1a1a1a] mb-6">Brands we've worked with.</h3>
              <div className="w-full relative z-0">
                <BrandSlider transparent hideLabel />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ & CTA Section */}
        <section className="mt-32 w-full pb-0 lg:pb-16 max-w-[1452px] mx-auto text-left order-6 md:order-none">
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
        </section>

      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
