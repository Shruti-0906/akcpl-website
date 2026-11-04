import { JsonLd } from "@/components/seo";
import { Disclaimer } from "@/components/shared/Disclaimer";
import { pageSeo } from "@/lib";

import PlatformServicesHeroSection from "./sections/PlatformServicesHeroSection";

const seo = pageSeo({
  title: "Platform Services",
  description:
    "Apex Kidney Care's platform services page is coming soon - the services AKC runs on behalf of partner institutions, what each engagement covers, and who it suits. To discuss an engagement in the meantime, contact the team directly.",
  path: "/services/platform-services",
});

export const metadata = seo.metadata;

const PlatformServicesPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <PlatformServicesHeroSection />
      <Disclaimer />
    </>
  );
};

export default PlatformServicesPage;
