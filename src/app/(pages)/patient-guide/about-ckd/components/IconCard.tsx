import type { ReactNode } from "react";

import { cn } from "@/lib";

import { CI_BODY, CI_TITLE } from "./text";

export type IconCardItem = {
  id: string;
  icon: ReactNode;
  title: ReactNode;
  body: ReactNode;
};

export interface IconCardProps {
  item: IconCardItem;
  index: number;
}

const IconCard = ({ item, index }: IconCardProps) => (
  <div
    className={cn(
      "relative flex h-full gap-5 rounded-[2px] border border-t-4 border-primary-subtle px-5 pt-5 pb-1.25",
      "hover:shadow-[0_12px_28px_rgba(14,37,64,0.06)]",
      index % 2 === 1 ? "bg-[#e9f7fd]" : "bg-white",
    )}
  >
    <span
      aria-hidden="true"
      className="mb-5 flex size-12 shrink-0 items-center justify-center rounded-full bg-[#e0f2f9] text-primary-subtle"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="size-6"
      >
        {item.icon}
      </svg>
    </span>

    <div className="flex-1">
      <h3 className={cn(CI_TITLE, "mb-2.5 text-2xl lg:text-2xl")}>
        {item.title}
      </h3>
      <p className={CI_BODY}>{item.body}</p>
    </div>
  </div>
);

export default IconCard;
