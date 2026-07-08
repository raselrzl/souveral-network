"use client";

import React from "react";
import AnimatedBeamMultipleOutput from "./AnimatedBeamDefault";

export const TwoImageSection: React.FC = () => {
  return (
    <section className="relative w-full py-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#5875d653_1px,#06080e_1px)] bg-[size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image 1 */}
        <div className="relative overflow-hidden rounded-xl h-80 group">
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/90" />
          {/* Text */}
          <div className="absolute bottom-6 left-6 z-10 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Precision Engineering
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              Where every detail matters.
            </p>
          </div>
        </div>

        <AnimatedBeamMultipleOutput />
      </div>
    </section>
  );
};
