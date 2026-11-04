import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const PILLARS = [
  {
    title: "i. Validated adequacy",
    text: "Every session measured against Kt/V and URR targets. Adequacy is not assumed it is audited.",
  },
  {
    title: "ii. Ultra-pure water",
    text: "Water purification monitored to international standards. Because high flux and HDF are only as good as the water that supports them.",
  },
  {
    title: "iii. Trained technicians",
    text: "Every AKC technician is structured-curriculum trained, periodically re-certified, and held to the same protocols across every centre.",
  },
  {
    title: "iv. Vascular access care",
    text: "Dedicated pathways for fistula creation, surveillance, and salvage because your access is your lifeline.",
  },
] as const;

const AkcStandardSection = () => (
  <section className={cn("bg-secondary py-16 lg:py-20", GUTTER)}>
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 max-w-2xl">
        <Eyebrow label="The AKC Standard" className="mb-5 text-white" />
        <h2 className="section-heading text-white">
          Whichever modality you choose, the standard{" "}
          <span className="text-primary-subtle italic">does not change.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((pillar) => (
          <div key={pillar.title}>
            <h4 className="font-cormorant text-xl font-bold text-[#F5F0E8]">
              {pillar.title}
            </h4>
            <p className="mt-3 font-roboto text-[17px] leading-relaxed text-[#F5F0E8]/70">
              {pillar.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AkcStandardSection;
