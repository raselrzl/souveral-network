"use client";

import React from "react";
import {
  Building2,
  Briefcase,
  Factory,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-extrabold tracking-wide">OUR NETWORK</h3>
          <p className="text-xs tracking-widest text-gray-400 uppercase mt-1">
            Connected Initiatives, Independent Strength
          </p>

          <p className="text-gray-300 text-[14px] mt-4 leading-relaxed max-w-sm">
            Souveral operates through a growing ecosystem of platforms and
            ventures, each aligned with our strategic vision while maintaining
            operational independence.
          </p>
          <p className="text-gray-300 text-[14px] mt-4 leading-relaxed max-w-sm">
            Our network structure allows innovation to move fast without
            compromising stability or standards.
          </p>
        </div>

        {/* Capabilities */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Core Capabilities</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3">
              <Building2 size={18} className="text-gray-400" />
              Digital Platforms & Products
            </li>
            <li className="flex items-center gap-3">
              <Briefcase size={18} className="text-gray-400" />
              Enterprise Systems & Consulting
            </li>
            <li className="flex items-center gap-3">
              <Factory size={18} className="text-gray-400" />
              Cloud & Infrastructure
            </li>
            <li className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-gray-400" />
              Governance, Security & Scalability
            </li>
          </ul>
        </div>

        {/* Operations */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Let’s Build Something Sustainable</h4>

          <div className="flex items-start gap-3 text-gray-300 mb-6 text-xs">
            <span>
              Whether you’re an investor, partner, creator, or organization, we welcome collaboration aligned with our vision.
            </span>
          </div>

         <div className="flex flex-col sm:flex-row gap-3 mt-6">
  

  {/* Discover Opportunities Button */}
  <Link
    href="#opportunities"
    className="flex justify-center items-center px-3 py-1 w-46 border border-yellow-500 text-gray-500 text-sm font-semibold rounded-full shadow hover:bg-gray-500 hover:text-black transition"
  >
    Discover Opportunities
  </Link>
  {/* Contact Us Button */}
  <Link
    href="#contact"
    className="flex justify-center items-center px-3 py-1 w-36 bg-yellow-500 text-black text-sm font-semibold rounded-full shadow hover:bg-yellow-400 transition"
  >
    Contact Us
  </Link>
</div>


        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Souveral Network. All rights reserved.
      </div>
    </footer>
  );
};
