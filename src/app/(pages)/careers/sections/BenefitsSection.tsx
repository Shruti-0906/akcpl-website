import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import BenefitCard from "../components/BenefitCard";
import { BENEFITS } from "../components/benefits";

const BenefitsSection = () => (
  <section
    id="benefits"
    className={cn(
      "relative scroll-mt-33 overflow-hidden bg-secondary py-20 lg:py-24",
      GUTTER,
    )}
  >
    <div className="relative mx-auto mb-14 max-w-5xl text-center">
      <Eyebrow
        label="What we offer"
        className="mb-5 inline-flex text-[14px] font-normal text-white"
      />

      <h2 className="mb-5 font-cormorant text-[clamp(30px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-white">
        The <em className="text-[#00b3ff] italic">practicals.</em>
      </h2>

      <p className="font-roboto text-[16px] leading-[1.7] font-light text-[rgba(251,248,243,0.78)]">
        Eight categories of benefits that make AKC a stable, respectful, and
        growth-oriented place to spend a career.
      </p>
    </div>

    <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {BENEFITS.map((item, index) => (
        <BenefitCard key={item.id} item={item} index={index} />
      ))}
    </div>
  </section>
);

export default BenefitsSection;
