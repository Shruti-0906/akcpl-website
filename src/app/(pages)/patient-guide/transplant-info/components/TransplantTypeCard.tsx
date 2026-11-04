import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { cn } from "@/lib";

export type TransplantType = {
  /** The card's `.section-label`, e.g. "Most common in India". */
  eyebrow: string;
  /** The `.type-title`. */
  title: ReactNode;
  /** The `.type-desc` paragraph. */
  description: ReactNode;
};

export interface TransplantTypeCardProps {
  type: TransplantType;
  /**
   * Zero-based position in the grid. The source's `nth-child` rule tints
   * cards one and four (`#e9f7fd` / `#c8e9f7`) and leaves two and three
   * plain (`#fff` / `#ccc`) - a diagonal checkerboard across the two-column
   * grid, not simple odd/even. `nth-child` can't reach this once each card
   * sits inside its own wrapper div, so it's recomputed from `index` as
   * "row equals column" for a two-column layout.
   */
  index: number;
}

/**
 * The source's `.type-card`: a bordered panel carrying a small eyebrow, a
 * bold title, and a short description of one transplant pathway.
 */
const TransplantTypeCard = ({ type, index }: TransplantTypeCardProps) => {
  const tinted = Math.floor(index / 2) === index % 2;

  return (
    <div
      className={cn(
        "h-full rounded-[2px] border px-8 py-9 hover:shadow-[0_8px_24px_rgba(14,37,64,0.06)]",
        tinted ? "border-[#c8e9f7] bg-[#e9f7fd]" : "border-[#ccc] bg-white",
      )}
    >
      <Eyebrow label={type.eyebrow} className="mb-5 text-black" />

      <h3 className="mb-3.5 font-roboto text-2xl leading-[1.2] font-bold tracking-[-0.005em] text-secondary">
        {type.title}
      </h3>

      <p className="font-roboto text-[15.5px] leading-[1.65] text-[#2A2A2A] [&_strong]:font-bold [&_strong]:text-secondary">
        {type.description}
      </p>
    </div>
  );
};

export default TransplantTypeCard;
