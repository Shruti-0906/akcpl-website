import { cn } from "@/lib";

const GOV_GUTTER = "px-6 sm:px-10 lg:px-15";

const CI_TITLE =
  "font-cormorant text-[clamp(36px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black";

const CI_BODY =
  "mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42]";

const PRIORITIES = [
  {
    numeral: "i.",
    title: "Prime Minister National Dialysis Programme (PMNDP)",
    body: "Public-private dialysis delivery in district hospitals — AKC operates at the operational standard the programme was designed to achieve.",
  },
  {
    numeral: "ii.",
    title: "Ayushman Bharat & PMJAY",
    body: "Empanelled scheme delivery, transparent reporting, audit-ready operations — consistent with India's largest public health insurance programme.",
  },
] as const;

const NationalPrioritiesSection = () => (
  <section
    id="national-priorities"
    className={cn(
      "relative scroll-mt-20 overflow-hidden bg-[#e0f2f9] py-[130px]",
      GOV_GUTTER,
    )}
  >
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply",
        "bg-noise",
      )}
    />

    <div className="relative z-[2]">
      <div className="mb-6 flex items-center gap-3 font-roboto text-[11px] leading-[normal] font-bold tracking-[0.28em] text-primary-subtle uppercase before:h-px before:w-10.5 before:bg-primary-subtle before:content-['']">
        Alignment with National Priorities
      </div>

      <h2 className={cn(CI_TITLE, "mb-4")}>
        Working{" "}
        <em className="text-primary-subtle italic">
          inside the country&apos;s stated agenda
        </em>{" "}
        &mdash; not parallel to it.
      </h2>

      <p className={CI_BODY}>
        AKC&apos;s work maps directly onto the central and state
        government&apos;s existing renal-care and non-communicable-disease
        commitments.{" "}
        <strong className="font-bold text-secondary">
          Partnership is not about creating new agendas; it is about delivering
          on the ones already in place.
        </strong>
      </p>

      <div className="mt-16 grid gap-px border border-[#b9d8e4] bg-[#b9d8e4] md:grid-cols-2">
        {PRIORITIES.map((priority, index) => (
          <article
            key={priority.numeral}
            className={cn(
              "px-7 py-8",
              index === 0 ? "bg-white" : "bg-[#cee8f3]",
            )}
          >
            <div className="mb-3.5 font-roboto text-[22px] leading-[normal] font-light text-primary-subtle italic">
              {priority.numeral}
            </div>
            <h3 className="mb-2.5 font-roboto text-lg leading-[1.25] font-bold tracking-[-0.005em] text-secondary">
              {priority.title}
            </h3>
            <p className={CI_BODY}>{priority.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default NationalPrioritiesSection;
