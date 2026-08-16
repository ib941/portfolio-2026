import { motion, useScroll } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import InteractiveBackground from './components/InteractiveBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Showreel from './components/Showreel';
import EngineeringSection from './components/EngineeringSection';
import FeaturedProject from './components/FeaturedProject';
import AboutSection from './components/AboutSection';
import CoreExpertise from './components/CoreExpertise';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  
  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Interactive Background */}
      <InteractiveBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <Showreel />
        <EngineeringSection />
        <FeaturedProject />
        <AboutSection />
        <CoreExpertise />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll Progress - Top of page */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}

export default App;
