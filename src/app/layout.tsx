import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeWrote | Premier Website Development Agency & Professional Website Maker",
  description: "CodeWrote is a leading website development company specializing in high-converting websites and automated systems. Hire the best website developers for custom web solutions.",
  keywords: [
    "website development agency",
    "website maker",
    "website development company",
    "website developer",
    "web design services",
    "custom website solutions",
    "professional website designer",
    "AI-powered web development",
    "ecommerce website development",
    "responsive web design",
  ],
  authors: [{ name: "CodeWrote" }],
  creator: "CodeWrote",
  publisher: "CodeWrote",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "CodeWrote | Premier Website Development Agency",
    description: "High-converting websites and automated systems for your business growth. Expert website developers at your service.",
    url: "https://codewrote.com", // Replace with actual URL if known
    siteName: "CodeWrote",
    images: [
      {
        url: "/og-image.png", // Recommended size 1200x630
        width: 1200,
        height: 630,
        alt: "CodeWrote Website Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeWrote | Expert Website Developers",
    description: "Systems that run. Websites that sell. Elevate your business with CodeWrote.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-id", // User should replace this
  },
};

import PopupForm from "@/components/PopupForm";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "CodeWrote",
              "image": "https://codewrote.com/og-image.png",
              "@id": "https://codewrote.com",
              "url": "https://codewrote.com",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "",
                "postalCode": "",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 0,
                "longitude": 0
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://twitter.com/codewrote",
                "https://linkedin.com/company/codewrote"
              ],
              "description": "Premier Website Development Agency specializing in high-converting websites and automated systems.",
              "serviceType": ["Website Development", "Web Design", "Website Maker", "Automated Systems"]
            }),
          }}
        />
        {/* Vertical Framing Lines */}
        <div className="fixed left-[20px] lg:left-[100px] top-0 bottom-0 w-[1px] lg:w-[2px] bg-[#D1D1D1] z-50 pointer-events-none" />
        <div className="fixed right-[20px] lg:right-[100px] top-0 bottom-0 w-[1px] lg:w-[2px] bg-[#D1D1D1] z-50 pointer-events-none" />
        {children}
        <PopupForm />
      </body>
    </html>
  );
}
