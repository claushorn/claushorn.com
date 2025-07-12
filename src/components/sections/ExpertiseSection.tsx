import React from "react";
import { 
  Brain, 
  Users, 
  BookOpen, 
  Microscope 
} from "lucide-react";

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: <Microscope className="h-8 w-8 text-accent-blue" />,
      title: "Scientific Excellence",
      description: "Over 100 publications in AI, biophysics, and computational science. Proven track record from CERN to cutting-edge AI systems for protein optimization and drug discovery."
    },
    {
      icon: <Brain className="h-8 w-8 text-accent-blue" />,
      title: "AI Leadership",
      description: "Led interdisciplinary AI groups in life sciences and healthcare. Initiated petabyte-scale ML frameworks at CERN and built scalable platforms in academia and industry."
    },
    {
      icon: <Users className="h-8 w-8 text-accent-blue" />,
      title: "Community Building",
      description: "Founded Europe's largest autonomous systems community. Expert in bridging research and industry while advising startups on AI transformation."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-accent-blue" />,
      title: "Teaching & Education",
      description: "Taught AI, deep learning, and reinforcement learning at top institutions. Skilled at translating complex topics for diverse audiences and broader public speaking."
    }
  ];

  return (
    <section id="expertise" className="bg-light-gray py-20">
      <div className="section-container">
        <h2 className="section-title text-center mb-16">Areas of Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-start animate-on-scroll hover:shadow-md transition-shadow"
            >
              <div className="mb-5 p-3 bg-light-gray rounded-md">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">{area.title}</h3>
              <p className="text-charcoal/70">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
