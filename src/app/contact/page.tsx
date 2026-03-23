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

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow alphabets and white spaces
    if (value === "" || /^[a-zA-Z\s]*$/.test(value)) {
      setFormData({ ...formData, name: value });
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
      
      <main className="flex-grow pt-[140px] pb-24 px-6 flex items-center justify-center">
        <div className="w-full max-w-[800px] mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-[56px] md:text-[84px] font-bold text-black leading-[0.95] tracking-[-0.04em] uppercase mb-4 font-['Switzer']">
              Reach <span className="text-[#E61F93] font-['Switzer']">us</span>
            </h1>
          </motion.div>

          {/* Centered Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#E61F93]/10 to-[#8B5CF6]/10 blur-3xl rounded-[48px] -z-10" />
            
            <div className="bg-white/80 backdrop-blur-xl border-2 border-[#D1D1D1] rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden text-left">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E61F93] to-[#8B5CF6]" />
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase tracking-wider text-black ml-1 font-['Switzer']">Full Name</label>
                          <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={handleNameChange}
                            placeholder="John Doe"
                            className="w-full px-6 py-4 rounded-2xl border-2 border-[#D1D1D1] bg-white/50 focus:border-[#E61F93] focus:bg-white focus:outline-none transition-all duration-300 font-bold placeholder:text-gray-400 font-['Switzer']"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase tracking-wider text-black ml-1 font-['Switzer']">Current State</label>
                          <input
                            required
                            type="text"
                            value={formData.state}
                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                            placeholder="e.g. Maharashtra"
                            className="w-full px-6 py-4 rounded-2xl border-2 border-[#D1D1D1] bg-white/50 focus:border-[#E61F93] focus:bg-white focus:outline-none transition-all duration-300 font-bold placeholder:text-gray-400 font-['Switzer']"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase tracking-wider text-black ml-1 font-['Switzer']">Email Address</label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            className="w-full px-6 py-4 rounded-2xl border-2 border-[#D1D1D1] bg-white/50 focus:border-[#E61F93] focus:bg-white focus:outline-none transition-all duration-300 font-bold placeholder:text-gray-400 font-['Switzer']"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase tracking-wider text-black ml-1 font-['Switzer']">Phone Number</label>
                          <input
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 00000 00000"
                            className="w-full px-6 py-4 rounded-2xl border-2 border-[#D1D1D1] bg-white/50 focus:border-[#E61F93] focus:bg-white focus:outline-none transition-all duration-300 font-bold placeholder:text-gray-400 font-['Switzer']"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-wider text-black ml-1 font-['Switzer']">Project Details</label>
                        <textarea
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your project or inquiry..."
                          rows={4}
                          className="w-full px-6 py-4 rounded-2xl border-2 border-[#D1D1D1] bg-white/50 focus:border-[#E61F93] focus:bg-white focus:outline-none transition-all duration-300 font-bold resize-none placeholder:text-gray-400 font-['Switzer']"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-5 mt-6 rounded-2xl font-bold text-sm uppercase tracking-[0.1em] shadow-xl transition-all transform flex items-center justify-center gap-2 group font-['Switzer'] ${
                          isLoading 
                          ? "bg-gray-400 cursor-not-allowed" 
                          : "bg-black text-white hover:bg-[#E61F93] hover:shadow-[#E61F93]/20 hover:scale-[1.01] active:scale-[0.99]"
                        }`}
                      >
                        {isLoading ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Dispatching...
                          </>
                        ) : (
                          <>
                            Transmit Inquiry
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600 shadow-inner">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h2 className="text-4xl font-black uppercase text-black mb-4 tracking-tight font-['Switzer']">Transmission Received</h2>
                    <p className="text-gray-500 font-bold max-w-sm mx-auto leading-relaxed font-['Switzer']">
                      Your vision is now in our hands. Our senior analysts will review your inquiry and reach out within the next 24 business hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-10 text-xs font-black uppercase tracking-widest text-black hover:text-[#E61F93] transition-colors flex items-center justify-center gap-2 mx-auto font-['Switzer']"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                      </svg>
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
