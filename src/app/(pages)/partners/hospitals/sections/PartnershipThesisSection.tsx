import Image from "next/image";

import { cn } from "@/lib";

import { HOSPITAL_GUTTER } from "../constants";

const STATS = [
  { value: "250+", label: ["Centres operated", "across the network"] },
  { value: "14", label: ["Indian states", "and growing"] },
  { value: "18", label: ["Years of operational", "and clinical learning"] },
  { value: "3", label: ["Partnership models", "for different hospitals"] },
] as const;

const PartnershipThesisSection = () => {
  return (
    <section
      id="partnership-thesis"
      className={cn(
        "relative scroll-mt-20 overflow-hidden bg-secondary py-[110px]",
        HOSPITAL_GUTTER,
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
        {/* `.corevalues` — 1fr image / 1.5fr statement */}
        <div className="grid items-start gap-12.5 lg:grid-cols-[1fr_1.5fr]">
          <div className="w-full overflow-hidden pb-1.5 lg:mt-15">
            <Image
              src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Hospitals+-+Partnership+Thesis+Section.jpg"
              alt="AKC partners with hospitals"
              width={800}
              height={434}
              sizes="(min-width: 1024px) 30rem, 100vw"
              className="h-auto w-full"
              loading="lazy"
            />
          </div>

          <p className="relative py-12 pb-9 font-cormorant text-[30px] leading-[1.3] font-bold tracking-[-0.012em] text-white italic before:absolute before:top-0 before:left-0 before:h-[3px] before:w-15 before:bg-primary-subtle before:content-['']">
            <strong className="font-cormorant font-bold text-[#00b3ff]">
              AKC partners with hospitals
            </strong>{" "}
            by taking on the specialised clinical, operational, and capital work
            that dialysis demands &mdash; so that the hospital can offer a
            world-class renal service to its patients without becoming a
            dialysis company itself.
            <span className="mt-8 block font-roboto text-[11px] font-bold tracking-[0.22em] text-tertiary uppercase not-italic">
              The Partnership Thesis
            </span>
          </p>
        </div>

        {/* `.thesis-stats` */}
        <div className="grid grid-cols-2 gap-6 pt-10 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.value}>
              <div className="font-roboto text-[54px] leading-none font-bold tracking-[-0.02em] text-[#00b3ff]">
                {stat.value}
              </div>
              <div className="font-roboto text-[11px] leading-[1.45] font-bold tracking-[0.16em] text-primary-light uppercase">
                {stat.label[0]}
                <br />
                {stat.label[1]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipThesisSection;
