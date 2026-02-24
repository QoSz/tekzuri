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
  isOpen: boolean;
  onClose: () => void;
  panelTop: number;
}

export function MobileMenu({ navItems, isOpen, onClose, panelTop }: MobileMenuProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    setOpenItem(null);
  };

  const toggleItem = (label: string) =>
    setOpenItem((prev) => (prev === label ? null : label));

  return (
    <>
      {/* Full-viewport blurred backdrop */}
      <div
        role="presentation"
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Floating glassmorphic panel */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed left-4 right-4 z-50 rounded-xl transition-all duration-300 ease-out overflow-hidden ${
          isOpen
            ? "max-h-[36rem] opacity-100 translate-y-0 pointer-events-auto"
            : "max-h-0 opacity-0 -translate-y-1 pointer-events-none"
        }`}
        style={{
          backgroundColor: "rgba(8, 8, 16, 0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)",
          top: `${panelTop}px`,
        }}
        aria-hidden={!isOpen}
      >
        <nav className="p-6">
          <ul className="flex flex-col gap-2" role="list">
            {navItems.map((item) =>
              item.children ? (
                <li key={item.href}>
                  {/* Accordion trigger */}
                  <button
                    type="button"
                    onClick={() => toggleItem(item.label)}
                    className="flex items-center justify-between w-full py-2 font-medium text-white/90 hover:text-white transition-colors duration-200 cursor-pointer text-xl leading-7"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      strokeWidth={2}
                      className={`text-white/50 transition-transform duration-200 ${
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
                    <div className="pt-1 pb-2 flex flex-col gap-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href + child.label}
                          href={child.href}
                          onClick={handleClose}
                          className="flex flex-col px-3 py-2.5 rounded-lg transition-colors duration-150 hover:bg-white/10"
                        >
                          <span className="font-medium text-white/80 text-sm">
                            {child.label}
                          </span>
                          {child.description && (
                            <span className="text-white/40 text-xs leading-snug">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={handleClose}
                    className="block py-2 font-medium text-white/90 hover:text-white transition-colors duration-200 text-xl leading-7"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Divider + Contact CTA */}
          <div
            className="mt-4 pt-4"
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <Link
              href="/contact"
              onClick={handleClose}
              className="block py-2 font-medium text-white/50 hover:text-white transition-colors duration-200 text-sm"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
