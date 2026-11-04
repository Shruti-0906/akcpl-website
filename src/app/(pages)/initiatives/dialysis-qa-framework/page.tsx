import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import BenefitsSection from "./sections/BenefitsSection";
import ComponentsSection from "./sections/ComponentsSection";
import PartnerSection from "./sections/PartnerSection";
import PillarsSection from "./sections/PillarsSection";
import QaFrameworkHeroSection from "./sections/QaFrameworkHeroSection";

const seo = pageSeo({
  title: "Dialysis QA Framework",
  description:
    "AKC's nephrologist-led Clinical Quality Assurance & Governance Framework - dialysis adequacy monitoring, RO water purity controls, vascular access governance, reuse and infection control, and continuous audits across every AKC-managed centre.",
  path: "/initiatives/dialysis-qa-framework",
  trail: [{ name: "Initiatives", path: "/initiatives" }],
});

export const metadata = seo.metadata;

const DialysisQaFrameworkPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <QaFrameworkHeroSection />
      <Reveal>
        <PillarsSection />
      </Reveal>
      <Reveal>
        <ComponentsSection />
      </Reveal>
      <Reveal>
        <BenefitsSection />
      </Reveal>
      <Reveal>
        <PartnerSection />
      </Reveal>
    </>
  );
};

export default DialysisQaFrameworkPage;
