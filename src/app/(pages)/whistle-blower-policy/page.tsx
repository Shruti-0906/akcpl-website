import { JsonLd } from "@/components/seo";
import { pageSeo } from "@/lib";

import PolicySection from "./sections/PolicySection";

const seo = pageSeo({
  title: "Whistle Blower Policy",
  description:
    "Apex Kidney Care's whistle blower policy — how Protected Disclosures are reported, investigated and protected.",
  path: "/whistle-blower-policy",
});

export const metadata = seo.metadata;

const WhistleBlowerPolicyPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <PolicySection />
    </>
  );
};

export default WhistleBlowerPolicyPage;
