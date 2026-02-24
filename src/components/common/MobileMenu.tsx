"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface NavChild {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

interface MobileMenuProps {
  navItems: NavItem[];
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setOpenItem(null);
      return;
    }
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const toggleItem = (label: string) =>
    setOpenItem((prev) => (prev === label ? null : label));

  return (
    <>
      {/* Hamburger */}
      <button
        type="button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 cursor-pointer transition-colors duration-200 rounded-[0.375rem] hover:bg-[#f5f5f5]"
        style={{ color: "#000000" }}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Backdrop */}
      <div
        role="presentation"
        className={`md:hidden fixed inset-0 top-[4.5rem] bg-black/10 transition-opacity duration-300 z-40 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute left-0 right-0 top-full z-50 border-b transition-all duration-300 ease-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "#ffffff", borderBottomColor: "#000000" }}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="max-w-[90rem] mx-auto px-10 py-4">
          <div className="flex flex-col gap-0.5">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.href}>
                  {/* Accordion trigger */}
                  <button
                    type="button"
                    onClick={() => toggleItem(item.label)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-[0.375rem] font-medium transition-colors duration-200 hover:bg-[#f5f5f5] cursor-pointer"
                    style={{ color: "#000000", fontSize: "1rem", fontWeight: 500 }}
                  >
                    {item.label}
                    <ChevronDown
                      size={15}
                      strokeWidth={2.5}
                      className={`transition-transform duration-200 ${
                        openItem === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion children */}
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      openItem === item.label ? "max-h-64" : "max-h-0"
                    }`}
                  >
                    <div className="pl-4 pb-1 flex flex-col gap-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href + child.label}
                          href={child.href}
                          onClick={closeMobileMenu}
                          className="flex flex-col px-4 py-2.5 rounded-[0.375rem] transition-colors duration-150 hover:bg-[#f5f5f5]"
                        >
                          <span
                            className="font-medium"
                            style={{ color: "#000000", fontSize: "0.875rem" }}
                          >
                            {child.label}
                          </span>
                          {child.description && (
                            <span style={{ color: "#777777", fontSize: "0.75rem" }}>
                              {child.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="px-4 py-3 rounded-[0.375rem] font-medium transition-colors duration-200 hover:bg-[#f5f5f5]"
                  style={{ color: "#000000", fontSize: "1rem", fontWeight: 500 }}
                >
                  {item.label}
                </Link>
              )
            )}

            {/* CTA row */}
            <div className="pt-3 pb-1 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-[0.375rem] font-medium transition-colors duration-200 hover:bg-[#f5f5f5] text-center"
                style={{ color: "#555555", fontSize: "1rem", fontWeight: 500 }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
