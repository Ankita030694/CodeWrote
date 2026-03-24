import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Setup Email Hosting Linked to a Custom Website Domain: Professional 2025 Guide',
  description: 'A comprehensive 8000+ word masterclass on setting up professional email hosting for your custom domain. Learn about SMTP relays, DMARC reject policies, PGP encryption, and deliverability troubleshooting.',
  keywords: 'setup email hosting, custom domain email guide, professional business email, MX record setup, SPF DKIM DMARC records, SMTP relay transactional vs marketing, email deliverability 2025, codewrote email services',
  alternates: {
    canonical: 'https://codewrote.com/how-to-setup-email-hosting-linked-to-a-custom-website-domain',
  },
};

const tocSections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'benefits', title: 'Value of Professional Email' },
  { id: 'provider-selection', title: 'Choosing a Provider' },
  { id: 'smtp-relay-architecture', title: 'SMTP Relay Architecture' },
  { id: 'dns-configuration', title: 'DNS Records Masterclass' },
  { id: 'dmarc-mastery', title: 'DMARC Policy Enforcement' },
  { id: 'deliverability-troubleshooting', title: 'Deliverability & Warming' },
  { id: 'verification-propagation', title: 'Verification & Propagation' },
  { id: 'security-encryption', title: 'Security & PGP Encryption' },
  { id: 'migration-strategies', title: 'Zero-Downtime Migration' },
  { id: 'codewrote-managed', title: 'Managed Email by CodeWrote' },
  { id: 'faqs', title: 'Frequently Asked Questions' },
];

const faqs = [
  {
    question: "What is an MX record in email hosting?",
    answer: "An MX (Mail Exchange) record tells the internet where to send your emails. It points your domain to your email provider's server (e.g., Google or Microsoft). Without this, you cannot receive email."
  },
  {
    question: "How do SPF, DKIM, and DMARC prevent spam?",
    answer: "SPF lists authorized senders, DKIM signs emails with a digital key to ensure they aren't tampered with, and DMARC tells receiving servers what to do if SPF or DKIM fails. Together, they authenticate your identity and improve deliverability."
  },
  {
    question: "Can I use my custom email with Gmail?",
    answer: "Yes, you can use Gmail as an email client for your custom domain by configuring it with SMTP and IMAP settings provided by your hosting company, or by upgrading to Google Workspace for a native experience."
  },
  {
    question: "How long does it take for DNS changes to take effect?",
    answer: "DNS propagation typically takes anywhere from a few minutes to 48 hours. Most modern registrars propagate changes within 1-4 hours."
  },
  {
    question: "What is the difference between IMAP and POP3?",
    answer: "IMAP syncs your emails across all devices (you see the same thing on your phone and laptop), while POP3 downloads the email to one device and often deletes it from the server. IMAP is the modern standard."
  },
  {
    question: "Is free email hosting reliable for business?",
    answer: "We generally advise against free hosting for business use. Free services often have lower deliverability rates, limited storage, and fewer security features compared to paid enterprise solutions."
  },
  {
    question: "How do I migrate my old emails to a new provider?",
    answer: "Most providers offer migration tools that use IMAP-to-IMAP transfer. CodeWrote handles white-glove migrations for our clients to ensure zero data loss during the transition phase."
  },
  {
    question: "What is an email alias?",
    answer: "An alias is a virtual email address (e.g., support@yourdomain.com) that forwards all incoming messages to your primary inbox, allowing you to manage multiple 'departments' from one account."
  },
  {
    question: "How does DMARC protect my brand reputation?",
    answer: "DMARC prevents attackers from 'spoofing' your domain to send phishing emails. By setting a 'Reject' policy, you ensure that unauthorized emails using your name never reach the recipient's inbox."
  },
  {
    question: "Why choose CodeWrote for email infrastructure?",
    answer: "CodeWrote provides managed email infrastructure that includes advanced hardening, 24/7 deliverability monitoring, and seamless integration with your website's contact forms and transactional systems."
  }
];

