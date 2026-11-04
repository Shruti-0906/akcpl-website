import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { BENEFITS, BenefitCard } from "../components";

const BenefitsSection = () => (
  <section
    id="benefits"
    className={cn("scroll-mt-36 bg-white py-32.5", GUTTER)}
  >
    <div className="mb-10 max-w-180">
      <Eyebrow label="What it means for you" className="mb-5 text-black" />
      <h2 className="section-heading leading-[1.05] font-bold tracking-[-0.015em] text-black">
        The advantages, one by{" "}
        <em className="text-primary-subtle italic">one</em>
      </h2>
    </div>

    <div className="mt-3.5 grid grid-cols-2 gap-5 max-[760px]:grid-cols-1">
      {BENEFITS.map((benefit) => (
        <div key={benefit.title}>
          <BenefitCard benefit={benefit} />
        </div>
      ))}
    </div>
  </section>
);

export default BenefitsSection;
