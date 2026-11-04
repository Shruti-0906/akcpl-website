import type { ReactNode } from "react";

/** The `.stage-row` data for Chapter III's five-stage table, by eGFR. */
export type Stage = {
  id: string;
  /** The oversized `.stage-num` figure, "1"-"5". */
  number: string;
  /** The `.stage-egfr-val` range or threshold. */
  egfr: string;
  /** The `.ci-title` inside `.stage-content`. */
  title: ReactNode;
  /** The `.ci-body` inside `.stage-content`. */
  body: ReactNode;
  /** Per-stage `.stage-num` colour, e.g. `.stage-row.s4 .stage-num`. */
  numeralClassName: string;
};

export const STAGES: readonly Stage[] = [
  {
    id: "s1",
    number: "1",
    egfr: "≥ 90",
    title: (
      <>
        Kidneys filter <em>normally</em> — but there is some sign of damage
      </>
    ),
    body: (
      <>
        Protein in urine, blood in urine, or scans showing kidney changes.{" "}
        <strong>Most people feel completely well.</strong> The job here is to
        find and treat the underlying cause — often diabetes or blood pressure.
      </>
    ),
    numeralClassName: "text-[#9DB6A4]",
  },
  {
    id: "s2",
    number: "2",
    egfr: "60–89",
    title: (
      <>
        <em>Mild</em> reduction in function
      </>
    ),
    body: (
      <>
        Filtering capacity has dropped a little.{" "}
        <strong>Still usually no symptoms.</strong> Same goals as Stage 1 —
        protect what you have, manage diabetes and BP, avoid medications that
        strain the kidneys.
      </>
    ),
    numeralClassName: "text-[#7A9580]",
  },
  {
    id: "s3",
    number: "3",
    egfr: "30–59",
    title: (
      <>
        <em>Moderate</em> reduction in function
      </>
    ),
    body: (
      <>
        This is the stage at which many people are first diagnosed.{" "}
        <strong>You may start to notice symptoms</strong> — tiredness, mild
        swelling, changes in urine. A nephrologist&rsquo;s involvement becomes
        very important here.
      </>
    ),
    numeralClassName: "text-[#5C7766]",
  },
  {
    id: "s4",
    number: "4",
    egfr: "15–29",
    title: (
      <>
        <em>Severe</em> reduction in function
      </>
    ),
    body: (
      <>
        <strong>Kidneys are significantly impaired.</strong> Symptoms are more
        likely. Treatment focuses on slowing progression and starting to plan
        for the possibility of dialysis or transplant —{" "}
        <em>quietly, in good time, without rush.</em>
      </>
    ),
    numeralClassName: "text-tertiary",
  },
  {
    id: "s5",
    number: "5",
    egfr: "< 15",
    title: (
      <>
        <em>Kidney failure</em> — also called End Stage Kidney Disease
      </>
    ),
    body: (
      <>
        At this stage, kidneys can no longer keep up with the body&rsquo;s needs
        alone.{" "}
        <strong>Treatment options become dialysis or transplantation.</strong>{" "}
        Many people live full and active lives on both. Your nephrologist will
        walk you through every option.
      </>
    ),
    numeralClassName: "text-[#B5495B]",
  },
] as const;
