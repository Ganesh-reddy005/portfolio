'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-4 border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Copyright */}
          <p className="text-slate-400 text-sm mb-2">
            © {currentYear} Ganesh Reddy. All rights reserved.
          </p>
          
          {/* Made with love */}
          <p className="text-slate-500 text-xs flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> using Next.js & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
