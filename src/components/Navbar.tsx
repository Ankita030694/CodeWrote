"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

function AnimatedLogo() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((prev) => (prev + 1) % 5);
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-shrink-0">
      <Link href="/">
        <svg 
          width="117" 
          height="69" 
          viewBox="0 0 140 70" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 lg:h-14 w-auto overflow-visible"
        >
          {/* Static Text - "CODE WROTE" */}
          <g fill="black">
            <path d="M29.5362 27.4683C30.0956 27.3847 30.6292 27.2169 31.1327 26.9657C31.6448 26.7132 32.0163 26.4906 32.2457 26.2891L32.5858 25.9743L34.6425 28.9046C34.5874 28.948 34.522 29.0106 34.4419 29.0929C34.3576 29.1759 34.1617 29.3372 33.8445 29.5693C33.5346 29.7916 33.2049 29.9993 32.8468 30.1935C32.4875 30.3792 32.005 30.5657 31.4009 30.7616C30.7967 30.9574 30.1676 31.1042 29.5135 31.202C27.9989 31.4283 26.5022 31.2737 25.0263 30.7289C23.5596 30.187 22.31 29.3312 21.281 28.1565C20.2594 26.9719 19.6354 25.6223 19.409 24.1077C19.2379 22.9631 19.3149 21.8299 19.6406 20.7123C19.9735 19.5848 20.4932 18.5877 21.1988 17.7168C21.8989 16.838 22.7555 16.0941 23.7686 15.4852C24.7775 14.8769 25.8542 14.4873 26.9901 14.3175C28.0314 14.1619 29.0146 14.1469 29.9383 14.264C30.8693 14.3712 31.5434 14.5256 31.9593 14.7186L32.5667 15.0149L31.4565 18.4185C31.3503 18.3552 31.1978 18.2768 30.9997 18.1876C30.798 18.1034 30.4011 18.0088 29.8141 17.9073C29.2363 17.8089 28.6628 17.7979 28.1034 17.8815C27.2084 18.0152 26.4263 18.2861 25.7607 18.6891C25.0895 19.0841 24.5781 19.5477 24.2265 20.0797C23.8842 20.6147 23.6417 21.1701 23.5088 21.753C23.3846 22.3346 23.365 22.9094 23.4485 23.4688C23.6338 24.708 24.2564 25.7543 25.3245 26.602C26.3999 27.4399 27.8021 27.7274 29.5362 27.4683Z"/>
            <path d="M33.2933 21.9971C32.9402 19.6348 33.4422 17.5187 34.8077 15.6474C36.1825 13.7791 37.9966 12.6722 40.2599 12.3339C42.5405 11.9931 44.5989 12.5213 46.4255 13.9111C48.2593 15.2911 49.358 17.168 49.713 19.5432C50.0699 21.9313 49.5828 24.0584 48.2553 25.9196C46.9352 27.7709 45.1112 28.8705 42.7833 29.2184C40.3952 29.5753 38.3092 29.0689 36.5197 27.6911C34.7288 26.3047 33.6534 24.4067 33.2933 21.9971ZM37.3035 21.3978C37.4309 22.2497 37.6763 23.0093 38.0492 23.6794C38.4165 24.3415 38.9663 24.8708 39.6937 25.2636C40.4283 25.6465 41.2819 25.7653 42.2457 25.6212C43.6313 25.4141 44.6068 24.7889 45.1673 23.7417C45.7222 22.6866 45.9034 21.485 45.7027 20.1425C45.504 18.8129 44.9722 17.7267 44.1065 16.8795C43.2482 16.0224 42.1435 15.6948 40.7924 15.8967C39.4499 16.0973 38.4806 16.7349 37.8932 17.8081C37.3002 18.8733 37.1048 20.0682 37.3035 21.3978Z"/>
            <path d="M49.156 11.3047L53.872 10.5999C56.1439 10.2603 58.1959 10.7455 60.0367 12.054C61.8732 13.3632 62.9678 15.1835 63.3157 17.5114C63.6656 19.8521 63.1516 21.9173 61.7781 23.7062C60.4133 25.4938 58.5884 26.5583 56.3079 26.8992L51.592 27.604L49.156 11.3047ZM54.8132 23.7265L55.3812 23.6417C56.7323 23.4397 57.7749 22.822 58.4998 21.7855C59.232 20.7391 59.5028 19.5197 59.308 18.1279C59.101 16.7424 58.4897 15.6548 57.4829 14.8639C56.4854 14.076 55.3021 13.7822 53.9381 13.986L53.3701 14.0709L54.8132 23.7265Z"/>
            <path d="M72.0781 7.87829L72.5643 11.1313L66.9534 11.9698L67.4395 15.2228L72.8095 14.4202L73.2957 17.6732L67.9257 18.4758L68.417 21.7632L74.0279 20.9246L74.5141 24.1776L65.1855 25.5718L62.7495 9.27246L72.0781 7.87829Z"/>
            <path d="M19.5828 51.8604L15.5982 43.0948L14.3505 52.6423L10.237 53.2571L3.15393 37.6523L7.28469 37.035L11.7449 47.8058L11.831 47.7929L13.1366 36.1604L15.9421 35.7411L20.5744 46.4862L20.6605 46.4733L21.7768 34.8691L25.8903 34.2544L23.6792 51.2482L19.5828 51.8604Z"/>
            <path d="M25.7947 34.2686L31.6294 33.3966C33.187 33.1638 34.5237 33.3951 35.6381 34.0819C36.7489 34.7737 37.4218 35.8917 37.6533 37.4407C37.8334 38.6455 37.6833 39.7017 37.211 40.6037C36.7332 41.4977 36.0048 42.1872 35.0217 42.6729L41.6384 48.564L36.9224 49.2688L30.9863 43.5751L31.9483 50.0122L28.2306 50.5678L25.7947 34.2686ZM30.5927 40.9418L31.023 40.8775C31.3672 40.826 31.6506 40.7793 31.881 40.7316C32.1207 40.687 32.3804 40.5998 32.6694 40.4731C32.9676 40.3493 33.1961 40.2008 33.3606 40.0354C33.5194 39.8621 33.6422 39.6238 33.7301 39.3291C33.8267 39.0332 33.846 38.6916 33.7875 38.3C33.7277 37.8998 33.608 37.5702 33.4292 37.3154C33.2576 37.0507 33.0706 36.8587 32.8693 36.748C32.6624 36.6294 32.3998 36.5499 32.0777 36.5144C31.765 36.482 31.4911 36.4745 31.2482 36.4976C31.0146 36.5237 30.7293 36.5576 30.3851 36.609L29.9548 36.6733L30.5927 40.9418Z"/>
            <path d="M39.4288 40.5542C39.0757 38.192 39.5777 36.0758 40.9432 34.2045C42.318 32.3362 44.1321 31.2293 46.3954 30.8911C48.676 30.5502 50.7344 31.0784 52.561 32.4682C54.3948 33.8482 55.4935 35.7251 55.8485 38.1003C56.2054 40.4884 55.7183 42.6155 54.3908 44.4767C53.0707 46.328 51.2467 47.4276 48.9188 47.7755C46.5307 48.1324 44.4447 47.626 42.6552 46.2482C40.8643 44.8618 39.7889 42.9639 39.4288 40.5542ZM43.439 39.9549C43.5664 40.8069 43.8118 41.5664 44.1847 42.2365C44.552 42.8986 45.1018 43.4279 45.8292 43.8207C46.5638 44.2036 47.4174 44.3224 48.3812 44.1783C49.7668 43.9713 50.7423 43.346 51.3028 42.2988C51.8577 41.2437 52.0389 40.0421 51.8382 38.6996C51.6395 37.37 51.1077 36.2838 50.242 35.4366C49.3837 34.5795 48.279 34.2519 46.9279 34.4538C45.5854 34.6545 44.6161 35.292 44.0287 36.3652C43.4357 37.4304 43.2403 38.6253 43.439 39.9549Z"/>
            <path d="M54.7457 33.2676L54.2595 30.0146L65.7224 28.3015L66.2085 31.5545L62.336 32.1332L64.2857 45.1796L60.5681 45.7352L58.6183 32.6889L54.7457 33.2676Z"/>
            <path d="M75.4082 26.8539L75.8944 30.1068L70.2834 30.9454L70.7696 34.1984L76.1396 33.3958L76.6257 36.6488L71.2558 37.4514L71.7471 40.7388L77.358 39.9002L77.8442 43.1532L68.5155 44.5473L66.0796 28.248L75.4082 26.8539Z"/>
          </g>

          {/* Animated "M" Symbol Group */}
          <g transform="translate(80, 5)">
            {/* The base strokes of the logo icon */}
            <path d="M4.1272 42.6914L-1.36394 5.94916" stroke="#E61F93" strokeWidth="1.79" />
            <path d="M7.9142 38.5389L31.539 6.88537" stroke="#E61F93" strokeWidth="1.79" />
            <path d="M35.268 34.4517L32.993 15.5505L24.047 25.3028" stroke="#E61F93" strokeWidth="1.79" fill="none" />
            <path d="M6.4708 28.879L4.4435 11.5465L15.2493 19.4773" stroke="#E61F93" strokeWidth="1.79" fill="none" />

            {/* Dynamic Moving Parts */}
            <AnimatePresence mode="wait">
              {frame === 0 && (
                <motion.path
                  key="f0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  d="M5.2125 57.3586C6.0655 56.4527 7.5883 56.9709 7.7116 58.2091L7.8373 59.4717C7.9323 60.4261 6.7689 60.9638 6.103 60.2734C5.8761 60.0382 5.5493 59.9272 5.226 59.9757C4.2778 60.1181 3.6835 58.9828 4.3408 58.2846L5.2125 57.3586Z"
                  fill="#E61F93"
                  transform="translate(-10, -5)"
                />
              )}
              {frame === 1 && (
                <motion.path
                  key="f1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  d="M17.5228 57.6499C18.699 56.4005 20.799 57.1152 20.969 58.8228L23.768 86.9438L12.6218 80.5297C12.1724 80.0638 11.5254 79.8442 10.8853 79.9403L-0.1111 81.5911C-1.9888 81.8729 -3.1657 79.6248 -1.8642 78.2423L17.5228 57.6499Z"
                  fill="#E61F93"
                  transform="translate(-20, -10) scale(0.6)"
                />
              )}
              {frame === 2 && (
                <motion.path
                  key="f2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  d="M32.755 34.0012C32.41 32.3203 34.202 31.0134 35.697 31.8565L60.311 45.7412L48.653 51.1701C48.013 51.2697 47.461 51.6727 47.172 52.2516L42.197 62.1965C41.348 63.8947 38.832 63.5644 38.449 61.7045L32.755 34.0012Z"
                  fill="#E61F93"
                  transform="translate(-15, -10) scale(0.7)"
                />
              )}
            </AnimatePresence>
          </g>
        </svg>
      </Link>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full px-4 flex justify-center pointer-events-none">
      <div className="relative w-full max-w-[1200px] flex justify-center items-start pointer-events-auto">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* Normal Navbar (Desktop Pill & Mobile Compact) */
            <motion.div
              key="compact"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center justify-between md:justify-center gap-6 md:gap-10 lg:gap-20 
                         px-6 py-4 w-[92%] md:w-auto
                         rounded-[128px] border-2 border-[#D1D1D1] 
                         bg-white/[0.01] backdrop-blur-[5px] shadow-sm"
            >
              <AnimatedLogo />

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center gap-6 lg:gap-8">
                <Link href="/work" className="text-black text-sm lg:text-[20px] font-bold hover:opacity-70 transition-opacity whitespace-nowrap">
                  Our Work
                </Link>
                <Link href="/about" className="text-black text-sm lg:text-[20px] font-bold hover:opacity-70 transition-opacity whitespace-nowrap">
                  About Us
                </Link>
                <Link href="/services" className="text-black text-sm lg:text-[20px] font-bold hover:opacity-70 transition-opacity whitespace-nowrap">
                  Services
                </Link>
                <Link href="/blog" className="text-black text-sm lg:text-[20px] font-bold hover:opacity-70 transition-opacity whitespace-nowrap">
                  Blog
                </Link>
              </div>

              {/* Desktop Contact Button */}
              <div className="hidden md:block flex-shrink-0">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-2 lg:px-10 lg:py-3
                             rounded-full border-2 border-[#D1D1D1] bg-white 
                             text-black text-sm lg:text-lg font-bold shadow-sm hover:bg-gray-50 transition-colors whitespace-nowrap"
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Hamburger Menu Icon */}
              <button 
                onClick={() => setIsOpen(true)}
                className="md:hidden p-1 flex flex-col gap-1.5"
              >
                <div className="w-8 h-1 bg-black rounded-full" />
                <div className="w-8 h-1 bg-black rounded-full" />
                <div className="w-8 h-1 bg-black rounded-full" />
              </button>
            </motion.div>
          ) : (
            /* Expanded Mobile Menu */
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full bg-white/70 backdrop-blur-[15px] rounded-[32px] border-2 border-[#D1D1D1]/30 shadow-2xl p-8 md:hidden"
            >
              {/* Header inside menu */}
              <div className="flex items-center justify-between mb-12">
                <AnimatedLogo />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2"
                >
                  {/* Close Icon (X) */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Vertical Links List */}
              <div className="flex flex-col gap-8">
                <Link 
                  href="/" 
                  onClick={() => setIsOpen(false)}
                  className="text-[28px] font-bold text-[#0F0F0F] font-['Switzer']"
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  onClick={() => setIsOpen(false)}
                  className="text-[28px] font-bold text-[#0F0F0F] font-['Switzer']"
                >
                  About Us
                </Link>
                <Link 
                  href="/services" 
                  onClick={() => setIsOpen(false)}
                  className="text-[28px] font-bold text-[#0F0F0F] font-['Switzer']"
                >
                  Services
                </Link>
                <Link 
                  href="/blog" 
                  onClick={() => setIsOpen(false)}
                  className="text-[28px] font-bold text-[#0F0F0F] font-['Switzer']"
                >
                  Blog
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="text-[28px] font-bold text-[#E61F93] font-['Switzer']"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
