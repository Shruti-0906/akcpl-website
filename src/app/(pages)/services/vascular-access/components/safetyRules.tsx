import type { SafetyRule } from "./SafetyRuleCard";

/** Absolute rules &mdash; things nobody may do with the access arm. */
export const NEVER_RULES: readonly SafetyRule[] = [
  {
    id: "no-bp-cuff",
    lead: "No blood pressure cuff",
    rest: <>on the access arm &mdash; ever, in any setting</>,
  },
  {
    id: "no-blood-draws",
    lead: "No blood draws",
    rest: <>from the access arm &mdash; even in hospitals or labs</>,
  },
  {
    id: "no-iv-drips",
    lead: "No IV drips or injections",
    rest: <>in the access arm</>,
  },
  {
    id: "no-tight-clothing",
    lead: "No tight clothing, watches, or bangles",
    rest: <>on the access arm</>,
  },
  {
    id: "no-sleeping-on-arm",
    lead: "No sleeping on the access arm",
    rest: <>&mdash; switch sides if needed</>,
  },
  {
    id: "no-heavy-lifting",
    lead: "No heavy lifting",
    rest: <>with the access arm &mdash; especially in the first 6 weeks</>,
  },
  {
    id: "no-shopping-bags",
    lead: "No carrying shopping bags",
    rest: <>by hooking the handle in the access elbow</>,
  },
  {
    id: "no-tattoos",
    lead: "No tattoos, piercings, or skin treatments",
    rest: <>on the access arm</>,
  },
] as const;

/** Good daily habits for access protection. */
export const DAILY_RULES: readonly SafetyRule[] = [
  {
    id: "wash-gently",
    lead: "Wash the access arm gently",
    rest: <>with mild soap and warm water daily</>,
  },
  {
    id: "look-listen-feel",
    lead: "Do the LOOK / LISTEN / FEEL check",
    rest: <>every morning</>,
  },
  {
    id: "exercise-arm",
    lead: "Exercise the arm",
    rest: (
      <>with a soft squeeze ball (after maturation) &mdash; helps blood flow</>
    ),
  },
  {
    id: "moisturise",
    lead: "Keep skin moisturised",
    rest: <>&mdash; dry skin cracks and lets infection in</>,
  },
  {
    id: "drink-water",
    lead: "Drink enough water",
    rest: <>&mdash; dehydration is a clotting risk</>,
  },
  {
    id: "treat-gently",
    lead: "Treat your access arm gently",
    rest: <>in all situations &mdash; it is your lifeline</>,
  },
  {
    id: "tell-clinicians",
    lead: "Tell every doctor and nurse you meet",
    rest: <>that you have a fistula &mdash; they should not touch that arm</>,
  },
  {
    id: "alert-bracelet",
    lead: "Wear a medical alert bracelet",
    rest: <>on your other wrist, especially if you travel</>,
  },
] as const;
