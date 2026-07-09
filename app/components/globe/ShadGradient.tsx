"use client";

import React from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function ShaderGradientComponent() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Gradient Background */}
      <ShaderGradientCanvas
        style={{
          width: "100%",
          height: "100%",
        }}
        pixelDensity={1}
        pointerEvents="none"
      >
        <ShaderGradient
          animate="on"
          type="sphere"
          wireframe={false}
          shader="defaults"
          uSpeed={0.3}
          uStrength={0.3}
          uDensity={0.8}
          uFrequency={5.5}
          uAmplitude={3.2}
          positionX={-0.1}
          rotationY={130}
          rotationZ={70}
          color1="#73bfc4"
          color2="#ff810a"
          color3="#8da0ce"
          reflection={0.4}
          cAzimuthAngle={270}
          cPolarAngle={180}
          cDistance={0.5}
          cameraZoom={15.1}
          lightType="env"
          brightness={0.8}
          envPreset="city"
          grain="on"
        />
      </ShaderGradientCanvas>

      {/* Content Layer */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-white md:text-7xl text-left md:text-center">
          Building Scalable
          <span className="block bg-linear-to-r from-cyan-300 to-orange-300 bg-clip-text text-transparent">
            Digital Business Ecosystems
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/80 text-left md:text-center">
          Souveral is a global innovation network and holding structure operating across technology, media, commerce and digital infrastructure.
        </p>
   
      </div>
    </div>
  );
}
