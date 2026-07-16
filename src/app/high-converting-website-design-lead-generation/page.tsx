import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'High Converting Website Design for Lead Generation',
  description: 'Learn the architectural secrets of high-converting website design. Discover how to turn passive traffic into qualified leads with data-driven UI/UX strategies.',
  keywords: 'high converting website design, lead generation web design, B2B website conversion, UX for lead generation, conversion rate optimization',
  alternates: {
    canonical: 'https://codewrote.com/high-converting-website-design-lead-generation',
  },
};

const tocSections = [
  { id: 'introduction', title: 'The Anatomy of Conversion' },
  { id: 'cognitive-load', title: 'Reducing Cognitive Load' },
  { id: 'visual-hierarchy', title: 'Mastering Visual Hierarchy' },
  { id: 'micro-copy', title: 'The Power of Micro-Copy' },
  { id: 'frictionless-forms', title: 'Frictionless Form Design' },
  { id: 'social-proof', title: 'Strategic Social Proof' },
  { id: 'trust-signals', title: 'Establishing Immediate Trust Signals' },
  { id: 'mobile-conversion', title: 'Mobile-First Conversion' },
  { id: 'accessibility', title: 'Accessibility as a Conversion Driver' },
  { id: 'speed-as-feature', title: 'Speed as a Feature' },
  { id: 'a-b-testing', title: 'The Necessity of Continuous A/B Testing' },
  { id: 'faqs', title: 'Expert FAQs' },
];

const faqs = [
  {
    question: "What is a good conversion rate for a B2B lead generation website?",
    answer: "While industry averages hover around 2-3%, a well-architected high-converting website should aim for 5-8% on core landing pages, and upwards of 15% on highly targeted bottom-of-the-funnel offers."
  },
  {
    question: "How important is the hero section design?",
    answer: "The hero section is critical. You have roughly 3 seconds to communicate what you do, who you do it for, and why they should care. If your hero section fails this 'grunt test,' users will bounce immediately."
  },
  {
    question: "Should I use pop-ups for lead generation?",
    answer: "Yes, but strategically. Exit-intent pop-ups and delayed, value-driven slide-ins perform significantly better than immediate, aggressive overlays that interrupt the user's initial reading experience."
  },
  {
    question: "How long should my lead capture forms be?",
    answer: "As short as possible to qualify the lead. Every additional field reduces conversion rates by up to 10%. Use multi-step forms if you need complex data, as they reduce perceived friction and leverage the sunk cost fallacy."
  },
  {
    question: "Does website speed actually affect conversion rates?",
    answer: "Absolutely. Portent found that a site loading in 1 second has a conversion rate 3x higher than a site loading in 5 seconds. Speed is the foundation of user trust."
  }
];

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "CMO, Nexus Tech",
    content: "CodeWrote completely redesigned our marketing site. By implementing their visual hierarchy and frictionless form strategies, our lead volume doubled in the first month without increasing ad spend.",
    rating: 5
  },
  {
    name: "David Alaba",
    role: "Founder, Growth Scale",
    content: "We thought we needed more traffic. CodeWrote showed us we just needed a better bucket. Their conversion rate optimization turned our leaky funnel into a highly efficient lead generation engine.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "VP Marketing, FinServe",
    content: "The multi-step forms and strategic social proof elements they integrated were game-changers. The quality of leads has improved just as much as the quantity.",
    rating: 5
  }
];

