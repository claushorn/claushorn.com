import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookOpen, Clock, Bell, PenTool } from "lucide-react";

const Book = () => {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="section-container">
            <h1 className="text-4xl md:text-5xl font-bold text-accent-blue mb-6">
              Accelerate Your Research with AI <br></br> A Practical Guide for Scientists
            </h1>
            <p className="text-xl text-charcoal/80 mb-12 max-w-3xl">
              How to become an AI-native researcher in the age of AI. This book is a practical guide for experimental and computational scientists who want to harness AI as a force multiplier in their research. It offers frameworks, case studies, and tool recommendations for every stage of the research process, from literature review and hypothesis generation to experiment design, analysis, and dissemination.
            </p>

            {/* Book Preview */}
            <div className="bg-light-gray p-8 rounded-lg mb-16">
              <div className="flex items-center space-x-4 mb-6">
                <BookOpen className="h-8 w-8 text-accent-blue" />
                <h2 className="text-2xl font-semibold text-charcoal">
                  Book in Progress
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-4">What This Book Offers</h3>
                  <ul className="space-y-3 text-charcoal/80">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>Problem-solution frameworks and practical checklists for every research stage</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>Case studies and real-world examples from biology, chemistry, and computational science</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>Toolkits and walkthroughs for AI-powered analysis, design, and interpretation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>Updatable structure: lasting questions, evolving best practices, and a focus on reproducibility</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-4">Who It's For</h3>
                  <ul className="space-y-3 text-charcoal/80">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-dark-red rounded-full mt-2 flex-shrink-0"></div>
                      <span>Experimental and computational scientists in any domain</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-dark-red rounded-full mt-2 flex-shrink-0"></div>
                      <span>Research leaders and project managers navigating the AI transition</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-dark-red rounded-full mt-2 flex-shrink-0"></div>
                      <span>Students and professionals building their AI research stack</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-dark-red rounded-full mt-2 flex-shrink-0"></div>
                      <span>Anyone interested in the future of science and the evolving role of the researcher</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stay Updated */}
            <div className="bg-gradient-to-r from-accent-blue/5 to-dark-red/5 p-8 rounded-lg text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Bell className="h-6 w-6 text-accent-blue" />
                <h2 className="text-2xl font-semibold text-charcoal">
                  Stay Tuned!
                </h2>
              </div>
              
              <p className="text-charcoal/80 mb-6 max-w-2xl mx-auto">
                The book is currently in development. I invite you to share your experiences: How are you doing research? How are you using AI? What are your biggest challenges? Join the conversation and help shape the future of AI-native science.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="flex items-center space-x-3 justify-center">
                  <Clock className="h-5 w-5 text-accent-blue" />
                  <span className="text-sm text-charcoal/70">In Progress</span>
                </div>
                <div className="flex items-center space-x-3 justify-center">
                  <PenTool className="h-5 w-5 text-accent-blue" />
                  <span className="text-sm text-charcoal/70">Regular Updates</span>
                </div>
                <div className="flex items-center space-x-3 justify-center">
                  <BookOpen className="h-5 w-5 text-accent-blue" />
                  <span className="text-sm text-charcoal/70">Coming Soon</span>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-sm text-charcoal/60 mb-4">
                  Get notified about book updates and preview content
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue"
                  />
                  <button className="bg-accent-blue hover:bg-accent-blue/90 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Book; 