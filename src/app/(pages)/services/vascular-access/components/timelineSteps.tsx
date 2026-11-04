import type { TimelineStep } from "./TimelineStepCard";

export const TIMELINE_STEPS: readonly TimelineStep[] = [
  {
    time: "6 months before",
    title: (
      <>
        Vessel <em>mapping</em>
      </>
    ),
    body: "An ultrasound of your arm to find the best vein and artery to use.",
    current: false,
  },
  {
    time: "3–6 months before",
    title: (
      <>
        Fistula <em>creation</em>
      </>
    ),
    body: "A short outpatient surgery at the AKC Vascular Access Centre.",
    current: false,
  },
  {
    time: "6–12 weeks",
    title: (
      <>
        Maturation <em>period</em>
      </>
    ),
    body: (
      <>
        The vein enlarges and strengthens; <strong>do not use yet.</strong>
      </>
    ),
    current: true,
  },
  {
    time: "At 6 weeks",
    title: (
      <>
        Maturity <em>check</em>
      </>
    ),
    body: "Ultrasound and clinical exam to confirm the AVF is ready.",
    current: false,
  },
  {
    time: "Ready",
    title: (
      <>
        First <em>cannulation</em>
      </>
    ),
    body: (
      <>First dialysis through the fistula &mdash; with no catheter needed.</>
    ),
    current: false,
  },
] as const;
