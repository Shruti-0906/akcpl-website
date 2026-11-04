import Image from "next/image";
import type { ReactNode } from "react";

export interface RolePhotoProps {
  src: string;
  alt: string;
  tag: string;
  caption: ReactNode;
  priority?: boolean;
}

const RolePhoto = ({ src, alt, tag, caption, priority }: RolePhotoProps) => (
  <figure className="w-full">
    <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[2px] border border-white bg-[linear-gradient(135deg,#003e68_0%,#0078ad_100%)] shadow-[0_20px_35px_rgba(0,0,0,0.3)]">
      <Image
        src={src}
        alt={alt}
        width={900}
        height={1125}
        sizes="(min-width: 1024px) 45vw, 100vw"
        className="h-full w-full object-cover"
        priority={priority}
      />

      {/* `.photo::before` — a tinted radial wash laid over the image itself. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_25%_30%,rgba(229,192,123,0.16)_0%,transparent_55%),radial-gradient(circle_at_75%_75%,rgba(216,227,218,0.12)_0%,transparent_55%)]"
      />

      <figcaption className="absolute bottom-0 z-[2] h-max bg-[rgb(0_62_104/0.8)] p-[15px] lg:ml-[245px]">
        <div className="mb-3.5 font-roboto text-[10px] font-semibold tracking-[0.22em] text-primary-light uppercase">
          {tag}
        </div>
        <p className="font-roboto text-[15px] leading-[1.4] font-light tracking-[-0.005em] text-[#e0f2f9] italic sm:text-[17px]">
          {caption}
        </p>
      </figcaption>
    </div>
  </figure>
);

export default RolePhoto;
