'use client';

import { useEffect, useState } from 'react';

interface HomeContentProps {
  name: string;
  description: string;
}

export function HomeContent({ name, description }: HomeContentProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start showing content immediately when component mounts
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Main Name - Always visible immediately - PERMANENT */}
        <section className="text-center mb-8 min-h-[50vh] flex flex-col justify-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-wider opacity-100">
            {name}
          </h1>
        </section>

        {/* Description appears after component loads */}
        <section className={`text-center mb-12 transition-all duration-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        </section>

        {/* Quick Links Section - Appears around the name */}
        <section className={`flex flex-wrap justify-center gap-6 mb-16 transition-all duration-1000 delay-300 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a
            href="#about"
            className="group px-8 py-4 bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-gray-600"
          >
            <span className="text-white font-medium group-hover:text-gray-300 transition-colors">
              About Me
            </span>
          </a>
          <a
            href="#portfolio"
            className="group px-8 py-4 bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-gray-600"
          >
            <span className="text-white font-medium group-hover:text-gray-300 transition-colors">
              Portfolio
            </span>
          </a>
          <a
            href="#projects"
            className="group px-8 py-4 bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-gray-600"
          >
            <span className="text-white font-medium group-hover:text-gray-300 transition-colors">
              Projects
            </span>
          </a>
          <a
            href="#skills"
            className="group px-8 py-4 bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-gray-600"
          >
            <span className="text-white font-medium group-hover:text-gray-300 transition-colors">
              Skills
            </span>
          </a>
          <a
            href="#blog"
            className="group px-8 py-4 bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-gray-600"
          >
            <span className="text-white font-medium group-hover:text-gray-300 transition-colors">
              Blog
            </span>
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 bg-white text-black rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-200"
          >
            <span className="font-medium">
              Contact
            </span>
          </a>
        </section>

        {/* Feature Cards - Appear last */}
        <section className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000 delay-600 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="p-8 bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-gray-600">
            <div className="w-12 h-12 bg-white rounded-lg mb-4 flex items-center justify-center">
              <span className="text-black text-xl font-bold">💼</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Professional Work
            </h3>
            <p className="text-gray-400">
              Explore my professional projects and contributions to various organizations.
            </p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-gray-600">
            <div className="w-12 h-12 bg-white rounded-lg mb-4 flex items-center justify-center">
              <span className="text-black text-xl font-bold">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Personal Projects
            </h3>
            <p className="text-gray-400">
              Discover the side projects and experiments that showcase my creativity.
            </p>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-gray-600 md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-white rounded-lg mb-4 flex items-center justify-center">
              <span className="text-black text-xl font-bold">📚</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Skills & Learning
            </h3>
            <p className="text-gray-400">
              Learn about my technical skills and ongoing learning journey.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}