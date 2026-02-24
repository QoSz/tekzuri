import type { Metadata } from "next";
import Link from "next/link";
import { teamMembers } from "@/lib/data/team";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerRevealGroup } from "@/components/animations/StaggerRevealGroup";
import { RevealItem } from "@/components/animations/RevealItem";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { DecorativeNumber } from "@/components/ui/DecorativeNumber";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "TekZuri was founded on one question: what if great businesses could finally get the digital presence they deserve? Meet the team who answered it.",
  openGraph: {
    title: "About Us | TekZuri",
    description:
      "TekZuri was founded on one question: what if great businesses could finally get the digital presence they deserve? Meet the team who answered it.",
    url: "https://tekzuri.com/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About TekZuri" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | TekZuri",
    description:
      "TekZuri was founded on one question: what if great businesses could finally get the digital presence they deserve? Meet the team who answered it.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://tekzuri.com/about" },
};

const pillars = [
  {
    num: "01",
    title: "Quality over shortcuts",
    desc: "We take pride in building things the right way — not the fastest, not the cheapest, but the right way. Every decision is deliberate.",
  },
  {
    num: "02",
    title: "Technology with human intent",
    desc: "Every solution starts with a person. A real business, a real problem, a real opportunity. We don't build technology for technology's sake.",
  },
  {
    num: "03",
    title: "Long-term thinking",
    desc: "Architectures that scale, designs that age well, code that future teams can be proud of. We build for what comes after launch.",
  },
  {
    num: "04",
    title: "Relentless curiosity",
    desc: "From AI to blockchain, psychology to finance — the best solutions come from minds that never stop asking questions.",
  },
];

const differentiators = [
  {
    num: "01",
    title: "Craft over speed",
    body: "We don't ship fast and patch later. We take the time to understand your business, your users, and your goals — then build something that genuinely serves all three.",
  },
  {
    num: "02",
    title: "Full-stack thinking",
    body: "From architecture decisions to UI micro-interactions to SEO metadata, we treat every layer of your product as part of one coherent whole. Nothing is someone else's problem.",
  },
  {
    num: "03",
    title: "Partnership over projects",
    body: "We care about what happens after launch. Businesses we work with don't just get a deliverable — they get a team invested in their continued growth.",
  },
];

const teamHighlights: Record<string, { intro: string; trait: string; quote: string }> = {
  "nirav-challa": {
    intro:
      "Computer science graduate, AI generalist, and the original question-asker. Nirav founded TekZuri after asking himself why so many talented businesses stay invisible. His answer became the company's mission.",
    trait:
      "He approaches business the way he approaches training — with discipline, consistency, and the belief that when you do the fundamentals right, everything else follows.",
    quote:
      "I thrive on versatility, creativity, and relentless problem solving — constantly looking for innovative ways to tackle challenges, even before they appear.",
  },
  "yash-shah": {
    intro:
      "Yash lives at the intersection of code, creativity, and understanding how people think. His work spans web development, cybersecurity, AI, and blockchain — but his constant is the belief that the person using the product matters as much as the product itself.",
    trait:
      "He doesn't do half-measures. Whether debugging at 2 AM or designing an interface, he gives it everything. Sports taught him what code can't: how to perform under pressure.",
    quote: "I believe in quality over quantity. Always.",
  },
  "dhruv-patel": {
    intro:
      "Dhruv guides TekZuri's technical direction. With deep expertise in scalable architectures, cloud systems, and modern web technologies, he ensures every project is efficient, secure, and built for performance.",
    trait:
      "His passion is building user-centered digital experiences that blend functionality with creativity — the technical backbone that makes TekZuri's promises deliverable.",
    quote: "",
  },
};

