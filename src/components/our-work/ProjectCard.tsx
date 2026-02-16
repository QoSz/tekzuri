import Image from "next/image";
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
      className="card-3d cursor-pointer group relative flex flex-col overflow-hidden rounded-2xl bg-[#111116] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.16)] animate-fade-in-up focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
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
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#050508] to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 lg:p-8">
        <span className="text-[#5c5c68] text-xs font-medium uppercase tracking-wider mb-2">
          {project.subtitle}
        </span>

        <h3 className="text-xl font-semibold text-foreground group-hover:text-[#e8e8ed] transition-colors duration-300 mb-3">
          {project.name}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">
          Visit Site
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}
