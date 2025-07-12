import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="section-container">
        <div className="md:flex md:items-center md:space-x-12">
          {/* Claus Horn's photo */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/Claus-Horn.jpg" 
                alt="Claus Horn"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="section-title">About Me</h2>
            <div className="space-y-4 text-lg text-charcoal/80">
              <p>
                I am a scientist and AI entrepreneur with a background in particle physics, machine learning, and 
                computational biology research. My vision is to accelerate scientific discovery with AI, bridging 
                the gap between cutting-edge research and practical applications that can transform how we 
                understand and interact with the world.
              </p>
              <p>
                With over 20 years of experience at top-tier institutions including CERN, Stanford, and Yale, I 
                bring a unique combination of scientific creativity, deep technical expertise, and business acumen. 
                My work spans fundamental research, machine learning innovation, and leadership in both 
                academia and industry.
              </p>
              <p>
                I've initiated the first petabyte-scale ML frameworks at CERN, built scalable ML platforms, 
                and founded Europe's largest autonomous systems community. Through my research, advisory work, 
                and entrepreneurial ventures, I'm working to unlock AI's potential to accelerate breakthrough 
                discoveries across scientific disciplines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
