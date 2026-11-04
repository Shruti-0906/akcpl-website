import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { HEADING_EM, EYEBROW_LABEL_2, SECTION_BASE } from "../../constants";

const BENEFITS = [
  {
    title: "Patients & Families",
    desc: "Peace of mind knowing that every treatment meets international safety and hygiene standards.",
  },
  {
    title: "Hospital Partners",
    desc: "Assurance that outsourced or co-managed dialysis units maintain NABH-compliant clinical governance.",
  },
  {
    title: "Government Health Agencies",
    desc: "Transparent, audit-ready operations that deliver consistent healthcare under public schemes.",
  },
] as const;

const BenefitsSection = () => (
  <section id="benefits" className={cn(SECTION_BASE, "bg-[#e0f2f9]", GUTTER)}>
    <div className="mx-auto max-w-7xl">
      <Eyebrow label="Who It Serves" className={EYEBROW_LABEL_2} />
      <h2 className="mt-5 mb-5 font-cormorant text-[clamp(36px,4vw,58px)] leading-[1.1] font-bold text-black">
        Who Benefits from Our <em className={HEADING_EM}>Quality Framework?</em>
      </h2>

      <div className="mt-15 grid gap-5 md:grid-cols-3">
        {BENEFITS.map((benefit) => (
          <div
            key={benefit.title}
            className="rounded-[8px] border border-[#002238] bg-[linear-gradient(135deg,#003e68,#001a2c)] px-7 py-8 hover:border-[#5bc5f2] hover:bg-[#013b62] hover:bg-none"
          >
            <h3 className="mb-2.5 font-cormorant text-[22px] leading-[1.2] font-bold text-white">
              {benefit.title}
            </h3>
            <p className="font-roboto text-[15px] leading-[1.65] font-light text-white/55">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
