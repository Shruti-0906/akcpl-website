import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import AdmissionsSection from "./sections/AdmissionsSection";
import AffiliationsSection from "./sections/AffiliationsSection";
import CareerOutcomeSection from "./sections/CareerOutcomeSection";
import ClosingSection from "./sections/ClosingSection";
import DialysisSimplifiedSection from "./sections/DialysisSimplifiedSection";
import HeroSection from "./sections/HeroSection";
import InstituteSection from "./sections/InstituteSection";
import NumbersSection from "./sections/NumbersSection";
import OpportunitySection from "./sections/OpportunitySection";
import ProgrammeSection from "./sections/ProgrammeSection";

const seo = pageSeo({
  title: "Apex School of Dialysis Technology (ASDT)",
  description:
    "AKC's institute for the next generation of dialysis professionals - affiliated with TISS and MSBSVET, with structured curricula and hands-on training across 250 centres.",
  path: "/apex-school-of-dialysis-technology",
});

export const metadata = seo.metadata;

const ApexSchoolOfDialysisTechnologyPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <HeroSection />
      <Reveal>
        <OpportunitySection />
      </Reveal>
      <Reveal>
        <InstituteSection />
      </Reveal>
      <Reveal>
        <AffiliationsSection />
      </Reveal>
      <Reveal>
        <ProgrammeSection />
      </Reveal>
      <Reveal>
        <DialysisSimplifiedSection />
      </Reveal>
      <Reveal>
        <CareerOutcomeSection />
      </Reveal>
      <Reveal>
        <NumbersSection />
      </Reveal>
      <Reveal>
        <AdmissionsSection />
      </Reveal>
      <Reveal>
        <ClosingSection />
      </Reveal>
    </>
  );
};

export default ApexSchoolOfDialysisTechnologyPage;
