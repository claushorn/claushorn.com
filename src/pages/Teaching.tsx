import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookOpen, Users, Lightbulb } from "lucide-react";

const Teaching = () => {
  const teachingActivities = [
    {
      year: "2025",
      courses: [
        {
          title: "AI for Protein Design, Yale University - CBB Program",
          content: "Advanced course covering AI-driven protein design methodologies, including structure prediction, sequence optimization, and functional annotation using state-of-the-art machine learning approaches."
        }
      ]
    },
    {
      year: "2023",
      courses: [
        {
          title: "Deep Learning for Biotechnology, International School of Deep Learning, Bournemouth, UK",
          content: "Comprehensive introduction to deep learning applications in biotechnology, covering neural networks, convolutional networks for image analysis, and recurrent networks for sequence data in biological contexts."
        }
      ]
    },
    {
      year: "2022-2023",
      courses: [
        {
          title: "Applied Reinforcement Learning, ZHAW",
          content: "Practical course on reinforcement learning algorithms and their applications in real-world scenarios, including Q-learning, policy gradient methods, and multi-agent systems with hands-on projects."
        }
      ]
    },
    {
      year: "2021-2023",
      courses: [
        {
          title: "Advanced Deep Learning for Life Science students, ZHAW",
          content: "Specialized deep learning course for life science students, covering advanced neural architectures, transfer learning, and applications in genomics, proteomics, and drug discovery."
        },
        {
          title: "Machine Learning and Pattern Recognition for ACLS students, ZHAW",
          content: "Foundation course in machine learning and pattern recognition, covering supervised and unsupervised learning, feature selection, model evaluation, and applications in life sciences."
        }
      ]
    },
    {
      year: "2021",
      courses: [
        {
          title: "Artificial Intelligence for Managers (co-lecturer), ZHAW",
          content: "Executive-level course on AI strategy and implementation, covering business applications, ROI analysis, ethical considerations, and strategic planning for AI adoption in organizations."
        },
        {
          title: "Physics for Biotechnology students, ZHAW",
          content: "Applied physics course tailored for biotechnology students, covering thermodynamics, fluid mechanics, and biophysical principles relevant to biotechnological processes and instrumentation."
        }
      ]
    },
    {
      year: "2020",
      courses: [
        {
          title: "Statistics for Chemistry students, ZHAW",
          content: "Statistical methods course for chemistry students, covering experimental design, data analysis, hypothesis testing, and statistical modeling in chemical research and quality control."
        },
        {
          title: "Physics for Chemistry students, ZHAW",
          content: "Fundamental physics course for chemistry students, covering quantum mechanics, thermodynamics, and physical chemistry principles essential for understanding chemical processes."
        }
      ]
    },
    {
      year: "2019",
      courses: [
        {
          title: "Deep Learning, HSLU",
          content: "Comprehensive deep learning course covering neural networks, backpropagation, convolutional neural networks, recurrent neural networks, and modern architectures with practical implementation projects."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="section-container">
            <h1 className="text-4xl md:text-5xl font-bold text-accent-blue mb-6 flex items-center">
              <BookOpen className="h-10 w-10 mr-3 text-accent-blue" /> Teaching
            </h1>
            
            <div className="max-w-4xl">
              <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
                Mentoring younger researchers has always been a passion and one of the most rewarding parts of my work. I have supervised 10+ PhD and Masters students across various institutions.
              </p>
              
              <div className="bg-accent-blue/5 p-6 rounded-lg mb-12">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-6 w-6 text-accent-blue flex-shrink-0 mt-1" />
                  <p className="text-charcoal/80 italic">
                    Many of these courses were initiated at a time when the reaction was 'Are you really sure this is needed?' before they became part of the standard curriculum 5 years later.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {teachingActivities.map((yearGroup, index) => (
                  <div key={index} className="border-l-4 border-accent-blue pl-6">
                    <h3 className="text-2xl font-semibold text-accent-blue mb-4">
                      {yearGroup.year}
                    </h3>
                    <div className="space-y-4">
                      {yearGroup.courses.map((course, courseIndex) => (
                        <div key={courseIndex} className="bg-white/50 p-4 rounded-lg">
                          <div className="flex items-start space-x-3 mb-2">
                            <span className="text-accent-blue text-lg mt-1">•</span>
                            <p className="text-charcoal font-medium leading-relaxed">{course.title}</p>
                          </div>
                          <p className="text-charcoal/70 text-sm leading-relaxed ml-6">{course.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Teaching; 