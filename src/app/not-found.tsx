'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-orange-500/20"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl md:text-9xl font-display font-black text-white mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-300 mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          
          <Link href="/">
            <motion.div
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-xl hover:bg-gray-200 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>←</span>
              <span>Back to Home</span>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
