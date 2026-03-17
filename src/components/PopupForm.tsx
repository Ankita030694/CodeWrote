"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    // Show the popup after a short delay when the user lands on a new page
    const timer = setTimeout(() => {
      setIsOpen(true);
      setIsSubmitted(false);
      setIsLoading(false);
      setFormData({ name: "", state: "", email: "", phone: "", message: "" });
    }, 2000); // 2 seconds delay

    return () => {
      clearTimeout(timer);
      setIsOpen(false);
    };
  }, [pathname]);

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
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white/70 backdrop-blur-[15px] rounded-[32px] border-2 border-[#D1D1D1] shadow-2xl overflow-hidden max-h-[75vh] md:max-h-[90vh] flex flex-col"
          >
            {/* Design Element: Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E61F93] to-[#8B5CF6]" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-2 rounded-full hover:bg-black/5 transition-all z-10"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black font-['Switzer']">Let's Connect</h2>
                    <p className="text-gray-700 mb-8 font-medium leading-relaxed">
                      Transform your ideas into reality. Drop us a message and our team will reach out within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-black uppercase tracking-wider text-black ml-1">Name</label>
                          <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={handleNameChange}
                            placeholder="Your Name"
                            className="w-full px-5 py-4 rounded-2xl border-2 border-[#D1D1D1] bg-white/40 focus:border-[#E61F93] focus:bg-white focus:outline-none transition-all duration-300 font-medium placeholder:text-gray-500"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-black uppercase tracking-wider text-black ml-1">State</label>
                          <input
                            required
                            type="text"
                            value={formData.state}
                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                            placeholder="Your State"
                            className="w-full px-5 py-4 rounded-2xl border-2 border-[#D1D1D1] bg-white/40 focus:border-[#E61F93] focus:bg-white focus:outline-none transition-all duration-300 font-medium placeholder:text-gray-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-black uppercase tracking-wider text-black ml-1">Email</label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Your Email"
                            className="w-full px-5 py-4 rounded-2xl border-2 border-[#D1D1D1] bg-white/40 focus:border-[#E61F93] focus:bg-white focus:outline-none transition-all duration-300 font-medium placeholder:text-gray-500"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-black uppercase tracking-wider text-black ml-1">Phone</label>
                          <input
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="Country code, Phone number"
                            className="w-full px-5 py-4 rounded-2xl border-2 border-[#D1D1D1] bg-white/40 focus:border-[#E61F93] focus:bg-white focus:outline-none transition-all duration-300 font-medium placeholder:text-gray-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase tracking-wider text-black ml-1">Message</label>
                        <textarea
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="What can we help you build?"
                          rows={3}
                          className="w-full px-5 py-4 rounded-2xl border-2 border-[#D1D1D1] bg-white/40 focus:border-[#E61F93] focus:bg-white focus:outline-none transition-all duration-300 font-medium resize-none placeholder:text-gray-500"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-5 mt-6 rounded-2xl font-bold text-lg shadow-lg transition-all transform flex items-center justify-center gap-2 group ${
                          isLoading 
                          ? "bg-gray-400 cursor-not-allowed" 
                          : "bg-black text-white hover:bg-[#E61F93] hover:shadow-[#E61F93]/20 hover:scale-[1.01] active:scale-[0.99]"
                        }`}
                      >
                        {isLoading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            Send Message
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
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-black font-['Switzer']">Message Sent!</h2>
                    <p className="text-gray-500 font-medium max-w-sm mx-auto">
                      Thank you for reaching out. We've received your inquiry and will be in touch shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
