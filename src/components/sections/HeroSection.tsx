import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative min-h-[90vh] flex items-center overflow-hidden hidden"
      style={{
        backgroundImage: 'url(/images/background_v1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/20 z-0"></div>

      <div className="section-container z-10 pt-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-blue mb-6 leading-tight animate-fade-in">
            Claus Horn
          </h1>
          <p className="text-xl md:text-2xl text-white mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Scientist & AI Entrepreneur
          </p>
          <p className="text-lg md:text-xl text-white mb-6 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            I am a researcher and AI entrepreneur with a background in particle physics, machine learning and computational biology research.
          </p>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
            My vision is to accelerate scientific discovery with AI.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              onClick={scrollToContact}
              className="bg-dark-red hover:bg-dark-red/90 text-white text-lg px-8 py-6"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
