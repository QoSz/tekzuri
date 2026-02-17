import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

interface ServiceHeroProps {
  heading: string;
  subtext: string;
  ctaText: string;
}

export function ServiceHero({ heading, subtext, ctaText }: ServiceHeroProps) {
  return (
    <section className="relative pt-16 lg:pt-20 pb-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground">
          {heading}
        </h1>
        <p className="text-lg lg:text-xl text-fg-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
          {subtext}
        </p>
        <Link
          href="/contact"
          className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-white text-bg-deep rounded-full font-medium hover:bg-white/90 transition-all duration-200 active:scale-[0.98] focus-ring"
          style={{ boxShadow: 'var(--shadow-button)' }}
        >
          {ctaText}
          <ArrowIcon className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
