import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import AkcRoleSection from "./sections/AkcRoleSection";
import CtaSection from "./sections/CtaSection";
import DonorSection from "./sections/DonorSection";
import JourneySection from "./sections/JourneySection";
import OutcomesSection from "./sections/OutcomesSection";
import PhaseDonorSection from "./sections/PhaseDonorSection";
import PhaseEvaluationSection from "./sections/PhaseEvaluationSection";
import PhaseLifetimeSection from "./sections/PhaseLifetimeSection";
import PhaseSurgerySection from "./sections/PhaseSurgerySection";
import TypesSection from "./sections/TypesSection";

const seo = pageSeo({
  title: "Transplant Info",
  description:
    "The transplant journey in four phases - evaluation and workup, finding a donor, the surgery and recovery, and a lifetime of care - plus the types of transplant, what AKC does, and the outcomes to expect.",
  path: "/patient-guide/transplant-info",
  trail: [{ name: "Patient Guide", path: "/patient-guide" }],
});

export const metadata = seo.metadata;

const TransplantInfoPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <JourneySection />
      <Reveal>
        <PhaseEvaluationSection />
      </Reveal>
      <Reveal>
        <PhaseDonorSection />
      </Reveal>
      <Reveal>
        <PhaseSurgerySection />
      </Reveal>
      <Reveal>
        <PhaseLifetimeSection />
      </Reveal>
      <Reveal>
        <TypesSection />
      </Reveal>
      <Reveal>
        <DonorSection />
      </Reveal>
      <Reveal>
        <AkcRoleSection />
      </Reveal>
      <Reveal>
        <OutcomesSection />
      </Reveal>
      <Reveal>
        <CtaSection />
      </Reveal>
    </>
  );
};

export default TransplantInfoPage;
