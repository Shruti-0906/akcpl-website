import { Eyebrow } from "@/components";
import { cn } from "@/lib";

import {
  CI_BODY,
  CI_TITLE,
  HEADING_EM,
  HOSPITAL_GUTTER,
  LABEL_DARK,
  LABEL_INLINE,
} from "../constants";

const AKC_BRINGS: readonly string[] = [
  "Nephrology clinical leadership and consulting bench",
  "Trained technicians and operational staff",
  "Dialysis machines, water plant, infrastructure",
  "Validated protocols and QA framework",
  "The Axis EHR and IRDS data infrastructure",
  "Procurement scale and operational playbook",
  "NABH accreditation support and audit readiness",
  "Network brand association and patient trust signal",
];

const STAYS_YOURS: readonly string[] = [
  "The patient remains your hospital's patient",
  "Your hospital's brand is the primary brand at the front door",
  "Outpatient, inpatient, and specialty referrals stay within your system",
  "Commercial control over insurance tie-ups and corporate empanelment",
  "Long-term strategic direction of the renal service line",
  "Your reputation, strengthened by association — not absorbed",
];

/** `.split-col` — 3px teal cap, #ccc hairline, 10px teal bullet per row. */
const SPLIT_COL =
  "relative h-full rounded-[2px] border border-[#ccc] px-9 py-10 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-primary-subtle before:content-['']";

const SPLIT_LIST_ITEM =
  "relative pl-6 font-roboto text-[17px] leading-[1.6] text-[#393f42] before:absolute before:top-2 before:left-0 before:size-2.5 before:rounded-full before:bg-primary-subtle before:content-['']";

const BoundariesSection = () => {
  return (
    <section
      id="partnership-boundaries"
      className={cn("scroll-mt-20 bg-white py-[130px]", HOSPITAL_GUTTER)}
    >
      <div className="mx-auto mb-16 text-center">
        <Eyebrow
          label="A Word About Boundaries"
          className={cn(LABEL_DARK, LABEL_INLINE)}
        />

        <h2 className={cn(CI_TITLE, "mb-4")}>
          AKC enhances your hospital.
          <br />
          <em className={HEADING_EM}>It does not replace it.</em>
        </h2>

        <p className={CI_BODY}>
          A common concern from hospital boards:{" "}
          <em className="italic">
            will partnering with AKC dilute our brand, our patient
            relationships, or our commercial control?
          </em>{" "}
          The honest answer is no &mdash; and the partnership is structured to
          make that explicit.
        </p>
      </div>

      {/* `.split-grid` — 1fr auto 1fr */}
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_auto_1fr]">
        <div className={cn(SPLIT_COL, "bg-white")}>
          <div className="mb-3.5 font-roboto text-[10.5px] font-bold tracking-[0.22em] text-primary-subtle uppercase">
            AKC Brings
          </div>
          <h3 className="mb-6 font-roboto text-2xl leading-[1.25] font-bold tracking-[-0.005em] text-secondary">
            The{" "}
            <em className="text-[#00b3ff] italic">
              specialised renal apparatus
            </em>{" "}
            &mdash; clinical, operational, technological.
          </h3>
          <ul className="flex flex-col gap-3.5">
            {AKC_BRINGS.map((item) => (
              <li key={item} className={SPLIT_LIST_ITEM}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* `.split-bridge` */}
        <div className="flex items-center justify-center lg:pt-30">
          <div
            aria-hidden="true"
            className="font-roboto text-4xl font-light text-black italic"
          >
            &#10231;
          </div>
        </div>

        <div className={cn(SPLIT_COL, "bg-[#e9f7fd]")}>
          <div className="mb-3.5 font-roboto text-[10.5px] font-bold tracking-[0.22em] text-primary-subtle uppercase">
            Stays Yours
          </div>
          <h3 className="mb-6 font-roboto text-2xl leading-[1.25] font-bold tracking-[-0.005em] text-secondary">
            Your{" "}
            <em className="text-[#00b3ff] italic">
              patients, brand, and institutional relationship.
            </em>
          </h3>
          <ul className="flex flex-col gap-3.5">
            {STAYS_YOURS.map((item) => (
              <li key={item} className={SPLIT_LIST_ITEM}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BoundariesSection;
