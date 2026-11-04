import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import AstraCtaSection from "./sections/AstraCtaSection";
import AstraHeroSection from "./sections/AstraHeroSection";
import DominoSection from "./sections/DominoSection";
import FirstDominoSection from "./sections/FirstDominoSection";
import MathSection from "./sections/MathSection";
import NumbersSection from "./sections/NumbersSection";
import PolicySection from "./sections/PolicySection";
import ProblemSection from "./sections/ProblemSection";
import ProcessSection from "./sections/ProcessSection";
import SwapSection from "./sections/SwapSection";

const seo = pageSeo({
  title: "ASTRA",
  description:
    "ASTRA — the Apex Swap Transplant Registry. Founded by the Apex Kidney Foundation in 2011, India's pioneering registry of incompatible donor-recipient pairs, using mathematical optimisation to turn locked family pairs into successful transplants.",
  path: "/astra",
});

export const metadata = seo.metadata;

const AstraPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <AstraHeroSection />
      <Reveal>
        <ProblemSection />
      </Reveal>
      <Reveal>
        <SwapSection />
      </Reveal>
      <Reveal>
        <MathSection />
      </Reveal>
      <Reveal>
        <DominoSection />
      </Reveal>
      <Reveal>
        <NumbersSection />
      </Reveal>
      <Reveal>
        <ProcessSection />
      </Reveal>
      <Reveal>
        <FirstDominoSection />
      </Reveal>
      <Reveal>
        <PolicySection />
      </Reveal>
      <Reveal>
        <AstraCtaSection />
      </Reveal>
    </>
  );
};

export default AstraPage;
