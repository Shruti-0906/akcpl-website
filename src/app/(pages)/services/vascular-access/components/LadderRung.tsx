import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { cn } from "@/lib";

export type Rung = {
  /** The rung's position in the hierarchy, rendered as the oversized numeral. */
  num: string;
  title: ReactNode;
  body: ReactNode;
  /** The value shown under the "AKC Position" label. */
  metaVal: ReactNode;
  /** The top rung, which carries the green treatment. */
  first: boolean;
};

const LadderRung = ({ rung }: { rung: Rung }) => (
  <div
    className={cn(
      "relative grid grid-cols-1 items-center gap-6 rounded-[3px] border px-9 py-7 lg:grid-cols-[80px_1fr_200px] lg:gap-8",
      rung.first
        ? "border-[rgba(45,165,113,0.3)] bg-[rgba(45,165,113,0.08)]"
        : "border-[rgba(14,124,123,0.18)] bg-[rgba(14,124,123,0.06)]",
    )}
  >
    <span
      aria-hidden="true"
      className="font-roboto text-5xl leading-none font-light tracking-[-0.018em] text-primary-light italic"
    >
      {rung.num}
    </span>

    <div>
      <h3 className="mb-4 font-cormorant text-2xl leading-[1.05] font-bold tracking-[-0.015em] text-white [&_em]:italic">
        {rung.title}
      </h3>
      <p className="font-roboto text-[17px] leading-[22px] font-light text-[rgba(251,248,243,0.78)] [&_em]:italic">
        {rung.body}
      </p>
    </div>

    <div className="lg:border-l lg:border-[rgba(216,227,218,0.2)] lg:pl-6">
      <Eyebrow label="AKC Position" className="mb-5 text-white" />
      <p className="font-roboto text-base leading-[1.4] font-normal text-[#F5F0E8] italic">
        {rung.metaVal}
      </p>
    </div>
  </div>
);

export default LadderRung;
