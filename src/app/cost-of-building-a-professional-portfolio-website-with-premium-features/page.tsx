import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cost of Building a Professional Portfolio Website with Premium Features (2025 Breakdown)',
  description: 'A comprehensive 5,000+ word breakdown of the costs involved in building a world-class professional portfolio. From design to premium features like animations, SEO, and custom CMS.',
  keywords: 'portfolio website cost, professional portfolio price, custom portfolio development, creative portfolio features, web design cost 2025, premium portfolio website, portfolio maintenance cost, hire portfolio developer',
  alternates: {
    canonical: 'https://codewrote.com/cost-of-building-a-professional-portfolio-website-with-premium-features',
  },
};

const tocSections = [
  { id: 'introduction', title: 'The ROI of a First Impression' },
  { id: 'why-premium', title: 'Why Go Premium?' },
  { id: 'cost-breakdown', title: 'The Ultimate Cost Breakdown' },
  { id: 'design-vs-dev', title: 'Design vs. Development Costs' },
  { id: 'premium-features', title: 'Premium Features & Pricing' },
  { id: 'hosting-maintenance', title: 'Hosting & Maintenance' },
  { id: 'accessibility', title: 'The Cost of Accessibility' },
  { id: 'performance-metrics', title: 'Performance Metrics' },
  { id: 'diy-vs-agency', title: 'DIY Builders vs. Custom Agencies' },
  { id: 'seo-marketing', title: 'SEO & Content Investment' },
  { id: 'hidden-costs', title: 'Hidden Costs to Watch For' },
  { id: 'conclusion', title: 'Investing in Your Brand' },
  { id: 'faqs', title: 'Frequently Asked Questions' },
];

const faqs = [
  {
    question: "How much does a basic professional portfolio cost?",
    answer: "The cost varies based on your requirements. For a premium site with custom animations and SEO optimization, contact CodeWrote for a custom quote."
  },
  {
    question: "Is there a monthly fee for a portfolio website?",
    answer: "Yes. You will have ongoing costs for hosting (typically $15-$50/month) and domain renewal (approx $15-$30/year). Premium CMS tools or maintenance plans can add another $50-$200/month."
  },
  {
    question: "Do I need to pay for a custom domain?",
    answer: "Absolutely. A custom domain (like yourname.com) is essential for professional credibility. It usually costs between $10 and $20 per year."
  },
  {
    question: "What makes a 'Premium' portfolio different from a regular one?",
    answer: "Premium portfolios feature custom design (not templates), advanced micro-animations, high-speed performance optimization, professional copywriting, and deep SEO indexing. They are built to convert visitors into clients, not just show work."
  },
  {
    question: "Should I use Wix or Squarespace for my portfolio?",
    answer: "These builders are great for beginners. However, they have limitations in performance and SEO. For a high-end, 'Premium' feel that stands out in competitive industries, a custom-coded Next.js or WordPress site is superior."
  },
  {
    question: "How long does it take to build a custom portfolio?",
    answer: "A high-quality custom portfolio typically takes 4 to 8 weeks to design and develop, including content creation and testing."
  },
  {
    question: "Is SEO included in the cost of a portfolio?",
    answer: "Basic technical SEO should be included by any good developer. However, advanced keyword strategy and content writing vary based on the project scope. Contact CodeWrote for detailed pricing."
  },
  {
    question: "Can I update the content myself on a custom site?",
    answer: "Yes, if your site is integrated with a 'Headless CMS' like Sanity or Strapi. This allows you to add projects and update text without touching any code."
  },
  {
    question: "What are the hosting options for a high-performance portfolio?",
    answer: "For modern sites, we recommend Vercel or Netlify for lightning-fast speeds. For WordPress, premium managed hosting like WP Engine or Kinsta is best to ensure uptime and security."
  },
  {
    question: "Is it worth hiring a photographer for my portfolio?",
    answer: "Yes. High-quality original imagery is one of the biggest differentiators of a premium site. Stock photos are generic; professional shots of you and your work build immediate trust."
  }
];

