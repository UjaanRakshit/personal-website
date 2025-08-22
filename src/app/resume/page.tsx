'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Resume() {
  return (
    <div className="min-h-screen bg-black text-white">      {/* Navigation */}
      <nav className="fixed top-8 left-8 z-50">
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
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 title-glow">
              Resume
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Computer Science Student & Software Developer
            </p>
            <div className="mt-4 text-gray-400">
              <p>ujaan.rakshit@email.com • +1 (555) 123-4567 • LinkedIn: ujaan-rakshit</p>
            </div>
            
            {/* Download Resume Button */}
            <div className="mt-8">
              <a 
                href="/Resume2108.pdf" 
                download="Ujaan_Rakshit_Resume.pdf"
                className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300 text-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume (PDF)
              </a>
            </div>
          </div>

          {/* Resume Content */}
          <div className="space-y-12">
            {/* Education */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-heading font-bold mb-6 text-white">Education</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-white pl-6">
                  <h3 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h3>
                  <p className="text-gray-400 mb-2">University Name • Expected Graduation: May 2026</p>
                  <p className="text-gray-300 mb-2"><strong>GPA:</strong> 3.8/4.0</p>
                  <p className="text-gray-300"><strong>Relevant Coursework:</strong> Data Structures & Algorithms, Software Engineering, Web Development, Database Systems, Computer Networks, Object-Oriented Programming</p>
                </div>
              </div>
            </motion.section>

            {/* Technical Skills */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-900 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-heading font-bold mb-6 text-white">Technical Skills</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Programming Languages</h3>
                  <p className="text-gray-300">JavaScript, TypeScript, Python, Java, C++, HTML5, CSS3</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Frameworks & Libraries</h3>
                  <p className="text-gray-300">React, Next.js, Node.js, Express.js, Flask, Spring Boot</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Tools & Technologies</h3>
                  <p className="text-gray-300">Git, Docker, AWS, Google Cloud, Firebase, Vercel</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Databases</h3>
                  <p className="text-gray-300">MySQL, PostgreSQL, MongoDB, Redis</p>
                </div>
              </div>
            </motion.section>

            {/* Projects */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-900 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-heading font-bold mb-6 text-white">Key Projects</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-white pl-6">
                  <h3 className="text-xl font-semibold text-white">Personal Portfolio Website</h3>
                  <p className="text-gray-400 mb-2">React, Next.js, TypeScript, Tailwind CSS • 2024</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Built responsive portfolio website with modern design and smooth animations</li>
                    <li>• Implemented text scrambling effects and dynamic content loading</li>
                    <li>• Deployed on Vercel with optimized performance and SEO</li>
                  </ul>
                </div>
                <div className="border-l-4 border-white pl-6">
                  <h3 className="text-xl font-semibold text-white">Task Management Application</h3>
                  <p className="text-gray-400 mb-2">React, Node.js, MongoDB, Express.js • 2024</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Developed full-stack web application for project and task management</li>
                    <li>• Implemented user authentication, real-time updates, and data persistence</li>
                    <li>• Created RESTful APIs and responsive frontend interface</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Experience */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gray-900 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-heading font-bold mb-6 text-white">Experience</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-white pl-6">
                  <h3 className="text-xl font-semibold text-white">Software Development Intern</h3>
                  <p className="text-gray-400 mb-2">Tech Company • Summer 2024</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Contributed to web application development using React and Node.js</li>
                    <li>• Collaborated with senior developers on feature implementation and testing</li>
                    <li>• Gained experience in agile development methodologies and version control</li>
                  </ul>
                </div>
                <div className="border-l-4 border-white pl-6">
                  <h3 className="text-xl font-semibold text-white">Freelance Web Developer</h3>
                  <p className="text-gray-400 mb-2">Self-Employed • 2023 - Present</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Developed custom websites for local businesses and personal clients</li>
                    <li>• Provided ongoing maintenance and technical support</li>
                    <li>• Managed project timelines and client communication</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Download Resume */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center"
            >
              <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300">
                Download PDF Resume
              </button>            </motion.section>
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
