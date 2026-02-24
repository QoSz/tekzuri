import { Suspense } from "react";
import type { Metadata } from "next";
import { TeamSection } from "@/components/about/TeamSection";
import { StaggerRevealGroup } from "@/components/animations/StaggerRevealGroup";
import { RevealItem } from "@/components/animations/RevealItem";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the team behind TekZuri — the people who bring craftsmanship and care to every digital experience we create.",
  openGraph: {
    title: "Our Team | TekZuri",
    description:
      "Meet the team behind TekZuri — the people who bring craftsmanship and care to every digital experience we create.",
    url: "https://tekzuri.com/about/team",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "TekZuri Team" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | TekZuri",
    description:
      "Meet the team behind TekZuri — the people who bring craftsmanship and care to every digital experience we create.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://tekzuri.com/about/team" },
};

export default function TeamPage() {
  return (
    <>
      <section className="px-6 lg:px-8 pt-16 lg:pt-20 pb-16">
        <StaggerRevealGroup className="max-w-7xl mx-auto text-center" staggerInterval={0.15}>
          <RevealItem>
            <h1
              className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Team
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-fg-secondary max-w-2xl mx-auto text-lg leading-relaxed">
              The people who bring craftsmanship and care to every digital experience we create.
            </p>
          </RevealItem>
        </StaggerRevealGroup>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <hr className="border-border-card" />
      </div>

      <Suspense fallback={<div className="px-6 lg:px-8 py-16" />}>
        <TeamSection />
      </Suspense>
    </>
  );
}