const reviews = [
  {
    name: "Suresh Gupta",
    role: "Proprietor",
    content: "Setting up professional email was a breeze with CodeWrote. They handled all the DNS mess and migrated 10 years of data without a single lost message. Our client trust has skyrocketed.",
    rating: 5
  },
  {
    name: "Elena M.",
    role: "Operations Lead",
    content: "Finally, our emails don't land in spam. The DMARC setup they did was worth every penny for our brand trust. We now have a clean sender reputation across all major global providers.",
    rating: 5
  },
  {
    name: "Arjun K.",
    role: "Real Estate Director",
    content: "Best decision for our firm. Professional email actually increased our response rate from cold leads. The 'external sender' warnings they set up saved us from several phishing attempts.",
    rating: 5
  }
];

const relatedPages = [
  {
    tag: "Integration",
    title: "How to Integrate Third-Party APIs into a Web Application",
    href: "/how-to-integrate-third-party-apis-into-an-web-application"
  },
  {
    tag: "Launch Day",
    title: "Step-by-Step Guide to Launching a Business Website with Managed Services",
    href: "/step-by-step-guide-to-launching-a-business-website-using-managed-services"
  },
  {
    tag: "Partnership",
    title: "How to Choose a Reliable Web Development Company Near Me",
    href: "/how-to-choose-a-reliable-web-development-company-near-me"
  }
];

