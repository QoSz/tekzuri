import { TeamMemberCard } from "./TeamMemberCard";
import { teamMembers } from "@/lib/data/team";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function TeamSection() {
  return (
    <section className="px-6 lg:px-8 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-heading">
              Meet the People Behind TekZuri
            </h2>
            <p className="mt-4 text-fg-secondary max-w-2xl mx-auto">
              We are a passionate team dedicated to bringing your digital visions
              to life with craftsmanship and care.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 0.12}>
              <TeamMemberCard member={member} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
