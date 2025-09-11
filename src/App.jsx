import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AcercaSection from "./components/AcercaSection";
import FlotaSection from "./components/FlotaSection";
import TecnicosSection from "./components/TecnicosSection";
import CarcareSection from "./components/CarcareSection";
import DriverSection from "./components/DriverSection";
import TestimoniosSection from "./components/TestimoniosSection";
import ProyectosSection from "./components/ProyectosSection";
import ContactoSection from "./components/ContactoSection";
import Footer from "./components/Footer";
import ImageRotator from "./components/ImageRotator";
import "./App.css";

function App() {
  return (
    <>
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
          <Footer />
          <ImageRotator />
        </div>
      </div>
    </>
  );
}

export default App;
