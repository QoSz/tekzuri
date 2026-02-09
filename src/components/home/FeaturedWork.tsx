import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects, type Project } from "@/lib/data/projects";

function FeaturedCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-2xl hover-lift ${className ?? ""}`}
    >
      {/* Image */}
      <Image
        src={project.image}
        alt={project.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5 opacity-85 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
        <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2 bg-black/20 backdrop-blur-[2px] group-hover:bg-black/30 group-hover:backdrop-blur-sm rounded-xl p-4 -m-4">
          <span className="text-white/80 text-sm font-medium uppercase tracking-wider text-shadow-sm">
            {project.subtitle}
          </span>
          <h3 className="text-white text-2xl lg:text-3xl font-semibold mt-2 text-shadow-sm">
            {project.name}
          </h3>
          <p className="text-white/70 text-sm mt-2 line-clamp-2 max-w-md text-shadow-sm">
            {project.description}
          </p>
        </div>

        {/* Visit button */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <span className="inline-flex items-center gap-2 text-white text-sm font-medium text-shadow">
            Visit Site
            <svg
              className="w-4 h-4"
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
      </div>

      {/* Corner accent */}
      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </a>
  );
}

export function FeaturedWork() {
  const featured = getFeaturedProjects();

  return (
    <section id="our-work" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-accent font-medium text-sm tracking-wide mb-4">
              <span className="w-8 h-px bg-accent" />
              Our Work
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Selected projects
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              A curated look at recent work that reflects our commitment to
              craft.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/our-work"
            className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors shrink-0"
          >
            View all projects
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
          </Link>
        </div>

        {/* Featured grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {featured[0] && (
            <FeaturedCard
              project={featured[0]}
              className="aspect-[16/9]"
            />
          )}
          {featured[1] && (
            <FeaturedCard
              project={featured[1]}
              className="aspect-[16/9]"
            />
          )}
        </div>
      </div>
    </section>
  );
}
