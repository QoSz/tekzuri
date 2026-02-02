import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/tekzuri-logo.webp"
              alt="TekZuri"
              width={48}
              height={48}
              priority
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <span className="hidden sm:block text-lg font-semibold tracking-tight">
              TekZuri
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-4/5" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 text-sm font-medium hover:bg-accent transition-colors duration-300 rounded-full"
            >
              Get Started
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
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
