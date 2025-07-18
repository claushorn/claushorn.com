import React from "react";

const HeroSection = () => {
  return (
    <section className="pt-8 pb-0 bg-transparent">
      <div className="section-container flex justify-center">
        <div className="flex items-center bg-accent-blue/10 rounded-xl shadow-md px-8 py-4 w-full max-w-4xl">
          {/* Image on the left */}
          <div className="flex-shrink-0 w-28 h-28 mr-8">
            <img
              src="/images/Claus-Horn.jpg"
              alt="Claus Horn"
              className="w-28 h-28 object-cover rounded-lg shadow"
            />
          </div>
          {/* Text on the right */}
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-charcoal leading-tight">Claus Horn</span>
            <span className="text-base text-charcoal/80 mt-2">
              Physicist, AI Researcher, Entrepreneur
              <br />
              Founder of AI Pioneers & Eureka Labs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
