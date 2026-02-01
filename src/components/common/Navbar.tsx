import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-gray-100">
      <Link href="/">
        <Image
          src="/tekzuri-logo.webp"
          alt="TekZuri Logo"
          width={70}
          height={70}
          priority
        />
      </Link>
      <div className="hidden md:flex items-center gap-10">
        <a href="#services" className="text-gray-600 hover:text-burgundy transition-colors tracking-wide text-sm uppercase">
          Services
        </a>
        <a href="/our-work" className="text-gray-600 hover:text-burgundy transition-colors tracking-wide text-sm uppercase">
          Our Work
        </a>
        <a href="/about" className="text-gray-600 hover:text-burgundy transition-colors tracking-wide text-sm uppercase">
          About
        </a>
        <a href="/contact" className="text-gray-600 hover:text-burgundy transition-colors tracking-wide text-sm uppercase">
          Contact
        </a>
      </div>
      <a
        href="/contact"
        className="bg-burgundy text-white px-6 py-3 hover:bg-burgundy-dark transition-colors font-medium text-sm tracking-wide uppercase rounded-md"
      >
        Get Started
      </a>
    </nav>
  );
}
