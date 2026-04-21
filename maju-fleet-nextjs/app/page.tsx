import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import VisionMissionSection from "@/components/home/VisionMissionSection";
import MetricsSection from "@/components/home/MetricsSection";

export default function HomePage() {
  return (
    <div className="bg-[#0a0a0c] min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <VisionMissionSection />
      <MetricsSection />
    </div>
  );
}