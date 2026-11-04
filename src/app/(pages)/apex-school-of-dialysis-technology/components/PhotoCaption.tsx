import type { ReactNode } from "react";

import { cn } from "@/lib";

export interface PhotoCaptionProps {
  children: ReactNode;
  className?: string;
}

const PhotoCaption = ({ children, className }: PhotoCaptionProps) => (
  <figcaption
    className={cn(
      "absolute bottom-0 z-[2] h-max bg-[rgb(0_62_104/0.8)] p-[15px] lg:ml-[245px]",
      className,
    )}
  >
    <p className="mb-3.5 font-roboto text-[10px] font-semibold tracking-[0.22em] text-primary-light uppercase">
      Photograph Region
    </p>
    <p className="font-roboto text-[15px] leading-[1.4] font-light tracking-[-0.005em] text-[#e0f2f9] italic sm:text-[17px]">
      {children}
    </p>
  </figcaption>
);

export default PhotoCaption;
