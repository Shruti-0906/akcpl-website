import type { ReactNode } from "react";

import { cn } from "@/lib";

interface TrustLabelProps {
  children: ReactNode;
  light?: boolean;
  /** Centred blocks show the label inline so its rule sits beside the text. */
  inline?: boolean;
}

const TrustLabel = ({
  children,
  light = false,
  inline = false,
}: TrustLabelProps) => (
  <div
    className={cn(
      "mb-5 flex min-w-0 items-center gap-3.5 font-roboto text-sm leading-[normal] font-medium tracking-[0.22em] text-black uppercase before:h-px before:w-6 before:flex-none before:bg-current before:content-['']",
      light && "text-white",
      inline && "inline-flex",
    )}
  >
    {children}
  </div>
);

export default TrustLabel;
