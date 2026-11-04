import { JsonLd } from "@/components/seo";
import { Disclaimer } from "@/components/shared/Disclaimer";
import { pageSeo } from "@/lib";

import PharmacyHeroSection from "./sections/PharmacyHeroSection";

const seo = pageSeo({
  title: "Pharmacy",
  description:
    "Apex Kidney Care's pharmacy page is coming soon - the renal medication available through AKC centres, how prescriptions and refills are handled, and what patients need to bring. To ask about medication in the meantime, contact the team directly.",
  path: "/services/pharmacy",
});

export const metadata = seo.metadata;

const PharmacyPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <PharmacyHeroSection />
      <Disclaimer />
    </>
  );
};

export default PharmacyPage;
