import type { Check } from "./CheckCard";

export const CHECKS: readonly Check[] = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
        className="size-[30px]"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      </svg>
    ),
    title: "Look",
    caption: "Every Morning",
    normal: (
      <>
        <strong>The arm looks the same as yesterday.</strong> Vein visible. Skin
        colour normal. No swelling.
      </>
    ),
    abnormal: (
      <>
        <strong>
          Redness, swelling, warmth, pus, skin colour change, or new bruising
        </strong>{" "}
        &mdash; especially around needle sites or near a catheter exit.
      </>
    ),
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
        className="size-[30px]"
      >
        <path d="M5 9v6M9 5v14M13 7v10M17 4v16M21 9v6" />
      </svg>
    ),
    title: "Listen",
    caption: "Place Ear Near Fistula",
    normal: (
      <>
        <strong>A continuous &ldquo;whooshing&rdquo; sound</strong> &mdash;
        called a <em>bruit</em> &mdash; like running water. Steady throughout
        the heartbeat.
      </>
    ),
    abnormal: (
      <>
        <strong>Sound becomes weaker, intermittent, or stops entirely.</strong>{" "}
        Or starts sounding like a high-pitched whistle.
      </>
    ),
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
        className="size-[30px]"
      >
        <path d="M9 11V7a3 3 0 016 0v4M5 11h14l-1 9H6z" />
      </svg>
    ),
    title: "Feel",
    caption: "Light Touch on Fistula",
    normal: (
      <>
        <strong>A soft buzzing vibration</strong> &mdash; called a{" "}
        <em>thrill</em> &mdash; under your fingers. Continuous, like a purring
        cat.
      </>
    ),
    abnormal: (
      <>
        <strong>
          The thrill is weaker, gone, or feels like a strong pulse instead
        </strong>{" "}
        of a continuous buzz. This is the most important sign of a problem.
      </>
    ),
  },
] as const;
