import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

interface ServiceCTAProps {
  heading: string;
  subtext: string;
  ctaText: string;
  backgroundVariant?: 'deep' | 'base';
}

export function ServiceCTA({ heading, subtext, ctaText, backgroundVariant = 'deep' }: ServiceCTAProps) {
  return (
    <section className={`relative py-16 lg:py-24 px-6 lg:px-8 ${backgroundVariant === 'base' ? 'bg-bg-base' : ''}`}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-bg-elevated border border-border-card rounded-2xl p-8 lg:p-12"
          style={{ boxShadow: 'var(--shadow-card)' }}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-foreground">
            {heading}
          </h2>
          <p className="text-lg text-fg-secondary mb-8 max-w-2xl mx-auto">
            {subtext}
          </p>
          <Link
            href="/contact"
            className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-white text-bg-deep font-medium rounded-full hover:bg-white/90 transition-all duration-200 active:scale-[0.98] focus-ring"
            style={{ boxShadow: 'var(--shadow-button)' }}
          >
            {ctaText}
            <ArrowIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
