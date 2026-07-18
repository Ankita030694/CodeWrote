import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bridging Hardware and Software: Secure IoT Cloud Integration for Enterprise | CodeWrote',
  description: 'Valuable physical sensor data is often trapped in closed hardware systems. Learn how elite architects build secure, highly scalable IoT cloud architectures and dashboards.',
  keywords: 'custom iot software development, enterprise iot cloud architecture, aws iot core integration, manufacturing data dashboard development',
  alternates: {
    canonical: 'https://codewrote.com/enterprise-iot-cloud-architecture-and-integration',
  },
};

const tocSections = [
  { id: 'the-industrial-data-trap', title: 'The Industrial Data Trap' },
  { id: 'hardware-software-divide', title: 'Bridging Hardware & Software' },
  { id: 'enterprise-iot-cloud-architecture', title: 'Enterprise IoT Architecture' },
  { id: 'high-frequency-ingestion', title: 'High-Frequency Data Ingestion' },
  { id: 'aws-iot-core-integration', title: 'AWS IoT Core Integration' },
  { id: 'time-series-databases', title: 'Time-Series Databases' },
  { id: 'securing-the-edge', title: 'Securing the Edge' },
  { id: 'manufacturing-dashboards', title: 'Manufacturing Data Dashboards' },
  { id: 'websockets-vs-polling', title: 'Real-Time Websockets' },
  { id: 'predictive-maintenance', title: 'Predictive Maintenance & ML' },
  { id: 'industrial-ux-design', title: 'Industrial UX Command Centers' },
  { id: 'partnering-with-codewrote', title: 'The Elite IoT Partner' }
];

const faqs = [
  {
    question: "Why can't we just send IoT sensor data directly to a standard SQL database?",
    answer: "A standard SQL database is optimized for complex, relational queries, not millions of tiny, high-frequency writes. If you have 10,000 sensors sending temperature data every second, a traditional SQL database will quickly lock up and crash. Enterprise iot cloud architecture requires specialized ingest pipelines (like MQTT brokers) and Time-Series Databases (like InfluxDB or AWS Timestream) engineered specifically for hyper-fast time-stamped data."
  },
  {
    question: "What exactly is AWS IoT Core and why do enterprises use it?",
    answer: "AWS IoT Core is a managed cloud service that allows billions of connected devices to easily and securely interact with cloud applications. Proper aws iot core integration handles the complex heavy lifting of device authentication, continuous MQTT connections, and message routing. It acts as an unbreakable 'front door' for your physical hardware, allowing your software team to focus on the web dashboard rather than managing server sockets."
  },
  {
    question: "How do you secure physical IoT devices from being hacked and weaponized?",
    answer: "Securing the 'Edge' (the physical devices) requires strict cryptographic discipline. We do not use shared passwords. Instead, custom iot software development involves provisioning every single physical device with a unique X.509 cryptographic certificate. The cloud automatically rejects any data payload that isn't signed by a recognized, active certificate. If a device is compromised in the field, we simply revoke its certificate, instantly severing its access."
  },
  {
    question: "What makes manufacturing data dashboard development different from standard web design?",
    answer: "Standard web design focuses on aesthetics and marketing flows. Manufacturing data dashboard development focuses on extreme data density, ultra-low latency, and cognitive load reduction. Factory floor operators need to parse millions of data points instantly. We utilize high-performance charting libraries (like WebGL-accelerated Canvas) and real-time WebSockets so anomalies (like a machine overheating) flash red on the screen within milliseconds, preventing catastrophic failures."
  },
  {
    question: "Can an IoT dashboard actually predict when a machine is going to break?",
    answer: "Yes, through Predictive Maintenance. Once we establish a robust enterprise iot cloud architecture, we begin feeding the historical time-series data (vibration, heat, RPM) into Machine Learning models (like AWS SageMaker). The AI learns the baseline 'healthy' vibration of the machine and can automatically trigger a maintenance alert in the dashboard days before a physical gear actually shears, saving millions in unplanned downtime."
  }
];

const reviews = [
  {
    name: "Jameson Ford",
    role: "VP of Operations, GlobalLogistics Corp",
    content: "We had 50,000 GPS trackers sitting on shipping containers, but the manufacturer's software was ancient and useless. CodeWrote executed a flawless aws iot core integration, routing all that raw data into a beautiful, lightning-fast Next.js command center. Total operational visibility achieved.",
    rating: 5
  },
  {
    name: "Elena Rostova",
    role: "Director of Innovation, AgriTech Solutions",
    content: "Building software that communicates securely with physical soil sensors in the middle of a field is not for amateurs. CodeWrote's expertise in custom iot software development and cryptographic edge security completely transformed our agricultural monitoring product.",
    rating: 5
  },
  {
    name: "Arthur Chen",
    role: "Plant Manager, Apex Manufacturing",
    content: "Our legacy SQL database was crashing daily under the weight of our new factory sensors. CodeWrote migrated us to a modern time-series architecture. Their manufacturing data dashboard development gave our floor operators real-time predictive alerts that have literally saved our assembly line from catastrophic breakdown.",
    rating: 5
  }
];

