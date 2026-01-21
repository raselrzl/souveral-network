"use client";

import React from "react";

export const HomeSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen md:h-[75vh] lg:h-[70vh]">
      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/hero22.avif')` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-xl flex flex-col gap-6">
          {/* Main Heading (2 lines only) */}
          <h1
            className="
              text-4xl sm:text-4xl md:text-5xl
              font-bold leading-snug uppercase
              bg-linear-to-r from-gray-200 via-gray-400 to-gray-200
              bg-clip-text text-transparent
            "
          >
            <br className="hidden sm:block" /> One
            <br className="" />
            Uncompromising Standard!
          </h1>

          {/* Description (2 lines max) */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed ">
            Souveral Group is a multi-sector parent organization operating
            across media, technology, commerce, and digital services building
            independent companies.
          </p>
           


          {/* Philosophy (short & strong) */}
          <p className="inline-block w-auto text-amber-300 text-xs uppercase tracking-widest py-1">
            We create standards.
          </p>
        </div>
      </div>
    </section>
  );
};
