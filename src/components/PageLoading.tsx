'use client';

import { motion } from 'framer-motion';

interface PageLoadingProps {
  title: string;
}

export function PageLoading({ title }: PageLoadingProps) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"      >
        <div className="w-16 h-16 mx-auto mb-6 border-4 border-gray-700 border-t-white rounded-full animate-spin"></div>
        <h2 className="text-2xl font-heading font-bold text-white mb-2">{title}</h2>
      </motion.div>
    </div>
  );
}

export default PageLoading;
