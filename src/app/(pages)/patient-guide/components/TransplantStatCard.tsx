import type { ReactNode } from "react";

import { Eyebrow } from "@/components";

export type TransplantStat = {
  id: string;
  /** Small rule-and-caps label opening the card. */
  label: string;
  /** The oversized figure; its `em` carries its own colour class. */
  value: ReactNode;
  description: ReactNode;
};

/**
 * The source tints every other card with `:nth-child(even)`, so the rose
 * variant stays a CSS concern (`even:`) rather than a field on the data.
 */
const TransplantStatCard = ({ stat }: { stat: TransplantStat }) => (
  <div className="relative rounded-[2px] border border-l-[3px] border-[#fff592] bg-white px-7 py-[23px] even:border-[#e3aeae]">
    <Eyebrow label={stat.label} className="mb-5 text-black" />

    <div className="mb-1.5 font-roboto text-[46px] leading-none font-bold tracking-[-0.02em] text-secondary [&_em]:text-[0.7em] [&_em]:font-bold [&_em]:italic">
      {stat.value}
    </div>

    <div className="font-roboto text-[14.5px] leading-[1.6] text-[#2A2A2A]">
      {stat.description}
    </div>
  </div>
);

export default TransplantStatCard;
