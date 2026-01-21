"use client";

import React, { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Companies", href: "#companies" },
  { label: "Capabilities", href: "#about" },
  { label: "Investors", href: "#investors" },
  { label: "Contact", href: "#contact" },
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
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between text-white">
          
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <img
              src="/sov.png"
              alt="Souveral Network"
              className="w-9 h-9 object-contain"
            />
            <span className="text-sm md:text-base font-semibold tracking-wide">
              Souveral Network
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
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

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black text-white md:hidden">
          <div className="p-6 flex flex-col gap-10">

            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-2xl text-gray-300 hover:text-white"
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
