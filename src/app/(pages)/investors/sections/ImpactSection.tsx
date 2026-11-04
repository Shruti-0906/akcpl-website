import type { ReactNode } from "react";

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

const CARDS: readonly { num: ReactNode; label: string; text: ReactNode }[] = [
  {
    num: "Lives",
    label: "Patient Impact",
    text: (
      <>
        Tens of thousands of patients receive AKC-standard dialysis annually
        &mdash; lives extended at quality.
      </>
    ),
  },
  {
    num: "Data",
    label: "System Impact",
    text: (
      <>
        IRDS is the data substrate for India&apos;s national kidney-care policy.
      </>
    ),
  },
  {
    num: "Talent",
    label: "Workforce Impact",
    text: (
      <>
        AKC and Apex School of Dialysis Technology are widening India&apos;s
        dialysis professionals pipeline faster than any university alone.
      </>
    ),
  },
  {
    num: <>ESG&nbsp;3</>,
    label: "Goal Alignment",
    text: (
      <>
        AKC&apos;s commitment to sustainable and inclusive healthcare is
        reflected in its advancement from Silver to Platinum status in the
        Aspire Impact assessment.
      </>
    ),
  },
] as const;

const ImpactSection = () => (
  <section id="im" className={cn(SECTION_BASE, "bg-white py-[130px]")}>
    <div className={GUTTER}>
      <div className="mx-auto mb-16 text-center">
        <Eyebrow
          label="Mission & Impact"
          className={cn(LABEL_DARK, LABEL_INLINE)}
        />

        <h2 className={CI_TITLE}>
          A return profile{" "}
          <em className={HEADING_EM}>that includes the country.</em>
        </h2>

        <p className={CI_BODY}>
          For impact-aligned and ESG-mandated capital, AKC&apos;s measurable
          impact is not a side effect of the business &mdash; it is the
          business.
        </p>
      </div>

      <div className="mt-15 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((card) => (
          <div key={card.label}>
            <div
              className={cn(
                "relative h-full overflow-hidden border border-[#002238] bg-card-deep px-[25px] py-10",
                "text-center font-cormorant text-[15px] text-white",
                "hover:border-[#5bc5f2] hover:bg-[#013b62] hover:bg-none",
              )}
            >
              <p className="mb-[5px] text-[32px]">{card.num}</p>
              <p className="mb-[15px] text-[18px] text-[#00b3ff]">
                {card.label}
              </p>
              <p className="font-roboto">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
