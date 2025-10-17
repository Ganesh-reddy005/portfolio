'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Mail, Github, Sparkles,Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const roles = [
  "CS Student",
  "AI/ML Enthusiast", 
  "Full-Stack Developer",
  "Problem Solver",
  "SaaS Builder",
  "Tech Explorer",
];

// Floating code elements with positions
const floatingElements = [
  { text: '{ React }', x: 10, y: 20, color: 'text-emerald-400', duration: 5 },
  { text: '<Python />', x: 85, y: 15, color: 'text-blue-400', duration: 4 },
  { text: '// AI/ML', x: 15, y: 70, color: 'text-purple-400', duration: 6 },
  { text: 'FastAPI()', x: 80, y: 65, color: 'text-green-400', duration: 5.5 },
  { text: 'TypeScript', x: 5, y: 45, color: 'text-blue-500', duration: 7 },
  { text: '{ PostgreSQL }', x: 90, y: 40, color: 'text-indigo-400', duration: 6.5 },
  { text: '<Next.js />', x: 12, y: 85, color: 'text-slate-300', duration: 5 },
  { text: 'Tailwind', x: 88, y: 80, color: 'text-cyan-400', duration: 4.5 },
  { text: '[ MongoDB ]', x: 20, y: 30, color: 'text-green-500', duration: 6 },
  { text: 'Git', x: 75, y: 25, color: 'text-orange-400', duration: 5.5 },
  { text: '{ ML }', x: 8, y: 55, color: 'text-purple-500', duration: 7 },
  { text: 'Docker', x: 92, y: 50, color: 'text-blue-600', duration: 5 },
  { text: 'API', x: 18, y: 60, color: 'text-amber-400', duration: 6.5 },
  { text: '<HTML />', x: 82, y: 70, color: 'text-red-400', duration: 5.5 },
  { text: 'CSS3', x: 10, y: 75, color: 'text-pink-400', duration: 6 },
  { text: '{ Node }', x: 85, y: 30, color: 'text-green-600', duration: 7 },
  { text: 'Pandas', x: 15, y: 40, color: 'text-blue-300', duration: 5.5 },
  { text: 'NumPy', x: 78, y: 45, color: 'text-yellow-400', duration: 6 },
  { text: '() => {}', x: 5, y: 65, color: 'text-teal-400', duration: 5 },
  { text: 'Redux', x: 88, y: 55, color: 'text-purple-600', duration: 6.5 },
  { text: 'LangChain', x: 12, y: 50, color: 'text-emerald-500', duration: 7 },
  { text: '<Firebase />', x: 82, y: 35, color: 'text-yellow-500', duration: 5.5 },
  { text: 'Scikit-learn', x: 8, y: 80, color: 'text-orange-500', duration: 6 },
  { text: '{ Streamlit }', x: 90, y: 60, color: 'text-red-500', duration: 5 },
  { text: 'JWT', x: 20, y: 25, color: 'text-cyan-500', duration: 6.5 },
  { text: 'REST', x: 75, y: 75, color: 'text-lime-400', duration: 5.5 },
  { text: '[ Linux ]', x: 10, y: 35, color: 'text-yellow-300', duration: 7 },
  { text: 'Vite', x: 85, y: 85, color: 'text-purple-300', duration: 5 },
  { text: 'Jupyter', x: 5, y: 28, color: 'text-orange-300', duration: 6 },
  { text: '<GraphQL />', x: 92, y: 20, color: 'text-pink-500', duration: 6.5 },
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typing effect
  useEffect(() => {
    const role = roles[currentRole];
    
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < role.length) {
          setDisplayedText(role.substring(0, displayedText.length + 1));
          setTypingSpeed(100);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(role.substring(0, displayedText.length - 1));
          setTypingSpeed(50);
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRole, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pb-20">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name with Animated Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative"
        >
          <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Hi, I'm Ganesh Reddy
          </span>
        </motion.h1>

        {/* Typing Effect Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-2xl md:text-3xl text-slate-300 h-12 flex items-center justify-center gap-2">
            <span className="text-slate-400">I'm a</span>
            <span className="text-emerald-400 font-semibold min-w-[300px] text-left">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Building modern web applications with React, FastAPI, and AI. 
          Currently pursuing B.Tech in Computer Science at Dayananda Sagar University.
        </motion.p>

        {/* CTA Buttons */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
  className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
>
  <motion.a
    href="#projects"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all flex items-center gap-2 group"
  >
    View My Work
    <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
  </motion.a>

  <motion.a
  href="https://drive.google.com/file/d/1qN4hwkz8Hs5k6WApQFDvpwutPRm3QvY7/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all flex items-center gap-2 group"
  >
    <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
    Download Resume
  </motion.a>

  <motion.a
    href="#contact"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 bg-slate-800/50 backdrop-blur-md text-white font-semibold rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all flex items-center gap-2 group"
  >
    <Mail className="w-5 h-5" />
    Get In Touch
  </motion.a>

  <motion.a
    href="https://github.com/Ganesh-reddy005"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 bg-slate-800/50 backdrop-blur-md text-white font-semibold rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all flex items-center gap-2 group"
  >
    <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
    GitHub
  </motion.a>
</motion.div>


        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-600"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* 30 Floating Code Elements */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className="absolute opacity-25 pointer-events-none"
          style={{ left: `${element.x}%`, top: `${element.y}%` }}
        >
          <motion.div
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: element.duration, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2
            }}
            className={`${element.color} font-mono text-sm md:text-base`}
          >
            {element.text}
          </motion.div>
        </div>
      ))}
    </section>
  );
}
