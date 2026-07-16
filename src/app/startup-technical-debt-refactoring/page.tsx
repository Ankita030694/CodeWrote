import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The True Cost of Technical Debt in Startups (MVP Refactoring)',
  description: 'Is your startup struggling with slow feature releases and frequent bugs? Discover the true cost of bad code and exactly when to rewrite your MVP codebase.',
  keywords: 'technical debt in startups, mvp refactoring, when to rewrite codebase, cost of bad code, scaling a software startup',
  alternates: {
    canonical: 'https://codewrote.com/blog/startup-technical-debt-refactoring',
  },
};

const tocSections = [
  { id: 'introduction', title: 'The MVP Illusion' },
  { id: 'what-is-tech-debt', title: 'What is Technical Debt?' },
  { id: 'cost-of-bad-code', title: 'The Cost of Bad Code' },
  { id: 'fragile-bottleneck', title: 'The Codebase Bottleneck' },
  { id: 'when-to-refactor', title: 'Signs It is Time to Refactor' },
  { id: 'rewrite-vs-refactor', title: 'When to Rewrite Codebase' },
  { id: 'developer-turnover', title: 'The Developer Turnover Crisis' },
  { id: 'security-risks', title: 'Post-MVP Security Risks' },
  { id: 'scaling-safely', title: 'Scaling a Software Startup' },
  { id: 'agency-audits', title: 'The Agency Audit Advantage' },
  { id: 'roi-refactoring', title: 'The ROI of Refactoring' },
  { id: 'conclusion', title: 'Conclusion' }
];

const faqs = [
  {
    question: "What exactly is technical debt in startups?",
    answer: "Technical debt is the implied cost of future rewriting caused by choosing an easy or fast (but messy) solution right now instead of using a better approach that would take longer. Like financial debt, it accumulates 'interest' making every future feature harder to build."
  },
  {
    question: "When should we focus on MVP refactoring?",
    answer: "You should begin MVP refactoring immediately after achieving product-market fit. Once the business model is proven, the focus must shift from 'building fast' to 'building sustainably' to support real user growth and secure enterprise contracts."
  },
  {
    question: "How do we know when to rewrite codebase versus when to just refactor?",
    answer: "Refactor when the underlying architecture is solid but the code is messy. You must rewrite the codebase entirely if the original technology stack (e.g., an outdated WordPress setup or a basic drag-and-drop builder) fundamentally cannot support the complex features or traffic loads your business now requires."
  },
  {
    question: "What is the true cost of bad code?",
    answer: "The true cost is measured in opportunity loss. It includes the revenue lost when your app crashes during a product launch, the enterprise clients lost due to security vulnerabilities, and the engineering salaries wasted on fixing bugs instead of building new revenue-generating features."
  },
  {
    question: "Why is scaling a software startup so difficult after the MVP phase?",
    answer: "Because the 'hacks' used to get the MVP out the door quickly become structural liabilities. Scaling requires enterprise-grade architecture, rigorous DevOps pipelines, and comprehensive automated testing—things solo freelancers rarely implement during the MVP rush."
  }
];

const reviews = [
  {
    name: "Alex Sterling",
    role: "CEO, FinFlow App",
    content: "We were paralyzed by technical debt. Our original freelancer left us with a codebase so fragile that adding a simple button broke the checkout process. CodeWrote audited, refactored, and saved our Series A.",
    rating: 5
  },
  {
    name: "Rachel Gomez",
    role: "CTO, HealthSync Solutions",
    content: "This guide perfectly articulates the pain of the post-MVP phase. We realized too late that knowing when to rewrite codebase is a survival skill. Partnering with a premium agency was our smartest pivot.",
    rating: 5
  },
  {
    name: "David Park",
    role: "Founder, OmniCommerce",
    content: "If you are scaling a software startup, read this immediately. The cost of bad code almost bankrupted us in server costs alone. CodeWrote engineered a scalable Next.js architecture that dropped our AWS bill by 60%.",
    rating: 5
  }
];

