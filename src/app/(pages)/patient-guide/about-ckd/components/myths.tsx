import type { Myth } from "./MythCard";

/** The four `.myth` cards in Chapter Four's `.myths-grid`. */
export const MYTHS: readonly Myth[] = [
  {
    claim: <>&quot;CKD always leads to dialysis.&quot;</>,
    correction: <>&quot;CKD does not always lead to dialysis.&quot;</>,
    truth: (
      <>
        <strong>Most people with CKD never need dialysis.</strong> Many stay in
        early stages for decades. Even people in Stage 3 or 4 can stabilise and
        live the rest of their lives without dialysis.{" "}
        <em>Catching CKD early changes the trajectory enormously.</em>
      </>
    ),
  },
  {
    claim: <>&quot;There&rsquo;s nothing you can do.&quot;</>,
    correction: <>&quot;There is plenty that can be done.&quot;</>,
    truth: (
      <>
        <strong>There is a great deal you can do.</strong> Blood pressure
        control, blood sugar control, the right diet, the right medications,
        avoiding the wrong medications, and regular monitoring &mdash;{" "}
        <em>these all change the course of CKD substantially.</em>
      </>
    ),
  },
  {
    claim: <>&quot;You have to give up everything you enjoy.&quot;</>,
    correction: (
      <>&quot;Continue enjoying life to the fullest despite CKD.&quot;</>
    ),
    truth: (
      <>
        <strong>
          Most people with CKD continue to eat, work, travel, and live normally.
        </strong>{" "}
        Some changes are needed &mdash; less salt, more attention to certain
        foods &mdash; but <em>the goal is moderation, not deprivation.</em> A
        good dietitian helps you find what works for your life.
      </>
    ),
  },
  {
    claim: <>&quot;Once on dialysis, it&rsquo;s over.&quot;</>,
    correction: (
      <>&quot;Dialysis is not the end, It&rsquo;s a new beginning.&quot;</>
    ),
    truth: (
      <>
        <strong>People on dialysis live full, productive lives</strong> &mdash;
        working, traveling, raising families, running businesses. And dialysis
        is not the only option in late-stage CKD &mdash;{" "}
        <em>kidney transplant remains a real possibility,</em> and modern
        transplant outcomes in India are excellent.
      </>
    ),
  },
];
