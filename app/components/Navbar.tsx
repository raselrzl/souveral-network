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
          <button onClick={handleLogoClick} className="flex items-center">
            <img
              src="/sov.png"
              alt="Souveral Network"
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />

            <img
              src="/heroo.png"
              alt="Souveral Network"
              className="h-30 object-contain mt-4 animate-fade"
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

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* Face */}
            <div
              className={`w-8 h-8 bg-white rounded-full flex items-center justify-center relative transition-all duration-500 ${
                isOpen ? "scale-90" : "scale-100"
              }`}
            >
              {/* Eyes */}
              <div
                className={`absolute left-2 top-2 w-2 h-2 bg-black rounded-full transition-all duration-500 ${
                  isOpen ? "translate-y-0.5" : ""
                }`}
              ></div>
              <div
                className={`absolute right-2 top-2 w-2 h-2 bg-black rounded-full transition-all duration-500 ${
                  isOpen ? "translate-y-0.5" : ""
                }`}
              ></div>

              {/* Eye highlights */}
              <div className="absolute left-3 top-3 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute right-3 top-3 w-0.5 h-0.5 bg-white rounded-full"></div>

              {/* Nose */}
              <div className="absolute top-5 w-1.5 h-0.5 bg-black rounded-full"></div>

              {/* Mouth */}
              <div
                className={`absolute top-6 w-2.5 h-0.5 bg-black rounded-full transition-all duration-500 ${
                  isOpen ? "scale-x-0" : "scale-x-100"
                }`}
              ></div>
            </div>

            {/* Ears */}
            <div
              className={`absolute left-0 top-0 w-3 h-3 bg-black rounded-full transition-transform duration-500 ${
                isOpen ? "-translate-x-0.5 -translate-y-0.5" : ""
              }`}
            ></div>
            <div
              className={`absolute right-0 top-0 w-3 h-3 bg-black rounded-full transition-transform duration-500 ${
                isOpen ? "translate-x-0.5 -translate-y-0.5" : ""
              }`}
            ></div>
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
