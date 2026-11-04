import type { ReactNode } from "react";

/**
 * The eight `.flagslisted-list` items - Chapter VI's same-day red flags.
 * Each is a bold lead phrase followed by trailing text, so it is modelled as
 * a single `ReactNode` rather than a split-field object.
 */
export const RED_FLAGS: readonly ReactNode[] = [
  <>
    <strong>Sudden, severe swelling</strong> in face, legs, or abdomen
  </>,
  <>
    <strong>Breathlessness at rest</strong> or lying down flat
  </>,
  <>
    <strong>Chest pain</strong> &mdash; especially with breathlessness
  </>,
  <>
    <strong>Sudden drop in urine output</strong> over 24 hours
  </>,
  <>
    <strong>Visible blood in urine</strong> (pink, red, or cola-coloured)
  </>,
  <>
    <strong>Severe nausea or vomiting</strong> preventing you from eating or
    drinking
  </>,
  <>
    <strong>Confusion, drowsiness, or unusual sleepiness</strong>
  </>,
  <>
    <strong>Muscle weakness or palpitations</strong> &mdash; especially with leg
    cramps
  </>,
];
