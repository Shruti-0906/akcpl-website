import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { cn } from "@/lib";

import PhaseSection from "../components/PhaseSection";
import { AREA_PROSE, CI_BODY, CI_TITLE } from "../components/text";

const ONGOING_CARE: readonly ReactNode[] = [
  "Regular nephrology consultations for life",
  <>Routine blood tests &mdash; creatinine, drug levels, blood counts</>,
  "Immunosuppression management and adjustment",
  "Infection prevention and prompt treatment",
  "Cardiovascular and metabolic risk management",
  "Bone health, blood pressure, cholesterol",
  "Cancer surveillance (slightly elevated long-term risk)",
  "Lifestyle, vaccination, and nutrition guidance",
];

const PhaseLifetimeSection = () => (
  <PhaseSection id="area-4" roman="IV" phaseLabel="Phase Four" alt>
    <div>
      <Eyebrow label="Protecting the Gift" className="mb-5 text-black" />

      <h2 className={cn(CI_TITLE, "mb-4")}>
        A <em>Lifetime</em> of Care
      </h2>

      <p className={CI_BODY}>
        A transplant is not the end of the journey; it is the beginning of a
        different one. The new kidney lasts longer when its care is steady,
        thoughtful, and lifelong.
      </p>
    </div>

    <div>
      <div className={AREA_PROSE}>
        <p>
          For the first three to six months, follow-up is frequent &mdash;
          weekly to start, then tapering as everything stabilises. Your
          medications will be adjusted carefully. The team will watch for signs
          of <strong>rejection</strong> (usually silent and only visible in lab
          tests), <strong>infection</strong> (because immunosuppression makes
          you more vulnerable), and <strong>side effects</strong> of the
          medications themselves.
        </p>
        <p>
          With good care, well-functioning grafts last{" "}
          <em>fifteen, twenty, even twenty-five years and beyond</em>. The
          single biggest determinant of how long is consistent, expert
          nephrology follow-up &mdash; not missed appointments, not stopped
          medications, not forgotten blood tests.
        </p>
        <p>
          This is the work of decades, and it is exactly the work AKC
          nephrologists are designed to do.
        </p>
      </div>
    </div>

    <div>
      <div className="relative mt-9 rounded-[2px] border-l-[3px] border-primary-subtle bg-[rgba(14,124,123,0.06)] px-9 py-8">
        <div className="mb-4.5 font-roboto text-lg font-bold tracking-[0.05em] text-[#003e68] uppercase">
          Ongoing care includes
        </div>

        <ul className="flex list-none flex-col gap-3.5">
          {ONGOING_CARE.map((item, index) => (
            <li
              key={index}
              className="relative pl-[25px] font-roboto text-[17px] leading-[1.6] text-[#393f42]"
            >
              <span
                aria-hidden="true"
                className="absolute top-2 left-0.5 h-2 w-2 rotate-45 bg-primary-subtle"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </PhaseSection>
);

export default PhaseLifetimeSection;
