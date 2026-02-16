import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#050508]/80 backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508] rounded-sm">
            <Image
              src="/tekzuri-logo.webp"
              alt="TekZuri"
              width={48}
              height={48}
              priority
              className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2 text-fg-secondary hover:text-foreground transition-colors duration-200 text-[0.8125rem] font-medium tracking-[0.02em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508] rounded-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex cursor-pointer bg-white text-[#050508] px-5 py-2 text-sm font-medium hover:bg-white/90 transition-all duration-200 rounded-full active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
              style={{ boxShadow: 'var(--shadow-button)' }}
            >
              Contact
            </Link>

            {/* Mobile Menu - Client Component */}
            <MobileMenu navLinks={navLinks} />
          </div>
        </div>

        {/* Mobile menu content is rendered by the MobileMenu client component */}
      </div>
    </nav>
  );
}
