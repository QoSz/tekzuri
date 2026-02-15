import dynamic from "next/dynamic";
import Link from "next/link";
import { getFeaturedProjectPreviews } from "@/lib/data/projects";

const FeaturedWorkGrid = dynamic(
  () => import("./FeaturedWorkGrid").then((m) => ({ default: m.FeaturedWorkGrid })),
  { ssr: true }
);

export function FeaturedWork() {
  const featured = getFeaturedProjectPreviews();

  return (
    <section id="our-work" className="py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-2xl">

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Featured work
            </h2>
            <p className="text-lg text-[#a0a0a8] leading-relaxed">
              A curated look at recent work that reflects our commitment to
              craft.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/our-work"
            className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-[#f0f0f2] transition-colors duration-200 shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013] rounded-sm"
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
        <FeaturedWorkGrid projects={featured} />
      </div>
    </section>
  );
}
