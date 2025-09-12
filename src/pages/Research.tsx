import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FileText, ExternalLink, Calendar, Users } from "lucide-react";

const Research = () => {
  const researchProjects = [
    {
      title: "SPAR Research Proposal: LLM Agents for Mechanistic Safety Alignment",
      description: "Develop and evaluate a system of LLM-based agents that autonomously detect, explain, and intervene on unsafe mechanisms in language models. This project focuses on creating interpretable AI systems that can identify and mitigate potential safety risks through mechanistic analysis of model behavior.",
      status: "Proposal Submitted",
      year: "July 2025",
      collaborators: ["SPAR community"],
      publications: [],
      areas: ["AI Safety & Mechanistic Interpretability", "Agentic Systems & Reinforcement Learning"],
      image: "SPARai.png"
    },
    {
      title: "Teaching LLM agents to generate better research Ideas",
      description: "Introducing the first reinforcement learning-based controller to optimize LLM-driven research ideation under external, domain-grounded objectives. Current AI ideation tools are static and fail to learn from feedback, leading to repetitive or low-feasibility ideas. Our approach trains a lightweight RL controller to guide LLM-based ideation using external reward functions for novelty, importance, and feasibility.",
      status: "Ongoing",
      year: "June 2025",
      collaborators: ["Algoverse"],
      publications: [],
      areas: ["AI for Scientific Discovery", "Agentic Systems & Reinforcement Learning"],
      image: "agents_for_ideation.jpg"
    },
    {
      title: "Toward Plug-and-Play Protein Design",
      description: "A central challenge to making protein AI models useful for biomedical applications, such as developing new inhibitors for Parkinson’s disease, is that existing models have been optimized for a single objective. However, designing inhibitors for neurodegenerative disease targets requires balancing binding affinity, molecular specificity, metabolic stability, and the ability to cross the blood-brain barrier. Recent work has shown that task vectors can be composed arithmetically to effect modular changes in model behavior. We propose to develop a framework for applying task vector arithmetic to both protein language models (pLLMs) and structure-based predictors such as GEMS, which would enabling plug-and-play optimization for complex biological objectives.",
      status: "Proposal",
      year: "June2025",
      collaborators: ["Adams Center for Parkinson’s Disease Research, Yale School of Medicine"],
      publications: [],
      areas: ["AI for Protein Design"],
      image: "parkinsons.webp"
    },
    {
      title: "AI for Scientific Discovery - Workshop at Yale",
      description: "Building a unified 'AI for Science' community across Yale's schools to catalyze interdisciplinary collaborations between AI researchers and domain scientists. This project positions Yale to lead in AI scientists - systems that autonomously generate and test scientific theories. The workshop introduces agentic AI as a transformative paradigm for scientific reasoning, moving beyond prediction to hypothesis generation and experimental design. Expected outcomes include new interdisciplinary collaborations, grant proposals, and a white paper on emerging opportunities in AI for Science at Yale.",
      status: "In Preparation",
      year: "March 2026",
      collaborators: ["Yale University committee members: Xianjun Dong, Smita Krishnaswamy, Lu Lu, Ying Rex, and Akiko Iwasaki"],
      publications: [],
      areas: ["AI for Scientific Discovery"],
      image: "yaleLibrary.jpg"
    },
    {
      title: "Federated Protein Agents",
      description: "Protein models are often limited by data access, as many high-quality datasets remain siloed due to privacy concerns. We propose federated protein agents, a reinforcement learning systems trained collaboratively across institutions without sharing raw data. Our approach constructs generalized representations of protein-ligand complexes and restricts agent actions to GPO-proposed mutations, enabling transfer learning across proteins or functions. This privacy-preserving framework could unlock the potential of distributed data and establish a new paradigm for collaborative protein modeling.",
      status: "Proposal",
      year: "2025",
      collaborators: ["Biomedical Informatics & Data Science, Yale School of Medicine"],
      publications: [],
      areas: ["AI for Protein Design", "Agentic Systems & Reinforcement Learning"],
      image: "federatedAgents.png"
    },
    {
      title: "Pocket Models of Enzyme Modeling",
      description: "To make protein optimization more efficient and interpretable, we aim to develop explicit pocket models of enzyme function. By factorizing the problem into a few parameters that capture the energy landscape at the binding site, we can reduce model complexity and experimental requirements. This approach enables more efficient optimization by combining gradient-based search in learned representation space with our GPO framework, accelerating the discovery of functional protein variants. Physics-based pocket models also introduce an inductive bias that improves the generalizability of machine learning approaches for protein design.",
      status: "Proposal open",
      year: "2025",
      collaborators: ["Yale program in Physics Engineering, and Biology"],
      publications: [],
      areas: ["AI for Protein Design"],
      image: "pocketModels.png"
    },
    {
      title: "Virtuous Protein Improvement",
      description: "We propose to integrate AI scoring, generative models, and reinforcement learning to create a closed-loop platform for protein design. This system enables high-specificity optimization by balancing binding affinities across homologs and exploiting structural distinctions at the binding site to generate diverse, high-quality candidates. The framework can be applied to antibody design by guiding targeted mutations in complementarity-determining regions (CDRs). The predictive, generative, and optimization components reinforce one another, establishing a new paradigm for intelligent molecular design.",
      status: "Proposal submitted",
      year: "2025",
      collaborators: ["Computational Biology and Bioinformatics, Yale School of Medicine"],
      publications: [],
      areas: ["AI for Protein Design"],
      image: "virtuousCycle.png"
    },
    {
      title: "An AI-first Platform for Inhibitor Design",
      description: "Developing a novel AI-driven platform to design specific enzyme inhibitors for neurodegenerative diseases, starting with Nemo-like kinase (NLK) inhibitors. NLK reduction has been shown to alleviate pathological deficits in mouse models of TDP-43 proteinopathies, making selective NLK inhibition a promising therapeutic strategy for ALS, frontotemporal dementia, Alzheimer's, and Parkinson's disease. Our framework combines equivariant graph neural networks and protein language models with gradient-based optimization to explore broader regions of protein-ligand configuration space. Promising candidates will be tested in cellular models of neurodegeneration at the Lim Lab.",
      status: "Ongoing",
      year: "2025",
      collaborators: ["Lim Lab at Yale School of Medicine"],
      publications: [],
      areas: ["AI for Protein Design"],
      image: "inhibitorPlatform.png"
    },
    {
      title: "Geometric Protein Optimization",
      description: "Proposing Geometric Protein Optimization (GPO), an AI-native framework that fine-tunes the global geometry of proteins by combining a large number of substitutions from diverse locations along the sequence. Traditional approaches focus on substitutions near binding pockets but are hindered by epistatic effects and non-convex optimization landscapes. GPO leverages the strong inverse power-law dependence of electrostatic forces where small adjustments can have large effects on binding affinity. Our empirical investigations reveal that inclusion of distal substitutions leads to a smoother and approximately separable optimization landscape. The BuildUp algorithm, developed based on these findings, navigates this landscape effectively and achieves significant improvements in in silico binding affinity (Kd) across diverse protein-ligand complexes.",
      status: "Paper Submitted",
      year: "2025",
      collaborators: ["ICLS, ETH Zurich"],
      publications: [],
      areas: ["AI for Protein Design"],
      image: "GPO.png"
    },
    {
      title: "A Generalizable GNN Framework For Protein-Ligand Binding Affinity Prediction Through Robust Data Filtering and Language Model Integration",
      description: "Addressing the critical issue of train-test data leakage in computational drug design by proposing PDBbind CleanSplit, a training dataset curated by a novel structure-based filtering algorithm that eliminates data leakage and redundancies. Retraining existing models on CleanSplit caused their benchmark performance to drop to uncompetitive levels, revealing that current performance is largely driven by data leakage. In contrast, our graph neural network model for efficient molecular scoring (GEMS) maintains high benchmark performance when trained on CleanSplit. Leveraging sparse graph modeling of protein-ligand interactions and transfer learning from language models, GEMS generalizes to strictly independent test datasets.",
      status: "Under Review",
      year: "2024",
      collaborators: ["ICLS, ETH Zurich"],
      publications: [],
      areas: ["AI for Protein Design"],
      image: "GEMS2.png"
    },
    {
      title: "Direct Protein Function Optimization with Molecular Dynamics Simulation",
      description: "Current enzyme design methods fail to account for the dynamic conformational changes that underlie catalytic function. To overcome this, DynaProtNet integrates molecular dynamics simulations with gradient-based machine learning to directly optimize protein sequences for enantioselectivity. This enables efficient, targeted design of high-performance biocatalysts for pharmaceutical and sustainable chemistry applications.",      
      status: "Proposal",
      year: "2024",
      collaborators: ["Competence Center for Biocatalysis at ZHAW"],
      publications: [],
      areas: ["AI for Protein Design"],
      image: "dynaProt.png"
    },
    {
      title: "Neuro-Symbolic Phylogenetics",
      description: "Current phylogenetic methods assume mutations occur independently, neglecting the context-dependent nature of molecular evolution. Our approach will create foundational protein evolution models that integrate context-dependent amino acid probabilities from gLLMs, develop neurosymbolic phylogenetic tools for tree inference and ancestral sequence reconstruction, and evaluate these models on both simulated and real-world datasets. This represents a transformative shift in phylogenetic analysis, making ti possible to distinguish different evolutionary paths for the first time.",
      status: "Ongoing",
      year: "2024",
      collaborators: ["Research Centre for Bioinformatics at ICLS"],
      publications: [],
      areas: ["Computational Biology"],
      image: "NeuroSymbolicPhylogenetics.png"
    },
    {
      title: "Learned Optimizers for Neuromorphic Neural Networks",
      description: "We aim to develop a new framework for training spiking neural networks using learned optimizers and neural cellular automata, inspired by local learning in biological systems. By leveraging brain-like, event-driven computation and neuromorphic hardware, our approach seeks to enable energy-efficient, scalable, and biologically plausible machine learning. We will design local learning rules and optimization strategies that allow spiking neural networks to self-organize and adapt, with potential applications in sustainable AI and next-generation neural computing.",
      status: "Ongoing",
      year: "2023",
      collaborators: ["Centre for Cognitive Computing at ICLS"],
      publications: [],
      areas: ["Neuromorphic Computing"],
      image: "learnedOptimizers_neuromorphic.png"
    },
    {
      title: "Next Generation PCR",
      description: "This proposal aimed to improve the speed, sensitivity, and robustness of PCR by applying advanced reinforcement learning (RL) techniques. We proposed to introduce Generative Adversarial Reinforcement Learning (GARL), combining transformer-based generative models with RL optimization, to learn optimal temperature profiles from historical q-PCR data and a PCR simulator. This closed-loop approach would enable faster, more reliable protocols, enhanced generalization through synthetic data, and a validated RL pipeline for experimental biology. It would enable rapid diagnostics, reduce false negatives, and increase testing throughput.",
      status: "SNF proposal", //Practice to Science
      year: "2019",
      collaborators: ["ICLS"],
      publications: [],
      areas: ["Computational Biology"],
      image: "nextGenPCR.png",
      comment: "Unfortunately, this proposal was rejected by SNF, and there was a shortage of PCR tests because processing was too slow, which our approach might have been able to address."
    },
    {
      title: "Model-based Reinforcement Leraning for Enzyme Engineering",
      description: "A novel approach to enzyme engineering that leverages reinforcement learning to reduce laboratory measurements and accelerate the optimization process. This project addresses the central challenge of epistasis in directed evolution by applying model-based RL to sequential decision-making in protein mutation design. The approach uses a dual neural network architecture: a generative policy network that creates mutant libraries and a reward prediction simulator that learns to forecast enzyme activity. By shifting learning from expensive lab measurements to simulation as accuracy improves, this method promises to significantly advance computational approaches in life sciences, following the pattern of RL breakthroughs in Chess and Go.",
      status: "SNF Practice to Science",
      year: "2020",
      collaborators: ["Competence Center for Biocatalysis at ZHAW", "ZHAW Center for AI"],
      publications: [],
      areas: ["Reinforcement Learning", "Biotechnology", "Protein Engineering"],
      image: "researchApproachIllustration.png"
    },
    {
      title: "Deep Learning for Enzyme Engineering",
      description: "We aim to advance enzyme engineering by applying deep learning and transfer learning to optimize enzymes for challenging chemical transformations. Unlike traditional methods that rely on homology or simple sequence features, our approach leverages deep neural networks, structure-based features, and pre-training on large protein datasets. We focus on Halogenase enzymes, valuable for pharmaceutical synthesis.",
      status: "Completed",
      year: "2019-2020",
      collaborators: ["Competence Center for Biocatalysis at ZHAW"],
      publications: [],
      areas: ["AI for Protein Design"],
      comment: "At this time (pre AlphaFold2) the overwhelming opinion was that deep learning would not be useful for protein data. However, as we observed, not only protein function prediciton could be improved, but also transfered between homologous proteins.",
      image: "DIZH2022.png"
    }
  ];

  const researchAreas = [
    "AI for Scientific Discovery",
    "AI for Protein Design",
    "AI Safety & Mechanistic Interpretability",
    "Agentic Systems & Reinforcement Learning",
  ];

  const [selectedArea, setSelectedArea] = React.useState("All");

  const filteredProjects = selectedArea === "All" 
    ? researchProjects 
    : researchProjects.filter(project => {
        // Check if the project has the selected area in its areas array
        return project.areas && project.areas.includes(selectedArea);
      });

  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="section-container">
            <h1 className="text-4xl md:text-5xl font-bold text-accent-blue mb-6">
              Research Projects
            </h1>
            <p className="text-xl text-charcoal/80 mb-12 max-w-3xl">
              Here is a selection of my latest research projects and proposals. 
            </p>

            {/* Research Areas Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-3">
                {["All", ...researchAreas].map((area) => (
                  <button
                    key={area}
                    onClick={() => setSelectedArea(area)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedArea === area
                        ? 'bg-accent-blue text-white'
                        : 'bg-light-gray text-charcoal hover:bg-accent-blue/10'
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            {/* Research Projects */}
            <div className="space-y-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-accent-blue/5 to-dark-red/5 p-8 rounded-lg hover:shadow-md transition-shadow"
                >
                  {/* Header: full width */}
                  <h3 className="text-xl font-semibold text-charcoal mb-2">
                    {project.title}
                  </h3>
                  {/* Content: description/collaborators and image side by side */}
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      {/* Date and tags moved here */}
                      <div className="flex items-center space-x-4 text-sm text-charcoal/60 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {project.areas && project.areas.map((area, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 rounded text-xs font-medium bg-accent-blue/10 text-accent-blue"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-charcoal/80 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      {/* If project.comment exists, display it below the description */}
                      {project.comment && (
                        <p className="text-charcoal/60 italic mb-6">
                          <span className="font-semibold not-italic">Comment:</span> {project.comment}
                        </p>
                      )}
                      {/* Collaborators */}
                      {project.collaborators.length > 0 && (
                        <div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-accent-blue" />
                            <span className="text-sm font-medium text-charcoal">Collaborators:</span>
                            <div className="flex flex-wrap gap-2">
                              {project.collaborators.map((collaborator, idx) => (
                                <span 
                                  key={idx}
                                  className="text-sm bg-white px-3 py-1 rounded border"
                                >
                                  {collaborator}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Publications */}
                      {project.publications.length > 0 && (
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <FileText className="h-4 w-4 text-accent-blue" />
                            <span className="text-sm font-medium text-charcoal">Publications:</span>
                          </div>
                          <div className="space-y-2">
                            {project.publications.map((pub, idx) => (
                              <a 
                                key={idx} 
                                href={pub.url || "#"} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-between bg-white p-3 rounded border hover:shadow-md transition-shadow"
                              >
                                <div>
                                  <p className="font-medium text-charcoal text-sm">{pub.title}</p>
                                  <p className="text-xs text-charcoal/60">{pub.venue} ({pub.year})</p>
                                </div>
                                <ExternalLink className="h-4 w-4 text-accent-blue" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Image on the right - only if image exists */}
                    {project.image && (
                      <div className="flex-shrink-0 self-end">
                        <img 
                          src={`/images/${project.image}`}
                          alt={project.title}
                          className="w-96 h-64 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 bg-accent-blue/5 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                Research Collaboration
              </h2>
              <p className="text-charcoal/80 mb-6">
                I'm always interested in collaborating with researchers, institutions, and 
                organizations working on similar challenges. If any of this sounds interesting to you, don't hesitate to contact me!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Research Interests</h4>
                  <ul className="text-sm text-charcoal/70 space-y-1">
                    <li>• AI for Scientific Discovery</li>
                    <li>• AI Safety & Mechanistic Interpretability</li>
                    <li>• Agentic Systems & Reinforcement Learning</li>
                    <li>• AI for Protein Design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2"></h4>
                  <a 
                    href="/#contact" 
                    className="inline-flex items-center bg-accent-blue hover:bg-accent-blue/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Get in Touch
                  </a>
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

export default Research; 