import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import ActionsSection from "./sections/ActionsSection";
import ClosingSection from "./sections/ClosingSection";
import IntroSection from "./sections/IntroSection";
import LivingSection from "./sections/LivingSection";
import MythsSection from "./sections/MythsSection";
import RedFlagsSection from "./sections/RedFlagsSection";
import StagesSection from "./sections/StagesSection";
import SymptomsSection from "./sections/SymptomsSection";

const seo = pageSeo({
  title: "About CKD",
  description:
    "What chronic kidney disease is, what your kidneys do every day, the symptoms to watch for, the five stages by eGFR, the myths worth dropping, and the six things that make a real difference.",
  path: "/patient-guide/about-ckd",
  trail: [{ name: "Patient Guide", path: "/patient-guide" }],
});

export const metadata = seo.metadata;

const AboutCkdPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <IntroSection />
      <Reveal>
        <SymptomsSection />
      </Reveal>
      <Reveal>
        <StagesSection />
      </Reveal>
      <Reveal>
        <MythsSection />
      </Reveal>
      <Reveal>
        <ActionsSection />
      </Reveal>
      <Reveal>
        <RedFlagsSection />
      </Reveal>
      <Reveal>
        <LivingSection />
      </Reveal>
      <Reveal>
        <ClosingSection />
      </Reveal>
    </>
  );
};

export default AboutCkdPage;
