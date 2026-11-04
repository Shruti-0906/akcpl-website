import type { ReactNode } from "react";

import { cn } from "@/lib";

export type Practice = {
  /** "01"…"07", or a bullet for the closing result card. */
  numeral: string;
  name: ReactNode;
  text: ReactNode;
};

const PracticeCard = ({
  numeral,
  name,
  text,
  tinted,
}: Practice & { tinted: boolean }) => {
  return (
    <article
      className={cn(
        "relative flex flex-col border p-[28px_26px] before:absolute before:top-0 before:left-0 before:h-full before:w-[2px] before:content-['']",
        tinted
          ? "border-[#cef0ff] bg-[#e9f7fd] before:bg-[#cef0ff]"
          : "border-[#d5d5d5] bg-white before:bg-[#d5d5d5]",
      )}
    >
      <p className="mb-[18px] font-roboto text-[32px] leading-none font-bold tracking-[-0.018em] text-black italic">
        {numeral}
      </p>

      <h3 className="mb-2.5 font-roboto text-base leading-5 font-bold tracking-[-0.005em] text-black">
        {name}
      </h3>

      <p className="font-roboto text-[15px] leading-[1.6] text-[#393f42] sm:text-[17px]">
        {text}
      </p>
    </article>
  );
};

export default PracticeCard;
