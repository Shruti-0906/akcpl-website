import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { cn } from "@/lib";

import { CI_BODY, CI_TITLE } from "./text";

export interface ChapterHeaderProps {
  roman: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
  inverted?: boolean;
}

const ChapterHeader = ({
  roman,
  label,
  title,
  children,
  inverted = false,
}: ChapterHeaderProps) => (
  <div className="flex items-start gap-6">
    <span
      aria-hidden="true"
      className={cn(
        "shrink-0 font-roboto text-[64px] leading-[0.85] font-bold tracking-[-0.02em] italic",
        inverted ? "text-white" : "text-black",
      )}
    >
      {roman}
    </span>

    <div className="flex-1">
      <Eyebrow
        label={label}
        className={cn("mb-5", inverted ? "text-white" : "text-black")}
      />

      <h2 className={cn(CI_TITLE, "mb-4", inverted && "text-white")}>
        {title}
      </h2>

      {/* The title carries a bottom margin of its own, so an empty body would
          otherwise add a stray gap under a header-only chapter. */}
      {children ? (
        <div
          className={cn(
            CI_BODY,
            "mb-0 [&>p]:mb-3.75 [&>p:last-child]:mb-0",
            inverted && "text-[rgba(251,248,243,0.78)]",
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  </div>
);

export default ChapterHeader;
