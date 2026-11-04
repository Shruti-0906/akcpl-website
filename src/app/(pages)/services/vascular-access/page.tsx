import { JsonLd } from "@/components/seo";
import { Disclaimer } from "@/components/shared/Disclaimer";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import AccessTypesSection from "./sections/AccessTypesSection";
import CentreSection from "./sections/CentreSection";
import ComplicationsSection from "./sections/ComplicationsSection";
import CtaSection from "./sections/CtaSection";
import HeroSection from "./sections/HeroSection";
import HierarchySection from "./sections/HierarchySection";
import IntroSection from "./sections/IntroSection";
import MonitoringSection from "./sections/MonitoringSection";
import QuickNavSection from "./sections/QuickNavSection";
import RedFlagsSection from "./sections/RedFlagsSection";
import SafetySection from "./sections/SafetySection";
import SurveillanceSection from "./sections/SurveillanceSection";
import TimingSection from "./sections/TimingSection";

const seo = pageSeo({
  title: "Vascular Access",
  description:
    "Your vascular access is your lifeline. The four access types, why fistula first, when to create one, the complications to watch for, and how to protect your access arm every day.",
  path: "/services/vascular-access",
  trail: [{ name: "Services", path: "/services" }],
});

export const metadata = seo.metadata;

const VascularAccessPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <HeroSection />
      <Reveal>
        <QuickNavSection />
      </Reveal>
      <Reveal>
        <IntroSection />
      </Reveal>
      <Reveal>
        <AccessTypesSection />
      </Reveal>
      <Reveal>
        <HierarchySection />
      </Reveal>
      <Reveal>
        <TimingSection />
      </Reveal>
      <Reveal>
        <CentreSection />
      </Reveal>
      <Reveal>
        <ComplicationsSection />
      </Reveal>
      <Reveal>
        <MonitoringSection />
      </Reveal>
      <Reveal>
        <SafetySection />
      </Reveal>
      <Reveal>
        <RedFlagsSection />
      </Reveal>
      <Reveal>
        <SurveillanceSection />
      </Reveal>
      <Reveal>
        <CtaSection />
      </Reveal>
      <Disclaimer />
    </>
  );
};

export default VascularAccessPage;
