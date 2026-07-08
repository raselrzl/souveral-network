"use client";
import React from "react";
import ImageMouseTrail from "../ui/ImageMouseTrail";

const images = [
  "/adlogo5.webp",
  "/gep1.png",
  "/logoc.webp",
  "/prime3.png",
  "/rasnova.webp",
  "/rpdl2.webp",
  "/logowithbg.png",
  "/logo.webp",
  "/logo3.png",
];
export default function DefaultMousetrail() {
  return (
    <section>
      <ImageMouseTrail
        items={images}
        maxNumberOfImages={5}
        distance={25}
        imgClass="w-32 h-32 sm:w-40 sm:h-40 object-contain bg-white/5 p-4 rounded-lg"
      >
        <article className="relative z-50 mix-blend-difference">
          <h1 className="lg:text-4xl md:text-3xl text-xl text-center font-semibold mix-blend-difference text-white">
            OUR <br />
            Digital <br /> Business Ecosystems
          </h1>
        </article>
      </ImageMouseTrail>
    </section>
  );
}
