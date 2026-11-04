import type { ReactNode } from "react";

import { cn } from "@/lib";

export type Reassurance = {
  /** The oversized `.ci-title` figure, e.g. "One in Seven". */
  title: ReactNode;
  /** The bold `.reassure-text` statement under the figure. */
  text: ReactNode;
  /** The closing `.ci-body` line. */
  body: ReactNode;
};

export interface ReassuranceCardProps {
  reassurance: Reassurance;
  /** Position in the band. Even positions take the source's tinted fill. */
  index: number;
}

const ReassuranceCard = ({ reassurance, index }: ReassuranceCardProps) => (
  <div
    className={cn(
      "relative h-full rounded-[2px] border border-primary-subtle px-6.5 pt-3.75",
      index % 2 === 1 ? "bg-[#e9f7fd]" : "bg-white",
    )}
  >
    <span
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-0.5 bg-primary-subtle"
    />

    <p className="mb-2.5 font-cormorant text-[28px] leading-[1.05] font-bold tracking-[-0.015em] text-black [&_em]:text-primary-subtle [&_em]:italic">
      {reassurance.title}
    </p>

    <p className="font-roboto text-lg leading-[1.4] font-bold tracking-[-0.005em] text-secondary [font-variation-settings:'opsz'_144] [&_em]:text-[#5C7766] [&_em]:italic">
      {reassurance.text}
    </p>

    <p className="mb-3.75 font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
      {reassurance.body}
    </p>
  </div>
);

export default ReassuranceCard;
