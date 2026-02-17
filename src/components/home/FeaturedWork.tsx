import dynamic from "next/dynamic";
import Link from "next/link";
import { getFeaturedProjectPreviews } from "@/lib/data/projects";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

const FeaturedWorkGrid = dynamic(
  () => import("./FeaturedWorkGrid").then((m) => ({ default: m.FeaturedWorkGrid })),
  { ssr: true }
);

export function FeaturedWork() {
  const featured = getFeaturedProjectPreviews();

  return (
    <section id="our-work" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-2xl">

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Featured work
            </h2>
            <p className="text-lg text-fg-secondary leading-relaxed">
              A curated look at recent work that reflects our commitment to
              craft.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/our-work"
            className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-foreground transition-colors duration-200 shrink-0 cursor-pointer focus-ring rounded-sm"
          >
            View all projects
            <ArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Featured grid */}
        <FeaturedWorkGrid projects={featured} />
      </div>
    </section>
  );
}
