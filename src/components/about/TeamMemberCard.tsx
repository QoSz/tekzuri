import Link from "next/link";
import { User } from "lucide-react";
import type { TeamMember } from "@/lib/data/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="w-full sm:w-80 aspect-square">
      <div className="relative w-full h-full bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300">
        <div className="w-full h-full flex flex-col items-center justify-center p-8">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
            <User className="w-8 h-8 text-accent" />
          </div>

          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-1">
              {member.name}
            </h3>
            <p className="text-sm text-muted">{member.title}</p>
          </div>

          <div className="w-16 h-px bg-accent/30 mb-8" />

          <Link
            href={`/about/team/${member.slug}`}
            className="px-5 py-2 text-sm font-medium text-accent border border-accent/30 rounded-full hover:bg-accent hover:text-white transition-all duration-300"
          >
            View Bio
          </Link>
        </div>
      </div>
    </div>
  );
}
