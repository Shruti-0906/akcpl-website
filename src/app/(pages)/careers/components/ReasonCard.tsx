import { cn } from "@/lib";

import type { Reason } from "./reasons";

type ReasonCardProps = {
  item: Reason;
  index: number;
};

const ReasonCard = ({ item, index }: ReasonCardProps) => {
  const tinted = index % 2 === 1;
  const Icon = item.icon;

  return (
    <article
      className={cn(
        "flex h-full flex-col border-t-[3px] px-7 py-8 sm:px-8",
        tinted
          ? "border-primary-subtle bg-[#e0f2f9]"
          : "border-secondary bg-white",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "mb-7 flex size-12 shrink-0 items-center justify-center rounded-full",
          tinted
            ? "bg-primary/15 text-primary-subtle"
            : "bg-black/5 text-secondary",
        )}
      >
        <Icon className="size-5" />
      </span>

      <p className="mb-2.5 font-roboto text-[11px] font-bold tracking-[0.18em] text-secondary">
        {`// ${String(index + 1).padStart(2, "0")}`}
      </p>

      <h3 className="mb-4 font-cormorant text-[24px] leading-tight font-bold text-black sm:text-[26px] [&_em]:text-primary-subtle [&_em]:italic">
        {item.title}
      </h3>

      <p className="font-roboto text-[15px] leading-[1.65] font-light text-[#393f42] [&_em]:italic [&_strong]:font-semibold [&_strong]:text-black">
        {item.body}
      </p>
    </article>
  );
};

export default ReasonCard;
