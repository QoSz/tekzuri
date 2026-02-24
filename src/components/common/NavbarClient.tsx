"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

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

interface NavbarClientProps {
  navItems: NavItem[];
}

export function NavbarClient({ navItems }: NavbarClientProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [panelTop, setPanelTop] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleOpen = useCallback((label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  }, []);

  const handleClose = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  }, []);

  const handleImmediateClose = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(null);
  }, []);

  const openMobileMenu = () => {
    if (navbarRef.current) {
      setPanelTop(navbarRef.current.getBoundingClientRect().bottom + 4);
    }
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Background overlay — dims + blurs page when dropdown is open */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          openDropdown
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
        onClick={handleImmediateClose}
        aria-hidden="true"
      />

      <nav className="sticky top-0 z-[45] pointer-events-none">
        <div className="max-w-[90rem] mx-auto px-4 md:px-6 pt-3">
          <div
            ref={navbarRef}
            data-navbar
            className="relative z-[45] flex items-center justify-between h-16 px-6 md:px-8 rounded-xl pointer-events-auto"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow:
                "0 4px 24px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.06)",
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group shrink-0"
              aria-label="TekZuri home"
            >
              <Image
                src="/tekzuri-logo.webp"
                alt="TekZuri"
                width={48}
                height={48}
                priority
                className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>

            {/* Desktop nav — centered */}
            <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => handleOpen(item.label)}
                    onMouseLeave={handleClose}
                  >
                    {/* Trigger — active pill when dropdown is open */}
                    <div
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium cursor-pointer select-none transition-all duration-200 text-base leading-normal ${
                        openDropdown === item.label
                          ? "bg-white/15 text-white"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        strokeWidth={2.5}
                        className={`mt-px transition-transform duration-200 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* Invisible bridge so cursor can travel to dropdown */}
                    <div className="absolute top-full left-0 w-full h-3" />

                    {/* Dropdown panel — Athleats-style solid card */}
                    <div
                      className={`absolute top-[calc(100%+0.75rem)] left-0 transition-all duration-200 ease-out z-50 ${
                        openDropdown === item.label
                          ? "visible opacity-100 translate-y-0 scale-100"
                          : "invisible opacity-0 -translate-y-1.5 scale-[0.98]"
                      }`}
                      style={{ minWidth: "16rem" }}
                    >
                      <div
                        className="rounded-xl p-2"
                        style={{
                          backgroundColor: "var(--bg-elevated)",
                          border: "1px solid var(--border-default)",
                          boxShadow:
                            "0 20px 60px rgba(0, 0, 0, 0.5), 0 8px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.06)",
                        }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href + child.label}
                            href={child.href}
                            onClick={handleImmediateClose}
                            className="flex flex-col px-4 py-3 rounded-lg transition-colors duration-150 hover:bg-white/[0.08]"
                          >
                            <span className="font-semibold text-white/95 text-[15px] leading-tight">
                              {child.label}
                            </span>
                            <span className="text-white/45 text-[13px] leading-snug mt-0.5">
                              {child.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 rounded-lg font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 text-base leading-normal"
                    onMouseEnter={handleImmediateClose}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* Right side: ghost link + hamburger */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="hidden md:inline-flex cursor-pointer font-medium text-white/60 hover:text-white hover:bg-white/10 transition-colors duration-200 rounded-lg px-3 py-2 text-base leading-normal"
              >
                Contact
              </Link>

              {/* Hamburger — 2-line animated to X */}
              <button
                type="button"
                onClick={() =>
                  isMobileMenuOpen ? closeMobileMenu() : openMobileMenu()
                }
                className="md:hidden relative w-8 h-8 flex items-center justify-center cursor-pointer rounded-lg text-white/80 hover:text-white transition-colors duration-200"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <div className="relative w-[19px] h-[14px]">
                  {/* Top line */}
                  <span
                    className={`absolute left-0 w-full h-[1.5px] bg-current rounded-full transition-all duration-300 ease-out ${
                      isMobileMenuOpen
                        ? "top-1/2 -translate-y-1/2 rotate-45"
                        : "top-0 translate-y-0 rotate-0"
                    }`}
                  />
                  {/* Bottom line */}
                  <span
                    className={`absolute left-0 w-full h-[1.5px] bg-current rounded-full transition-all duration-300 ease-out ${
                      isMobileMenuOpen
                        ? "bottom-1/2 translate-y-1/2 -rotate-45"
                        : "bottom-0 translate-y-0 rotate-0"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile menu — outside [data-navbar] to avoid
              backdrop-filter stacking context, no portal needed */}
          <MobileMenu
            navItems={navItems}
            isOpen={isMobileMenuOpen}
            onClose={closeMobileMenu}
            panelTop={panelTop}
          />
        </div>
      </nav>
    </>
  );
}
