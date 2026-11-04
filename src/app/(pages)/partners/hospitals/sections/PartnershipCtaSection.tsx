import { Button, Eyebrow } from "@/components";
import { cn } from "@/lib";

import {
  CI_BODY,
  CI_TITLE,
  HEADING_EM,
  HOSPITAL_GUTTER,
  LABEL_DARK,
  LABEL_INLINE,
} from "../constants";

const PartnershipCtaSection = () => {
  return (
    <section
      id="partnership-contact"
      className={cn("scroll-mt-20 bg-white py-20 text-center", HOSPITAL_GUTTER)}
    >
      <Eyebrow
        label="The First Conversation"
        className={cn(LABEL_DARK, LABEL_INLINE)}
      />

      <h2 className={cn(CI_TITLE, "mb-4")}>
        The right partnership begins with{" "}
        <em className={HEADING_EM}>the right conversation.</em>
      </h2>

      <p className={cn(CI_BODY, "mb-6.25")}>
        Tell us about your hospital, your patient base, your existing renal
        infrastructure, and what a successful partnership would look like from
        your side. The first conversation is free, confidential, and without
        obligation &mdash; the structure follows the fit, not the other way
        around.
      </p>

      <Button href="/contact" className="mt-4">
        Get in Touch with us
      </Button>
    </section>
  );
};

export default PartnershipCtaSection;
