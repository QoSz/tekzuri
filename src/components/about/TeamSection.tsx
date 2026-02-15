import { TeamMemberCard } from "./TeamMemberCard";
import { teamMembers } from "@/lib/data/team";

export function TeamSection() {
  return (
    <section className="px-6 lg:px-8 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-heading">
            Meet the People Behind TekZuri
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            We are a passionate team dedicated to bringing your digital visions
            to life with craftsmanship and care.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
