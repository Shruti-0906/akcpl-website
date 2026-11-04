import type { ReactNode } from "react";

import { Eyebrow } from "@/components";

export type Check = {
  /** Inline 30px stroke icon shown in the teal disc. */
  icon: ReactNode;
  title: string;
  /** Caption under the title, e.g. "Every Morning". */
  caption: string;
  /** What a healthy access looks, sounds or feels like. */
  normal: ReactNode;
  /** The change that should be reported to the unit. */
  abnormal: ReactNode;
};

const CheckCard = ({ check }: { check: Check }) => (
  <div className="relative overflow-hidden rounded-[3px] bg-white px-8 py-9 text-center">
    <span
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-[3px] bg-primary-subtle"
    />

    <span
      aria-hidden="true"
      className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-[#e0f2f9] text-primary-subtle"
    >
      {check.icon}
    </span>

    <h3 className="mb-4 font-cormorant text-2xl leading-[1.05] font-bold tracking-[-0.015em] text-black">
      {check.title}
    </h3>
    <p className="mb-3.75 font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
      {check.caption}
    </p>

    <div className="mb-3.5 rounded-[2px] bg-[#e0f2f9] px-4 py-3.5 text-left">
      <Eyebrow label="Normal" className="mb-5 text-primary-subtle" />
      <p className="font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic">
        {check.normal}
      </p>
    </div>

    <div className="rounded-[2px] bg-[#faedef] px-4 py-3.5 text-left">
      <Eyebrow label="Tell us" className="mb-5 text-[#b5495b]" />
      <p className="font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic">
        {check.abnormal}
      </p>
    </div>
  </div>
);

export default CheckCard;
