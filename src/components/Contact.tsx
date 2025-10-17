'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Terminal, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const contacts = [
  { name: "Email", icon: Mail, link: "https://mail.google.com/mail/u/0/#inbox?compose=new", handle: "b.ganesh.reddy.05@gmail.com", command: "email" },
  { name: "GitHub", icon: Github, link: "https://github.com/Ganesh-reddy005", handle: "@Ganesh-reddy005", command: "github" },
  { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/ganesh-reddy-23724b296/", handle: "Ganesh Reddy", command: "linkedin" },
  { name: "Instagram", icon: Instagram, link: "https://www.instagram.com/ganesh_reddy_05_/", handle: "@ganesh_reddy_05_", command: "instagram" },
];

export default function Contact() {
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "Welcome to Ganesh&apos;s Terminal v1.0",
    "Type 'help' to see available commands",
    " ",
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    const newLines = [...terminalLines, `visitor@ganesh:~$ ${command}`];
  
    if (cmd === "help") {
      newLines.push("Available commands:");
      newLines.push("  help      - Show this help message");
      newLines.push("  about     - About me");
      newLines.push("  contact   - Show all contact methods");
      newLines.push("  email     - Open email client");
      newLines.push("  github    - Visit GitHub profile");
      newLines.push("  linkedin  - Visit LinkedIn profile");
      newLines.push("  instagram - Visit Instagram profile");
      newLines.push("  clear     - Clear terminal");
      newLines.push(" ");
    } else if (cmd === "about") {
      newLines.push("Hi! I&apos;m Ganesh Reddy");
      newLines.push("3rd Year CS Student | AI/ML Enthusiast | Full-Stack Developer");
      newLines.push("Currently building cool stuff with React, FastAPI, and AI 🚀");
      newLines.push(" ");
    } else if (cmd === "contact") {
      newLines.push("📧 Email:     b.ganesh.reddy.05@gmail.com");
      newLines.push("💻 GitHub:    @Ganesh-reddy005");
      newLines.push("💼 LinkedIn:  Ganesh Reddy");
      newLines.push("📸 Instagram: @ganesh_reddy_05_");
      newLines.push(" ");
    } else if (cmd === "clear") {
      setTerminalLines([
        "Welcome to Ganesh&apos;s Terminal v1.0",
        "Type 'help' to see available commands",
        " ",
      ]);
      setCurrentInput("");
      return;
    } else if (cmd === "email") {
      newLines.push("Opening email client...");
      setTerminalLines(newLines);
      setTimeout(() => {
        window.open("https://mail.google.com/mail/u/0/#inbox?compose=new", "_blank");
        setTerminalLines([...newLines, "✓ Email client opened", " "]);
      }, 1500);
      setCurrentInput("");
      return;
    } else if (cmd === "github") {
      newLines.push("Redirecting to GitHub...");
      setTerminalLines(newLines);
      setTimeout(() => {
        window.open("https://github.com/Ganesh-reddy005", "_blank");
        setTerminalLines([...newLines, "✓ Opened in new tab", " "]);
      }, 1500);
      setCurrentInput("");
      return;
    } else if (cmd === "linkedin") {
      newLines.push("Redirecting to LinkedIn...");
      setTerminalLines(newLines);
      setTimeout(() => {
        window.open("https://www.linkedin.com/in/ganesh-reddy-23724b296/", "_blank");
        setTerminalLines([...newLines, "✓ Opened in new tab", " "]);
      }, 1500);
      setCurrentInput("");
      return;
    } else if (cmd === "instagram") {
      newLines.push("Redirecting to Instagram...");
      setTerminalLines(newLines);
      setTimeout(() => {
        window.open("https://www.instagram.com/ganesh_reddy_05_/", "_blank");
        setTerminalLines([...newLines, "✓ Opened in new tab", " "]);
      }, 1500);
      setCurrentInput("");
      return;
    } else if (cmd === "") {
      // Empty command, just add a blank line
    } else {
      newLines.push(`Command not found: ${command}`);
      newLines.push("Type 'help' for available commands");
      newLines.push(" ");
    }
  
    setTerminalLines(newLines);
    setCurrentInput("");
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(currentInput);
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Feel free to reach out through any platform. Or try the terminal below!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left - Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-6">Quick Connect</h3>
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.name}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 bg-slate-900/20 backdrop-blur-md rounded-lg p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-400">{contact.name}</p>
                    <p className="text-white font-medium">{contact.handle}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Right - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-950/80 backdrop-blur-md rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-slate-900/80 px-4 py-3 border-b border-slate-700/50 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 flex items-center justify-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-400 text-sm font-mono">ganesh@terminal</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm h-[400px] overflow-y-auto">
                {terminalLines.map((line, index) => (
                  <div key={index} className="text-emerald-400 mb-1">
                    {line}
                  </div>
                ))}
                
                {/* Input Line */}
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                  <span className="text-emerald-400">visitor@ganesh:~$</span>
                  <input
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    className="flex-1 bg-transparent text-emerald-400 outline-none"
                    autoFocus
                  />
                  <span className={`w-2 h-4 bg-emerald-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                </form>
              </div>
            </div>

            <p className="text-slate-500 text-sm mt-4 text-center">
              💡 Tip: Try typing &quot;help&quot; in the terminal
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
