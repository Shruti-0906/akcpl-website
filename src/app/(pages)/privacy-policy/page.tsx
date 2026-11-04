import { JsonLd } from "@/components/seo";
import { pageSeo } from "@/lib";

import PolicySection from "./sections/PolicySection";

const seo = pageSeo({
  title: "Privacy Policy",
  description:
    "Apex Kidney Care's privacy policy — how your data is collected, used and shared on this website.",
  path: "/privacy-policy",
});

export const metadata = seo.metadata;

const PrivacyPolicyPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <PolicySection />
    </>
  );
};

export default PrivacyPolicyPage;
