import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Lightbulb, Rocket, Users, Target } from "lucide-react";
import { convertMarkdownToHtml } from "@/utils/markdown";

const Initiatives = () => {
  const initiatives = [
    {
      icon: <Users className="h-8 w-8 text-accent-blue" />,
      title: "Autonomous Agents Community",
      description: "A platform for open education and exchange between AI researchers and industry practitioners interested in autonomous agents and reinforcement learning. In 2018 we started with a meetup group in Zurich, Switzerland, and expanded with online sessions to a global community with 3000+ members.",
      status: "Active",
      category: "Community Building",
      image: "/images/RLZ.avif",
      website: "https://www.meetup.com/reinforcement-learning-zurich/",
      linkedin: "https://www.linkedin.com/company/autonomous-agents/"
    },
    {
      icon: <Rocket className="h-8 w-8 text-accent-blue" />,
      title: "AI Pioneers",
      description: "Bringing together motivated students and world-class AI researchers to collaborate on impactful, responsible research projects. We foster hands-on learning, mentorship, and the development of the next generation of scientific innovators.\n\n**Mentors:** Propose a research project and mentor a team.\n\n**Students:** Explore open projects and join a team that matches your interests.",
      status: "First round of projects: September 2025",
      category: "Non-Profit",
      image: "/images/aipioneers.png",
      website: "https://www.aipioneers.me"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-accent-blue" />,
      title: "Eureka Labs",
      description: "We are researchers and engineers building AI solutions to accelerate scientific discovery while ensuring their outputs are safe, transparent, and beneficial to society.\n\n**Focus Areas:**\n• AI-based Research Ideation\n• Making AI-generated Scientific Ideas Human Intelligible\n• Mechanistic Interpretability for Scientific Discovery Systems\n• AI Safety of AI-driven Research",
      status: "Research Phase",
      category: "Venture",
      image: "/images/EurekaLabs.png",
      website: "https://www.eurekalabs.ch"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="section-container">
            <h1 className="text-4xl md:text-5xl font-bold text-accent-blue mb-6">
              Initiatives & Ventures
            </h1>
            <p className="text-xl text-charcoal/80 mb-12 max-w-3xl">
              Exploring the intersection of entrepreneurship, research, and community building 
              to create meaningful impact in the AI space.
            </p>

            <div className="space-y-8">
              {initiatives.map((initiative, index) => (
                <div 
                  key={index}
                  className="bg-light-gray p-8 rounded-lg hover:shadow-md transition-shadow"
                >
                  {/* Heading spans full width */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-white rounded-md">
                      {initiative.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="text-xl font-semibold text-charcoal">
                          {initiative.title}
                        </h3>
                        <span className="text-sm bg-accent-blue text-white px-2 py-1 rounded">
                          {initiative.status}
                        </span>
                      </div>
                      <p className="text-sm text-accent-blue">
                        {initiative.category}
                      </p>
                    </div>
                  </div>
                  
                  {/* Content divided into left and right */}
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Text content on the left */}
                    <div className="flex-1">
                      <div 
                        className="text-charcoal/70 leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(initiative.description) }}
                      />
                      
                      {/* Special content for Autonomous Agents Community */}
                      {initiative.title === "Autonomous Agents Community" && (
                        <div className="mt-6">
                          <h4 className="font-semibold text-charcoal mb-3">Join us:</h4>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <span className="mr-2">🌐</span>
                              <a 
                                href={initiative.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-accent-blue hover:text-accent-blue/80 font-medium underline underline-offset-2"
                              >
                                Website
                              </a>
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2">💼</span>
                              <a 
                                href={initiative.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-accent-blue hover:text-accent-blue/80 font-medium underline underline-offset-2"
                              >
                                LinkedIn
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Website links for all initiatives */}
                      {initiative.website && initiative.title !== "Autonomous Agents Community" && (
                        <div className="mt-6">
                          <div className="flex items-center">
                            <span className="mr-2">🌐</span>
                            <a 
                              href={initiative.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-accent-blue hover:text-accent-blue/80 font-medium underline underline-offset-2"
                            >
                              Visit Website
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Image on the right - for all initiatives */}
                    {initiative.image && (
                      <div className="flex-shrink-0 self-end">
                        <img 
                          src={initiative.image} 
                          alt={initiative.title} 
                          className="w-96 h-64 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>


          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Initiatives; 