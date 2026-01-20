"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

interface CapabilityItem {
  title: string;
  description: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    title: "Holding & Governance",
    description:
      "Souveral operates as a parent organization providing strategic governance, compliance frameworks, and long-term vision across all subsidiary companies.",
  },
  {
    title: "Technology Infrastructure",
    description:
      "Shared technology systems, platforms, and digital architecture powering scalable operations across apps, web, media, and commerce ventures.",
  },
  {
    title: "Digital Products & Platforms",
    description:
      "Development and ownership of software products, applications, and digital platforms designed for independent growth and future spin-offs.",
  },
  {
    title: "Consulting & Strategy",
    description:
      "Business, technology, and growth consulting delivered through structured advisory models for internal companies and select partners.",
  },
  {
    title: "Media & Digital Presence",
    description:
      "Media operations, brand communications, and digital influence channels built with editorial control and long-term authority in mind.",
  },
  {
    title: "Scalable Company Building",
    description:
      "Designing companies from inception with scalability, independence, and investment readiness as core principles.",
  },
];

export const ExpertiseSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4
            bg-linear-to-r from-gray-200 via-gray-400 to-gray-200
            bg-clip-text text-transparent">
            Who We Are
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed line-clamp-3">
            Souveral Group is a multi-sector holding organization governing
            independent companies across technology, media, commerce, and
            digital services—built for authority, scalability, and long-term
            value creation.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAPABILITIES.map((item) => (
            <div
              key={item.title}
              className="
                flex items-start gap-4
                bg-[#0f0f0f]
                border border-gray-800
                rounded-xl
                p-6
                hover:border-gray-600
                transition
              "
            >
              {/* Icon */}
              <div className="text-gray-400 mt-1">
                <CheckCircle size={22} />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-2 text-gray-100">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
