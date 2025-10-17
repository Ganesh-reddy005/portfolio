'use client';

import { useEffect, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  id: number;
}

export default function CustomCursor() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isEnabled, setIsEnabled] = useState(true);

  // Check localStorage and listen for toggle events
  useEffect(() => {
    const saved = localStorage.getItem('cursorEffects');
    if (saved !== null) {
      setIsEnabled(saved === 'true');
    }

    const handleToggle = (e: CustomEvent) => {
      setIsEnabled(e.detail);
    };

    window.addEventListener('cursorToggle', handleToggle as EventListener);

    return () => {
      window.removeEventListener('cursorToggle', handleToggle as EventListener);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return; // Don't create particles if disabled

    let particleId = 0;

    const createParticle = (e: MouseEvent) => {
      const newParticle = {
        x: e.clientX,
        y: e.clientY,
        id: particleId++,
      };

      setParticles((prev) => [...prev, newParticle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 800);
    };

    let lastTime = 0;
    const handleMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime > 30) {
        createParticle(e);
        lastTime = now;
      }
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [isEnabled]); // Re-run when isEnabled changes

  if (!isEnabled) return null; // Don't render anything if disabled

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_4px_rgba(52,211,153,0.6)]"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            transform: 'translate(-50%, -50%)',
            animation: 'particle-fade 800ms ease-out forwards',
          }}
        />
      ))}
    </div>
  );
}
