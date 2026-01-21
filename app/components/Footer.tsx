"use client";

import React from "react";
import {
  Building2,
  Briefcase,
  Factory,
  ShieldCheck,
  MapPin,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-extrabold tracking-wide">
            Souveral Network
          </h3>
          <p className="text-sm tracking-widest text-gray-400 uppercase mt-1">
            Technology & Digital Infrastructure
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed max-w-sm">
            Souveral Network designs, builds, and governs scalable digital
            platforms, enterprise systems, and media infrastructure across
            multiple industries.
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
          <h4 className="text-lg font-semibold mb-4">Operations</h4>

          <div className="flex items-start gap-3 text-gray-300 mb-6">
            <MapPin size={20} className="text-gray-400 mt-1" />
            <span>
              Managed internationally with leadership and core operations based
              in Europe.
            </span>
          </div>

          {/* Flags */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src="swedish.png"
                alt="Sweden"
                className="w-8 h-5 object-cover rounded-sm"
              />
              <span className="text-sm text-gray-300">Sweden</span>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="/portugal.webp"
                alt="Portugal"
                className="w-8 h-5 object-cover rounded-sm"
              />
              <span className="text-sm text-gray-300">Portugal</span>
            </div>
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
