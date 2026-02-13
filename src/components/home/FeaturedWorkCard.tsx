"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ProjectPreview } from "@/lib/data/projects";

const hoverScale = { scale: 1.03 } as const;
const springTransition = { type: "spring", stiffness: 300, damping: 20 } as const;

export function FeaturedWorkCard({ project }: { project: ProjectPreview }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-video rounded-2xl overflow-hidden bg-white/5"
        whileHover={prefersReducedMotion ? undefined : hoverScale}
        transition={springTransition}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </motion.a>

      <h3 className="mt-3 text-lg font-semibold text-foreground">
        {project.name}
      </h3>
    </div>
  );
}
