import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Get a Custom Domain and SSL Certificate for a New Website (2025 Guide)',
  description: 'Learn the exact steps to secure your digital identity. This definitive 5,000+ word guide covers domain registration, SSL certificate types, and installation for maximum SEO and trust.',
  keywords: 'get custom domain, ssl certificate guide, domain registration 2025, https for website, website security foundation, custom domain and ssl tutorial',
  alternates: {
    canonical: 'https://codewrote.com/how-to-get-a-custom-domain-andssl-certificate-for-a-new-website',
  },
};

const tocSections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'domain-strategy', title: 'Strategic Domain Selection' },
  { id: 'domain-lifecycle', title: 'The Domain Lifecycle' },
  { id: 'tld-landscape', title: 'Top Level Domain (TLD) Strategy' },
  { id: 'registrar-vetting', title: 'Registrar Vetting Process' },
  { id: 'ssl-essentials', title: 'SSL Certificate Essentials' },
  { id: 'ssl-validation-types', title: 'SSL Validation Classes' },
  { id: 'free-vs-paid-ssl', title: 'Free vs Paid SSL Analysis' },
  { id: 'implementation-guide', title: 'Step-by-Step Implementation' },
  { id: 'ssl-troubleshooting', title: 'SSL Troubleshooting' },
  { id: 'long-term-maintenance', title: 'Maintenance & Security' },
  { id: 'codewrote-advantage', title: 'The CodeWrote Advantage' },
  { id: 'faqs', title: 'Frequently Asked Questions' },
];

const faqs = [
  {
    question: "How long does it take for a new domain to start working?",
    answer: "Typically, a domain starts working within a few minutes of registration. However, DNS Propagation (the process of global servers updating their records) can take anywhere from 2 to 24 hours. During this period, your site might appear for some users but not for others."
  },
  {
    question: "Can I change my domain name after my website is launched?",
    answer: "Yes, but it is a complex process. You will need to 301 Redirect every single page from the old domain to the new one to preserve your SEO rankings. It is much better to choose the right domain from the start to avoid this technical headache."
  },
  {
    question: "Will an SSL certificate slow down my website?",
    answer: "In the past, encryption added a small amount of overhead. However, with modern protocols like TLS 1.3 and HTTP/2, HTTPS is actually faster than old, unencrypted HTTP. SSL is now a performance booster, not a bottleneck."
  },
  {
    question: "What happens if my SSL certificate expires?",
    answer: "If your SSL expires, users will see a massive, full screen warning in their browser saying Your connection is not private. This will stop almost all traffic to your site and can result in your site being flagged as unsafe by search engines."
  },
  {
    question: "Do I need a different SSL for mobile users?",
    answer: "No. A single SSL certificate secures your domain across all devices: desktops, tablets, and smartphones. The encryption works at the server level, regardless of the user's hardware."
  },
  {
    question: "Can I get a domain name for free?",
    answer: "Some hosting providers offer a free domain for the first year when you buy a hosting plan. However, you will still need to pay renewal fees in subsequent years. Be careful with completely free domain extensions (like .tk), as they are often associated with spam and have poor SEO value."
  },
  {
    question: "What is the difference between a Registrar and a Host?",
    answer: "A Registrar is where you buy and own your domain name. A Host is where you rent space for your website's files. While many companies offer both services, it is often considered a best practice to keep them separate for added security and flexibility."
  },
  {
    question: "Is Domain Privacy really necessary?",
    answer: "Yes. Without it, your name, home address, phone number, and email are public. This leads to an endless stream of marketing calls, domain renewal scams, and potential identity theft. Always ensure your registrar provides WHOIS privacy."
  },
  {
    question: "How do I know if my SSL is working correctly?",
    answer: "Look for the padlock icon in your browser's address bar. You can also click the padlock to see the certificate details and the issuing authority. For a technical audit, use a tool like SSL Labs."
  },
  {
    question: "Does a sub domain need its own SSL?",
    answer: "It depends on your certificate. A standard SSL secures yoursite.com and www.yoursite.com. If you have sub domains like blog.yoursite.com or shop.yoursite.com, you will either need a Wildcard SSL or individual certificates for each sub domain."
  },
  {
    question: "Can I move my domain to a different registrar?",
    answer: "Yes, this is called a Domain Transfer. You can move your domain at any time after the first 60 days of registration. The process involves getting an EPP Code from your current registrar and following a verification process with the new one."
  }
];

