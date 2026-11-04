import { SectionLabel } from "../components";

const dimensions = [
  [
    "I.",
    "Business",
    <>
      Be a doctor.
      <br />
      Not an operations manager.
    </>,
    "Turnkey unit operations, bulk-procurement economics, and partnership structures that let you practise medicine.",
  ],
  [
    "II.",
    "Data",
    <>
      A patient cohort
      <br />
      you can finally see.
    </>,
    "The Axis EHR and Indian Renal Data System turn your practice into a measurable, benchmarkable, continuously improving cohort.",
  ],
  [
    "III.",
    "Research",
    <>
      The substrate
      <br />
      for real academic work.
    </>,
    "A national cohort, IIT Bombay collaboration, founder mentorship, and the full apparatus of investigator-initiated research.",
  ],
  [
    "IV.",
    "Credibility",
    <>
      Practise inside
      <br />
      an institution.
    </>,
    "An audited clinical standard, eighteen years of brand equity, and the founders' clinical reputation extending to your practice.",
  ],
  [
    "V.",
    "Growth",
    <>
      A career that
      <br />
      doesn&apos;t plateau.
    </>,
    "Sub-specialty fellowships, regional leadership roles, faculty positions, and equity pathways — a longer, branched arc.",
  ],
  [
    "VI.",
    "Stature",
    <>
      Be in the rooms
      <br />
      where standards are set.
    </>,
    "Influence on national policy, ISN / ASN / ERA visibility, clinical governance positions, and the legacy of building an institution.",
  ],
] as const;

const DimensionsOverviewSection = () => (
  <section className="relative overflow-hidden bg-secondary pt-[90px] pb-[100px] before:pointer-events-none before:absolute before:inset-0 before:bg-noise before:opacity-[0.04] before:mix-blend-multiply before:content-['']">
    <div className="relative z-[2] mx-auto w-full px-6 sm:px-10 lg:px-14.5">
      <div className="mx-auto mb-16 text-center">
        <SectionLabel light>Six Dimensions of Partnership</SectionLabel>
        <h2 className="mb-4 font-cormorant text-[clamp(36px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black text-white [&_em]:text-primary-subtle [&_em]:italic">
          Six kinds of <em>leverage</em>
        </h2>
        <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] text-white/50 [&_em]:italic [&_strong]:font-normal [&_strong]:text-inherit">
          Each dimension below has its own area. Read them in order, or skip to
          what matters to you.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
        {dimensions.map(([number, label, title, description], index) => (
          <div key={label} className="even:[&>a]:bg-[#e9f7fd]">
            <a
              href={`#dim-${index + 1}`}
              className="group relative flex h-full min-h-60 flex-col bg-white px-8 py-9 text-inherit no-underline transition duration-[250ms] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(14,37,64,0.06)] [&_h3]:mb-3.5 [&_h3]:font-cormorant [&_h3]:text-[29px] [&_h3]:leading-[1.2] [&_h3]:font-bold [&_h3]:tracking-[-0.005em] [&_h3]:text-secondary [&_p]:mb-auto [&_p]:text-[14.5px] [&_p]:leading-[1.55] [&_p]:font-normal [&_p]:text-[#404040] [&_p]:italic"
            >
              <div className="mb-[18px] font-roboto text-[32px] leading-none font-light text-primary-subtle italic">
                {number}
              </div>
              <SectionLabel>{label}</SectionLabel>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="mt-[18px] flex items-center gap-2 font-roboto text-[11px] leading-[normal] font-bold tracking-[0.16em] text-black uppercase transition-[gap] duration-[250ms] group-hover:gap-3">
                Know More <span>→</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DimensionsOverviewSection;
