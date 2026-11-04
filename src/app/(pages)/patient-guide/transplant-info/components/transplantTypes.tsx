import type { TransplantType } from "./TransplantTypeCard";

/** The four `.type-card` entries in the `.types-grid`. */
export const TRANSPLANT_TYPES: readonly TransplantType[] = [
  {
    eyebrow: "Most common in India",
    title: "Living Donor Transplant",
    description: (
      <>
        A kidney is donated by a willing, consenting{" "}
        <strong>family member or close relation</strong>, with rigorous medical
        and legal evaluation under the Transplantation of Human Organs Act.
        Outcomes are typically the best, and surgery can be planned in advance
        &mdash; even before dialysis begins.
      </>
    ),
  },
  {
    eyebrow: "Growing in India",
    title: "Deceased Donor Transplant",
    description: (
      <>
        A kidney is gifted by the family of a brain-dead donor through a state
        or national organ-sharing network. Patients are registered on a{" "}
        <strong>waiting list</strong>; matching is based on blood group, tissue
        compatibility, urgency, and waiting time.
      </>
    ),
  },
  {
    eyebrow: "When direct match fails",
    title: "Paired Kidney Exchange (ASTRA)",
    description: (
      <>
        When your willing living donor is not compatible with you, a{" "}
        <strong>swap is arranged</strong> between two (or more) incompatible
        donor-recipient pairs &mdash; so each recipient receives a compatible
        kidney. A growing programme across leading Indian centres.
      </>
    ),
  },
  {
    eyebrow: "Specialised protocols",
    title: "ABO-Incompatible & Desensitisation",
    description: (
      <>
        Advanced centres can now perform transplants{" "}
        <strong>across blood-group barriers</strong>, or in patients with high
        antibody levels, using specialised pre-transplant treatments. Outcomes
        have improved dramatically &mdash; making transplant possible for many
        who would once have been told no.
      </>
    ),
  },
];