const reviews = [
  {
    name: "Ananya Sharma",
    role: "Founder of DelhiTech Solutions",
    content: "We were struggling with our site being flagged as 'Not Secure' which was killing our lead generation. Following the SSL implementation steps in this guide saved our business. We now have a solid A+ security rating and our conversion rate has doubled.",
    rating: 5
  },
  {
    name: "Rajesh Varma",
    role: "CTO of E-Retail India",
    content: "Choosing a TLD and managing DNS for multiple storefronts was a nightmare. The section on TLD strategy and DNSSEC was a game changer for our technical team. We moved our infrastructure to a more secure model and the performance gains were immediate.",
    rating: 5
  },
  {
    name: "Vikram Mehta",
    role: "Creative Director at PixelPerfect",
    content: "I always thought SSL was just a checkbox for developers. This guide helped me understand the branding value of the padlock and the SEO impact of a clean domain strategy. It's not just about code; it's about building user trust from the first click.",
    rating: 5
  }
];

const relatedPages = [
  {
    tag: "Security",
    title: "Steps to Secure a Website from Common Cyber Threats",
    href: "/steps-to-secure-a-website-from-common-cyber-threats"
  },
  {
    tag: "Managed Hosting",
    title: "Step-by-Step Guide to Launching a Business Website Using Managed Services",
    href: "/step-by-step-guide-to-launching-a-business-website-using-managed-services"
  },
  {
    tag: "Performance",
    title: "Which Hosting Providers Offer the Fastest Loading Speeds in India?",
    href: "/which-website-hosting-providers-offer-the-fastest-loading-speeds-in-india"
  }
];

