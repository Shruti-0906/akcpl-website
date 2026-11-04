import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { HEADING_EM, EYEBROW_LABEL_2, SECTION_BASE } from "../../constants";

const PILLARS = [
  {
    title: "Nephrologist-Led Oversight",
    desc: "Every quality protocol is authored, monitored, and audited under strict medical governance.",
  },
  {
    title: "Real-Time Digital Auditing",
    desc: "Powered by our integrated EHR and QA dashboards for live tracking of treatment adequacy and safety metrics.",
  },
  {
    title: "Strict Infection Prevention Protocols",
    desc: "Zero-tolerance approach to healthcare-associated infections, blood-borne pathogens, and cross-contamination.",
  },
  {
    title: "Continuous Staff Training",
    desc: "Regular skill upgrading and protocol re-certifications through an ongoing patient education and technician training ecosystem.",
  },
] as const;

const PillarsSection = () => (
  <section id="pillars" className={cn(SECTION_BASE, "bg-[#e0f2f9]", GUTTER)}>
    <div className="mx-auto max-w-7xl">
      <Eyebrow label="Our Foundation" className={EYEBROW_LABEL_2} />
      <h2 className="mt-5 mb-5 font-cormorant text-[clamp(36px,4vw,58px)] leading-[1.1] font-bold text-black">
        Pillars of the <em className={HEADING_EM}>AKC Quality Framework</em>
      </h2>

      <div className="mt-15 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((pillar, i) => (
          <div
            key={pillar.title}
            className="rounded-[8px] border border-[#002238] bg-[linear-gradient(135deg,#003e68,#001a2c)] px-7 py-8 hover:border-[#5bc5f2] hover:bg-[#013b62] hover:bg-none"
          >
            <span className="mb-4 block font-cormorant text-[40px] leading-none font-bold text-tertiary-subtle">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mb-2.5 font-cormorant text-[22px] leading-[1.2] font-bold text-white">
              {pillar.title}
            </h3>
            <p className="font-roboto text-[15px] leading-[1.65] font-light text-white/55">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PillarsSection;
