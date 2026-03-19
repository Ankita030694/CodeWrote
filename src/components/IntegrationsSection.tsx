"use client";

import React from "react";

const logos = [
  "/assets/integrations/Clip.svg",
  "/assets/integrations/Frame 427318546.svg",
  "/assets/integrations/Group 222.svg",
  "/assets/integrations/Group 223.svg",
  "/assets/integrations/Group 240.svg",
  "/assets/integrations/Group copy.svg",
  "/assets/integrations/Group-1 copy.svg",
  "/assets/integrations/Group-1.svg",
  "/assets/integrations/Group.svg",
  "/assets/integrations/Mask group.svg",
  "/assets/integrations/Vector-1.svg",
  "/assets/integrations/Vector-2.svg",
  "/assets/integrations/Vector.svg",
  "/assets/integrations/github.svg",
  "/assets/integrations/google-calendar 1.svg",
  "/assets/integrations/sheets 1.svg",
];

const HexagonSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 161 178" fill="none" className="absolute inset-0 w-full h-full">
    <g filter="url(#filter0_d_347_694)">
      <path d="M72.8823 9.10961C77.5233 6.43012 83.2413 6.43012 87.8823 9.10961L142.164 40.4494C146.805 43.1289 149.664 48.0808 149.664 53.4397V116.119C149.664 121.478 146.805 126.43 142.164 129.11L87.8823 160.449C83.2413 163.129 77.5233 163.129 72.8823 160.449L18.6003 129.11C13.9593 126.43 11.1003 121.478 11.1003 116.119V53.4397C11.1003 48.0808 13.9593 43.1289 18.6003 40.4494L72.8823 9.10961Z" fill="#FFEDF8" fillOpacity="0.1" shapeRendering="crispEdges"/>
    </g>
    <defs>
      <filter id="filter0_d_347_694" x="9.72748e-05" y="-1.90735e-06" width="160.764" height="177.559" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="5.55"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0.22 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_347_694"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_347_694" result="shape"/>
      </filter>
    </defs>
  </svg>
);

const HexagonTile = ({ src, hasLogo, isHiddenMobile }: { src?: string | null; hasLogo?: boolean; isHiddenMobile?: boolean }) => {
  return (
    <div className={`relative group w-[74px] h-[80px] md:w-[161px] md:h-[178px] flex-shrink-0 items-center justify-center transition-transform duration-300 hover:-translate-y-2 ${isHiddenMobile ? 'hidden md:flex' : 'flex'}`}>
      <HexagonSvg />
      {hasLogo && src && (
        <img src={encodeURI(src.replace('#', '%23'))} alt="Integration Logo" className="w-[40px] h-[40px] md:w-16 md:h-16 object-contain relative z-10 filter drop-shadow-sm" />
      )}
    </div>
  );
};

export default function IntegrationsSection() {
  const rowsConfig = [
    { total: 8, logoIndices: [2, 3, 4, 5] },
    { total: 9, logoIndices: [2, 3, 4, 5, 6] },
    { total: 8, logoIndices: [2, 3, 4, 5] },
    { total: 9, logoIndices: [3, 4, 5] },
  ];

  let currentLogoIndex = 0;

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden flex flex-col items-center">
      <div className="max-w-[1440px] mx-auto px-1 md:px-6 relative z-10 w-full flex flex-col items-center">
        
        {/* Radial Magenta Gradient Background */}
        <div 
          className="absolute top-[40%] md:top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[900px] h-[350px] md:h-[900px] rounded-full pointer-events-none -z-10 blur-[80px] md:blur-[100px] opacity-60 md:opacity-50"
          style={{
            background: "radial-gradient(circle, #E61F93 0%, transparent 65%)"
          }}
        />

        {/* Honeycomb Grid Container */}
        <div className="w-full overflow-x-auto md:overflow-visible scrollbar-hide pb-8 md:pb-0 mb-10 md:mb-24 mt-8 flex md:block">
          <div className="flex flex-col items-center w-max md:w-full mx-auto px-4 md:px-0">
            {rowsConfig.map((row, rIdx) => (
              <div 
                key={rIdx} 
                className={`flex justify-center gap-[4px] md:gap-[16px] ${
                  rIdx > 0 ? "-mt-[20px] md:-mt-[50px]" : ""
                }`}
              >
                {Array.from({ length: row.total }).map((_, cIdx) => {
                  const hasLogo = row.logoIndices.includes(cIdx);
                  const isHiddenMobile = cIdx < 2 || cIdx > row.total - 3;
                  
                  let src = null;
                  if (hasLogo) {
                    src = logos[currentLogoIndex % logos.length];
                    currentLogoIndex++;
                  }

                  return (
                    <HexagonTile 
                      key={`${rIdx}-${cIdx}`} 
                      src={src} 
                      hasLogo={hasLogo} 
                      isHiddenMobile={isHiddenMobile}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Text Details */}
        <div className="text-center flex flex-col items-center relative z-20">
          <h2 className="flex flex-col gap-0 uppercase text-center">
            <span className="text-[28px] md:text-[56px] leading-[1.1] md:leading-[56px] font-bold text-[#A1A1A1] font-['Switzer']">
              INTEGRATIONS THAT
            </span>
            <span className="text-[28px] md:text-[56px] leading-[1.1] md:leading-[56px] font-bold text-[#0F0F0F] font-['Switzer']">
              SCALE WITH YOU
            </span>
          </h2>
          <p className="max-w-lg text-sm md:text-lg text-gray-500 font-medium font-['Switzer'] mt-4">
            Seamlessly connecting platforms, automating processes, and building systems that grow with your business.
          </p>
        </div>
      </div>
    </section>
  );
}
