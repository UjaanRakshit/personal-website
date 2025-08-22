'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TextScramble } from '@/components/TextScramble';

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [hasVisitedBefore, setHasVisitedBefore] = useState(false);
  const [showContactButtons, setShowContactButtons] = useState(false);

  const yourName = "Ujaan Rakshit";
  const yourDescription = [
    "Georgia Tech Computer Science student expected to graduate in 2027.",
    "Currently seeking internship opportunities for Summer 2026.",
    "Passionate about building innovative software solutions and exploring cutting-edge technologies."
  ];

  useEffect(() => {
    // Always lock scrolling - no scroll bar needed
    document.body.style.overflow = 'hidden';

    // Check if user has visited before in this session
    const hasSeenScramble = sessionStorage.getItem('hasSeenScramble');
    
    if (hasSeenScramble) {
      // Skip scrambling and show content immediately
      setHasVisitedBefore(true);
      setLoadingComplete(true);
      setShowContent(true);
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleTextComplete = () => {
    // Mark that user has seen the scramble effect
    sessionStorage.setItem('hasSeenScramble', 'true');
    
    setTimeout(() => {
      setLoadingComplete(true);
      // Start showing content after a brief delay
      setTimeout(() => {
        setShowContent(true);
      }, 200);
    }, 500);
  };

  return (
    <div className="h-screen bg-black text-white relative overflow-hidden flex flex-col">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
      </div>

      {/* Main content - always present - Full height container */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-12 py-8 max-w-4xl mx-auto">
        {/* Main Name - Centered */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white tracking-tight title-glow">
            {hasVisitedBefore || loadingComplete ? (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {yourName}
              </motion.span>
            ) : (
              <TextScramble
                text={yourName}
                onComplete={handleTextComplete}
                className=""
              />
            )}
          </h1>
        </div>

        {/* Description - Subtle and minimal */}
        <motion.div
          className="text-center mb-8 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="text-sm md:text-base text-gray-400 leading-snug font-normal space-y-1">
            {yourDescription.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </motion.div>

        {/* Navigation Menu - Clean vertical layout with original navigation */}
        <motion.nav
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          {[
            { name: 'About Me', href: '/about' },
            { name: 'Portfolio', href: '/portfolio' },
            { name: 'Skills', href: '/skills' },
            { name: 'Resume', href: '/Resume2108.pdf' }
          ].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
            >
              {item.name === 'Resume' ? (
                <a 
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl md:text-4xl lg:text-5xl font-display font-normal text-white hover:text-gray-300 transition-colors duration-300 tracking-tight leading-tight block text-center"
                >
                  {item.name}
                </a>
              ) : (
                <Link 
                  href={item.href}
                  className="text-3xl md:text-4xl lg:text-5xl font-display font-normal text-white hover:text-gray-300 transition-colors duration-300 tracking-tight leading-tight block text-center"
                >
                  {item.name}
                </Link>
              )}
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="flex flex-col items-center"
          >
            {!showContactButtons ? (
              <button
                onClick={() => setShowContactButtons(true)}
                className="text-3xl md:text-4xl lg:text-5xl font-display font-normal text-white hover:text-gray-300 transition-colors duration-300 tracking-tight leading-tight block text-center"
              >
                Contact
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center space-y-3"
              >
                <div className="flex space-x-6">
                  <motion.a
                    href="mailto:ujaanrakshit@gmail.coms"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors border border-gray-700 hover:border-gray-600"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-sm font-medium">Email</span>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/ujaan-rakshit-18508b281/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors border border-gray-700 hover:border-gray-600"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </motion.a>

                  <motion.a
                    href="https://github.com/ujaanrakshit"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors border border-gray-700 hover:border-gray-600"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">GitHub</span>
                  </motion.a>
                </div>

                <button
                  onClick={() => setShowContactButtons(false)}
                  className="text-gray-400 hover:text-white transition-colors text-sm mt-2"
                >
                  ← Back
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.nav>

        {/* Copyright Footer */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <p className="text-gray-500 text-sm">© Ujaan Rakshit 2025</p>
        </motion.div>
      </div>
    </div>
  );
}
