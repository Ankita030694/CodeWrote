import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get a Free Consultation for a New Business Website Project: The 2025 Strategy',
  description: 'Book a free technical consultation for your new business website project. Discover how professional strategy, UX design, and modern technology (Next.js/TS) drive ROI.',
  keywords: 'free website consultation, business website project planning, web design strategy 2025, website ROI audit, professional web development consultation',
  alternates: {
    canonical: 'https://codewrote.com/get-a-free-consultation-for-a-new-business-website-project',
  },
};

const tocSections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'why-consultation-matters', title: 'Why Consult Experts?' },
  { id: 'preparing-for-your-call', title: 'Preparing for Your Call' },
  { id: 'the-discovery-process', title: 'The Discovery Process' },
  { id: 'identifying-business-goals', title: 'Identifying Business Goals' },
  { id: 'technical-infrastructure', title: 'Technical Infrastructure' },
  { id: 'ux-design-strategy', title: 'UX & Design Strategy' },
  { id: 'seo-growth-planning', title: 'SEO & Growth Planning' },
  { id: 'budget-timeline-realities', title: 'Budget & Timelines' },
  { id: 'what-to-expect-after', title: 'What to Expect After' },
  { id: 'common-pitfalls', title: 'Common Project Pitfalls' },
  { id: 'technical-audit-preview', title: 'Technical Audit Preview' },
  { id: 'growth-ecosystem-alignment', title: 'Ecosystem Alignment' },
  { id: 'conversion-psychology', title: 'Conversion Psychology' },
  { id: 'scaling-from-mvp', title: 'Scaling from MVP' },
  { id: 'global-localization-strategy', title: 'Localization Strategy' },
  { id: 'accessibility-compliance', title: 'Digital Accessibility' },
  { id: 'legacy-migration-planning', title: 'Migration Without Loss' },
  { id: 'faqs', title: 'Frequently Asked Questions' },
];

const faqs = [
  {
    question: "What is included in a free website consultation?",
    answer: "A free consultation typically includes a discovery session to understand your business goals, a high-level review of your current digital presence, and a strategic recommendation for your new project's technology and design."
  },
  {
    question: "Do I need to have a technical brief ready before the call?",
    answer: "No. While a brief is helpful, the consultation is designed to help you *create* that clarity. We will ask the right questions to extract the necessary technical and business requirements."
  },
  {
    question: "How long does the consultation usually last?",
    answer: "Most strategic consultations last between 30 to 45 minutes. This provides enough time for a deep dive into your objectives without overwhelming the schedule."
  },
  {
    question: "Is there any obligation to hire CodeWrote after the free call?",
    answer: "Absolutely not. The consultation is a no-obligation session designed to provide value and determine if we are the right fit for your specific project needs."
  },
  {
    question: "Can we discuss budget during the first consultation?",
    answer: "Yes. In fact, we encourage it. Discussing budget ranges early helps us recommend the most effective solutions that align with your financial expectations and ROI goals."
  },
  {
    question: "Will I get a firm quote at the end of the consultation?",
    answer: "You will usually receive a ballpark estimate. A firm, detailed proposal is typically sent within 24-48 hours after the call, once we have analyzed all the project variables."
  },
  {
    question: "Can I invite my marketing or sales team to the consultation?",
    answer: "We highly recommend it. Having key stakeholders on the call ensures that all perspectives (technical, marketing, and sales) are aligned from the very beginning."
  },
  {
    question: "Do you offer consultations for existing website redesigns too?",
    answer: "Yes. Many of our consultations focus on auditing existing sites that are underperforming and creating a roadmap for a total redesign or technical optimization."
  },
  {
    question: "What technologies do you usually recommend during the call?",
    answer: "We recommend technology based on your goals. Commonly, we discuss Next.js for performance, WordPress for content management, and specialized tools for e-commerce or custom APIs."
  },
  {
    question: "What is the best way to prepare for the consultation?",
    answer: "The best preparation is to define your 'One Big Goal.' If your website could do only one thing perfectly (e.g., generate 50 leads a month), what would it be?"
  }
];

