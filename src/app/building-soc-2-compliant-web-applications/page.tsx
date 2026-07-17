import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Building SOC 2 Compliant Web Applications',
  description: 'Failing enterprise security audits? Learn how elite agencies engineer SOC 2 and HIPAA compliant web applications with Security by Design from day one.',
  keywords: 'soc 2 compliant web application development, hipaa compliant software development, secure saas architecture, enterprise software security audit, compliance engineering',
  alternates: {
    canonical: 'https://codewrote.com/building-soc-2-compliant-web-applications',
  },
};

const tocSections = [
  { id: 'introduction', title: 'The Sales Roadblock' },
  { id: 'what-is-soc2', title: 'What is SOC 2?' },
  { id: 'cost-of-retrofitting', title: 'The Cost of Retrofitting' },
  { id: 'security-by-design', title: 'Security by Design' },
  { id: 'cloud-infrastructure', title: 'Cloud Infrastructure' },
  { id: 'data-encryption', title: 'Data Encryption Standards' },
  { id: 'rbac', title: 'Role-Based Access (RBAC)' },
  { id: 'audit-logging', title: 'Comprehensive Audit Logging' },
  { id: 'penetration-testing', title: 'Penetration Testing' },
  { id: 'soc2-vs-hipaa', title: 'SOC 2 vs HIPAA' },
  { id: 'roi-enterprise-revenue', title: 'ROI: Unlocking Revenue' },
  { id: 'conclusion', title: 'Engineering for Trust' }
];

const faqs = [
  {
    question: "What does SOC 2 compliant web application development actually entail?",
    answer: "It means engineering your software to meet the five 'Trust Services Criteria' established by the AICPA: Security, Availability, Processing Integrity, Confidentiality, and Privacy. Technically, this requires implementing strict infrastructure access controls, network firewalls, data encryption, and immutable audit logs directly into the codebase."
  },
  {
    question: "Why is an enterprise software security audit so difficult to pass?",
    answer: "Enterprise clients (like banks or Fortune 500s) cannot afford to be the victim of a supply-chain attack. Their procurement teams will ruthlessly examine your server architecture, password hashing algorithms, database isolation methods, and employee access logs. If you built your MVP using cheap offshore freelancers, you will almost certainly fail this audit."
  },
  {
    question: "Can you retrofit security into an existing application?",
    answer: "Yes, but it is incredibly painful and expensive. Retrofitting often requires ripping out foundational database structures to add Row-Level Security, rewriting authentication flows, and halting all new feature development for up to 6 months. This is why 'Security by Design' from day one is the most cost-effective strategy."
  },
  {
    question: "Is HIPAA compliant software development different from SOC 2?",
    answer: "Yes. While SOC 2 is a set of auditing standards for general data security, HIPAA is a strict US federal law protecting Protected Health Information (PHI). HIPAA requires even more stringent safeguards, such as Business Associate Agreements (BAAs) with all server providers, specialized encryption algorithms, and automated log-off procedures."
  },
  {
    question: "How does a secure SaaS architecture accelerate sales?",
    answer: "When an enterprise procurement team asks for your security documentation, handing them a comprehensive, architecturally verified SOC 2 Type II report instantly eliminates friction. It proves you are a mature vendor, shortening a typical 9-month enterprise sales cycle down to a matter of weeks."
  }
];

const reviews = [
  {
    name: "Eleanor Vance",
    role: "CEO, FinStream Data",
    content: "We lost a massive banking contract because our MVP failed their security audit. We partnered with CodeWrote to completely rebuild our platform with SOC 2 compliant web application development. We passed the next audit flawlessly.",
    rating: 5
  },
  {
    name: "Dr. Aris Thorne",
    role: "Founder, MedChart SaaS",
    content: "HIPAA compliant software development is not something you can leave to chance or cheap templates. CodeWrote's deep understanding of secure SaaS architecture and encryption standards saved our business from massive legal liabilities.",
    rating: 5
  },
  {
    name: "Marcus Wright",
    role: "VP of Sales, OmniFlow",
    content: "Before CodeWrote rebuilt our architecture, our sales team dreaded the security questionnaire phase of enterprise deals. Now, our infrastructure is our biggest selling point. Security by Design is absolutely a revenue driver.",
    rating: 5
  }
];