export default function TechDebtRefactoringPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Search Engine Optimized Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "The True Cost of Technical Debt: Why Startups Must Refactor After the MVP Phase",
        "description": "Discover the true cost of bad code and learn exactly when to rewrite your startup's codebase to ensure enterprise-grade scalability and zero technical debt.",
        "author": { "@type": "Organization", "name": "CodeWrote" },
        "publisher": {
          "@type": "Organization",
          "name": "CodeWrote",
          "logo": { "@type": "ImageObject", "url": "https://codewrote.com/logo.png" }
        },
        "datePublished": "2024-10-15",
        "dateModified": "2024-10-15"
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
              The True Cost of <span className="text-[#E61F93]">Technical Debt</span> in <span className="text-[#A1A1A1]">Startups</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-12 max-w-3xl mx-auto font-['Switzer']">
              Is your engineering team paralyzed by constant bugs? Discover exactly when to rewrite your MVP codebase and how to permanently eliminate the massive financial drain of spaghetti code.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-all font-['Switzer']">
                 Audit Your Codebase
               </Link>
               <Link href="#introduction" className="w-full sm:w-auto px-10 py-5 bg-white border border-gray-200 text-black rounded-full font-black text-sm uppercase tracking-widest hover:border-[#E61F93] transition-all font-['Switzer']">
                 Read the Guide
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
            <span className="text-black">Startup Technical Debt</span>
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
                    <h2>The MVP Illusion: When Fast Becomes Fatal</h2>
                    <p>
                        The universally accepted mantra for early-stage founders is to "move fast and break things." To test market fit without burning millions, startups hire cheap solo freelancers or utilize drag-and-drop builders to duct-tape an MVP (Minimum Viable Product) together. It works. You acquire your first hundred users, and the concept is validated.
                    </p>
                    <p>
                        However, as you attempt to scale past those early adopters, a terrifying reality sets in. Feature releases that used to take days now take weeks. Every time the team fixes one bug, three more appear. The application feels sluggish, and customer churn begins to rise. You are experiencing the crushing weight of <strong>technical debt in startups</strong>.
                    </p>
                    <p>
                        This guide bridges the gap between the chaotic MVP phase and the maturity required for enterprise-grade operations. We will expose the hidden financial dangers of ignoring fragile architecture, outline exactly when a business must pivot toward serious MVP refactoring, and explain why partnering with a premium engineering agency is the only viable path to sustainable scaling.
                    </p>
                  </section>

                  <section id="what-is-tech-debt">
                    <h2>What Exactly is Technical Debt in Startups?</h2>
                    <p>
                        "Technical Debt" was a term coined by software engineer Ward Cunningham to explain a massive business risk to non-technical executives. 
                    </p>
                    <p>
                        Imagine taking out a high-interest payday loan to buy inventory. You get the cash fast, but the compounding interest quickly devours your profit margins. In software, "taking out the loan" is writing quick, messy, undocumented code to hit an artificial deadline. 
                    </p>
                    <p>
                        The "interest" is the extra time your developers must spend navigating that messy code every single day for the rest of the product's lifespan. If you never pay down the principal (by refactoring the code), the interest eventually bankrupts the engineering department's productivity. 
                    </p>
                  </section>

                  <section id="cost-of-bad-code">
                    <h2>The Hidden Cost of Bad Code</h2>
                    <p>
                        Founders often view code refactoring as a "nice-to-have" engineering luxury rather than a critical business imperative. This is because the <strong>cost of bad code</strong> rarely appears as a direct line item on a P&L statement. Instead, it bleeds the company dry through opportunity costs.
                    </p>
                    <p>
                        Consider these hidden costs:
                    </p>
                    <ul>
                        <li><strong>Wasted Engineering Salaries:</strong> If your developers spend 70% of their week chasing down obscure bugs rather than building new revenue-generating features, you are burning capital.</li>
                        <li><strong>Lost Enterprise Deals:</strong> A fragile MVP might impress an angel investor, but it will instantly fail the rigorous IT security audits required by B2B enterprise clients.</li>
                        <li><strong>Infrastructure Bloat:</strong> Poorly optimized code often requires massive amounts of server power to run. We frequently see startups paying AWS bills that are 5x higher than necessary simply because their database queries are inefficient.</li>
                    </ul>
                  </section>

                  <section id="fragile-bottleneck">
                    <h2>Why the Codebase Becomes a Bottleneck</h2>
                    <p>
                        During the MVP phase, code is usually written in a monolithic structure by a single freelancer. Every feature is tightly coupled to every other feature.
                    </p>
                    <p>
                        As the product grows, this structure becomes a house of cards. If a developer attempts to update the payment gateway, they inadvertently break the user registration system. The codebase becomes so fragile that developers become terrified to touch it. 
                    </p>
                    <p>
                        Innovation completely stalls. This is the exact moment when the asset that launched your company transforms into the very bottleneck preventing its growth.
                    </p>
                  </section>

                  <section id="when-to-refactor">
                    <h2>Signs It is Time for MVP Refactoring</h2>
                    <p>
                        How do you know when you have crossed the line from "scrappy startup" to "technological crisis"? The signals for mandatory <strong>MVP refactoring</strong> are very clear if you know what to look for.
                    </p>
                    <p>
                        Watch for these critical red flags:
                    </p>
                    <ul>
                        <li>Onboarding a new developer takes weeks because there is zero documentation and the code logic makes no sense.</li>
                        <li>Your customer support team is overwhelmed by complaints regarding slow page loads and timeouts.</li>
                        <li>Your developers are relying on "manual deployments" (dragging and dropping files via FTP) instead of automated CI/CD pipelines.</li>
                        <li>Every new feature request is met with deep sighs and estimates that seem wildly disproportionate to the task.</li>
                    </ul>
                  </section>

                  <section id="rewrite-vs-refactor">
                    <h2>When to Rewrite Codebase vs When to Refactor</h2>
                    <p>
                        Once you acknowledge the debt, the hardest decision a founder will make is <strong>when to rewrite codebase</strong> entirely versus when to simply refactor what exists.
                    </p>
                    <p>
                        <strong>Refactoring</strong> involves cleaning up and restructuring the existing code without changing its external behavior. It is the best path when the underlying tech stack is modern and viable (e.g., a React application that is just messy).
                    </p>
                    <p>
                        <strong>Rewriting</strong> is the nuclear option. It is mandatory when the foundation itself is flawed. If your MVP was built on a cheap WordPress theme heavily modified with 40 conflicting plugins, or if the core framework is depreciated and poses a massive security risk, no amount of refactoring will save you. You must tear it down and build a custom, headless architecture.
                    </p>
                  </section>

                  <section id="developer-turnover">
                    <h2>The Developer Turnover Crisis</h2>
                    <p>
                        There is a human cost to technical debt that founders often ignore: developer morale.
                    </p>
                    <p>
                        Top-tier engineers want to build innovative, challenging solutions. They absolutely despise working in undocumented, spaghetti code environments left behind by cheap freelancers. If your startup forces them to act as digital janitors cleaning up someone else's mess all day, they will quit.
                    </p>
                    <p>
                        High turnover in an undocumented codebase is a death spiral. Every time an engineer leaves, the institutional knowledge of how the fragile system works leaves with them, making the next hire's job even more impossible.
                    </p>
                  </section>

                  <section id="security-risks">
                    <h2>Post-MVP Security Risks</h2>
                    <p>
                        MVPs are built for speed, which means security is almost always an afterthought. Freelancers working for low hourly rates rarely implement parameterization to prevent SQL injections or sanitize user inputs to prevent Cross-Site Scripting (XSS).
                    </p>
                    <p>
                        When you have a few hundred beta testers, you might fly under the radar. But as your startup gains traction, you become a target. A data breach in the post-MVP phase is often an extinction-level event for a startup. Refactoring is not just about speed; it is about establishing a fortified, enterprise-grade security perimeter.
                    </p>
                  </section>

                  <section id="scaling-safely">
                    <h2>Scaling a Software Startup Safely</h2>
                    <p>
                        <strong>Scaling a software startup</strong> requires a fundamental shift in mindset. You must transition from a "feature factory" to an "engineering culture."
                    </p>
                    <p>
                        This means implementing strict Quality Assurance (QA) protocols, mandatory code reviews, and automated testing. A scalable architecture utilizes decoupled frontends (like Next.js) and microservices, ensuring that if one component fails, the rest of the application continues to run flawlessly.
                    </p>
                    <p>
                        This level of sophisticated engineering simply cannot be achieved by hiring another cheap freelancer. It requires a coordinated team of specialists.
                    </p>
                  </section>

                  <section id="agency-audits">
                    <h2>The Agency Advantage: Enterprise Audits</h2>
                    <p>
                        Founders cannot fix what they do not understand. This is why attempting an internal rewrite with your existing, overwhelmed team rarely works. 
                    </p>
                    <p>
                        Premium development agencies like CodeWrote begin with a comprehensive Technical Debt Audit. We act as an objective third party, analyzing your server infrastructure, database queries, and code syntax. We map exactly where the debt lies, what the security vulnerabilities are, and whether a refactor or a full rewrite is mathematically the smartest move.
                    </p>
                    <p>
                        When an agency executes the rebuild, you aren't just getting new code; you are inheriting enterprise-grade DevOps processes and a foundation designed specifically to scale to millions of users.
                    </p>
                  </section>

                  <section id="roi-refactoring">
                    <h2>ROI: The Value of a Clean Slate</h2>
                    <p>
                        Refactoring requires an upfront investment, pausing the relentless push for new features to fix the foundation. How do you justify this to investors?
                    </p>
                    <p>
                        The ROI of eliminating technical debt is astronomical. A clean, optimized codebase immediately slashes server hosting costs. It doubles or triples developer velocity, meaning features are released faster. It eliminates customer churn caused by frustrating app crashes. Most importantly, it creates a secure, highly valued digital asset that makes the company vastly more attractive for acquisition or Series B funding.
                    </p>
                  </section>

                  <section id="conclusion">
                    <h2>Conclusion: Stop Paying Interest on Bad Code</h2>
                    <p>
                        If your startup is suffering from slow feature velocity, skyrocketing server bills, and developer burnout, the diagnosis is clear: the interest payments on your <strong>technical debt in startups</strong> have become unsustainable.
                    </p>
                    <p>
                        Your MVP did its job; it validated your market. But the scrappy hacks that got you here will not get you to the next level. Recognizing exactly when to rewrite the codebase is the hallmark of mature technical leadership. Partner with an elite engineering agency to audit your platform, execute a strategic refactor, and finally unlock the scalable, high-performance growth your startup deserves.
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
                        <h4 className="text-[15px] font-bold text-black group-hover:text-[#E61F93] transition-colors font-['Switzer'] leading-snug">Web Development Agency vs Freelancer Risks</h4>
                      </Link>
                      <Link href="/blog" className="group block">
                        <span className="text-[10px] text-[#E61F93] font-black uppercase tracking-widest mb-2 block">technology</span>
                        <h4 className="text-[15px] font-bold text-black group-hover:text-[#E61F93] transition-colors font-['Switzer'] leading-snug">Scalable Architectures for SaaS Platforms</h4>
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
                    Ready to eliminate <span className="text-[#E61F93]">technical</span> <span className="text-[#A1A1A1]">debt?</span>
                 </h2>
                 <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto font-['Switzer']">Stop losing time and money to fragile code. Partner with an elite engineering team to execute a strategic code audit and build a flawlessly scalable platform.</p>
                 <Link href="/contact" className="px-12 py-6 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all font-['Switzer'] shadow-2xl">
                    Get Your Codebase Audit
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
