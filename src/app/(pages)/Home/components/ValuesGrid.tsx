const VALUES = [
  {
    title: "Patient Centricity",
    description:
      "Apex Kidney Care is transforming renal health in India through clinical excellence, validated data science, scientific research, and a mission to ensure every kidney patient receives world-class care - wherever they are.",
  },
  {
    title: "Empathy",
    description:
      "The dialysis professionals blend advanced technical mastery in machine operation and cannulation with vigilant real-time monitoring and empathetic care, ensuring safe, proactive treatment and compassionate patient education every session.",
  },
  {
    title: "Patient Education",
    description:
      "We teach every patient the “why” behind their treatment - their numbers, their diet, their options. Understanding turns fear into confidence, and a passive patient into an active partner in their own care.",
  },
  {
    title: "Scientific Rigour",
    description:
      "Every protocol is evidence-based. Every outcome is measured. We generate research-grade data from clinical practice.",
  },
  {
    title: "Clinical Integrity",
    description:
      "Led by nephrologists, every clinical decision rests on evidence and ethics alone - never on what is convenient or commercial. Every protocol is followed, every outcome recorded, every standard auditable.",
  },
  {
    title: "Integrated Care",
    description:
      "Access, dialysis, diet, lab monitoring, home options - we connect every part of kidney care under one nephrology-led roof, so nothing about a patient falls through the cracks.",
  },
] as const;

const ValuesGrid = () => (
  <div className="grid gap-6 sm:grid-cols-2">
    {VALUES.map((value) => (
      <article
        key={value.title}
        className="flex flex-col gap-2.5 rounded-xl bg-depth-card p-6"
      >
        <h3 className="font-cormorant text-xl leading-snug text-white sm:text-2xl">
          {value.title}
        </h3>
        <p className="font-roboto text-sm leading-relaxed text-white/70 sm:text-base">
          {value.description}
        </p>
      </article>
    ))}
  </div>
);

export default ValuesGrid;
