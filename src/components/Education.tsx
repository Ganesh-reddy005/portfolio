'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, Trophy, CheckCircle2, Briefcase, Sparkles } from 'lucide-react';

const education = {
  university: "Dayananda Sagar University",
  degree: "B.Tech in Computer Science",
  specialization: "Data Science",
  cgpa: "8.93",
  duration: "2023 - 2027",
  location: "Bangalore, India"
};

const experience = [
  {
    role: "Member",
    org: "NTT DATA Center of Excellence",
    description: "Selected member of the CoE, contributing to advanced technological initiatives and engineering excellence.",
  }
];

const certifications = [
  { name: "Azure Data Fundamentals", org: "Microsoft", date: "Dec 2025" },
  { name: "OCI 2025 Certified Data Science Professional", org: "Oracle", date: "Oct 2025" },
  { name: "AWS Solutions Architecture Job Simulation", org: "Forage", date: "Jul 2025" },
  { name: "British Airways Data Science Job Simulation", org: "Forage", date: "Jul 2025" },
  { name: "Artificial Intelligence Fundamentals", org: "IBM", date: "Dec 2024" },
  { name: "Programming with Python", org: "Internshala Trainings", date: "2024" },
];

const achievements = [
  {
    title: "3rd Place - Quizathon & Project Conclave 2025",
    organizer: "IEEE Computational Intelligence Society, DSU",
    team: "Orion's Codex",
    teammates: ["Amarnath Gowda", "Hemkesh R", "Yogeshvar Vs"],
    description: "AI and tech-driven problem-solving competition",
    year: "2025"
  }
];

export default function Education() {
  return (
    <section id="education" className="min-h-screen py-20 px-4 relative overflow-hidden bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Background</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My academic journey, professional experience, and continuous learning path.
          </p>
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[minmax(0,_1fr)]">
          
          {/* Education Card (Spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all group lg:min-h-[22rem]"
          >
            <div className="absolute -bottom-6 -right-6 opacity-5 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
              <GraduationCap className="w-64 h-64 text-slate-900" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-600 text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  Education
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{education.university}</h3>
                <p className="text-xl text-slate-600 font-medium mb-1">{education.degree}</p>
                <p className="text-slate-500">Specialization in <strong className="text-emerald-600">{education.specialization}</strong></p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                    <Award className="w-4 h-4 text-emerald-500" /> CGPA
                  </span>
                  <span className="text-slate-900 font-bold text-xl">{education.cgpa}<span className="text-slate-400 text-base">/10</span></span>
                </div>
                <div className="flex flex-col gap-1 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                    <Calendar className="w-4 h-4 text-blue-500" /> Timeline
                  </span>
                  <span className="text-slate-900 font-bold text-base mt-auto">{education.duration}</span>
                </div>
                <div className="flex flex-col gap-1 bg-slate-50 p-4 rounded-2xl border border-slate-100 col-span-2 md:col-span-1">
                  <span className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                    <MapPin className="w-4 h-4 text-purple-500" /> Location
                  </span>
                  <span className="text-slate-900 font-bold text-base mt-auto">{education.location}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Card (Dark contrast, Spans 2 rows down) - Placed right on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:row-span-2 relative overflow-hidden rounded-3xl bg-slate-900 p-8 shadow-xl flex flex-col"
          >
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-blue-500/20 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="inline-flex items-center self-start gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-semibold mb-6">
                <Award className="w-4 h-4" />
                Certifications
              </div>
              
              <div className="space-y-5 flex-1 overflow-y-auto pr-2">
                {certifications.map((cert) => (
                  <div key={cert.name} className="group cursor-default">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-slate-100 font-medium leading-snug group-hover:text-blue-400 transition-colors">{cert.name}</h4>
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-1">
                          <span className="text-slate-400 text-sm">{cert.org}</span>
                          <span className="text-slate-500 text-xs font-mono">{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl bg-blue-50/50 border border-blue-100/50 p-8 hover:bg-blue-50 transition-colors group flex flex-col"
          >
            <div className="inline-flex items-center self-start gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-600 text-sm font-semibold mb-6">
              <Briefcase className="w-4 h-4" />
              Experience
            </div>
            
            <div className="space-y-6 flex-1">
              {experience.map((exp) => (
                <div key={exp.org} className="flex flex-col h-full">
                  <h4 className="text-xl font-bold text-slate-900 mb-1 leading-tight">{exp.org}</h4>
                  <p className="text-blue-600 font-medium mb-3">{exp.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievement Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1 relative overflow-hidden rounded-3xl bg-amber-50/50 border border-amber-100/50 p-8 hover:bg-amber-50 transition-colors group flex flex-col"
          >
            <div className="inline-flex items-center self-start gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-600 text-sm font-semibold mb-6">
              <Trophy className="w-4 h-4" />
              Achievements
            </div>

            {achievements.map((achievement) => (
              <div key={achievement.title} className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-slate-900 leading-snug">{achievement.title}</h4>
                </div>
                <p className="text-amber-600 font-medium text-sm mb-3">{achievement.organizer}</p>
                
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{achievement.description}</p>
                
                <div className="mt-auto px-4 py-3 bg-white/60 rounded-xl border border-slate-100/50">
                  <p className="text-slate-500 text-xs mb-1">
                    Team: <strong className="text-slate-900">{achievement.team}</strong>
                  </p>
                  <p className="text-slate-500 text-xs truncate">
                    With {achievement.teammates.join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
