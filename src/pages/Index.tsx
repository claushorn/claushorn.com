import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import OverviewSection from "@/components/sections/OverviewSection";
import ContactSection from "@/components/sections/ContactSection";
import { setupAnimations } from "@/utils/animations";

const Index = () => {
  useEffect(() => {
    // Update document title and meta description for SEO
    document.title = "Claus Horn | Scientist & AI Entrepreneur";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Claus Horn - Scientist and AI entrepreneur with background in particle physics, machine learning, and computational biology research. My vision is to accelerate scientific discovery with AI.');
    }
    
    // Initialize scroll animations
    setupAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
