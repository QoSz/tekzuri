import type { TeamMember } from "@/lib/data/team";

interface TeamMemberBioProps {
  member: TeamMember;
}

export function TeamMemberBio({ member }: TeamMemberBioProps) {
  return (
    <div className="bg-[#1c1c20] border border-[rgba(255,255,255,0.06)] rounded-xl p-8 md:p-12" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.04)' }}>
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-20 h-20 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] flex items-center justify-center mb-6">
          <span className="text-xl font-medium text-[#a0a0a8]" style={{ fontFamily: 'var(--font-heading)' }}>
            {member.name.split(' ').map((n: string) => n[0]).join('')}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-light text-foreground mb-2">
          {member.name}
        </h1>
        <p className="text-[#a0a0a8] font-medium">{member.title}</p>
      </div>

      <div className="w-24 h-px bg-[rgba(255,255,255,0.06)] mx-auto mb-8" />

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
          aria-label={`Connect with ${member.name} on LinkedIn (opens in new tab)`}
          className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-white text-[#101013] font-medium rounded-md hover:bg-white/90 transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013]"
          style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.08)' }}
        >
          Connect on LinkedIn
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