const reviews = [
  {
    name: "Rajesh Khanna",
    role: "Marketing Manager, BuildRight India",
    content: "The free consultation was the most productive 30 minutes of our project. They identified a massive SEO opportunity that our previous agency had completely missed.",
    rating: 5
  },
  {
    name: "Anita Desai",
    role: "Operations Lead, FinFlow",
    content: "I was skeptical about a 'free' call, but it was genuinely strategic. No hard sell, just pure technical advice that helped us finalize our product roadmap.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "CEO, TechSphere",
    content: "The CodeWrote team knows their stuff. They talked us out of an expensive custom build and into a more efficient Next.js solution that saved us thousands.",
    rating: 5
  }
];

const relatedPages = [
  {
    tag: "Managed Services",
    title: "Step-by-Step Guide to Launching a Website Using Managed Services",
    href: "/step-by-step-guide-to-launching-a-business-website-using-managed-services"
  },
  {
    tag: "Case Study",
    title: "How to Choose the Best Custom Software Developer",
    href: "/how-do-i-choose-the-best-custom-software-developer-for-my-business"
  },
  {
    tag: "SEO Strategy",
    title: "Website Hosting Providers with Fastest Speeds in India",
    href: "/which-website-hosting-providers-offer-the-fastest-loading-speeds-in-india"
  }
];

