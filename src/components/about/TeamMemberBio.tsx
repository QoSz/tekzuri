import { ArrowIcon } from "@/components/ui/ArrowIcon";
import type { TeamMember } from "@/lib/data/team";

interface TeamMemberBioProps {
  member: TeamMember;
}

export function TeamMemberBio({ member }: TeamMemberBioProps) {
  return (
    <div className="bg-bg-elevated border border-border-card rounded-xl p-8 md:p-12" style={{ boxShadow: 'var(--shadow-card)' }}>
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-20 h-20 rounded-full bg-white/[0.04] border border-border-card flex items-center justify-center mb-6">
          <span className="text-xl font-medium text-fg-secondary" style={{ fontFamily: 'var(--font-heading)' }}>
            {member.name.split(' ').map((n: string) => n[0]).join('')}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-light text-foreground mb-2">
          {member.name}
        </h1>
        <p className="text-fg-secondary font-medium">{member.title}</p>
      </div>

      <div className="w-24 h-px bg-border-card mx-auto mb-8" />

      <div className="max-w-3xl mx-auto space-y-5 text-foreground leading-relaxed">
        {member.description.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Connect with ${member.name} on LinkedIn (opens in new tab)`}
          className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-white text-bg-deep font-medium rounded-full hover:bg-white/90 transition-all duration-200 active:scale-[0.98] focus-ring"
          style={{ boxShadow: 'var(--shadow-button)' }}
        >
          Connect on LinkedIn
          <ArrowIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
