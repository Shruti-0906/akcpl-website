import type { ReactNode } from "react";

import { cn } from "@/lib";

export type Step = {
  n: string;
  title: string;
  body: ReactNode;
};

const StepCard = ({ step, index }: { step: Step; index: number }) => {
  /** Every second card inverts to navy, as on the source page. */
  const inverted = index % 2 === 1;

  return (
    <div
      className={cn(
        "h-full rounded-2xl border px-7 py-7.5 shadow-[0_0_15px_rgba(0,0,0,0.05)]",
        inverted
          ? "border-secondary-light bg-secondary-light"
          : "border-[#d3e4eb] bg-white",
      )}
    >
      <p
        className={cn(
          "mb-3.5 font-roboto text-xs tracking-[2px]",
          inverted ? "text-white" : "text-primary-subtle",
        )}
      >
        {step.n}
      </p>
      <h3
        className={cn(
          "mb-4 font-cormorant text-2xl leading-[1.05] font-bold tracking-[-0.015em]",
          inverted ? "text-white" : "text-black",
        )}
      >
        {step.title}
      </h3>
      <p
        className={cn(
          "font-roboto text-[17px] leading-[22px] font-light",
          inverted ? "text-[rgba(251,248,243,0.72)]" : "text-[#393f42]",
        )}
      >
        {step.body}
      </p>
    </div>
  );
};

export default StepCard;
