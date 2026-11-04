import { JsonLd } from "@/components/seo";
import { Disclaimer } from "@/components/shared/Disclaimer";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import { MODALITIES, ModalityChapter } from "./components";
import AkcStandardSection from "./sections/AkcStandardSection";
import ComparisonSection from "./sections/ComparisonSection";
import DialysisCtaSection from "./sections/DialysisCtaSection";
import PeritonealSection from "./sections/PeritonealSection";
import SpectrumSection from "./sections/SpectrumSection";

const seo = pageSeo({
  title: "Incentre Dialysis",
  description:
    "Explore the four hemodialysis modalities offered at Apex Kidney Care - Standard Flux, High Flux, HDF, and Home HD - and find the right fit for your care.",
  path: "/services/dialysis-options",
});

export const metadata = seo.metadata;

const DialysisOptionsPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <SpectrumSection />
      {MODALITIES.map((modality, i) => (
        <Reveal key={i}>
          <ModalityChapter modality={modality} />
        </Reveal>
      ))}
      <Reveal>
        <ComparisonSection />
      </Reveal>
      <Reveal>
        <PeritonealSection />
      </Reveal>
      <Reveal>
        <AkcStandardSection />
      </Reveal>
      <Reveal>
        <DialysisCtaSection />
      </Reveal>
      <Disclaimer />
    </>
  );
};

export default DialysisOptionsPage;
