import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { StaggerReveal, RevealItem, AccentLine } from "./HeroContent";
import { WordCarousel } from "./WordCarousel";

const HeroGraphic = dynamic(
  () => import("./HeroGraphic").then((m) => ({ default: m.HeroGraphic })),
  { ssr: true }
);

const words = ["Elegance", "Precision", "Excellence", "Mastery"];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <StaggerReveal className="max-w-2xl">
            <RevealItem className="mb-6">
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm tracking-wide">
                <AccentLine />
                Technology Meets Craftsmanship
              </span>
            </RevealItem>

            <RevealItem>
              <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
                Build with
                <span className="block mt-2">
                  <WordCarousel words={words} />
                </span>
              </h1>
            </RevealItem>

            <RevealItem>
              <p className="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed mb-12">
                Inspired by the Japanese philosophy of{" "}
                <span className="text-foreground font-medium">monozukuri</span>, we craft
                digital solutions with meticulous attention to detail and timeless quality.
              </p>
            </RevealItem>

            <RevealItem>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 text-base font-medium hover:bg-accent-light transition-all duration-300 rounded-full shadow-lg shadow-accent/20 hover:shadow-accent/40"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="#services"
                  className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 text-base font-medium border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 rounded-full"
                >
                  Explore Services
                  <ArrowDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
                </a>
              </div>
            </RevealItem>
          </StaggerReveal>

          <div className="hidden lg:flex justify-center items-center">
            <HeroGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
