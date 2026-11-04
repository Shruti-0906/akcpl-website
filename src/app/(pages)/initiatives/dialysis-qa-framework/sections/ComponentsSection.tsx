import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { HEADING_EM, EYEBROW_LABEL_2, SECTION_BASE } from "../../constants";

const COMPONENTS = [
  {
    title: "Hemodialysis Adequacy & Clinical Outcome Monitoring",
    intro:
      "A high-quality dialysis session directly correlates with patient longevity and quality of life. We continuously track key clinical indicators to tailor care for every patient.",
    points: [
      {
        label: "Kt/V & URR Tracking",
        text: "Routine automated measurement of single-pool Kt/V and Urea Reduction Ratio (URR) to ensure optimal solute clearance.",
      },
      {
        label: "Anemia Management Protocols",
        text: "Continuous monitoring of hemoglobin levels, transferrin saturation (TSAT), and ferritin to guide erythropoietin and iron dosing.",
      },
      {
        label: "Fluid & Ultrafiltration Management",
        text: "Controlled ultrafiltration rates (UFR) to minimize intradialytic hypotension, myocardial stunning, and cardiovascular events.",
      },
      {
        label: "Nutrition & Bone Mineral Care",
        text: "Regular assessment of serum albumin, calcium, phosphate, and PTH levels to manage mineral bone disease (MBD).",
      },
    ],
  },
  {
    title: "Water Purity & RO Plant Quality Controls",
    intro:
      "Water is the single largest component of hemodialysis therapy. A patient comes into contact with over 300 to 500 liters of water every week; hence, water quality is paramount.",
    points: [
      {
        label: "Ultra-Pure Dialysis Water",
        text: "Daily physical and chemical quality checks across all Reverse Osmosis (RO) plants.",
      },
      {
        label: "Microbiological & Endotoxin Testing",
        text: "Monthly bioburden and endotoxin sampling to meet stringent AAMI/ISO standards.",
      },
      {
        label: "Preventive Technical Auditing",
        text: "Scheduled replacement of membranes, filters, and UV sanitization units to prevent biofilm accumulation.",
      },
    ],
  },
  {
    title: "Vascular Access Governance Pathway",
    intro:
      "Vascular access is the lifeline of a hemodialysis patient. Protecting access longevity and preventing infections are core priorities.",
    points: [
      {
        label: "Aseptic Access Cannulation",
        text: "Protocolized, touch-free cannulation techniques for Arteriovenous (AV) Fistulas and Grafts.",
      },
      {
        label: "Hemodialysis Catheter Care",
        text: "Specialized dressing protocols, exit-site inspection, and heparin locking to reduce catheter-related bloodstream infections (CRBSI).",
      },
      {
        label: "Early Surveillance & Salvage",
        text: "Regular physical examination and Doppler surveillance for early detection of stenosis, thrombosis, or access dysfunction.",
      },
    ],
  },
  {
    title: "Reuse Protocols & Infection Control",
    intro:
      "To guarantee patient safety during dialyzer reprocessing, AKC adheres to strict, validated reuse algorithms.",
    points: [
      {
        label: "Automated Dialyzer Reprocessing",
        text: "Computerized volume checks (Total Cell Volume - TCV) and pressure leak testing before every reuse cycle.",
      },
      {
        label: "Strict Patient Segregation",
        text: "Dedicated re-processors, supply lines, and machines for patients with blood-borne viruses (HBsAg, HCV, HIV).",
      },
      {
        label: "Environment & Equipment Disinfection",
        text: "Between-shift surface disinfections and thermal/chemical machine disinfection cycles after every session.",
      },
    ],
  },
  {
    title: "Continuous Audits & Incident Management",
    intro:
      "Quality assurance at AKC is dynamic, utilizing continuous data feedback loops and peer reviews.",
    points: [
      {
        label: "Unannounced QA Audits",
        text: "On-site inspection teams conduct regular evaluations of center hygiene, emergency preparedness, and documentation accuracy.",
      },
      {
        label: "Incident & Near-Miss Reporting",
        text: "Root Cause Analysis (RCA) performed for any intradialytic event or protocol variance to implement immediate Corrective and Preventive Actions (CAPA).",
      },
      {
        label: "Multi-Center Quality Dashboard",
        text: "Centralized real-time analytics allowing lead nephrologists and medical directors to track safety scores across all network units.",
      },
    ],
  },
] as const;

const ComponentsSection = () => (
  <section id="components" className={cn(SECTION_BASE, "bg-white", GUTTER)}>
    <div className="mx-auto max-w-7xl">
      <Eyebrow label="How It Works" className={EYEBROW_LABEL_2} />
      <h2 className="mt-5 mb-5 font-cormorant text-[clamp(36px,4vw,58px)] leading-[1.1] font-bold text-black">
        Core Quality &amp; <em className={HEADING_EM}>Governance Components</em>
      </h2>

      <div className="mt-15 flex flex-col gap-6">
        {COMPONENTS.map((item, i) => (
          <article
            key={item.title}
            className="grid overflow-hidden rounded-[12px] border border-[rgb(223,223,223)] bg-white shadow-[0_0_25px_rgba(0,0,0,0.12)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
          >
            <div className="bg-secondary-light px-8 py-10 lg:px-10">
              <p className="mb-4 font-roboto text-[11px] tracking-[0.18em] text-white/60 uppercase">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-4 font-cormorant text-[28px] leading-[1.15] font-bold text-white">
                {item.title}
              </h3>
              <p className="font-roboto text-[15px] leading-[1.7] font-light text-white/75">
                {item.intro}
              </p>
            </div>

            <ul className="flex flex-col divide-y divide-[#dfdfdf] px-8 py-4 lg:px-10">
              {item.points.map((point) => (
                <li key={point.label} className="py-5">
                  <h4 className="mb-1.5 flex items-center gap-2.5 font-roboto text-[16px] font-bold text-black">
                    <span
                      aria-hidden="true"
                      className="size-1.5 shrink-0 rounded-full bg-primary-subtle"
                    />
                    {point.label}
                  </h4>
                  <p className="pl-4 font-roboto text-[15px] leading-[1.7] font-light text-[#393f42]">
                    {point.text}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ComponentsSection;
