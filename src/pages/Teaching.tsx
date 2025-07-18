import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookOpen } from "lucide-react";

const courses = [
  {
    title: "AI for Protein Design",
    institution: "Yale - CBB Program",
    year: "Fall 2025 (under preparation)"
  },
  {
    title: "Deep Learning for Biotechnology",
    institution: "International School of Deep Learning, Bournemouth, UK",
    year: "2023"
  },
  {
    title: "Applied Reinforcement Learning",
    institution: "ZHAW",
    year: "2022 - 2023"
  },
  {
    title: "Artificial Intelligence for Managers",
    institution: "ZHAW",
    year: "2021"
  },
  {
    title: "Advanced Deep Learning for Life Science students",
    institution: "ZHAW",
    year: "2021 - 2023"
  },
  {
    title: "Machine Learning and Pattern Recognition",
    institution: "ZHAW",
    year: "2021 - 2023"
  },
  {
    title: "Deep Learning",
    institution: "HSLU",
    year: "2019"
  }
];

const Teaching = () => {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="section-container">
            <h1 className="text-4xl md:text-5xl font-bold text-accent-blue mb-6 flex items-center">
              <BookOpen className="h-10 w-10 mr-3 text-accent-blue" /> Teaching
            </h1>
            <p className="text-xl text-charcoal/80 mb-12 max-w-3xl">
              Selected courses taught at Yale, ZHAW, HSLU, and international programs. I am passionate about teaching AI, machine learning, and computational methods for life sciences and engineering.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {courses.map((course, idx) => (
                <div key={idx} className="bg-light-gray p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h2 className="text-lg font-semibold text-charcoal mb-2">{course.title}</h2>
                  <div className="text-charcoal/70 mb-1">{course.institution}</div>
                  <div className="text-sm text-charcoal/60">{course.year}</div>
                </div>
              ))}
            </div>
            <div className="bg-accent-blue/5 p-6 rounded-lg text-charcoal/70 text-center">
              <span className="italic">More teaching content and resources coming soon.</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Teaching; 