export default function HighConvertingWebsitePage() {
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "High Converting Website Design for Lead Generation",
        "description": "Learn the architectural secrets of high-converting website design.",
        "author": { "@type": "Organization", "name": "CodeWrote" },
        "publisher": {
          "@type": "Organization",
          "name": "CodeWrote",
          "logo": { "@type": "ImageObject", "url": "https://codewrote.com/logo.png" }
        },
        "datePublished": "2024-03-20",
        "dateModified": "2024-03-20"
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Conversion Rate Optimization Design Service",
        "description": "Data-driven UI/UX design services to maximize lead generation.",
        "brand": {
          "@type": "Brand",
          "name": "CodeWrote"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "115"
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
          { "@type": "ListItem", "position": 2, "name": "High Converting Web Design", "item": "https://codewrote.com/high-converting-website-design-lead-generation" }
        ]
      }) }} />

      <main className="flex-grow pt-[140px]">
        <section className="px-6 py-8 md:py-16 text-center">
          <div className="max-w-[1000px] mx-auto">
            <h1 className="text-[42px] md:text-[72px] font-black leading-[1.05] text-black tracking-[-0.03em] uppercase mb-8 font-['Switzer']">
              High Converting <span className="text-[#E61F93]">Website Design</span> for Lead Generation
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-12 max-w-3xl mx-auto font-['Switzer']">
              Beautiful websites are useless if they don't generate revenue. Discover the data-driven UI/UX principles that turn passive visitors into high-value qualified leads.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-all font-['Switzer']">
                 Redesign Your Site
               </Link>
               <Link href="#cognitive-load" className="w-full sm:w-auto px-10 py-5 bg-white border border-gray-200 text-black rounded-full font-black text-sm uppercase tracking-widest hover:border-[#E61F93] transition-all font-['Switzer']">
                 Read The Playbook
               </Link>
            </div>
          </div>
        </section>

        <div className="px-6 py-4 max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] font-['Switzer']">
            <Link href="/" className="hover:text-[#E61F93]">Home</Link>
            <span>/</span>
            <span className="text-black">High Converting Web Design</span>
          </div>
        </div>

        <div className="px-6 py-12 max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_320px] gap-12 items-start">
             
             <div className="hidden lg:block sticky top-32">
                <TableOfContents sections={tocSections} orientation="vertical" />
             </div>

             <div className="min-w-0 blog-content rich-text-area">
                <article>
                  <section id="introduction">
                    <h2>The Anatomy of Conversion: Beyond Aesthetics</h2>
                    <p>
                        The most common mistake businesses make when redesigning a website is treating it as an art project rather than a business tool. While aesthetics are important for establishing brand credibility, they are entirely secondary to conversion architecture. A high-converting website is a meticulously engineered machine designed to guide a user from initial curiosity to a specific, measurable action.
                    </p>
                    <p>
                        Lead generation web design is rooted in behavioral psychology. It requires a deep understanding of how users scan information, what triggers their anxiety, and what motivates them to hand over their contact information. Every button color, headline size, and form field must be justified by data, not subjective preference. If a design element does not actively push the user toward the conversion goal, it is friction, and friction kills leads.
                    </p>
                    <p>
                        In this guide, we will break down the structural elements of a high-converting website. We will explore how to manage cognitive load, establish a compelling visual hierarchy, and design forms that users actually want to fill out. By implementing these principles, you can transform your website from a passive digital brochure into an active lead generation engine.
                    </p>
                  </section>

                  <section id="cognitive-load">
                    <h2>Reducing Cognitive Load: The Rule of One</h2>
                    <p>
                        Cognitive load refers to the amount of mental effort required to understand and navigate a website. When a user lands on your page, their brain is subconsciously evaluating whether the effort of figuring out what you do is worth the potential reward. If your page is cluttered with conflicting messages, multiple navigation options, and competing calls to action (CTAs), their cognitive load maxes out, resulting in immediate abandonment.
                    </p>
                    <p>
                        The antidote to high cognitive load is the "Rule of One." Every landing page should have one primary goal, one clear message, and one dominant call to action. 
                    </p>
                    <ul>
                        <li><strong>One Goal:</strong> Are you trying to get them to download a whitepaper, book a demo, or subscribe to a newsletter? Pick one. </li>
                        <li><strong>One Message:</strong> Your headline and subheadline must immediately communicate your unique value proposition. Eliminate jargon and focus on the primary benefit to the user.</li>
                        <li><strong>One CTA:</strong> While you may repeat the CTA button multiple times down the page, it should always ask the user to take the exact same action. Do not ask them to "Book a Demo" and "Read Our Blog" in the same visual space.</li>
                    </ul>
                    <p>
                        By aggressively stripping away secondary options—a practice known as "attention ratio optimization"—you funnel the user's focus entirely toward the conversion event. Less choice equals less anxiety, which leads to higher conversion rates.
                    </p>
                  </section>

                  <section id="visual-hierarchy">
                    <h2>Mastering Visual Hierarchy: Guiding the Eye</h2>
                    <p>
                        Visual hierarchy is the arrangement of elements in a way that implies importance. In Western cultures, users typically scan websites in an "F" or "Z" pattern. High-converting designs leverage these natural scanning behaviors to place the most critical information—the headline, the value proposition, and the CTA—directly in the user's path.
                    </p>
                    <p>
                        Size, color, contrast, and whitespace are the primary tools for establishing visual hierarchy. Your primary CTA should be the most visually striking element on the screen. If your brand colors are blue and white, your CTA button should be a vibrant, contrasting color like orange or pink. It must clearly look like a clickable element, utilizing hover states and subtle drop shadows to invite interaction.
                    </p>
                    <p>
                        Whitespace (or negative space) is equally important. Crowding elements together makes text difficult to read and diminishes the impact of your CTA. By giving your headline and button ample breathing room, you draw the user's eye directly to them. Remember: whitespace is not "empty space"; it is a powerful structural tool that focuses attention exactly where you want it.
                    </p>
                  </section>

                  <section id="micro-copy">
                    <h2>The Power of Micro-Copy</h2>
                    <p>
                        While headlines and hero images grab attention, it's the micro-copy—the small strings of text on buttons, under forms, and in tooltips—that actually pushes users over the conversion finish line. Many designers treat micro-copy as an afterthought, using generic terms like "Submit" or "Click Here." This is a massive missed opportunity.
                    </p>
                    <p>
                        High-converting micro-copy is action-oriented and value-driven. Instead of "Submit," a button should say "Get Your Free Audit." Instead of "Sign Up," it should say "Start Growing Your Revenue." The button copy should complete the sentence: "I want to..."
                    </p>
                    <p>
                        Furthermore, micro-copy is essential for reducing anxiety at the point of conversion. Placing a small line of text beneath an email field that says "We will never spam you" or "No credit card required" can increase form submissions by double digits. These small reassurances alleviate the subconscious fears that cause users to abandon forms at the last second.
                    </p>
                  </section>

                  <section id="frictionless-forms">
                    <h2>Frictionless Form Design: The Final Hurdle</h2>
                    <p>
                        The lead capture form is the most critical chokepoint in your conversion funnel. A user has decided they want what you offer, but if the form is intimidating, confusing, or asks for too much information, they will abandon the process. Form optimization is the easiest way to see an immediate lift in lead generation.
                    </p>
                    <p>
                        The golden rule of forms is to ask for the minimum amount of information necessary to qualify the lead. Do you really need their phone number and job title to send them an eBook? Probably not. Stick to Name and Email. For B2B companies that require more qualification data, the solution is the "Multi-Step Form."
                    </p>
                    <ul>
                        <li><strong>Micro-Commitments:</strong> Multi-step forms break a long process into bite-sized chunks. Start by asking an easy, low-friction question (e.g., "What is your biggest marketing challenge?"). Once the user clicks "Next," they have made a micro-commitment. </li>
                        <li><strong>The Sunk Cost Fallacy:</strong> Because they have already invested time answering the first question, they are psychologically more likely to complete the final step and provide their email address.</li>
                        <li><strong>Inline Validation:</strong> Provide real-time feedback as the user types. If they enter an invalid email, highlight it immediately rather than waiting for them to click "Submit" and reload the page with an error.</li>
                    </ul>
                  </section>

                  <section id="social-proof">
                    <h2>Strategic Social Proof: Manufacturing Trust</h2>
                    <p>
                        In a digital environment where users are highly skeptical of marketing claims, trust is your most valuable currency. Social proof is the psychological phenomenon where people assume the actions of others reflect the correct behavior. In web design, this translates to strategically placing evidence that other people trust your business.
                    </p>
                    <p>
                        However, throwing a few generic testimonials at the bottom of the page is not enough. High-converting websites integrate social proof directly at the point of friction—usually right next to the CTA or form. 
                    </p>
                    <ul>
                        <li><strong>Specific Data:</strong> Instead of "Join our newsletter," use "Join 15,000+ marketers receiving our weekly insights."</li>
                        <li><strong>Authority Logos:</strong> Displaying logos of well-known companies you have worked with instantly transfers their authority to your brand.</li>
                        <li><strong>Contextual Testimonials:</strong> Use testimonials that address specific objections. If users are worried about implementation time, feature a quote that says, "They had us up and running in 48 hours."</li>
                    </ul>
                  </section>

                  <section id="trust-signals">
                    <h2>Establishing Immediate Trust Signals</h2>
                    <p>
                        Beyond traditional social proof, your website's UI must project institutional trust. Trust signals are subtle visual cues that reassure the user that your business is legitimate, secure, and professional. 
                    </p>
                    <p>
                        If you are asking for payment or sensitive personal information, displaying SSL padlock icons, recognized payment gateway logos (like Stripe or PayPal), and trust badges (like Norton Secured or BBB Accredited) near the submit button can significantly reduce abandonment.
                    </p>
                    <p>
                        Another often overlooked trust signal is a physical address and a real phone number in the footer. Even if you run a fully remote SaaS company, providing clear, easily accessible contact information proves that there are real humans behind the digital facade. Hiding behind a generic contact form breeds suspicion.
                    </p>
                  </section>

                  <section id="mobile-conversion">
                    <h2>Mobile-First Conversion: Don't Treat Mobile as an Afterthought</h2>
                    <p>
                        For many B2B and B2C websites, mobile traffic now exceeds desktop traffic. Yet, many businesses still design for desktop first and simply let the elements stack on mobile. A high-converting website requires a dedicated mobile strategy.
                    </p>
                    <p>
                        Mobile screens demand extreme prioritization. The headline and CTA must be visible "above the fold" without any scrolling. Forms must use appropriate HTML5 input types so the correct keyboard appears (e.g., pulling up the number pad for a phone number field). Furthermore, consider "sticky" CTAs that remain at the bottom of the screen as the user scrolls, ensuring the conversion point is always within thumb's reach.
                    </p>
                  </section>

                  <section id="accessibility">
                    <h2>Accessibility as a Conversion Driver</h2>
                    <p>
                        Web accessibility (ADA compliance) is often viewed purely as a legal requirement, but it is actually a massive conversion driver. By designing your website to be usable by people with visual, auditory, or cognitive disabilities, you inadvertently create a much better user experience for everyone.
                    </p>
                    <p>
                        Ensuring high contrast ratios between text and background colors makes your content readable for visually impaired users—and also makes it easier to read for someone glancing at their phone in bright sunlight. Adding descriptive alt-text to images and ensuring your forms can be navigated purely via keyboard creates a frictionless environment. 
                    </p>
                    <p>
                        When you build an accessible website, you widen your total addressable market. Ignoring accessibility means you are actively turning away a segment of potential leads simply because they cannot navigate your poorly architected UI.
                    </p>
                  </section>

                  <section id="speed-as-feature">
                    <h2>Speed as a Feature: The Foundation of UX</h2>
                    <p>
                        As discussed in our performance optimization guides, speed is a conversion feature. A brilliantly designed landing page with perfect copy will fail if it takes five seconds to load. Users equate speed with professionalism and security. 
                    </p>
                    <p>
                        To maximize lead generation, your site architecture must be built on modern, performant frameworks (like Next.js) that deliver server-side rendered HTML instantly. Assets must be aggressively compressed, and third-party tracking scripts must be deferred so they don't block the main thread. When your site loads instantly, the user remains in a state of "flow," making them significantly more likely to convert.
                    </p>
                  </section>

                  <section id="a-b-testing">
                    <h2>The Necessity of Continuous A/B Testing</h2>
                    <p>
                        A high-converting website is never truly "finished." The digital landscape changes, user behaviors evolve, and what works today might not work tomorrow. This is why continuous A/B testing (or split testing) is the hallmark of elite marketing teams.
                    </p>
                    <p>
                        By serving two variations of a page (Version A and Version B) to equal segments of your traffic, you can empirically determine which design elements drive the most leads. You might test a green button against an orange button, a short form against a multi-step form, or a video testimonial against a text testimonial.
                    </p>
                    <p>
                        The key to successful A/B testing is testing one variable at a time and relying on statistical significance rather than gut feeling. Over time, these iterative, data-driven improvements compound, transforming a moderately successful website into a highly optimized lead generation machine.
                    </p>
                  </section>

                  <section id="codewrote-conversion">
                    <div className="bg-[#E61F93]/5 p-12 rounded-[50px] border-2 border-[#E61F93]/20 my-20">
                      <h2 style={{ marginTop: 0 }}>Turn Traffic into Revenue with CodeWrote</h2>
                      <p>
                        Stop losing valuable leads to poor design and bloated architecture. At <strong>CodeWrote</strong>, we don't just build websites; we engineer high-converting digital assets. Our UI/UX team utilizes behavioral data, heatmapping, and A/B testing principles to architect user journeys that predictably drive conversions.
                      </p>
                      <p>
                        By combining stunning visual design with frictionless user experiences and lightning-fast custom code, we build the ultimate lead generation engines for growth-focused businesses. 
                      </p>
                      <Link href="/contact" className="inline-block px-8 py-4 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-all">
                        Audit My Conversion Rate
                      </Link>
                    </div>
                  </section>
                </article>

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

                <div className="mt-20 pt-20">
                    <h2 className="text-[32px] font-black uppercase tracking-tight mb-12 font-['Switzer']">Client Success Stories</h2>
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

             <div className="space-y-8 lg:sticky lg:top-32">
                <div className="bg-[#0F0F0F] p-10 rounded-[40px] text-white">
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 font-['Switzer']">Stop Leaking Leads</h3>
                  <p className="text-gray-400 mb-8 font-medium leading-relaxed">
                    Transform your website from a passive brochure into a revenue-generating machine.
                  </p>
                  <Link href="/contact" className="block text-center w-full py-4 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all font-['Switzer']">
                    Book A UI/UX Audit
                  </Link>
                </div>

                <div className="bg-[#FAFAFA] p-10 rounded-[40px] border border-gray-100">
                   <h3 className="text-[11px] font-black text-[#A1A1A1] uppercase tracking-[0.25em] mb-8 font-['Switzer']">Related Insights</h3>
                   <div className="space-y-8">
                      <Link href="/cost-of-slow-website-performance-optimization" className="group block">
                        <span className="text-[10px] text-[#E61F93] font-black uppercase tracking-widest mb-2 block">performance</span>
                        <h4 className="text-[15px] font-bold text-black group-hover:text-[#E61F93] transition-colors font-['Switzer'] leading-snug">The Cost of a Slow Website</h4>
                      </Link>
                      <Link href="/custom-website-vs-website-builders" className="group block">
                        <span className="text-[10px] text-[#E61F93] font-black uppercase tracking-widest mb-2 block">strategy</span>
                        <h4 className="text-[15px] font-bold text-black group-hover:text-[#E61F93] transition-colors font-['Switzer'] leading-snug">Custom Code vs Builders</h4>
                      </Link>
                      <Link href="/ecommerce-custom-software-integration" className="group block">
                        <span className="text-[10px] text-[#E61F93] font-black uppercase tracking-widest mb-2 block">technology</span>
                        <h4 className="text-[15px] font-bold text-black group-hover:text-[#E61F93] transition-colors font-['Switzer'] leading-snug">E-commerce Integration Strategy</h4>
                      </Link>
                   </div>
                   <Link href="/blog" className="block mt-12 text-[11px] font-black text-black uppercase tracking-widest hover:text-[#E61F93] transition-colors font-['Switzer'] underline">Explore More</Link>
                </div>
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
        .blog-content table {
           margin-bottom: 50px;
        }
        @media (max-width: 768px) {
          .blog-content h2 { font-size: 28px; }
          .blog-content p { font-size: 16px; }
        }
      `}} />
    </div>
  );
}
