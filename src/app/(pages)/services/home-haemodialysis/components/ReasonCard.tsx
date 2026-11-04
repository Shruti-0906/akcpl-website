import type { ReactNode } from "react";

import { cn } from "@/lib";

export type Reason = {
  kicker: string;
  heading: ReactNode;
  body: ReactNode;
  tags: readonly string[];
  /** The compulsion card is filled; the choice card sits on white. */
  filled?: boolean;
};

const ReasonCard = ({
  kicker,
  heading,
  body,
  tags,
  filled,
}: Reason) => {
  return (
    <article
      className={cn(
        "flex flex-col rounded-xs border p-[20px_24px] sm:p-[20px_40px]",
        filled
          ? "border-[#6496b9] bg-[#aed8f5]"
          : "border-secondary-light bg-white",
      )}
    >
      <div className="mb-6 flex items-center gap-4 sm:gap-[18px]">
        <div className="min-w-0 flex-1">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-[20px] bg-secondary-light px-3 py-[5px] font-roboto text-[10px] font-bold tracking-[0.18em] text-white uppercase">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-white/70"
            />
            {kicker}
          </span>

          <h3 className="mt-2 mb-3.5 font-roboto text-xl leading-[1.2] font-bold tracking-[-0.008em] text-secondary sm:text-2xl">
            {heading}
          </h3>
        </div>
      </div>

      <p className="mb-6 font-roboto text-[15px] leading-[1.7] text-[#2a2a2a] sm:text-[17px]">
        {body}
      </p>

      <p className="mt-auto pt-7 font-roboto text-[13.5px] font-bold text-secondary">
        {tags.join(" | ")}
      </p>
    </article>
  );
};

export default ReasonCard;
