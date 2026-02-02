import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  getTeamMemberBySlug,
  getOtherTeamMembers,
  getAllTeamSlugs,
} from "@/lib/data/team";
import { TeamMemberBio } from "@/components/about/TeamMemberBio";
import { OtherTeamMembers } from "@/components/about/OtherTeamMembers";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllTeamSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

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
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  const otherMembers = getOtherTeamMembers(slug);

  return (
    <main className="min-h-screen bg-warm-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-burgundy transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to About
        </Link>

        <TeamMemberBio member={member} />

        <OtherTeamMembers members={otherMembers} />
      </div>
    </main>
  );
}
