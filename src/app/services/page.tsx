"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function ServicePage() {
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
    <div className="min-h-screen bg-[#f4f4f4] flex flex-col font-['Switzer'] font-[500] text-[#1a1a1a]">
      <Navbar />

      <main className="flex-1 flex flex-col justify-between px-6 md:px-16 lg:px-32 xl:px-35 pt-40 md:pt-22 pb-16 w-full mx-auto max-w-[1920px]">

        {/* Top Section */}
        <div className="flex flex-col items-start justify-center mt-10 md:mt-20">
          <h1 className="text-[45px] md:text-[76px] lg:text-[80px] leading-[1.05] tracking-tight text-[#1a1a1a] mb-6 font-medium">
            Services That Hit Different.<br />
            <span className="text-[#E61F93]">Built to Scale Fast.</span>
          </h1>

          <p className="text-[#4a4a4a] text-[18px] md:text-[20px] lg:text-[22px] max-w-full md:max-w-[900px] leading-[1.4] mb-10 md:mb-14 px-2 md:px-0 font-medium">
            No fluff. Just high-impact design, smart development, and systems that<br className="hidden md:block" /> help you launch, grow, and win online.
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
        <div className="flex justify-end w-full mb-8 lg:mb-12 mt-16 lg:mt-18">
          <p className="text-[#a1a1aa] text-[22px] md:text-[24px] lg:text-[28px] xl:text-[32px] leading-[1.2] max-w-[600px] text-right tracking-tight font-medium px-4 md:px-0">
            Strategy first. Clean design. Smooth<br className="hidden lg:block" /> development. <span className="text-[#1a1a1a]">Real growth no noise.</span>
          </p>
        </div>

        {/* Services Section Header */}
        <section className="mt-24 md:mt-32 w-full pb-12">
          <div className="flex flex-col items-start gap-3 md:gap-4 px-2 md:px-0">
            <span className="text-[#a1a1aa] text-[18px] md:text-[20px] font-medium tracking-wide">
              {"{ Services }"}
            </span>
            <h2 className="text-[48px] md:text-[64px] lg:text-[76px] leading-[1.05] tracking-tight font-medium text-[#a1a1aa]">
              Everything You<br/>
              <span className="text-[#1a1a1a]">Need to Grow</span>
            </h2>
          </div>
        </section>

      </main>

      <section className="w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-32 xl:px-35 pb-20">
        <div className="w-full border-t border-[#d4d4d8] pt-12 md:pt-16 mb-20 px-2 md:px-0">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
            {/* Column 1 */}
            <div className="lg:w-[22%] shrink-0">
              <h3 className="text-[28px] md:text-[32px] font-medium text-[#1a1a1a]">
                UI/UX Design
              </h3>
            </div>

            {/* Column 2 */}
            <div className="lg:w-[48%]">
              <img 
                src="/assets/services-page/d5c281aa5ccb60c14e9873a119c70d01d106fa89.png" 
                alt="UI/UX Design Showcase" 
                className="w-full rounded-[24px] md:rounded-[32px] object-cover shadow-sm"
              />
            </div>

            {/* Column 3 */}
            <div className="lg:w-[30%] flex flex-col pt-2 lg:pt-0">
              <div className="h-[1px] bg-[#d4d4d8] w-full mb-8"></div>
              
              <p className="text-[#a1a1aa] text-[18px] md:text-[20px] leading-[1.4] mb-8 font-medium">
                User-focused interfaces designed for clarity, smooth navigation, and better conversions. From wireframes to final UI, crafted to improve usability and product experience.
              </p>

              <div className="flex flex-col gap-4 mb-10 w-full">
                <div className="flex justify-between items-center w-full text-[16px] md:text-[18px] font-medium">
                  <span className="text-[#1a1a1a]">Timeline</span>
                  <span className="text-[#a1a1aa]">5 - 7 Days</span>
                </div>
                <div className="flex justify-between items-center w-full text-[16px] md:text-[18px] font-medium">
                  <span className="text-[#1a1a1a]">Deliverables</span>
                  <span className="text-[#a1a1aa] text-right">Wireframes &bull; High-fidelity UI</span>
                </div>
              </div>

              <Link href="/contact">
                <button
                  className="px-8 py-[14px] md:py-[16px] font-bold text-white text-[15px] md:text-[16px] hover:scale-[1.02] active:scale-[0.98] transition-all w-fit"
                  style={{
                    borderRadius: "45px",
                    background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                    boxShadow: "0 10px 24px 0 rgba(230, 31, 147, 0.4), 0 -3px 13.8px 0 rgba(232, 232, 232, 0.76) inset, 0 4px 13.8px 0 rgba(232, 232, 232, 0.76) inset"
                  }}
                >
                  Start UI/UX Project
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Service 2: Custom Websites */}
        <div className="w-full border-t border-[#d4d4d8] pt-12 md:pt-16 mb-20 px-2 md:px-0">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
            {/* Column 1 */}
            <div className="lg:w-[22%] shrink-0">
              <h3 className="text-[28px] md:text-[32px] font-medium text-[#1a1a1a]">
                Custom<br />Websites
              </h3>
            </div>

            {/* Column 2 */}
            <div className="lg:w-[48%]">
              <img 
                src="/assets/services-page/custom.png" 
                alt="Custom Websites Showcase" 
                className="w-full rounded-[24px] md:rounded-[32px] object-cover shadow-sm"
              />
            </div>

            {/* Column 3 */}
            <div className="lg:w-[30%] flex flex-col pt-2 lg:pt-0">
              <div className="h-[1px] bg-[#d4d4d8] w-full mb-8"></div>

              <p className="text-[#a1a1aa] text-[18px] md:text-[20px] leading-[1.4] mb-8 font-medium">
                Fully custom websites tailored to your brand and business goals. Designed for performance, scalability, and a strong digital presence without templates.
              </p>

              <div className="flex flex-col gap-4 mb-10 w-full">
                <div className="flex justify-between items-center w-full text-[16px] md:text-[18px] font-medium">
                  <span className="text-[#1a1a1a]">Timeline</span>
                  <span className="text-[#a1a1aa]">6 - 10 Days</span>
                </div>
                <div className="flex justify-between items-center w-full text-[16px] md:text-[18px] font-medium">
                  <span className="text-[#1a1a1a]">Includes</span>
                  <span className="text-[#a1a1aa] text-right">Custom design &bull; Development</span>
                </div>
              </div>

              <Link href="/contact">
                <button
                  className="px-8 py-[14px] md:py-[16px] font-bold text-white text-[15px] md:text-[16px] hover:scale-[1.02] active:scale-[0.98] transition-all w-fit"
                  style={{
                    borderRadius: "45px",
                    background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                    boxShadow: "0 10px 24px 0 rgba(230, 31, 147, 0.4), 0 -3px 13.8px 0 rgba(232, 232, 232, 0.76) inset, 0 4px 13.8px 0 rgba(232, 232, 232, 0.76) inset"
                  }}
                >
                  Get Custom Website
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Service 3: App Development */}
        <div className="w-full border-t border-[#d4d4d8] pt-12 md:pt-16 mb-20 px-2 md:px-0">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
            {/* Column 1 */}
            <div className="lg:w-[22%] shrink-0">
              <h3 className="text-[28px] md:text-[32px] font-medium text-[#1a1a1a]">
                App<br />Development
              </h3>
            </div>

            {/* Column 2 */}
            <div className="lg:w-[48%]">
              <img 
                src="/assets/services-page/app.jpg" 
                alt="App Development Showcase" 
                className="w-full rounded-[24px] md:rounded-[32px] object-cover shadow-sm"
              />
            </div>

            {/* Column 3 */}
            <div className="lg:w-[30%] flex flex-col pt-2 lg:pt-0">
              <div className="h-[1px] bg-[#d4d4d8] w-full mb-8"></div>

              <p className="text-[#a1a1aa] text-[18px] md:text-[20px] leading-[1.4] mb-8 font-medium">
                Scalable web and mobile applications built for usability, performance, and future growth. Ideal for startups launching MVPs or full-featured platforms.
              </p>

              <div className="flex flex-col gap-4 mb-10 w-full">
                <div className="flex justify-between items-center w-full text-[16px] md:text-[18px] font-medium">
                  <span className="text-[#1a1a1a]">Timeline</span>
                  <span className="text-[#a1a1aa]">10 - 18 Days</span>
                </div>
                <div className="flex justify-between items-center w-full text-[16px] md:text-[18px] font-medium">
                  <span className="text-[#1a1a1a]">Includes</span>
                  <span className="text-[#a1a1aa] text-right">Frontend &bull; Backend integration</span>
                </div>
              </div>

              <Link href="/contact">
                <button
                  className="px-8 py-[14px] md:py-[16px] font-bold text-white text-[15px] md:text-[16px] hover:scale-[1.02] active:scale-[0.98] transition-all w-fit"
                  style={{
                    borderRadius: "45px",
                    background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                    boxShadow: "0 10px 24px 0 rgba(230, 31, 147, 0.4), 0 -3px 13.8px 0 rgba(232, 232, 232, 0.76) inset, 0 4px 13.8px 0 rgba(232, 232, 232, 0.76) inset"
                  }}
                >
                  Build My App
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Service 4: Custom Software */}
        <div className="w-full border-t border-[#d4d4d8] pt-12 md:pt-16 mb-10 px-2 md:px-0">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
            {/* Column 1 */}
            <div className="lg:w-[22%] shrink-0">
              <h3 className="text-[28px] md:text-[32px] font-medium text-[#1a1a1a]">
                Custom<br />Software
              </h3>
            </div>

            {/* Column 2 */}
            <div className="lg:w-[48%]">
              <img 
                src="/assets/services-page/custom-software.png" 
                alt="Custom Software Showcase" 
                className="w-full rounded-[24px] md:rounded-[32px] object-cover shadow-sm"
              />
            </div>

            {/* Column 3 */}
            <div className="lg:w-[30%] flex flex-col pt-2 lg:pt-0">
              <div className="h-[1px] bg-[#d4d4d8] w-full mb-8"></div>

              <p className="text-[#a1a1aa] text-[18px] md:text-[20px] leading-[1.4] mb-8 font-medium">
                Tailored software solutions to automate workflows, manage operations, and improve efficiency. Built for reliability, scalability, and long-term business growth.
              </p>

              <div className="flex flex-col gap-4 mb-10 w-full">
                <div className="flex justify-between items-center w-full text-[16px] md:text-[18px] font-medium">
                  <span className="text-[#1a1a1a]">Timeline</span>
                  <span className="text-[#a1a1aa]">12 - 20 Days</span>
                </div>
                <div className="flex justify-between items-center w-full text-[16px] md:text-[18px] font-medium">
                  <span className="text-[#1a1a1a]">Includes</span>
                  <span className="text-[#a1a1aa] text-right">Automation &bull; Integrations</span>
                </div>
              </div>

              <Link href="/contact">
                <button
                  className="px-8 py-[14px] md:py-[16px] font-bold text-white text-[15px] md:text-[16px] hover:scale-[1.02] active:scale-[0.98] transition-all w-fit"
                  style={{
                    borderRadius: "45px",
                    background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                    boxShadow: "0 10px 24px 0 rgba(230, 31, 147, 0.4), 0 -3px 13.8px 0 rgba(232, 232, 232, 0.76) inset, 0 4px 13.8px 0 rgba(232, 232, 232, 0.76) inset"
                  }}
                >
                  Get Custom Software
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Service 5: Shopify Development */}
        <div className="w-full border-t border-[#d4d4d8] pt-12 md:pt-16 mb-20 px-2 md:px-0">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
            {/* Column 1 */}
            <div className="lg:w-[22%] shrink-0">
              <h3 className="text-[28px] md:text-[32px] font-medium text-[#1a1a1a]">
                Shopify<br />Development
              </h3>
            </div>

            {/* Column 2 */}
            <div className="lg:w-[48%]">
              <img 
                src="/assets/services-page/shopofy.png" 
                alt="Shopify Development Showcase" 
                className="w-full rounded-[24px] md:rounded-[32px] object-cover shadow-sm"
              />
            </div>

            {/* Column 3 */}
            <div className="lg:w-[30%] flex flex-col pt-2 lg:pt-0">
              <div className="h-[1px] bg-[#d4d4d8] w-full mb-8"></div>

              <p className="text-[#a1a1aa] text-[18px] md:text-[20px] leading-[1.4] mb-8 font-medium">
                Conversion-optimized Shopify stores with custom layouts, product setup, and seamless checkout experience. Designed to help eCommerce brands launch and grow faster
              </p>

              <div className="flex flex-col gap-4 mb-10 w-full">
                <div className="flex justify-between items-center w-full text-[16px] md:text-[18px] font-medium">
                  <span className="text-[#1a1a1a]">Timeline</span>
                  <span className="text-[#a1a1aa]">5 - 8 Days</span>
                </div>
                <div className="flex justify-between items-center w-full text-[16px] md:text-[18px] font-medium">
                  <span className="text-[#1a1a1a]">Includes</span>
                  <span className="text-[#a1a1aa] text-right">Custom theme &bull; Product setup</span>
                </div>
              </div>

              <Link href="/contact">
                <button
                  className="px-8 py-[14px] md:py-[16px] font-bold text-white text-[15px] md:text-[16px] hover:scale-[1.02] active:scale-[0.98] transition-all w-fit"
                  style={{
                    borderRadius: "45px",
                    background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                    boxShadow: "0 10px 24px 0 rgba(230, 31, 147, 0.4), 0 -3px 13.8px 0 rgba(232, 232, 232, 0.76) inset, 0 4px 13.8px 0 rgba(232, 232, 232, 0.76) inset"
                  }}
                >
                  Launch My Store
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Service 6: WordPress Development */}
        <div className="w-full border-t border-[#d4d4d8] pt-12 md:pt-16 mb-20 px-2 md:px-0">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
            {/* Column 1 */}
            <div className="lg:w-[22%] shrink-0">
              <h3 className="text-[28px] md:text-[32px] font-medium text-[#1a1a1a]">
                WordPress<br />Development
              </h3>
            </div>

            {/* Column 2 */}
            <div className="lg:w-[48%]">
              <img 
                src="/assets/services-page/wordpress.jpg" 
                alt="WordPress Development Showcase" 
                className="w-full rounded-[24px] md:rounded-[32px] object-cover shadow-sm"
              />
            </div>

            {/* Column 3 */}
            <div className="lg:w-[30%] flex flex-col pt-2 lg:pt-0">
              <div className="h-[1px] bg-[#d4d4d8] w-full mb-8"></div>

              <p className="text-[#a1a1aa] text-[18px] md:text-[20px] leading-[1.4] mb-8 font-medium">
                Flexible WordPress websites with custom design, easy content management, and optimized performance. Perfect for businesses needing control and scalability.
              </p>

              <div className="flex flex-col gap-4 mb-10 w-full">
                <div className="flex justify-between items-center w-full text-[16px] md:text-[18px] font-medium">
                  <span className="text-[#1a1a1a]">Timeline</span>
                  <span className="text-[#a1a1aa]">4 - 7 Days</span>
                </div>
                <div className="flex justify-between items-center w-full text-[16px] md:text-[18px] font-medium">
                  <span className="text-[#1a1a1a]">Includes</span>
                  <span className="text-[#a1a1aa] text-right">CMS setup &bull; SEO-ready</span>
                </div>
              </div>

              <Link href="/contact">
                <button
                  className="px-8 py-[14px] md:py-[16px] font-bold text-white text-[15px] md:text-[16px] hover:scale-[1.02] active:scale-[0.98] transition-all w-fit"
                  style={{
                    borderRadius: "45px",
                    background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                    boxShadow: "0 10px 24px 0 rgba(230, 31, 147, 0.4), 0 -3px 13.8px 0 rgba(232, 232, 232, 0.76) inset, 0 4px 13.8px 0 rgba(232, 232, 232, 0.76) inset"
                  }}
                >
                  Start WordPress Site
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Service 7: Framer Development */}
        <div className="w-full border-t border-[#d4d4d8] pt-12 md:pt-16 mb-10 px-2 md:px-0">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
            {/* Column 1 */}
            <div className="lg:w-[22%] shrink-0">
              <h3 className="text-[28px] md:text-[32px] font-medium text-[#1a1a1a]">
                Framer<br />Development
              </h3>
            </div>

            {/* Column 2 */}
            <div className="lg:w-[48%]">
              <img 
                src="/assets/services-page/framer.jpg" 
                alt="Framer Development Showcase" 
                className="w-full rounded-[24px] md:rounded-[32px] object-cover shadow-sm"
              />
            </div>

            {/* Column 3 */}
            <div className="lg:w-[30%] flex flex-col pt-2 lg:pt-0">
              <div className="h-[1px] bg-[#d4d4d8] w-full mb-8"></div>

              <p className="text-[#a1a1aa] text-[18px] md:text-[20px] leading-[1.4] mb-8 font-medium">
                Fast, responsive Framer websites with smooth animations, clean structure, and CMS support. Built for performance, scalability, and modern brand presence.
              </p>

              <div className="flex flex-col gap-4 mb-10 w-full">
                <div className="flex justify-between items-center w-full text-[16px] md:text-[18px] font-medium">
                  <span className="text-[#1a1a1a]">Timeline</span>
                  <span className="text-[#a1a1aa]">7 - 8 Days</span>
                </div>
                <div className="flex justify-between items-center w-full text-[16px] md:text-[18px] font-medium">
                  <span className="text-[#1a1a1a]">Includes</span>
                  <span className="text-[#a1a1aa] text-right">Animations &bull; CMS setup</span>
                </div>
              </div>

              <Link href="/contact">
                <button
                  className="px-8 py-[14px] md:py-[16px] font-bold text-white text-[15px] md:text-[16px] hover:scale-[1.02] active:scale-[0.98] transition-all w-fit"
                  style={{
                    borderRadius: "45px",
                    background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                    boxShadow: "0 10px 24px 0 rgba(230, 31, 147, 0.4), 0 -3px 13.8px 0 rgba(232, 232, 232, 0.76) inset, 0 4px 13.8px 0 rgba(232, 232, 232, 0.76) inset"
                  }}
                >
                  Build in Framer
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & CTA Section */}
      <section className="bg-white w-full py-24 md:py-32">
        <div className="w-full mx-auto px-[40px] lg:px-[140px] max-w-[1920px] flex flex-col">
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
      </section>


      <CTASection />
      <Footer />
    </div>
  );
}
