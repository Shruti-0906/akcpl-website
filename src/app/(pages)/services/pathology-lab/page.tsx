import { JsonLd } from "@/components/seo";
import { Disclaimer } from "@/components/shared/Disclaimer";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import FlowSection from "./sections/FlowSection";
import InstrumentationSection from "./sections/InstrumentationSection";
import LabCtaSection from "./sections/LabCtaSection";
import LabHeroSection from "./sections/LabHeroSection";
import PackagesSection from "./sections/PackagesSection";
import PatientsSection from "./sections/PatientsSection";
import PremiseSection from "./sections/PremiseSection";
import QualitySection from "./sections/QualitySection";
import VisionMissionSection from "./sections/VisionMissionSection";

const seo = pageSeo({
  title: "Pathology Lab",
  description:
    "Apex Kidney Care Pathology Lab (AKCPL) is Apex Kidney Care's NABL-accredited in-house diagnostics lab, integrated directly into the Axis EMR for trend-based, not just point-in-time, results.",
  path: "/services/pathology-lab",
});

export const metadata = seo.metadata;

const PathologyLabPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <LabHeroSection />
      <Reveal>
        <PremiseSection />
      </Reveal>
      <Reveal>
        <FlowSection />
      </Reveal>
      <Reveal>
        <PackagesSection />
      </Reveal>
      <Reveal>
        <InstrumentationSection />
      </Reveal>
      <Reveal>
        <QualitySection />
      </Reveal>
      <Reveal>
        <VisionMissionSection />
      </Reveal>
      <Reveal>
        <PatientsSection />
      </Reveal>
      <Reveal>
        <LabCtaSection />
      </Reveal>
      <Disclaimer />
    </>
  );
};

export default PathologyLabPage;
