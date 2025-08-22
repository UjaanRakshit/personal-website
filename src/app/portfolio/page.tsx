'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Portfolio() {  const projects = [
    {
      title: "Photo Organizer",
      description: "AI system that clusters and captions images using CLIP embeddings and FAISS search, with face recognition/clustering for a personal timeline. Drag-and-drop Streamlit UI supports grouping by objects or people.",
      tech: ["Python", "CLIP", "FAISS", "Streamlit", "Face Recognition"],
      status: "In Development",
      date: "July 2025"
    },
    {
      title: "JurassIQ | Hacklytics",
      description: "AI-powered archaeology project from Hacklytics. Trained on 100k+ synthetic and 5k real fossil images; achieved ~99% accuracy for fossil identification/valuation.",
      tech: ["Computer Vision", "Next.js", "ONNX/CLIP", "Python"],
      status: "Demo",
      date: "March 2025"
    },
    {
      title: "What is the Title of this Paper?",
      description: "Research paper on arXiv: Python-based approach to automate Knights-and-Knaves reasoning. Earned 3rd prize at the InnoSphere International Research & Tech Conference.",
      tech: ["Research", "Algorithms", "Logic", "Python"],
      status: "Published",
      date: "Dec 2022 – Jun 2023"
    },
    {
      title: "Personal Portfolio Website",
      description: "Custom-built personal portfolio with advanced text scrambling animations, fluid UI components, and responsive design. Features smooth transitions and professional navigation.",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      status: "Live",
      date: "2025"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-blue-500/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-white hover:text-gray-300 transition-all duration-300"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-110">
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="font-medium">Back to Home</span>
          </Link>
        </motion.div>

        {/* Page content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-8">
            Portfolio
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            A collection of my professional work and contributions to various organizations. 
            Each project represents a unique challenge and innovative solution.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-400">{project.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ml-4 ${
                    project.status === 'Live' 
                      ? 'bg-green-900 text-green-300' 
                      : project.status === 'Demo'
                      ? 'bg-blue-900 text-blue-300'
                      : project.status === 'Published'
                      ? 'bg-purple-900 text-purple-300'
                      : 'bg-yellow-900 text-yellow-300'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Copyright Footer */}
        <div className="text-center mt-16 py-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">© Ujaan Rakshit 2025</p>
        </div>
      </div>
    </div>
  );
}
