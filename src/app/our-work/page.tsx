import type { Metadata } from "next";
import { PortfolioSection } from "@/components/home/PortfolioSection";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore TekZuri's portfolio. We craft elegant technology solutions for businesses across manufacturing, retail, logistics, and more.",
  openGraph: {
    title: "Our Work | TekZuri",
    description:
      "Explore TekZuri's portfolio. We craft elegant technology solutions for businesses across manufacturing, retail, logistics, and more.",
    url: "https://tekzuri.com/our-work",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TekZuri Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | TekZuri",
    description:
      "Explore TekZuri's portfolio. We craft elegant technology solutions for businesses across manufacturing, retail, logistics, and more.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tekzuri.com/our-work",
  },
};

export default function OurWorkPage() {
  return <PortfolioSection />;
}
