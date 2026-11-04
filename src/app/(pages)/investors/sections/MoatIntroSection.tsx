import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import {
  CI_BODY,
  CI_TITLE,
  HEADING_EM,
  LABEL_DARK,
  LABEL_INLINE,
  SECTION_BASE,
} from "../constants";

const MoatIntroSection = () => (
  <section className={cn(SECTION_BASE, "bg-[#e0f2f9] pt-[120px] pb-[60px]")}>
    <div className={cn("text-center", GUTTER)}>
      <Eyebrow
        label="The Six Pillars of the Moat"
        className={cn(LABEL_DARK, LABEL_INLINE)}
      />

      <h2 className={CI_TITLE}>
        Why AKC is hard to <em className={HEADING_EM}>replicate.</em>
      </h2>

      <p className={CI_BODY}>
        Healthcare moats are rarely about technology or capital alone.
        AKC&apos;s defensibility rests on six compounding pillars &mdash; each
        of which would take a competitor years to build, and which together
        would take <em className="italic">decades.</em>
      </p>
    </div>
  </section>
);

export default MoatIntroSection;
