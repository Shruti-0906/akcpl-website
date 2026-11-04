import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { OUTCOMES } from "../components/outcomes";
import { CI_BODY, CI_TITLE } from "../components/text";

const OutcomesSection = () => (
  <section className={cn("bg-[#e0f2f9] py-25", GUTTER)}>
    <div>
      <div className="mb-14 text-center">
        <Eyebrow
          label="What to Expect"
          className="mb-5 inline-flex text-black"
        />
        <h2 className={CI_TITLE}>
          The numbers, <em>honestly told.</em>
        </h2>
      </div>
    </div>

    <div className="grid grid-cols-1 overflow-hidden rounded-[2px] bg-white sm:grid-cols-2 lg:grid-cols-4">
      {OUTCOMES.map((outcome) => (
        <div key={outcome.num} className="px-7 py-9 text-center">
          <div className="mb-2.5 font-roboto text-[54px] leading-none font-bold tracking-[-0.02em] text-secondary [font-variation-settings:'opsz'_144]">
            {outcome.num}
            {outcome.pct && (
              <span className="ml-0.5 align-top text-[32px] font-light text-primary-subtle">
                {outcome.pct}
              </span>
            )}
          </div>
          <div className="mb-2 font-roboto text-[10.5px] leading-[1.4] font-bold tracking-[0.16em] text-secondary uppercase">
            {outcome.label}
          </div>
          <div className="font-roboto text-[13px] leading-[1.4] text-[#00b3ff] italic">
            {outcome.sub}
          </div>
        </div>
      ))}
    </div>

    <div>
      <p className={cn(CI_BODY, "px-[10%] pt-7.5 text-center")}>
        Outcomes reflect well-functioning transplant programmes internationally.
        Individual results vary with age, comorbidities, donor type,
        immunological match, and the quality of long-term follow-up care.
      </p>
    </div>
  </section>
);

export default OutcomesSection;
