import type { ReactNode } from "react";

export type Benefit = {
  title: string;
  /** Path data for the 24x24 stroked glyph shown in the badge. */
  icon: ReactNode;
  body: ReactNode;
};

const BenefitCard = ({ benefit }: { benefit: Benefit }) => (
  <div className="flex items-start gap-4.5 rounded-2xl border border-[#BDD7EE] bg-[#BDD7EE] px-7 py-6.5">
    <div className="flex size-11.5 shrink-0 items-center justify-center rounded-[30px] bg-white">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-6 fill-none stroke-black stroke-2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {benefit.icon}
      </svg>
    </div>
    <div>
      <h3 className="mb-1.5 font-roboto text-xl font-bold text-black">
        {benefit.title}
      </h3>
      <p className="font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
        {benefit.body}
      </p>
    </div>
  </div>
);

export default BenefitCard;
