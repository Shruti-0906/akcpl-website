import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import ApplyFlow from "./components/ApplyFlow";
import AsdtSection from "./sections/AsdtSection";
import BenefitsSection from "./sections/BenefitsSection";
import CareersHeroSection from "./sections/CareersHeroSection";
import ClosingSection from "./sections/ClosingSection";
import RolesSection from "./sections/RolesSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import WhySection from "./sections/WhySection";

const seo = pageSeo({
  title: "Careers",
  description:
    "Careers at Apex Kidney Care - clinical, technical, and operational roles across 250+ dialysis centres in 14 states. Work that visibly matters, in an institution that has been building Indian nephrology for eighteen years.",
  path: "/careers",
});

export const metadata = seo.metadata;

const CareersPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <ApplyFlow>
        <CareersHeroSection />
        <Reveal>
          <RolesSection />
        </Reveal>
        <Reveal>
          <TestimonialsSection />
        </Reveal>
        <Reveal>
          <WhySection />
        </Reveal>
        <Reveal>
          <BenefitsSection />
        </Reveal>
        <Reveal>
          <ClosingSection />
        </Reveal>
        <Reveal>
          <AsdtSection />
        </Reveal>
      </ApplyFlow>
    </>
  );
};

export default CareersPage;
