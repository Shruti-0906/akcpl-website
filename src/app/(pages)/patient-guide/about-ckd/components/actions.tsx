import type { Action } from "./ActionCard";

export const ACTIONS: readonly Action[] = [
  {
    id: "blood-pressure",
    roman: "i",
    name: (
      <>
        Control your <em>blood pressure</em>
      </>
    ),
    body: (
      <>
        If you have only one number to track, make it this one. High BP damages
        kidneys; damaged kidneys raise BP.{" "}
        <strong>Most nephrologists aim for under 130/80</strong> in CKD &mdash;
        ask yours what your target is and check it at home regularly.
      </>
    ),
  },
  {
    id: "blood-sugar",
    roman: "ii",
    name: (
      <>
        Manage your <em>blood sugar</em> if you have diabetes
      </>
    ),
    body: (
      <>
        Diabetes is the leading cause of CKD in India.{" "}
        <strong>
          Tight blood sugar control protects what&rsquo;s left of kidney
          function
        </strong>{" "}
        and slows further damage. Your HbA1c every three months matters more
        than you think.
      </>
    ),
  },
  {
    id: "painkillers",
    roman: "iii",
    name: (
      <>
        Be careful with <em>painkillers</em>
      </>
    ),
    body: (
      <>
        Common over-the-counter painkillers like{" "}
        <strong>ibuprofen, diclofenac, and naproxen</strong> can damage kidneys
        with regular use.{" "}
        <em>Paracetamol is safer for most people with CKD.</em> Always ask your
        nephrologist before taking any new medication &mdash; even Ayurvedic or
        herbal remedies.
      </>
    ),
  },
  {
    id: "diet",
    roman: "iv",
    name: (
      <>
        Eating for <em>kidneys disease</em>
      </>
    ),
    body: (
      <>
        Less salt. Moderate protein. Plenty of fresh fruit and vegetables
        (within limits a dietitian will set if needed).{" "}
        <strong>Drink enough water but not excessive amounts.</strong> Avoid
        extreme diets &mdash; especially high-protein or &quot;detox&quot; plans
        &mdash; without your doctor&rsquo;s input.
      </>
    ),
  },
  {
    id: "exercise",
    roman: "v",
    name: (
      <>
        Stay <em>active</em>, but sensibly
      </>
    ),
    body: (
      <>
        Regular moderate exercise &mdash; brisk walking, swimming, gentle
        cycling &mdash; helps control BP, blood sugar, and weight.{" "}
        <strong>You don&rsquo;t need to train for a marathon.</strong> Thirty
        minutes a day, most days of the week, is enough to make a measurable
        difference.
      </>
    ),
  },
  {
    id: "follow-up",
    roman: "vi",
    name: (
      <>
        See your <em>nephrologist regularly</em>
      </>
    ),
    body: (
      <>
        A specialist who knows your numbers, watches the trends, and intervenes
        early when something shifts.{" "}
        <strong>Regular check-ins are the single biggest predictor</strong> of
        how well CKD is managed long-term. Don&rsquo;t skip appointments because
        you &quot;feel fine.&quot;
      </>
    ),
  },
];
