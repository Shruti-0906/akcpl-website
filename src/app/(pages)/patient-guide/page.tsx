import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import CkdSection from "./sections/CkdSection";
import DialysisSection from "./sections/DialysisSection";
import DietSection from "./sections/DietSection";
import HeroSection from "./sections/HeroSection";
import ReassuranceSection from "./sections/ReassuranceSection";
import TransplantSection from "./sections/TransplantSection";
import VascularAccessSection from "./sections/VascularAccessSection";

const seo = pageSeo({
  title: "Patient Guide",
  description:
    "What chronic kidney disease actually means, explained without jargon - the basics of CKD, your dialysis options, vascular access, kidney transplant, and the renal diet.",
  path: "/patient-guide",
});

export const metadata = seo.metadata;

const PatientGuidePage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <HeroSection />
      <Reveal>
        <ReassuranceSection />
      </Reveal>
      <Reveal>
        <CkdSection />
      </Reveal>
      <Reveal>
        <DialysisSection />
      </Reveal>
      <Reveal>
        <VascularAccessSection />
      </Reveal>
      <Reveal>
        <TransplantSection />
      </Reveal>
      <Reveal>
        <DietSection />
      </Reveal>
    </>
  );
};

export default PatientGuidePage;
