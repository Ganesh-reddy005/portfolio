'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Fitly - Tailor Shop Management SaaS",
    description: "Full-stack SaaS platform for boutiques/tailors with owner's view, customer tracking, and order management. Solving real problems in the tailoring industry.",
    tech: ["React", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL"],
    github: "#",
    live: "#"
  },
  {
    title: "MCQ Generator",
    description: "Gen AI application that generates MCQs from uploaded files. Users can specify difficulty and number of questions.",
    tech: ["Python", "LangChain", "Streamlit", "Gen AI"],
    github: "#",
    live: "#"
  },
  {
    title: "Web Scraping - Job Analysis",
    description: "Scraped 12,000+ job listings using Beautiful Soup. Cleaned and preprocessed data for visualization and analysis.",
    tech: ["Python", "Beautiful Soup", "Pandas", "Data Visualization"],
    github: "#",
    live: "#"
  },
  {
    title: "British Airways ML Model",
    description: "Analyzed flight data to estimate lounge eligibility using decision trees and XGBoost. Virtual internship project from Forage.",
    tech: ["Python", "XGBoost", "Decision Trees", "Scikit-learn"],
    github: "#",
    live: "#"
  },
  {
    title: "NYC Taxi Fare Prediction",
    description: "Supervised ML model for taxi fare prediction with feature engineering and model comparison to find best fit.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    github: "#",
    live: "#"
  },
  {
    title: "Telegram Astrology Bot",
    description: "Python-based astrology bot using external API for data retrieval and user interaction.",
    tech: ["Python", "Telegram API", "REST APIs"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
    <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-400">10+ projects spanning ML/AI, full-stack development, and data science</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          
            className="bg-slate-900/10 rounded-lg p-6 border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-400 hover:text-emerald-500 transition-colors text-sm"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-400 hover:text-emerald-500 transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
