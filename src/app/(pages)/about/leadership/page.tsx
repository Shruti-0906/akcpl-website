import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import LeadershipHeroSection from "./sections/LeadershipHeroSection";
import LeadershipTeamSection from "./sections/LeadershipTeamSection";

const seo = pageSeo({
  title: "Leadership",
  description:
    "Meet the leadership team driving Apex Kidney Care's mission to deliver safe, high quality kidney care across India.",
  path: "/about/leadership",
});

export const metadata = seo.metadata;

const LeadershipPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <LeadershipHeroSection />
      <Reveal>
        <LeadershipTeamSection />
      </Reveal>
    </>
  );
};

export default LeadershipPage;
