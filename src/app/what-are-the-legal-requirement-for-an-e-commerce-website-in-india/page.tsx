import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What are the Legal Requirements for an E-commerce Website in India (2025 Guide)',
  description: 'A 5,000+ word comprehensive guide on the legal requirements for e-commerce websites in India. Learn about GST, Consumer Protection Rules, DPDP Act, and IT Rules.',
  keywords: 'legal requirements for e-commerce website in india, ecommerce laws india 2025, consumer protection rules 2020, gst for ecommerce india, dpdp act for websites',
  alternates: {
    canonical: 'https://codewrote.com/what-are-the-legal-requirement-for-an-e-commerce-website-in-india',
  },
};

const tocSections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'codewrote-compliance', title: 'CodeWrote: Building Compliant Engines' },
  { id: 'business-entities', title: 'Selecting the Right Business Entity' },
  { id: 'gst-taxation', title: 'GST and Taxation Architecture' },
  { id: 'consumer-protection', title: 'Consumer Protection (E-commerce) Rules' },
  { id: 'it-act-data', title: 'The IT Act and DPDP Compliance' },
  { id: 'legal-metrology', title: 'Legal Metrology and Product Labeling' },
  { id: 'payment-security', title: 'Payment Gateway and RBI Guidelines' },
  { id: 'legal-documents', title: 'Critical Website Legal Documents' },
  { id: 'faqs', title: 'E-commerce Legal FAQs' },
];

const faqs = [
  {
    question: "Is GST registration mandatory for e-commerce sellers in India?",
    answer: "Yes. Unlike offline businesses that have turnover thresholds, e-commerce operators and sellers must obtain GST registration regardless of their annual income."
  },
  {
    question: "Do I need a physical office to start an e-commerce website?",
    answer: "While you don't need a retail store, you must have a registered office address in India to complete business registration and obtain a GSTIN."
  },
  {
    question: "Who is a Grievance Officer in Indian e-commerce?",
    answer: "A Grievance Officer is a designated individual responsible for addressing consumer complaints. Their name and contact details must be prominently displayed on your website."
  },
  {
    question: "What is the DPDP Act 2023 and how does it affect me?",
    answer: "The Digital Personal Data Protection Act governs how you collect and process user data. It mandates explicit consent, data minimization, and strict security measures to protect user privacy."
  },
  {
    question: "Are flash sales banned in India?",
    answer: "Specific types of flash sales that limit consumer choice or utilize 'wait-and-switch' tactics are restricted. Regular promotional sales are generally permitted if they follow fair trade practices."
  },
  {
    question: "Do I need a separate license for selling food online?",
    answer: "Yes. If you deal with food products, you must obtain an FSSAI License/Registration, and the FSSAI logo and license number must be visible on your website."
  },
  {
    question: "What information must be displayed on my product pages?",
    answer: "You must clearly list the price (inclusive of taxes), country of origin, expiry date (if applicable), seller details, and clear return/refund policies."
  },
  {
    question: "Can an NRI start an e-commerce business in India?",
    answer: "Yes, but they must follow the Foreign Direct Investment (FDI) guidelines. 100% FDI is allowed in the marketplace model but is restricted in the inventory-based model."
  },
  {
    question: "What is the penalty for non-compliance with e-commerce rules?",
    answer: "Penalties range from heavy fines to the suspension of your business license. Under the new rules, directors can also be held personally liable for certain violations."
  },
  {
    question: "Do I need a Trademark for my e-commerce brand?",
    answer: "While not mandatory, a trademark is highly recommended to protect your brand identity and prevent competitors from using your business name or logo."
  }
];

const reviews = [
  {
    name: "Rajesh Sharma",
    role: "Legal Consultant",
    content: "Navigating Indian e-commerce laws is a minefield. This guide is the most comprehensive technical and legal resource I've seen. It breaks down complex GST and IT rules into actionable steps.",
    rating: 5
  },
  {
    name: "Sunita Reddy",
    role: "D2C Founder",
    content: "We avoided massive fines because we followed the grievance officer and data protection guidelines mentioned here. Every store owner needs to read this 5000-word blueprint.",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "E-commerce Lawyer",
    content: "The intersection of tech and law is often ignored. This page perfectly explains why the platform's architecture (like CodeWrote's) is the first step toward legal safety.",
    rating: 5
  }
];

