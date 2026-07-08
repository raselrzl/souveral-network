import Image from "next/image";
import Navbar from "./components/Navbar";
import { HomeSection } from "./components/HomeSection";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { TwoImageSection } from "./components/TwoImageSection";
import { TailoredSolutionsSection } from "./components/TailoredSolutionsSection";
import { TransparentEngagementSection } from "./components/TransparentEngagementSection";
import { Footer } from "./components/Footer";
import { WhyChooseSouveralSection } from "./components/WhyChooseSouveralSection";
import PhilosophySection from "./components/OurPhilosophy";
import WhySouveralSection from "./components/WhySouveralSection";
import PopupOnViewServer from "./components/PopupOnView";
import Globe from "./components/globe/Globe";
import SectionNoise from "./components/globe/Globe";
import DefaultMousetrail from "./components/globe/Globe";
import ShaderGradientComponent from "./components/globe/ShadGradient";
import HorizontalProgressive from "./components/ui2/HorizontalProgressive";
import MarqueeDemo from "./components/ui/MarqueeDemo";

export default function Home() {
  return (
    <div className="bg-black">
      <ShaderGradientComponent />
      {/* Bottom Wave */}
      <div className="relative h-24 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000,#dc2626,#000)] animate-pulse blur-3xl opacity-70" />

        <svg
          className="absolute bottom-0 w-[200%] h-24 animate-[wave_12s_linear_infinite]"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(220,38,38,.5)"
            d="M0,96L60,85.3C120,75,240,53,360,53.3C480,53,600,75,720,90.7C840,107,960,117,1080,106.7C1200,96,1320,64,1380,48L1440,32V160H0Z"
          />
        </svg>
      </div>
      {/*    <HomeSection /> */}
      <div className="max-w-5xl mx-auto my-20">
        <HorizontalProgressive />
      </div>

      <div className="relative h-24 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000,#dc2626,#000)] animate-pulse blur-3xl opacity-70" />

        <svg
          className="absolute bottom-0 w-[200%] h-24 animate-[wave_12s_linear_infinite]"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(220,38,38,.5)"
            d="M0,96L60,85.3C120,75,240,53,360,53.3C480,53,600,75,720,90.7C840,107,960,117,1080,106.7C1200,96,1320,64,1380,48L1440,32V160H0Z"
          />
        </svg>
      </div>
      <TwoImageSection />
      <TailoredSolutionsSection />
      <WhySouveralSection />
      <div className="max-w-7xl mx-auto p-4">
        {" "}
        <MarqueeDemo />
      </div>
      <WhyChooseSouveralSection />
      <TransparentEngagementSection />
      <PopupOnViewServer />
      <PhilosophySection />
      <DefaultMousetrail />
      <Footer />
    </div>
  );
}
