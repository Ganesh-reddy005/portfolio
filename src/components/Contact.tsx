'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const socials = [
  { name: "Email", icon: Mail, link: "https://mail.google.com/mail/u/0/#inbox?compose=new", handle: "b.ganesh.reddy.05@gmail.com" },
  { name: "GitHub", icon: Github, link: "https://github.com/Ganesh-reddy005", handle: "@Ganesh-reddy005" },
  { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/ganesh-reddy-23724b296/", handle: "Ganesh Reddy" },
  { name: "Instagram", icon: Instagram, link: "https://www.instagram.com/ganesh_reddy_05_/", handle: "@Ganesh Reddy" }
];

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4">
    <div className="max-w-6xl mx-auto">
        
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            I'm currently looking for AI/ML developer internship opportunities. 
            Feel free to reach out if you'd like to connect!
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-slate-900/10 rounded-lg p-6 border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-2"
              >
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <Icon className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{social.name}</h3>
                  <p className="text-slate-400 text-sm">{social.handle}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 pt-8 border-t border-slate-700"
        >
          <p className="text-slate-500">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
          <p className="text-slate-600 text-sm mt-2">
            © 2025 Ganesh Reddy. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
