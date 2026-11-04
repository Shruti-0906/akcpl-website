import type { ReactNode } from "react";

import { cn } from "@/lib";

interface SectionLabelProps {
  children: ReactNode;
  light?: boolean;
  inline?: boolean;
}

const SectionLabel = ({
  children,
  light = false,
  inline = false,
}: SectionLabelProps) => (
  <div
    className={cn(
      "mb-5 flex items-center gap-3 font-roboto text-sm leading-[normal] font-normal tracking-[0.22em] text-black uppercase",
      "before:h-px before:w-6 before:flex-none before:bg-current before:content-['']",
      light && "text-white",
      inline && "inline-flex",
    )}
  >
    {children}
  </div>
);

export default SectionLabel;
