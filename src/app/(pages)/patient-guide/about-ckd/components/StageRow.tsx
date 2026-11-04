import { Eyebrow } from "@/components";
import { cn } from "@/lib";

import type { Stage } from "./stages";
import { CI_BODY, CI_TITLE } from "./text";

export interface StageRowProps {
  stage: Stage;
  /**
   * Position in the list. The source tints the 2nd and 4th rows through
   * `.stage-row:nth-child(even)`, which cannot be used here since each row
   * renders independently, so the parity is passed in instead.
   */
  index: number;
}

/**
 * The source's `.stage-row`: an oversized numeral, an eGFR figure, and the
 * stage's `.ci-title`/`.ci-body`, three columns wide on larger screens and
 * stacked on small ones (the source itself never stacks, but nothing in this
 * codebase ships a fixed-width row without a small-screen fallback).
 */
const StageRow = ({ stage, index }: StageRowProps) => (
  <div
    className={cn(
      "grid grid-cols-1 items-center gap-6 border-b border-[#e7e7e7] px-9 py-6 last:border-b-0 lg:grid-cols-[90px_130px_1fr] lg:gap-8",
      index % 2 === 1 ? "bg-[#e9f7fd]" : "bg-white",
    )}
  >
    <div
      className={cn(
        "font-roboto text-[42px] leading-none font-light tracking-[-0.018em]",
        stage.numeralClassName,
      )}
    >
      {stage.number}
    </div>

    <div className="flex flex-col lg:border-l lg:border-[#e7e7e7] lg:pl-6">
      {/*
       * The rule is narrowed to the source's 24px and the label kept on one
       * line: `Eyebrow` defaults to a 32px rule, which overflows this 130px
       * column and wraps "EGFR" under the slashes.
       */}
      <Eyebrow
        label="// eGFR"
        className="mb-1 text-black [&]:whitespace-nowrap [&>span]:w-6"
      />
      <div className="font-roboto text-lg font-bold tracking-[-0.005em] text-secondary italic">
        {stage.egfr}
      </div>
    </div>

    <div>
      <h3 className={cn(CI_TITLE, "mb-4 text-2xl lg:text-2xl")}>
        {stage.title}
      </h3>
      <p className={CI_BODY}>{stage.body}</p>
    </div>
  </div>
);

export default StageRow;
