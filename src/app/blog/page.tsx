'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      title: "Building Smooth Animations with Framer Motion",
      excerpt: "Learn how to create buttery smooth animations in React applications using Framer Motion. From basic transitions to complex orchestrations.",
      date: "2024-08-15",
      readTime: "8 min read",
      category: "Development"
    },
    {
      title: "The Future of Web Development: What's Next?",
      excerpt: "Exploring emerging trends in web development, from WebAssembly to edge computing, and how they'll shape the future of the web.",
      date: "2024-08-10",
      readTime: "12 min read",
      category: "Technology"
    },
    {
      title: "Clean Code Principles for React Developers",
      excerpt: "Best practices for writing maintainable and scalable React code. From component design to state management strategies.",
      date: "2024-08-05",
      readTime: "10 min read",
      category: "Best Practices"
    },
    {
      title: "My Journey into Web Development",
      excerpt: "A personal reflection on my path to becoming a developer, the challenges I faced, and the lessons I learned along the way.",
      date: "2024-07-28",
      readTime: "6 min read",
      category: "Personal"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20"></div>
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
            Blog
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            My thoughts on web development, technology trends, and lessons learned from building 
            digital experiences. Sharing knowledge and insights from my journey as a developer.
          </p>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:shadow-xl group cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-indigo-900 text-indigo-300 text-sm rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                  <span className="text-gray-400 text-sm">•</span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-300 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-indigo-400 font-medium group-hover:text-indigo-300 transition-colors">
                    Read More →
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 p-8 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl border border-indigo-800"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to my newsletter for the latest articles, tutorials, and insights on web development.
            </p>
            <div className="flex gap-4 max-w-md">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              />
              <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                Subscribe
              </button>            </div>
          </motion.div>
        </motion.div>

        {/* Copyright Footer */}
        <div className="text-center mt-16 py-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">© Ujaan Rakshit 2025</p>
        </div>
      </div>
    </div>
  );
}
