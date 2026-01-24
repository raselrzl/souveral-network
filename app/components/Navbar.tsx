"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Companies", href: "#companies" },
  { label: "Capabilities", href: "#about" },
  { label: "Investors", href: "/investor" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll to section if exists, otherwise navigate to home with hash
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    } else {
      // Navigate to home page with hash to scroll
      window.location.href = `/#${id}`;
    }
  };

  // Handle logo click: scroll to top if on home, otherwise navigate home
  const handleLogoClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between text-white">
          {/* Logo + Name */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-3"
          >
            <img
              src="/sov.png"
              alt="Souveral Network"
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
           
            <img
              src="/heroo.png"
              alt="Souveral Network"
              className=" h-30 object-contain mt-6"
            />

          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            {NAV_ITEMS.map((item) => {
              const isInternal = item.href.startsWith("#");
              return isInternal ? (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="text-gray-300 hover:text-white transition"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-transform ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-transform ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black text-white md:hidden flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-3xl text-gray-300 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex flex-col gap-6 px-6">
            {NAV_ITEMS.map((item) => {
              const isInternal = item.href.startsWith("#");
              return isInternal ? (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="text-gray-300 hover:text-white text-left text-lg font-medium"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white text-left text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
