"use client";

import React from "react";
import DotFillBox from "./EightBoxes";

export const WhyChooseSouveralSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen bg-black text-white
                 flex flex-col items-center justify-center"
    >
      {/* Animated box */}
      <div className="flex overflow-x-clip">
        <DotFillBox /><DotFillBox /><DotFillBox />
      </div>

      {/* Content */}
      <div className="max-w-3xl px-6 md:px-12 text-center">
       

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
            centralized governance, systems, and long-term strategic oversight.
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
    </section>
  );
};
