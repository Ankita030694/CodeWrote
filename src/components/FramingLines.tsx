"use client";

import { usePathname } from "next/navigation";

export default function FramingLines() {
  const pathname = usePathname();
  
  // Hide framing lines on blog pages and specific content pages
  const forbiddenPaths = [
    "/what-are-the-top-companies-for-custom-software-development-in-the-us",
    "/how-do-i-choose-the-best-custom-software-developer-for-my-business",
    "/what-services-are-typically-included-in-custom-software-development",
    "/what-is-the-difference-between-custom-software-development-and-off-the-shelf-software",
    "/lead-generating-website",
    "/high-ranking-website",
    "/custom-web-development",
    "/search-engine-optimization",
    "/what-are-the-most-user-friendly-website-builders-for-small-businesses",
    "/best-platforms-for-developing-an-e-commerce-website-in-india",
    "/top-website-builders-for-small-businesses-with-hosting-services",
    "/compare-different-hosting-options-for-high-traffic-e-commerce-site",
    "/how-to-choose-a-reliable-web-development-company-near-me",
    "/how-much-does-it-cost-to-develop-a-custom-e-commerce-website-in-india",
    "/affordable-website-development-packages-for-startups",
    "/where-can-i-find-a-directory-of-web-development-agencies-in-india",
    "/compare-website-development-frameworks-for-responsive-design",
    "/what-are-the-best-content-management-systems-for-a-large-corporate-blog",
    "/freelance-web-developers-with-expertise-in-custom-cms-development",
    "/steps-to-secure-a-website-from-common-cyber-threats",
    "/which-website-hosting-providers-offer-the-fastest-loading-speeds-in-india",
    "/which-tools-are-essential-for-frontend-web-developers",
    "/step-by-step-guide-to-launching-a-business-website-using-managed-services",
    "/get-a-free-consultation-for-a-new-business-website-project",
    "/best-tools-for-creating-multilingual-websites-for-indian-audiences",
    "/what-are-the-benifits-of-using-a-headless-cms-for-content-delivery",
    "/how-to-integrate-payment-gateways-into-an-online-store-website",
    "/cost-of-building-a-professional-portfolio-website-with-premium-features",
    "/where-to-find-reviews-of-web-development-agencies-specializing-in-mobile-apps",
    "/how-to-choose-a-domain-name-registrar-and-hosting-packages",
    "/official-website-for-a-free-online-portfolio-builder",
    "/best-seo-friendly-websites-templates-offered-by-popular-builders",
    "/what-are-the-legal-requirement-for-an-e-commerce-website-in-india",
    "/compare-different-database-technologies-for-web-applications",
    "/how-to-get-a-custom-domain-andssl-certificate-for-a-new-website",
    "/recomended-website-analytics-tools-for-monitoring-website-behaviour",
    "/what-services-do-full-stack-web-development-companies-offer",
    "/which-web-development-services-offer-ongoing-maintenance-plans",
    "/request-a-demo-of-an-advanced-e-commerce-platform",
    "/how-to-create-an-online-booking-system-for-service-based-websites",
    "/what-is-the-role-of-seo-in-website-developement",
    "/evaluate-options-for-website-maintenance-and-support-plans",
    "/tools-for-collborative-web-design-prototyping",
    "/what-are-the-leading-drag-and-drop-website-builders-for-beginners",
    "/how-to-integrate-third-party-apis-into-an-web-application",
    "/how-to-setup-email-hosting-linked-to-a-custom-website-domain",
    "/top-cloud-platforms-for-scalable-web-app-development-in-india",
    "/get-a-quote-for-ongoing-website-security-monitoring",
    "/shopify-website-development",
    "/wordpress-website-development",
    "/ecommerce-website-development",
    "/corporate-website-development",
    "/landing-page-development-services",
    "/website-redesign-services",
    "/website-maintenance-and-support",
    "/seo-friendly-website-development",
    "/fast-loading-website-development",
    "/cms-website-development",
    "/react-website-development",
    "/hire-web-developer",
    "/best-web-development-company",
    "/high-ranking-website-in-haryana",
    "/high-ranking-website-in-uttar-pradesh",
    "/high-ranking-website-in-madhya-pradesh",
    "/high-ranking-website-in-himachal-pradesh",
    "/high-ranking-website-in-maharashtra",
    "/high-ranking-website-in-delhi",
    "/high-ranking-website-in-gurgaon",
    "/high-ranking-website-in-noida",
    "/high-ranking-website-in-bengaluru",
    "/high-ranking-website-in-hyderabad",
    "/high-ranking-website-in-chennai",
    "/high-ranking-website-in-indore",
    "/high-ranking-website-in-chandigarh",
    "/high-ranking-website-in-faridabad",
    "/high-ranking-website-in-punjab",
    "/high-ranking-website-in-karnataka"
  ];

  if (pathname.startsWith("/blog") || forbiddenPaths.includes(pathname)) {
    return null;
  }

  return (
    <>
      <div className="fixed left-[20px] lg:left-[100px] top-0 bottom-0 w-[1px] lg:w-[2px] bg-[#D1D1D1] z-50 pointer-events-none" />
      <div className="fixed right-[20px] lg:right-[100px] top-0 bottom-0 w-[1px] lg:w-[2px] bg-[#D1D1D1] z-50 pointer-events-none" />
    </>
  );
}
