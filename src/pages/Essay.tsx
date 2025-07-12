import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { convertMarkdownToHtml, Essay } from "@/utils/markdown";
import { getEssay } from "@/utils/essayLoader";

// Import the essays data from Essays.tsx
const essaysData = [
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

const EssayPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [essay, setEssay] = useState<Essay | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEssay = async () => {
      if (!slug) {
        setError("Essay not found");
        setLoading(false);
        return;
      }

      try {
        const data = await getEssay(slug);
        if (!data) {
          throw new Error("Essay not found");
        }
        setEssay(data);
      } catch (err) {
        setError("Failed to load essay");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadEssay();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-charcoal font-sans">
        <Navbar />
        <main className="pt-20">
          <div className="section-container py-20">
            <div className="animate-pulse">
              <div className="h-8 bg-light-gray rounded mb-4"></div>
              <div className="h-4 bg-light-gray rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-light-gray rounded"></div>
                <div className="h-4 bg-light-gray rounded"></div>
                <div className="h-4 bg-light-gray rounded"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !essay) {
    return (
      <div className="min-h-screen bg-white text-charcoal font-sans">
        <Navbar />
        <main className="pt-20">
          <div className="section-container py-20 text-center">
            <h1 className="text-4xl font-bold text-charcoal mb-4">Essay Not Found</h1>
            <p className="text-charcoal/80 mb-8">The essay you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate('/essays')}
              className="bg-accent-blue hover:bg-accent-blue/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Back to Essays
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const htmlContent = convertMarkdownToHtml(essay.content);
  
  // Get the essay metadata from Essays.tsx data
  const essayMetadata = essaysData.find(e => e.link === `/essays/${slug}`);

  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <Navbar />
      <main className="pt-20">
        <article className="pt-8 pb-20">
          <div className="section-container max-w-4xl mx-auto">
            {/* Back button */}
            <button
              onClick={() => navigate('/essays')}
              className="flex items-center text-accent-blue hover:text-dark-red transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Essays
            </button>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center space-x-4 text-sm text-charcoal/60 mb-6">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(essay.metadata.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{essayMetadata?.readTime || "8 min read"}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                {essay.metadata.title}
              </h1>

              {/* Image */}
              {essayMetadata?.image && (
                <div className="mb-8">
                  <img 
                    src={`/images/${essayMetadata.image}`}
                    alt={essay.metadata.title}
                    className="w-full max-w-2xl h-48 object-cover rounded-lg"
                  />
                </div>
              )}
            </header>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default EssayPage; 