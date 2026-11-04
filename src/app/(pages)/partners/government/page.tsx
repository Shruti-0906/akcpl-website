import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import CivicThesisSection from "./sections/CivicThesisSection";
import CollaborationAreasSection from "./sections/CollaborationAreasSection";
import CollaborationIntroSection from "./sections/CollaborationIntroSection";
import GovernmentCtaSection from "./sections/GovernmentCtaSection";
import GovernmentHeroSection from "./sections/GovernmentHeroSection";
import NationalPrioritiesSection from "./sections/NationalPrioritiesSection";
import PppTrackRecordSection from "./sections/PppTrackRecordSection";
import PublicHealthCaseSection from "./sections/PublicHealthCaseSection";

const seo = pageSeo({
  title: "Government & Policymaker Partnerships",
  description:
    "Public-health, renal-data, scheme-delivery and policy partnerships with Apex Kidney Care.",
  path: "/partners/government",
  keywords: [
    "government dialysis partnership",
    "Indian Renal Data System",
    "public private dialysis partnership",
    "National Dialysis Programme",
    "PMJAY dialysis",
    "renal policy India",
  ],
});

export const metadata = seo.metadata;

const GovernmentPolicyMakersPage = () => (
  <>
    <JsonLd data={seo.jsonLd} />
    <GovernmentHeroSection />
    <Reveal>
      <PublicHealthCaseSection />
    </Reveal>
    <Reveal>
      <CivicThesisSection />
    </Reveal>
    <Reveal>
      <CollaborationIntroSection />
    </Reveal>
    <Reveal>
      <CollaborationAreasSection />
    </Reveal>
    <Reveal>
      <PppTrackRecordSection />
    </Reveal>
    <Reveal>
      <NationalPrioritiesSection />
    </Reveal>
    <Reveal>
      <GovernmentCtaSection />
    </Reveal>
  </>
);

export default GovernmentPolicyMakersPage;
