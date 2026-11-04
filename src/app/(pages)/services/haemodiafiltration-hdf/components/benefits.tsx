import type { Benefit } from "./BenefitCard";

export const BENEFITS: readonly Benefit[] = [
  {
    title: "Living longer",
    icon: (
      <path d="M12 21C12 21 4 13.5 4 8.5A4 4 0 0 1 12 6a4 4 0 0 1 8 2.5C20 13.5 12 21 12 21z" />
    ),
    body: "The headline finding: a 23% lower risk of death from any cause versus standard dialysis, in the largest trial ever conducted.",
  },
  {
    title: "Fewer infections that turn deadly",
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
    ),
    body: "The clearest survival gain came from a drop in infection-related deaths — your body copes better when the blood is cleaner and less inflamed.",
  },
  {
    title: "Steadier sessions",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
    body: "HDF tends to be gentler on blood pressure during treatment, so patients often feel less of the crashing, cramping and washed-out feeling that can follow dialysis.",
  },
  {
    title: "A sharper mind, a fuller life",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </>
    ),
    body: (
      <>
        In the trial&rsquo;s quality-of-life results, HDF patients held on to
        their <b>thinking, physical function and social life</b> better than
        those on standard dialysis — the decline was slower.
      </>
    ),
  },
] as const;
