import type { IconCardItem } from "./IconCard";

export const LIVING_AREAS: readonly IconCardItem[] = [
  {
    id: "work",
    icon: (
      <>
        <path d="M3 12c0-3 3-6 6-6s6 3 6 6 3 6 6 6" />
        <circle cx="9" cy="6" r="1" />
        <circle cx="15" cy="12" r="1" />
      </>
    ),
    title: (
      <>
        Work &amp; <em>career</em>
      </>
    ),
    body: (
      <>
        Most people with CKD continue working without interruption.{" "}
        <strong>Even with dialysis, many people work full-time</strong> &mdash;
        with sessions scheduled around their job. Talk to your employer if you
        need flexible appointments.
      </>
    ),
  },
  {
    id: "travel",
    icon: (
      <>
        <path d="M3 8h18l-2 12H5z" />
        <path d="M9 8V5a3 3 0 016 0v3" />
      </>
    ),
    title: (
      <>
        Travel &amp; <em>holidays</em>
      </>
    ),
    body: (
      <>
        You can travel almost anywhere with CKD.{" "}
        <strong>Even patients on dialysis travel routinely</strong> &mdash; AKC
        and other networks help arrange dialysis sessions in your destination
        city. Plan ahead; don&rsquo;t let CKD shrink your world.
      </>
    ),
  },
  {
    id: "mental",
    icon: (
      <>
        <path d="M12 21l-7-9 7-9 7 9z" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
    title: (
      <>
        Mental <em>wellbeing</em>
      </>
    ),
    body: (
      <>
        A new diagnosis is emotionally heavy.{" "}
        <strong>Anxiety and low mood are common &mdash; and treatable.</strong>{" "}
        Talk to your family, your nephrologist, and if helpful, a counsellor.
        You don&rsquo;t have to carry this on your own.
      </>
    ),
  },
  {
    id: "family",
    icon: (
      <>
        <circle cx="9" cy="9" r="3" />
        <circle cx="17" cy="11" r="2" />
        <path d="M3 20c0-3 3-5 6-5s6 2 6 5M16 20c0-2 2-3 4-3" />
      </>
    ),
    title: (
      <>
        Family &amp; <em>relationships</em>
      </>
    ),
    body: (
      <>
        Bring your family into the conversation.{" "}
        <strong>
          The people who love you want to help &mdash; and they help better when
          they understand.
        </strong>{" "}
        Take a family member to your nephrologist appointments. Share what
        you&rsquo;re learning.
      </>
    ),
  },
  {
    id: "food",
    icon: (
      <>
        <path d="M5 9c2-3 5-5 7-5s5 2 7 5" />
        <path d="M5 15c2 3 5 5 7 5s5-2 7-5" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    title: (
      <>
        Food &amp; <em>eating out</em>
      </>
    ),
    body: (
      <>
        A good kidney diet does not mean eating bland food.{" "}
        <strong>
          You can still eat at restaurants, attend weddings, celebrate
          festivals.
        </strong>{" "}
        A dietitian will help you find ways to enjoy food while protecting your
        kidneys.
      </>
    ),
  },
  {
    id: "routine",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
    title: (
      <>
        Routine &amp; <em>follow-up</em>
      </>
    ),
    body: (
      <>
        Lab tests every few months. A nephrologist appointment every 3–6 months.
        Medication adjustments as needed.{" "}
        <strong>This rhythm becomes part of your life</strong> &mdash; and it is
        what keeps CKD stable.
      </>
    ),
  },
];
