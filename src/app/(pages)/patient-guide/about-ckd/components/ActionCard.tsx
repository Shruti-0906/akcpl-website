import type { ReactNode } from "react";

import { cn } from "@/lib";

import { CI_BODY } from "./text";

export type Action = {
  id: string;
  roman: string;
  name: ReactNode;
  body: ReactNode;
};

export interface ActionCardProps {
  action: Action;
  index: number;
}

const ActionCard = ({ action, index }: ActionCardProps) => (
  <div
    className={cn(
      "relative flex h-full gap-5 rounded-[2px] border border-t-4 border-primary-subtle px-5 pt-5 pb-1.25",
      "hover:shadow-[0_12px_28px_rgba(14,37,64,0.06)]",
      index % 2 === 1 ? "bg-[#e9f7fd]" : "bg-white",
    )}
  >
    <span
      aria-hidden="true"
      className="w-12.5 shrink-0 font-roboto text-[42px] leading-[0.9] font-light tracking-[-0.018em] text-black italic"
    >
      {action.roman}
    </span>

    <div className="flex-1">
      {/* h3, not h4: these sit directly under the chapter's h2, and the sibling
          card components use h3 at the same depth. */}
      <h3 className="mb-2.5 font-roboto text-xl leading-[1.25] font-bold tracking-[-0.005em] text-secondary [&_em]:font-bold [&_em]:text-primary-subtle [&_em]:italic">
        {action.name}
      </h3>
      <p className={CI_BODY}>{action.body}</p>
    </div>
  </div>
);

export default ActionCard;