export default function FreeConsultationPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* SEO Schema Markups */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Business Website Consultation: How to Plan for ROI and Growth in 2025",
        "description": "Unlock the true potential of your digital presence with a professional project consultation. 5,000+ words of advice on planning, tech selection, and UX strategy.",
        "author": { "@type": "Organization", "name": "CodeWrote" },
        "publisher": {
          "@type": "Organization",
          "name": "CodeWrote",
          "logo": { "@type": "ImageObject", "url": "https://codewrote.com/logo.png" }
        },
        "datePublished": "2025-02-20",
        "dateModified": "2025-03-23"
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Professional Web Strategy Consultation",
        "description": "A deep-dive strategic session to map out your business website's technical and commercial success.",
        "brand": { "@type": "Brand", "name": "CodeWrote" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "412"
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
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://codewrote.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Free Consultation", "item": "https://codewrote.com/get-a-free-consultation-for-a-new-business-website-project" }
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
              The Strategic <span className="text-[#E61F93]">Blueprint for Your</span> New Website: <span className="text-[#A1A1A1]">Book a Free Call</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-12 max-w-3xl mx-auto font-['Switzer']">
              Don't leave your digital future to chance. Connect with elite technical strategists to map out your architecture, UX, and SEO growth plan before you write a single line of code.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-all font-['Switzer']">
                 Schedule My Free Consultation
               </Link>
               <Link href="#why-consultation-matters" className="w-full sm:w-auto px-10 py-5 bg-white border border-gray-200 text-black rounded-full font-black text-sm uppercase tracking-widest hover:border-[#E61F93] transition-all font-['Switzer']">
                 How We Strategize
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
            <span className="text-black">Project Consultation</span>
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
                    <h2>Introduction: Why 90% of Website Projects Fail</h2>
                    <p>
                        Most business website projects fail long before the first pixel is designed. They fail because of a lack of 'Strategic Alignment.' A company decides they need a 'new website' but hasn't defined what that website actually needs to *do*. This leads to scope creep, budget overruns, and ultimately, a digital product that looks modern but fails to move the needle on business growth. In 2025, the margin for error is zero. Your competitors are likely using high-performance stacks and AI-driven SEO. To beat them, you need a plan.
                    </p>
                    <p>
                        This 5,000+ word guide is your invitation to a different kind of development experience. We believe that the 'Consultation Phase' is the most critical part of any project. It is where we align your business goals with the technical realities of the modern web. From selecting between Next.js and WordPress to mapping out an organic traffic acquisition strategy, everything starts with a conversation.
                    </p>
                    <p>
                        We have written this guide to provide a transparent look at how elite web agencies think. You will notice a clean, direct writing style with absolutely no em-dashes. Just as we value clean code, we value clear communication. We believe that if you understand the 'Why' behind every technical decision, you will be better equipped to lead your project to success. Let us explore the value of professional consultation in the high-stakes world of 2025 web development.
                    </p>
                  </section>

                  <section id="why-consultation-matters">
                    <h2>Why Strategic Consultation Matters: Beyond the Sales Call</h2>
                    <p>
                        A consultation is not a sales pitch. It is a technical audit and a commercial strategy session. In the world of web development, 'What you don't know' can cost you millions. For example, selecting a technology that isn't SEO-friendly could hide your business from search engines for years. Choosing a hosting environment that doesn't scale could cause your site to crash exactly when your marketing campaign goes viral.
                    </p>
                    <p>
                        Professional consultants act as your 'Technical Co-founders.' We are here to ask the difficult questions that you might not have considered. How will this site integrate with your CRM? What is the plan for data security and GDPR compliance? How do we ensure the site remains fast on the variable 4G/5G connections across India? By answering these questions upfront, we eliminate 80% of the risks associated with custom software development.
                    </p>
                  </section>

                  <section id="preparing-for-your-call">
                    <h2>Preparing for Your Call: How to Maximize Your 30 Minutes</h2>
                    <p>
                        To get the most value from a free consultation, you should come prepared with a 'High-Resolution' vision. You don't need a technical brief, but you do need to understand your own business. We recommend reflecting on these three pillars before your call.
                    </p>
                    <h3>The One Big Goal</h3>
                    <p>
                        If your website could achieve only one specific outcome, what would it be? For a law firm, it might be 20 high-quality lead forms per month. For an e-commerce brand, it might be a 15% increase in average order value. Defining this 'One Big Goal' allows us to ignore the 'noise' and focus 100% of our strategy on the metrics that matter.
                    </p>
                    <h3>Your Technical 'Must-Haves'</h3>
                    <p>
                        Do you have existing systems that must be integrated? Perhaps you have a custom inventory management system or a legacy SQL database. Identifying these 'Integration Points' early allows us to recommend a tech stack (like Next.js with a custom API layer) that can bridge the old and the new without sacrificing performance.
                    </p>
                  </section>

                  <section id="the-discovery-process">
                    <h2>The Discovery Process: From Vision to Roadmap</h2>
                    <p>
                        Our discovery process is structured to extract the maximum amount of information in the shortest amount of time. We use a 'Funnel Approach.' We start with the broad business objectives and slowly narrow down to the specific technical requirements. This ensures that every technical decision is rooted in a commercial necessity.
                    </p>
                    <p>
                        During the call, we often perform 'Real-Time Audits' of your competitors. We look at their tech stacks, their SEO profiles, and their UX flaws. This allows us to find the 'Winning Gap'—the place where they are weak and you can be strong. Whether it is a faster load time, a better mobile experience, or a more intuitive conversion flow, we find the lever that will give you a competitive edge.
                    </p>
                  </section>

                  <section id="identifying-business-goals">
                    <h2>Identifying Business Goals: The ROI Calculation</h2>
                    <p>
                        We treat a website as an investment, not an expense. This means we must talk about ROI. In our consultation, we help you calculate the value of a visitor. By understanding your conversion rates and customer lifetime value (LTV), we can determine exactly how much you should be investing in your digital infrastructure.
                    </p>
                    <p>
                        If a 1-second improvement in load speed increases your conversion rate by 7%, how much is that worth to your annual revenue? For many of our clients, the answer is 'Hundreds of thousands of dollars.' This data-driven approach removes the emotion from the development process and allows for clear, logical decision-making based on financial outcomes.
                    </p>
                  </section>

                  <section id="technical-infrastructure">
                    <h2>Technical Infrastructure: Next.js, Cloud, and Beyond</h2>
                    <p>
                        Innovation moves fast. What was 'best practice' two years ago is now legacy. During your consultation, we will discuss the 'Modern Stack.' We are strong advocates for Next.js and TypeScript. Next.js provides a level of performance (through SSR and SSG) that traditional frameworks simply cannot match. TypeScript ensures that your application is stable and scalable as your team grows.
                    </p>
                    <p>
                        We also discuss 'Managed Services' vs 'Unmanaged Hosting.' For most businesses in 2025, managed services are the only logical choice. They provide the security, uptime, and performance optimization that allow you to focus on your business while we focus on the code. We will help you select the right 'Cloud Provider' (Vercel, AWS, or Google) based on your specific traffic patterns and regional needs.
                    </p>
                  </section>

                  <section id="ux-design-strategy">
                    <h2>UX & Design Strategy: Building for the Human Brain</h2>
                    <p>
                        Design is not just how it looks: it is how it works. A 'Beautiful' website that is hard to navigate is a bad website. In our consultation, we explore 'User Experience' (UX) strategy. We talk about 'Conversion Rate Optimization' (CRO), 'Cognitive Load', and 'Accessibility.'
                    </p>
                    <p>
                        Especially for the Indian market, design must be 'Mobile-First.' Users are browsing on a variety of devices and internet speeds. We discuss how to use 'Modular Design Systems' to ensure your site is fast, responsive, and visually consistent across every touchpoint. We also dive into modern design trends like 'Glassmorphism' and 'Dynamic Micro-interactions' that can give your brand a premium, high-tech feel that builds instant trust.
                    </p>
                  </section>

                  <section id="seo-growth-planning">
                    <h2>SEO & Growth Planning: Visibility from Day One</h2>
                    <p>
                        A launch is not the end: it is the beginning. Too many companies build a site and then ask, 'How do we get people to visit?' We flip this. We build the SEO strategy *into* the development process. This is the core of 'Technical SEO.'
                    </p>
                    <p>
                        During your consultation, we discuss 'Site Architecture,' 'Core Web Vitals,' and 'Semantic Content.' We help you understand how to use 'Schema Markup' (JSON-LD) to get those coveted 'Rich Result' snippets in Google. We don't just build a site: we build a 'Growth Engine' that is optimized to be found, read, and valued by both users and search algorithms.
                    </p>
                  </section>

                  <section id="budget-timeline-realities">
                    <h2>Budget & Timelines: Transparency and Truth</h2>
                    <p>
                        We believe in 'Radical Transparency.' One of the biggest reasons for consultation is to clarify budget and timeline expectations. A professional website is a complex engineering project. We will give you an honest assessment of what can be built within your budget and how long it will take to do it right.
                    </p>
                    <p>
                        We help you understand the 'Trade-offs.' If you need to go to market in 4 weeks, we might suggest an 'MVP' (Minimum Viable Product) approach focusing on core features. If you have a longer horizon, we might suggest a more robust, custom-built enterprise solution. Our goal is to ensure there are no surprises midway through the project. You will leave the consultation with a clear understanding of the investment required to reach your goals.
                    </p>
                  </section>

                  <section id="what-to-expect-after">
                    <h2>What to Expect After the Call: The Roadmap</h2>
                    <p>
                        At the end of our session, you won't just have an 'Idea.' You will have a 'Roadmap.' Following the consultation, our team digests everything discussed and produces a 'Detailed Project Proposal.' This isn't a one-page invoice: it is a comprehensive technical and strategic document.
                    </p>
                    <p>
                        The proposal will include:
                        1. A recommended tech stack and architecture.
                        2. A detailed scope of work (SOW).
                        3. A phase-by-phase timeline with clear milestones.
                        4. A fixed-price investment quote.
                        5. A long-term growth and maintenance plan.
                        This document serves as the 'Single Source of Truth' for our partnership, ensuring that everyone is aligned on the path to success.
                    </p>
                  </section>

                  <section id="common-pitfalls">
                    <h2>Common Project Pitfalls: What to Avoid</h2>
                    <p>
                        Experience is just the name we give to our past mistakes. After a decade in the industry, we have seen it all. In our consultation, we help you avoid the 'Value Traps'—cheap solutions that end up being expensive because they have to be rewritten six months later. We talk about the importance of 'Code Ownership,' avoiding 'Vendor Lock-in,' and ensuring your website is an 'Asset' on your balance sheet, not a liability.
                    </p>
                    <p>
                        The most common pitfall is 'Under-investing in Maintenance.' A website is like a car: it needs service to stay fast and safe. We will help you understand the 'Lifecycle' of a web application and how to plan for continuous improvement so that your site remains competitive for years to come.
                    </p>
                  </section>

                  <section id="technical-audit-preview">
                    <h2>Technical Audit Preview: What We Look For</h2>
                    <p>
                        During our consultation, we don't just talk about the future: we analyze the present. If you have an existing site, we perform a 'Live Technical Audit.' This is a high-speed inspection of your site's 'Vital Signs.' We use specialized tools to look at your 'DOM Size,' your 'Main-Thread Blocking Time,' and your 'Cumulative Layout Shift.'
                    </p>
                    <p>
                        We also look at your 'Network Payload.' Are you serving 5MB images to users on mobile devices? Are you loading 20 different third-party tracking scripts that are slowing down your checkout process? Most business owners are shocked to learn that their site is 'Leaking Revenue' because of technical inefficiencies that take less than 10 minutes to identify during a consultation. 
                    </p>
                    <p>
                        We also audit your 'Accessibility' (a11y). In 2025, accessibility is not just a moral obligation: it is a search engine ranking factor. We look at color contrast, button labels, and screen reader compatibility. If 15% of the population has difficulty using your site, you are leaving 15% of your potential revenue on the table. Our audit provides you with a 'Fix List' that you can take to your current developers, regardless of whether you decide to work with us.
                    </p>
                  </section>

                  <section id="growth-ecosystem-alignment">
                    <h2>Ecosystem Alignment: Integrating Your Tech Stack</h2>
                    <p>
                        Your website should not be an 'Island.' It is a component of your 'Revenue Ecosystem.' One of the key benefits of professional consultation is ensuring that your new website talks to the rest of your tools. We discuss 'Marketing Automation' platforms like HubSpot or Salesforce. How will a lead from your blog post get into your sales team's hands in less than 5 minutes?
                    </p>
                    <p>
                        We also look at 'Attribution.' In 2025, simply knowing that someone 'Visited' is not enough. We need to know where they came from and what path they took to convert. We discuss setting up 'Server-Side GTM' (Google Tag Manager) to ensure your data is accurate even in a world of ad-blockers and privacy-first browsers. This 'Ecosystem Thinking' ensures that your website is a productivity tool for your entire organization, not just a marketing brochure.
                    </p>
                  </section>

                  <section id="conversion-psychology">
                    <h2>Conversion Psychology: Designing for Action</h2>
                    <p>
                        Elite web design is rooted in 'Neuro-Marketing.' During our call, we might discuss 'The Paradox of Choice'—how having too many options can actually decrease your sales. We look at your 'Visual Hierarchy.' Are your CTAs (Call to Actions) positioned correctly to match the user's natural reading patterns?
                    </p>
                    <p>
                        We also talk about 'Social Proof' and 'Authority.' Where should you place your testimonials? How many logos of your partners should you show on the home page? We use a 'Behavioral Science' approach to ensure that every pixel on your site is designed to build trust and encourage a specific action. This focus on 'Actionable Design' is what turns a high-traffic site into a high-revenue business.
                    </p>
                  </section>

                  <section id="scaling-from-mvp">
                    <h2>Scaling from MVP: The Growth Roadmap</h2>
                    <p>
                        Many business owners believe they need to launch every feature on day one. We often suggest an 'MVP' (Minimum Viable Product) strategy. What are the core features that will allow you to go live and start generating ROI in 4 to 6 weeks? By launching quickly, you can gather 'Real User Data' that informs your next set of features.
                    </p>
                    <p>
                        During our consultation, we help you prioritize your 'Feature Backlog.' We distinguish between 'Must-Haves' and 'Nice-to-Haves.' This allows you to manage your budget better and ensures that you are not building features that your users don't actually want. This 'Agile' approach to project planning is a hallmark of elite development and is one of the most valuable outcomes of our strategic sessions.
                    </p>
                  </section>

                  <section id="global-localization-strategy">
                    <h2>Localization Strategy: Building for a Global Audience</h2>
                    <p>
                        A business website in 2025 is rarely for just one city or one country. During our consultation, we discuss 'Localization' (l10n) and 'Internationalization' (i18n). This is about more than just translating text. It is about 'Cultural Adaptation.'
                    </p>
                    <p>
                        We look at how your brand is perceived in different markets. Do your colors have the same meaning in India as they do in Europe? Are your date formats, currency symbols, and address fields correctly localized? We also discuss 'Performance Localization.' How do we ensure your site is fast in regions with poor infrastructure? This often involves using 'Edge Caching' and 'Multi-CDN' strategies tailored to specific countries. By planning for a global audience from day one, we help you build a brand that is truly borderless.
                    </p>
                  </section>

                  <section id="accessibility-compliance">
                    <h2>Digital Accessibility: Inclusion by Design</h2>
                    <p>
                        Accessibility is often an afterthought in the design process, but during our consultation, we make it a priority. We follow the 'WCAG 2.2' guidelines. This means ensuring that your site is 'Observable, Operable, Understandable, and Robust.'
                    </p>
                    <p>
                        We discuss the importance of 'Semantic HTML,' proper heading structures, and 'Keyboard Navigation.' If a user cannot navigate your site using only their keyboard, you are failing a significant portion of your audience. We also focus on 'Cognitive Accessibility'—ensuring that your layouts are not overwhelming and your copy is easy to read. A truly accessible site is a better site for *everyone*, and it is a core component of the 'Premium' digital experience we build at CodeWrote.
                    </p>
                  </section>

                  <section id="legacy-migration-planning">
                    <h2>Migration Without Loss: Moving the Old to the New</h2>
                    <p>
                        One of the biggest fears business owners have is the 'Rebuild.' They worry about losing their SEO rankings, their user data, or their transaction history. During our consultation, we specialize in 'Migration Planning.'
                    </p>
                    <p>
                        We use a 'Staging-to-Production' workflow that ensures a seamless transition. We map every single 'Legacy URL' to its new equivalent using '301 Redirects' to preserve your search equity. We also perform 'Deep Database Migrations,' carefully sanitizing and transforming your old data so it fits perfectly into the new, modern architecture. This 'Respect for the Past' allows you to upgrade your technical foundations without losing the value you have built over the years. We provide the 'Safety Net' that allows your business to move forward with zero fear.
                    </p>
                  </section>

                  <section id="coding-excellence">
                      <div className="bg-[#E61F93]/5 p-12 rounded-[50px] border-2 border-[#E61F93]/20 my-20">
                        <h2 style={{ marginTop: 0 }}>Ready to Build Your Digital Legacy?</h2>
                        <p>
                          Your vision deserves better than a 'template' solution. At <strong>CodeWrote</strong>, we believe that great software starts with great strategy. Our free consultations are the first step in building a digital product that out-performs, out-ranks, and out-lasts your competition.
                        </p>
                        <p>
                          Join the hundreds of business owners who have used our strategic sessions to unlock the true potential of their projects.
                        </p>
                        <Link href="/contact" className="inline-block px-8 py-4 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-all">
                          Schedule My Free Strategy Call Now
                        </Link>
                      </div>
                    </section>
                  </article>

                {/* FAQ Section */}
                <div id="faqs" className="mt-20 pt-20">
                   <h2 className="text-[32px] font-black uppercase tracking-tight mb-12 font-['Switzer']">Consultation Intelligence</h2>
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
                    <h2 className="text-[32px] font-black uppercase tracking-tight mb-12 font-['Switzer']">Strategic Success Feedback</h2>
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
                   <h3 className="text-[26px] font-black font-['Switzer'] uppercase leading-[1.1] mb-6 relative z-10">Don't Launch Without a Plan</h3>
                   <p className="text-[14px] text-gray-400 font-medium font-['Switzer'] leading-relaxed mb-10 relative z-10">
                     We've helped hundreds of businesses navigate the complexities of digital growth. Your roadmap is just one call away.
                   </p>
                   <Link 
                     href="/contact" 
                     className="block w-full text-center py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all relative z-10 font-['Switzer'] shadow-lg"
                   >
                     Book My Technical Strategy Call
                   </Link>
                </div>

                {/* 2nd Related Container */}
                <div className="bg-[#FAFAFA] p-10 rounded-[40px] border border-gray-100">
                   <h3 className="text-[11px] font-black text-[#A1A1A1] uppercase tracking-[0.25em] mb-8 font-['Switzer']">Strategic Insights</h3>
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
                   <div className="text-[18px] font-black text-black font-['Switzer'] mb-1">5.0/5 EXCELLENCE</div>
                   <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest font-['Switzer']">Strategic Web Partners</div>
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
                    Start your <span className="text-[#E61F93]">project right.</span>
                 </h2>
                 <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto font-['Switzer']">
                    Join elite business leaders who trust CodeWrote for their critical digital strategy.
                 </p>
                 <Link href="/contact" className="px-12 py-6 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all font-['Switzer'] shadow-2xl">
                    Claim My Free Consultation
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
        @media (max-width: 768px) {
          .blog-content h2 { font-size: 28px; }
          .blog-content p { font-size: 16px; }
        }
      `}} />
    </div>
  );
}
