import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandSlider from "@/components/BrandSlider";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProjectsSection from "@/components/ProjectsSection";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import FAQPractical from "@/components/FAQPractical";
import Footer from "@/components/Footer";
import IntegrationsSection from "@/components/IntegrationsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <div className="h-[2px] bg-[#D1D1D1] w-full" />
        <BrandSlider />
        <div className="h-[2px] bg-[#D1D1D1] w-full" />
        <StatsSection />
        <div className="h-[2px] bg-[#D1D1D1] w-full" />
        <ServicesSection />
        <div className="h-[2px] bg-[#D1D1D1] w-full" />
        <WhyChooseSection />
        <div className="h-[2px] bg-[#D1D1D1] w-full" />
        <IntegrationsSection />
        <div className="h-[2px] bg-[#D1D1D1] w-full" />
        <ProjectsSection />
        <div className="h-[2px] bg-[#D1D1D1] w-full" />
        <ReviewsSection />
        <FAQPractical />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
