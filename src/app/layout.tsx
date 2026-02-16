import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { BackgroundAnimation } from "@/components/common/BackgroundAnimation";
import { ScrollProgressBar } from "@/components/common/ScrollProgressBar";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050508",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tekzuri.com"),
  title: {
    default: "TekZuri | Work with Elegance",
    template: "%s | TekZuri",
  },
  description:
    "Technology crafted with elegance. Inspired by monozukuri, we build solutions with meticulous craftsmanship and care.",
  keywords: [
    "web development agency",
    "custom web applications",
    "Next.js development",
    "React development services",
    "mobile app development",
    "IT consulting",
    "monozukuri",
    "Japanese craftsmanship web development",
    "elegant web applications",
    "TypeScript development",
  ],
  authors: [{ name: "TekZuri" }],
  creator: "TekZuri",
  publisher: "TekZuri",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tekzuri.com",
    siteName: "TekZuri",
    title: "TekZuri | Work with Elegance",
    description:
      "Technology crafted with elegance. Inspired by monozukuri, we build solutions with meticulous craftsmanship and care.",
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
      "Technology crafted with elegance. Inspired by monozukuri, we build solutions with meticulous craftsmanship and care.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tekzuri.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TekZuri",
    url: "https://tekzuri.com",
    logo: "https://tekzuri.com/logo.png",
    image: "https://tekzuri.com/og-image.png",
    description:
      "Technology crafted with elegance. Inspired by monozukuri, we build solutions with meticulous craftsmanship.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "business@tekzuri.com",
      contactType: "customer service",
    },
    sameAs: [],
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "IT Consulting",
      "React",
      "Next.js",
      "TypeScript",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TekZuri",
    url: "https://tekzuri.com",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <BackgroundAnimation />
        <ScrollProgressBar />
        <div className="min-h-screen flex flex-col relative">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
