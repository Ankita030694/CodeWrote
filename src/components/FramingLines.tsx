"use client";

import { usePathname } from "next/navigation";

export default function FramingLines() {
  const pathname = usePathname();
  
  // Hide framing lines on blog pages
  if (pathname.startsWith("/blog")) {
    return null;
  }

  return (
    <>
      <div className="fixed left-[20px] lg:left-[100px] top-0 bottom-0 w-[1px] lg:w-[2px] bg-[#D1D1D1] z-50 pointer-events-none" />
      <div className="fixed right-[20px] lg:right-[100px] top-0 bottom-0 w-[1px] lg:w-[2px] bg-[#D1D1D1] z-50 pointer-events-none" />
    </>
  );
}
