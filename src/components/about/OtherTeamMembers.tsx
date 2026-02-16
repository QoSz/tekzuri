import Link from "next/link";
import type { TeamMemberPreview } from "@/lib/data/team";

interface OtherTeamMembersProps {
  members: TeamMemberPreview[];
}

export function OtherTeamMembers({ members }: OtherTeamMembersProps) {
  if (members.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-light text-foreground text-center mb-8">
        See Other Members
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {members.map((member) => (
          <Link
            key={member.id}
            href={`/about/team/${member.slug}`}
            className="group cursor-pointer w-full sm:w-64 p-6 bg-[#111116] border border-[rgba(255,255,255,0.06)] rounded-xl hover:border-[rgba(255,255,255,0.16)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
            style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.04)' }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] flex items-center justify-center mb-4">
                <span className="text-base font-medium text-[#94949e]" style={{ fontFamily: 'var(--font-heading)' }}>
                  {member.name.split(' ').map((n: string) => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-muted">{member.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
