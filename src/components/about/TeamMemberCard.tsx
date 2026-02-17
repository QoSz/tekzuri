import Link from "next/link";
import type { TeamMember } from "@/lib/data/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="w-full sm:w-80 aspect-square">
      <div className="card-3d relative w-full h-full bg-bg-elevated border border-border-card rounded-2xl hover:border-border-strong">
        <div className="w-full h-full flex flex-col items-center justify-center p-8">
          <div className="w-16 h-16 rounded-full bg-white/[0.04] border border-border-card flex items-center justify-center mb-6">
            <span className="text-lg font-medium text-fg-secondary" style={{ fontFamily: 'var(--font-heading)' }}>
              {member.name.split(' ').map((n: string) => n[0]).join('')}
            </span>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-1">
              {member.name}
            </h3>
            <p className="text-sm text-fg-secondary">{member.title}</p>
          </div>

          <div className="w-16 h-px bg-border-card mb-8" />

          <Link
            href={`/about/team/${member.slug}`}
            className="px-5 py-2 cursor-pointer text-sm font-medium text-foreground border border-border-default rounded-full hover:bg-white hover:text-bg-deep transition-all duration-200 focus-ring"
          >
            View Bio
          </Link>
        </div>
      </div>
    </div>
  );
}
