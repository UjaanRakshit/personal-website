'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 85 },
        { name: "Dart", level: 80 },
        { name: "Java", level: 82 }
      ]
    },
    {
      title: "AI/ML Frameworks & Tools",
      icon: "🤖",
      skills: [
        { name: "PyTorch", level: 90 },
        { name: "TensorFlow", level: 88 }
      ]
    },
    {
      title: "Data Handling",
      icon: "📊",
      skills: [
        { name: "Protobuf", level: 85 },
        { name: "Numpy", level: 92 },
        { name: "Pandas", level: 90 }
      ]
    },
    {
      title: "Other Tools",
      icon: "🛠️",
      skills: [
        { name: "CMake", level: 78 },
        { name: "Nix", level: 75 },
        { name: "Streamlit", level: 88 },
        { name: "Next.js", level: 90 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle color overlay for consistency */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10 animate-gradient"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}          animate={{ opacity: 1, x: 0 }}
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
        >          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-8">
            Programming Skills
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            My technical skillset spans across programming languages, AI/ML frameworks, data handling tools, 
            and modern development technologies. Here's what I work with:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (categoryIndex * 0.2) }}
                className="p-6 bg-gray-900 rounded-xl border border-gray-800"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                  <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    // Convert percentage to dots (out of 5 dots)
                    const totalDots = 5;
                    const filledDots = Math.round((skill.level / 100) * totalDots);
                    
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.6 + (categoryIndex * 0.2) + (skillIndex * 0.1) 
                        }}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <div className="flex gap-1">
                          {[...Array(totalDots)].map((_, dotIndex) => (
                            <motion.div
                              key={dotIndex}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ 
                                duration: 0.2, 
                                delay: 0.8 + (categoryIndex * 0.2) + (skillIndex * 0.1) + (dotIndex * 0.05)
                              }}
                              className={`w-3 h-3 rounded-full ${
                                dotIndex < filledDots 
                                  ? 'bg-gradient-to-r from-cyan-400 to-teal-400' 
                                  : 'bg-gray-700 border border-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
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
