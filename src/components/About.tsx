'use client';

import { motion } from 'framer-motion';

const skills = [
  { category: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "C", "SQL"] },
  { category: "Frontend", items: ["React", "HTML/CSS", "Tailwind CSS","React"] },
  { category: "Backend", items: ["FastAPI", "MySQL", "PostgreSQL"] },
  { category: "AI/ML", items: ["Scikit-learn", "Pandas", "NumPy", "LangChain", "Gen AI"] },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 relative">

      <div className="max-w-6xl mx-auto">


        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            3rd year CS student at <span className="text-emerald-500 font-semibold">Dayananda Sagar University</span> with 
            a <span className="text-emerald-500 font-semibold">8.93 CGPA</span>. Expected graduation in 2027.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/10 backdrop-blur-md rounded-lg p-6 border border-slate-700/80 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-2 cursor-pointer hover:bg-slate-900/70"
>
                  <h3 className="text-xl font-bold text-emerald-500 mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-emerald-500">8.93</div>
            <div className="text-slate-400 mt-2">CGPA</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-500">3rd</div>
            <div className="text-slate-400 mt-2">Year</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-500">10+</div>
            <div className="text-slate-400 mt-2">Projects</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-500">2027</div>
            <div className="text-slate-400 mt-2">Graduation</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
