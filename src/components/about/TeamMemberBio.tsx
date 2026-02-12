import { User, Linkedin } from "lucide-react";
import type { TeamMember } from "@/lib/data/team";

interface TeamMemberBioProps {
  member: TeamMember;
}

export function TeamMemberBio({ member }: TeamMemberBioProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6">
          <User className="w-10 h-10 text-accent" />
        </div>
        <h1 className="text-3xl md:text-4xl font-light text-foreground mb-2">
          {member.name}
        </h1>
        <p className="text-accent font-medium">{member.title}</p>
      </div>

      <div className="w-24 h-px bg-accent/30 mx-auto mb-8" />

      <div className="max-w-3xl mx-auto space-y-5 text-muted-light leading-relaxed">
        {member.description.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-light transition-colors shadow-lg shadow-accent/20 hover:shadow-accent/40"
        >
          <Linkedin className="w-5 h-5" />
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
}
