import { cache } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getTeamMemberBySlug,
  getOtherTeamMemberPreviews,
  getAllTeamSlugs,
} from "@/lib/data/team";

import { TeamMemberBio } from "@/components/about/TeamMemberBio";
import { OtherTeamMembers } from "@/components/about/OtherTeamMembers";

const getCachedTeamMember = cache(getTeamMemberBySlug);

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllTeamSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const member = getCachedTeamMember(slug);

  if (!member) {
    return {
      title: "Team Member Not Found",
    };
  }

  const title = `${member.name} - ${member.title}`;
  const description = member.description[0];

  return {
    title,
    description,
    openGraph: {
      title: `${title} | TekZuri`,
      description,
      url: `https://tekzuri.com/about/team/${slug}`,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${member.name} - TekZuri Team`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | TekZuri`,
      description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: `https://tekzuri.com/about/team/${slug}`,
    },
  };
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const [member, otherMembers] = await Promise.all([
    Promise.resolve(getCachedTeamMember(slug)),
    Promise.resolve(getOtherTeamMemberPreviews(slug)),
  ]);

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-16 lg:pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-muted hover:text-[#e8e8ed] transition-colors duration-200 mb-8 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508] rounded-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to About
        </Link>

        <TeamMemberBio member={member} />

        <OtherTeamMembers members={otherMembers} />
      </div>
    </div>
  );
}
