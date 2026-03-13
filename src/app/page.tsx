import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandSlider from "@/components/BrandSlider";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProjectsSection from "@/components/ProjectsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <BrandSlider />
        <StatsSection />
        <ServicesSection />
        <WhyChooseSection />
        <ProjectsSection />
        <CTASection />
      </main>
    </div>
  );
}
