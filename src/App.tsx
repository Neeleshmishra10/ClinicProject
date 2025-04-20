import React from 'react';
import './index.css';
import FeaturesSection from './components/FeaturesSection';
import ConsultStepsSection from './components/ConsultStepsSection';
import DiseaseGridSection from './components/DiseaseGridSection';
import DoctorsSection from './components/DoctorsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import BottomFooter from './components/BottomFooter';
import { Hero } from './components/Hero';
import { AboutSection } from './components/About';
import { Footer } from './components/Footer';
import logoDoctor from "../src/assets/doctorlogo.png"
import ContactFormModal from './components/ConsultStepsContactFormModal';

function Header({ contactOpen, setContactOpen } :any) {
  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logoDoctor} alt="WeClinic Logo" className="h-10 w-auto" />
          <span className="font-bold text-lg text-brand-orange tracking-tight">Maitri Wellness Clinic</span>
        </div>
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#about" className="hover:text-brand-blue">About Us</a>
          <a href="#treatments" className="hover:text-brand-blue">Treatments</a>
          <a href="#doctors" className="hover:text-brand-blue">Doctors</a>
          <a href="#faqs" className="hover:text-brand-blue">FAQs</a>
          <a href="#contact" onClick={() => setContactOpen(true)} className="hover:text-brand-blue cursor-pointer">Contact</a>
        </nav>
        <div className="flex items-center space-x-3">
          <a href="#consult" className="bg-brand-yellow rounded px-4 py-2 font-semibold hover:bg-brand-orange text-brand-navy shadow transition">Book Consultation</a>
          <a href="https://wa.me/917392113668" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center bg-brand-blue text-white rounded px-3 py-2 text-sm font-semibold hover:bg-brand-navy shadow transition">
            <img src="https://ext.same-assets.com/4197587327/1306987126.png" alt="WhatsApp" className="h-5 w-5 mr-2" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

function App() {
  const [contactOpen, setContactOpen] = React.useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-brand-gray  ">
       <Header contactOpen={contactOpen} setContactOpen={setContactOpen} />
       <ContactFormModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <FeaturesSection />
        <ConsultStepsSection />
        <DiseaseGridSection />
        <DoctorsSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <BottomFooter/>
      <Footer />
    </div>
  );
}

export default App;
