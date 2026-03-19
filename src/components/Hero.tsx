'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Mail, Github, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern';
import { cn } from '@/lib/utils';

const roles = [
  "CS Student",
  "AI/ML Enthusiast",
  "Full-Stack Developer",
  "Problem Solver",
  "SaaS Builder",
  "Tech Explorer",
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

      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] md:-translate-y-[60%] pointer-events-none select-none z-0 flex items-center justify-center w-full">
        <h1 className="text-[25vw] md:text-[20vw] font-black text-slate-200/90 md:text-slate-200 whitespace-nowrap tracking-tighter">
          PORTFOLIO
        </h1>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Name with Outline Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-[7rem] font-bold mb-6 relative leading-tight"
        >
          <span className="text-slate-900 block md:inline">Hi! I&apos;m </span>
          <span className="text-transparent [-webkit-text-stroke:2px_#0f172a] md:ml-4 tracking-tight">
            Ganesh Reddy
          </span>
        </motion.h1>

        {/* Typing Effect Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-2xl md:text-3xl text-slate-700 h-12 flex items-center justify-center gap-2">
            <span className="text-slate-600">I&apos;m a</span>
            <span className="text-emerald-400 font-semibold min-w-[300px] text-left">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Love building products, not just features. I am an entrepreneur at heart, deeply passionate about solving real-world problems using AI, LLMs, and scalable architectures.
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
            className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border border-slate-200 shadow-md hover:shadow-lg hover:border-slate-300 transition-all flex items-center gap-2 group"
          >
            View My Work
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/1hw-8KqxUgf5Nv4da4efu6HYpdrL7iznh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border border-slate-200 shadow-md hover:shadow-lg hover:border-slate-300 transition-all flex items-center gap-2 group"
          >
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            Download Resume
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-slate-100/80 backdrop-blur-md text-slate-900 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 transition-all flex items-center gap-2 group"
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
            className="px-8 py-4 bg-slate-100/80 backdrop-blur-md text-slate-900 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 transition-all flex items-center gap-2 group"
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

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.2}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </section>
  );
}