export default function EnterpriseIoTPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Search Engine Optimized Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Bridging Hardware and Software: Secure IoT Cloud Integration for Enterprise",
        "description": "Valuable physical sensor data is often trapped in closed hardware systems. Learn how elite architects build secure, highly scalable IoT cloud architectures and dashboards.",
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
              Enterprise <span className="text-[#E61F93]">IoT</span> & <span className="text-[#A1A1A1]">Dashboards</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-12 max-w-3xl mx-auto font-['Switzer']">
              Your physical sensors generate billions of data points, but is the software actually usable? Discover how elite architects build highly secure, infinitely scalable cloud pipelines and beautiful web command centers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-all font-['Switzer']">
                 Audit Your Architecture
               </Link>
               <Link href="#the-industrial-data-trap" className="w-full sm:w-auto px-10 py-5 bg-white border border-gray-200 text-black rounded-full font-black text-sm uppercase tracking-widest hover:border-[#E61F93] transition-all font-['Switzer']">
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
            <Link href="/enterprise-iot-cloud-architecture-and-integration" className="text-black">IoT Architecture</Link>
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
                  <section id="the-industrial-data-trap">
                    <h2>The Industrial Data Trap</h2>
                    <p>
                        The modern enterprise is rapidly deploying physical sensors to every asset imaginable. From vibration sensors on manufacturing assembly lines to GPS trackers on shipping containers and humidity monitors in agricultural fields, the physical world is coming online. 
                    </p>
                    <p>
                        However, acquiring the hardware is only 10% of the battle. The overwhelming majority of these enterprises fall into the "Industrial Data Trap." They successfully generate billions of data points, but that incredibly valuable information is trapped inside closed, proprietary hardware ecosystems, or worse, displayed on ugly, laggy, Windows 95-era desktop software. This data vacuum prevents executives from making real-time decisions and forces factory operators to manually monitor machines. To unlock the ROI of hardware, you must build a flawless, bespoke bridge to the web.
                    </p>
                  </section>

                  <section id="hardware-software-divide">
                    <h2>Bridging the Hardware-Software Divide</h2>
                    <p>
                        Web developers and hardware engineers speak entirely different languages. A brilliant embedded engineer can program a microcontroller (like an ESP32 or Raspberry Pi) to read a temperature sensor flawlessly. But when asked to securely transmit that data to a cloud server, index it for millions of concurrent reads, and display it on a beautiful mobile dashboard, the project often collapses.
                    </p>
                    <p>
                        Conversely, a standard web agency can build a beautiful website, but they lack the deep systems engineering knowledge required to handle MQTT protocols, persistent socket connections, and binary payloads. CodeWrote operates exclusively at this intersection. Custom iot software development requires an elite hybrid team that understands both the limitations of battery-powered microcontrollers and the limitless scale of modern cloud architecture.
                    </p>
                  </section>

                  <section id="enterprise-iot-cloud-architecture">
                    <h2>Core Principles of Enterprise IoT Cloud Architecture</h2>
                    <p>
                        Building an enterprise-grade IoT platform is fundamentally different from building a standard B2B SaaS application. You cannot treat a physical sensor like a web browser. Sensors are "dumb"—they have limited CPU power, intermittent internet connectivity, and they operate in hostile physical environments.
                    </p>
                    <p>
                        A robust enterprise iot cloud architecture is built on three core pillars: <strong>Decoupling</strong>, <strong>Durability</strong>, and <strong>High Throughput</strong>. The physical devices must never communicate directly with the database. Instead, they communicate with a highly scalable ingest layer. If the primary database goes offline for maintenance, the ingest layer must durably queue the incoming sensor messages, ensuring zero data loss. When the database returns, the queue processes the backlog. This decoupling ensures the hardware never knows or cares about the state of the software.
                    </p>
                  </section>

                  <section id="high-frequency-ingestion">
                    <h2>High-Frequency Data Ingestion at Scale</h2>
                    <p>
                        The scale of IoT data is staggering. A traditional web app might handle a few hundred user clicks per minute. An industrial deployment might have 5,000 machines, each sending 10 telemetry metrics every single second. That is 3 million database writes every minute, 24/7/365.
                    </p>
                    <p>
                        Attempting to route this traffic through traditional REST APIs (HTTP requests) will instantly melt your servers due to the massive overhead of opening and closing TCP connections. Instead, elite architects utilize the <strong>MQTT (Message Queuing Telemetry Transport)</strong> protocol. MQTT maintains a persistent, incredibly lightweight connection between the device and the cloud. It is designed specifically for high-latency, low-bandwidth environments, allowing millions of devices to stream telemetry data simultaneously with minimal server overhead.
                    </p>
                  </section>

                  <section id="aws-iot-core-integration">
                    <h2>AWS IoT Core Integration Explained</h2>
                    <p>
                        While you could technically build and host your own MQTT brokers on raw EC2 servers, doing so for an enterprise deployment is architectural suicide. The maintenance, scaling, and security patching would consume your entire engineering team.
                    </p>
                    <p>
                        This is why we leverage managed services like AWS IoT Core. A flawless aws iot core integration acts as the unbreakable "front door" for your physical devices. It automatically scales to handle billions of messages, manages the MQTT broker infrastructure invisibly, and provides a powerful "Rules Engine." When a temperature reading hits AWS IoT Core, the Rules Engine can instantly route that specific message to a database, trigger a serverless Lambda function to evaluate an anomaly, or push a notification directly to a manager's phone—all without provisioning a single traditional server.
                    </p>
                  </section>

                  <section id="time-series-databases">
                    <h2>Time-Series Databases for Sensor Analytics</h2>
                    <p>
                        The biggest mistake amateur developers make in IoT is attempting to store high-frequency sensor data in a traditional relational database like PostgreSQL or MySQL. Relational databases are optimized for complex joins (e.g., matching a User to an Order). They are completely incapable of handling constant, millisecond-level `INSERT` operations at scale.
                    </p>
                    <p>
                        IoT data is almost entirely "Time-Series" data—a value mapped to an exact timestamp (e.g., [84°C at 10:04:22.100 AM]). We architect data layers using specialized Time-Series Databases (TSDB) such as Amazon Timestream or InfluxDB. These databases are engineered specifically to ingest millions of sequential data points per second and perform ultra-fast aggregations (e.g., "Give me the average temperature of Machine #4 over the last 30 days, grouped by hour"). Without a TSDB, your analytics dashboard will take minutes to load, rendering the platform useless.
                    </p>
                  </section>

                  <section id="securing-the-edge">
                    <h2>Securing the Edge: Device Authentication</h2>
                    <p>
                        Physical devices located in warehouses or fields are highly susceptible to tampering. If a malicious actor unplugs your sensor and connects their own laptop, what prevents them from flooding your cloud with fake data or hacking your API?
                    </p>
                    <p>
                        The answer is strict cryptographic authentication. We do not use API keys or shared passwords for IoT devices. We provision every single physical microcontroller with a unique, mathematically verifiable X.509 certificate during manufacturing. When the device connects to the cloud, it must prove its identity using this certificate (Mutual TLS). If a device is stolen from a shipping container, the cloud administrator simply clicks a button in the dashboard to revoke that specific certificate, instantly locking the hardware out of the system forever.
                    </p>
                  </section>

                  <section id="manufacturing-dashboards">
                    <h2>Manufacturing Data Dashboard Development</h2>
                    <p>
                        Once the data is securely resting in the cloud, it must be visualized. Standard "SaaS template" design is woefully inadequate for industrial environments. A factory floor operator does not want clean, minimalist white space; they need extreme data density and instant cognitive clarity.
                    </p>
                    <p>
                        Manufacturing data dashboard development is a highly specialized discipline. We build "Command Centers." We utilize high-performance charting libraries capable of rendering 100,000 data points natively in the browser using WebGL acceleration, ensuring smooth zooming and panning. We design strict visual hierarchies where normal operations fade into the background (grey/blue), and anomalies aggressively draw the eye (flashing red) so operators can respond to impending failures instantly.
                    </p>
                  </section>

                  <section id="websockets-vs-polling">
                    <h2>Real-Time Websockets vs Polling</h2>
                    <p>
                        In a consumer web app, if data takes 5 seconds to load, it is a minor annoyance. In an industrial dashboard monitoring a high-pressure boiler, a 5-second delay is a catastrophic safety hazard.
                    </p>
                    <p>
                        We do not use "polling" (where the browser asks the server for new data every few seconds). We implement <strong>WebSockets</strong>—persistent, bidirectional communication channels between the Next.js frontend and the cloud infrastructure. When a sensor detects an anomaly and transmits it via MQTT, that data is routed through the cloud and pushed down the WebSocket directly to the browser in under 50 milliseconds. The gauge on the dashboard spins instantly, in true real-time, mirroring the physical reality of the machine.
                    </p>
                  </section>

                  <section id="predictive-maintenance">
                    <h2>Predictive Maintenance and Machine Learning</h2>
                    <p>
                        A beautiful dashboard tells you what is happening right now. An elite enterprise iot cloud architecture tells you what is going to happen next week. This is the holy grail of industrial IoT: Predictive Maintenance.
                    </p>
                    <p>
                        Once your Time-Series Database has collected months of high-fidelity vibration, acoustic, and thermal data, we stream that historical dataset into Machine Learning models (like AWS SageMaker). The AI learns the subtle, invisible patterns that precede a mechanical failure. Instead of replacing a motor bearing on a strict 90-day schedule (wasteful) or waiting for it to break and halt the assembly line (disastrous), the dashboard alerts the maintenance team on day 104, stating: "AI predicts 85% probability of bearing failure in the next 48 hours." You schedule the repair during planned downtime, saving millions.
                    </p>
                  </section>

                  <section id="industrial-ux-design">
                    <h2>UX Design for Industrial Command Centers</h2>
                    <p>
                        The ultimate success of an IoT initiative relies on user adoption by the operators on the floor. The software must be incredibly resilient to network drops inside concrete factories and accessible across ruggedized tablets, massive command center screens, and mobile phones.
                    </p>
                    <p>
                        We engineer Progressive Web Apps (PWAs) with robust offline-first capabilities. If a factory supervisor walks into a dead zone, the dashboard doesn't crash; it caches their inputs (like a maintenance log entry) and automatically syncs with the cloud the moment they step back into Wi-Fi range. We build dark-mode native interfaces to reduce eye strain in low-light control rooms, ensuring the software actively aids the human operator.
                    </p>
                  </section>

                  <section id="partnering-with-codewrote">
                    <h2>Why CodeWrote is the Elite IoT Engineering Partner</h2>
                    <p>
                        Building a secure, hyper-scalable bridge between the physical and digital worlds requires an incredibly rare intersection of skills. You cannot hire a standard web agency and expect them to understand MQTT payload structures, X.509 cryptography, and Time-Series query optimization.
                    </p>
                    <p>
                        CodeWrote is the definitive partner for custom iot software development. We architect unbreakable, highly scalable cloud infrastructures (utilizing AWS IoT Core) that effortlessly ingest millions of telemetry events, and we visualize that data through blistering-fast, intuitively designed Next.js command centers. Stop letting your valuable sensor data rot in closed systems or legacy interfaces. Partner with CodeWrote to unlock the true ROI of your physical hardware.
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
                   <h3 className="text-[26px] font-black font-['Switzer'] uppercase leading-[1.1] mb-6 relative z-10">Data Trapped?</h3>
                   <p className="text-[14px] text-gray-400 font-medium font-['Switzer'] leading-relaxed mb-10 relative z-10">
                     Stop struggling with legacy software. Let us architect a highly secure, real-time IoT cloud infrastructure.
                   </p>
                   <Link 
                     href="/contact" 
                     className="block w-full text-center py-5 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all relative z-10 font-['Switzer'] shadow-lg"
                   >
                     Audit Your Architecture
                   </Link>
                </div>

                {/* 2nd Related Pages Container */}
                <div className="bg-[#FAFAFA] p-10 rounded-[40px] border border-gray-100">
                   <h3 className="text-[11px] font-black text-[#A1A1A1] uppercase tracking-[0.25em] mb-8 font-['Switzer']">Related Insights</h3>
                   <div className="space-y-8">
                      <Link href="/enterprise-data-warehouse-and-etl-pipeline-architecture" className="group block">
                        <span className="text-[10px] text-[#E61F93] font-black uppercase tracking-widest mb-2 block">infrastructure</span>
                        <h4 className="text-[15px] font-bold text-black group-hover:text-[#E61F93] transition-colors font-['Switzer'] leading-snug">Enterprise Data Pipelines & ETL</h4>
                      </Link>
                      <Link href="/building-resilient-software-architecture-for-api-failures" className="group block">
                        <span className="text-[10px] text-[#E61F93] font-black uppercase tracking-widest mb-2 block">systems</span>
                        <h4 className="text-[15px] font-bold text-black group-hover:text-[#E61F93] transition-colors font-['Switzer'] leading-snug">Resilient Systems & API Failures</h4>
                      </Link>
                      <Link href="/secure-ai-integration-for-enterprise-software" className="group block">
                        <span className="text-[10px] text-[#E61F93] font-black uppercase tracking-widest mb-2 block">artificial intelligence</span>
                        <h4 className="text-[15px] font-bold text-black group-hover:text-[#E61F93] transition-colors font-['Switzer'] leading-snug">Secure AI Integration for Enterprise</h4>
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
                    Unlock the <span className="text-[#E61F93]">ROI</span> of your <span className="text-[#A1A1A1]">hardware.</span>
                 </h2>
                 <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto font-['Switzer']">Stop letting valuable sensor data rot in legacy systems. Partner with elite software architects to build a highly secure, real-time IoT cloud infrastructure.</p>
                 <Link href="/contact" className="px-12 py-6 bg-[#E61F93] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all font-['Switzer'] shadow-2xl">
                    Architect Your Cloud
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
