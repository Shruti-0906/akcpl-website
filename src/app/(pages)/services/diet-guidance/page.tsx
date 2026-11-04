import { JsonLd } from "@/components/seo";
import { Disclaimer } from "@/components/shared/Disclaimer";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import AxisDietSection from "./sections/AxisDietSection";
import DietCtaSection from "./sections/DietCtaSection";
import DietHeroSection from "./sections/DietHeroSection";
import DietitianTeamSection from "./sections/DietitianTeamSection";
import FlavourStripSection from "./sections/FlavourStripSection";
import IndianCuisineSection from "./sections/IndianCuisineSection";
import KitchenTipsSection from "./sections/KitchenTipsSection";
import ManageSection from "./sections/ManageSection";
import RecipeBookSection from "./sections/RecipeBookSection";
import StagesSection from "./sections/StagesSection";
import WhyDietSection from "./sections/WhyDietSection";

const seo = pageSeo({
  title: "Diet Consultation",
  description:
    "AKC's renal nutrition programme - personalised, culturally familiar Indian diet plans for every CKD stage, built by renal dietitians and linked to your lab results via AXIS.",
  path: "/services/diet-guidance",
});

export const metadata = seo.metadata;

const DietGuidancePage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <DietHeroSection />
      <Reveal>
        <FlavourStripSection />
      </Reveal>
      <Reveal>
        <WhyDietSection />
      </Reveal>
      <Reveal>
        <AxisDietSection />
      </Reveal>
      <Reveal>
        <StagesSection />
      </Reveal>
      <Reveal>
        <IndianCuisineSection />
      </Reveal>
      <Reveal>
        <ManageSection />
      </Reveal>
      <Reveal>
        <DietitianTeamSection />
      </Reveal>
      <Reveal>
        <KitchenTipsSection />
      </Reveal>
      <Reveal>
        <RecipeBookSection />
      </Reveal>
      <Reveal>
        <DietCtaSection />
      </Reveal>
      <Disclaimer />
    </>
  );
};

export default DietGuidancePage;
