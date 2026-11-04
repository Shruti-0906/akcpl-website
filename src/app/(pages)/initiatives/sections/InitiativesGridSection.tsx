import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { HEADING_EM, EYEBROW_LABEL, SECTION_BASE } from "../constants";

const INITIATIVES = [
  {
    tag: "Technology",
    title: "Nephrology EHR Axis",
    desc: "A purpose-built Electronic Health Record system for nephrology — capturing the granular, longitudinal data that generic EHRs miss. From vascular access history to dialysis adequacy trends, every data point matters.",
    href: "#ehr",
    linkLabel: "Explore EHR Axis",
  },
  {
    tag: "Quality",
    title: "Dialysis QA Framework",
    desc: "AKC's proprietary Quality Assurance protocols leveraging live QA dashboards, bring clinical governance to dialysis — including water quality standards, Kt/V monitoring, infection control audits, and continuous outcome measurement across all centres.",
    href: "/initiatives/dialysis-qa-framework",
    linkLabel: "Explore the QA dashboard",
  },
  {
    tag: "Innovation",
    title: "Vascular Access Care Pathway",
    desc: "India's dialysis patients deserve functioning, long-lasting vascular access. AKC has developed a structured care pathway that reduces complications, improves AV fistula maturation rates, and extends access longevity.",
    href: "/services/vascular-access",
    linkLabel: "Read About VA Care",
  },
  {
    tag: "Data Science",
    title: "Indian Renal Data System",
    desc: "The nation's first validated, research-grade renal data registry. IRDS will power population health analytics, clinical research, and evidence-based policy recommendations for India's kidney health crisis.",
    href: "/initiatives/indian-renal-data-system",
    linkLabel: "Learn About IRDS",
  },
  {
    tag: "Research",
    title: "IIT Bombay Operational Research",
    desc: "A unique academic-clinical collaboration applying operations research to real-world nephrology problems — optimising scheduling, resource utilisation, supply chain, and patient flow across AKC's dialysis network.",
    href: "#iit",
    linkLabel: "Explore Collaboration",
  },
] as const;

const InitiativesGridSection = () => (
  <section id="initiatives" className={cn(SECTION_BASE, "bg-white", GUTTER)}>
    <span
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#0075a9,transparent)]"
    />
    <div className="mx-auto max-w-7xl">
      <Eyebrow label="Flagship Initiatives" className={EYEBROW_LABEL} />
      <h2 className="mt-5 mb-5 font-cormorant text-[clamp(36px,4vw,58px)] leading-[1.1] font-bold text-black">
        Where Innovation Meets <em className={HEADING_EM}>Clinical Reality</em>
      </h2>
      <p className="max-w-none font-roboto text-[17px] leading-[1.75] font-light text-[#393f42]">
        AKC is a kidney care ecosystem, where initiatives span the full spectrum
        of renal care — from treatment delivery to data infrastructure, from
        clinician training to technology-enabled quality improvement.
      </p>

      <div className="mt-15 grid grid-cols-1 gap-[2px] sm:grid-cols-2 lg:grid-cols-3">
        {INITIATIVES.map((initiative) => (
          <article
            key={initiative.title}
            /* The gradient and border swap instantly on hover rather than
               fading through white. */
            className="relative overflow-hidden border border-[#002238] bg-[linear-gradient(135deg,#003e68,#001a2c)] px-10 py-12 hover:border-[#5bc5f2] hover:bg-[#013b62] hover:bg-none"
          >
            <span className="mb-6 inline-block rounded-[2px] border border-[rgba(13,138,138,0.25)] bg-[rgba(13,138,138,0.12)] px-2.5 py-1 font-roboto text-[9px] tracking-[0.18em] text-primary-light uppercase">
              {initiative.tag}
            </span>
            <h3 className="mb-4 font-cormorant text-2xl leading-[1.15] font-bold text-white">
              {initiative.title}
            </h3>
            <p className="mb-7 font-roboto text-[15px] leading-[1.75] font-light text-white/50">
              {initiative.desc}
            </p>
            <a
              href={initiative.href}
              className="flex items-center gap-2 font-roboto text-[15px] font-bold text-[#5bc5f2]"
            >
              {`${initiative.linkLabel} →`}
            </a>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[3px] bg-[linear-gradient(90deg,#0075a9,#009ee3)]"
            />
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default InitiativesGridSection;
