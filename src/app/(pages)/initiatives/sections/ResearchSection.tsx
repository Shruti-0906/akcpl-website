import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { HEADING_EM, EYEBROW_LABEL_2, SECTION_BASE } from "../constants";

const RESEARCH_AREAS = [
  {
    icon: "📡",
    title: "Dialysis Outcome Analytics",
    desc: "Continuous monitoring of clinical KPIs across all centres — Kt/V adequacy, haemoglobin control, infection rates, and patient-reported outcomes.",
  },
  {
    icon: "🔩",
    title: "Vascular Access Research",
    desc: "Studying AV fistula maturation predictors, catheter complication patterns, and outcomes of our structured VA care pathway in an Indian population.",
  },
  {
    icon: "🧪",
    title: "Clinical Protocol Development",
    desc: "Developing and validating India-specific clinical protocols for dialysis adequacy, anaemia management, mineral bone disease, and nutrition in CKD.",
  },
] as const;

const ResearchSection = () => (
  <section id="research" className={cn(SECTION_BASE, "bg-[#e0f2f9]", GUTTER)}>
    <div className="mx-auto max-w-7xl">
      <Eyebrow label="Academic & Research" className={EYEBROW_LABEL_2} />
      <h2 className="mt-5 mb-5 font-cormorant text-[clamp(36px,4vw,58px)] leading-[1.1] font-bold text-black">
        Science is at the <em className={HEADING_EM}>Heart of Everything</em>
      </h2>
      <p className="max-w-none font-roboto text-[17px] leading-[1.75] font-light text-[#393f42]">
        AKC generates, analyses, and publishes research that advances the
        understanding of renal disease in the Indian context.
      </p>

      <div className="mt-15 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {RESEARCH_AREAS.map((area) => (
          <div
            key={area.title}
            className="rounded-[8px] border border-[#002238] bg-[linear-gradient(135deg,#003e68,#001a2c)] px-7 py-8 hover:border-[#5bc5f2] hover:bg-[#013b62] hover:bg-none"
          >
            <div className="mb-4 text-[32px]" aria-hidden="true">
              {area.icon}
            </div>
            <h3 className="mb-2.5 font-cormorant text-[22px] leading-[1.2] font-bold text-white">
              {area.title}
            </h3>
            <p className="font-roboto text-[15px] leading-[1.65] font-light text-white/55">
              {area.desc}
            </p>
          </div>
        ))}
      </div>

      {/* The initiatives grid links straight here, so it carries the same
          `scroll-mt` as a full section - the sticky nav and breadcrumb bar
          would otherwise sit over the heading on arrival. */}
      <div
        id="iit"
        className="relative mt-15 scroll-mt-33 overflow-hidden rounded-[12px] border border-[rgba(13,138,138,0.2)] bg-[linear-gradient(135deg,#003e68,#001a2c)] p-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-15 lg:p-15"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-[200px] hidden -translate-y-1/2 font-cormorant text-[160px] leading-none font-bold text-white/[0.03] select-none lg:block"
        >
          IIT
        </span>
        <div>
          <h3 className="mb-4 font-cormorant text-[40px] leading-[1.1] font-bold text-white">
            Collaborating with IIT Bombay on Operational Research
          </h3>
          <p className="max-w-[95%] font-roboto text-[15px] leading-[1.75] font-light text-white/55">
            In a first-of-its-kind partnership between a renal care provider and
            a premier engineering institution, AKC and IIT Bombay are applying
            Operations Research methodology to solve the complex systems
            challenges in scaling high-quality dialysis care across India.
          </p>
        </div>
        <div className="mt-8 w-fit shrink-0 rounded-[8px] border border-tertiary/30 bg-tertiary/12 px-8 py-6 text-center lg:mt-0">
          <span className="mb-1 block font-cormorant text-[36px] font-bold text-tertiary-subtle">
            IIT
          </span>
          <span className="font-roboto text-[11px] tracking-[0.1em] text-white/45 uppercase">
            Bombay Partner
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default ResearchSection;
