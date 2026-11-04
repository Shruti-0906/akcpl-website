import { Disclaimer } from "@/components/shared/Disclaimer";
import { Reveal } from "@/components/ui";

import AnnouncementModal from "./components/AnnouncementModal";
import AboutSection from "./sections/AboutSection";
import CommitmentSection from "./sections/CommitmentSection";
import ContactSection from "./sections/ContactSection";
import FindCentreCtaSection from "./sections/FindCentreCtaSection";
import HeroSection from "./sections/HeroSection";
import OurServices from "./sections/OurServices";
import JourneySection from "./sections/JourneySection";
import PartnerSection from "./sections/PartnerSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import WhyApexSection from "./sections/WhyApexSection";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <Reveal>
        <FindCentreCtaSection />
      </Reveal>
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <OurServices />
      </Reveal>
      <Reveal>
        <TestimonialsSection />
      </Reveal>
      <Reveal>
        <JourneySection />
      </Reveal>
      <Reveal>
        <WhyApexSection />
      </Reveal>
      <Reveal>
        <PartnerSection />
      </Reveal>
      <Reveal>
        <CommitmentSection />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
      <Disclaimer />
      <AnnouncementModal />
    </>
  );
};

export default Homepage;
