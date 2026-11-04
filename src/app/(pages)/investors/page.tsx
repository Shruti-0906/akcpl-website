import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import PillarChapter, { PILLARS } from "./components/PillarChapter";
import BusinessSection from "./sections/BusinessSection";
import CapitalPartnersSection from "./sections/CapitalPartnersSection";
import ImpactSection from "./sections/ImpactSection";
import InvestorsCtaSection from "./sections/InvestorsCtaSection";
import InvestorsHeroSection from "./sections/InvestorsHeroSection";
import MarketSection from "./sections/MarketSection";
import MoatIntroSection from "./sections/MoatIntroSection";
import PartnerCriteriaSection from "./sections/PartnerCriteriaSection";
import TeamSection from "./sections/TeamSection";
import ThesisSection from "./sections/ThesisSection";

const seo = pageSeo({
  title: "Investors",
  description:
    "The investment case for Apex Kidney Care - India's largest single-specialty nephrology network. Market opportunity, the six pillars of the moat, business model, impact, and how we choose our capital partners.",
  path: "/investors",
});

export const metadata = seo.metadata;

const InvestorsPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <InvestorsHeroSection />
      <Reveal>
        <ThesisSection />
      </Reveal>
      <Reveal>
        <MarketSection />
      </Reveal>
      <Reveal>
        <MoatIntroSection />
      </Reveal>
      {PILLARS.map((pillar, index) => (
        <Reveal key={pillar.numeral}>
          <PillarChapter pillar={pillar} index={index} />
        </Reveal>
      ))}
      <Reveal>
        <BusinessSection />
      </Reveal>
      <Reveal>
        <ImpactSection />
      </Reveal>
      <Reveal>
        <TeamSection />
      </Reveal>
      <Reveal>
        <CapitalPartnersSection />
      </Reveal>
      <Reveal>
        <PartnerCriteriaSection />
      </Reveal>
      <Reveal>
        <InvestorsCtaSection />
      </Reveal>
    </>
  );
};

export default InvestorsPage;
