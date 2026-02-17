import Link from "next/link";
import type { TeamMemberPreview } from "@/lib/data/team";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface OtherTeamMembersProps {
  members: TeamMemberPreview[];
}

export function OtherTeamMembers({ members }: OtherTeamMembersProps) {
  if (members.length === 0) return null;

  return (
    <section className="mt-16">
      <ScrollReveal>
        <h2 className="text-2xl font-light text-foreground text-center mb-8">
          See Other Members
        </h2>
      </ScrollReveal>
      <div className="flex flex-wrap justify-center gap-6">
        {members.map((member, index) => (
          <ScrollReveal key={member.id} delay={index * 0.1}>
            <Link
              href={`/about/team/${member.slug}`}
              className="group cursor-pointer w-full sm:w-64 p-6 bg-bg-elevated border border-border-card rounded-xl hover:border-border-strong transition-all duration-300 focus-ring block"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-white/[0.04] border border-border-card flex items-center justify-center mb-4">
                  <span className="text-base font-medium text-fg-secondary" style={{ fontFamily: 'var(--font-heading)' }}>
                    {member.name.split(' ').map((n: string) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-fg-secondary">{member.title}</p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
