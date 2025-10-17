'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      
      {/* Large animated gradient orbs - MORE VISIBLE */}
      <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-emerald-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-0 w-[700px] h-[700px] bg-blue-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 left-1/3 w-[650px] h-[650px] bg-amber-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(100, 116, 139) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(100, 116, 139) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      ></div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/30 to-slate-950/80"></div>
    </div>
  );
}
