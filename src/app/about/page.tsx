import { Suspense } from "react";
import type { Metadata } from "next";
import { TeamSection } from "@/components/about/TeamSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind TekZuri. We bring the Japanese philosophy of monozukuri - the art of making things with craftsmanship and elegance - to digital experiences.",
  openGraph: {
    title: "About Us | TekZuri",
    description:
      "Meet the team behind TekZuri. We bring the Japanese philosophy of monozukuri - the art of making things with craftsmanship and elegance - to digital experiences.",
    url: "https://tekzuri.com/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About TekZuri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | TekZuri",
    description:
      "Meet the team behind TekZuri. We bring the Japanese philosophy of monozukuri - the art of making things with craftsmanship and elegance - to digital experiences.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tekzuri.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 lg:px-8 pt-16 lg:pt-20 pb-16">
        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Crafting Digital Excellence
          </h1>
          <p className="text-muted max-w-3xl mx-auto text-lg leading-relaxed">
            TekZuri draws inspiration from{" "}
            <span className="text-[#f0f0f2] font-medium">monozukuri</span> (ものづくり) — the
            Japanese art of making things with meticulous craftsmanship and
            attention to detail. We apply this philosophy to every digital
            experience we create.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <hr className="border-[rgba(255,255,255,0.06)]" />
      </div>

      <Suspense fallback={<div className="px-6 lg:px-8 py-16" />}>
        <TeamSection />
      </Suspense>
    </>
  );
}
