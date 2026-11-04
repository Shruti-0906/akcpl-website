import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import ContinuousEducationSection from "./sections/ContinuousEducationSection";
import NabhSection from "./sections/NabhSection";
import NumbersSection from "./sections/NumbersSection";
import PeopleCtaSection from "./sections/PeopleCtaSection";
import PeopleHeroSection from "./sections/PeopleHeroSection";
import PremiseSection from "./sections/PremiseSection";
import RoleSections from "./sections/RoleSections";
import RolesIntroSection from "./sections/RolesIntroSection";
import TrainingSection from "./sections/TrainingSection";

const seo = pageSeo({
  title: "Our People",
  description:
    "The trained, credentialed workforce behind every Apex Kidney Care dialysis session - dialysis professionals, nephrologists and biomedical engineers, supported by the Apex School of Dialysis Technology and NABH accreditation.",
  path: "/partners/our-people",
  keywords: [
    "dialysis technician qualifications",
    "dialysis nurse training India",
    "biomedical engineer dialysis",
    "Apex School of Dialysis Technology",
    "NABH accredited dialysis",
    "dialysis workforce training",
    "renal care continuing education",
  ],
});

export const metadata = seo.metadata;

const OurPeoplePage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <PeopleHeroSection />
      <Reveal>
        <PremiseSection />
      </Reveal>
      <Reveal>
        <RolesIntroSection />
      </Reveal>
      <Reveal>
        <RoleSections />
      </Reveal>
      <Reveal>
        <TrainingSection />
      </Reveal>
      <Reveal>
        <ContinuousEducationSection />
      </Reveal>
      <Reveal>
        <NabhSection />
      </Reveal>
      <Reveal>
        <NumbersSection />
      </Reveal>
      <Reveal>
        <PeopleCtaSection />
      </Reveal>
    </>
  );
};

export default OurPeoplePage;
