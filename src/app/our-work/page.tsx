import type { Metadata } from "next";
import { ProjectGrid } from "@/components/our-work/ProjectGrid";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore TekZuri's portfolio. We craft elegant technology solutions for businesses across manufacturing, retail, logistics, and more.",
  openGraph: {
    title: "Our Work | TekZuri",
    description:
      "Explore TekZuri's portfolio. We craft elegant technology solutions for businesses across manufacturing, retail, logistics, and more.",
    url: "https://tekzuri.com/our-work",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TekZuri Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | TekZuri",
    description:
      "Explore TekZuri's portfolio. We craft elegant technology solutions for businesses across manufacturing, retail, logistics, and more.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tekzuri.com/our-work",
  },
};

export default function OurWorkPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="px-6 lg:px-8 pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto">
          <span className="inline-flex items-center gap-2 text-accent font-medium text-sm tracking-wide mb-4">
            <span className="w-8 h-px bg-accent" />
            Our Work
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Projects we&apos;re proud of
          </h1>
          <p className="max-w-2xl text-lg text-muted leading-relaxed">
            Every project is an opportunity to apply our philosophy of
            monozukuri &mdash; meticulous craftsmanship meeting modern
            technology.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <ProjectGrid />

      {/* Bottom CTA */}
      <section className="px-6 lg:px-8 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted mb-6">Have a project in mind?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors group"
          >
            Let&apos;s discuss your project
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
          </a>
        </div>
      </section>
    </>
  );
}
