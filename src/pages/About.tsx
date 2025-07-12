import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-blue/10 to-light-gray py-20 pt-32">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              About Me
            </h1>
            <p className="text-xl text-charcoal/70 font-medium">
            I have had the chance to contribute to many exciting projects, <br/>from searches for microscopic black holes to AI models for protein design and real-world autonomous systems.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="section-container">
          <div className="md:flex md:items-start md:space-x-12">
            {/* Photo */}
            <div className="mb-8 md:mb-0 md:w-1/3">
              <div className="relative">
                <img
                  src="/images/Claus-Horn.jpg"
                  alt="Claus Horn"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:w-2/3">
              <div className="space-y-6 text-lg text-charcoal/80">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Scientific Contributions</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Former researcher at Stanford, CERN, and Yale.</li>
                    <li>Authored 120+ peer-reviewed publications, cited &gt;80,000 times (h-index &gt; 100)</li>
                  </ul>
                  <p className="mt-4 font-semibold">Highlights:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>One of the first applications of machine learning at the petabyte scale (Ph.D. thesis, 2006).</li>
                    <li>A solution for the efficient exploration of the 120 dimensional parameter space of the Minimal Supersymmetric Standard Model of particle physics.
                    <span className="text-sm text-gray-600">J. Phys. G, 36:105005; AIP Conf. Proc., 1200(1):794–797</span>, which has been widely adopted.</li>
                    <li>Founded the displaced-vertices group at ATLAS, which has grown into a field with &gt;300 active researchers.
                    <span className="text-sm text-gray-600">Phys. Lett. B, 707:478–496; CERN Courier</span></li>
                    <li>Solved the decade-old data leakage problem in protein-ligand modeling, and introduced the first truely generalizing GNN model for binding affinity prediction.
                    <span className="text-sm text-gray-600">BioRxiv, 2024</span></li>
                    <li>Developed a discrete gradient ascent algorithm for efficient protein optimization, breaking long-held assumptions.
                    <span className="text-sm text-gray-600">Geometric Protein Optimization, BioRxiv, 2025</span></li>
                    <li>Contributed to searches for the Higgs boson. It's discovery was recognized with the <strong className="text-accent-blue font-bold">2013 Nobel Prize in Physics</strong>.</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Leadership & Organization Building</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Established and directed the AI Extension School (2020-2023) at ICLS, designed to equip life science professionals with practical skills in artificial intelligence.</li>
                  <li>Led the Autonomous Learning Systems research group (2019-2023), focused on deploying reinforcement learning agents in real-world industrial settings.</li>
                    <li>Founder of Autonomous Systems and Reinforcement Learning (RLZ), a community dedicated to open education and the exchange between scientists and AI professionals (&gt;3,000 members)</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Industry Innovation & Impact</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Initiated the first data science team at Switzerland's largest corporation.</li>
                    <li>Inventor of a machine learning algorithm (MIDEX) steering $7B/year in revenue.</li>
                    <li>Build pioneering AI solutions in finance, retail, and insurance, and manufacturing.</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Mentorship & Teaching</h2>
                  <ul className="list-disc list-inside space-y-2">
                  <li>Supervised &gt;10 Master's and Ph.D. students across physics, AI, and computational biology. </li>
                  <li>Taught over 500 students in machine learning, deep learning, artificial intelligence, and reinforcement learning.</li>
                    </ul>
                    </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Fundraising Expertise</h2>
                  <p>
                    Proven track record in securing competitive grants (NSF, NIH, Horizon Europe, SNF, Innosuisse), with experience spanning basic science and translational AI research.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-2xl font-semibold mb-4">Education</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Ph.D. in Physics</li>
                    <li>Master's degrees in Physics and Economics</li>
                    <li>Advanced Degree in Management & Leadership</li>
                    <li>Diploma in University Didactics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About; 