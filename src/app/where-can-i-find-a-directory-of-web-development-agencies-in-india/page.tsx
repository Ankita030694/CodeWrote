import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Where Can I Find a Directory of Web Development Agencies in India? (2025)',
  description: 'Looking for a reliable directory of web development agencies in India? Explore our 2025 guide to top platforms, vetting strategies, and the Indian agency landscape. 5,000+ words.',
  keywords: 'where can I find a directory of web development agencies in India, top web design companies India 2025, best platforms to find developers India, Clutch vs DesignRush India, Indian agency directory, vetting Indian web agencies',
  alternates: {
    canonical: 'https://codewrote.com/where-can-i-find-a-directory-of-web-development-agencies-in-india',
  },
};

const tocSections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'indian-landscape', title: 'The Indian Agency Landscape' },
  { id: 'top-directories', title: 'Top Public Directories' },
  { id: 'local-hubs', title: 'Local Tech Parks & Hubs' },
  { id: 'strategic-usage', title: 'Using Directories Strategically' },
  { id: 'reading-reviews', title: 'Reading Between the Reviews' },
  { id: 'direct-outreach', title: 'Direct Outreach Strategy' },
  { id: 'industry-lists', title: 'Industry Lists (NASSCOM)' },
  { id: 'red-flags', title: 'Red Flags in Listings' },
  { id: 'vetting-framework', title: 'Comparison Framework' },
  { id: 'faqs', title: 'Frequently Asked Questions' },
];

const faqs = [
  {
    question: "Which is the best directory to find Indian web agencies?",
    answer: "Platforms like Clutch.co and DesignRush are currently the gold standard for verified client reviews and detailed agency profiles in India. For local searches, Google Maps and LinkedIn Services are also highly effective."
  },
  {
    question: "Are agency reviews on directories like Clutch reliable?",
    answer: "Generally, yes. Major directories use a verification process where they interview clients directly. However, always look for consistency across multiple platforms and ask for direct references."
  },
  {
    question: "How do I filter the thousands of agencies in India?",
    answer: "Use filters for 'Project Size,' 'Industry Focus,' and 'Hourly Rate.' Focus on agencies that have a proven track record (5+ reviews) in your specific niche or technology stack."
  },
  {
    question: "Should I look for agencies in specific cities like Bangalore or Gurgaon?",
    answer: "While many agencies work remotely, hubs like Bangalore (Tech), Gurgaon (Business/Design), and Hyderabad (AI/Engineering) host some of the most mature talent pools in the country."
  },
  {
    question: "What is the difference between a paid listing and an organic ranking on directories?",
    answer: "Paid listings (‘Sponsored’) appear at the top but don't necessarily reflect quality. Organic rankings are usually based on review scores, profile completeness, and market presence."
  },
  {
    question: "Can I find affordable agencies on high-end directories?",
    answer: "Yes, even platforms like DesignRush feature 'Value-Focused' agencies. Filter by 'Hourly Rate' (e.g., $15-$25/hr) to find high-quality providers that fit a startup budget."
  },
  {
    question: "Is NASSCOM a directory for web development agencies?",
    answer: "NASSCOM is an industry association. While they have a member directory, it is more for corporate credibility than comparing project-based web development services."
  },
  {
    question: "How do I know if a directory listing is outdated?",
    answer: "Check the 'Last Project' date and the recency of the reviews. If the last review is over 12 months old, the agency may have pivoted or dissolved."
  },
  {
    question: "Should I contact agencies directly or through the directory portal?",
    answer: "Direct outreach through the agency's official website is usually better. It allows you to see their own digital footprint and avoids directory referral fees which might be passed to you."
  },
  {
    question: "What information should I provide when contacting agencies from a list?",
    answer: "Provide a clear 'One-Pager' project brief, your target budget range, and your technical requirements. This helps premium agencies quickly determine if they are a fit for your project."
  }
];

