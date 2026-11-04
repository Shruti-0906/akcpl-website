import { cn } from "@/lib";

import type { Benefit } from "./benefits";

type BenefitCardProps = {
  item: Benefit;
  /** Position in the grid; every second card is tinted and takes the blue icon. */
  index: number;
};

const BenefitCard = ({ item, index }: BenefitCardProps) => {
  const tinted = index % 2 === 1;
  const Icon = item.icon;

  return (
    <article
      className={cn(
        "flex h-full flex-col px-7 py-7",
        tinted ? "bg-[#e0f2f9]" : "bg-white",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "mb-6 flex size-11 shrink-0 items-center justify-center rounded-full",
          tinted
            ? "bg-primary/15 text-primary-subtle"
            : "bg-black/5 text-secondary",
        )}
      >
        <Icon className="size-[18px]" />
      </span>

      <h3 className="mb-3.5 font-cormorant text-[22px] leading-tight font-bold text-black [&_em]:text-primary-subtle [&_em]:italic">
        {item.title}
      </h3>

      <p className="font-roboto text-[14.5px] leading-[1.6] font-light text-[#393f42] [&_em]:italic [&_strong]:font-semibold [&_strong]:text-black">
        {item.body}
      </p>
    </article>
  );
};

export default BenefitCard;
