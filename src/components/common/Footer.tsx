import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { CurrentYear } from "./CurrentYear";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/our-work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "AI Automation", href: "/services/ai-automation" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "IT Consulting", href: "/services/it-consulting" },
  ],
  social: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/company/tekzuri",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com/tekzuri",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-bg-deep/60 backdrop-blur-sm relative">
      <div className="h-px" style={{ background: 'linear-gradient(to right, var(--border-default) 0%, var(--border-subtle) 60%, transparent 100%)' }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-20 lg:py-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="inline-block mb-6 focus-ring rounded-sm">
                <Image
                  src="/tekzuri-logo.webp"
                  alt="TekZuri"
                  width={120}
                  height={40}
                  className="transition-transform duration-300 hover:scale-105 brightness-0 invert"
                />
              </Link>
              <p className="text-fg-secondary text-sm leading-relaxed mb-6">
                Technology crafted with elegance. Inspired by the Japanese philosophy of monozukuri.
              </p>
              {/* Social links */}
              <div className="flex gap-4">
                {footerLinks.social.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} (opens in new tab)`}
                    className="inline-block py-1 text-fg-tertiary hover:text-foreground transition-colors duration-200 cursor-pointer focus-ring rounded-sm"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-fg-tertiary mb-5">Quick links</h4>
              <ul className="space-y-1">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block py-1.5 text-fg-tertiary hover:text-foreground transition-colors duration-200 text-sm focus-ring rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services links */}
            <div>
              <h4 className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-fg-tertiary mb-5">Services</h4>
              <ul className="space-y-1">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block py-1.5 text-fg-tertiary hover:text-foreground transition-colors duration-200 text-sm focus-ring rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h4 className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-fg-tertiary mb-5">Get in Touch</h4>
              <ul className="space-y-1">
                <li>
                  <a
                    href="mailto:business@tekzuri.com"
                    className="inline-block py-1.5 text-fg-tertiary hover:text-foreground transition-colors duration-200 text-sm cursor-pointer focus-ring rounded-sm"
                  >
                    business@tekzuri.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+254788871946"
                    className="inline-block py-1.5 text-fg-tertiary hover:text-foreground transition-colors duration-200 text-sm cursor-pointer focus-ring rounded-sm"
                  >
                    +254 788 871 946
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+447586752568"
                    className="inline-block py-1.5 text-fg-tertiary hover:text-foreground transition-colors duration-200 text-sm cursor-pointer focus-ring rounded-sm"
                  >
                    +44 7586 752 568
                  </a>
                </li>
                <li className="pt-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground transition-colors duration-200 group cursor-pointer focus-ring rounded-sm"
                  >
                    Start a project
                    <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border-card flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-fg-secondary text-sm">
            &copy; <CurrentYear /> TekZuri. All rights reserved.
          </p>
          <p className="text-fg-tertiary text-sm">
            Work with Elegance
          </p>
        </div>
      </div>
    </footer>
  );
}
