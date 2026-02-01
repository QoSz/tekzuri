import type { Metadata } from "next";
import { TeamSection } from "@/components/about/TeamSection";

export const metadata: Metadata = {
  title: "About Us | TekZuri",
  description:
    "Meet the team behind TekZuri. We bring the Japanese philosophy of monozukuri - the art of making things with craftsmanship and elegance - to digital experiences.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-burgundy uppercase tracking-[0.3em] text-sm mb-4">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Crafting Digital Excellence
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            TekZuri draws inspiration from{" "}
            <span className="text-burgundy font-medium">monozukuri</span> (ものづくり) — the
            Japanese art of making things with meticulous craftsmanship and
            attention to detail. We apply this philosophy to every digital
            experience we create.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8">
        <hr className="border-warm-200" />
      </div>

      <TeamSection />
    </>
  );
}
