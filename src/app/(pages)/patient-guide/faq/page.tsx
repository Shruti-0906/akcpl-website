import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import { FAQ_CATEGORIES, FaqCategorySection } from "./components";
import CategoryNavSection from "./sections/CategoryNavSection";
import CtaSection from "./sections/CtaSection";
import HeroSection from "./sections/HeroSection";

const seo = pageSeo({
  title: "Patient FAQs",
  description:
    "Plain-language answers to the questions dialysis patients and their families ask most often at Apex Kidney Care - sessions, symptoms, tests, therapies, consultations, and the transplant pathway.",
  path: "/patient-guide/faq",
});

export const metadata = seo.metadata;

const PatientFaqPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <HeroSection />
      {/* Left unwrapped: the reveal transform would break its sticky offset. */}
      <CategoryNavSection />
      {FAQ_CATEGORIES.map((category, index) => (
        <Reveal key={category.id}>
          <FaqCategorySection category={category} index={index} />
        </Reveal>
      ))}
      <Reveal>
        <CtaSection />
      </Reveal>
    </>
  );
};

export default PatientFaqPage;
