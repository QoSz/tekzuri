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
      <section className="px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center justify-center gap-2 text-accent font-medium text-sm tracking-wide mb-4">
            <span className="w-8 h-px bg-accent" />
            About Us
            <span className="w-8 h-px bg-accent" />
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Crafting Digital Excellence
          </h1>
          <p className="text-muted max-w-3xl mx-auto text-lg leading-relaxed">
            TekZuri draws inspiration from{" "}
            <span className="text-accent font-medium">monozukuri</span> (ものづくり) — the
            Japanese art of making things with meticulous craftsmanship and
            attention to detail. We apply this philosophy to every digital
            experience we create.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8">
        <hr className="border-white/10" />
      </div>

      <TeamSection />
    </>
  );
}
