import { Eyebrow } from "@/components";
import { cn } from "@/lib";

import PhaseSection from "../components/PhaseSection";
import { CI_BODY, CI_TITLE } from "../components/text";

const EVALUATION_ITEMS = [
  "Detailed medical history and examination",
  "Blood tests, including blood group and tissue typing (HLA)",
  "Cardiac assessment — ECG, echocardiogram, stress tests as needed",
  "Infectious disease screening (HIV, hepatitis, TB, others)",
  "Cancer screening appropriate for age and risk",
  "Imaging — chest X-ray, ultrasound, CT as needed",
  "Dental and ENT clearance",
  "Psychosocial evaluation — you and your support system",
] as const;

const PhaseEvaluationSection = () => (
  <PhaseSection id="area-1" roman="I" phaseLabel="Phase One">
    <div>
      <Eyebrow label="The Honest First Question" className="mb-5 text-black" />

      <h2 className={cn(CI_TITLE, "mb-4")}>
        Evaluation <em>&amp; Workup</em>
      </h2>

      <p className={CI_BODY}>
        Before anything else, a careful answer to one question: is a transplant
        right for you, and are you right for a transplant? The workup is
        thorough, and rightly so.
      </p>

      <p className={CI_BODY}>
        Transplant evaluation begins with a detailed conversation between you,
        your family, and your nephrologist. From there, you will be referred to
        a transplant centre for a structured assessment &mdash; usually over
        several visits and a few weeks.
      </p>

      <p className={CI_BODY}>
        The goal is not to disqualify you. It is to identify and treat anything
        &mdash; a quiet infection, a heart condition, an undetected cancer
        &mdash; that could make transplantation unsafe, and to fix what can be
        fixed before the surgery. The same careful workup is then conducted for
        any potential <em>living donor</em>.
      </p>
    </div>

    <div>
      <div className="mt-9 rounded-[2px] border-l-[3px] border-primary-subtle bg-[rgba(14,124,123,0.06)] px-9 py-8">
        <p className="mb-4.5 font-roboto text-lg font-bold tracking-[0.05em] text-[#003e68] uppercase">
          A typical evaluation includes
        </p>

        <ul className="flex list-none flex-col gap-3.5">
          {EVALUATION_ITEMS.map((item) => (
            <li
              key={item}
              className="relative pl-[25px] font-roboto text-[17px] leading-[1.6] text-[#393f42] [&_strong]:font-bold [&_strong]:text-secondary"
            >
              <span
                aria-hidden="true"
                className="absolute top-2 left-[2px] size-2 rotate-45 bg-primary-subtle"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </PhaseSection>
);

export default PhaseEvaluationSection;
