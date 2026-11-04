import type { Symptom } from "./SymptomItem";

export const SYMPTOMS: readonly Symptom[] = [
  {
    id: "fatigue-weakness",
    icon: <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />,
    name: "Fatigue and weakness",
    body: (
      <>
        A tiredness that doesn&rsquo;t improve with rest &mdash; often the first
        thing people notice.
      </>
    ),
  },
  {
    id: "swelling",
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      </>
    ),
    name: "Swelling in legs, ankles, or face",
    body: (
      <>
        Especially first thing in the morning &mdash; or after a long day on
        your feet.
      </>
    ),
  },
  {
    id: "foamy-urine",
    icon: <path d="M5 12c4-2 6-2 14 0M5 16c4-2 6-2 14 0M5 8c4-2 6-2 14 0" />,
    name: "Foamy or bubbly urine",
    body: (
      <>
        Foam that doesn&rsquo;t go away can mean protein is leaking into urine
        &mdash; a key CKD clue.
      </>
    ),
  },
  {
    id: "blood-in-urine",
    icon: (
      <>
        <path d="M12 3l4 8h-8z" />
        <circle cx="12" cy="15" r="3" />
      </>
    ),
    name: "Blood in urine",
    body: (
      <>
        Even faint pinkness deserves a check &mdash; this is never something to
        ignore.
      </>
    ),
  },
  {
    id: "poor-appetite",
    icon: <path d="M9 3v6M15 3v6M5 9h14l-2 12H7z" />,
    name: "Poor appetite, nausea",
    body: (
      <>
        A metallic taste, food not tasting right, or feeling full quickly
        &mdash; especially common in later CKD.
      </>
    ),
  },
  {
    id: "breathlessness",
    icon: (
      <>
        <path d="M6 14a6 6 0 0112 0v4a2 2 0 01-2 2H8a2 2 0 01-2-2z" />
        <path d="M9 7l3-3 3 3" />
      </>
    ),
    name: "Breathlessness",
    body: (
      <>
        Anaemia from low EPO, or fluid building up &mdash; can leave you short
        of breath climbing stairs or even at rest.
      </>
    ),
  },
  {
    id: "night-urination",
    icon: (
      <>
        <path d="M12 2v6M12 16v6M2 12h6M16 12h6" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    name: "Frequent night urination",
    body: (
      <>
        Getting up more than once or twice a night &mdash; especially new for
        you &mdash; can be a kidney clue.
      </>
    ),
  },
  {
    id: "itchy-skin",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 9l6 6M15 9l-6 6" />
      </>
    ),
    name: "Itchy skin",
    body: (
      <>
        Persistent, unexplained itching &mdash; especially on the back, arms, or
        legs &mdash; can come from toxins building up.
      </>
    ),
  },
  {
    id: "concentration",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 14s1 2 4 2 4-2 4-2" />
        <circle cx="9" cy="9" r="1" />
        <circle cx="15" cy="9" r="1" />
      </>
    ),
    name: "Difficulty concentrating",
    body: (
      <>
        A &ldquo;brain fog&rdquo; feeling &mdash; harder to focus, forgetting
        things, mind not as sharp as usual.
      </>
    ),
  },
  {
    id: "muscle-cramps",
    icon: <path d="M3 12h18M6 8h12M6 16h12" />,
    name: "Muscle cramps",
    body: (
      <>
        Calf cramps at night, or in the legs during the day &mdash; often
        related to mineral imbalances.
      </>
    ),
  },
] as const;
