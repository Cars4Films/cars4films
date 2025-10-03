import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AcercaSection from "@/components/AcercaSection";
import FlotaSection from "@/components/FlotaSection";
import TecnicosSection from "@/components/TecnicosSection";
import CarcareSection from "@/components/CarcareSection";
import DriverSection from "@/components/DriverSection";
import TestimoniosSection from "@/components/TestimoniosSection";
import ProyectosSection from "@/components/ProyectosSection";
import ContactoSection from "@/components/ContactoSection";
import ImageRotator from "@/components/ImageRotator";

export const HomePage = () => {
  return (
    <div lang="es" className="scroll-smooth">
      <div className="antialiased">
        <Navbar />
        <HeroSection />
        <AcercaSection />
        <FlotaSection />
        <TecnicosSection />
        <CarcareSection />
        <DriverSection />
        <TestimoniosSection />
        <ProyectosSection />
        <ContactoSection />
        <ImageRotator />
      </div>
    </div>
  );
};