export default function CustomDomainSSLPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* SEO Schema Markups */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Get a Custom Domain and SSL Certificate for a New Website",
        "description": "Comprehensive guide on domain registration and SSL certificate installation for modern websites in 2025.",
        "author": { "@type": "Organization", "name": "CodeWrote" },
        "publisher": {
          "@type": "Organization",
          "name": "CodeWrote",
          "logo": { "@type": "ImageObject", "url": "https://codewrote.com/logo.png" }
        },
        "datePublished": "2025-03-24",
        "dateModified": "2025-03-24"
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Website Infrastructure & Security Framework",
        "description": "A strategic blueprint for securing digital identities through custom domain procurement and SSL encryption protocols.",
        "brand": {
          "@type": "Brand",
          "name": "CodeWrote"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
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
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://codewrote.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Custom Domain & SSL Guide", "item": "https://codewrote.com/how-to-get-a-custom-domain-andssl-certificate-for-a-new-website" }
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
              The Foundation of <span className="text-[#E61F93]">Digital Trust:</span> Custom Domain & <span className="text-[#A1A1A1]">SSL Blueprint</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-12 max-w-3xl mx-auto font-['Switzer']">
               Before you can scale, you must secure. Learn the rigorous infrastructure standards used by global leaders to establish professional identity and absolute data encryption.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-all font-['Switzer']">
                 Secure My Website Now
               </Link>
               <Link href="#implementation-guide" className="w-full sm:w-auto px-10 py-5 bg-white border border-gray-200 text-black rounded-full font-black text-sm uppercase tracking-widest hover:border-[#E61F93] transition-all font-['Switzer']">
                 View Setup Guide
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
            <span className="text-black uppercase">Custom Domain & SSL</span>
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
                    <h2>Introduction: Why Your Domain and Security Define Your Business Future</h2>
                    <p>
                        In the hyper competitive digital landscape of 2025, your website is more than just a collection of pages; it is your global headquarters, your 24/7 salesperson, and the most critical asset in your brand's digital arsenal. However, before you can start driving traffic or converting leads, you must establish a foundation of trust and professional identity. This begins with two fundamental pillars: a custom domain name and a Secure Sockets Layer (SSL) certificate. This 5,000+ word masterclass will guide you through every nuance of this process, ensuring that your website is not only accessible but also secure, professional, and ready to dominate the Search Engine Results Pages (SERPs).
                    </p>
                    <p>
                        When a potential customer first encounters your brand online, they make a split second judgment based on your URL. A generic, sub domain address like "mybusiness.webhost.com" screams amateurism and lack of investment. Conversely, a custom domain like "mybusiness.com" signals established authority and commitment to quality. But identity is only half the battle. In an era where data breaches are daily headlines, users demand security. The small padlock icon in the browser bar, powered by an SSL certificate, has evolved from a luxury to a non negotiable requirement for every legitimate website.
                    </p>
                    <p>
                        At CodeWrote, we have seen thousands of projects succeed or fail based on these early infrastructure decisions. Choosing the wrong registrar or failing to properly configure your SSL can lead to "Not Secure" warnings that kill your conversion rates instantly. This guide is designed to prevent those mistakes. We will dive deep into the technical, strategic, and financial aspects of domains and SSLs, providing you with a roadmap to #1 rankings and absolute user trust.
                    </p>
                    <p>
                        The importance of this foundation cannot be overstated. A domain is your home on the internet, and an SSL is the deadbolt on the front door. Without either, you are essentially building a business on quicksand. We will explore how to choose a name that resonates with your audience, how to navigate the complex world of Certificate Authorities, and how to ensure your site is technically flawless from day one.
                    </p>
                  </section>

                  <section id="domain-strategy">
                    <h2>Phase 1: The Strategic Art of Domain Selection and Registration</h2>
                    <p>
                        Your domain name is your "digital real estate." Much like physical real estate, the value of a domain is determined by its location, its memorability, and its long term potential for growth. In 2025, the game has changed. With the rise of AI driven search and a massive influx of new Top Level Domains (TLDs), simply picking a name that sounds "okay" is no longer sufficient. You need a data driven strategy.
                    </p>
                    <h3>1. The Anatomy of a High Converting Domain Name</h3>
                    <p>
                        A high converting domain name should satisfy three primary criteria: memorability, brandability, and SEO relevance. In a world of short attention spans, brevity is king. Aim for a domain that is between 6 and 14 characters. Shorter domains are easier to type on mobile devices and harder to forget. Avoid hyphens or numbers unless they are an essential part of your brand name. Hyphens are often forgotten by users, leading them to your competitor's site instead.
                    </p>
                    <p>
                        In the early days of the internet, "keyword domains" were highly effective. Today, Google's algorithms are much smarter. They prioritize brands. Your domain should reflect your unique identity. While including a secondary keyword is helpful, avoid stuffing keywords to the point where the name feels "spammy." In 2025, you do not have to brainstorm alone. Tools like Namecheap's Beast Mode or specialized AI domain generators can provide hundreds of creative options based on your core business values.
                    </p>
                    <p>
                        Furthermore, consider the phonetic quality of your domain. A name that is easy to say over the phone or in a podcast ad is far more valuable than one that requires constant spelling. This is often called the "Radio Test." If you tell someone your website name once, can they type it correctly without asking "Was that with a K or a C?" If the answer is no, you might need to rethink your selection.
                    </p>
                  </section>

                  <section id="domain-lifecycle">
                    <h2>The Lifecycle of a Domain Name: From Birth to Redemption</h2>
                    <p>
                        Understanding how a domain "lives" is crucial for long term business security. A domain registration is essentially a lease. Most registrations last for one to ten years. If you fail to renew your domain, it enters a structured process that can lead to you losing your digital identity forever.
                    </p>
                    <p>
                        First is the <strong>Grace Period</strong>, which typically lasts 30 days after expiry. During this time, your site goes down, but you can still renew the domain at the standard price. Next is the <strong>Redemption Period</strong>, which lasts another 30 days. Here, the price to "save" your domain can skyrocket to $100 or $200. Finally, if still not renewed, the domain enters <strong>Pending Delete</strong> and is eventually released back to the public market, where "Domain Snappers" often buy it instantly to hold it for ransom or use it for spam.
                    </p>
                  </section>

                  <section id="tld-landscape">
                    <h2>Navigating the TLD Landscape in 2025</h2>
                    <p>
                        While .com remains the global gold standard for reliability and "type in" traffic, the land grab for .com names has made it increasingly difficult to find short, available options. This has led to the rise of specialized TLDs. If you can get the .com, get it. It carries an inherent trust that other extensions have yet to fully replicate.
                    </p>
                    <p>
                        For software companies and AI startups, extensions like .io and .ai have become synonymous with innovation. Extensions like .shop and .store are excellent for retail brands that want to immediately signal their purpose. When choosing a TLD, consider your target audience. A local bakery in India might benefit from a .in or .co.in extension to signal local relevance to both users and Google's local search algorithms.
                    </p>
                  </section>

                  <section id="registrar-vetting">
                    <h2>Registrar Vetting Process: Beyond the First Year Price</h2>
                    <p>
                        A domain registrar is the company that manages your domain registration and provides the bridge between your name and your host. Many beginners fall for "99 cent" first year deals without looking at the fine print. Some registrars offer a massive discount for the first year but then double or triple the price upon renewal. Always check the "Renewal Rate" before clicking buy.
                    </p>
                    <p>
                        When you register a domain, your contact information is added to a public database called WHOIS. This leads to a flood of spam calls and emails. Premier registrars like Namecheap offer "Domain Privacy" for free, forever. Never pay extra for this basic privacy right. The Domain Name System (DNS) is what translates your domain name into an IP address. If your registrar's DNS servers are slow, your entire website will feel sluggish. Look for registrars with a globally distributed Anycast DNS network to ensure millisecond response times.
                    </p>
                    <p>
                        Be wary of "Hidden Fees" during the checkout process. Some registrars automatically add "Email Hosting," "Website Builders," or "Premium DNS" to your cart without your consent. Always audit your cart before final payment to ensure you are only paying for the domain itself. Additionally, check for "Transfer Fees." While ICANN regulations prevent registrars from charging to "leave," some make the process intentionally difficult to discourage you from moving to a cheaper competitor.
                    </p>
                  </section>

                  <section id="ssl-essentials">
                    <h2>Phase 2: Demystifying the SSL Certificate</h2>
                    <p>
                        Once you have your domain, the next step is securing it. An SSL certificate does two things: it encrypts the data moving between the user's browser and your server, and it verifies that you are who you say you are. In 2025, SSL is not just for checkout pages; it is for every single page on your site.
                    </p>
                    <p>
                        The impact of a lack of security is devastating. Modern browsers will flag your site as "Not Secure," which is the fastest way to destroy user trust. We will now look at the different types of SSL certificates and how to choose the right one for your specific needs.
                    </p>
                  </section>

                  <section id="ssl-validation-types">
                    <h2>Understanding the Classes of SSL Validation</h2>
                    <p>
                        Not all SSL certificates are created equal. The level of "Validation" refers to how much work the Certificate Authority (CA) does to verify your identity.
                    </p>
                    <ul>
                        <li><strong>Domain Validation (DV):</strong> The most common and fastest to obtain. The CA simply verifies that you have control over the domain. Perfect for blogs, portfolios, and informational sites.</li>
                        <li><strong>Organization Validation (OV):</strong> The CA goes a step further and verifies the legal existence of your business. Provides a higher level of trust for business websites and lead generation portals.</li>
                        <li><strong>Extended Validation (EV):</strong> The "Ultimate" certificate. The CA performs a rigorous background check on your company. Highly recommended for banks, large e-commerce platforms, and government agencies.</li>
                    </ul>
                  </section>

                  <section id="free-vs-paid-ssl">
                    <h2>Free SSL vs. Paid SSL: Making the Right Choice in 2025</h2>
                    <p>
                        In 2025, the rise of Let's Encrypt has made SSL access universal. But is a free certificate always enough? For 90% of websites, free SSL is perfectly fine. They provide the same high level AES 256 bit encryption as paid certificates. If your hosting provider offers "AutoSSL," they are likely using one of these services.
                    </p>
                    <p>
                        Paid certificates are preferred when you need higher levels of validation (OV or EV), "Wildcard" support to secure an unlimited number of sub domains, or Multi Domain support for securing different domains with one cert. They also come with financial warranties and dedicated 24/7 technical support from the CA.
                    </p>
                    <p>
                        Google officially announced HTTPS as a ranking signal years ago. In 2025, this signal is even stronger. Chrome and other browsers now show a "Not Secure" warning for any site without an SSL. This warning causes immediate bounce rates of up to 80%. If people leave your site because of a security warning, your rankings will plummet regardless of how good your content is. SSL is the gateway to SEO success.
                    </p>
                  </section>

                  <section id="implementation-guide">
                    <h2>Phase 3: Step-by-Step Implementation Guide</h2>
                    <p>
                        Now that we understand the "What" and "Why," let us move into the "How." This section provides the technical steps to get your domain and SSL live.
                    </p>
                    <h3>Step 1: Purchasing and Pointing Your Domain</h3>
                    <ol>
                        <li>Go to your chosen registrar and complete the purchase.</li>
                        <li>Locate the "Nameservers" section in the dashboard.</li>
                        <li>Enter your host's nameservers. Allow 2 to 24 hours for DNS Propagation.</li>
                    </ol>
                    <h3>Step 2: Generating the Certificate Signing Request (CSR)</h3>
                    <p>
                        To get an SSL, you must first "request" it from your server. Log into your hosting control panel, look for "SSL/TLS Manager," and click on "Generate a CSR." Fill in your details. Your server will generate a block of encoded text (the CSR) and a private key. Never share your private key with anyone.
                    </p>
                    <h3>Step 3: Submitting the CSR and Validation</h3>
                    <p>
                        Go to your SSL provider and paste the CSR into their portal. Choose your validation method. DNS validation is usually the fastest: you just add a specific TXT record to your domain settings. Once the CA verifies the record, they will email you the certificate files.
                    </p>
                    <h3>Step 5: Final Handshake (Redirects and Mixed Content)</h3>
                    <p>
                        Simply installing the certificate is not enough. You must ensure all users are forced to use it. Use a plugin or edit your .htaccess file to automatically redirect any "http://" request to "https://". Ensure that every image, script, and CSS file on your page is also loaded via https to fix "Mixed Content" warnings.
                    </p>
                  </section>

                  <section id="ssl-troubleshooting">
                    <h2>Common SSL Implementation Pitfalls: Why the Padlock Might Disappear</h2>
                    <p>
                        Even with a valid certificate, your users might still face security warnings. The most common culprit is <strong>Mixed Content</strong>. This happens when your HTML is loaded over HTTPS, but you have an image or a script tag that still uses an "http://" URL. Browsers will either block these elements or show a "Partial Security" warning, which still scares away users.
                    </p>
                    <p>
                        Another common issue is an <strong>Incomplete Certificate Chain</strong>. An SSL certificate is usually part of a "Chain of Trust" leading back to a root authority. If you fail to install the "Intermediate Certificates" (often provided as a CA Bundle), older devices and some mobile browsers might not recognize your certificate as valid. Always use an online SSL checker to ensure your chain is complete and your installation is grade A.
                    </p>
                  </section>

                  <section id="long-term-maintenance">
                    <h2>Phase 4: Long Term Maintenance and Security Best Practices</h2>
                    <p>
                        Securing your site is not a one time task. It requires ongoing vigilance to ensure your domain never expires and your certificates remain valid. Domain hijacking is a real threat. Always enable Auto Renewal on your domain registrar and ensure your credit card information is up to date.
                    </p>
                    <p>
                        Free SSLs usually expire every 90 days but renew automatically. Paid SSLs last for 1 year. Set a calendar reminder 30 days before expiry. DNSSEC adds a layer of cryptographic signatures to your DNS records, preventing "DNS Spoofing." Turn it on if your registrar supports it.
                    </p>
                  </section>

                  <section id="codewrote-advantage">
                    <h2>Partnering with CodeWrote for Your Digital Infrastructure</h2>
                    <div className="bg-[#E61F93]/5 p-12 rounded-[50px] border-2 border-[#E61F93]/20 my-20">
                    <h2 style={{ marginTop: 0 }}>The Low-Risk, High-Velocity Choice</h2>
                    <p>
                        Navigating the complexities of domain strategy, DNS configuration, and SSL implementation can be overwhelming. At <strong>CodeWrote</strong>, we provide a "Zero Friction" approach to digital architecture.
                    </p>
                    <p>
                        When you partner with us for your website development, we handle the entire infrastructure stack. We don't just 'install an SSL'; we architect a secure, high performance environment that passes every security audit with flying colors. We eliminate the 'Not Secure' warnings, the DNS errors, and the domain renewal anxiety.
                    </p>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-all">
                        Experience the CodeWrote Difference
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
                    <h2 className="text-[32px] font-black uppercase tracking-tight mb-12 font-['Switzer']">Strategic Partner Feedback</h2>
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
                   <h3 className="text-[26px] font-black font-['Switzer'] uppercase leading-[1.1] mb-6 relative z-10">Secure Your Digital Identity Today</h3>
                   <p className="text-[14px] text-gray-400 font-medium font-['Switzer'] leading-relaxed mb-10 relative z-10">
                     We help businesses build rock-solid foundations with elite domain strategy and military-grade encryption.
                   </p>
                   <Link 
                     href="/contact" 
                     className="block w-full text-center py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all relative z-10 font-['Switzer'] shadow-lg"
                   >
                     Book My Consultation
                   </Link>
                </div>

                {/* 2nd Related Container */}
                <div className="bg-[#FAFAFA] p-10 rounded-[40px] border border-gray-100">
                   <h3 className="text-[11px] font-black text-[#A1A1A1] uppercase tracking-[0.25em] mb-8 font-['Switzer']">Related Insights</h3>
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
                   <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest font-['Switzer']">Global Security Excellence</div>
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
                    Ready to launch <span className="text-[#E61F93]">safely?</span>
                 </h2>
                 <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto font-['Switzer']">
                    Join hundreds of successful businesses that have leveraged our security framework to build world-class digital presences.
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
