import { HeroSection } from "@/components/blocks/hero-section";
import {
  SolutionsSection,
  ArchitectureSection,
  WhySection,
  ContactCtaSection,
} from "@/components/blocks/home-sections";
import { ProcessSection } from "@/components/blocks/process-section";
import { TechnologySection } from "@/components/blocks/technology-section";
import { CaseStudySection } from "@/components/blocks/case-study-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <ArchitectureSection />
      <ProcessSection />
      <WhySection />
      <TechnologySection />
      <CaseStudySection />
      <ContactCtaSection />
    </>
  );
}
