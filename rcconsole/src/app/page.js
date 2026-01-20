import {
  HeroSection,
  ValueHighlights,
  FeaturesSection,
  CapabilitiesSection,
  CTASection
} from "@/components/home";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValueHighlights />
      <FeaturesSection />
      <CapabilitiesSection />
     
      <CTASection />
    </div>
  );
}
