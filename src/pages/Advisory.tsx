import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Building, Users, TrendingUp, Shield, Quote, CheckCircle } from "lucide-react";

const Advisory = () => {
  const advisoryAreas = [
    {
      icon: <Building className="h-8 w-8 text-accent-blue" />,
      title: "AI Strategy",
      description: "Define and execute a clear AI roadmap aligned with your business objectives, enabling focused investment and long-term differentiation."
    },
    {
      icon: <Users className="h-8 w-8 text-accent-blue" />,
      title: "C-Level AI Education",
      description: "Equip executive teams with the knowledge to make confident, high-stakes decisions about AI."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent-blue" />,
      title: "Applied AI R&D",
      description: "Build cutting-edge AI solutions through translational research tailored to your domain."
    },
    {
      icon: <Shield className="h-8 w-8 text-accent-blue" />,
      title: "AI Opportunity Scouting",
      description: "Identify high-leverage use cases across your organization where AI can deliver competitive advantage."
    }
  ];

  const recentHighlights = [
    {
      company: "Georg Fischer AG",
      description: "Enhanced injection molding operational efficiency using data-driven predictive analytics."
    },
    {
      company: "Bühler Group", 
      description: "Guided AI integration for process optimization and smart manufacturing in industrial-scale pasta production."
    },
    {
      company: "V-ZUG AG",
      description: "Developed AI systems for next-generation kitchen appliances, integrating perception, decision-making, and adaptive control."
    }
  ];

  const valuePropositions = [
    {
      icon: <CheckCircle className="h-6 w-6 text-accent-blue" />,
      title: " Outcome-Orientation",
      description: "My approach ensures that each AI initiative directly supports your strategic goals and business objective and deliveres measurable outcomes."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-accent-blue" />,
      title: "Accelerate and De-risk Your AI Investments",
      description: "Through rapid experimentation, lean prototyping, and evidence-driven validation, I enable you to confidently select the right AI path."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-accent-blue" />,
      title: "Innovation Grounded in Research", 
      description: "Leveraging deep industry experience combined with ongoing frontline AI research, I provide solutions that position you ahead of the curve."
    }
  ];

  const boardCapabilities = [
    {
      icon: <Shield className="h-6 w-6 text-accent-blue" />,
      title: "Strategic Oversight",
      description: "Provide board-level guidance on AI strategy, technology investments, and digital transformation initiatives."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-accent-blue" />,
      title: "Growth & Innovation",
      description: "Advise on leveraging AI for competitive advantage, new product development, and market expansion."
    },
    {
      icon: <Building className="h-6 w-6 text-accent-blue" />,
      title: "Risk Management",
      description: "Ensure responsible AI deployment, data governance, and compliance with evolving regulations."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="section-container">
            <h1 className="text-4xl md:text-5xl font-bold text-accent-blue mb-6">
              Advisory & Board Roles
            </h1>
            <p className="text-xl text-charcoal/80 mb-12 max-w-3xl">
              With over 20 years of experience at the intersection of advanced research and industry 
              implementation, I have advised numerous companies on AI projects across a wide range of 
              sectors. My approach focuses on translating cutting-edge AI research into real-world impact, 
              helping organizations accelerate digital transformation and gain competitive advantage.
            </p>
            <div className="flex items-center bg-light-gray rounded-lg p-5 mb-12 w-full text-lg text-charcoal/80">
              <span className="text-accent-blue mr-3 text-2xl font-bold flex-shrink-0">▶</span>
              <span>As a member of the SATW panel I am advising the Swiss Federal Council on national Artificial Intelligence Strategy.</span>
            </div>

            {/* Client Testimonial */}
            <div className="mb-16 bg-gradient-to-r from-accent-blue/5 to-dark-red/5 p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <Quote className="h-8 w-8 text-accent-blue flex-shrink-0 mt-1" />
                <div>
                  <blockquote className="text-xl font-medium text-charcoal mb-4 italic">
                    "Dr. Horn brings a unique blend of expertise in AI and agent-based systems. His guidance has helped us move from isolated machine learning features to designing full autonomy loops that incorporate perception, decision-making, and adaptive control within the appliance."
                  </blockquote>
                  <cite className="text-charcoal/70">— Marcel Koler, Head of Computer Aided Engineering, V-ZUG AG</cite>
                </div>
              </div>
            </div>

            {/* Strategic AI Advisory */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-charcoal mb-8">AI Advisory Services</h2>
              <p className="text-charcoal/80 mb-8 leading-relaxed">
                If your organization is looking to harness AI as a growth driver, I bring the perfect combination of scientific expertise, industry experience, and strategic vision to help you succeed.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {advisoryAreas.map((area, index) => (
                  <div 
                    key={index}
                    className="bg-light-gray p-6 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-white rounded-md">
                        {area.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-charcoal">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-charcoal/70 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Work With Me */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-charcoal mb-8">Why Work With Me?</h2>
              <div className="space-y-6">
                {valuePropositions.map((prop, index) => (
                  <div 
                    key={index}
                    className="bg-light-gray p-6 rounded-lg"
                  >
                    <div className="flex items-start space-x-4">
                      {prop.icon}
                      <div>
                        <h3 className="text-lg font-semibold text-charcoal mb-2">
                          {prop.title}
                        </h3>
                        <p className="text-charcoal/70 leading-relaxed">
                          {prop.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Advisory Highlights */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-charcoal mb-8">Recent Advisory Engagements</h2>
              <div className="space-y-6">
                {recentHighlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="bg-white border border-light-gray p-6 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-accent-blue flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-charcoal mb-2">
                          {highlight.company}
                        </h3>
                        <p className="text-charcoal/70">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Board Member Services */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-charcoal mb-8">Board Member Services</h2>
              <p className="text-charcoal/80 mb-8 leading-relaxed">
              I serve on boards of organizations aiming to use AI as a strategic growth lever. By combining deep technical fluency with business acumen, I help leadership teams navigate emerging AI opportunities, assess risks, and align innovation with long-term value creation. My perspective is grounded in both frontier research and practical deployment, bridging the gap between what’s possible and what’s profitable. </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {boardCapabilities.map((capability, index) => (
                  <div 
                    key={index}
                    className="bg-light-gray p-6 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white rounded-md">
                        {capability.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-charcoal">
                        {capability.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>



            {/* Let's Start a Conversation */}
            <div className="bg-gradient-to-r from-accent-blue/10 to-dark-red/10 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                Interested in working with me?
              </h2>
              <p className="text-charcoal/80 mb-6 leading-relaxed">
                Whether you need strategic advisory, board-level guidance let's explore how we can work together.
              </p>

              <div className="mt-6 text-center">
                <a 
                  href="/#contact" 
                  className="inline-flex items-center bg-accent-blue hover:bg-accent-blue/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Advisory; 