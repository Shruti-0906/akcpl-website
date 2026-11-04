import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { STEPS, StepCard } from "../components";

const ExplainerSection = () => (
  <section id="how" className={cn("scroll-mt-36 bg-[#e0f2f9] py-22.5", GUTTER)}>
    <div className="mb-10 max-w-180">
      <Eyebrow label="In plain words" className="mb-5 text-black" />
      <h2 className="section-heading leading-[1.05] font-bold tracking-[-0.015em] text-black">
        Why the <em className="text-primary-subtle italic">bigger</em> wastes
        matter
      </h2>
    </div>

    <div className="mt-3.5 grid grid-cols-3 gap-5.5 max-[820px]:grid-cols-1">
      {STEPS.map((step, index) => (
        <StepCard key={step.n} step={step} index={index} />
      ))}
    </div>
  </section>
);

export default ExplainerSection;
