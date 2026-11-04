import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { HEADING_EM, EYEBROW_LABEL_2, SECTION_BASE } from "../constants";

const MODULES = [
  {
    tag: "Patient Core",
    title: "Longitudinal Renal Records",
    desc: "Complete Kidney disease timeline from diagnosis through dialysis initiation and transplant — with eGFR trends, biopsy reports, medication history, and comorbidity mapping.",
    features: [
      "eGFR trajectory graphs",
      "Proteinuria trends",
      "Comorbidity risk scoring",
      "Medication interaction alerts",
    ],
  },
  {
    tag: "Dialysis Intelligence",
    title: "Session-Level Analytics",
    desc: "Every dialysis session captured with clinical granularity — Kt/V values, UFR, blood pressure profiles, vascular access performance, and real-time alerts for adverse events.",
    features: [
      "Automated Kt/V calculation",
      "Intradialytic complication tracking",
      "Water quality audit logs",
      "Machine performance linkage",
    ],
  },
  {
    tag: "Data & Research",
    title: "IRDS Integration Hub",
    desc: "De-identified patient data feeds directly into the Indian Renal Data System — enabling population-level analytics, benchmarking, and research without disrupting clinical workflow.",
    features: [
      "Anonymised data export",
      "Centre benchmarking dashboards",
      "Research cohort builder",
      "Outcome reporting tools",
    ],
  },
] as const;

const EhrSection = () => (
  <section id="ehr" className={cn(SECTION_BASE, "bg-[#e0f2f9]", GUTTER)}>
    <div className="mx-auto max-w-7xl">
      <Eyebrow label="Technology" className={EYEBROW_LABEL_2} />
      <h2 className="mt-5 mb-5 font-cormorant text-[clamp(36px,4vw,58px)] leading-[1.1] font-bold text-black">
        Nephrology <em className={HEADING_EM}>EHR Axis</em>
      </h2>
      <p className="max-w-[580px] font-roboto text-[17px] leading-[1.75] font-light text-[#393f42]">
        A purpose-built clinical technology platform designed around the
        complexity and longitudinal nature of renal care — capturing what
        generic systems miss.
      </p>

      <div className="mt-15 overflow-hidden rounded-[12px] border border-[rgb(223,223,223)] bg-white shadow-[0_0_25px_rgba(0,0,0,0.25)]">
        <div className="flex items-center gap-2.5 bg-secondary-light px-7 py-5 font-roboto text-[15px] text-white">
          <span
            aria-hidden="true"
            className="size-2.5 rounded-full bg-[#FF5F56]"
          />
          <span
            aria-hidden="true"
            className="size-2.5 rounded-full bg-[#FEBC2E]"
          />
          <span
            aria-hidden="true"
            className="size-2.5 rounded-full bg-[#28CA41]"
          />
          <span>Nephrology EHR Axis — Clinical Dashboard</span>
        </div>

        <div className="grid divide-y divide-[#dfdfdf] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {MODULES.map((mod) => (
            <div
              key={mod.tag}
              className="px-10 py-12 hover:bg-[rgba(13,138,138,0.06)]"
            >
              <p className="mb-4 font-roboto text-[9px] tracking-[0.18em] text-primary-light uppercase">
                {mod.tag}
              </p>
              <h3 className="mb-3 font-cormorant text-2xl leading-[1.15] font-bold text-black">
                {mod.title}
              </h3>
              <p className="font-roboto text-[15px] leading-[1.7] font-light text-[#393f42]">
                {mod.desc}
              </p>
              <ul className="mt-4 flex flex-col gap-1.5">
                {mod.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 font-roboto text-[14px] text-[#393f42]"
                  >
                    <span
                      aria-hidden="true"
                      className="size-1 shrink-0 rounded-full bg-secondary-light"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EhrSection;