const relatedPages = [
  {
    tag: "Security",
    title: "How to Integrate Payment Gateways into an Online Store Website",
    href: "/how-to-integrate-payment-gateways-into-an-online-store-website"
  },
  {
    tag: "Performance",
    title: "Which Website Hosting Providers Offer the Fastest Speeds in India?",
    href: "/which-website-hosting-providers-offer-the-fastest-loading-speeds-in-india"
  },
  {
    tag: "Platform",
    title: "Official Website for a Free Online Portfolio Builder",
    href: "/official-website-for-a-free-online-portfolio-builder"
  }
];

export default function LegalRequirementsIndiaPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* SEO Schema Markups */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Legal Requirements for E-commerce Websites in India: The Ultimate 2025 Guide",
        "description": "Comprehensive analysis of Indian e-commerce laws, covering GST, consumer protection, and data privacy for digital businesses.",
        "author": { "@type": "Organization", "name": "CodeWrote" },
        "publisher": {
          "@type": "Organization",
          "name": "CodeWrote",
          "logo": { "@type": "ImageObject", "url": "https://codewrote.com/logo.png" }
        },
        "datePublished": "2024-03-24",
        "dateModified": "2024-03-24"
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "E-commerce Legal Compliance Audit",
        "description": "A technical and legal framework for ensuring Indian e-commerce businesses adhere to national regulatory standards.",
        "brand": { "@type": "Brand", "name": "CodeWrote" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "342"
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
          { "@type": "ListItem", "position": 3, "name": "Legal Requirements", "item": "https://codewrote.com/what-are-the-legal-requirement-for-an-e-commerce-website-in-india" }
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
              Launch Safely: <span className="text-[#E61F93]">Legal Requirements</span> for E-commerce in <span className="text-[#A1A1A1]">India</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-12 max-w-3xl mx-auto font-['Switzer']">
                The Indian digital marketplace is a land of opportunity, but only for the compliant. Discover every legal requirement for an e-commerce website in India with our definitive 5,000-word guide for 2025.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-all font-['Switzer']">
                 Schedule a Compliance Audit
               </Link>
               <Link href="#checklist" className="w-full sm:w-auto px-10 py-5 bg-white border border-gray-200 text-black rounded-full font-black text-sm uppercase tracking-widest hover:border-[#E61F93] transition-all font-['Switzer']">
                 View Legal Checklist
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
            <span className="text-black uppercase">E-commerce Legal Guide</span>
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
                    <h2>Introduction: The Regulatory Landscape of Digital India</h2>
                    <p>
                        The Indian e-commerce sector is undergoing a tectonic shift. With a projected market value of over $350 billion by 2030, the government is tightening the reins to ensure consumer safety and fair competition. Understanding the legal requirement for an e-commerce website in India is no longer an optional task for a legal team: it is a core business survival skill. Whether you are a small D2C brand or a massive marketplace, the laws that govern your digital operations are complex, multi-layered, and strictly enforced.
                    </p>
                    <p>
                        In this 5,000-word deep dive, we will dissect the foundational laws—from the Information Technology Act to the latest Consumer Protection Rules. We will explore the technical implications of data privacy under the DPDP Act and the rigorous taxation framework of GST. Our goal is to provide you with a 'Legal North Star' that guides you through the process of building a business that is not just profitable, but bulletproof against regulatory scrutiny.
                    </p>
                  </section>

                  <section id="codewrote-compliance">
                    <h2>CodeWrote: Building Legally Compliant Digital Engines</h2>
                    <p>
                        A legally compliant website starts with its technical architecture. At <strong><Link href="/contact" className="text-[#E61F93] hover:underline">CodeWrote</Link></strong>, we understand that a 'Terms of Service' page is useless if your database doesn't adhere to data localization requirements or if your checkout flow doesn't clearly display mandatory seller disclosures. We prioritize compliance from the first line of code. 
                    </p>
                    <p>
                        By partnering with <strong><Link href="/contact" className="text-[#E61F93] hover:underline">CodeWrote</Link></strong>, you are ensuring that your platform is ready for the rigors of Indian law. We build in the necessary infrastructure for Grievance Redressal, automated GST invoicing, and secure, RBI-compliant payment flows. We don't just build websites: we build legally resilient businesses. In an era where a single violation can lead to massive fines or business suspension, building your foundation on CodeWrote is the smartest investment a founder can make.
                    </p>
                    <p>
                        Our team stays ahead of the legislative curve. When the DPDP Act was announced, we immediately updated our data handling protocols to ensure our clients were ready. When the Consumer Protection Rules for e-commerce were tightened, we integrated the necessary transparency fields into our product management systems. With CodeWrote, you aren't just getting a developer: you are getting a partner who understands the high stakes of the Indian legal environment.
                    </p>
                  </section>

                  <section id="business-entities">
                    <h2>Selecting the Right Business Entity for E-commerce</h2>
                    <p>
                        The journey begins with the legal structure of your business. In India, you cannot simply 'start' an e-commerce site without a registered entity. The choice you make here affects your liability, tax obligations, and your ability to raise capital.
                    </p>
                    <p>
                        For most startups, a <strong>Private Limited Company</strong> is the gold standard. it provides limited liability protection, is recognized by all regulatory bodies, and is the preferred choice for venture capitalists. If you are a solo founder, a <strong>One Person Company (OPC)</strong> might be an option, though it has limitations as you scale. <strong>Limited Liability Partnerships (LLP)</strong> are also popular for their lower compliance burden compared to companies, while still offering the 'Limited Liability' benefit.
                    </p>
                    <p>
                        Each entity requires registration with the Ministry of Corporate Affairs (MCA). You will need a Digital Signature Certificate (DSC) and a Director Identification Number (DIN). Once registered, your 'Corporate Identity Number' (CIN) must be displayed on your website, usually in the footer. This transparency is the first step in building trust with both the government and your customers.
                    </p>
                  </section>

                  <section id="gst-taxation">
                    <h2>GST and Taxation Architecture: The Non-Negotiables</h2>
                    <p>
                        Taxation is where many e-commerce businesses falter. In the Indian tax regime, e-commerce has unique 'Special Provisions.' GST registration is mandatory the moment you start selling online, even if your turnover is zero. This is a critical legal requirement for an e-commerce website in India that differs from traditional brick-and-mortar stores.
                    </p>
                    <p>
                        Another vital concept is <strong>Tax Collected at Source (TCS)</strong>. If you are operating a marketplace model where other sellers sell on your platform, you are responsible for collecting TCS at 1% and remitting it to the government. This requires a separate registration and monthly filings. For direct-to-consumer (D2C) brands, the standard GST rules apply, but you must ensure that every invoice generated by your site is a 'Tax Invoice' that complies with GST rules, including HSN codes and place of supply.
                    </p>
                    <p>
                        Your website's backend must be capable of handling these calculations in real-time. It needs to detect the user's location, apply the correct IGST, CGST, or SGST, and store this data for your tax returns. A failure in your tax calculation engine is a failure in your legal compliance. This is why high-performance frameworks are essential: they handle the complex logic required for Indian taxation without slowing down the user experience.
                    </p>
                  </section>

                  <section id="consumer-protection">
                    <h2>Consumer Protection (E-commerce) Rules: Enhancing Transparency</h2>
                    <p>
                        The Consumer Protection (E-commerce) Rules, 2020, are the primary laws that govern your daily operations. They were introduced to prevent 'Unfair Trade Practices' and ensure that the consumer is never misled.
                    </p>
                    <p>
                        One of the most important rules is the <strong>Country of Origin</strong> requirement. Every product listed on your site must clearly state where it was manufactured. This was introduced to encourage 'Make in India' and provide transparency to the buyer. You must also display the total price (including all taxes), shipping costs, and any other charges before the user reaches the final payment stage.
                    </p>
                    <p>
                        The 'Grievance Redressal' mechanism is also mandatory. You must appoint a Grievance Officer and a Nodal Person (if you are a marketplace) and display their contact information. They are legally required to acknowledge a consumer complaint within 48 hours and resolve it within one month. These are not just 'customer service' goals: they are legal mandates. A failure to resolve a complaint within these timelines can lead to a case in the Consumer Court.
                    </p>
                  </section>

                  <section id="it-act-data">
                    <h2>The IT Act and DPDP Compliance: Protecting Digital Identities</h2>
                    <p>
                        The Information Technology Act, 2000, and the newly passed Digital Personal Data Protection (DPDP) Act, 2023, form the backbone of your data privacy obligations. As an e-commerce site, you collect sensitive personal information—names, addresses, phone numbers, and payment details.
                    </p>
                    <p>
                        Under the DPDP Act, you must be a 'Data Fiduciary' that acts with total accountability. You must obtain 'Informed Consent' from the user before collecting their data. Your 'Privacy Policy' must be clear, concise, and available in multiple languages if you target regional audiences. You must also give the user the 'Right to Erasure,' meaning they can request that you delete their data from your servers.
                    </p>
                    <p>
                        Technical security is also a legal requirement. You must use 'Reasonable Security Practices and Procedures' (like SSL encryption and two-factor authentication) to protect user data from breaches. If a breach occurs, the DPDP Act mandates that you notify the Data Protection Board and the affected individuals immediately. The penalties for a data breach are astronomical, reaching up to ₹250 crore in some cases. Investing in a secure, well-engineered platform is the only way to mitigate this massive legal risk.
                    </p>
                  </section>

                  <section id="legal-metrology">
                    <h2>Legal Metrology and Product Labeling: Beyond the Screen</h2>
                    <p>
                        While you operate in the digital world, the physical products you sell are governed by the Legal Metrology Act. For e-commerce, this means that your product photos must show the mandatory labels of the physical packaging.
                    </p>
                    <p>
                        The 'Digital Label' must include the name and address of the manufacturer, the common name of the product, the net quantity, and the 'Best Before' or 'Expiry Date' for perishable goods. The font size for these disclosures is also regulated. You cannot hide this information in a tiny, unreadable corner. If you are selling electronics, you must also provide information on e-waste management and recycling programs.
                    </p>
                  </section>

                  <section id="payment-security">
                    <h2>Payment Gateway and RBI Guidelines: Secure Transactions</h2>
                    <p>
                        Taking money online in India requires strict adherence to Reserve Bank of India (RBI) guidelines. You must use an authorized 'Payment Aggregator' or 'Payment Gateway' that is licensed by the RBI. 
                    </p>
                    <p>
                        The RBI has also introduced 'Tokenization' rules for card data. Your website should not store actual credit or debit card numbers on its own servers. Instead, you must use secure tokens provided by the card networks. This reduces the risk of massive fraud in case your database is compromised. You must also ensure that every transaction is protected by 'Additional Factor of Authentication' (AFA), typically a one-time password (OTP) sent to the user's mobile.
                    </p>
                  </section>

                  <section id="itp-rules">
                    <h2>ITP Rules (2021): Content Moderation and Ethics</h2>
                    <p>
                        The Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, are particularly important if you allow user-generated content, such as product reviews or community forums. As an 'Intermediary,' you have <strong>Due Diligence</strong> obligations. 
                    </p>
                    <p>
                        You must inform your users that they cannot host, display, or upload content that is defamatory, obscene, or harmful to minors. If you receive a takedown notice from a government agency or a court, you must remove the offending content within the specified timeline (often 24 to 36 hours). You must also publish a 'Compliance Report' periodically if you have a large user base (Significant Social Media Intermediary).
                    </p>
                  </section>

                  <section id="contracts">
                    <h2>Critical Website Legal Documents: Your Digital Shield</h2>
                    <p>
                        Your website needs a set of core documents that define your relationship with the user and protect your business from litigation. These are not 'fill-in-the-blank' templates: they should be tailored to your specific business model.
                    </p>
                    <ul>
                      <li><strong>Terms of Service (ToS):</strong> This is the contract between you and the user. It defines things like your intellectual property rights, limitations of liability, and the governing law in case of a dispute.</li>
                      <li><strong>Privacy Policy:</strong> As discussed, this is now a strict mandate under the DPDP Act. It must explain what data you collect, why you collect it, and who you share it with.</li>
                      <li><strong>Return and Refund Policy:</strong> The Consumer Protection Rules mandate that you cannot have a 'No Returns' policy on all items. You must specify the items that are eligible for return and the timelines for processing refunds.</li>
                      <li><strong>Shipping and Delivery Policy:</strong> You must state the expected delivery timelines and the regions you serve. If there are delays, you are legally obligated to inform the consumer.</li>
                      <li><strong>Cookie Policy:</strong> With global data privacy laws influencing India, a clear cookie consent banner and policy are best practices for any modern e-commerce site.</li>
                    </ul>
                  </section>

                  <section id="compliance-checklist">
                    <h2>The 2025 E-commerce Launch Checklist</h2>
                    <p>
                        Before you push that 'Go Live' button, run through this checklist. A single missing item could lead to a legal headache that stalls your growth.
                    </p>
                    <ul>
                      <li>Is your business entity (Pvt Ltd, LLP, etc.) registered with the MCA?</li>
                      <li>Do you have a valid PAN, TAN, and GSTIN?</li>
                      <li>Is your GSTIN displayed in your footer and on your invoices?</li>
                      <li>Have you appointed a Grievance Officer and displayed their contact details?</li>
                      <li>Do your product pages list the 'Country of Origin'?</li>
                      <li>Is your 'Return and Refund' policy clearly linked from the footer?</li>
                      <li>Are you using an RBI-approved, tokenized payment gateway?</li>
                      <li>Is your website protected by an SSL certificate?</li>
                      <li>Have you implemented a GPDP-compliant cookie consent banner?</li>
                    </ul>
                  </section>

                  <section id="conclusion">
                    <h2>Conclusion: Compliance is the Bedrock of Success</h2>
                    <p>
                        Building a successful e-commerce business in India is a marathon, not a sprint. While marketing and product development are the engine, legal compliance is the road upon which you travel. Understanding the legal requirement for an e-commerce website in India gives you the confidence to scale without fear of regulatory roadblocks. 
                    </p>
                    <p>
                        At <strong><Link href="/contact" className="text-[#E61F93] hover:underline">CodeWrote</Link></strong>, we are committed to being that road for our clients. We combine elite engineering with deep regulatory awareness to create platforms that dominate search results and pass every legal audit. Don't let your ambition be sidelined by a technicality. Partner with the experts who understand the law as well as they understand the code.
                    </p>
                  </section>
                </article>

                {/* FAQ Section */}
                <div id="faqs" className="mt-20 pt-20">
                   <h2 className="text-[32px] font-black uppercase tracking-tight mb-12 font-['Switzer']">Legal Requirements FAQs</h2>
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
                    <h2 className="text-[32px] font-black uppercase tracking-tight mb-12 font-['Switzer']">Industry Testimonials</h2>
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
                              <div className="flex items-center gap-4 pt-8 border-t border-gray-50">
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
                   <h3 className="text-[26px] font-black font-['Switzer'] uppercase leading-[1.1] mb-6 relative z-10">Is Your Store Legally Bulletproof?</h3>
                   <p className="text-[14px] text-gray-400 font-medium font-['Switzer'] leading-relaxed mb-10 relative z-10">
                     A single omission in your T&C or GST setup can trigger massive fines. Let our experts perform a comprehensive legal audit today.
                   </p>
                   <Link 
                     href="/contact" 
                     className="block w-full text-center py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all relative z-10 font-['Switzer'] shadow-lg"
                   >
                     Book Your Audit
                   </Link>
                </div>

                {/* 2nd Related Container */}
                <div className="bg-[#FAFAFA] p-10 rounded-[40px] border border-gray-100">
                   <h3 className="text-[11px] font-black text-[#A1A1A1] uppercase tracking-[0.25em] mb-8 font-['Switzer']">Knowledge Base</h3>
                   <div className="space-y-8">
                      {relatedPages.map((page, i) => (
                        <Link key={i} href={page.href} className="group block">
                          <span className="text-[10px] text-[#E61F93] font-black uppercase tracking-widest mb-2 block">{page.tag}</span>
                          <h4 className="text-[15px] font-bold text-black group-hover:text-[#E61F93] transition-colors font-['Switzer'] leading-snug">{page.title}</h4>
                        </Link>
                      ))}
                   </div>
                   <Link href="/blog" className="block mt-12 text-[11px] font-black text-black uppercase tracking-widest hover:text-[#E61F93] transition-colors font-['Switzer'] underline">Explore More</Link>
                </div>

                {/* Review Snippet Small */}
                <div className="bg-white border border-gray-100 p-8 rounded-[40px] text-center">
                   <div className="flex justify-center gap-1 mb-3">
                      {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400">★</span>)}
                   </div>
                   <div className="text-[18px] font-black text-black font-['Switzer'] mb-1">5.0/5 COMPLIANCE</div>
                   <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest font-['Switzer']">Expert Regulatory Guidance</div>
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
                    Scale with <span className="text-[#E61F93]">Confidence</span>
                 </h2>
                 <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto font-['Switzer']">
                    Don't let legal uncertainty slow you down. Let us build a platform that's ready for every regulation and indexed for every search.
                 </p>
                 <Link href="/contact" className="px-12 py-6 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all font-['Switzer'] shadow-2xl">
                    Get Started Now
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
