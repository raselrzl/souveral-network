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

export default function Home() {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      <HomeSection />
      <ExpertiseSection />
      <TwoImageSection />
      <TailoredSolutionsSection />
      <WhyChooseSouveralSection />
      <TransparentEngagementSection />
      <PhilosophySection />
      <Footer />
    </div>
  );
}
