"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  navLinks: NavLink[];
}

export function MobileMenu({ navLinks }: MobileMenuProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 text-gray-600 hover:text-black transition-colors rounded-lg"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu overlay */}
      <div
        role="presentation"
        className={`md:hidden fixed inset-0 top-20 bg-black/20 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute left-0 right-0 top-full z-50 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="px-4 py-3 text-base font-medium text-gray-600 hover:text-black hover:bg-gray-50 transition-colors rounded-lg"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="mt-4 mx-4 text-center bg-accent text-white px-6 py-3 text-sm font-medium hover:bg-accent-light transition-colors rounded-full"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
