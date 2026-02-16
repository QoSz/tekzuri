"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";

interface ServiceCard3DProps {
  children: ReactNode;
  className?: string;
}

const springConfig = { damping: 30, stiffness: 100 };

export function ServiceCard3D({ children, className }: ServiceCard3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  const glareX = useSpring(mouseX, springConfig);
  const glareY = useSpring(mouseY, springConfig);

  const glareBackground = useMotionTemplate`radial-gradient(
    300px circle at ${glareX}% ${glareY}%,
    rgba(255, 255, 255, 0.04),
    transparent 80%
  )`;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x * 100);
    mouseY.set(y * 100);

    rotateX.set((y - 0.5) * -10); // max 5deg
    rotateY.set((x - 0.5) * 10);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    mouseX.set(50);
    mouseY.set(50);
  }

  if (prefersReducedMotion) {
    return (
      <div
        className={`group relative bg-[#111116] rounded-2xl p-8 lg:p-10 border border-[rgba(255,255,255,0.07)] hover:border-[rgba(255,255,255,0.18)] transition-all duration-500 ${className ?? ""}`}
        style={{ boxShadow: 'var(--shadow-card)' }}
      >
        {children}
      </div>
    );
  }

  return (
    <div style={{ perspective: 800 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          boxShadow: 'var(--shadow-card)'
        }}
        className={`group relative bg-[#111116] rounded-2xl p-8 lg:p-10 border border-[rgba(255,255,255,0.07)] hover:border-[rgba(255,255,255,0.18)] transition-[border-color,background-color] duration-500 hover:bg-[#18181f] ${className ?? ""}`}
      >
        {/* Glare overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{ background: glareBackground }}
          aria-hidden="true"
        />

        {/* Inner ambient glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 60%)',
          }}
        />

        {/* Card content */}
        <div style={{ transformStyle: "preserve-3d" }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
