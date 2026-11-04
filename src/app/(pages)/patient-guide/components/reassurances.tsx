import type { Reassurance } from "./ReassuranceCard";

export const REASSURANCES: readonly Reassurance[] = [
  {
    title: (
      <>
        One <em>in</em> Seven
      </>
    ),
    text: (
      <>
        Indian adults are living with <em>some stage</em> of CKD
      </>
    ),
    body: (
      <>
        Most don&rsquo;t know they have it. You knowing is already a good thing.
      </>
    ),
  },
  {
    title: <em>Most</em>,
    text: (
      <>
        People with CKD <em>will never need</em> dialysis
      </>
    ),
    body: (
      <>
        Especially when it&rsquo;s caught early. Most people manage CKD for
        years with medication and lifestyle.
      </>
    ),
  },
  {
    title: <em>Delayable</em>,
    text: (
      <>
        CKD progression can be <em>delayed</em> &mdash; often dramatically
      </>
    ),
    body: (
      <>
        The right treatment, the right diet, and consistent follow-up make an
        enormous difference.
      </>
    ),
  },
];
