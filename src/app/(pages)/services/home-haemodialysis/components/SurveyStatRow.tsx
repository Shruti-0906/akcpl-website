import type { ReactNode } from "react";

export type SurveyStat = {
  value: string;
  /** Rendered smaller and baseline-aligned, as in "88%". */
  suffix?: string;
  label: ReactNode;
};

const SurveyStatRow = ({ value, suffix, label }: SurveyStat) => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-4.5 border-l-[3px] border-secondary-light bg-[#e0f2f9] p-[18px_22px]">
      <p className="font-roboto text-4xl leading-none font-bold tracking-[-0.018em] text-secondary">
        {value}
        {suffix && <span className="text-2xl">{suffix}</span>}
      </p>

      <p className="font-roboto text-sm leading-[1.55] text-[#2a2a2a]">
        {label}
      </p>
    </div>
  );
};

export default SurveyStatRow;