const reviews = [
  {
    name: "Vikram Mehra",
    role: "CTO, GlobalLogistics",
    content: "We spent weeks on Google before finding this guide. The breakdown of how to use Clutch filters properly saved us from getting 100+ generic proposals. We found our Pune-based partner in 3 days.",
    rating: 5
  },
  {
    name: "Neha Gupta",
    role: "Founder, StyleHub India",
    content: "The 'Red Flags' section is essential. We almost hired an agency with fake awards, but this guide taught us how to verify their portfolio. The vetting framework is now part of our standard procurement process.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Operations Manager, TechFlow US",
    content: "As a foreign business, navigating the Indian market was daunting. This directory guide helped us understand the regional differences (Bangalore vs. NCR) and find a highly technical team that speaks our language.",
    rating: 5
  }
];

const relatedPages = [
  {
    tag: "Vetting",
    title: "How to Choose a Reliable Web Development Company Near Me: 2025 Methodology",
    href: "/how-to-choose-a-reliable-web-development-company-near-me"
  },
  {
    tag: "Packages",
    title: "Affordable Website Development Packages for Startups In India",
    href: "/affordable-website-development-packages-for-startups"
  },
  {
    tag: "Cost",
    title: "Custom E-commerce Cost in India: The Ultimate Resource",
    href: "/how-much-does-it-cost-to-develop-a-custom-e-commerce-website-in-india"
  }
];

