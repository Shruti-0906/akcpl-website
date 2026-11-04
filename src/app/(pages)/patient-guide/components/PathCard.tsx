import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { cn } from "@/lib";

export type Path = {
  /** `.section-label` above the title, e.g. "Path One · Detailed below". */
  label: string;
  title: string;
  description: ReactNode;
  /**
   * Left-rule colour. The source tints the second card's rule black via
   * `.path-card:nth-child(2)`, so each entry carries its own class.
   */
  accent: string;
};

/*
 * No 1px ring: the source's `.path-card` asks for `border:1px solid var(--rule)`,
 * but `--rule` is never defined, so that shorthand is invalid and only the 3px
 * left border survives.
 */
const PathCard = ({ path }: { path: Path }) => (
  <div
    className={cn(
      "relative rounded-[2px] border-l-[3px] bg-[#f3fbff] px-6.5 py-7",
      path.accent,
    )}
  >
    <Eyebrow label={path.label} className="mb-5 text-black" />

    <h3 className="mb-2.5 font-cormorant text-[22px] font-bold tracking-[-0.005em] text-secondary">
      {path.title}
    </h3>
    <p className="font-roboto text-[17px] leading-[1.6] text-[#393f42]">
      {path.description}
    </p>
  </div>
);

export default PathCard;
