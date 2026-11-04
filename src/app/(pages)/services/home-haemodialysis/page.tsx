import { JsonLd } from "@/components/seo";
import { Disclaimer } from "@/components/shared/Disclaimer";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import HomeHdCtaSection from "./sections/HomeHdCtaSection";
import HomeHdHeroSection from "./sections/HomeHdHeroSection";
import HomeHdfSection from "./sections/HomeHdfSection";
import ModalitiesSection from "./sections/ModalitiesSection";
import RiskFrameworkSection from "./sections/RiskFrameworkSection";
import SafetyQuestionSection from "./sections/SafetyQuestionSection";
import WhereWeStandSection from "./sections/WhereWeStandSection";
import WhyPatientsChooseSection from "./sections/WhyPatientsChooseSection";
import WorryScoreSection from "./sections/WorryScoreSection";

const seo = pageSeo({
  title: "Home Hemodialysis",
  description:
    "India's longest-running structured home hemodialysis programme. Apex Kidney Care has delivered 81,000+ home sessions to over 1,000 patients since 2012.",
  path: "/services/home-haemodialysis",
});

export const metadata = seo.metadata;

const HomeHaemodialysisPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <HomeHdHeroSection />
      <Reveal>
        <ModalitiesSection />
      </Reveal>
      <Reveal>
        <WhereWeStandSection />
      </Reveal>
      <Reveal>
        <WhyPatientsChooseSection />
      </Reveal>
      <Reveal>
        <SafetyQuestionSection />
      </Reveal>
      <Reveal>
        <WorryScoreSection />
      </Reveal>
      <Reveal>
        <RiskFrameworkSection />
      </Reveal>
      <Reveal>
        <HomeHdfSection />
      </Reveal>
      <Reveal>
        <HomeHdCtaSection />
      </Reveal>
      <Disclaimer />
    </>
  );
};

export default HomeHaemodialysisPage;
