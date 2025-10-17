'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const projects = [
  {
    title: "Fitly - Tailors/Boutique Management System",
    description: "Building a comprehensive SaaS application for managing boutique operations with customer tracking, order management, and analytics dashboard.",
    tags: ["React", "FastAPI", "PostgreSQL", "TypeScript"],
    github: "https://github.com/yourusername/fitly",
    live: "#",
    date: "Oct 2024 - Present",
    status: "In Development",
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website with smooth animations and interactive elements built with Next.js and Framer Motion.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "#",
    date: "Oct 2024",
    status: "Live",
  },
  {
    title: "ML Model Experiments",
    description: "Collection of machine learning experiments using supervised and unsupervised learning techniques on various datasets.",
    tags: ["Python", "Scikit-learn", "NumPy", "Matplotlib"],
    github: "https://github.com/yourusername/ml-experiments",
    live: "#",
    date: "Jul 2024",
    status: "Ongoing",
  },
  {
    title: "Data Analysis Dashboard",
    description: "Interactive data visualization dashboard for analyzing datasets with various ML algorithms and insightful visualizations.",
    tags: ["Python", "Pandas", "Plotly", "Scikit-learn"],
    github: "https://github.com/yourusername/data-dashboard",
    live: "#",
    date: "Aug 2024",
    status: "Completed",
  },
 
  {
    title: "MCQ Generator using GenAI",
    description: "Built an AI-powered MCQ generator using Streamlit and LangChain to automatically create multiple-choice questions from text input.",
    tags: ["Python", "Streamlit", "LangChain", "GenAI"],
    github: "https://github.com/yourusername/mcq-generator",
    live: "#",
    date: "Sep 2024",
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
