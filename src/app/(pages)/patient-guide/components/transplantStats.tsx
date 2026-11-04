import type { TransplantStat } from "./TransplantStatCard";

export const TRANSPLANT_STATS: readonly TransplantStat[] = [
  {
    id: "survival-benefit",
    label: "Survival benefit",
    value: (
      <>
        2&mdash;3<em className="text-primary-subtle">×</em>
      </>
    ),
    description: (
      <>
        Transplant recipients live, on average, two to three times longer than
        comparable patients on long-term dialysis.
      </>
    ),
  },
  {
    id: "quality-of-life",
    label: "Quality of life",
    value: "Restored",
    description: (
      <>
        Most recipients report a return of energy, mobility, appetite, sexual
        function, and the ability to work, travel, and live without a schedule
        built around dialysis.
      </>
    ),
  },
  {
    id: "time-on-machine",
    label: "Time on machine",
    value: (
      <>
        Zero<em className="text-[#B5495B]">.</em>
      </>
    ),
    description: (
      <>
        No more 12 hours a week tethered to a dialysis chair. A transplanted
        kidney filters for you continuously, the way nature intended.
      </>
    ),
  },
] as const;
