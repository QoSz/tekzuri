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
      <h2 className="text-2xl font-light text-gray-900 text-center mb-8">
        See Other Members
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {members.map((member) => (
          <Link
            key={member.id}
            href={`/about/team/${member.slug}`}
            className="group w-full sm:w-64 p-6 bg-white rounded-xl border border-warm-200 shadow-sm hover:shadow-md hover:border-burgundy/30 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-burgundy/10 flex items-center justify-center mb-4 group-hover:bg-burgundy/20 transition-colors">
                <User className="w-7 h-7 text-burgundy" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
