import type { ReactNode } from "react";

import { cn } from "@/lib";

import { CI_BODY } from "./text";

export type Symptom = {
  id: string;
  /** Shapes drawn inside the shared 24x24 stroked SVG frame. */
  icon: ReactNode;
  name: string;
  body: ReactNode;
};

export interface SymptomItemProps {
  symptom: Symptom;
  /**
   * Position in the 10-item grid (0-based). The source tints five cells via
   * `.sym-item:nth-child(1),(4),(5),(8),(9)`, which cannot be used here since
   * each cell is a mapped component rather than a literal child, so the
   * zero-based equivalents (0, 3, 4, 7, 8) are checked against the index prop
   * instead.
   */
  index: number;
}

const TINTED_INDEXES = [0, 3, 4, 7, 8];

/** The source's `.sym-item`: a 32px teal-mist icon disc beside a name and line. */
const SymptomItem = ({ symptom, index }: SymptomItemProps) => (
  <div
    className={cn(
      "grid grid-cols-[32px_1fr] items-start gap-3.5 p-5",
      TINTED_INDEXES.includes(index) && "bg-[#e9f7fd]",
    )}
  >
    <span
      aria-hidden="true"
      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#dbf4ff] text-primary-light"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="size-4"
      >
        {symptom.icon}
      </svg>
    </span>

    <div>
      <div className="mb-1 font-roboto text-lg leading-[1.3] font-bold tracking-[-0.005em] text-black">
        {symptom.name}
      </div>
      <p className={cn(CI_BODY, "mb-0")}>{symptom.body}</p>
    </div>
  </div>
);

export default SymptomItem;
