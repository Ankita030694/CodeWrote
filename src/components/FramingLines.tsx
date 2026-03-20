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
    "/search-engine-optimization"
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
