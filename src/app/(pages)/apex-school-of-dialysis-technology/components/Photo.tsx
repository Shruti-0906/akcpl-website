import type { ReactNode } from "react";

import { cn } from "@/lib";

export interface PhotoProps {
  children: ReactNode;
  className?: string;
}

const Photo = ({ children, className }: PhotoProps) => (
  <div
    className={cn(
      "relative flex items-center justify-center overflow-hidden rounded-[2px]",
      "border border-white bg-[linear-gradient(135deg,#003e68_0%,#0078ad_100%)]",
      "shadow-[0_20px_35px_rgba(0,0,0,0.3)]",
      "before:pointer-events-none before:absolute before:inset-0 before:z-[1]",
      "before:bg-[radial-gradient(circle_at_25%_30%,rgba(229,192,123,0.16)_0%,transparent_55%),radial-gradient(circle_at_75%_75%,rgba(216,227,218,0.12)_0%,transparent_55%)]",
      className,
    )}
  >
    {children}
  </div>
);

export default Photo;
