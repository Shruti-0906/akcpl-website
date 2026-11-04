import type { Rung } from "./LadderRung";

export const LADDER: readonly Rung[] = [
  {
    num: "1",
    title: (
      <>
        First choice &mdash; <em>AV Fistula</em>
      </>
    ),
    body: (
      <>
        <strong>
          The clinical gold standard for almost all dialysis patients.
        </strong>{" "}
        Best survival, best dialysis quality, lowest infection rate, longest
        lifespan. Always the first option that should be evaluated.
      </>
    ),
    metaVal: (
      <>
        Aim for this <em>for everyone</em> who can have one.
      </>
    ),
    first: true,
  },
  {
    num: "2",
    title: (
      <>
        Second choice &mdash; <em>AV Graft</em>
      </>
    ),
    body: (
      <>
        When your veins are not suitable for a fistula &mdash;{" "}
        <strong>
          too small, too damaged from previous IV lines, or too deep
        </strong>{" "}
        &mdash; an AV graft is the next best permanent option. Still
        significantly better than long-term catheter use.
      </>
    ),
    metaVal: (
      <>
        Recommended <em>only when</em> AVF is not possible.
      </>
    ),
    first: false,
  },
  {
    num: "3",
    title: (
      <>
        Bridge use only &mdash; <em>Tunnelled Catheter</em>
      </>
    ),
    body: (
      <>
        A tunnelled catheter is <strong>a bridge, not a destination.</strong>{" "}
        Use it while your AVF is maturing, while you&rsquo;re waiting for graft
        placement, or temporarily after access failure.{" "}
        <em>
          Every month on a catheter carries real infection and central-vein
          risks.
        </em>
      </>
    ),
    metaVal: (
      <>
        Always have a <em>dated plan</em> to move off it.
      </>
    ),
    first: false,
  },
  {
    num: "4",
    title: (
      <>
        Emergency only &mdash; <em>Non-Cuffed Catheter</em>
      </>
    ),
    body: (
      <>
        <strong>Lifesaving for emergencies</strong> &mdash; acute kidney injury,
        sudden ESRD presentation, access failure with no immediate alternative.
        Used for days, not weeks. Then immediately transitioned to a tunnelled
        catheter or permanent access.
      </>
    ),
    metaVal: (
      <>
        Replace within <em>1&ndash;3 weeks maximum.</em>
      </>
    ),
    first: false,
  },
] as const;
