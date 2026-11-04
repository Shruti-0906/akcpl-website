import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import ClosingSection from "./sections/ClosingSection";
import HeroSection from "./sections/HeroSection";
import IntroSection from "./sections/IntroSection";
import MissionSection from "./sections/MissionSection";
import ValuesSection from "./sections/ValuesSection";
import VisionSection from "./sections/VisionSection";

const seo = pageSeo({
  title: "Vision, Mission & Values",
  description:
    "The vision, mission, and values that guide Apex Kidney Care's work in transforming renal health across India.",
  path: "/about/vision-mission-values",
});

export const metadata = seo.metadata;

const VisionMissionValuesPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <HeroSection />
      <Reveal>
        <IntroSection />
      </Reveal>
      <Reveal>
        <VisionSection />
      </Reveal>
      <Reveal>
        <MissionSection />
      </Reveal>
      <Reveal>
        <ValuesSection />
      </Reveal>
      <Reveal>
        <ClosingSection />
      </Reveal>
    </>
  );
};

export default VisionMissionValuesPage;
