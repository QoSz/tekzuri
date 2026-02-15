"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ProjectPreview } from "@/lib/data/projects";

const hoverScale = { scale: 1.03 } as const;
const springTransition = { type: "spring", stiffness: 300, damping: 20 } as const;

export function FeaturedWorkCard({ project }: { project: ProjectPreview }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="group">
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block cursor-pointer aspect-video rounded-xl overflow-hidden bg-[#1c1c20] border border-[rgba(255,255,255,0.06)] group-hover:border-[rgba(255,255,255,0.16)] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013]"
        style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.04)' }}
        whileHover={prefersReducedMotion ? undefined : hoverScale}
        transition={springTransition}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101013]/90 via-[#101013]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="text-white">
            <p className="text-sm font-medium mb-1">View Project</p>
            <p className="text-xs text-white/60">Click to explore</p>
          </div>
        </div>
      </motion.a>

      <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-[#f0f0f2] transition-colors duration-300">
        {project.name}
      </h3>
    </div>
  );
}
