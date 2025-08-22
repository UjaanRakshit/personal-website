'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Projects() {
  const personalProjects = [
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking app with beautiful visualizations and location-based forecasts.",
      tech: ["React", "Weather API", "Chart.js", "Geolocation"],
      github: "https://github.com/ujaanrakshit/weather-dashboard",
      demo: "https://weather-app-demo.com"
    },
    {
      title: "Expense Tracker",
      description: "Personal finance management tool with budget tracking, expense categorization, and insights.",
      tech: ["Vue.js", "Local Storage", "Chart.js", "PWA"],
      github: "https://github.com/ujaanrakshit/expense-tracker",
      demo: "https://expense-tracker-demo.com"
    },
    {
      title: "Code Snippet Manager",
      description: "Organize and search your code snippets with syntax highlighting and tagging system.",
      tech: ["Electron", "Node.js", "SQLite", "Monaco Editor"],
      github: "https://github.com/ujaanrakshit/snippet-manager",
      demo: null
    },
    {
      title: "Habit Tracker",
      description: "Simple and effective habit tracking with streaks, statistics, and motivation features.",
      tech: ["React Native", "AsyncStorage", "Expo", "Victory Charts"],
      github: "https://github.com/ujaanrakshit/habit-tracker",
      demo: null
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-red-500/20"></div>
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
            Personal Projects
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            Side projects and experiments that showcase my creativity and passion for building 
            innovative solutions. Each project represents learning, experimentation, and fun!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:shadow-xl group"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                  >
                    <span>🐙</span>
                    <span>GitHub</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                    >
                      <span>🚀</span>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>            ))}
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
