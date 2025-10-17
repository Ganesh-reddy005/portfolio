'use client';

import { motion } from 'framer-motion';

const skillsRow1 = [
  "React", "Next.js", "TypeScript", "JavaScript", "Python", "FastAPI", 
  "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"
];

const skillsRow2 = [
  "PostgreSQL", "MongoDB", "Supabase", "Firebase", "MySQL", "Redis",
  "Git", "GitHub", "GitLab", "Docker", "CI/CD"
];

const skillsRow3 = [
  "Node.js", "Express", "REST APIs", "GraphQL", "Vercel", "Netlify",
  "AWS", "Transformers", "TensorFlow", "NumPy", "Pandas", "Scikit-learn"
];

const stats = [
  { label: "Projects Built", value: "15+" },
  { label: "Technologies", value: "30+" },
  { label: "Years Learning", value: "3+" },
];

const duplicateArray = (arr: string[]) => [...arr, ...arr];

export default function About() {
  return (
    <section id="about" className="min-h-screen py-12 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A passionate third-year CS student building modern web applications and exploring AI/ML. 
            Currently developing Fitly - a boutique management SaaS platform.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Skills Title */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
        >
          Technical Arsenal
        </motion.h3>

        {/* Scrolling Skills Marquee */}
        <div className="space-y-8 overflow-hidden py-4">
          
          {/* Row 1 - Frontend & Languages (Emerald Gradient) */}
          <div className="relative">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-4 whitespace-nowrap will-change-transform"
            >
              {duplicateArray(skillsRow1).map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="px-6 py-3 bg-slate-900/20 backdrop-blur-md rounded-full border border-slate-700/50 font-medium transition-all cursor-pointer hover:shadow-lg hover:shadow-emerald-500/30"
                >
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent hover:from-emerald-300 hover:to-cyan-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Databases & DevOps (Blue Gradient) */}
          <div className="relative">
            <motion.div
              animate={{ x: [-1000, 0] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-4 whitespace-nowrap will-change-transform"
            >
              {duplicateArray(skillsRow2).map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="px-6 py-3 bg-slate-900/20 backdrop-blur-md rounded-full border border-slate-700/50 font-medium transition-all cursor-pointer hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-indigo-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Row 3 - Backend & AI/ML (Amber Gradient) */}
          <div className="relative">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-4 whitespace-nowrap will-change-transform"
            >
              {duplicateArray(skillsRow3).map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="px-6 py-3 bg-slate-900/20 backdrop-blur-md rounded-full border border-slate-700/50 font-medium transition-all cursor-pointer hover:shadow-lg hover:shadow-amber-500/30"
                >
                  <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent hover:from-amber-300 hover:to-orange-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
