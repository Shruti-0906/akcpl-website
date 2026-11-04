import { Button, Eyebrow } from "@/components";
import { cn } from "@/lib";

import {
  CI_TITLE,
  HEADING_EM,
  LABEL_DARK,
  LABEL_INLINE,
  PEOPLE_GUTTER,
} from "../constants";

const PeopleCtaSection = () => {
  return (
    <section
      id="people-promise"
      className={cn("relative bg-white py-20 text-center", PEOPLE_GUTTER)}
    >
      <Eyebrow
        label="The People Promise"
        className={cn(LABEL_DARK, LABEL_INLINE)}
      />

      <p className={cn(CI_TITLE, "mb-9 text-[32px] leading-[46px]")}>
        Every dialysis session at an AKC centre is delivered and supervised by{" "}
        <em className={HEADING_EM}>dialysis professionals,</em> overseen by a{" "}
        <em className={HEADING_EM}>nephrologist,</em> and made possible by{" "}
        <em className={HEADING_EM}>biomedical engineers</em> the patient will
        never meet.{" "}
        <strong className="font-bold">
          That coordination is what dialysis quality actually is.
        </strong>
      </p>

      <Button href="/contact" className="mt-2 rounded-[40px]">
        Get in touch with us
      </Button>
    </section>
  );
};

export default PeopleCtaSection;
