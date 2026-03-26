"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    email: "",
    phone: "",
    message: ""
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who do you usually work with?",
      answer: "Startups, creators, and growing brands that want clean design and smart systems, not just pretty screens."
    },
    {
      question: "What tools do you find most effective?",
      answer: "Startups, creators, and growing brands that want clean design and smart systems, not just pretty screens."
    },
    {
      question: "How do you measure project success?",
      answer: "Startups, creators, and growing brands that want clean design and smart systems, not just pretty screens."
    }
  ];

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^[a-zA-Z\s]*$/.test(value)) {
      setFormData({ ...formData, name: value });
    }
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^[a-zA-Z\s]*$/.test(value)) {
      setFormData({ ...formData, state: value });
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow digits and max length 10
    if (value === "" || (/^\d*$/.test(value) && value.length <= 10)) {
      setFormData({ ...formData, phone: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to send message. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-['Switzer']">
      <Navbar />

      <main className="w-full mx-auto px-[40px] lg:px-[140px] max-w-[1920px] flex-1 flex flex-col items-start md:items-center justify-center text-left md:text-center pt-45 pb-16 font-family-switzer font-weight-500 font-semibold">
        <h1 className="text-left md:text-center text-[45px] md:text-5xl lg:text-6xl text-black mb-6 tracking-tight leading-[1.1]">
          Big Ideas Begin<br />
          With A <span className="text-[#E61F93]">Simple Hello!</span>
        </h1>
        <p className="text-left md:text-center text-gray-600 text-[19px] md:text-xl max-w-4xl md:mx-auto mt-2 leading-relaxed font-medium font-weight-500">
          We'd love to hear about your project and how <br className="block md:hidden" />we can help.{' '}<br className="block md:hidden" />Send us a message, book a call, or reach out,{' '}<br className="block md:hidden" />let's build something great together.
        </p>
      </main>

      <div className="w-full mx-auto px-[40px] lg:px-[140px] max-w-[1920px] mb-32 relative z-10 flex flex-col">
        <div className="order-2 md:order-1 bg-[#FFFFFF] rounded-[2rem] md:rounded-[3.5rem] border-[8px] md:border-[28px] border-[#F2F2F2] p-4 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-5 md:gap-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mx-auto w-full">

          {/* Left Form Section */}
          <div className="lg:flex-[4] p-4 md:p-8 bg-[#ededed] rounded-[1rem]">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center shadow-sm">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Message Sent!</h3>
                <p className="text-gray-600 font-medium">Thanks for reaching out. We'll get back to you soon.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-[#E61F93] font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6">
                <div>
                  <label className="block text-gray-500 font-semibold mb-2 ml-1 text-[20px]">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleNameChange}
                    required
                    className="w-full px-5 py-4 rounded-[1rem] bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E61F93] transition-all font-['Switzer'] text-[20px]"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 font-semibold mb-2 ml-1 text-[20px]">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-5 py-4 rounded-[1rem] bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E61F93] transition-all font-['Switzer'] text-[20px]"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 font-semibold mb-2 ml-1 text-[20px]">State</label>
                  <input
                    type="text"
                    placeholder="Enter your state"
                    value={formData.state}
                    onChange={handleStateChange}
                    required
                    className="w-full px-5 py-4 rounded-[1rem] bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E61F93] transition-all font-['Switzer'] text-[20px]"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 font-semibold mb-2 ml-1 text-[20px]">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    required
                    maxLength={10}
                    className="w-full px-5 py-4 rounded-[1rem] bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E61F93] transition-all font-['Switzer'] text-[20px]"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 font-semibold mb-2 ml-1 text-[20px]">Message</label>
                  <textarea
                    placeholder="Message goes here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-5 py-4 rounded-[1rem] bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E61F93] transition-all resize-none font-['Switzer'] text-[20px]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 md:mt-4 py-4 font-bold text-white text-lg hover:scale-[1.02] active:scale-[0.98] transition-all font-['Switzer'] text-[20px]"
                  style={{
                    borderRadius: "45px",
                    background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                    boxShadow: "0 10px 16.2px 0 rgba(0, 0, 0, 0.29), 0 -3px 13.8px 0 rgba(232, 232, 232, 0.76) inset, 0 4px 13.8px 0 rgba(232, 232, 232, 0.76) inset"
                  }}
                >
                  {isLoading ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </div>

          {/* Right Info Section */}
          <div className="lg:flex-[3] p-6 md:p-8 rounded-[1rem] border-2 border-dashed border-gray-300 bg-white flex flex-col relative h-auto">
            <div className="w-[88px] h-[88px] rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-sm mb-4">
              <img src="/logo.png" alt="CodeWrote" className="w-[67px] h-auto object-contain" />
            </div>

            <div className="flex-1 flex flex-col justify-end w-full mt-8 md:mt-auto mb-0">
              <div className="w-full flex justify-end mb-4">
                <div className="bg-[#f5f5f5] text-[#1a1a1a] text-base font-medium px-4 py-[6px] rounded-full">
                  Approximately 30-min.
                </div>
              </div>

              <div className="w-full text-right flex flex-col items-end mb-8">
                <h3 className="text-[24px] md:text-[26px] text-[#1a1a1a] tracking-tight mb-1 font-['Switzer']">Prefer email or phone?</h3>
                <p className="text-[#a1a1aa] text-[18px] md:text-[24px] leading-[1.3] font-medium text-right mt-1 font-['Switzer']">
                  Let’s connect. Reach out and we’ll help bring your ideas to life.
                </p>
              </div>

              <a
                href="mailto:hello@codewrote.com"
                className="w-full py-4 font-bold text-white text-lg md:text-[20px] hover:scale-[1.02] active:scale-[0.98] transition-all mb-4 flex justify-center items-center"
                style={{
                  borderRadius: "45px",
                  background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                  boxShadow: "0 10px 24px 0 rgba(230, 31, 147, 0.4), 0 -3px 13.8px 0 rgba(232, 232, 232, 0.76) inset, 0 4px 13.8px 0 rgba(232, 232, 232, 0.76) inset"
                }}
              >
                Email Us
              </a>

              <p className="text-[#a1a1aa] text-[18px] md:text-[18px] font-medium text-center w-full">
                or call us at <span className="font-semibold text-[#1a1a1a]">+91 xxxxx xxxxx</span>
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="order-1 md:order-2 mt-0 mb-8 md:mt-8 md:mb-0 flex justify-end text-right px-2 md:px-6">
          <div>
            <h3 className="text-xl md:text-[22px] font-medium text-[#333] tracking-tight leading-snug">
              Design and development turn ideas<br className="block md:hidden" /> into impact<br className="hidden md:block" /> <span className="text-[#9ca3af]">let's build yours<br className="block md:hidden" /> together.</span>
            </h3>
            <p className="mt-4 font-bold text-black text-lg md:text-xl">
              -Codewrote
            </p>
          </div>
        </div>

        {/* FAQ & CTA Section */}
        <div className="order-3 mt-32 w-full pb-16">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#1a1a1a] tracking-tight mb-4 leading-[1.1]">
              Practical Info & <span className="text-[#a1a1aa] font-medium font-sans">Clarifications.</span>
            </h2>
            <p className="text-[#1a1a1a] text-lg md:text-[20px] font-medium tracking-tight">
              No fluff. Just straight answers.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Column - Accordions */}
            <div className="lg:w-[65%] flex flex-col gap-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className="bg-[#f4f4f4] rounded-[1.5rem] px-6 py-5 md:px-8 md:py-6 flex flex-col cursor-pointer transition-colors"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className="text-lg md:text-[22px] text-[#1a1a1a] font-medium tracking-tight pr-4">
                        {faq.question}
                      </span>
                      <div
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white shrink-0 shadow-[0_8px_16px_rgba(230,31,147,0.35)] transition-transform duration-300"
                        style={{
                          background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                        }}
                      >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 5v14m0 0l-5-5m5 5l5-5"></path>
                        </svg>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-[#888888] text-base md:text-[17px] leading-relaxed pr-8 md:pr-12">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Column - CTA Card */}
            <div className="lg:w-[35%] w-full lg:h-fit lg:self-center bg-[#f4f4f4] rounded-[2rem] p-8 md:p-10 flex flex-col items-center justify-center text-center">
              <h4 className="text-xl md:text-[22px] text-[#9ca3af] font-medium tracking-tight mb-1">Need more clarity?</h4>
              <h3 className="text-2xl md:text-[28px] font-bold text-[#1a1a1a] mb-8 tracking-tight">Let's talk.</h3>

              <button
                className="w-full mt-auto py-4 md:py-5 font-bold text-white text-lg md:text-[20px] hover:scale-[1.02] active:scale-[0.98] transition-all"
                style={{
                  borderRadius: "45px",
                  background: "linear-gradient(88deg, #E61F93 4.93%, #801152 94.64%)",
                  boxShadow: "0 10px 24px 0 rgba(230, 31, 147, 0.4), 0 -3px 13.8px 0 rgba(232, 232, 232, 0.76) inset, 0 4px 13.8px 0 rgba(232, 232, 232, 0.76) inset"
                }}
              >
                Schedule a call
              </button>

              <p className="mt-8 text-[#9ca3af] text-sm md:text-base font-medium">
                or email us at<br />
                <a href="mailto:hello@codewrote.com" className="text-[#1a1a1a] hover:text-[#E61F93] transition-colors mt-1 inline-block">hello@codewrote.com</a>
              </p>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
