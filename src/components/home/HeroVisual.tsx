"use client";

import { useReducedMotion } from "framer-motion";

export function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="hero-orbital relative w-full aspect-square max-w-[500px] mx-auto" style={{ perspective: '800px' }} aria-hidden="true">
      {/* Ambient glow behind entire system */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.04) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Center glow node */}
      <div
        className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-white/80"
        style={{
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 20px 8px rgba(255,255,255,0.15), 0 0 60px 20px rgba(255,255,255,0.05)',
          animation: prefersReducedMotion ? 'none' : 'center-glow-pulse 4s ease-in-out infinite',
        }}
      />

      {/* Radiating lines (4 directions) */}
      {[0, 90, 180, 270].map((deg) => (
        <div
          key={deg}
          className="absolute top-1/2 left-1/2 h-px origin-left"
          style={{
            width: '38%',
            transform: `translate(0, -50%) rotate(${deg}deg)`,
            background: 'linear-gradient(to right, rgba(255,255,255,0.1) 0%, transparent 100%)',
          }}
        />
      ))}

      {/* Diagonal lines (subtle) */}
      {[45, 135, 225, 315].map((deg) => (
        <div
          key={deg}
          className="absolute top-1/2 left-1/2 h-px origin-left"
          style={{
            width: '28%',
            transform: `translate(0, -50%) rotate(${deg}deg)`,
            background: 'linear-gradient(to right, rgba(255,255,255,0.05) 0%, transparent 100%)',
          }}
        />
      ))}

      {/* Ring 1 - innermost, fastest orbit */}
      <div
        className="absolute inset-[28%] rounded-full border border-white/[0.1]"
        style={{
          animation: prefersReducedMotion ? 'none' : 'orbit-rotate 20s linear infinite',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/70"
          style={{ boxShadow: '0 0 8px 3px rgba(255,255,255,0.25)' }}
        />
        <div
          className="absolute -bottom-0.5 left-1/4 w-1.5 h-1.5 rounded-full bg-white/40"
          style={{ boxShadow: '0 0 6px 2px rgba(255,255,255,0.15)' }}
        />
      </div>

      {/* Ring 2 - middle, reverse orbit */}
      <div
        className="absolute inset-[16%] rounded-full border border-white/[0.06]"
        style={{
          animation: prefersReducedMotion ? 'none' : 'orbit-rotate-reverse 35s linear infinite',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="absolute -top-1 left-1/3 -translate-x-1/2 w-2 h-2 rounded-full bg-white/50"
          style={{ boxShadow: '0 0 8px 2px rgba(255,255,255,0.2)' }}
        />
        <div
          className="absolute top-1/2 -right-0.5 w-1.5 h-1.5 rounded-full bg-white/30"
          style={{ boxShadow: '0 0 6px 2px rgba(255,255,255,0.1)' }}
        />
      </div>

      {/* Ring 3 - outermost, slowest orbit */}
      <div
        className="absolute inset-[5%] rounded-full border border-white/[0.04]"
        style={{
          animation: prefersReducedMotion ? 'none' : 'orbit-rotate 55s linear infinite',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="absolute -bottom-1 right-1/4 w-1.5 h-1.5 rounded-full bg-white/30"
          style={{ boxShadow: '0 0 6px 2px rgba(255,255,255,0.1)' }}
        />
      </div>
    </div>
  );
}
