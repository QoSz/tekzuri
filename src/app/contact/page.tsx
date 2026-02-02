import type { Metadata } from "next";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | TekZuri",
  description: "Get in touch with TekZuri. We'd love to hear about your project and how we can help.",
};

export default function ContactPage() {
  return (
    <section className="px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center gap-2 text-accent font-medium text-sm tracking-wide mb-4">
            <span className="w-8 h-px bg-accent" />
            Get in Touch
            <span className="w-8 h-px bg-accent" />
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Contact Us</h1>
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
