import { JsonLd } from "@/components/seo";
import { Disclaimer } from "@/components/shared/Disclaimer";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import AkcSection from "./sections/AkcSection";
import BenefitsSection from "./sections/BenefitsSection";
import CtaSection from "./sections/CtaSection";
import DifferenceSection from "./sections/DifferenceSection";
import EvidenceSection from "./sections/EvidenceSection";
import ExpertQuoteSection from "./sections/ExpertQuoteSection";
import ExplainerSection from "./sections/ExplainerSection";
import HeroSection from "./sections/HeroSection";
import QualityOfLifeSection from "./sections/QualityOfLifeSection";

const seo = pageSeo({
  title: "Hemodiafiltration - HDF",
  description:
    "Hemodiafiltration clears the bigger wastes standard dialysis leaves behind. What changes, what the CONVINCE trial measured, and how Apex offers HDF in-centre and at home.",
  path: "/services/haemodiafiltration-hdf",
  trail: [{ name: "Services", path: "/services" }],
});

export const metadata = seo.metadata;

const HaemodiafiltrationPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <HeroSection />
      <Reveal>
        <DifferenceSection />
      </Reveal>
      <Reveal>
        <ExplainerSection />
      </Reveal>
      <Reveal>
        <EvidenceSection />
      </Reveal>
      <Reveal>
        <BenefitsSection />
      </Reveal>
      <Reveal>
        <QualityOfLifeSection />
      </Reveal>
      <Reveal>
        <ExpertQuoteSection />
      </Reveal>
      <Reveal>
        <AkcSection />
      </Reveal>
      <Reveal>
        <CtaSection />
      </Reveal>
      <Disclaimer />
    </>
  );
};

export default HaemodiafiltrationPage;
