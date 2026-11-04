import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import ChapterOneSection from "./sections/ChapterOneSection";
import ChapterTwoSection from "./sections/ChapterTwoSection";
import EighteenYearsSection from "./sections/EighteenYearsSection";
import FirstSessionSection from "./sections/FirstSessionSection";
import FoundingGroupSection from "./sections/FoundingGroupSection";
import StoryContinuesSection from "./sections/StoryContinuesSection";
import StoryHeroSection from "./sections/StoryHeroSection";
import WhereWeAreNowSection from "./sections/WhereWeAreNowSection";

const seo = pageSeo({
  title: "Our Story",
  description:
    "Four nephrologists, one conversation on the sidelines of a conference in 2003, and the eighteen years of Apex Kidney Care that followed.",
  path: "/about/our-story",
});

export const metadata = seo.metadata;

const OurStoryPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <StoryHeroSection />
      <Reveal>
        <ChapterOneSection />
      </Reveal>
      <Reveal>
        <ChapterTwoSection />
      </Reveal>
      <Reveal>
        <FoundingGroupSection />
      </Reveal>
      <Reveal>
        <FirstSessionSection />
      </Reveal>
      <Reveal>
        <EighteenYearsSection />
      </Reveal>
      <Reveal>
        <WhereWeAreNowSection />
      </Reveal>
      <Reveal>
        <StoryContinuesSection />
      </Reveal>
    </>
  );
};

export default OurStoryPage;
