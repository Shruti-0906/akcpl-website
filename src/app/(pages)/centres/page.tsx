import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import CentreSearchProvider from "./components/CentreSearchProvider";
import NetworkSection from "./sections/NetworkSection";
import FindCentreSection from "./sections/FindCentreSection";
import ShapeSection from "./sections/ShapeSection";

const seo = pageSeo({
  title: "Centres",
  description:
    "The Apex Kidney Care network - 250+ active dialysis centres across 14 states and 151 towns and cities, from metropolitan hospital partnerships to district-level public health centres.",
  path: "/centres",
});

export const metadata = seo.metadata;

const CentresPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      {/* Both sections drive the one search, so they share a provider. */}
      <CentreSearchProvider>
        <Reveal>
          <NetworkSection />
        </Reveal>
        <Reveal>
          <ShapeSection />
        </Reveal>
      </CentreSearchProvider>
      <Reveal>
        <FindCentreSection />
      </Reveal>
    </>
  );
};

export default CentresPage;
