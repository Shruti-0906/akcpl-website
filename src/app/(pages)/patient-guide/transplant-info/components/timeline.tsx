import type { ReactNode } from "react";

/** The `.tl-station` data for the journey overview's four-station timeline. */
export type Station = {
  id: string;
  /** The in-page anchor the station links to, e.g. `#area-1`. */
  href: string;
  /** The `.tl-dot` roman numeral. */
  roman: string;
  /** The `.tl-phase` label, e.g. "Phase One". */
  phase: string;
  /** The `.tl-name`, carrying its source `<br>` line break. */
  name: ReactNode;
  /** The `.tl-desc` copy beneath the name. */
  desc: ReactNode;
  /**
   * Per-station `.tl-dot` border/text colour. Station three's source rule
   * reads `border-color:var(--gold-1); color:var(--gold-1)`, but `--gold-1`
   * is never declared anywhere in style.css (only ever read) - the same
   * invalid-custom-property situation as `--skyblue`. The live page's
   * rendered dot for that station comes out a bright cyan-blue (see
   * live-tp-1.png), which matches `--teal-light` (#009ee3) far more closely
   * than any other token in the palette, so that's used here.
   */
  dotClassName: string;
};

export const STATIONS: readonly Station[] = [
  {
    id: "area-1",
    href: "#area-1",
    roman: "I",
    phase: "Phase One",
    name: (
      <>
        Evaluation
        <br />
        &amp; Workup
      </>
    ),
    desc: "Are you a candidate? The careful answer.",
    dotClassName: "border-primary-subtle text-primary-subtle",
  },
  {
    id: "area-2",
    href: "#area-2",
    roman: "II",
    phase: "Phase Two",
    name: (
      <>
        Finding
        <br />a Donor
      </>
    ),
    desc: "Living, deceased, paired exchange — the paths to a match.",
    dotClassName: "border-tertiary text-tertiary",
  },
  {
    id: "area-3",
    href: "#area-3",
    roman: "III",
    phase: "Phase Three",
    name: (
      <>
        The Surgery
        <br />
        &amp; Recovery
      </>
    ),
    desc: "The day itself, and the weeks that follow.",
    dotClassName: "border-primary-light text-primary-light",
  },
  {
    id: "area-4",
    href: "#area-4",
    roman: "IV",
    phase: "Phase Four",
    name: (
      <>
        A Lifetime
        <br />
        of Care
      </>
    ),
    desc: "Protecting the gift, for as long as it lasts.",
    dotClassName: "border-[#B5495B] text-[#B5495B]",
  },
] as const;