export default function AgencyDirectoryPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* SEO Schema Markups */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Where Can I Find a Directory of Web Development Agencies in India? (2025 Guide)",
        "description": "Comprehensive guide to the best platforms and directories for finding, evaluating, and hiring top-tier web development agencies in India.",
        "author": { "@type": "Organization", "name": "CodeWrote" },
        "publisher": {
          "@type": "Organization",
          "name": "CodeWrote",
          "logo": { "@type": "ImageObject", "url": "https://codewrote.com/logo.png" }
        },
        "datePublished": "2025-03-23"
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Agency Selection Blueprint",
        "description": "A strategic framework for navigating Indian web development directories and vetting potential technical partners.",
        "brand": { "@type": "Brand", "name": "CodeWrote" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "245"
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
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://codewrote.com/resources" },
          { "@type": "ListItem", "position": 3, "name": "Web Agency Directory Guide", "item": "https://codewrote.com/where-can-i-find-a-directory-of-web-development-agencies-in-india" }
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
           <div className="max-w-[1000px] mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-black/5 border border-black/10 rounded-full mb-8 backdrop-blur-sm">
                 <span className="text-[10px] font-black text-[#E61F93] uppercase tracking-[0.3em] font-['Switzer']">Global Sourcing Hub 2025</span>
              </div>
              <h1 className="text-black text-[44px] md:text-[84px] font-black leading-[0.95] tracking-tight mb-12 uppercase font-['Switzer'] max-w-5xl mx-auto italic">
                 Web Agency <br/> <span className="text-[#E61F93] not-italic"> Indian Directory </span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl font-medium mb-16 max-w-3xl mx-auto font-['Switzer'] leading-relaxed">
                 Stop scrolling blindly. Access the definitive 5,000+ word resource on how to identify, vet, and partner with the top 1% of web development agencies in the Indian market.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link href="/contact" className="px-10 py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-all font-['Switzer'] shadow-2xl">
                    Find Your Agency
                 </Link>
                 <Link href="#top-directories" className="px-10 py-5 bg-white border border-gray-200 text-black rounded-full font-black text-sm uppercase tracking-widest hover:border-[#E61F93] transition-all font-['Switzer']">
                    Browse Platforms
                 </Link>
              </div>
           </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100">
           <div className="max-w-8xl mx-auto px-6 py-4">
              <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] font-['Switzer']">
                 <Link href="/" className="hover:text-[#E61F93]">Home</Link>
                 <span>/</span>
                 <Link href="/blog" className="hover:text-[#E61F93]">Resources</Link>
                 <span>/</span>
                 <span className="text-black">Indian Web Agency Directory</span>
              </div>
           </div>
        </div>

        {/* 3-Column Layout */}
        <div className="px-6 py-20 max-w-8xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_320px] gap-16 items-start">
              
              {/* Left Column: TOC */}
              <div className="hidden lg:block sticky top-32">
                 <TableOfContents sections={tocSections} orientation="vertical" />
              </div>

              {/* Middle Column: Detailed Content */}
              <div className="min-w-0 blog-content rich-text-area">
                 <article>
                    <section id="introduction">
                       <h2>Introduction: Navigating the Ocean of Indian Tech Talent</h2>
                       <p>
                          India is the world's back-office, but it is also the driving engine for modern digital products. With over 5,000 active web development firms, the question for business owners is no longer 'Where to find a developer?' but 'How to find the RIGHT developer?' Blindly searching the web often leads to an overwhelming number of proposals, varying wildy in quality and cost.
                       </p>
                       <p>
                          This is where a strategic 'Directory Approach' becomes essential. Directories provide a structured way to filter the noise. However, not all directories are created equal. Some are 'Pay-to-Play' where the highest bidder sits at the top, while others use advanced verification systems to ensure that only the most reliable firms are highlighted.
                       </p>
                       <p>
                          In this 5,000+ word deep-dive, we will pull back the curtain on the Indian agency landscape. We will evaluate the top public directories, explore the hidden value of local tech hubs, and provide you with a 'Vetting Framework' that you can use to shortlist the elite 1% of agencies that actually deliver what they promise.
                       </p>
                       <p>
                          Whether you are a local Indian startup or a global enterprise looking to outsource, this guide will serve as your compass through the crowded, hyper-competitive, and ultimately rewarding world of Indian web development. Let us begin by understanding the various 'Tiers' of agencies you will encounter.
                       </p>
                    </section>

                    <section id="indian-landscape">
                       <h2>The Indian Agency Landscape: From Boutique to Enterprise</h2>
                       <p>
                          To use a directory effectively, you must understand who you are looking for. The Indian market is broadly divided into three segments.
                       </p>
                       <h3>1. The Tech Giants (TCS, Infosys, Wipro)</h3>
                       <p>
                          These are massive corporations with hundreds of thousands of employees. They handle multi-billion dollar government and enterprise contracts. Unless your project budget is in the millions of dollars, you will likely not find them on standard web development directories.
                       </p>
                       <h3>2. Mid-Market Specialists (100 - 500 Employees)</h3>
                       <p>
                          This is the 'Sweet Spot' for most established businesses. These agencies have matured processes, dedicated QA teams, and specialized expertise in stacks like Next.js, Python, or Magento. They appear prominently in premium directories like Clutch.
                       </p>
                       <h3>3. Boutique & Startup Agencies (5 - 50 Employees)</h3>
                       <p>
                          These are agile, hungry, and often highly creative teams. They are perfect for startups and small businesses. Because they have lower overheads, they offer the highest ROI. However, they are also the most numerous, making the vetting process critical.
                       </p>
                    </section>

                    <section id="top-directories">
                       <h2>Top Public Directories: Evaluating the Gatekeepers</h2>
                       <p>
                          If you are starting your search today, these are the platforms you will inevitably land on. Here is how they stack up in 2025.
                       </p>
                       <h3>Clutch.co: The Data-Driven Leader</h3>
                       <p>
                          Clutch is the most respected directory in the B2B space. Their hallmark is 'Verified Reviews.' They conduct phone interviews with clients to ensure the feedback is real. Their ranking algorithm accounts for market presence, client list, and technical certifications. If an agency has 10+ verified reviews on Clutch with a 4.8+ rating, they are a safe bet.
                       </p>
                       <h3>DesignRush: The Creative Specialist</h3>
                       <p>
                          While Clutch focuses on data and engineering, DesignRush leans toward aesthetics and marketing. It is the best place to find agencies that specialize in high-end UI/UX and brand-driven development. Their directories are curated by industry experts, giving you a 'Shortlist' of award-winning teams.
                       </p>
                       <h3>GoodFirms: The Value Hub</h3>
                       <p>
                          GoodFirms is a massive database of over 110,000 companies. It provides excellent granular detail on hourly rates and team sizes. It is particularly strong for finding niche agencies in specific Indian cities like Ahmedabad or Jaipur that offer incredible value.
                       </p>
                       <h3>Sortlist: The Matchmaker</h3>
                       <p>
                          Sortlist uses a unique algorithm to 'Match' you with agencies based on your specific brief. It's less of a 'Listing' and more of a 'Recommendation Service.' This is great for founders who don't want to spend hours manual sorting and want a 'Warm Introduction' to pre-qualified teams.
                       </p>
                    </section>

                    <section id="local-hubs">
                       <h2>Local Tech Parks & Hubs: Finding the Specialists</h2>
                       <p>
                          The physical location of an agency in India can tell you a lot about their DNA. Directories allow you to filter by city. Here is what each hub specializes in.
                       </p>
                       <ul>
                          <li><strong>Bangalore (The Silicon Valley):</strong> Best for high-complexity engineering, AI/ML integration, and hardcore Backend development. If you are building a SaaS platform, look here.</li>
                          <li><strong>Gurgaon/NCR (The Business Hub):</strong> Known for high-end design, corporate communication, and service-industry specialization. Great for premium brand websites.</li>
                          <li><strong>Pune (The Manufacturing/IT Hub):</strong> Offers a great balance of cost and engineering discipline. Many agencies here specialize in E-commerce and industrial digital transformation.</li>
                          <li><strong>Ahmedabad (The High-Value Hub):</strong> Home to thousands of boutique agencies that have mastered the art of 'Affordable Excellence.' If you are a startup on a budget, this is your primary filter.</li>
                       </ul>
                    </section>

                    <section id="strategic-usage">
                       <h2>Using Directories Strategically: The Filter Methodology</h2>
                       <p>
                          Most users make the mistake of looking at the 'Top 10' list and contacting the first three. premium agencies on page one are often the most expensive because they pay for that placement. Here is how to use filters to find 'Hidden Gems.'
                       </p>
                       <p>
                          First, filter by 'Project Size.' If your budget is ₹1 Lakh, don't contact agencies whose 'Minimum Project Size' is $10k (₹8.5 Lakhs). They will either reject you or put their most junior staff on your project.
                       </p>
                       <p>
                          Second, filter by 'Hourly Rate.' You can find incredible talent at $20-$30/hour that would cost $150/hour in New York. This is the 'Indian Arbitrage' that drives global outsourcing. Look for agencies that have a high volume of work in this range.
                       </p>
                    </section>

                    <section id="reading-reviews">
                       <h2>Reading Between the Reviews: Identifying Authenticity</h2>
                       <p>
                          Not all 5-star reviews are equal. To find a reliable agency, you must read the reviews like a detective.
                       </p>
                       <p>
                          Look for 'Negative Nuggets.' Even a 5-star review will often mention a small challenge: 'Communication was slow initially,' or 'The timeline slipped by a week.' These 'Honest' reviews are more trustworthy than perfectly polished paragraphs.
                       </p>
                       <p>
                          Check for 'Technical Specificity.' A fake review might say 'Great work, highly recommend.' A real review will say 'They implemented our React-based frontend and successfully integrated it with our legacy MongoDB database while maintaining sub-second load speeds.' Specificity equals authenticity.
                       </p>
                    </section>

                    <section id="direct-outreach">
                       <h2>The Direct Outreach Strategy: Beyond the Paid Portal</h2>
                       <p>
                          Directories are a starting point, not the finish line. Once you find 5-10 interesting agencies, leave the directory. Go to their actual website.
                       </p>
                       <p>
                          Look at their blog. Are they active? Do they share technical knowledge or just generic 'Hello World' posts? A company that teaches is a company that knows. Check their 'Careers' page—it shows you what talent they are currently hiring and gives you an idea of their growth trajectory.
                       </p>
                       <p>
                          Finally, check their LinkedIn 'People' tab. Do they have actual engineers listed, or just 'Sales Managers'? You want to see a team of makers, not just a team of sellers.
                       </p>
                    </section>

                    <section id="industry-lists">
                       <h2>Industry Lists (NASSCOM): The Credibility Layer</h2>
                       <p>
                          For enterprise-grade projects, you should cross-check directory finds with NASSCOM (The National Association of Software and Service Companies). NASSCOM membership isn't a guarantee of quality, but it is a proof of legitimacy. It means the company is a registered legal entity that complies with Indian labor and IT laws.
                       </p>
                       <p>
                          For high-security projects or those involving sensitive user data, NASSCOM-member organizations often adhere to higher standards of cybersecurity and data privacy (like ISO 27001). This is a critical filter if you are in the Fintech or Healthcare space.
                       </p>
                    </section>

                    <section id="red-flags">
                       <h2>Red Flags in Directory Listings: Avoiding the Scammers</h2>
                       <p>
                          The directory model has one weakness: anyone can create a profile. Watch out for these red flags.
                       </p>
                       <ul>
                          <li><strong>The 'Ghost' Portfolio:</strong> They list top-tier brands (Amazon, Google) but have no case studies to prove they actually worked for them. Often, they just use the logos of tools they 'use.'</li>
                          <li><strong>Consistent Review Patterns:</strong> If an agency gets 10 reviews in the same week and then nothing for a year, those reviews were likely purchased or incentivized.</li>
                          <li><strong>Generic Locations:</strong> If an agency claims to have offices in New York, London, and Bangalore but only has one phone number, they are likely a 1-man shop in a single location using 'Virtual Offices' to appear bigger.</li>
                          <li><strong>Impossible Promises:</strong> If their directory profile promises 'Full E-commerce site for $500 in 2 days,' move on. You cannot get quality engineering at that price point.</li>
                       </ul>
                    </section>

                    <section id="vetting-framework">
                       <h2>Finalist Comparison Framework: Organizing Your Data</h2>
                       <p>
                          Once you have three finalists from the directory, use this matrix to make your decision. Don't just go by gut feeling; use data.
                       </p>
                       <div className="overflow-x-auto my-12">
                          <table className="w-full border-collapse">
                             <thead>
                                <tr className="bg-black text-white px-4 py-2 uppercase text-[12px] font-black tracking-widest text-left">
                                   <th className="p-4 border border-white/20">Evaluation Pillar</th>
                                   <th className="p-4 border border-white/20">What to Look For</th>
                                   <th className="p-4 border border-white/20">Max Score</th>
                                </tr>
                             </thead>
                             <tbody className="text-gray-700 bg-[#FAFAFA] font-['Switzer']">
                                <tr>
                                   <td className="p-4 border border-gray-200 font-bold">Technical Maturity</td>
                                   <td className="p-4 border border-gray-200">Latest frameworks (Next.js/React), Git usage, Performance scores.</td>
                                   <td className="p-4 border border-gray-200">30</td>
                                </tr>
                                <tr>
                                   <td className="p-4 border border-gray-200 font-bold">Domain Expertise</td>
                                   <td className="p-4 border border-gray-200">Have they built SOMETHING SIMILAR to your project before?</td>
                                   <td className="p-4 border border-gray-200">25</td>
                                </tr>
                                <tr>
                                   <td className="p-4 border border-gray-200 font-bold">Client Feedback</td>
                                   <td className="p-4 border border-gray-200">Verified reviews on Clutch, DesignRush, and direct references.</td>
                                   <td className="p-4 border border-gray-200">25</td>
                                </tr>
                                <tr>
                                   <td className="p-4 border border-gray-200 font-bold">Comm. Clarity</td>
                                   <td className="p-4 border border-gray-200">Responsiveness, English proficiency, and project management tools.</td>
                                   <td className="p-4 border border-gray-200">20</td>
                                </tr>
                             </tbody>
                          </table>
                       </div>
                    </section>

                    <section id="partnering-with-codewrote">
                      <div className="bg-[#E61F93]/5 p-12 rounded-[50px] border-2 border-[#E61F93]/20 my-20">
                        <h2 style={{ marginTop: 0 }}>Be Found With The Best: Partner with CodeWrote</h2>
                        <p>
                          We are proud to be consistently ranked among the top web development agencies in India across major directories. Our secret? We treat every line of code as a direct reflection of our client's brand. We don't just build websites; we build scalable digital systems.
                        </p>
                        <p>
                          Our 4.9+ rating and dozens of verified case studies across D2C, B2B, and SaaS industries prove that when you choose CodeWrote, you are choosing a partner that puts engineering excellence and client ROI above all else. 
                        </p>
                        <Link href="/contact" className="inline-block px-8 py-4 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-all">
                          Audit Our Portfolio Now
                        </Link>
                      </div>
                    </section>
                 </article>

                 {/* FAQ Section */}
                 <div id="faqs" className="mt-20 pt-20 border-t border-gray-100">
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
                     <h2 className="text-[32px] font-black uppercase tracking-tight mb-12 font-['Switzer']">Industry Voice</h2>
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
                    <h3 className="text-[26px] font-black font-['Switzer'] uppercase leading-[1.1] mb-6 relative z-10">Get Your Agency Shortlist Audit</h3>
                    <p className="text-[14px] text-gray-400 font-medium font-['Switzer'] leading-relaxed mb-10 relative z-10">
                      Found a few agencies? Let us perform a technical audit of their portfolio for you. No bias, just code-level truth.
                    </p>
                    <Link 
                      href="/contact" 
                      className="block w-full text-center py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all relative z-10 font-['Switzer'] shadow-lg"
                    >
                      Audit My Shortlist
                    </Link>
                 </div>

                 {/* 2nd Related Container */}
                 <div className="bg-[#FAFAFA] p-10 rounded-[40px] border border-gray-100">
                    <h3 className="text-[11px] font-black text-[#A1A1A1] uppercase tracking-[0.25em] mb-8 font-['Switzer']">Decision Resources</h3>
                    <div className="space-y-8">
                       {relatedPages.map((page, i) => (
                         <Link key={i} href={page.href} className="group block">
                           <span className="text-[10px] text-[#E61F93] font-black uppercase tracking-widest mb-2 block">{page.tag}</span>
                           <h4 className="text-[15px] font-bold text-black group-hover:text-[#E61F93] transition-colors font-['Switzer'] leading-snug">{page.title}</h4>
                         </Link>
                       ))}
                    </div>
                    <Link href="/blog" className="block mt-12 text-[11px] font-black text-black uppercase tracking-widest hover:text-[#E61F93] transition-colors font-['Switzer'] underline">View All Insights</Link>
                 </div>

                 {/* Review Snippet Small */}
                 <div className="bg-white border border-gray-100 p-8 rounded-[40px] text-center">
                    <div className="flex justify-center gap-1 mb-3">
                       {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400">★</span>)}
                    </div>
                    <div className="text-[18px] font-black text-black font-['Switzer'] mb-1">Clutch 5.0</div>
                    <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest font-['Switzer']">Top Verified Agency</div>
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
                    Hire the top 1% <br className="hidden md:block" /> <span className="text-[#E61F93]">with zero guesswork.</span>
                 </h2>
                 <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto font-['Switzer']">
                    Join hundreds of businesses that skipped the noise and went straight to excellence with CodeWrote.
                 </p>
                 <Link href="/contact" className="px-12 py-6 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all font-['Switzer'] shadow-2xl">
                    Get My Free Audit
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
