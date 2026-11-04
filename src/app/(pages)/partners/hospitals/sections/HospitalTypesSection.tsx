import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { cn } from "@/lib";

import {
  CI_BODY,
  CI_TITLE,
  EM_BRIGHT,
  HOSPITAL_GUTTER,
  LABEL_INLINE,
  LABEL_LIGHT,
} from "../constants";

type HospitalType = {
  lead: string;
  accent: string;
  pitch: ReactNode;
};

const TYPES: readonly HospitalType[] = [
  {
    lead: "Private",
    accent: "Multi-Specialty",
    pitch: (
      <>
        The natural fit. You have CKD and diabetic patients in volume; you are
        losing them to specialised dialysis centres at the moment they progress
        to ESRD.{" "}
        <strong className="font-bold text-secondary">
          AKC partnership stops the leakage
        </strong>{" "}
        &mdash; and adds clinical and brand credibility to your existing renal
        offering.
      </>
    ),
  },
  {
    lead: "Corporate",
    accent: "Hospital Chains",
    pitch: (
      <>
        Multi-site partnerships at scale &mdash; standardised across the chain,
        AKC-managed, centrally audited. One partnership conversation, one set of
        protocols, one institutional brand.{" "}
        <strong className="font-bold text-secondary">
          Renal care, solved at the group level.
        </strong>
      </>
    ),
  },
];

const HospitalTypesSection = () => {
  return (
    <section
      id="hospital-types"
      className={cn("scroll-mt-20 bg-secondary py-[130px]", HOSPITAL_GUTTER)}
    >
      <div className="mx-auto mb-14 text-center">
        <Eyebrow
          label="Different Hospitals · Different Value"
          className={cn(LABEL_LIGHT, LABEL_INLINE)}
        />

        <h2 className={cn(CI_TITLE, "mb-4 text-white")}>
          The same partnership,{" "}
          <em className={EM_BRIGHT}>read differently</em> from where you sit.
        </h2>

        <p className={cn(CI_BODY, "text-[rgba(251,248,243,0.72)]")}>
          Private hospitals, mission hospitals, government institutions and
          corporate chains all bring different priorities to the same
          conversation. Here is what AKC offers each.
        </p>
      </div>

      {/* `.types-list` — rows separated by 1px of the navy behind them */}
      <div className="flex flex-col gap-px">
        {TYPES.map((type, index) => (
          <article
            key={type.accent}
            className={cn(
              "grid items-center gap-6 px-8 py-9 hover:bg-[#f5f0e8] lg:grid-cols-[280px_1fr] lg:gap-12 lg:px-10",
              index % 2 === 1 ? "bg-[#e9f7fd]" : "bg-white",
            )}
          >
            <div className="font-roboto text-[22px] leading-[1.2] font-bold tracking-[-0.005em] text-secondary">
              {type.lead}{" "}
              <em className="font-bold text-[#00b3ff] italic">{type.accent}</em>
            </div>

            <div className="font-roboto text-[17px] leading-[1.65] text-[#393f42]">
              {type.pitch}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HospitalTypesSection;
