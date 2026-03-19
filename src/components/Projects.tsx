'use client';

import { motion } from 'framer-motion';
import DisplayCards from '@/components/ui/display-cards';
import { Layers } from 'lucide-react';

const projects = [
  {
    title: "AntiNotes | Ed-Tech for Engineers",
    description: "AntiNotes Focuses on how you think. It is the first Self-Aware Developer Mentor that solves the critical problem of knowledge retention in engineering education.",
    tags: ["React", "TypeScript", "AI Agents", "Framer Motion"],
    github: "https://github.com/Ganesh-reddy005/AntiNotes",
    live: "https://antinotesv1.vercel.app/",
    date: "Dec 2025",
    status: "In Development",
    icon: <Layers className="size-5 text-emerald-500" />
  },
  {
    title: "Radiate-AI Python Package",
    description: "The fastest way to add RAG (Retrieval-Augmented Generation) to any Python application. Supports multiple LLMs and vector databases with easy integration.",
    tags: ["Python", "LLMs", "RAG", "PyPI"],
    github: "https://github.com/Ganesh-reddy005/radiate-ai",
    live: "https://pypi.org/project/radiate-ai/",
    date: "Nov 2024",
    status: "Live",
    icon: <Layers className="size-5 text-blue-500" />
  },
  {
    title: "DSA-Mindset: Socratic AI Agent",
    description: "A headless AI agent that automates daily logic-pattern briefs. Features an adaptive difficulty loop using MongoDB and Llama-3.3 to build engineering intuition rather than memorization.",
    tags: ["Python", "Groq API", "GitHub Actions", "MongoDB"],
    github: "https://github.com/Ganesh-reddy005/dsa-email-agent",
    live: "#",
    date: "Jan 2026",
    status: "Live",
    icon: <Layers className="size-5 text-purple-500" />
  },
  {
    title: "Fitly - Tailors/Boutique Management System",
    description: "Building a comprehensive SaaS application for managing boutique operations with customer tracking, order management, and analytics dashboard.",
    tags: ["React", "FastAPI", "PostgreSQL", "TypeScript"],
    github: "https://github.com/Ganesh-reddy005/fitly",
    live: "#",
    date: "Oct 2024 - Present",
    status: "In Development",
    icon: <Layers className="size-5 text-amber-500" />
  },
  {
    title: "BM25 Algorithm from Scratch",
    description: "Implementation of the Best Matching 25 ranking function for information retrieval. Demonstrates deep technical knowledge of search heuristics and NLP fundamentals.",
    tags: ["Python", "NLP", "Information Retrieval", "Algorithms"],
    github: "https://github.com/Ganesh-reddy005/BM25",
    live: "#",
    date: "Nov 2025",
    status: "Completed",
    icon: <Layers className="size-5 text-rose-500" />
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A stacked overview of my recent work and side projects. Hover to explore!
          </p>
        </motion.div>

        {/* Interactive Stacked Cards */}
        <div className="flex justify-center items-center py-10">
            <DisplayCards cards={projects} />
        </div>
      </div>
    </section>
  );
}
