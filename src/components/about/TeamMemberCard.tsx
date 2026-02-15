import Link from "next/link";
import type { TeamMember } from "@/lib/data/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="w-full sm:w-80 aspect-square">
      <div className="card-3d relative w-full h-full bg-[#1c1c20] border border-[rgba(255,255,255,0.06)] rounded-xl hover:border-[rgba(255,255,255,0.16)]">
        <div className="w-full h-full flex flex-col items-center justify-center p-8">
          <div className="w-16 h-16 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] flex items-center justify-center mb-6">
            <span className="text-lg font-medium text-[#a0a0a8]" style={{ fontFamily: 'var(--font-heading)' }}>
              {member.name.split(' ').map((n: string) => n[0]).join('')}
            </span>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-1">
              {member.name}
            </h3>
            <p className="text-sm text-muted">{member.title}</p>
          </div>

          <div className="w-16 h-px bg-[rgba(255,255,255,0.06)] mb-8" />

          <Link
            href={`/about/team/${member.slug}`}
            className="px-5 py-2 cursor-pointer text-sm font-medium text-[#f0f0f2] border border-[rgba(255,255,255,0.10)] rounded-md hover:bg-white hover:text-[#101013] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013]"
          >
            View Bio
          </Link>
        </div>
      </div>
    </div>
  );
}
