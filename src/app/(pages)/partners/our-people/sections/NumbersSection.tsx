import { CountUp, Eyebrow } from "@/components";
import { cn } from "@/lib";

import {
  CI_BODY_LIGHT,
  CI_TITLE,
  HEADING_EM,
  LABEL_INLINE,
  LABEL_LIGHT,
  PEOPLE_GUTTER,
} from "../constants";

const CELLS = [
  {
    value: "1,850",
    label: "Total Coworkers",
    sub: "Across clinical, operational, technical, and administrative roles.",
  },
  {
    value: "70+",
    label: "Nephrologists",
    sub: "On the AKC clinical team across the national network.",
  },
  {
    value: "750+",
    label: "Dialysis Professionals",
    sub: "The core daily clinical workforce on the treatment floors.",
  },
  {
    value: "BME",
    label: "Biomedical Team",
    sub: "Dedicated engineers maintaining machines & RO plants across all centres.",
    /** `.num-cell-num em` — italic, and set a shade smaller than the figures. */
    italic: true,
  },
] as const;

const NumbersSection = () => {
  return (
    <section
      id="workforce-numbers"
      className="relative overflow-hidden bg-secondary py-16 lg:py-32.5"
    >
      {/* `.numbers::before` — the gold and teal wash, corners reversed against
          the training section. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_92%_12%,rgba(184,134,11,0.16)_0%,transparent_60%),radial-gradient(ellipse_45%_40%_at_5%_92%,rgba(14,124,123,0.12)_0%,transparent_60%)]"
      />

      <div className={cn("relative z-[2]", PEOPLE_GUTTER)}>
        {/* `.num-header` — the page's rule sets only `max-width` and the bottom
            margin, so the shared block's `margin:0 auto` and `text-align:center`
            still apply. */}
        <div className="mx-auto mb-16 max-w-[820px] text-center">
          <Eyebrow
            label="The Workforce"
            className={cn(LABEL_LIGHT, LABEL_INLINE)}
          />

          <h2 className={cn(CI_TITLE, "mb-6 text-white")}>
            The people-scale <em className={HEADING_EM}>of the network.</em>
          </h2>

          <p className={cn(CI_BODY_LIGHT, "mx-auto mb-0 max-w-[720px]")}>
            Behind the 250+ centres, the 1,700+ machines, and the 6.1 million
            dialysis sessions delivered to date stands a{" "}
            <strong>
              professional workforce of structured size and structured
              composition.
            </strong>
          </p>
        </div>

        {/* `.num-grid` — hairline rules showing through a 1px gap. */}
        <div className="grid gap-px border border-[rgba(229,192,123,0.15)] bg-[rgba(229,192,123,0.15)] sm:grid-cols-2 lg:grid-cols-4">
          {CELLS.map((cell) => (
            <div key={cell.label} className="bg-secondary px-7.5 py-9.5">
              <div
                className={cn(
                  "mb-3.5 font-roboto text-[56px] leading-none font-bold tracking-[-0.028em] text-[#00b3ff]",
                  "italic" in cell &&
                    cell.italic &&
                    "text-[48px] font-normal italic",
                )}
              >
                <CountUp value={cell.value} />
              </div>
              <div className="mb-2 font-roboto text-[10.5px] leading-[1.4] font-bold tracking-[0.18em] text-[#F5F0E8] uppercase">
                {cell.label}
              </div>
              <p className="font-roboto text-[13.5px] leading-[1.5] text-[rgb(251_248_243/0.55)] italic">
                {cell.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
