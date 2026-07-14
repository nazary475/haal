import { HeroSection } from "@/components/blocks/hero-section";
import {
  SolutionsSection,
  ProjectsSection,
  WhySection,
  ServicesSection,
  AboutTeaserSection,
  ContactCtaSection,
} from "@/components/blocks/home-sections";
import { PartnersSection } from "@/components/site/partners-section";
import { AdvisorsSection } from "@/components/site/advisors-section";
import { FounderSection } from "@/components/site/founder-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <ProjectsSection />
      <WhySection />
      <PartnersSection variant="compact" />
      <AdvisorsSection variant="compact" />
      <FounderSection />
      <ServicesSection />
      <AboutTeaserSection />
      <ContactCtaSection />
    </>
  );
}
