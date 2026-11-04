import type { ReactNode } from "react";

import { cn } from "@/lib";

export type TimelineStep = {
  /** Short caption above the title, e.g. "6 months before". */
  time: string;
  title: ReactNode;
  body: ReactNode;
  /** The stage the patient is living through — its dot fills in and haloes. */
  current: boolean;
};

const TimelineStepCard = ({ step }: { step: TimelineStep }) => (
  <div className="relative flex flex-col items-center px-2 text-center">
    <span
      aria-hidden="true"
      className={cn(
        "relative z-2 mt-7.5 mb-4.5 size-6 shrink-0 rounded-full border-[3px] border-primary-subtle",
        step.current
          ? "bg-primary-subtle shadow-[0_0_0_4px_rgba(14,124,123,0.15)]"
          : "bg-white",
      )}
    />

    <p className="mb-3 font-roboto text-[11px] font-medium tracking-[0.02em] text-primary-subtle">
      {step.time}
    </p>

    <h4 className="mb-4 font-cormorant text-[22px] leading-[1.05] font-bold tracking-[-0.015em] text-black [&_em]:italic">
      {step.title}
    </h4>

    <p className="font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
      {step.body}
    </p>
  </div>
);

export default TimelineStepCard;
