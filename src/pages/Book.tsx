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
              Upcoming Book
            </h1>
            <p className="text-xl text-charcoal/80 mb-12 max-w-3xl">
              "Reinventing Science: How AI is transforming How We Understand the World".
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
                  <h3 className="text-lg font-semibold text-charcoal mb-4">What to Expect</h3>
                  <ul className="space-y-3 text-charcoal/80">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>Insights from 20+ years in particle physics, machine learning, and computational biology</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>Practical frameworks for accelerating scientific discovery with AI</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>Case studies from CERN, Stanford, Yale, and industry applications</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>Bridging the gap between research and entrepreneurship</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-4">Target Audience</h3>
                  <ul className="space-y-3 text-charcoal/80">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-dark-red rounded-full mt-2 flex-shrink-0"></div>
                      <span>Researchers looking to leverage AI in their work</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-dark-red rounded-full mt-2 flex-shrink-0"></div>
                      <span>Entrepreneurs building AI-driven scientific tools</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-dark-red rounded-full mt-2 flex-shrink-0"></div>
                      <span>Leaders transforming R&D with machine learning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-dark-red rounded-full mt-2 flex-shrink-0"></div>
                      <span>Students and professionals in computational sciences</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Writing Process */}
            <div className="mb-16">
              <div className="flex items-center space-x-4 mb-8">
                <PenTool className="h-6 w-6 text-accent-blue" />
                <h2 className="text-2xl font-semibold text-charcoal">
                  Behind the Writing
                </h2>
              </div>
              
              <div className="bg-white border border-light-gray p-6 rounded-lg">
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  This book represents a synthesis of my journey from fundamental physics research 
                  to building AI systems that can accelerate scientific discovery. Drawing from 
                  experiences at world-class institutions and real-world applications, I'm crafting 
                  a practical guide for the next generation of scientists.
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  The writing process involves distilling complex concepts into actionable insights, 
                  sharing both successes and lessons learned, and providing frameworks that others 
                  can adapt to their own research and entrepreneurial journeys.
                </p>
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
                The book is currently in development. I'll be sharing updates on progress, 
                key insights, and preview chapters through my essays and newsletter. 
                Join the community to be among the first to know when it's available.
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