export default function Soc2CompliancePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Search Engine Optimized Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "The Founder’s Guide to Building SOC 2 Compliant Web Applications",
        "description": "Stop failing enterprise security audits. Learn how elite agencies build SOC 2 and HIPAA compliant web apps from day one to unlock enterprise revenue.",
        "author": { "@type": "Organization", "name": "CodeWrote" },
        "publisher": {
          "@type": "Organization",
          "name": "CodeWrote",
          "logo": { "@type": "ImageObject", "url": "https://codewrote.com/logo.png" }
        },
        "datePublished": "2024-12-18",
        "dateModified": "2024-12-18"
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
              SOC 2 <span className="text-[#E61F93]">Compliance</span> & <span className="text-[#A1A1A1]">Security</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-12 max-w-3xl mx-auto font-['Switzer']">
              Are failed security audits costing you massive enterprise contracts? Discover how elite engineering agencies architect bulletproof web applications using 'Security by Design'.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-all font-['Switzer']">
                 Audit Your Architecture
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
            <Link href="/building-soc-2-compliant-web-applications" className="text-black">Compliance Engineering</Link>
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
                    <h2>The Enterprise Sales Roadblock</h2>
                    <p>
                        It is a story we hear constantly. A startup raises their seed round, hires a cheap offshore development team, and rushes a Minimum Viable Product (MVP) to market. The software works. The user interface looks beautiful. After months of grueling outbound sales, the founder finally lands a massive, six-figure contract with a Fortune 500 company or a major hospital network. 
                    </p>
                    <p>
                        The champagne is poured. But then, the enterprise procurement team sends over a 200-question Vendor Security Assessment. They demand to see the application's SOC 2 Type II compliance report, proof of encrypted data at rest, and detailed penetration testing results. The startup, having built their MVP on a fragile, insecure foundation, fails the audit immediately. The six-figure contract is cancelled.
                    </p>
                    <p>
                        This guide is the antidote to that nightmare. We will explore the rigorous discipline of <strong>SOC 2 compliant web application development</strong>, explaining why building with a "Security by Design" philosophy is not just a technical requirement, but a massive competitive advantage that unlocks unlimited enterprise revenue.
                    </p>
                  </section>

                  <section id="what-is-soc2">
                    <h2>What is SOC 2 Compliance?</h2>
                    <p>
                        Service Organization Control 2 (SOC 2) is a voluntary compliance standard for service organizations, developed by the American Institute of CPAs (AICPA). It specifies exactly how organizations should manage customer data. 
                    </p>
                    <p>
                        Unlike a simple software bug test, an <strong>enterprise software security audit</strong> for SOC 2 evaluates your entire organizational posture across five Trust Services Criteria: Security (protection against unauthorized access), Availability (guaranteed uptime), Processing Integrity (data delivery is accurate and authorized), Confidentiality (data access is restricted), and Privacy (personal information is collected and used properly). Achieving this compliance is impossible if your web application's underlying architecture is fundamentally flawed.
                    </p>
                  </section>

                  <section id="cost-of-retrofitting">
                    <h2>The Crippling Cost of Retrofitting Security</h2>
                    <p>
                        Founders often ask, "Can we just build the app quickly now and add security later when we have more money?" 
                    </p>
                    <p>
                        The answer is technically yes, but financially disastrous. Retrofitting a non-compliant application is like trying to pour a concrete foundation after the house is already built. To achieve compliance on a legacy MVP, your engineering team will be forced to halt all new feature development for 6 to 9 months. They will have to rip out the entire database schema to implement Row-Level Security, rewrite thousands of lines of authentication logic, and manually patch hundreds of vulnerable third-party libraries. 
                    </p>
                    <p>
                        During this downtime, your competitors will steal your market share. This is why partnering with an elite agency to engineer a <strong>secure saas architecture</strong> from day one is the most capital-efficient strategy a founder can employ.
                    </p>
                  </section>

                  <section id="security-by-design">
                    <h2>Security by Design: A Core Philosophy</h2>
                    <p>
                        "Security by Design" means that cybersecurity is not a plugin you install right before launch; it is an architectural philosophy that dictates every single line of code written. 
                    </p>
                    <p>
                        When an elite agency builds a platform, we assume that the system is constantly under attack. We do not trust user input. We do not trust internal network traffic. We utilize strict input validation, parameterized database queries to prevent SQL injection, and advanced rate-limiting algorithms to neutralize Distributed Denial of Service (DDoS) attacks before they ever reach your core servers.
                    </p>
                  </section>

                  <section id="cloud-infrastructure">
                    <h2>Infrastructure and Cloud Architecture</h2>
                    <p>
                        SOC 2 compliance heavily scrutinizes where your servers live and who can talk to them. 
                    </p>
                    <p>
                        We architect applications within a Virtual Private Cloud (VPC) on enterprise-grade providers like Amazon Web Services (AWS) or Google Cloud Platform (GCP). Within this VPC, we implement strict network segmentation. The database servers are placed in a "private subnet" with no direct internet access whatsoever. The only way to communicate with the database is through highly secured, tightly monitored application servers sitting in a "public subnet," sitting behind a massive Web Application Firewall (WAF).
                    </p>
                  </section>

                  <section id="data-encryption">
                    <h2>Data Encryption (At Rest and In Transit)</h2>
                    <p>
                        If a hacker somehow manages to steal your physical hard drives from an AWS data center, what happens? If you are compliant, absolutely nothing happens.
                    </p>
                    <p>
                        Proper <strong>SOC 2 compliant web application development</strong> requires flawless encryption. Data must be encrypted "In Transit" using modern TLS 1.3 protocols, ensuring that anyone trying to intercept data passing between a user's browser and your server only sees cryptographic gibberish. Furthermore, data must be encrypted "At Rest" using AES-256 algorithms. Even if a malicious actor accesses the raw database files, the information is mathematically impossible to read without the highly guarded master decryption keys.
                    </p>
                  </section>

                  <section id="rbac">
                    <h2>Role-Based Access Control (RBAC)</h2>
                    <p>
                        The biggest threat to your enterprise data is not always a hooded hacker in a basement; it is often your own employees or users having too much access. 
                    </p>
                    <p>
                        A core tenet of compliance is the "Principle of Least Privilege." We engineer sophisticated Role-Based Access Control (RBAC) systems directly into the application logic. A marketing intern should mathematically not have the ability to view raw customer financial data. An entry-level support agent should not have the ability to permanently delete a user account. By explicitly defining and enforcing digital boundaries, we drastically reduce the internal attack surface of your application.
                    </p>
                  </section>

                  <section id="audit-logging">
                    <h2>Comprehensive Audit Logging and Monitoring</h2>
                    <p>
                        In the event of a security incident, ignorance is your greatest liability. SOC 2 auditors will demand proof that you know exactly who did what, and when they did it.
                    </p>
                    <p>
                        We build immutable audit logging directly into the core architecture. Every time a user logs in, changes a password, exports a CSV file, or views a sensitive record, the action is cryptographically timestamped and logged to an isolated server that cannot be altered or deleted. If a breach occurs, this highly detailed forensic trail allows security teams to isolate the threat and neutralize it in minutes, proving to your enterprise clients that you are in absolute control of your platform.
                    </p>
                  </section>

                  <section id="penetration-testing">
                    <h2>Vulnerability Scanning and Penetration Testing</h2>
                    <p>
                        You cannot claim your software is secure simply because you wrote the code carefully. You must prove it through aggressive, simulated warfare.
                    </p>
                    <p>
                        Our development pipelines integrate continuous vulnerability scanning. Every time a developer commits a new line of code, automated tools scan it against a database of known vulnerabilities (CVEs) before it is allowed to reach production. Furthermore, we prepare your application for rigorous Penetration Testing—where you pay ethical "White Hat" hackers to actively try to break into your system, ensuring your defenses hold up against real-world, coordinated attacks.
                    </p>
                  </section>

                  <section id="soc2-vs-hipaa">
                    <h2>The Intersection of SOC 2 and HIPAA</h2>
                    <p>
                        If your startup is entering the medical or health-tech space, the stakes are exponentially higher. 
                    </p>
                    <p>
                        <strong>HIPAA compliant software development</strong> (Health Insurance Portability and Accountability Act) is a strict federal legal requirement, not just a voluntary certification. While SOC 2 focuses on general security, HIPAA mandates extreme protections specifically for Protected Health Information (PHI). We architect HIPAA-compliant systems by ensuring that all third-party services sign Business Associate Agreements (BAAs), implementing strict session timeout logic, and ensuring that backup servers are geographically isolated and encrypted to federal standards.
                    </p>
                  </section>

                  <section id="roi-enterprise-revenue">
                    <h2>ROI: Unlocking Enterprise Revenue</h2>
                    <p>
                        Many founders view security and compliance purely as a massive expense—a necessary evil dictated by lawyers. This is a flawed perspective. 
                    </p>
                    <p>
                        A verified, SOC 2 compliant architecture is actually a massive revenue driver. When you sit down at the negotiating table with a Fortune 500 company, handing them a flawless security report instantly builds immense trust. It separates you from the hundreds of amateur startups competing for the same contract. It drastically shortens the sales cycle, moving you from the procurement phase to the closing phase in record time.
                    </p>
                  </section>

                  <section id="conclusion">
                    <h2>Conclusion: Engineering for Trust</h2>
                    <p>
                        In the modern digital economy, trust is your most valuable currency. A single massive data breach will not just lose you a client; it will destroy your company's reputation permanently. 
                    </p>
                    <p>
                        Stop relying on fragile MVPs built by unverified freelancers. By partnering with an elite engineering agency like CodeWrote, you guarantee that your application is built on a foundation of cryptographic security and architectural discipline. Whether you need <strong>SOC 2 compliant web application development</strong> or strict <strong>HIPAA compliant software development</strong>, we engineer the trust necessary for you to dominate the enterprise market.
                    </p>
                  </section>
                </article>

                {/* FAQ Section */}
                <div id="faqs" className="mt-8">
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
                      <Link href="/single-tenant-vs-multi-tenant-saas-architecture" className="group block">
                        <span className="text-[10px] text-[#E61F93] font-black uppercase tracking-widest mb-2 block">architecture</span>
                        <h4 className="text-[15px] font-bold text-black group-hover:text-[#E61F93] transition-colors font-['Switzer'] leading-snug">Multi-Tenant SaaS Database Strategy</h4>
                      </Link>
                      <Link href="/custom-api-integration-vs-zapier-for-enterprise" className="group block">
                        <span className="text-[10px] text-[#E61F93] font-black uppercase tracking-widest mb-2 block">security</span>
                        <h4 className="text-[15px] font-bold text-black group-hover:text-[#E61F93] transition-colors font-['Switzer'] leading-snug">Secure API Integrations & Middleware</h4>
                      </Link>
                      <Link href="/migrating-legacy-on-premises-databases-to-the-cloud" className="group block">
                        <span className="text-[10px] text-[#E61F93] font-black uppercase tracking-widest mb-2 block">infrastructure</span>
                        <h4 className="text-[15px] font-bold text-black group-hover:text-[#E61F93] transition-colors font-['Switzer'] leading-snug">Zero-Downtime Cloud Migrations</h4>
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
                    Ready to pass your <span className="text-[#E61F93]">security</span> <span className="text-[#A1A1A1]">audits?</span>
                 </h2>
                 <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto font-['Switzer']">Stop losing massive enterprise contracts because of a fragile MVP. Partner with an elite engineering team to architect a bulletproof, SOC 2 compliant application from day one.</p>
                 <Link href="/contact" className="px-12 py-6 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all font-['Switzer'] shadow-2xl">
                    Get Your Security Audit
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
