import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import ReasonCard from "../components/ReasonCard";
import { REASONS } from "../components/reasons";

const WhySection = () => (
  <section
    id="why"
    className={cn(
      "relative scroll-mt-33 overflow-hidden bg-[#d9edf8] py-20 lg:py-24",
      GUTTER,
    )}
  >
    <div className="relative mx-auto mb-14 max-w-5xl text-center">
      <Eyebrow
        label="Six reasons to join"
        className="mb-5 inline-flex text-[14px] font-normal text-secondary"
      />

      <h2 className="mb-5 font-cormorant text-[clamp(30px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
        What makes AKC <em className="text-primary-subtle italic">different</em>{" "}
        as a place to work.
      </h2>

      <p className="font-roboto text-[16px] leading-[1.7] font-light text-[#393f42]">
        These are not employee-benefit checkboxes. They are the structural
        reasons people stay at AKC for years &mdash; and bring their friends.
      </p>
    </div>

    <div className="relative grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
      {REASONS.map((item, index) => (
        <ReasonCard key={item.id} item={item} index={index} />
      ))}
    </div>
  </section>
);

export default WhySection;
