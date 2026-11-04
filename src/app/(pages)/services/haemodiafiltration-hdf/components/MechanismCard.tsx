import type { ReactNode } from "react";

import { cn } from "@/lib";

import FilterDiagram from "./FilterDiagram";

export type Mechanism = {
  id: string;
  title: string;
  /** Sits directly under the title, naming the physics at work. */
  mechanism: ReactNode;
  smallWastes: string;
  biggerWastes: ReactNode;
  body: ReactNode;
  /** The HDF card carries the convective sweep and the blue treatment. */
  convective?: boolean;
};

const MechanismCard = ({ mechanism }: { mechanism: Mechanism }) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-[20px] border px-7.5 py-8.5",
      mechanism.convective
        ? "border-[#aed8f5] bg-[#aed8f5]"
        : "border-[#c9f7a0] bg-[#c9f7a0]",
    )}
  >
    <h3 className="font-cormorant text-[28px] leading-[1.05] font-bold tracking-[-0.015em] text-black sm:text-4xl">
      {mechanism.title}
    </h3>
    <p className="mt-4 mb-3.75 font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic">
      {mechanism.mechanism}
    </p>

    <FilterDiagram convective={mechanism.convective} />

    <div className="mb-3.75 flex flex-wrap gap-4.5 font-roboto text-[13px] text-black">
      <span className="inline-flex items-center gap-1.75">
        <i
          aria-hidden="true"
          className="inline-block size-2.5 rounded-full bg-black"
        />
        {mechanism.smallWastes}
      </span>
      <span className="inline-flex items-center gap-1.75">
        <i
          aria-hidden="true"
          className="inline-block size-4 rounded-full bg-tertiary"
        />
        {mechanism.biggerWastes}
      </span>
    </div>

    <p className="font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic">
      {mechanism.body}
    </p>
  </div>
);

export default MechanismCard;
