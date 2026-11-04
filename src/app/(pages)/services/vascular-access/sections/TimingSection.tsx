import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import TimelineStepCard from "../components/TimelineStepCard";
import { TIMELINE_STEPS } from "../components/timelineSteps";

/** The four conditions of the "Rule of 6", each a value plus what it measures. */
const RULE_OF_6 = [
  { value: "≥ 6 weeks", label: "since the surgery" },
  { value: "≥ 6 mm", label: "vein diameter" },
  { value: "< 6 mm", label: "depth from skin" },
  { value: "> 600 mL/min", label: "blood flow" },
] as const;

const TimingSection = () => (
  <section id="timing" className={cn("scroll-mt-36 bg-white py-30", GUTTER)}>
    <div className="mb-12">
      <Eyebrow label="When to Create Your Access" className="mb-5 text-black" />
      <h2 className="section-heading leading-[1.05] font-bold tracking-[-0.015em] text-black">
        Timing is <em className="text-primary-subtle italic">everything.</em>
      </h2>
      <p className="mt-4 font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
        The single most important predictor of starting dialysis on a fistula
        &mdash; rather than a catheter &mdash; is{" "}
        <strong className="font-bold text-secondary">
          creating the fistula early enough.
        </strong>{" "}
        An AV fistula needs time to develop. If it is created too late, your
        first dialysis sessions will have to be through a catheter while it
        matures &mdash; with all the risks that brings.
      </p>
    </div>

    <div className="relative mt-9 overflow-hidden rounded-[3px] border border-primary-subtle bg-white px-6 pt-12 pb-10 sm:px-12">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-primary-subtle to-primary-light"
      />

      <h3 className="mb-1.5 font-roboto text-2xl font-normal tracking-[-0.012em] text-secondary">
        The{" "}
        <em className="font-normal text-primary-subtle italic">
          &ldquo;Fistula First&rdquo;
        </em>{" "}
        timeline
      </h3>
      <p className="mb-3.75 font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
        From the moment your nephrologist starts planning, to your first
        dialysis session through your own fistula.
      </p>

      <div className="relative mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        <span
          aria-hidden="true"
          className="absolute top-[42px] right-[5%] left-[5%] hidden h-0.5 bg-linear-to-r from-primary-light via-primary-subtle to-primary-light lg:block"
        />
        {TIMELINE_STEPS.map((step) => (
          <TimelineStepCard key={step.time} step={step} />
        ))}
      </div>

      <p className="font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
        <strong className="font-bold text-secondary">The goal:</strong> if your
        nephrologist anticipates you&rsquo;ll need dialysis within the next
        year, your AVF should be created{" "}
        <strong className="font-bold text-secondary">
          3 to 6 months before that.
        </strong>{" "}
        This is called the &ldquo;Fistula First&rdquo; approach &mdash;
        recommended worldwide. It means your first dialysis session can happen
        through a mature fistula, with no catheter needed.
      </p>
    </div>

    <div className="relative mt-6 grid grid-cols-1 gap-9 overflow-hidden rounded-[3px] border border-[#d1f1ff] bg-[#e0f2f9] px-6 py-9 sm:px-10 md:grid-cols-2">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-primary-subtle"
      />

      <div>
        <Eyebrow label="Maturation" className="mb-5 text-black" />
        <h3 className="mb-4 font-cormorant text-[26px] leading-[1.05] font-bold tracking-[-0.015em] text-black">
          What is <em className="text-primary-subtle italic">maturation</em>,
          and why does it take so long?
        </h3>
        <p className="font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
          When the surgeon joins your vein to your artery, the vein suddenly
          receives{" "}
          <strong className="font-bold text-secondary">
            high arterial pressure
          </strong>
          . Over weeks, the vein wall thickens, the channel widens, and the flow
          increases &mdash; until the vein can handle the volumes dialysis
          requires.{" "}
          <em className="text-primary-subtle italic">
            This biological remodelling takes time
          </em>{" "}
          and cannot be rushed. Trying to use a fistula before it&rsquo;s mature
          damages it &mdash; sometimes permanently.
        </p>
      </div>

      <div>
        <Eyebrow label="The Rule of 6" className="mb-5 text-black" />
        <h3 className="mb-4 font-cormorant text-[26px] leading-[1.05] font-bold tracking-[-0.015em] text-black">
          When is an AVF{" "}
          <em className="text-primary-subtle italic">ready to use?</em>
        </h3>
        <p className="font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
          Doctors use a simple guideline called the{" "}
          <em className="text-primary-subtle italic">Rule of 6</em> to decide if
          an AVF is mature enough for safe cannulation. All four conditions
          should be met:
        </p>

        <div className="mt-3.5 flex flex-col gap-2 border-t border-dashed border-[#d1f1ff] pt-3.5">
          {RULE_OF_6.map((rule) => (
            <div
              key={rule.value}
              className="grid grid-cols-[auto_1fr] items-center gap-3.5 font-roboto text-[17px] text-secondary"
            >
              <strong className="font-semibold text-primary-subtle">
                {rule.value}
              </strong>
              <span>&middot; {rule.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TimingSection;
