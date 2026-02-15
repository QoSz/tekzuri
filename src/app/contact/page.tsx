import type { Metadata } from "next";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TekZuri. We'd love to hear about your project and how we can help.",
  openGraph: {
    title: "Contact Us | TekZuri",
    description:
      "Get in touch with TekZuri. We'd love to hear about your project and how we can help.",
    url: "https://tekzuri.com/contact",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact TekZuri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | TekZuri",
    description:
      "Get in touch with TekZuri. We'd love to hear about your project and how we can help.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tekzuri.com/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="px-6 lg:px-8 pt-16 lg:pt-20 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>Contact Us</h1>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            We&apos;d love to hear from you. Fill out the form or reach out directly.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
