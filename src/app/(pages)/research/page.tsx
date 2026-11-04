import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import CollaborationsSection from "./sections/CollaborationsSection";
import DoctoralThesesSection from "./sections/DoctoralThesesSection";
import PortfolioSummarySection from "./sections/PortfolioSummarySection";
import ResearchClosingSection from "./sections/ResearchClosingSection";
import ResearchHeroSection from "./sections/ResearchHeroSection";
import ResearchPremiseSection from "./sections/ResearchPremiseSection";
import ResearchThemesSection from "./sections/ResearchThemesSection";

const seo = pageSeo({
  title: "Research & Publications",
  description:
    "Peer-reviewed research from Apex Kidney Care and the Apex Kidney Foundation on kidney exchange optimisation, vascular access policy, and home hemodialysis safety.",
  path: "/research",
});

export const metadata = seo.metadata;

const ResearchPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <ResearchHeroSection />
      <Reveal>
        <ResearchPremiseSection />
      </Reveal>
      <Reveal>
        <ResearchThemesSection />
      </Reveal>
      <Reveal>
        <DoctoralThesesSection />
      </Reveal>
      <Reveal>
        <PortfolioSummarySection />
      </Reveal>
      <Reveal>
        <CollaborationsSection />
      </Reveal>
      <Reveal>
        <ResearchClosingSection />
      </Reveal>
    </>
  );
};

export default ResearchPage;
