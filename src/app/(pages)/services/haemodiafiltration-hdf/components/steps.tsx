import type { Step } from "./StepCard";

export const STEPS: readonly Step[] = [
  {
    n: "01",
    title: "Not all waste is small",
    body: (
      <>
        Failing kidneys let many wastes build up. The small ones are easy to
        remove. But a whole class of <b>middle-sized molecules</b> also
        accumulates — and standard dialysis struggles to shift them.
      </>
    ),
  },
  {
    n: "02",
    title: "These are the ones that make you unwell",
    body: (
      <>
        Those middle molecules are linked to{" "}
        <b>
          inflammation, stiff and damaged blood vessels, poor appetite and
          fatigue
        </b>{" "}
        — the slow, grinding toll that dialysis patients know well.
      </>
    ),
  },
  {
    n: "03",
    title: "HDF clears them out",
    body: (
      <>
        By flushing a large volume of clean fluid through the filter every
        session, HDF removes far more of these harmful middle molecules —
        leaving the blood genuinely cleaner.
      </>
    ),
  },
] as const;
