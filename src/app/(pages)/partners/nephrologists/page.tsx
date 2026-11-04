import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import ConversationSection from "./sections/ConversationSection";
import DimensionsOverviewSection from "./sections/DimensionsOverviewSection";
import DimensionSections from "./sections/DimensionSections";
import FitSection from "./sections/FitSection";
import NephrologistsHeroSection from "./sections/NephrologistsHeroSection";
import PartnershipThesisSection from "./sections/PartnershipThesisSection";

const seo = pageSeo({
  title: "Nephrologist & Clinician Partnerships",
  description:
    "Six dimensions of institutional leverage for practising nephrologists partnering with Apex Kidney Care.",
  path: "/partners/nephrologists",
});

export const metadata = seo.metadata;

const NephrologistsPage = () => (
  <>
    <JsonLd data={seo.jsonLd} />
    <NephrologistsHeroSection />
    <Reveal>
      <PartnershipThesisSection />
    </Reveal>
    <Reveal>
      <DimensionsOverviewSection />
    </Reveal>
    <Reveal>
      <DimensionSections />
    </Reveal>
    <Reveal>
      <FitSection />
    </Reveal>
    <Reveal>
      <ConversationSection />
    </Reveal>
  </>
);

export default NephrologistsPage;
