import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";

const OverviewSection = () => {
  const [newsContent, setNewsContent] = useState<string>("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/latest_news.md');
        const text = await response.text();
        // Filter out lines starting with '<<'
        const filteredText = text
          .split('\n')
          .filter(line => !line.trim().startsWith('<<'))
          .join('\n');
        setNewsContent(filteredText);
      } catch (error) {
        console.error('Error loading latest news:', error);
        setNewsContent('# Error loading latest news');
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Latest News */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-charcoal mb-6">Latest News</h2>
            <div className="bg-accent-blue/5 p-6 rounded-lg border-l-4 border-accent-blue">
              <div className="text-lg text-charcoal/80 space-y-4">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <div className="font-semibold text-charcoal mb-2">{children}</div>
                    ),
                    p: ({ children }) => (
                      <div className="mb-2">{children}</div>
                    )
                  }}
                >
                  {newsContent}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          {/* What I'm Working On */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-charcoal mb-6">What I'm Working On</h2>
            <div className="space-y-8 text-lg text-charcoal/80">
              <div className="animate-on-scroll flex items-start">
                <span className="text-accent-blue mr-3 text-xl font-bold flex-shrink-0 mt-1">▶</span>
                <p>
                  My current{" "}
                  <Link 
                    to="/initiatives" 
                    className="text-accent-blue hover:text-accent-blue/80 font-medium underline underline-offset-2"
                  >
                    initiatives & ventures
                  </Link>{" "}
                  include building AI frameworks for scientific discovery, organizing research projects with students, and seeking visionary investors who share my mission.
                </p>
              </div>

              <div className="animate-on-scroll flex items-start">
                <span className="text-accent-blue mr-3 text-xl font-bold flex-shrink-0 mt-1">▶</span>
                <p>
                  I support organizations through{" "}
                  <Link 
                    to="/advisory" 
                    className="text-accent-blue hover:text-accent-blue/80 font-medium underline underline-offset-2"
                  >
                    advisory
                  </Link>
                  {" "} with AI strategy, project development, and research translation. Especially in the area of agentic solutions.
                </p>
              </div>

              <div className="animate-on-scroll flex items-start">
                <span className="text-accent-blue mr-3 text-xl font-bold flex-shrink-0 mt-1">▶</span>
                <p>
                  Here's a glimpse into some of the {" "}
                  <Link 
                    to="/research" 
                    className="text-accent-blue hover:text-accent-blue/80 font-medium underline underline-offset-2"
                  >
                    research 
                  </Link>
                  {" "}I've been working on recently.
                </p>
              </div>

              <div className="animate-on-scroll flex items-start">
                <span className="text-accent-blue mr-3 text-xl font-bold flex-shrink-0 mt-1">▶</span>
                <p>
                  You can read a selection of my {" "}
                  <Link 
                    to="/essays" 
                    className="text-accent-blue hover:text-accent-blue/80 font-medium underline underline-offset-2"
                  >
                    essays
                  </Link>{" "}
                  reflecting my current investigations. — I would love to hear your thoughts!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center animate-on-scroll">
            <Link 
              to="/about"
              className="inline-flex items-center text-charcoal/60 hover:text-charcoal transition-colors"
            >
              Learn more about my background
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection; 