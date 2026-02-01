import { TeamMemberCard } from "./TeamMemberCard";
import { teamMembers } from "@/lib/data/team";

export function TeamSection() {
  return (
    <section className="px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-burgundy uppercase tracking-[0.3em] text-sm mb-4">
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            Meet the People Behind TekZuri
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
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
