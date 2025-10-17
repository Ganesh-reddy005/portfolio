'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CursorToggle() {
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('cursorEffects');
    if (saved !== null) {
      setIsEnabled(saved === 'true');
    }
  }, []);

  const toggleCursor = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    localStorage.setItem('cursorEffects', String(newState));
    window.dispatchEvent(new CustomEvent('cursorToggle', { detail: newState }));
  };

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      onClick={toggleCursor}
      className={`fixed bottom-8 left-8 z-50 p-3 rounded-full backdrop-blur-md border transition-all group ${
        isEnabled
          ? 'bg-emerald-500/20 border-emerald-500/50 hover:bg-emerald-500/30'
          : 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={isEnabled ? 'Disable cursor effects' : 'Enable cursor effects'}
    >
      <Sparkles
        className={`w-5 h-5 transition-colors ${
          isEnabled ? 'text-emerald-400' : 'text-slate-500'
        }`}
      />
      
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {isEnabled ? 'Cursor Effects: ON' : 'Cursor Effects: OFF'}
      </span>
    </motion.button>
  );
}
