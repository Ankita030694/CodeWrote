import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Services Are Typically Included in Custom Software Development?',
  description: 'A complete breakdown of the software development lifecycle (SDLC), including UI/UX design, architecture, QA testing, and DevOps deployment.',
  alternates: {
    canonical: 'https://codewrote.com/what-services-are-typically-included-in-custom-software-development',
  },
};

const tocSections: any[] = [];

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      

      <main className="flex-grow pt-[140px]">
        {/* Hero Section */}
        <section className="px-6 py-8 md:py-16 text-center">
          <div className="max-w-[1000px] mx-auto">
            <h1 className="text-[42px] md:text-[72px] font-black leading-[1.05] text-black tracking-[-0.03em] uppercase mb-8 font-['Switzer']">
              What Services Are Included in <span className="text-[#E61F93]">Custom Software</span> <span className="text-[#A1A1A1]">Dev?</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-12 max-w-3xl mx-auto font-['Switzer']">
              Writing code is only 30% of the job. Understand the complete Software Development Life Cycle (SDLC) from UI design and cloud architecture to QA testing and DevOps deployment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-all font-['Switzer']">
                 Start Your Project
               </Link>
               <Link href="#content-start" className="w-full sm:w-auto px-10 py-5 bg-white border border-gray-200 text-black rounded-full font-black text-sm uppercase tracking-widest hover:border-[#E61F93] transition-all font-['Switzer']">
                 Read The Guide
               </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb Below Hero */}
        <div className="px-6 py-4 max-w-[1200px] mx-auto" id="content-start">
          <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] font-['Switzer']">
            <Link href="/" className="hover:text-[#E61F93]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#E61F93]">Blog</Link>
            <span>/</span>
            <span className="text-black">'What Services Are Typically Included in Custom Software Development?'</span>
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
                    <h2>Beyond Just Writing Code</h2>
                    <p>
                        A common misconception among first-time founders and business leaders is that hiring a software developer just means paying someone to type code. In reality, writing the source code is only a fraction of the work required to launch a successful digital product.
                    </p>
                    <p>
                        Custom software development is a highly structured, multi-disciplinary process. When you hire a top-tier full-service agency, you are not just getting programmers; you are getting a team of product managers, UI/UX designers, cloud architects, QA testers, and DevOps engineers.
                    </p>
                    <p>
                        Understanding exactly what services should be included in your contract is crucial. If an agency gives you a suspiciously low quote, it is almost always because they are skipping vital steps in the Software Development Life Cycle (SDLC) like testing or architectural planning.
                    </p>
                  </section>

                  <section id="discovery-phase">
                    <h2>Phase 1: Discovery & Scoping</h2>
                    <p>
                        Before a single line of code is written, a professional agency will conduct a Discovery Phase. This is an intensive 2 to 4-week process where product managers and business analysts dissect your business logic.
                    </p>
                    <p>
                        <strong>What is included:</strong>
                    </p>
                    <ul>
                        <li>Creation of a Product Requirements Document (PRD).</li>
                        <li>User persona development and user journey mapping.</li>
                        <li>Competitor analysis to identify feature gaps.</li>
                        <li>Finalizing the exact scope of the Minimum Viable Product (MVP).</li>
                    </ul>
                    <p>
                        Skipping this phase is the primary reason software projects fail. Building without a PRD is like building a skyscraper without a blueprint.
                    </p>
                  </section>

                  <section id="ui-ux-design">
                    <h2>Phase 2: UI/UX Design</h2>
                    <p>
                        Once the requirements are locked in, the design team takes over. UI (User Interface) and UX (User Experience) are two distinct disciplines that are merged in this phase.
                    </p>
                    <p>
                        <strong>What is included:</strong>
                    </p>
                    <ul>
                        <li><strong>Wireframing:</strong> Low-fidelity sketches of the screen layouts (the "skeleton" of the app).</li>
                        <li><strong>Prototyping:</strong> Clickable, high-fidelity mockups (usually built in Figma) that look exactly like the final product.</li>
                        <li><strong>Design System:</strong> Creation of a unified component library (buttons, typography, colors) to ensure visual consistency.</li>
                    </ul>
                    <p>
                        You should be able to "click through" your entire application in Figma before any engineering begins.
                    </p>
                  </section>

                  <section id="architecture-planning">
                    <h2>Phase 3: Architecture Planning</h2>
                    <p>
                        While designers are working on the visuals, the lead engineers (or Cloud Architects) are designing the backend infrastructure. If you anticipate having 100 users, the architecture is simple. If you anticipate 1,000,000 users, the architecture is incredibly complex.
                    </p>
                    <p>
                        <strong>What is included:</strong>
                    </p>
                    <ul>
                        <li>Database schema design (SQL vs NoSQL).</li>
                        <li>Cloud infrastructure selection (AWS, Vercel, Google Cloud).</li>
                        <li>Microservices vs Monolith architecture decisions.</li>
                        <li>Third-party API integration planning (Stripe, Twilio, SendGrid).</li>
                    </ul>
                  </section>

                  <section id="frontend-development">
                    <h2>Phase 4: Frontend Development</h2>
                    <p>
                        This is where the code writing actually begins. Frontend developers take the static Figma designs and turn them into interactive code that runs in the browser or on a phone.
                    </p>
                    <p>
                        <strong>What is included:</strong>
                    </p>
                    <ul>
                        <li>Writing HTML, CSS, and JavaScript (usually via frameworks like React or Next.js for web, and React Native or Flutter for mobile).</li>
                        <li>Ensuring responsive design (the app looks perfect on desktop, tablet, and mobile).</li>
                        <li>Implementing state management (how the app remembers data as you navigate between screens).</li>
                    </ul>
                  </section>

                  <section id="backend-development">
                    <h2>Phase 5: Backend & APIs</h2>
                    <p>
                        The backend is the engine of your software. It is completely invisible to the user but handles all the heavy lifting, data storage, and business logic.
                    </p>
                    <p>
                        <strong>What is included:</strong>
                    </p>
                    <ul>
                        <li>Building RESTful or GraphQL APIs to communicate with the frontend.</li>
                        <li>Configuring the database and writing complex queries.</li>
                        <li>Implementing user authentication and authorization (e.g., ensuring User A cannot see User B's private data).</li>
                        <li>Server-side scripting (Node.js, Python, Go, etc.).</li>
                    </ul>
                  </section>

                  <section id="quality-assurance">
                    <h2>Phase 6: Quality Assurance (QA)</h2>
                    <p>
                        A premium agency will have dedicated QA engineers. Developers are notoriously bad at finding bugs in their own code because they know the "happy path." QA engineers exist to break the software.
                    </p>
                    <p>
                        <strong>What is included:</strong>
                    </p>
                    <ul>
                        <li><strong>Manual Testing:</strong> Humans clicking through the app on various devices and browsers to find edge cases.</li>
                        <li><strong>Automated Testing:</strong> Writing scripts (Unit Tests, Integration Tests) that automatically run every time new code is added to ensure nothing was broken.</li>
                        <li><strong>Load Testing:</strong> Simulating thousands of users hitting the server at once to ensure it doesn't crash.</li>
                    </ul>
                  </section>

                  <section id="devops-deployment">
                    <h2>Phase 7: DevOps & Deployment</h2>
                    <p>
                        Deploying code used to involve dragging files over FTP on a Friday night and praying the server didn't crash. Today, it is a highly automated science known as DevOps.
                    </p>
                    <p>
                        <strong>What is included:</strong>
                    </p>
                    <ul>
                        <li>Setting up CI/CD (Continuous Integration / Continuous Deployment) pipelines.</li>
                        <li>Automating the staging and production environments.</li>
                        <li>Configuring App Store and Google Play Store submissions (if mobile).</li>
                        <li>Setting up SSL certificates, DNS routing, and load balancers.</li>
                    </ul>
                  </section>

                  <section id="maintenance-support">
                    <h2>Phase 8: Maintenance & Support</h2>
                    <p>
                        Software is never "finished." Apple updates iOS, Google updates Chrome, and third-party APIs deprecate old endpoints. Your software will slowly break over time if it is not maintained.
                    </p>
                    <p>
                        <strong>What is included:</strong>
                    </p>
                    <ul>
                        <li>A post-launch warranty period (usually 30-90 days for critical bug fixes).</li>
                        <li>Server monitoring and uptime alerts (e.g., PagerDuty).</li>
                        <li>Monthly retainers for applying security patches, updating dependencies (like React or Node versions), and minor feature enhancements.</li>
                    </ul>
                  </section>

                  <section id="security-compliance">
                    <h2>Security & Compliance Audits</h2>
                    <p>
                        If you are handling sensitive user data, financial transactions, or health information, standard development is not enough. You need specific security services.
                    </p>
                    <p>
                        <strong>What is included:</strong>
                    </p>
                    <ul>
                        <li>Penetration testing (hiring ethical hackers to try and break into the system).</li>
                        <li>SOC 2, GDPR, or HIPAA compliance audits.</li>
                        <li>Data encryption implementation (both at rest and in transit).</li>
                    </ul>
                  </section>

                  <section id="hidden-costs">
                    <h2>Avoiding Hidden Costs</h2>
                    <p>
                        When comparing proposals from different agencies, review the line items carefully. If Agency A is 40% cheaper than Agency B, check if Agency A omitted UI/UX design, automated QA testing, or DevOps setup. 
                    </p>
                    <p>
                        Paying for a comprehensive, full-lifecycle service upfront is drastically cheaper than paying a budget developer to write code, only to hire an expensive consultant later to fix the architecture and patch security holes.
                    </p>
                  </section>

                  <section id="codewrote-solution">
                    <div >
                      <h2 style={{ marginTop: 0 }}>Full-Lifecycle Engineering at CodeWrote</h2>
                      <p>
                        At <strong>CodeWrote</strong>, we don't just write code. We provide end-to-end product development. From the initial Discovery phase and high-fidelity Figma prototyping to modern Next.js architecture and automated CI/CD DevOps pipelines, we handle the entire SDLC.
                      </p>
                      <p>
                        We build enterprise-grade software designed to scale securely, and we include rigorous QA testing in every sprint.
                      </p>
                      <Link href="/contact" >
                        Request a Project Scope
                      </Link>
                    </div>
                  </section>
                
                </article>
             </div>

             {/* Right: CTA & Related (Sticky) */}
             <div className="space-y-8 lg:sticky lg:top-32">
                {/* 1st CTA Container */}
                <div className="bg-[#0F0F0F] p-10 rounded-[40px] text-white relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-40 h-40 bg-[#E61F93]/20 blur-[80px] rounded-full -mr-20 -mt-20 group-hover:bg-[#E61F93]/30 transition-all duration-700" />
                   <h3 className="text-[26px] font-black font-['Switzer'] uppercase leading-[1.1] mb-6 relative z-10">Need Expert Help?</h3>
                   <p className="text-[14px] text-gray-400 font-medium font-['Switzer'] leading-relaxed mb-10 relative z-10">
                     Let us build you a high-converting solution tailored to your exact business needs.
                   </p>
                   <Link 
                     href="/contact" 
                     className="block w-full text-center py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all relative z-10 font-['Switzer'] shadow-lg"
                   >
                     Contact Us Now
                   </Link>
                </div>

                {/* 2nd Related Pages Container */}
                <div className="bg-[#FAFAFA] p-10 rounded-[40px] border border-gray-100">
                   <h3 className="text-[11px] font-black text-[#A1A1A1] uppercase tracking-[0.25em] mb-8 font-['Switzer']">Related Insights</h3>
                   <div className="space-y-8">

                   </div>
                   <Link href="/blog" className="block mt-12 text-[11px] font-black text-black uppercase tracking-widest hover:text-[#E61F93] transition-colors font-['Switzer'] underline">Explore More</Link>
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
                    Ready to scale your <span className="text-[#E61F93]">business</span> with <span className="text-[#A1A1A1]">CodeWrote?</span>
                 </h2>
                 <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto font-['Switzer']">Our team specializes in building high-performance websites and custom software for businesses that want to dominate.</p>
                 <Link href="/contact" className="px-12 py-6 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all font-['Switzer'] shadow-2xl">
                    Get My Custom Strategy
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
          letter-spacing: -0.02em;
          font-family: 'Switzer', sans-serif;
        }
        .blog-content p {
          font-size: 18px;
          color: #444;
          line-height: 1.8;
          margin-bottom: 24px;
          font-family: 'Switzer', sans-serif;
        }
        .blog-content ul {
          list-style: none;
          padding-left: 0;
          margin-bottom: 32px;
        }
        .blog-content li {
          font-size: 18px;
          color: #444;
          line-height: 1.8;
          margin-bottom: 16px;
          padding-left: 32px;
          position: relative;
          font-family: 'Switzer', sans-serif;
        }
        .blog-content li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #E61F93;
          font-weight: bold;
        }
        .blog-content strong {
          color: #000;
          font-weight: 800;
        }
        @media (max-width: 768px) {
          .blog-content h2 { font-size: 28px; margin-top: 50px; }
          .blog-content h3 { font-size: 20px; margin-top: 30px; }
          .blog-content p, .blog-content li { font-size: 16px; }
        }
      `}} />
    </div>
  );
}
