"use client";

import React from "react";
import { BadgeCheck, ShieldAlert, TrendingUp } from "lucide-react";

export const TailoredSolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="relative w-full bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-semibold leading-snug mb-6
              bg-linear-to-r from-gray-200 via-gray-400 to-gray-200
              bg-clip-text text-transparent
            "
          >
            <span className="text-amber-600">Technology Solutions </span>
            <br className="" />{"   "}
               Built for Scale & Authority
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed line-clamp-2">
            We design and govern digital systems, platforms, and services that
            power independent companies across technology, media, and commerce.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card 1 */}
          <div className="relative rounded-xl overflow-hidden border border-gray-800 bg-[#0f0f0f] hover:border-gray-600 transition">
            <div className="p-6">
              <h3 className="text-xl font-medium mb-3">
                Software & Platform Development
              </h3>
              <p className="text-gray-400 mb-5 leading-relaxed">
                Building scalable applications, internal platforms, and
                SaaS-ready systems designed for long-term growth.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Web Apps", "SaaS", "APIs"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs border border-gray-700 rounded-full text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-xl overflow-hidden border border-gray-800 bg-[#0f0f0f] hover:border-gray-600 transition">
            <div className="p-6">
              <h3 className="text-xl font-medium mb-3">
                Digital Infrastructure & Cloud
              </h3>
              <p className="text-gray-400 mb-5 leading-relaxed">
                Secure, resilient infrastructure supporting apps, data,
                commerce, and media operations across the Souveral ecosystem.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Cloud", "Security", "Scalability"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs border border-gray-700 rounded-full text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-xl overflow-hidden border border-gray-800 bg-[#0f0f0f] hover:border-gray-600 transition">
            <div className="p-6">
              <h3 className="text-xl font-medium mb-3">
                Strategy, Consulting & Governance
              </h3>
              <p className="text-gray-400 mb-5 leading-relaxed">
                Technology strategy, systems governance, and operational models
                designed for independence and investor readiness.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Governance", "Advisory", "Growth"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs border border-gray-700 rounded-full text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Feature Row */}
        <div className="mt-16 pt-10 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex gap-4 items-start">
            <div className="p-2 rounded-lg border border-gray-700 text-gray-300">
              <BadgeCheck size={22} />
            </div>
            <div>
              <h4 className="text-lg font-medium mb-1">Reliable Systems</h4>
              <p className="text-gray-400 leading-relaxed">
                Built with long-term stability, security, and performance in mind.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-2 rounded-lg border border-gray-700 text-gray-300">
              <ShieldAlert size={22} />
            </div>
            <div>
              <h4 className="text-lg font-medium mb-1">Security & Control</h4>
              <p className="text-gray-400 leading-relaxed">
                Structured governance and risk-aware technology decisions.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-2 rounded-lg border border-gray-700 text-gray-300">
              <TrendingUp size={22} />
            </div>
            <div>
              <h4 className="text-lg font-medium mb-1">Scalable Growth</h4>
              <p className="text-gray-400 leading-relaxed">
                Systems designed to scale into independent, investment-ready companies.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
