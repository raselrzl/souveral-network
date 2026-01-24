"use client";

import Link from "next/link";
import React from "react";

export const HomeSection: React.FC = () => {
  return (
    <section className="relative w-full h-[65vh] pt-40">
      {/* Background */}

     <div
  className="absolute inset-0 bg-center bg-cover animate-spin"
  style={{
    backgroundImage: `
      radial-gradient(circle at center,
        rgba(0,0,0,0) 55%,
        rgba(0,0,0,0.6) 70%,
        rgba(0,0,0,1) 100%
      ),
      url('/home.jpeg')
    `,
    animationDuration: "90s",
  }}
/>


      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 md:bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl flex flex-col gap-6">
          {/* Main Heading (2 lines only) */}
          <h1
            className="
              text-2xl sm:text-4xl md:text-5xl
              font-bold leading-snug uppercase
              bg-linear-to-r from-gray-200 via-gray-400 to-gray-200
              bg-clip-text text-transparent
            "
          >
            <br className="hidden sm:block" />
            Building <br />
            Scalable Digital <br /> Business Ecosystems
          </h1>

          {/* Description (2 lines max) */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed ">
            Souveral is a global innovation network and holding structure
            operating across technology, media, commerce, and digital
            infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/"
              className="flex justify-center items-center px-2 py-1 w-46 bg-yellow-500 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition"
            >
              Explore Souveral
            </Link>
            <Link
              href="/"
              className="flex justify-center items-center px-2 py-1 w-30 border text-xs border-yellow-500 text-yellow-500 font-semibold rounded-full shadow-lg hover:bg-yellow-500 hover:text-black transition"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
