import Image from "next/image";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import type { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-3d cursor-pointer group relative flex flex-col overflow-hidden rounded-2xl bg-bg-elevated border border-border-card hover:border-border-strong animate-fade-in-up focus-ring"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg-deep to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 lg:p-8">
        <span className="text-fg-tertiary text-xs font-medium uppercase tracking-wider mb-2">
          {project.subtitle}
        </span>

        <h3 className="text-xl font-semibold text-foreground group-hover:text-foreground transition-colors duration-300 mb-3">
          {project.name}
        </h3>

        <p className="text-sm text-fg-secondary leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">
          Visit Site
          <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}
