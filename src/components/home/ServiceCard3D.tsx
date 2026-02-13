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

const springConfig = { damping: 30, stiffness: 150 };

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
    rgba(139, 35, 70, 0.08),
    transparent 80%
  )`;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x * 100);
    mouseY.set(y * 100);

    rotateX.set((y - 0.5) * -16); // max 8deg
    rotateY.set((x - 0.5) * 16);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    mouseX.set(50);
    mouseY.set(50);
  }

  if (prefersReducedMotion) {
    return (
      <div className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-accent/50 transition-all duration-500 ${className ?? ""}`}>
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
        }}
        className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-accent/50 transition-[border-color,background-color] duration-500 hover:bg-white/10 ${className ?? ""}`}
      >
        {/* Glare overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{ background: glareBackground }}
          aria-hidden="true"
        />

        {/* Card content */}
        <div style={{ transformStyle: "preserve-3d" }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