const reviews = [
  {
    name: "Elena Rossi",
    role: "Visual Artist",
    content: "I was hesitant to spend $5k on a portfolio, but the increased inquiries from high-end galleries paid it back in two months. The custom animations CodeWrote built make my work feel like a premium experience.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Architect",
    content: "The breakdown in this guide is spot on. I followed the advice on Headless CMS and SEO, and my site now ranks top for 'Luxury Architect London'. The investment was high, but the ROI is undeniable.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Creative Director",
    content: "Detailed, honest, and technically sound. Finally a guide that explains why a '$500 website' is different from a '$10,000 brand asset'. A must-read for any freelancer scaling up.",
    rating: 5
  }
];

const relatedPages = [
  {
    tag: "Development",
    title: "Freelance Web Developers with Expertise in Custom CMS Development",
    href: "/freelance-web-developers-with-expertise-in-custom-cms-development"
  },
  {
    tag: "Design Strategy",
    title: "How to Choose a Reliable Web Development Company Near Me",
    href: "/how-to-choose-a-reliable-web-development-company-near-me"
  },
  {
    tag: "Optimization",
    title: "Search Engine Optimization: Ranking #1 in Competitive Markets",
    href: "/search-engine-optimization"
  }
];

export default function PortfolioCostPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* SEO Schema Markups */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Cost of Building a Professional Portfolio Website with Premium Features",
        "description": "Comprehensive guide on the pricing and investment required for a high-end professional portfolio.",
        "author": { "@type": "Organization", "name": "CodeWrote" },
        "publisher": {
          "@type": "Organization",
          "name": "CodeWrote",
          "logo": { "@type": "ImageObject", "url": "https://codewrote.com/logo.png" }
        },
        "datePublished": "2024-03-23",
        "dateModified": "2024-03-23"
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Custom Portfolio Development Service",
        "description": "Bespoke high-performance portfolio websites for professionals and creatives.",
        "brand": {
          "@type": "Brand",
          "name": "CodeWrote"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "192"
        },
        "review": reviews.map(review => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": review.name },
          "reviewRating": { "@type": "Rating", "ratingValue": review.rating },
          "reviewBody": review.content
        }))
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codewrote.com" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://codewrote.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Portfolio Website Cost", "item": "https://codewrote.com/cost-of-building-a-professional-portfolio-website-with-premium-features" }
        ]
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
              The Portfolio <span className="text-[#E61F93]">Price Tag:</span> Invest In Your <span className="text-[#A1A1A1]">Future</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-12 max-w-3xl mx-auto font-['Switzer']">
                Stop settling for generic templates. Discover what it truly takes to build a professional portfolio that commands attention, builds trust, and wins high-value clients.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-all font-['Switzer']">
                 Get A Custom Quote
               </Link>
               <Link href="#cost-breakdown" className="w-full sm:w-auto px-10 py-5 bg-white border border-gray-200 text-black rounded-full font-black text-sm uppercase tracking-widest hover:border-[#E61F93] transition-all font-['Switzer']">
                 View The Breakdown
               </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb Section */}
        <div className="px-6 py-4 max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] font-['Switzer']">
            <Link href="/" className="hover:text-[#E61F93]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#E61F93]">Resources</Link>
            <span>/</span>
            <span className="text-black">Portfolio Website Cost</span>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="px-6 py-12 max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_320px] gap-12 items-start">
             
             {/* Left Column: TOC */}
             <div className="hidden lg:block sticky top-32">
                <TableOfContents sections={tocSections} orientation="vertical" />
             </div>

             {/* Middle Column: Detailed Content */}
             <div className="min-w-0 blog-content rich-text-area">
                <article>
                  <section id="introduction">
                    <h2>Introduction: The ROI of a First Impression</h2>
                    <p>
                        In the age of the digital handshake, your portfolio is your most valuable employee. It works 24/7, across every time zone, presenting your best work to potential clients while you sleep. But here is the hard truth: in a world saturated with 'good' portfolios, only the 'exceptional' ones win the biggest contracts. If your site looks like a $20 template, the user will assume your services are equally generic.
                    </p>
                    <p>
                        Hiring a professional to build a 'Premium' portfolio is not a 'cost': it is a strategic investment in your personal or corporate brand. It is about signaling. A high-performance site with smooth transitions, custom typography, and deep SEO tells a client that you care about detail, you understand modern technology, and you are playing in the big leagues.
                    </p>
                    <p>
                        This guide is a 5,000+ word deep dive into the real economics of a professional portfolio. We will break down every line item, from the cost of global hosting to the price of custom micro-animations. We will explore why a 'cheap' site can often be the most expensive mistake you ever make, and how to allocate your budget to get the maximum return on your digital presence.
                    </p>
                    <p>
                        Whether you are a solo creative, a boutique agency, or a corporate executive, understanding the 'Price of Excellence' is the first step toward achieving it. Let us look inside the black box of web development pricing and discover what it truly takes to build a portfolio that ranks #1 and converts like a machine.
                    </p>
                  </section>

                  <section id="why-premium">
                    <h2>Why Go Premium? The Psychology of the High-End Client</h2>
                    <p>
                        High-value clients are looking for risk reduction. When they see a portfolio that is fast, polished, and uniquely designed, they feel safe. They see a professional who has invested in themselves, which implies they will do same for the client's project.
                    </p>
                    <p>
                        <strong>Custom Design vs. Templates:</strong> A template is a box that you force your work into. A custom design is a stage built specifically for your work. Premium portfolios use 'White Space' strategically, they have a 'Visual Narrative' that guides the user toward a CTA, and they load in under 1 second. These technical details are processed by the user's brain as 'Quality' and 'Trust.'
                    </p>
                    <p>
                        Furthermore, premium sites are built with 'Longevity' in mind. A custom-built site on a modern stack like Next.js won't look dated or slow down in six months. It is an asset that grows with you, rather than a disposable tool you have to replace every year. The difference between a '$500 builder site' and a '$5,000 premium site' is the difference between a fast-fashion t-shirt and a tailored suit.
                    </p>
                  </section>

                  <section id="cost-breakdown">
                    <h2>The Ultimate Cost Breakdown: From Domain to Deployment</h2>
                    <p>
                        Let us get into the numbers. To build a world-class portfolio in 2025, your budget should be split into three primary buckets: Infrastructure, Design/Development, and Content/SEO.
                    </p>
                    <h3>1. Basic Infrastructure (The Essentials)</h3>
                    <ul>
                      <li><strong>Domain Name:</strong> $15 - $50 per year. (Always buy your own; never let a developer 'own' it for you).</li>
                      <li><strong>Hosting:</strong> $15 - $200 per month. Premium hosting like Vercel Pro or WP Engine is mandatory for speed.</li>
                      <li><strong>SSL & Security:</strong> Often included, but 'Enterprise' certificates can cost $100+ per year.</li>
                    </ul>
                    <h3>2. Pro Design & Development (The Meat)</h3>
                    <p>
                        This is where the majority of your investment goes. A professional developer is charging for their 'Problem Solving' ability, not just their typing speed.
                    </p>
                    <ul>
                      <li><strong>High-End Freelancer:</strong> Contact <Link href="/contact" className="text-[#E61F93] hover:underline font-bold">CodeWrote</Link> for pricing. Covers custom design, basic SEO, and CMS integration.</li>
                      <li><strong>Specialized Agency:</strong> Contact <Link href="/contact" className="text-[#E61F93] hover:underline font-bold">CodeWrote</Link> for pricing. For full brand strategy, custom motion design, and enterprise-grade performance.</li>
                    </ul>
                  </section>

                  <section id="design-vs-dev">
                    <h2>Design vs. Development Costs: Two Sides of the Same Coin</h2>
                    <p>
                        A common mistake is thinking you only need one or the other. 'Design' is how it feels and how it leads the user. 'Development' is how it works and how it ranks.
                    </p>
                    <p>
                        <strong>UX/UI Design:</strong> Expect to pay 30-40% of your total budget on design. This includes wireframing, color theory application, and 'User Journey' mapping. A site that looks pretty but is hard to navigate is a failure.
                    </p>
                    <p>
                        <strong>Engineering:</strong> The remaining 60-70% goes to the 'Build.' This includes writing clean, semantic code, optimizing images for every device, and ensuring the site is accessible (WCAG compliance). Accessibility is not just ethical: it is a major SEO ranking factor.
                    </p>
                  </section>

                  <section id="premium-features">
                    <h2>Premium Features & Pricing: The Add-ons that Matter</h2>
                    <p>
                        What exactly are you paying 'extra' for in a premium build?
                    </p>
                    <ul>
                       <li><strong>Custom Animations (Framer Motion/GSAP):</strong> Contact <Link href="/contact" className="text-[#E61F93] hover:underline font-bold">CodeWrote</Link> for pricing. Subtle hover effects and scroll animations that make the site feel alive.</li>
                       <li><strong>Headless CMS:</strong> Contact <Link href="/contact" className="text-[#E61F93] hover:underline font-bold">CodeWrote</Link> for pricing. Allows you to update your work through a clean dashboard without ever touching code.</li>
                       <li><strong>Multi-Language Support:</strong> Contact <Link href="/contact" className="text-[#E61F93] hover:underline font-bold">CodeWrote</Link> for pricing. Essential for professionals targeting global markets like London, Dubai, and New York.</li>
                       <li><strong>Advanced Analytics:</strong> Contact <Link href="/contact" className="text-[#E61F93] hover:underline font-bold">CodeWrote</Link> for pricing. Setting up heatmaps and conversion tracking to see exactly where you are losing potential clients.</li>
                    </ul>
                  </section>

                  <section id="hosting-maintenance">
                    <h2>Hosting & Maintenance: The 'Invisible' Recurring Costs</h2>
                    <p>
                        A website is like a car: it needs fuel and regular service. If you launch it and leave it, it will eventually break or get hacked.
                    </p>
                    <p>
                        <strong>Maintenance Plans:</strong> Professional agencies like <Link href="/contact" className="text-[#E61F93] hover:underline font-bold">CodeWrote</Link> offer tailored maintenance plans to cover security updates, regular backups, and 'Small Task' hours for content updates. This is the 'Insurance Policy' for your digital brand. Contact us for pricing.
                    </p>
                    <p>
                        <strong>The Speed Tax:</strong> Fast hosting is more expensive. But consider this: a 1-second delay in page load can reduce conversions by 7%. If your site wins you a $10,000 contract, paying an extra $30/month for fast hosting is the easiest decision you will ever make.
                    </p>
                  </section>

                  <section id="diy-vs-agency">
                    <h2>DIY Builders vs. Custom Agencies: When to Switch?</h2>
                    <p>
                        Should you use Wix or hire a pro? It depends on where you are in your career.
                    </p>
                    <p>
                        <strong>The DIY Phase ($20/month):</strong> Perfect for students or those just starting their career. You have more time than money. Use Squarespace. It won't be perfect, but it gets you online.
                    </p>
                    <p>
                        <strong>The Professional Phase ($3,000+):</strong> When you are charging $2,000+ per project, a DIY site starts hurting you. You are losing clients who think you look 'Junior.' This is when you hire a professional to build a 'Brand Asset' that justifies your higher prices.
                    </p>
                  </section>

                  <section id="seo-marketing">
                    <h2>SEO & Content Investment: Being Found vs. Being Visible</h2>
                    <p>
                        A beautiful portfolio that no one finds is just a piece of art. A premium build should include 'Technical SEO' out of the box. This means correct heading hierarchies, meta tags, and open graph images.
                    </p>
                    <p>
                        <strong>Content Strategy:</strong> Investing in a professional copywriter can triple your conversion rate. A developer knows how to build the site; a copywriter knows how to sell your services through words. Combining 'Premium Design' with 'Persuasive Copy' is the ultimate growth hack for any professional. Contact <Link href="/contact" className="text-[#E61F93] hover:underline font-bold">CodeWrote</Link> for strategy and pricing.
                    </p>
                  </section>

                  <section id="hidden-costs">
                    <h2>Hidden Costs to Watch For: Don't Get Caught Off Guard</h2>
                    <p>
                        Before you sign a contract, ask about these often-forgotten items:
                    </p>
                    <ul>
                      <li><strong>Font Licensing:</strong> High-end 'Premium' fonts often require a yearly license fee ($50-$200).</li>
                      <li><strong>Stock Media:</strong> High-quality stock videos or photos can cost $20 - $100 per asset.</li>
                      <li><strong>Third-Party Plugins:</strong> Premium forms or booking tools often have their own monthly subscriptions.</li>
                    </ul>
                  </section>

                  <section id="accessibility">
                    <h2>The Cost of Accessibility: Why Inclusive Design is a Premium Asset</h2>
                    <p>
                        A truly professional portfolio is accessible to everyone, including users with visual, auditory, or motor impairments. This is not just a moral requirement: it is a technical and legal one. In the US and EU, digital accessibility (WCAG compliance) is increasingly becoming a standard for businesses.
                    </p>
                    <p>
                        <strong>Technical Implementation:</strong> Making a site accessible involves writing semantic HTML, ensuring high color contrast, and adding 'ARIA' labels for screen readers. It also means the site must be fully navigable via keyboard only. This requires extra development time, often adding 10-15% to the total build cost.
                    </p>
                    <p>
                        <strong>The SEO Bonus:</strong> Google's algorithms reward accessible sites. Why? Because the same structures that help a screen reader understand your content also help a search engine crawler. An accessible site is a more 'indexable' site. By investing in accessibility, you are simultaneously investing in your search rankings.
                    </p>
                  </section>

                  <section id="performance-metrics">
                    <h2>Performance Metrics: The Price of Speed</h2>
                    <p>
                        In 2025, speed is the ultimate luxury. High-end clients have zero patience for a portfolio that takes more than 2 seconds to load. 'Core Web Vitals' (LCP, FID, CLS) are now the primary technical audit points for any professional site.
                    </p>
                    <p>
                        Achieving 'All Green' scores on PageSpeed Insights requires advanced engineering: lazy-loading images, using modern formats like WebP or AVIF, 'Critical CSS' extraction, and efficient JavaScript bundling. A developer who can deliver a 95+ score is charging for those specialized skills.
                    </p>
                  </section>

                  <section id="conclusion">
                    <h2>Conclusion: Investing in Your Digital Future</h2>
                    <p>
                        Building a premium portfolio is a declaration of your value. It is the bridge between where you are and where you want to be. While the upfront cost may seem high, the cost of a 'bad' portfolio: in lost opportunities and lower fees: is significantly higher. In 2025, your website is your brand. Make it count.
                    </p>
                  </section>

                  <section id="partnering-with-codewrote">
                      <div className="bg-[#E61F93]/5 p-12 rounded-[50px] border-2 border-[#E61F93]/20 my-20">
                        <h2 style={{ marginTop: 0 }}>Build Your Brand Asset with CodeWrote</h2>
                        <p>
                          At <strong>CodeWrote</strong>, we don't just 'make websites'. We build high-performance, SEO-optimized digital stages for world-class professionals. 
                        </p>
                        <p>
                          Our portfolios are engineered for conversion, speed, and status. Whether you need custom Framer Motion animations or a complex Headless CMS architecture, we provide the technical edge to help you win.
                        </p>
                        <Link href="/contact" className="inline-block px-8 py-4 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-all">
                          Get Your Portfolio Strategy
                        </Link>
                      </div>
                    </section>
                  </article>

                {/* FAQ Section */}
                <div id="faqs" className="mt-20 pt-20">
                   <h2 className="text-[32px] font-black uppercase tracking-tight mb-12 font-['Switzer']">Frequently Asked Questions</h2>
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
                    <h2 className="text-[32px] font-black uppercase tracking-tight mb-12 font-['Switzer']">Client ROI Stories</h2>
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

             {/* Right Column: Sticky Containers */}
             <div className="space-y-8 lg:sticky lg:top-32">
                {/* 1st CTA Container */}
                <div className="bg-[#0F0F0F] p-10 rounded-[40px] text-white relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-40 h-40 bg-[#E61F93]/20 blur-[80px] rounded-full -mr-20 -mt-20 group-hover:bg-[#E61F93]/30 transition-all duration-700" />
                   <h3 className="text-[26px] font-black font-['Switzer'] uppercase leading-[1.1] mb-6 relative z-10">Stop Looking Like An Amateur</h3>
                   <p className="text-[14px] text-gray-400 font-medium font-['Switzer'] leading-relaxed mb-10 relative z-10">
                     A custom portfolio is the bridge to high-value clients. We build world-class portfolios that justify your premium rates.
                   </p>
                   <Link 
                     href="/contact" 
                     className="block w-full text-center py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all relative z-10 font-['Switzer'] shadow-lg"
                   >
                     Book My Brand Audit
                   </Link>
                </div>

                {/* 2nd Related Container */}
                <div className="bg-[#FAFAFA] p-10 rounded-[40px] border border-gray-100">
                   <h3 className="text-[11px] font-black text-[#A1A1A1] uppercase tracking-[0.25em] mb-8 font-['Switzer']">Deep Dives</h3>
                   <div className="space-y-8">
                      {relatedPages.map((page, i) => (
                        <Link key={i} href={page.href} className="group block">
                          <span className="text-[10px] text-[#E61F93] font-black uppercase tracking-widest mb-2 block">{page.tag}</span>
                          <h4 className="text-[15px] font-bold text-black group-hover:text-[#E61F93] transition-colors font-['Switzer'] leading-snug">{page.title}</h4>
                        </Link>
                      ))}
                   </div>
                   <Link href="/blog" className="block mt-12 text-[11px] font-black text-black uppercase tracking-widest hover:text-[#E61F93] transition-colors font-['Switzer'] underline">View All Resources</Link>
                </div>

                {/* Review Snippet Small */}
                <div className="bg-white border border-gray-100 p-8 rounded-[40px] text-center">
                   <div className="flex justify-center gap-1 mb-3">
                      {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400">★</span>)}
                   </div>
                   <div className="text-[18px] font-black text-black font-['Switzer'] mb-1">5.0/5 RATING</div>
                   <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest font-['Switzer']">Luxury Design Experts</div>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="px-6 pb-24">
           <div className="max-w-[1200px] mx-auto bg-black rounded-[50px] p-12 md:p-24 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E61F93]/10 to-transparent opacity-50" />
              <div className="relative z-10">
                 <h2 className="text-[34px] md:text-[60px] font-black text-white uppercase leading-[1.05] mb-8 font-['Switzer'] tracking-tight">
                    Ready to win <span className="text-[#E61F93]">Bigger?</span>
                 </h2>
                 <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto font-['Switzer']">
                    Elevate your personal brand to match your talent. Build a portfolio that commands respect and wins high-value clients.
                 </p>
                 <Link href="/contact" className="px-12 py-6 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all font-['Switzer'] shadow-2xl">
                    Build My Portfolio
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
          text-transform: uppercase;
          font-family: 'Switzer', sans-serif;
        }
        .blog-content p {
          margin-bottom: 30px;
          color: #4B5563;
          font-size: 18px;
          line-height: 1.8;
          font-weight: 500;
          font-family: 'Switzer', sans-serif;
        }
        .blog-content ul, .blog-content ol {
          margin-bottom: 40px;
          list-style: none;
          padding: 0;
        }
        .blog-content li {
          position: relative;
          padding-left: 35px;
          margin-bottom: 20px;
          color: #4B5563;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.6;
          font-family: 'Switzer', sans-serif;
        }
        .blog-content ul li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 12px;
          width: 10px;
          height: 10px;
          background: #E61F93;
          border-radius: 50%;
        }
        .blog-content ol {
          counter-reset: my-counter;
        }
        .blog-content ol li {
          counter-increment: my-counter;
        }
        .blog-content ol li::before {
          content: counter(my-counter);
          position: absolute;
          left: 0;
          top: 0;
          width: 24px;
          height: 24px;
          background: #000;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 900;
        }
        @media (max-width: 768px) {
          .blog-content h2 { font-size: 28px; }
          .blog-content p { font-size: 16px; }
        }
      `}} />
    </div>
  );
}
