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

export default function Home() {
  return (
    <div className="bg-black">
     
      <HomeSection />
      <ExpertiseSection />
      <TwoImageSection />
      <TailoredSolutionsSection />
      <WhySouveralSection />
      <WhyChooseSouveralSection />
      
      <TransparentEngagementSection />
      <PhilosophySection />
      <Footer />
    </div>
  );
}
