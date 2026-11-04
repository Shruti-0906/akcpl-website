import type { ReactNode } from "react";

import { GUTTER } from "@/constants";
import { cn } from "@/lib";

export interface PhaseSectionProps {
  /** Anchor the journey timeline links to, e.g. `area-1`. */
  id: string;
  /** The oversized italic `.area-numeral`. */
  roman: string;
  /** The `.area-label` beneath it, e.g. "Phase One". */
  phaseLabel: string;
  /** `.area-alt` swaps the white fill for the pale blue one. */
  alt?: boolean;
  children: ReactNode;
}

/**
 * The source's `.area` shell, shared by all four phases: an oversized numeral
 * and phase label in a narrow sticky column, with the phase's copy beside it.
 *
 * The marker only sticks from `lg` up, where the two-column grid exists. Below
 * that the grid collapses and a sticky numeral would trail the copy.
 */
const PhaseSection = ({
  id,
  roman,
  phaseLabel,
  alt = false,
  children,
}: PhaseSectionProps) => (
  <section
    id={id}
    className={cn(
      "relative scroll-mt-30 py-27.5",
      alt ? "bg-[#e0f2f9]" : "bg-white",
      GUTTER,
    )}
  >
    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[140px_1fr]">
      <div className="lg:sticky lg:top-30 lg:self-start">
        <span
          aria-hidden="true"
          className="block font-roboto text-[88px] leading-[0.85] font-light text-black italic"
        >
          {roman}
        </span>
        <span className="mt-4 ml-1 block font-roboto text-[10.5px] font-bold tracking-[0.24em] text-black uppercase">
          {phaseLabel}
        </span>
      </div>

      <div>{children}</div>
    </div>
  </section>
);

export default PhaseSection;
