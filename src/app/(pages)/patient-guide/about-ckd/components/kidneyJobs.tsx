import type { IconCardItem } from "./IconCard";

export const KIDNEY_JOBS: readonly IconCardItem[] = [
  {
    id: "filter",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    title: (
      <>
        Filter <em>waste</em>
      </>
    ),
    body: (
      <>
        Remove toxins and excess nitrogen produced when your body breaks down
        food and tissues. <strong>This is the urine-making job</strong>, and
        it&rsquo;s the most visible one.
      </>
    ),
  },
  {
    id: "fluid",
    icon: <path d="M12 2c-3 4-6 8-6 12a6 6 0 0012 0c0-4-3-8-6-12z" />,
    title: (
      <>
        Balance <em>fluid</em>
      </>
    ),
    body: (
      <>
        Hold the right amount of water in your body &mdash; not too much, not
        too little. <strong>When kidneys struggle</strong>, you may notice
        swelling in your legs, ankles, or face.
      </>
    ),
  },
  {
    id: "blood-pressure",
    icon: <path d="M3 12h4l2-6 4 12 2-6h6" />,
    title: (
      <>
        Control <em>blood pressure</em>
      </>
    ),
    body: (
      <>
        Make hormones that help regulate your blood pressure.{" "}
        <strong>Damaged kidneys cause high BP</strong> &mdash; and then high BP
        damages the kidneys further. A circle we want to interrupt.
      </>
    ),
  },
  {
    id: "red-blood-cells",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <circle cx="6" cy="8" r="2" />
        <circle cx="18" cy="8" r="2" />
        <circle cx="6" cy="16" r="2" />
        <circle cx="18" cy="16" r="2" />
      </>
    ),
    title: (
      <>
        Make <em>red blood cells</em>
      </>
    ),
    body: (
      <>
        Produce a hormone called <strong>erythropoietin (EPO)</strong> that
        tells your bone marrow to make red blood cells. When kidneys slow down,
        EPO drops &mdash;{" "}
        <em>which is why CKD often causes tiredness and breathlessness.</em>
      </>
    ),
  },
  {
    id: "bones",
    icon: <path d="M4 18l4-8 4 4 4-10 4 14" />,
    title: (
      <>
        Strengthen <em>your bones</em>
      </>
    ),
    body: (
      <>
        Activate vitamin D so your body can absorb calcium and keep bones
        strong. <strong>CKD disrupts this process</strong>, which is why your
        doctor may check your calcium, phosphate, and PTH levels.
      </>
    ),
  },
  {
    id: "chemistry",
    icon: <path d="M12 4v16M5 8h14M5 16h14" />,
    title: (
      <>
        Keep <em>chemistry in balance</em>
      </>
    ),
    body: (
      <>
        Regulate <strong>sodium, potassium, and acid levels</strong> in your
        blood. Subtle imbalances here can affect everything from how your heart
        beats to how your muscles work.
      </>
    ),
  },
] as const;