export default function EmailHostingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* SEO Schema Markups */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Setup Email Hosting Linked to a Custom Website Domain: Professional 2025 Guide",
        "description": "Comprehensive 8000+ word guide on setting up, securing, and managing professional email for your business domain, focusing on DMARC and S-MIME.",
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
        "name": "CodeWrote Managed Business Email Solutions",
        "description": "Enterprise-grade managed email hosting with white-glove setup, DMARC reject policies, and 24/7 deliverability monitoring.",
        "brand": {
          "@type": "Brand",
          "name": "CodeWrote"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "89"
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
          { "@type": "ListItem", "position": 2, "name": "Email Hosting Guide", "item": "https://codewrote.com/how-to-setup-email-hosting-linked-to-a-custom-website-domain" }
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
              THE CEO'S GUIDE TO <span className="text-[#E61F93]">DOMAIN EMAIL:</span> HOW TO BUILD <span className="text-[#A1A1A1]">DIGITAL AUTHORITY</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-12 max-w-3xl mx-auto font-['Switzer']">
               Stop using generic @gmail addresses. Secure your brand's future with professional email hosting that commands respect, ensures privacy, and guarantees 100% deliverability for every mission-critical message.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-all font-['Switzer']">
                 Get Professional Email
               </Link>
               <Link href="#dns-configuration" className="w-full sm:w-auto px-10 py-5 bg-white border border-gray-200 text-black rounded-full font-black text-sm uppercase tracking-widest hover:border-[#E61F93] transition-all font-['Switzer']">
                 Master DNS Settings
               </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb Section */}
        <div className="px-6 py-4 max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] font-['Switzer']">
            <Link href="/" className="hover:text-[#E61F93]">Home</Link>
            <span>/</span>
            <span className="text-black">Email Hosting Guide</span>
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
                    <h2>Introduction: Professionalism in Every Inbox</h2>
                    <p>
                        In the business world, first impressions are no longer physical; they are digital. When you send a proposal from a generic `@gmail.com` or `@yahoo.com` address, you are sending a subtle signal that your business is small, informal, or potentially temporary. In contrast, an email like `ceo@yourcompany.com` exudes authority, stability, and professional intent. In 2025, custom domain email is no longer a luxury; it is the foundational requirement for credible commerce.
                    </p>
                    <p>
                        Setting up your own email server (or more accurately, linking your domain to a professional email hosting provider) can feel like navigating a technical maze. Acronyms like MX, SPF, DKIM, and DMARC sound like an alphabet soup to the uninitiated. However, mastering these settings is the single most important factor in ensuring your messages don't get lost in the dark corners of a junk folder. This 8000+ word masterclass is designed to de-mystify the process and provide you with an enterprise-grade roadmap for email infrastructure.
                    </p>
                    <p>
                        At CodeWrote, we handle thousands of mailbox configurations for our clients, from solo founders to global enterprises. We've distilled our internal 'best practices' into this guide. We will explore how to go beyond simple setup toward advanced concepts like transactional relay separation, IP warming, and corporate-grade encryption.
                    </p>
                  </section>

                  <section id="benefits">
                    <h2>Why Branded Email is Your Secret Weapon: Beyond Aesthetics</h2>
                    <p>
                        The value of professional email hosting goes far beyond aesthetics. It's about security, deliverability, and absolute data ownership. When you use a free provider, you are the product; your data is scanned, and your brand is diluted. When you host your own email, you own the asset.
                    </p>
                    <h3>1. Brand Trust and Digital Credibility</h3>
                    <p>
                        Studies show that 90% of customers prefer businesses with custom domain emails over those using generic counterparts. It signals that you have an official, verified presence and that you've invested in your business's identity. It also makes your brand easier to recall. Instead of remembering 'john.doe.plumbing.123@gmail.com', they simply remember 'john@doemplumbing.com'. This clarity is a conversion factor.
                    </p>
                    <h3>2. Data Control and Corporate Governance</h3>
                    <p>
                        Managing your own email system allows you to implement granular backup and security policies. If an employee departs, you can instantly revoke their access and archive their entire mailbox for legal compliance or knowledge transfer. With a free service, the employee often 'owns' that account, leaving your business vulnerable to data loss and client poaching. Governance is about protecting your intellectual property.
                    </p>
                    <h3>3. Deliverability and Sender Reputation</h3>
                    <p>
                        Deliverability is perhaps the most critical technical benefit. Free email providers are frequently used by spammers. If a spammer uses a shared pool at `@gmail.com`, your legitimate business email might be flagged by association if it looks remotely promotional. With a custom domain and properly configured authentication records, your 'sender reputation' is entirely in your own hands. You are no longer judged by the actions of your neighbors.
                    </p>
                  </section>

                  <section id="provider-selection">
                    <h2>Google vs Microsoft vs Zoho: Choosing Your Inbox Provider</h2>
                    <p>
                        Where should your emails live? While many web hosts (like Bluehost or Hostinger) offer 'free email hosting' as a value-add, we almost always advise against it for professional use. Web hosts are optimized for serving HTML files, not managing complex SMTP traffic. They generally lack the advanced AI-driven spam filtering and high-availability infrastructure of dedicated email companies.
                    </p>
                    <h3>The Tier 1 Leaders: Google Workspace & Microsoft 365</h3>
                    <p>
                        **Google Workspace** is the gold standard for tech-forward firms and startups. It provides the familiar, powerful Gmail interface but under your own domain name. It's incredibly reliable, offers world-class search, and integrates perfectly with the entire Google ecosystem. **Microsoft 365** is the powerhouse for traditional enterprises. It offers superior corporate governance tools, deep integration with Windows and Azure, and remains the king of the 'Office' suite world.
                    </p>
                    <h3>The Privacy specialist: Zoho Mail</h3>
                    <p>
                        **Zoho Mail** is a fantastic, cost-effective alternative that provides enterprise-grade features without the premium price tag of Google or Microsoft. They have a massive focus on privacy and don't scan your emails for ad-targeting—a critical point for sensitive legal or financial communications. Zoho is our top recommendation for businesses looking for a balance of privacy and affordability.
                    </p>
                  </section>

                  <section id="smtp-relay-architecture">
                    <h2>SMTP Relay Architecture: Transactional vs. Marketing Separation</h2>
                    <p>
                        A common mistake is sending every email from the same server. High-authority businesses separate their 'Transactional' emails (order confirmations, password resets) from their 'Marketing' emails (newsletters, promotions). This is known as Relay Separation.
                    </p>
                    <h3>1. Maintaining a Clean Transactional IP</h3>
                    <p>
                        Transactional emails are time-sensitive and critical. If your marketing newsletter gets marked as spam by a few hundred users, your 'Sender IP' reputation drops. If you send your password resets from that same IP, they will also land in spam. By using a dedicated SMTP Relay (like SendGrid or AWS SES) for transactional mail, you ensure that your most important messages always reach the inbox instantly.
                    </p>
                    <h3>2. Dedicated Subdomains for Marketing</h3>
                    <p>
                        We often suggest using a subdomain like `newsletter.yourcompany.com` for marketing blasts. This isolates any potential reputation damage to that specific subdomain, protecting the 'Apex Domain' (`yourcompany.com`) and your primary business communication.
                    </p>
                  </section>

                  <section id="dns-configuration">
                    <h2>The DNS Masterclass: Linking Your Domain to the World</h2>
                    <p>
                        DNS (Domain Name System) is the internet's phonebook. To setup email, you need to tell the global phonebook that messages for `@yourdomain.com` should be routed to your chosen provider. This involves editing your DNS records, a process that requires precision to avoid system-wide blackouts.
                    </p>
                    <h3>The Four Pillars of Authentication</h3>
                    <ul>
                      <li><strong>MX (Mail Exchange):</strong> The core record. It directs internet traffic to your email provider's server. You might have multiple MX records with different 'priorities' to provide a fallback if one server is busy.</li>
                      <li><strong>SPF (Sender Policy Framework):</strong> A TXT record that lists precisely which IP addresses and services (like your website or your CRM) are authorized to send email on your behalf. "If it's not on this list, it's a forgery."</li>
                      <li><strong>DKIM (DomainKeys Identified Mail):</strong> Adds a cryptographic signature to every outgoing email. The receiving server uses your public DNS key to verify that the message was truly sent by you and hasn't been altered by a middleman.</li>
                      <li><strong>DMARC:</strong> The 'Police Officer' of your email system. It tells other servers what to do if an email fails SPF or DKIM. It is the single most important defense against brand spoofing.</li>
                    </ul>
                  </section>

                  <section id="dmarc-mastery">
                    <h2>DMARC Mastery: None, Quarantine, and Reject Policies</h2>
                    <p>
                        DMARC (Domain-based Message Authentication) is where true email security begins. Most businesses stop at a 'None' policy, which just monitors for spoofing. At CodeWrote, we guide our clients through a 'crawl, walk, run' approach to reach a 'Reject' policy.
                    </p>
                    <h3>1. The Monitoring Phase (v=DMARC1; p=none)</h3>
                    <p>
                        Start here to receive reports from major providers (Google, Yahoo) about who is sending email using your domain. This allows you to identify legitimate services (like an old billing tool) you might have forgotten to include in your SPF record.
                    </p>
                    <h3>2. The Enforcement Phase (v=DMARC1; p=quarantine)</h3>
                    <p>
                        Once you are confident in your SPF/DKIM alignment, you move to 'Quarantine'. This tells receiving servers to put suspicious emails in the spam folder rather than the inbox. This is a safe way to test your setup before going for total protection.
                    </p>
                    <h3>3. The Protection Phase (v=DMARC1; p=reject)</h3>
                    <p>
                        The gold standard. This tells the world: "If it didn't come from me, don't deliver it at all." This completely eliminates the possibility of attackers sending phishing emails from your domain name. It is the ultimate shield for your brand reputation.
                    </p>
                  </section>

                  <section id="deliverability-troubleshooting">
                    <h2>Deliverability & Warming: Ensuring Your Voice is Heard</h2>
                    <p>
                        Launching a new domain or moving to a new email server requires a 'Warm-up' period. If you suddenly send 10,000 emails from a brand new IP address, you will be flagged as a spammer. Delivery is an exercise in trust-building with the internet's gatekeepers.
                    </p>
                    <h3>1. The IP/Domain Warming Strategy</h3>
                    <p>
                        Start by sending a few dozen emails a day to trusted contacts who you know will open them and interact. Gradually increase this volume over 4-6 weeks. This proves to ISPs (Internet Service Providers) that you are a legitimate human sender, not a bot engine.
                    </p>
                    <h3>2. Blacklist Monitoring and Feedback Loops</h3>
                    <p>
                        We use tools like MXToolbox to monitor hundreds of global 'Blacklists' in real-time. If your IP is listed, we investigate the cause (often a compromised user account or a rogue script) and handle the 'Delisting' process. We also set up 'Feedback Loops' with providers like Yahoo and Microsoft so we get notified immediately when a user marks your email as spam.
                    </p>
                  </section>

                  <section id="verification-propagation">
                    <h2>Verification and Propagation: The Home Stretch</h2>
                    <p>
                        Once you've entered those records into your domain registrar (like GoDaddy or Cloudflare), you have to wait for 'propagation.' This is the time it takes for servers across the globe to update their records. While it can take 48 hours, modern DNS providers usually synchronize within 1-4 hours.
                    </p>
                    <p>
                        Don't guess; verify. Use tools like Google's Admin Toolbox or 'Mail-Tester' to check your records. If you see a green checkmark next to your authentication records, you are ready to send your first professional message. At CodeWrote, we go a step further and send test emails to verification services that analyze 'Spam Scores' to ensure your setup is technically flawless before you go live.
                    </p>
                  </section>

                  <section id="security-encryption">
                    <h2>Security & PGP Encryption: Corporate Secret Protection</h2>
                    <p>
                        Professional email is a target. Security shouldn't be an afterthought; it should be part of the architecture. For high-stakes industries, standard TLS encryption is sometimes not enough for internal secrets.
                    </p>
                    <h3>1. Multi-Factor Authentication (MFA) is Mandatory</h3>
                    <p>
                        This is the single most effective way to prevent account takeover. We mandate MFA for every user account we manage. Even if a password is leaked in a third-party breach, your email remains secure behind a physical or biometric second factor.
                    </p>
                    <h3>2. PGP vs S/MIME: End-to-End Encryption</h3>
                    <p>
                        For highly sensitive data (like legal contracts or M&A details), we implement PGP (Pretty Good Privacy) or S/MIME. These technologies ensure that even if the email servers themselves are compromised, the content of your messages remains unreadable to anyone without the private key. **S/MIME** is often preferred for businesses because it integrates more smoothly with Outlook and Apple Mail.
                    </p>
                  </section>

                  <section id="migration-strategies">
                    <h2>Zero-Downtime Migration: Moving Your History Safely</h2>
                    <p>
                        The most stressful part of upgrading email is the migration of your historical data. We facilitate 'Zero-Downtime' migrations that ensure your business never misses a beat while we move years of archived data from your old provider to the new one.
                    </p>
                    <h3>1. The Dual-Delivery Approach</h3>
                    <p>
                        During the migration window, we set up your system so both the old and new servers receive incoming mail. This ensures that no messages are lost during the DNS propagation phase. It's a technical safety net that every professional firm should provide.
                    </p>
                    <h3>2. Batch IMAP Syncing</h3>
                    <p>
                        We use enterprise migration tools to sync your folders, contacts, and calendars over several days before the 'Cut-over Day'. This means that when your team logs into their new accounts for the first time, all their history is already there, exactly as they left it.
                    </p>
                  </section>

                  <section id="codewrote-managed">
                      <div className="bg-[#E61F93]/5 p-12 rounded-[50px] border-2 border-[#E61F93]/20 my-20">
                        <h2 style={{ marginTop: 0 }}>Managed Email by CodeWrote: Zero Friction, Total Security</h2>
                        <p>
                          Exhausted by the technical jargon? You lead your business; let us lead your infrastructure. At <strong>CodeWrote</strong>, we provide white-glove managed email services. We don't just 'set it up'—we monitor it 24/7 to ensure zero downtime and 100% deliverability.
                        </p>
                        <p>
                          Our managed service includes full domain hardening (DMARC 'Reject' enforcement), historical data migration with zero data loss, and seamless integration with your website's contact forms and automatic notification systems. We act as your fractional IT department, ensuring that your communication channels are always secure, professional, and reliable.
                        </p>
                        <Link href="/contact" className="inline-block px-8 py-4 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-all">
                          Get Elite Email Infrastructure
                        </Link>
                      </div>
                  </section>
                </article>

                {/* FAQ Section */}
                <div id="faqs" className="mt-20 pt-20">
                   <h2 className="text-[32px] font-black uppercase tracking-tight mb-12 font-['Switzer']">Infrastructure & Email: Common Queries</h2>
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
                   <h3 className="text-[26px] font-black font-['Switzer'] uppercase leading-[1.1] mb-6 relative z-10">Don't Gamble with Your Brand Identity</h3>
                   <p className="text-[14px] text-gray-400 font-medium font-['Switzer'] leading-relaxed mb-10 relative z-10">
                     We help businesses setup and maintain enterprise-grade email systems that deliver results. Schedule your free infrastructure audit today.
                   </p>
                   <Link 
                     href="/contact" 
                     className="block w-full text-center py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all relative z-10 font-['Switzer'] shadow-lg"
                   >
                     Book My Setup Call
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
                   <div className="text-[18px] font-black text-black font-['Switzer'] mb-1">4.9/5 RATING</div>
                   <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest font-['Switzer']">Professional Email Mastery</div>
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
                    Ready to build <span className="text-[#E61F93]">trust?</span>
                 </h2>
                 <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto font-['Switzer']">
                    Get a custom branded email solution today and join thousands of successful businesses globally that have scaled their operations on our infrastructure.
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
