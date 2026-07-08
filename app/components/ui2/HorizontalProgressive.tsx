"use client";

import {
  ProgressSlider,
  SliderBtn,
  SliderBtnGroup,
  SliderContent,
  SliderWrapper,
} from "@/components/uilayouts/progressive-carousel";
import { CheckCircle } from "lucide-react";

const CAPABILITIES = [
  {
    title: "Holding & Governance",
    description:
      "Souveral operates as a parent organization providing strategic governance, compliance frameworks, and long-term vision across all subsidiary companies.",
    sliderName: "governance",
  },
  {
    title: "Technology Infrastructure",
    description:
      "Shared technology systems, platforms, and digital architecture powering scalable operations across apps, web, media, and commerce ventures.",
    sliderName: "technology",
  },
  {
    title: "Digital Products & Platforms",
    description:
      "Development and ownership of software products, applications, and digital platforms designed for independent growth and future spin-offs.",
    sliderName: "products",
  },
  {
    title: "Consulting & Strategy",
    description:
      "Business, technology, and growth consulting delivered through structured advisory models for internal companies and select partners.",
    sliderName: "consulting",
  },
  {
    title: "Media & Digital Presence",
    description:
      "Media operations, brand communications, and digital influence channels built with editorial control and long-term authority in mind.",
    sliderName: "media",
  },
  {
    title: "Scalable Company Building",
    description:
      "Designing companies from inception with scalability, independence, and investment readiness as core principles.",
    sliderName: "scalable",
  },
];

export default function HorizontalProgressive() {
  return (
    <ProgressSlider
      vertical={false}
      activeSlider="technology"
      className="max-w-7xl mx-auto"
    >
      <SliderContent>
        {CAPABILITIES.map((item) => (
          <SliderWrapper key={item.sliderName} value={item.sliderName}>
            <div
              className="
  min-h-[420px]
  md:h-[420px]
  rounded-2xl
  border border-gray-800
  bg-[#0f0f0f]
  p-6 md:p-10
  pb-28 md:pb-10
  flex flex-col justify-center
  text-white
"
            >
              {" "}
              <CheckCircle size={48} className="text-red-500 mb-6" />
              <h2 className="text-4xl font-bold mb-6">{item.title}</h2>
              <p className="text-lg text-gray-400 leading-8 max-w-3xl">
                {item.description}
              </p>
            </div>
          </SliderWrapper>
        ))}
      </SliderContent>

      <SliderBtnGroup className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md overflow-hidden grid grid-cols-3 md:grid-cols-6 rounded-md border border-gray-800">
        {CAPABILITIES.map((item, index) => (
          <SliderBtn
            key={item.sliderName}
            value={item.sliderName}
            className="text-left p-4 border-r border-gray-800 min-w-[150px]"
            progressBarClass="bg-red-500 h-full"
          >
            {/* Number */}
            <div className="text-red-500 text-xs font-bold mb-2">
              {(index + 1).toString().padStart(2, "0")}
            </div>
          </SliderBtn>
        ))}
      </SliderBtnGroup>
    </ProgressSlider>
  );
}
