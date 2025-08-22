'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20"></div>
      </div>      <div className="relative z-10 container mx-auto px-6 py-8 max-h-screen overflow-y-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
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
          className="max-w-6xl mx-auto"
        >          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-8">
            About Me
          </h1>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Image area */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >                <div className="aspect-square bg-gray-900 rounded-2xl border border-gray-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/ujaan-photo.jpg" 
                    alt="Ujaan Rakshit - Computer Science Student at Georgia Tech" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </motion.div>
            </div>

            {/* Content area */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-white">Who I Am</h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    I'm Ujaan Rakshit, a computer science student at Georgia Tech with a passion for building technology that solves real problems. I enjoy working across different layers of computing — from low-level systems to user-facing applications — and I'm always looking for ways to make technology both powerful and accessible.
                  </p>
                  <p>
                    My approach combines curiosity, problem-solving, and design thinking. Whether I'm developing software, experimenting with new ideas, or collaborating on projects, I focus on creating solutions that are thoughtful, reliable, and meaningful.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* What I Do section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >            <h2 className="text-2xl font-bold mb-6 text-white">What I Do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="font-semibold text-white mb-3">Full-Stack Development</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Building applications that connect robust backends with intuitive interfaces.
                </p>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="font-semibold text-white mb-3">AI & Technology Exploration</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Experimenting with modern tools and models to understand their potential and apply them creatively.
                </p>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="font-semibold text-white mb-3">Problem Solving</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Breaking down complex challenges into clear, effective solutions.
                </p>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="font-semibold text-white mb-3">Design & Communication</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Blending technical work with thoughtful design and clear storytelling.
                </p>
              </div>            </div>
          </motion.div>
        </motion.div>        {/* Copyright Footer */}
        <div className="text-center mt-8 py-4 border-t border-gray-800">
          <p className="text-gray-500 text-sm">© Ujaan Rakshit 2025</p>
        </div>
      </div>
    </div>
  );
}
