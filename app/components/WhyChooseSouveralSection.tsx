"use client";

import React from "react";

export const WhyChooseSouveralSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative w-full bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Left Image */}
        <div className="relative h-96 md:h-130 rounded-xl overflow-hidden ">
          {/* Rotating Image */}
          <div
            className="absolute inset-0 bg-cover bg-center grayscale animate-spin-slow"
            style={{ backgroundImage: `url('/star.png')` }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Right Content */}
        <div>
          {/* Section Heading */}
          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-semibold mb-6 leading-snug
              bg-linear-to-r from-gray-200 via-gray-400 to-gray-200
              bg-clip-text text-transparent
            "
          >
            Why Souveral Network?
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-14 max-w-2xl">
            Souveral is built as a long-term digital holding organization
            governing technology, media, and platform companies with structure,
            clarity, and authority.
          </p>

          {/* Item 1 */}
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-gray-400">
              Governance Model
            </span>
            <h3 className="text-xl font-medium mt-2 mb-3">
              Structured Holding Architecture
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Each Souveral company operates independently while sharing
              centralized governance, systems, and long-term strategic
              oversight.
            </p>
            <p className="text-3xl font-semibold text-gray-200">
              7+
              <span className="block text-sm text-gray-400 font-normal">
                Independent Subsidiaries
              </span>
            </p>
          </div>

          <div className="border-t border-gray-800 my-10" />

          {/* Item 2 */}
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-gray-400">
              Technology Focus
            </span>
            <h3 className="text-xl font-medium mt-2 mb-3">
              Systems Over Services
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              We prioritize platforms, infrastructure, and scalable systems
              instead of short-term service dependency.
            </p>
            <p className="text-3xl font-semibold text-gray-200">
              100%
              <span className="block text-sm text-gray-400 font-normal">
                Digital First Operations
              </span>
            </p>
          </div>

          <div className="border-t border-gray-800 my-10" />

          {/* Item 3 */}
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-400">
              Long-Term Vision
            </span>
            <h3 className="text-xl font-medium mt-2 mb-3">
              Built for Scale & Investment
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Every company under Souveral is designed for scalability,
              independence, and future spin-off or acquisition readiness.
            </p>
            <p className="text-3xl font-semibold text-gray-200">
              IPO-Ready
              <span className="block text-sm text-gray-400 font-normal">
                Holding Structure
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
