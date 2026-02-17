export interface TeamMember {
  id: number;
  name: string;
  slug: string;
  title: string;
  description: string[];
  linkedin: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Yash Shah",
    slug: "yash-shah",
    title: "Co-Founder",
    description: [
      "I'm Yash Shah, a computer science graduate who can't help but chase what's next. I live at the intersection of code, creativity, and understanding how people think, where technology meets the mind, and innovation meets real purpose.",
      "Right now, I'm exploring AI, Blockchain, cryptocurrency, and DeFi. I love building systems that challenge how things have always been done, that reimagine how we interact with value, trust, and intelligence. I work with Python, JavaScript/TypeScript, Java, and C/C++, and I focus on web development, cyber security, and network engineering. But I don't just write code, I design experiences. I care about UI/UX and graphic design because I think about the person using what I build.",
      "I believe in quality over quantity. Always. When I'm debugging a system at 2 AM or designing an interface, I give it everything. I don't do half-measures.",
      "When I'm not coding, you'll find me playing padel or watching F1, tennis, or football. Sports teach me things code can't - how to perform under pressure, how to read patterns in real-time, how to stay resilient when things don't go my way.",
      "I read a lot about psychology and finance because they connect to everything I do. I chase ideas that challenge how I think, books that shift my perspective, conversations that make me uncomfortable in the best way. I try to look at situations objectively, strip away the noise, and see what's actually there. Whether I'm analyzing markets, debugging human behavior, or diving into research papers, I'm always asking: What am I missing? What assumptions am I making?",
      "I push myself to keep evolving, stay fit, stay sharp, and keep stepping into territories that scare me a little. That's where real growth happens.",
    ],
    linkedin: "https://www.linkedin.com/in/yashashah7/",
  },
  {
    id: 2,
    name: "Nirav Challa",
    slug: "nirav-challa",
    title: "Co-Founder",
    description: [
      "I'm Nirav, the co-founder of TekZuri and a Computer Science graduate with expertise in AI generation, website development, and Python. I thrive on versatility, creativity, and relentless problem solving constantly looking for innovative ways to tackle challenges, even before they appear.",
      "After finishing university, I asked myself a simple question: What if I could help great businesses that go unnoticed finally get the recognition they deserve? That question became the foundation of TekZuri a company built to empower talented businesses by giving them the digital presence, visibility, and clients they deserve.",
      "At TekZuri, we don't just create websites; we build futuristic digital experiences that elevate brands, connect them with audiences, and make an impact. Together, we can shape your online presence into something that doesn't just stand out it shakes the ground.",
      "Outside of work, I live a life rooted in discipline and peace. I love training calisthenics, going for long runs, lifting weights, and fueling my body with the right foods. I believe that when you treat your body right, everything else starts to fall into place you begin to enjoy the small things and appreciate what truly matters. To me, being in good shape reflects determination, focus, and hard work qualities that define how I approach both life and business.",
    ],
    linkedin: "https://www.linkedin.com/in/niravchalla/",
  },
  {
    id: 3,
    name: "Dhruv Patel",
    slug: "dhruv-patel",
    title: "Technical Director",
    description: [
      "Dhruv is a skilled web developer and technology lead who guides TekZuri's technical direction. With deep expertise in scalable architectures, cloud systems, and modern web technologies, Dhruv ensures every project is efficient, secure, and built for performance. He's passionate about building user-centered digital experiences that blend functionality with creativity, driving real-world results for clients.",
      "Beyond work, Dhruv enjoys unwinding with good movies, competitive gaming sessions, and playing soccer. These interests fuel his creativity, teamwork, and strategic thinking qualities that reflect in how he approaches both technology and leadership at TekZuri.",
    ],
    linkedin: "https://www.linkedin.com/in/dhruv-patel-a40ba5222/",
  },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((member) => member.slug === slug);
}

export type TeamMemberPreview = Pick<TeamMember, "id" | "name" | "slug" | "title">;

export function getOtherTeamMembers(currentSlug: string): TeamMember[] {
  return teamMembers.filter((member) => member.slug !== currentSlug);
}

export function getOtherTeamMemberPreviews(currentSlug: string): TeamMemberPreview[] {
  return teamMembers
    .filter((member) => member.slug !== currentSlug)
    .map(({ id, name, slug, title }) => ({ id, name, slug, title }));
}

export function getAllTeamSlugs(): string[] {
  return teamMembers.map((member) => member.slug);
}
