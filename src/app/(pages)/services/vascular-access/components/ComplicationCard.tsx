import type { ReactNode } from "react";

import { cn } from "@/lib";

export type Complication = {
  id: string;
  /** Shapes drawn inside the shared 24×24 stroked SVG frame. */
  icon: ReactNode;
  title: ReactNode;
  body: ReactNode;
  /** Dashed footer line — who it affects, how it is treated. */
  signature: ReactNode;
  /** Cards alternate white and a pale blue wash across the two grids. */
  tinted: boolean;
};

const ComplicationCard = ({ complication }: { complication: Complication }) => (
  <div
    className={cn(
      "relative h-full overflow-hidden rounded-[2px] border border-primary-subtle px-7.5 py-8 hover:shadow-[0_12px_28px_rgba(14,37,64,0.06)]",
      complication.tinted ? "bg-[#e9f7fd]" : "bg-white",
    )}
  >
    <span
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-[3px] bg-primary-subtle"
    />

    <span
      aria-hidden="true"
      className="mb-5 flex size-12 items-center justify-center rounded-full bg-[#e0f2f9] text-primary-subtle"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="size-6"
      >
        {complication.icon}
      </svg>
    </span>

    <h3 className="mb-4 font-cormorant text-2xl leading-[1.05] font-bold tracking-[-0.015em] text-black [&_em]:italic">
      {complication.title}
    </h3>

    <p className="mb-3.75 font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
      {complication.body}
    </p>

    <div className="border-t border-dashed border-primary-subtle pt-3 font-roboto text-[11.5px] leading-[1.6] tracking-[0.02em] text-[#606060] [&_strong]:font-medium">
      {complication.signature}
    </div>
  </div>
);

export default ComplicationCard;
