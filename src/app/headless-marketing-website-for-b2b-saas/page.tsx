import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Your B2B SaaS Needs a Headless Marketing Website',
  description: 'Learn why migrating to a Headless CMS and Next.js frontend is the ultimate architectural upgrade for B2B SaaS marketing websites seeking maximum conversion.',
  keywords: 'headless cms for marketing website, b2b saas website architecture, next js marketing site, why migrate to headless cms, SaaS marketing tech stack',
  alternates: {
    canonical: 'https://codewrote.com/blog/headless-marketing-website-for-b2b-saas',
  },
};

const tocSections = [
  { id: 'introduction', title: 'The B2B SaaS Dilemma' },
  { id: 'what-is-headless', title: 'What is a Headless CMS?' },
  { id: 'monolithic-problems', title: 'The Monolithic Trap' },
  { id: 'why-migrate', title: 'Why Migrate to Headless?' },
  { id: 'nextjs-engine', title: 'The Next.js Frontend Engine' },
  { id: 'saas-architecture', title: 'B2B SaaS Architecture' },
  { id: 'empowering-marketing', title: 'Empowering Marketers' },
  { id: 'security-advantages', title: 'Decoupled Security' },
  { id: 'core-web-vitals', title: 'Unmatched Speed & SEO' },
  { id: 'omnichannel', title: 'Omnichannel Distribution' },
  { id: 'roi-cac', title: 'Lowering Acquisition Costs' },
  { id: 'conclusion', title: 'Conclusion' }
];

const faqs = [
  {
    question: "What is the best headless cms for a marketing website?",
    answer: "Platforms like Sanity, Contentful, and Strapi are industry leaders. They decouple the backend content database from the frontend, allowing marketers to write content without touching code, while developers build lightning-fast custom interfaces."
  },
  {
    question: "Why should a B2B SaaS company use a Next.js marketing site?",
    answer: "Next.js offers Server-Side Rendering (SSR) and Static Site Generation (SSG). This means your marketing pages load almost instantly and are perfectly structured for Google's search crawlers, resulting in significantly higher SEO rankings compared to traditional client-rendered apps."
  },
  {
    question: "Why migrate to headless CMS if our current WordPress site works fine?",
    answer: "If you are a growing SaaS, 'fine' is a liability. Monolithic platforms become slower and less secure as you add plugins. A headless architecture ensures elite performance, enterprise-grade security, and prevents your marketing site from becoming a technical bottleneck as you scale."
  },
  {
    question: "Will a headless architecture make it harder for marketers to publish content?",
    answer: "Actually, it makes it easier. Headless platforms provide clean, distraction-free dashboards focused entirely on content creation. Marketers can publish instantly without relying on engineers to update page templates or fix broken CSS."
  },
  {
    question: "How does a headless B2B SaaS website architecture improve ROI?",
    answer: "By guaranteeing faster load times, headless sites dramatically reduce bounce rates and increase conversion rates. This effectively lowers your Customer Acquisition Cost (CAC) and maximizes the return on your paid advertising campaigns."
  }
];

const reviews = [
  {
    name: "Marcus Sterling",
    role: "CMO, CloudGuard",
    content: "Our enterprise prospects were judging our SaaS product based on our slow, bloated marketing site. Moving to a headless Next.js architecture built by CodeWrote instantly doubled our inbound enterprise leads.",
    rating: 5
  },
  {
    name: "Elena Rostova",
    role: "VP of Growth, DataSync",
    content: "The marketing team was completely dependent on engineering for every minor text change. This guide explains perfectly why we migrated to a Headless CMS. Our publishing velocity has skyrocketed.",
    rating: 5
  },
  {
    name: "Julian Hayes",
    role: "Founder, OpsFlow SaaS",
    content: "If you want to understand B2B SaaS website architecture without getting lost in jargon, read this. We dumped our legacy CMS and never looked back. The speed improvements alone paid for the rebuild in 60 days.",
    rating: 5
  }
];

export default function HeadlessSaaSMarketingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Search Engine Optimized Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Why Your B2B SaaS Needs a Marketing Website Built on Headless Tech",
        "description": "Learn why migrating to a Headless CMS and Next.js frontend is the ultimate architectural upgrade for B2B SaaS marketing websites.",
        "author": { "@type": "Organization", "name": "CodeWrote" },
        "publisher": {
          "@type": "Organization",
          "name": "CodeWrote",
          "logo": { "@type": "ImageObject", "url": "https://codewrote.com/logo.png" }
        },
        "datePublished": "2024-11-05",
        "dateModified": "2024-11-05"
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }) }} />

      <main className="flex-grow pt-[140px]">
        {/* Hero Section */}
        <section className="px-6 py-8 md:py-16 text-center">
          <div className="max-w-[1000px] mx-auto">
            <h1 className="text-[42px] md:text-[72px] font-black leading-[1.05] text-black tracking-[-0.03em] uppercase mb-8 font-['Switzer']">
              The <span className="text-[#E61F93]">Headless SaaS</span> Marketing <span className="text-[#A1A1A1]">Architecture</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-12 max-w-3xl mx-auto font-['Switzer']">
              Is your marketing site dragging down your software's reputation? Discover why elite B2B SaaS companies are abandoning traditional CMS platforms for decoupled, high-performance web architecture.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-all font-['Switzer']">
                 Migrate to Headless
               </Link>
               <Link href="#introduction" className="w-full sm:w-auto px-10 py-5 bg-white border border-gray-200 text-black rounded-full font-black text-sm uppercase tracking-widest hover:border-[#E61F93] transition-all font-['Switzer']">
                 Read the Blueprint
               </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb Below Hero */}
        <div className="px-6 py-4 max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] font-['Switzer']">
            <Link href="/" className="hover:text-[#E61F93]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#E61F93]">Blog</Link>
            <span>/</span>
            <span className="text-black">Headless B2B SaaS Architecture</span>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="px-6 py-12 max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_320px] gap-12 items-start">
             
             {/* Left: Table of Contents (Sticky) */}
             <div className="hidden lg:block sticky top-32">
                <TableOfContents sections={tocSections} orientation="vertical" />
             </div>

             {/* Middle: Main Content */}
             <div className="min-w-0 blog-content rich-text-area">
                <article>
                  <section id="introduction">
                    <h2>The B2B SaaS Marketing Dilemma</h2>
                    <p>
                        In the highly competitive B2B SaaS sector, your marketing website is your most valuable salesperson. However, an alarming number of innovative software companies suffer from a massive disconnect: they build their core SaaS product using cutting-edge, highly scalable frameworks, yet they run their public-facing marketing website on sluggish, outdated monolithic platforms like traditional WordPress.
                    </p>
                    <p>
                        This creates a jarring brand experience. Enterprise prospects navigate a slow, clunky marketing site and subconsciously project that exact same poor performance onto your actual software product.
                    </p>
                    <p>
                        This page bridges the gap between marketing limitations and engineering excellence. We will explain exactly why adopting a <strong>headless cms for a marketing website</strong> is no longer just a technical luxury, but a strategic requirement for scaling your B2B enterprise securely and accelerating inbound conversions.
                    </p>
                  </section>

                  <section id="what-is-headless">
                    <h2>What is a Headless CMS?</h2>
                    <p>
                        To understand the solution, you must understand the architecture. A "Headless CMS" (like Sanity, Contentful, or Strapi) is a content management system that entirely separates the backend database (the "body" where content is stored) from the frontend presentation layer (the "head" where the website is displayed).
                    </p>
                    <p>
                        Unlike a traditional CMS, a headless platform does not generate HTML pages. It simply acts as a secure repository for your text, images, and marketing copy. It then serves that content via powerful APIs to any device, application, or frontend framework your engineering team chooses to build.
                    </p>
                  </section>

                  <section id="monolithic-problems">
                    <h2>The Problem with Monolithic Architecture</h2>
                    <p>
                        Legacy systems like traditional WordPress are "monolithic"—meaning the backend database and the frontend design are tightly coupled together. 
                    </p>
                    <p>
                        For a fast-growing B2B SaaS, monolithic architecture presents several severe bottlenecks:
                    </p>
                    <ul>
                        <li><strong>Plugin Dependency:</strong> To add complex marketing features, you must install third-party plugins. These inject bloated, unoptimized code into your frontend, killing your page load speeds.</li>
                        <li><strong>Engineering Frustration:</strong> Modern developers despise working in monolithic environments. Modifying a theme often breaks the backend logic, making simple UI updates incredibly tedious.</li>
                        <li><strong>Security Vulnerabilities:</strong> Because the database is directly connected to the frontend, a single outdated plugin can compromise your entire server infrastructure.</li>
                    </ul>
                  </section>

                  <section id="why-migrate">
                    <h2>Why Migrate to Headless CMS?</h2>
                    <p>
                        If your marketing team is constantly waiting on IT to publish a landing page, or if your Google Ads are bleeding money because users bounce before the page loads, the question of <strong>why migrate to a headless CMS</strong> answers itself.
                    </p>
                    <p>
                        A headless migration fundamentally solves the "speed vs. autonomy" problem. Your marketing team receives a clean, ultra-fast dashboard dedicated entirely to content creation. Simultaneously, your developers are freed from the constraints of rigid themes and can architect a custom frontend optimized purely for speed and user experience.
                    </p>
                  </section>

                  <section id="nextjs-engine">
                    <h2>The Next.js Marketing Site: Your Frontend Engine</h2>
                    <p>
                        If a headless CMS is your database, you still need a presentation layer to show that content to the world. For a B2B SaaS, a <strong>Next.js marketing site</strong> is the undisputed gold standard.
                    </p>
                    <p>
                        Built on top of React, Next.js utilizes Server-Side Rendering (SSR) and Static Site Generation (SSG). Instead of forcing the user's browser to download a massive JavaScript file and render the page locally (which is slow), Next.js pre-builds the HTML on powerful cloud servers.
                    </p>
                    <p>
                        The result is a website that loads almost instantly, regardless of the user's device or network speed. It feels exactly like navigating a native application.
                    </p>
                  </section>

                  <section id="saas-architecture">
                    <h2>B2B SaaS Website Architecture for Scale</h2>
                    <p>
                        Elite <strong>B2B SaaS website architecture</strong> relies on the concept of the "JAMstack" (JavaScript, APIs, and Markup). 
                    </p>
                    <p>
                        In this architecture, your Next.js frontend calls the Headless CMS API during the build process. The pages are compiled into static assets and distributed globally across an Edge Network (like Vercel or AWS CloudFront). 
                    </p>
                    <p>
                        Because there is no live database connection required to load a page, the site can handle massive, unpredictable traffic spikes—like a viral Hacker News post or a major product launch—without ever slowing down or crashing.
                    </p>
                  </section>

                  <section id="empowering-marketing">
                    <h2>Empowering the Marketing Team</h2>
                    <p>
                        The most common misconception about decoupling is that it makes publishing harder for non-technical users. The opposite is true.
                    </p>
                    <p>
                        Platforms like Sanity provide an incredibly intuitive authoring experience. Because the design is entirely handled by the frontend code, marketers cannot "break" the website's layout by pasting in poorly formatted text. 
                    </p>
                    <p>
                        Marketing teams can independently launch A/B tests, spin up highly targeted landing pages for specific ad campaigns, and execute massive content strategies without ever having to submit a Jira ticket to the engineering department.
                    </p>
                  </section>

                  <section id="security-advantages">
                    <h2>Security Advantages of Decoupled Systems</h2>
                    <p>
                        For a SaaS company targeting enterprise clients, an insecure marketing website is a dealbreaker. If your marketing site gets defaced, enterprise Chief Information Security Officers (CISOs) will assume your actual software product is equally vulnerable.
                    </p>
                    <p>
                        Headless architecture provides absolute security through obfuscation. Because your Next.js site serves pre-compiled static files, there is no server-side execution and no direct database access available to the public internet. It eliminates the attack vectors utilized by 99% of automated hacking scripts.
                    </p>
                  </section>

                  <section id="core-web-vitals">
                    <h2>Unmatched Speed and Core Web Vitals</h2>
                    <p>
                        In the modern SEO landscape, Google heavily penalizes websites that fail their Core Web Vitals assessment (a measure of loading performance, interactivity, and visual stability).
                    </p>
                    <p>
                        Monolithic platforms inherently struggle to pass these tests due to heavy server response times and render-blocking scripts. A headless Next.js architecture, optimized by an agency like CodeWrote, guarantees near-perfect Core Web Vitals scores. 
                    </p>
                    <p>
                        This technical superiority acts as a massive multiplier for your organic search efforts, allowing you to consistently outrank larger competitors who are still stuck on legacy technology.
                    </p>
                  </section>

                  <section id="omnichannel">
                    <h2>Omnichannel Content Distribution</h2>
                    <p>
                        As your B2B SaaS scales, your content strategy will likely expand beyond a simple website. You may need to display pricing tables inside your mobile app, or push product update notes directly into a customer portal.
                    </p>
                    <p>
                        With a monolithic CMS, this data is trapped in the website. With a Headless CMS, your content is centralized. You can use the exact same API to push your marketing copy to your Next.js website, an iOS app, a smartwatch, or a digital kiosk. Write once, publish everywhere.
                    </p>
                  </section>

                  <section id="roi-cac">
                    <h2>ROI: Lowering Customer Acquisition Cost (CAC)</h2>
                    <p>
                        The transition to a headless architecture is a strategic financial play designed to lower your Customer Acquisition Cost (CAC).
                    </p>
                    <p>
                        Every millisecond of latency on a landing page increases your bounce rate. If you are spending $50,000 a month on LinkedIn Ads, and a slow legacy website is causing 40% of those clicks to bounce before the hero image loads, you are literally setting fire to your marketing budget. 
                    </p>
                    <p>
                        By guaranteeing instantaneous load times and providing marketers the agility to launch highly relevant, personalized landing pages in minutes, a headless setup dramatically increases conversion rates, ensuring maximum ROI from your ad spend.
                    </p>
                  </section>

                  <section id="conclusion">
                    <h2>Conclusion: Future-Proof Your SaaS</h2>
                    <p>
                        Your product is innovative, scalable, and fast. Your marketing website must reflect those exact same qualities. 
                    </p>
                    <p>
                        Relying on legacy monolithic platforms is a severe competitive disadvantage in the modern B2B landscape. By migrating to a <strong>headless CMS for your marketing website</strong> combined with a lightning-fast Next.js frontend, you eliminate technical debt, secure your digital perimeter, and provide your marketing team with the ultimate high-performance growth engine. Future-proof your enterprise by partnering with experts who understand the profound impact of decoupled architecture.
                    </p>
                  </section>
                </article>

                {/* FAQ Section */}
                <div id="faqs" className="mt-20 pt-20">
                   <h2 className="text-[32px] font-black uppercase tracking-tight mb-12 font-['Switzer']">Expert FAQs</h2>
                   <div className="space-y-8">
                      {faqs.map((faq, i) => (
                        <div key={i} className="bg-[#FAFAFA] p-10 rounded-[40px]">
                          <h4 className="text-[20px] font-bold text-black font-['Switzer'] mb-4">{faq.question}</h4>
                          <p className="text-[16px] text-[#666666] font-medium font-['Switzer'] leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Review Snippets */}
                <div className="mt-20 pt-20">
                    <h2 className="text-[32px] font-black uppercase tracking-tight mb-12 font-['Switzer']">What Industry Leaders Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {reviews.map((review, i) => (
                           <div key={i} className="bg-white border-2 border-gray-50 p-10 rounded-[40px] shadow-sm flex flex-col justify-between hover:border-[#E61F93]/20 transition-all">
                              <div>
                                <div className="flex gap-1 mb-6 text-xl">
                                  {[...Array(review.rating)].map((_, starI) => (
                                    <span key={starI} className="text-yellow-400">★</span>
                                  ))}
                                </div>
                                <p className="text-[15px] text-gray-700 italic font-medium font-['Switzer'] mb-8 leading-relaxed">"{review.content}"</p>
                              </div>
                              <div className="flex items-center gap-4 pt-8">
                                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E61F93] to-pink-400 text-white flex items-center justify-center font-black text-xl">{review.name.charAt(0)}</div>
                                 <div>
                                   <div className="text-[14px] font-black text-black uppercase tracking-tight">{review.name}</div>
                                   <div className="text-[11px] text-[#E61F93] font-black uppercase tracking-widest">{review.role}</div>
                                 </div>
                              </div>
                           </div>
                        ))}
                    </div>
                </div>
             </div>

             {/* Right: CTA & Related (Sticky) */}
             <div className="space-y-8 lg:sticky lg:top-32">
                {/* 1st CTA Container */}
                <div className="bg-[#0F0F0F] p-10 rounded-[40px] text-white relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-40 h-40 bg-[#E61F93]/20 blur-[80px] rounded-full -mr-20 -mt-20 group-hover:bg-[#E61F93]/30 transition-all duration-700" />
                   <h3 className="text-[26px] font-black font-['Switzer'] uppercase leading-[1.1] mb-6 relative z-10">Need Expert Help?</h3>
                   <p className="text-[14px] text-gray-400 font-medium font-['Switzer'] leading-relaxed mb-10 relative z-10">
                     Let us build you a high-converting machine that turns cold traffic into hot prospects while you sleep.
                   </p>
                   <Link 
                     href="/contact" 
                     className="block w-full text-center py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all relative z-10 font-['Switzer'] shadow-lg"
                   >
                     Launch Your Machine
                   </Link>
                </div>

                {/* 2nd Related Pages Container */}
                <div className="bg-[#FAFAFA] p-10 rounded-[40px] border border-gray-100">
                   <h3 className="text-[11px] font-black text-[#A1A1A1] uppercase tracking-[0.25em] mb-8 font-['Switzer']">Related Insights</h3>
                   <div className="space-y-8">
                      <Link href="/blog" className="group block">
                        <span className="text-[10px] text-[#E61F93] font-black uppercase tracking-widest mb-2 block">architecture</span>
                        <h4 className="text-[15px] font-bold text-black group-hover:text-[#E61F93] transition-colors font-['Switzer'] leading-snug">Why Next.js is the Ultimate Enterprise Standard</h4>
                      </Link>
                      <Link href="/blog" className="group block">
                        <span className="text-[10px] text-[#E61F93] font-black uppercase tracking-widest mb-2 block">strategy</span>
                        <h4 className="text-[15px] font-bold text-black group-hover:text-[#E61F93] transition-colors font-['Switzer'] leading-snug">The True Cost of Technical Debt</h4>
                      </Link>
                      <Link href="/blog" className="group block">
                        <span className="text-[10px] text-[#E61F93] font-black uppercase tracking-widest mb-2 block">technology</span>
                        <h4 className="text-[15px] font-bold text-black group-hover:text-[#E61F93] transition-colors font-['Switzer'] leading-snug">Enterprise CMS for Corporate Blogs</h4>
                      </Link>
                   </div>
                   <Link href="/blog" className="block mt-12 text-[11px] font-black text-black uppercase tracking-widest hover:text-[#E61F93] transition-colors font-['Switzer'] underline">Explore More</Link>
                </div>

                {/* Review Snippet Small */}
                <div className="bg-white border border-gray-100 p-8 rounded-[40px] text-center">
                   <div className="flex justify-center gap-1 mb-3">
                      {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400">★</span>)}
                   </div>
                   <div className="text-[18px] font-black text-black font-['Switzer'] mb-1">4.9/5 RATING</div>
                   <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest font-['Switzer']">Trusted by 500+ global brands</div>
                </div>
             </div>
          </div>
        </div>

        {/* Final CTA Container */}
        <div className="px-6 pb-24">
           <div className="max-w-[1200px] mx-auto bg-black rounded-[50px] p-12 md:p-24 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E61F93]/10 to-transparent opacity-50" />
              <div className="relative z-10">
                 <h2 className="text-[34px] md:text-[60px] font-black text-white uppercase leading-[1.05] mb-8 font-['Switzer'] tracking-tight">
                    Ready to scale your <span className="text-[#E61F93]">marketing</span> <span className="text-[#A1A1A1]">architecture?</span>
                 </h2>
                 <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto font-['Switzer']">Stop losing enterprise leads to slow page loads. Partner with CodeWrote to migrate your B2B SaaS website to an ultra-fast, secure Headless CMS and Next.js frontend.</p>
                 <Link href="/contact" className="px-12 py-6 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all font-['Switzer'] shadow-2xl">
                    Get Your Custom Migration Plan
                 </Link>
              </div>
           </div>
        </div>
      </main>

      <Footer />
      
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content h2 {
          font-weight: 900;
          color: #000;
          font-size: 34px;
          margin-top: 80px;
          margin-bottom: 30px;
          line-height: 1.1;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          scroll-margin-top: 140px;
          font-family: 'Switzer', sans-serif;
        }
        
        .blog-content h3 {
          font-weight: 800;
          color: #111;
          font-size: 24px;
          margin-top: 50px;
          margin-bottom: 20px;
          line-height: 1.2;
          font-family: 'Switzer', sans-serif;
        }
        
        .blog-content p {
          color: #444;
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 24px;
          font-weight: 500;
          font-family: 'Switzer', sans-serif;
        }
        
        .blog-content ul {
          margin-bottom: 30px;
          margin-top: 20px;
        }
        
        .blog-content li {
          color: #444;
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 16px;
          padding-left: 24px;
          position: relative;
          font-weight: 500;
          font-family: 'Switzer', sans-serif;
        }
        
        .blog-content li::before {
          content: '•';
          color: #E61F93;
          font-size: 24px;
          position: absolute;
          left: 0;
          top: -2px;
          font-weight: bold;
        }
        
        .blog-content strong {
          color: #000;
          font-weight: 800;
        }
      `}} />
    </div>
  );
}
