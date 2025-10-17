'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, Trophy, CheckCircle2 } from 'lucide-react';

const education = {
  university: "Dayananda Sagar University",
  degree: "B.Tech in Computer Science",
  specialization: "Data Science",
  cgpa: "8.93",
  duration: "2023 - 2027",
  location: "Bangalore, India"
};

const certifications = [
  { name: "Artificial Intelligence Fundamentals", org: "IBM Cloud", icon: "🤖" },
  { name: "Python Programming (6 weeks)", org: "Internshala Trainings", icon: "🐍" },
  { name: "Power BI Workshop (2 Days)", org: "Dayananda Sagar University", icon: "📊" },
  { name: "NumPy", org: "Great Learning", icon: "🔢" },
  { name: "HTML, CSS, JavaScript", org: "Infosys SpringBoard", icon: "🌐" },
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
    <section id="education" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
        </motion.div>

        {/* Education Card - Smaller */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 backdrop-blur-md rounded-xl p-6 border border-emerald-500/30 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{education.university}</h3>
                  <p className="text-base text-emerald-400 font-semibold">{education.degree}</p>
                  <p className="text-slate-300 text-sm">Specialization in {education.specialization}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 bg-slate-900/30 rounded-lg p-3">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <div>
                    <p className="text-slate-400 text-xs">CGPA</p>
                    <p className="text-white font-bold text-lg">{education.cgpa}/10</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/30 rounded-lg p-3">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <div>
                    <p className="text-slate-400 text-xs">Duration</p>
                    <p className="text-white font-semibold text-sm">{education.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/30 rounded-lg p-3">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <div>
                    <p className="text-slate-400 text-xs">Location</p>
                    <p className="text-white font-semibold text-sm">{education.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid Layout: Certifications (Left) + Achievement (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          
          {/* Certifications - Compact List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
            <div className="bg-slate-900/10 backdrop-blur-md rounded-xl p-6 border border-slate-700/50">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 group cursor-pointer"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{cert.icon}</span>
                        <h4 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">
                          {cert.name}
                        </h4>
                      </div>
                      <p className="text-slate-400 text-sm">{cert.org}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievement */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Recent Achievement</h3>
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-md rounded-xl p-6 border border-amber-500/30 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start gap-2 mb-1 flex-wrap">
                        <h4 className="text-lg font-bold text-white">{achievement.title}</h4>
                        <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-semibold rounded-full">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-amber-400 text-sm font-semibold mb-2">{achievement.organizer}</p>
                      <p className="text-slate-300 text-sm mb-3">{achievement.description}</p>
                      
                      <div className="bg-slate-900/30 rounded-lg p-3">
                        <p className="text-slate-400 text-xs mb-1">
                          Team: <span className="text-emerald-400 font-semibold">{achievement.team}</span>
                        </p>
                        <p className="text-slate-500 text-xs">
                          Teammates: {achievement.teammates.join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
