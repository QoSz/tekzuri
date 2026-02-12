import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "TekZuri | Work with Elegance",
  description:
    "Technology crafted with elegance. Inspired by monozukuri, we specialize in web development, AI automation, digital marketing, and IT consulting with meticulous craftsmanship.",
  openGraph: {
    title: "TekZuri | Work with Elegance",
    description:
      "Technology crafted with elegance. Inspired by monozukuri, we specialize in web development, AI automation, digital marketing, and IT consulting with meticulous craftsmanship.",
    url: "https://tekzuri.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TekZuri - Work with Elegance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TekZuri | Work with Elegance",
    description:
      "Technology crafted with elegance. Inspired by monozukuri, we specialize in web development, AI automation, digital marketing, and IT consulting with meticulous craftsmanship.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tekzuri.com",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedWork />
      <AboutSection />
      <ContactSection />
    </>
  );
}
