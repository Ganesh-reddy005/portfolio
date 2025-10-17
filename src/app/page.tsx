'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import AnimatedBackground from '@/components/AnimatedBackground';
import CustomCursor from '@/components/CustomCursor';
import Education from '@/components/Education';
import CursorToggle from '@/components/CursorToggle';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';




export default function Home() {
  useEffect(() => {
    // Force scroll to top on page load/refresh
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollProgress />  {/* ADD THIS */}
      <AnimatedBackground />
      <CustomCursor />
      <CursorToggle />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />  {/* ADD THIS */}
    </>
  );
}  
