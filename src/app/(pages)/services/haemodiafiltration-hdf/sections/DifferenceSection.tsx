import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { MECHANISMS, MechanismCard } from "../components";

const DifferenceSection = () => (
  <section id="diff" className={cn("scroll-mt-36 bg-white py-22.5", GUTTER)}>
    <div className="mb-11.25">
      <Eyebrow label="What actually changes" className="mb-5 text-black" />
      <h2 className="section-heading leading-[1.05] font-bold tracking-[-0.015em] text-black">
        Two ways to clean blood — one reaches{" "}
        <em className="text-primary-subtle italic">further</em>.
      </h2>
      <p className="mt-4.5 font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
        Think of your kidneys&rsquo; job as picking waste out of your blood.
        Both treatments use a filter, but they pull waste out in different ways.
        The difference is which wastes get removed.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-6 max-[760px]:grid-cols-1">
      {MECHANISMS.map((mechanism) => (
        <div key={mechanism.id}>
          <MechanismCard mechanism={mechanism} />
        </div>
      ))}
    </div>
  </section>
);

export default DifferenceSection;
