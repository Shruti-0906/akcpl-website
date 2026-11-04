import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import ReasonCard, { type Reason } from "../components/ReasonCard";

/** The reference renders the qualifying phrase in a muted sage, not a grey. */
const MUTED_ITALIC = "font-normal text-[#7a9580] italic";

const REASONS: readonly Reason[] = [
  {
    kicker: "By Choice",
    heading: (
      <>
        When it&apos;s <span className={MUTED_ITALIC}>by choice.</span>
      </>
    ),
    body: (
      <>
        The patient could attend a centre. They{" "}
        <strong className="font-bold text-secondary">
          choose home HD for what it gives them back
        </strong>{" "}
        by control over their schedule, dignity, the ability to remain at
        work, and the routine of their own home.
      </>
    ),
    tags: ["Convenience", "Privacy"],
  },
  {
    kicker: "By Compulsion",
    heading: (
      <>
        When home HD is <span className={MUTED_ITALIC}>the only way</span>{" "}
        dialysis continues.
      </>
    ),
    body: (
      <>
        For these patients, getting to a dialysis centre three times a week is{" "}
        <strong className="font-bold text-secondary">
          not medically or practically feasible
        </strong>
        . Home HD is what allows their dialysis to continue safely.
      </>
    ),
    tags: [
      "Fragility issues",
      "Mobility issues",
      "Fracture / Recovery",
      "Post-hospitalisation",
      "Neurology",
      "Amputee",
      "Infection",
      "Cardiac",
    ],
    filled: true,
  },
];

const WhyPatientsChooseSection = () => {
  return (
    <section className={cn("bg-white py-20 lg:py-12.5", GUTTER)}>
      <Eyebrow label="Why Patients Choose Home HD" className="text-black" />

      <h2 className="mt-5 mb-4 font-cormorant text-3xl leading-[1.05] font-bold text-black sm:text-4xl lg:text-[52px]">
        For most patients, home HD is{" "}
        <span className="text-primary-subtle italic">
          not a luxury by it is the only sensible option.
        </span>
      </h2>

      <p className="font-roboto text-[15px] leading-relaxed text-[#393f42] sm:text-[17px] sm:leading-5.5">
        When we look at the indications that brought AKC&apos;s 700+ home HD
        patients to the modality, the split is striking: only 35% chose it for
        convenience or privacy. The other 65% came to home HD because
        hospital-based dialysis was not realistically possible by due to
        fragility, mobility, fracture, post-hospitalisation recovery, or other
        circumstances.{" "}
        <span className="italic">
          Home HD is, for the majority of our patients, the modality that
          sustained their care when nothing else would.
        </span>
      </p>

      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
        {REASONS.map((reason) => (
          <ReasonCard key={reason.kicker} {...reason} />
        ))}
      </div>
    </section>
  );
};

export default WhyPatientsChooseSection;
