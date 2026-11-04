import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import EhrSection from "./sections/EhrSection";
import InitiativesGridSection from "./sections/InitiativesGridSection";
import ManualsSection from "./sections/ManualsSection";
import ResearchSection from "./sections/ResearchSection";

const seo = pageSeo({
  title: "Initiatives",
  description:
    "AKC's flagship initiatives — the Nephrology EHR Axis, Dialysis QA Framework, Vascular Access Care Pathway, the Indian Renal Data System, and the IIT Bombay operational research collaboration.",
  path: "/initiatives",
});

export const metadata = seo.metadata;

const InitiativesPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <InitiativesGridSection />
      <Reveal>
        <ResearchSection />
      </Reveal>
      <Reveal>
        <EhrSection />
      </Reveal>
      <Reveal>
        <ManualsSection />
      </Reveal>
    </>
  );
};

export default InitiativesPage;
