import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { cn } from "@/lib";

export interface ChapterHeaderProps {
  /** Roman numeral shown alongside the heading. */
  roman: string;
  label: string;
  title: ReactNode;
  /** The chapter's opening `.ci-body` paragraphs. */
  children: ReactNode;
  /** Set on the navy chapters, which invert every text colour. */
  inverted?: boolean;
}

const ChapterHeader = ({
  roman,
  label,
  title,
  children,
  inverted = false,
}: ChapterHeaderProps) => (
  /*
   * No bottom rule: the source's `.chap-header` asks for
   * `border-bottom: 1px solid var(--rule)`, but `--rule` is never defined, so
   * the shorthand is invalid and the border resolves to `none`.
   */
  <div className="flex items-start gap-6">
    <span
      aria-hidden="true"
      className={cn(
        "shrink-0 font-roboto text-4xl leading-[0.85] font-bold tracking-[-0.02em] italic sm:text-5xl lg:text-[64px]",
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
      <h2
        className={cn(
          "section-heading leading-[1.05] font-bold tracking-[-0.015em]",
          inverted ? "text-white" : "text-black",
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-4.5 font-roboto text-[17px] leading-[22px] font-light [&_em]:italic [&_p]:mb-3.75 [&_p:last-child]:mb-0",
          inverted ? "text-[rgba(251,248,243,0.78)]" : "text-[#393f42]",
        )}
      >
        {children}
      </div>
    </div>
  </div>
);

export default ChapterHeader;
