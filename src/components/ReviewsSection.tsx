"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface Review {
  name: string;
  role: string;
  service: string;
  content: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Lavanya Dhawan",
    role: "Founder LD Counsel",
    service: "Custom Software Development",
    content: "The custom CRM CodeWrote built for us is a game-changer. What I love most is that they didn't lock us into a proprietary system. The dashboard is so intuitive that our team handles all updates internally without needing to call them for every small change.",
    rating: 5
  },
  {
    name: "Aakanksha Chugh",
    role: "Founder Jivo Solutions",
    service: "Framer Development",
    content: "Our new marketing site on Framer is stunning and incredibly fast. The best part? CodeWrote set it up so perfectly that I can now change text, swap images, and update sections myself. Total independence and zero maintenance stress!",
    rating: 5
  },
  {
    name: "Sandeep Dhawan",
    role: "Founder and CEO at Milsipp",
    service: "WordPress Development",
    content: "I've had WordPress sites before that were impossible to manage. CodeWrote simplified everything. They built a custom block system that makes page building as easy as drag-and-drop. I barely have to reach out for support anymore.",
    rating: 5
  },
  {
    name: "Ishan Srivastava",
    role: "Co-Founder Globaton",
    service: "Shopify Development",
    content: "Our Shopify store conversion rate skyrocketed. CodeWrote optimized every pixel. I was worried about managing complex product variations, but they automated the hard parts and gave us a clean interface. We're fully in control of our store now.",
    rating: 5
  }
];

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FBBF24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

export default function ReviewsSection() {
  // Review Schema Markup
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "CodeWrote",
    "image": "https://codewrote.com/assets/Property%201=Frame%20427318371.svg",
    "@id": "https://codewrote.com",
    "url": "https://codewrote.com",
    "telephone": "+91-0000000000", // Placeholder or actual if found
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 57",
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "postalCode": "122003",
      "addressCountry": "IN"
    },
    "provider": {
      "@type": "Organization",
      "name": "CodeWrote",
      "url": "https://codewrote.com"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": reviews.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map((review) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5"
      },
      "reviewBody": review.content,
      "datePublished": "2024-03-16",
      "publisher": {
        "@type": "Organization",
        "name": "CodeWrote"
      }
    }))
  };

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden" id="reviews">
      {/* Footer-style Gradient Background */}
      <div className="absolute top-0 left-[-10%] w-[120%] h-[120%] pointer-events-none z-0 overflow-hidden opacity-60">
        <Image
          src="/assets/Footer Gradient.png"
          alt="Section Gradient"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-full mx-auto lg:px-[140px] px-6 relative z-10">
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />

        <div className="flex flex-col items-center text-center mb-20">
      
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[30px] md:text-[64px] leading-[1.1] md:leading-[1.05] font-semibold text-[#0F0F0F] font-['Switzer'] uppercase max-w-[900px]"
          >
            Empowering <span className="text-[#A1A1A1]">Leaders</span> to Build <span className="text-[#E61F93]">Independently</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-[#666666] font-['Switzer'] max-w-[650px] text-[16px] lg:text-[20px] leading-relaxed"
          >
            Our core USP: We build platforms that empower you to stay in control, minimize dependency, and grow your business without technical friction.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 mx-2">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group h-full"
            >
              {/* Glass Card */}
              <div className="h-full bg-white/[0.01] backdrop-blur-[5px] p-8 rounded-[40px] border-2 border-[#D1D1D1] shadow-sm flex flex-col justify-between transition-all duration-500 group-hover:border-[#E61F93]/30 group-hover:bg-white/[0.05]">
                
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute -top-6 -left-4 text-[60px] text-[#E61F93]/10 font-serif leading-none select-none">“</span>
                    <p className="text-[17px] leading-relaxed text-[#1F1F1F] font-['Switzer'] font-medium mb-8 relative z-10">
                      {review.content}
                    </p>
                  </div>
</div>
                
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100/50">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E61F93] to-[#FF4FB1] p-[2px]">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[#E61F93] font-bold text-xl font-['Switzer']">
                        {review.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-[16px] text-[#0F0F0F] font-['Switzer'] group-hover:text-[#E61F93] transition-colors">{review.name}</h4>
                    <div className="flex flex-col">
                      <p className="text-[12px] text-[#666666] font-medium font-['Switzer']">{review.role}</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
