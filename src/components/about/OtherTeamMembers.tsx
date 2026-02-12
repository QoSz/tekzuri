import Link from "next/link";
import { User } from "lucide-react";
import type { TeamMember } from "@/lib/data/team";

interface OtherTeamMembersProps {
  members: TeamMember[];
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
            className="group w-full sm:w-64 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <User className="w-7 h-7 text-accent" />
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
