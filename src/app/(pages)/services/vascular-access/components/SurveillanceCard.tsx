import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { cn } from "@/lib";

export type SurveillanceCheck = {
  id: string;
  /** Small rule-and-caps label opening the card. */
  label: string;
  title: ReactNode;
  body: ReactNode;
  items: readonly ReactNode[];
  /** The second card sits on a deeper mist tint than the first. */
  tinted: boolean;
};

const SurveillanceCard = ({ check }: { check: SurveillanceCheck }) => (
  <div
    className={cn(
      "relative rounded-[3px] px-6 py-10 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-primary-subtle before:content-[''] sm:px-11",
      check.tinted ? "bg-[#cee8f3]" : "bg-white",
    )}
  >
    <Eyebrow label={check.label} className="mb-5 text-black" />

    <h3 className="mb-4 font-cormorant text-[24px] leading-[1.05] font-bold tracking-[-0.015em] text-black [&_em]:italic">
      {check.title}
    </h3>

    <p className="mb-3.75 font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic">
      {check.body}
    </p>

    <ul className="flex list-none flex-col gap-3.5">
      {check.items.map((item, index) => (
        <li
          key={index}
          className="relative ml-5 pl-1.25 font-roboto text-[17px] leading-[1.6] text-[#393f42] before:absolute before:top-2 before:-left-4.5 before:size-2 before:rotate-45 before:bg-primary-subtle before:content-['']"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default SurveillanceCard;
