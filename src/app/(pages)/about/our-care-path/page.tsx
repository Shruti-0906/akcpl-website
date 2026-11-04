import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import ChapterSection, { CHAPTERS } from "./components/ChapterSection";
import CtaSection from "./sections/CtaSection";
import HeroSection from "./sections/HeroSection";
import HorizonSection from "./sections/HorizonSection";
import JourneyIntroSection from "./sections/JourneyIntroSection";
import OpeningSection from "./sections/OpeningSection";
import PeopleSection from "./sections/PeopleSection";
import PillarsSection from "./sections/PillarsSection";
import PlusSection from "./sections/PlusSection";

const seo = pageSeo({
  title: "Our Care Path",
  description:
    "How Apex Kidney Care cares for dialysis patients across 220+ centres, from the first walk-through to the transplant conversation.",
  path: "/about/our-care-path",
});

export const metadata = seo.metadata;

const OurCarePathPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <HeroSection />
      <Reveal>
        <OpeningSection />
      </Reveal>
      <Reveal>
        <JourneyIntroSection />
      </Reveal>
      {CHAPTERS.map((chapter, index) => (
        <Reveal key={chapter.roman}>
          <ChapterSection chapter={chapter} index={index} />
        </Reveal>
      ))}
      <Reveal>
        <PillarsSection />
      </Reveal>
      <Reveal>
        <PeopleSection />
      </Reveal>
      <Reveal>
        <HorizonSection />
      </Reveal>
      <Reveal>
        <PlusSection />
      </Reveal>
      <Reveal>
        <CtaSection />
      </Reveal>
    </>
  );
};

export default OurCarePathPage;
