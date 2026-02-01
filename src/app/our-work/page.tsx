import type { Metadata } from "next";
import { PortfolioSection } from "@/components/home/PortfolioSection";

export const metadata: Metadata = {
  title: "Our Work | TekZuri",
  description: "Explore TekZuri's portfolio. We craft elegant technology solutions for businesses across manufacturing, retail, logistics, and more.",
  openGraph: {
    title: "Our Work | TekZuri",
    description: "Explore TekZuri's portfolio. We craft elegant technology solutions for businesses across manufacturing, retail, logistics, and more.",
    url: "https://tekzuri.com/our-work",
    siteName: "TekZuri",
    type: "website",
  },
  alternates: {
    canonical: "https://tekzuri.com/our-work",
  },
};

export default function OurWorkPage() {
  return <PortfolioSection />;
}
