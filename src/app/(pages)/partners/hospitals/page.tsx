import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import BoundariesSection from "./sections/BoundariesSection";
import CapabilitiesSection from "./sections/CapabilitiesSection";
import HospitalChallengeSection from "./sections/HospitalChallengeSection";
import HospitalHeroSection from "./sections/HospitalHeroSection";
import HospitalPartnersSection from "./sections/HospitalPartnersSection";
import HospitalTypesSection from "./sections/HospitalTypesSection";
import PartnershipCtaSection from "./sections/PartnershipCtaSection";
import PartnershipModelsSection from "./sections/PartnershipModelsSection";
import PartnershipThesisSection from "./sections/PartnershipThesisSection";

const seo = pageSeo({
  title: "Hospital Dialysis Partnerships",
  description:
    "Institutional dialysis and renal-care partnership solutions for hospitals, supported by Apex Kidney Care's clinical, operational and technology capabilities.",
  path: "/partners/hospitals",
  keywords: [
    "hospital dialysis partnership",
    "dialysis unit management",
    "institutional renal care",
    "turnkey dialysis operations",
    "build operate transfer dialysis",
    "hospital renal service line",
    "nephrology partnership India",
  ],
});

export const metadata = seo.metadata;

const HospitalPartnersPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <HospitalHeroSection />
      <Reveal>
        <HospitalChallengeSection />
      </Reveal>
      <Reveal>
        <PartnershipThesisSection />
      </Reveal>
      <Reveal>
        <PartnershipModelsSection />
      </Reveal>
      <Reveal>
        <CapabilitiesSection />
      </Reveal>
      <Reveal>
        <BoundariesSection />
      </Reveal>
      <Reveal>
        <HospitalTypesSection />
      </Reveal>
      <Reveal>
        <HospitalPartnersSection />
      </Reveal>
      <Reveal>
        <PartnershipCtaSection />
      </Reveal>
    </>
  );
};

export default HospitalPartnersPage;
