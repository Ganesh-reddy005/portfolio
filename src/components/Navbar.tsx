'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail ,GraduationCap} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
];


export default function Navbar() {
  const [activeSection, setActiveSection] = useState('Home');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // If at the very top, always show Home as active
      if (scrollPosition < windowHeight / 2) {
        setActiveSection('Home');
        return;
      }

      // Check other sections
      const sections = [
        { name: 'About', id: 'about' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          
          
          // Consider section active if we're in the top 40% of it
          if (scrollPosition >= sectionTop - windowHeight / 3) {
            setActiveSection(sections[i].name);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();
    setActiveSection(name); // Immediately set active
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      {/* Desktop - Side Dot Navigation */}
      <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col gap-8">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.name;
            const isHovered = hoveredItem === item.name;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="relative flex items-center justify-end gap-3"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Label - appears on hover */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ 
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? 0 : 10
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-14 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/50 whitespace-nowrap"
                >
                  <span className="text-sm font-medium text-white">{item.name}</span>
                </motion.div>

                {/* Dot */}
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href, item.name)}
                  className="relative group cursor-pointer"
                >
                  {/* Outer ring (glow effect when active) */}
                  {isActive && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute inset-0 -m-3 rounded-full border-2 border-emerald-500/50"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Main dot */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.2 : isHovered ? 1 : 0.8,
                    }}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg shadow-emerald-500/50' 
                        : 'bg-slate-600 group-hover:bg-slate-400'
                    }`}
                  />

                  {/* Icon (shows on hover or active) */}
                  {(isActive || isHovered) && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Progress line connecting dots */}
        <div className="absolute right-[6px] top-0 bottom-0 w-[2px] bg-slate-800/50 -z-10"></div>
      </nav>

      {/* Mobile - Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-slate-900/90 backdrop-blur-md border-t border-slate-700/50 px-4 py-3">
          <div className="flex justify-around items-center max-w-md mx-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.name;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href, item.name)}
                  className="flex flex-col items-center gap-1 min-w-[60px]"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.1 : 1,
                    }}
                    className={`relative p-2 rounded-xl transition-all ${
                      isActive 
                        ? 'bg-emerald-500/20' 
                        : 'bg-transparent'
                    }`}
                  >
                    <Icon 
                      className={`w-5 h-5 ${
                        isActive 
                          ? 'text-emerald-400' 
                          : 'text-slate-400'
                      }`}
                    />
                    {isActive && (
                      <motion.div
                        layoutId="activeMobile"
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full"
                      />
                    )}
                  </motion.div>
                  <span className={`text-xs font-medium ${
                    isActive ? 'text-emerald-400' : 'text-slate-500'
                  }`}>
                    {item.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
