import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PracticeAreasSection from "@/components/PracticeAreasSection";
import StructureSection from "@/components/StructureSection";
import LawyersSection from "@/components/LawyersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <PracticeAreasSection />
      <StructureSection />
      <LawyersSection />
      <TestimonialsSection />
      <ContactSection />
      <LocationSection />
      <Footer />
    </main>
  );
};

export default Index;
