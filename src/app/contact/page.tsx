'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20"></div>
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
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-8">
            Get In Touch
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl text-gray-300 mb-8">
                I'm always interested in new opportunities, collaborations, and interesting projects. 
                Let's connect and see how we can work together!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
                  <span className="text-2xl">📧</span>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-400">hello@ujaanrakshit.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
                  <span className="text-2xl">💼</span>
                  <div>
                    <h3 className="font-semibold text-white">LinkedIn</h3>
                    <p className="text-gray-400">linkedin.com/in/ujaanrakshit</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
                  <span className="text-2xl">🐙</span>
                  <div>
                    <h3 className="font-semibold text-white">GitHub</h3>
                    <p className="text-gray-400">github.com/ujaanrakshit</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="p-8 bg-gray-900 rounded-xl border border-gray-800">
                <h2 className="text-2xl font-bold mb-6 text-white">Send a Message</h2>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Send Message
                  </button>
                </form>              </div>
            </div>
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
