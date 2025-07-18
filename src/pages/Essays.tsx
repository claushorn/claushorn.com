import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Essays = () => {
  const essays = [
    {
      title: "The Potential of AI Interpretability to Advance Scientific Discovery",
      excerpt: "Exploring how AI interpretability can unlock new insights in scientific research and accelerate discovery across multiple domains.",
      date: "2025-06-01",
      readTime: "8 min read",
      category: "AI for Scientific Discovery",
      featured: false,
      link: "/essays/interpretability_for_science",
      image: "1748905089783.jpg",
      internal: true
    },
    {
      title: "The New Science of Thought",
      excerpt: "Large Language Models (LLMs), fine-tuned through reinforcement learning — exemplified by models like ChatGPT — have taken the world by storm. This is based on their ability...",
      date: "2023-06-01",
      readTime: "10 min read",
      category: "LLM Agents",
      featured: false,
      link: "https://medium.com/@claus.horn/the-new-science-of-thought-de667c08b45c",
      image: "1750703658310.jpg"
    },
    {
      title: "How Applied Reinforcement Learning will take over the world",
      excerpt: "Data Science today is used mainly for operational automation by leveraging supervised learning. Unfortunately, these kinds of approaches forgo the main potential for value creation...",
      date: "2022-05-01",
      readTime: "12 min read",
      category: "Autonomous Agents",
      featured: false,
      link: "https://www.linkedin.com/pulse/data-science-20-how-applied-reinforcement-learning-take-horn/",
      image: "1651347180205.jpg"
    },
    {
      title: "Math 2.0 - The fundamental importance of machine learning",
      excerpt: "Some people, especially during the current data science hype, see machine learning as just another algorithm. Unfortunately, this interpretation completely misses the forest for the trees.",
      date: "2021-09-01",
      readTime: "9 min read",
      category: "Machine Learning",
      featured: false,
      link: "https://www.linkedin.com/pulse/math-20-fundamental-importance-machine-learning-dr-claus-horn",
      image: "1630573830855.jpg"
    },
    {
      title: "Why do deep neural networks generalize?",
      excerpt: "The reason for a neural network's ability to generalize is considered one of the most important open questions in machine learning. Given the recent emergence of LLMs...",
      date: "2023-08-12",
      readTime: "9 min read",
      category: "Machine Learning",
      featured: false,
      link: "https://medium.com/@claus.horn/why-do-deep-neural-networks-generalize-3a30c5d523fd",
      image: "1_JlqOT-gq2QXD-rUzQbj-Bw.webp"
    }
  ];

  const categories = ["All", "AI for Scientific Discovery", "LLM Agents", "Autonomous Agents", "Machine Learning"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredEssays = selectedCategory === "All" 
    ? essays 
    : essays.filter(essay => essay.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="section-container">
            <h1 className="text-4xl md:text-5xl font-bold text-accent-blue mb-6">
              Essays
            </h1>
            <p className="text-xl text-charcoal/80 mb-12 max-w-3xl">
              Exploring ideas at the intersection of AI, scientific discovery, and the future 
              of research and innovation.
            </p>

            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-accent-blue text-white'
                        : 'bg-light-gray text-charcoal hover:bg-accent-blue/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Essays */}
            {selectedCategory === "All" && (
              <div className="mb-16 hidden">
                <h2 className="text-2xl font-semibold text-charcoal mb-8">Featured Essays</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {essays.filter(essay => essay.featured).map((essay, index) => (
                    <article 
                      key={index}
                      className="bg-gradient-to-br from-accent-blue/5 to-dark-red/5 p-8 rounded-lg hover:shadow-md transition-shadow cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4 text-sm text-charcoal/60 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(essay.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{essay.readTime}</span>
                        </div>
                      </div>
                      
                      <span className="inline-block bg-accent-blue text-white text-xs px-2 py-1 rounded mb-3">
                        {essay.category}
                      </span>
                      
                      <h3 className="text-xl font-semibold text-charcoal mb-3 group-hover:text-accent-blue transition-colors">
                        {essay.title}
                      </h3>
                      
                      <p className="text-charcoal/70 mb-4 leading-relaxed">
                        {essay.excerpt}
                      </p>
                      
                      <div className="flex items-center text-accent-blue group-hover:text-dark-red transition-colors">
                        <span className="text-sm font-medium">Read more</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* All Essays */}
            <div>
              <h2 className="text-2xl font-semibold text-charcoal mb-8">
                {selectedCategory === "All" ? "All Essays" : `Essays in ${selectedCategory}`}
              </h2>
              <div className="space-y-6">
                {filteredEssays.map((essay, index) => (
                                    <a 
                    key={index}
                    href={essay.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <article 
                      className="bg-gradient-to-br from-accent-blue/5 to-dark-red/5 p-6 rounded-lg hover:shadow-md transition-shadow cursor-pointer group"
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Text content on the left */}
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 text-sm text-charcoal/60 mb-3">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{essay.readTime}</span>
                            </div>
                            <span className="inline-block bg-white text-accent-blue text-xs px-2 py-1 rounded border border-accent-blue/20">
                              {essay.category}
                            </span>
                          </div>
                          
                          <h3 className="text-lg font-semibold text-charcoal mb-2 group-hover:text-accent-blue transition-colors">
                            {essay.title}
                          </h3>
                          
                          <p className="text-charcoal/70 leading-relaxed">
                            {essay.excerpt}
                          </p>
                        </div>
                        
                        {/* Image on the right - only if image exists */}
                        {essay.image && (
                          <div className="flex-shrink-0 self-end">
                            <img 
                              src={`/images/${essay.image}`}
                              alt={essay.title}
                              className="w-48 h-32 object-cover rounded-lg"
                            />
                          </div>
                        )}
                      </div>
                    </article>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 bg-accent-blue/5 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                Stay Updated
              </h2>
              <p className="text-charcoal/80 mb-6 max-w-2xl mx-auto">
                Get notified when I publish new essays.<br />
                Join a community of forward-thinkers  
                shaping the future of science.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue"
                />
                <button className="bg-accent-blue hover:bg-accent-blue/90 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Essays; 