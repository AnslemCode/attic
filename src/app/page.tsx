import NavBar from "@/components/common/NavBar";
import AlertSection from "@/components/sections/AlertSection";
import CRMSection from "@/components/sections/CRMSection";
import DataModellingSection from "@/components/sections/DataModellingSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import LovedByBuildersSection from "@/components/sections/LovedByBuildersSection";
import MarqueSection from "@/components/sections/MarqueSection";
import MoreFeaturesSection from "@/components/sections/MoreFeaturesSection";
import MultiPlayerDesignSection from "@/components/sections/MultiPlayerDesignSection";
import ReadyToBuildSection from "@/components/sections/ReadyToBuildSection";
import SecurityScaleSection from "@/components/sections/SecurityScaleSection";

export default function Home() {
  return (
    <main className="font-sans">
      <AlertSection />
      <NavBar />
      <HeroSection />
      <MarqueSection />
      <CRMSection />
      <DataModellingSection />
      <MultiPlayerDesignSection />
      <SecurityScaleSection />
      <MoreFeaturesSection />
      <LovedByBuildersSection />
      <ReadyToBuildSection />
      <FooterSection />
    </main>
  );
}
