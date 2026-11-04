import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import GovernanceSection from "./sections/GovernanceSection";
import TrustCtaSection from "./sections/TrustCtaSection";
import TrustsSections from "./sections/TrustsSections";

const seo = pageSeo({
  title: "Public Charitable Trust Dialysis Partnerships",
  description:
    "Clinical, operational, procurement and reporting partnerships for public charitable trusts running dialysis centres.",
  path: "/partners/trusts",
});

export const metadata = seo.metadata;

const TrustNgoPage = () => (
  <>
    <JsonLd data={seo.jsonLd} />
    <TrustsSections />
    <Reveal>
      <GovernanceSection />
    </Reveal>
    <Reveal>
      <TrustCtaSection />
    </Reveal>
  </>
);

export default TrustNgoPage;