export default function AboutPage() {
  return (
    <div className="relative">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-8 pt-20 lg:pt-28 pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <StaggerRevealGroup staggerInterval={0.13}>
            <RevealItem>
              <p className="swiss-label mb-5">Our Story</p>
            </RevealItem>
            <RevealItem>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-[-0.02em] text-foreground leading-[1.05] mb-8 max-w-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                We build what great{" "}
                <span className="text-fg-secondary">businesses deserve.</span>
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="text-lg text-fg-secondary max-w-2xl leading-relaxed">
                After finishing university, Nirav Challa asked one question: what if I could
                help great businesses that go unnoticed finally get the recognition they
                deserve? That question became TekZuri — and it still drives everything we build.
              </p>
            </RevealItem>
          </StaggerRevealGroup>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <hr className="border-border-card" />
      </div>

      {/* ── ORIGIN STORY ────────────────────────────────────────────── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <ScrollReveal>
            <blockquote>
              <span
                className="block text-[5rem] leading-none text-fg-quaternary select-none -ml-1 mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p
                className="text-2xl lg:text-3xl font-light text-foreground leading-snug tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                We don&apos;t just create websites. We build futuristic digital experiences
                that elevate brands, connect them with audiences, and make an impact.
              </p>
              <footer className="mt-6">
                <p className="swiss-label">— Nirav Challa, Co-Founder</p>
              </footer>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="swiss-label mb-5">How It Started</p>
            <div className="space-y-5 text-fg-secondary leading-relaxed">
              <p>
                TekZuri was born from a belief that great businesses often go unnoticed —
                not because they lack quality, but because they lack presence. Two computer
                science graduates, Nirav Challa and Yash Shah, set out to change that.
              </p>
              <p>
                Yash brings the conviction that quality always wins over quantity. He lives
                at the intersection of code, creativity, and understanding how people think —
                obsessing over the interface as much as the infrastructure.
              </p>
              <p>
                Together, they founded TekZuri to give businesses the digital gravity they
                deserve. Dhruv Patel joined to build the technical architecture that would
                make that ambition real.
              </p>
              <p>
                The name draws from{" "}
                <em className="text-foreground not-italic font-medium">monozukuri</em>{" "}
                (ものづくり) — the Japanese philosophy of making things with intention,
                precision, and care. That&apos;s our north star.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ── PHILOSOPHY ─────────────────────────────────────────────── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 bg-bg-elevated/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <ScrollReveal>
              <div
                className="relative bg-bg-elevated border border-border-card rounded-2xl overflow-hidden"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="relative min-h-[360px] flex flex-col items-center justify-center p-10 lg:p-14">
                  <div
                    className="absolute animate-glow-pulse pointer-events-none"
                    aria-hidden="true"
                    style={{
                      top: "50%",
                      left: "50%",
                      width: "260px",
                      height: "260px",
                      transform: "translate(-50%, -50%)",
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
                      filter: "blur(40px)",
                    }}
                  />
                  <svg
                    className="w-48 h-48 lg:w-56 lg:h-56 animate-enso-drift"
                    viewBox="0 0 200 200"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="440 60"
                    />
                  </svg>
                  <div className="relative z-10 text-center -mt-4">
                    <p
                      className="text-3xl font-light text-foreground tracking-tight mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      TekZuri
                    </p>
                    <div className="w-10 h-px bg-border-default mx-auto mb-3" />
                    <p className="text-fg-secondary text-sm tracking-[0.04em]">
                      Tech + Monozukuri
                    </p>
                    <p className="text-fg-tertiary text-base mt-1">ものづくり</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="swiss-label mb-5">Our Philosophy</p>
              <h2
                className="text-4xl sm:text-5xl font-normal tracking-[-0.02em] text-foreground mb-8"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                The art of making things
              </h2>
              <div className="space-y-5 text-lg text-fg-secondary leading-relaxed">
                <p>
                  <strong className="text-foreground font-medium">Monozukuri</strong>{" "}
                  (ものづくり) is a Japanese concept that encompasses not just making things,
                  but the spirit and mindset behind creating with dedication and craftsmanship.
                </p>
                <p>
                  At TekZuri, we bring this philosophy to digital work. Every line of code,
                  every design decision, every automated workflow is crafted with intention
                  and care. The user on the other end deserves to feel that.
                </p>
                <p>
                  We don&apos;t ship fast and fix later. We build right the first time —
                  because half-measures aren&apos;t an option when someone&apos;s business
                  depends on it.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pillars.map((p) => (
                  <div key={p.num} className="flex items-start gap-4">
                    <DecorativeNumber number={p.num} className="mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-1">{p.title}</h4>
                      <p className="text-xs text-fg-secondary leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── THE PEOPLE ──────────────────────────────────────────────── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">

          <ScrollReveal>
            <p className="swiss-label mb-3">The Team</p>
            <h2
              className="text-4xl sm:text-5xl font-normal tracking-[-0.02em] text-foreground mb-16"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Meet the minds behind the work
            </h2>
          </ScrollReveal>

          <div>
            {teamMembers.map((member, i) => {
              const hl = teamHighlights[member.slug];
              return (
                <ScrollReveal key={member.id} delay={i * 0.1}>
                  <div className={i > 0 ? "border-t border-border-card pt-14 mt-14" : ""}>
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">

                      <div className="flex flex-row lg:flex-col items-start gap-5">
                        <div className="shrink-0 w-16 h-16 rounded-full bg-white/[0.04] border border-border-card flex items-center justify-center">
                          <span
                            className="text-lg font-medium text-fg-secondary"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            {member.name.split(" ").map((n) => n[0]).join("")}
                          </span>
                        </div>
                        <div>
                          <h3
                            className="text-xl font-semibold text-foreground mb-0.5"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            {member.name}
                          </h3>
                          <p className="text-sm text-fg-secondary mb-4">{member.title}</p>
                          <div className="flex items-center gap-3">
                            <Link
                              href={`/about/team/${member.slug}`}
                              className="group inline-flex items-center gap-1.5 text-sm text-fg-tertiary hover:text-foreground transition-colors duration-200 focus-ring rounded-sm"
                            >
                              Full bio
                              <ArrowIcon
                                variant="diagonal"
                                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              />
                            </Link>
                            <span className="text-fg-quaternary" aria-hidden="true">·</span>
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-fg-tertiary hover:text-foreground transition-colors duration-200 focus-ring rounded-sm"
                              aria-label={`${member.name} on LinkedIn`}
                            >
                              LinkedIn
                            </a>
                          </div>
                        </div>
                      </div>

                      {hl && (
                        <div className="space-y-4 text-fg-secondary leading-relaxed">
                          <p>{hl.intro}</p>
                          <p>{hl.trait}</p>
                          {hl.quote && (
                            <blockquote className="border-l-2 border-border-strong pl-4 mt-6">
                              <p className="text-fg-secondary italic text-sm leading-relaxed">
                                &ldquo;{hl.quote}&rdquo;
                              </p>
                            </blockquote>
                          )}
                        </div>
                      )}

                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── WHY TEKZURI ─────────────────────────────────────────────── */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 bg-bg-elevated/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          <ScrollReveal>
            <div className="lg:sticky lg:top-24">
              <p className="swiss-label mb-4">Why TekZuri</p>
              <h2
                className="text-3xl lg:text-4xl font-normal tracking-[-0.02em] text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                What makes us different
              </h2>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-2">
            {differentiators.map((d, i) => (
              <ScrollReveal key={d.num} delay={i * 0.1}>
                <div className={`py-8 ${i > 0 ? "border-t border-border-card" : ""}`}>
                  <div className="flex items-start gap-5">
                    <span
                      className="text-xl font-light text-white/20 shrink-0 mt-0.5"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {d.num}
                    </span>
                    <div>
                      <h3
                        className="text-lg font-semibold text-foreground mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {d.title}
                      </h3>
                      <p className="text-fg-secondary leading-relaxed text-sm">{d.body}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── CLOSING STATEMENT ────────────────────────────────────────── */}
      <section className="px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="swiss-label mb-6">The TekZuri Standard</p>
            <h2
              className="text-4xl sm:text-5xl font-light tracking-[-0.02em] text-foreground leading-snug"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We shape your online presence into something that doesn&apos;t just stand
              out —{" "}
              <em className="not-italic text-fg-secondary">it shakes the ground.</em>
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto">
          <hr className="hr-asymmetric mb-14 lg:mb-16" />
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
              <div>
                <p className="swiss-label mb-3">Work With Us</p>
                <h2
                  className="text-4xl md:text-5xl font-normal tracking-[-0.02em] text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Ready to build
                  <br />
                  something great?
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href="/contact"
                  className="group cursor-pointer inline-flex items-center justify-center gap-2 bg-white text-bg-deep px-7 py-3.5 text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-200 active:scale-[0.98] focus-ring"
                  style={{ boxShadow: "var(--shadow-button)" }}
                >
                  Start a conversation
                  <ArrowIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/our-work"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 border border-border-default text-foreground px-7 py-3.5 text-sm font-medium rounded-full hover:border-border-hover hover:bg-white/[0.04] transition-all duration-200 focus-ring"
                >
                  See our work
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
