"use client";

import type { ProjectPreview } from "@/lib/data/projects";
import { ScrollReveal } from "./ScrollReveal";
import { FeaturedWorkCard } from "./FeaturedWorkCard";

export function FeaturedWorkGrid({ projects }: { projects: ProjectPreview[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {projects.map((project, index) => (
        <ScrollReveal key={project.id} delay={index * 0.15}>
          <FeaturedWorkCard project={project} />
        </ScrollReveal>
      ))}
    </div>
  );
}
