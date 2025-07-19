import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { convertMarkdownToHtml, Essay } from "@/utils/markdown";
import { getEssay } from "@/utils/essayLoader";

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
                  <span>8 min read</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                {essay.metadata.title}
              </h1>

              {/* Image */}
              {essay.metadata.image && (
                <div className="mb-8">
                  <img 
                    src={`/images/${essay.metadata.image}`}
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