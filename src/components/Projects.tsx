'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const projects = [
  {
    title: "dotLearn | AI-Agentic Learning Ecosystem",
    description: "An AI-driven ecosystem featuring a Socratic Interview Coach and ATS-ready builder. Designed to bridge the gap between coding and engineering through adaptive learning paths.",
    tags: ["React", "TypeScript", "AI Agents", "Framer Motion"],
    github: "https://github.com/Ganesh-reddy005/dotLearn",
    live: "https://dot-learn-ten.vercel.app",
    date: "Jan 2026",
    status: "In Development",
  },
  {
    title: "Radiate-AI Python Package",
    description: "The fastest way to add RAG (Retrieval-Augmented Generation) to any Python application. Supports multiple LLMs and vector databases with easy integration.",
    tags: ["Python", "LLMs", "RAG", "PyPI"],
    github: "https://github.com/Ganesh-reddy005/radiate-ai",
    live: "https://pypi.org/project/radiate-ai/",
    date: "Nov 2024",
    status: "Live",
  },
  {
    title: "DSA-Mindset: Socratic AI Agent",
    description: "A headless AI agent that automates daily logic-pattern briefs. Features an adaptive difficulty loop using MongoDB and Llama-3.3 to build engineering intuition rather than memorization.",
    tags: ["Python", "Groq API", "GitHub Actions", "MongoDB"],
    github: "https://github.com/Ganesh-reddy005/dsa-email-agent",
    live: "#",
    date: "Jan 2026",
    status: "Live",
  },
  {
    title: "Fitly - Tailors/Boutique Management System",
    description: "Building a comprehensive SaaS application for managing boutique operations with customer tracking, order management, and analytics dashboard.",
    tags: ["React", "FastAPI", "PostgreSQL", "TypeScript"],
    github: "https://github.com/Ganesh-reddy005/fitly",
    live: "#",
    date: "Oct 2024 - Present",
    status: "In Development",
  },
  {
    title: "BM25 Algorithm from Scratch",
    description: "Implementation of the Best Matching 25 ranking function for information retrieval. Demonstrates deep technical knowledge of search heuristics and NLP fundamentals.",
    tags: ["Python", "NLP", "Information Retrieval", "Algorithms"],
    github: "https://github.com/Ganesh-reddy005/BM25",
    live: "#",
    date: "Nov 2025",
    status: "Completed",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A chronological overview of my recent work and side projects
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-8 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Card */}
                <div className="ml-8 md:ml-20 group">
                  <div className="bg-slate-900/20 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
                    
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1.5 text-slate-400">
                            <Calendar className="w-4 h-4" />
                            {project.date}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === 'In Development' ? 'bg-blue-500/20 text-blue-400' :
                            project.status === 'Live' ? 'bg-emerald-500/20 text-emerald-400' :
                            project.status === 'Ongoing' ? 'bg-amber-500/20 text-amber-400' :
                            'bg-slate-700/50 text-slate-400'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded-lg border border-slate-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">View Code</span>
                      </a>
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
