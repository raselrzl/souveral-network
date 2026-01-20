"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Who We Are", href: "#about" },
  { label: "Companies", href: "#companies" },
  { label: "Investors", href: "#investors" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between text-white">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/sr2.png"
              alt="Souveral Logo"
              className="w-10 h-10 object-contain"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="text-gray-300 hover:text-white transition"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Burger Button (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-6 h-0.5 bg-white" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu (No animation) */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 text-white md:hidden">
          <div className="p-6 flex flex-col gap-8">
            
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-2xl"
            >
              ✕
            </button>

            {/* Links */}
            <nav className="flex flex-col gap-6 text-lg font-medium">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="text-gray-300 hover:text-white text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
