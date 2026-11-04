import type { ReactNode } from "react";
import type { SwiperOptions } from "swiper/types";

export type ResponsiveValue<T> =
  T | { base?: T; sm?: T; md?: T; lg?: T; xl?: T };

export type MediaItem =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; alt: string; poster?: string };

export type CarouselVariant = "default" | "hero";
export type CarouselEffect = "slide" | "fade";
export type CarouselPagination = "bullets" | "fraction" | "progressbar";
export type VideoPlayback = "auto" | "manual";

export interface CarouselAutoplay {
  delay?: number;
  pauseOnHover?: boolean;
}

interface CarouselCommonProps {
  ariaLabel: string;
  variant?: CarouselVariant;
  slidesPerView?: ResponsiveValue<number>;
  gap?: ResponsiveValue<number>;
  aspectRatio?: string;
  centered?: boolean;
  effect?: CarouselEffect;
  loop?: boolean;
  autoplay?: false | CarouselAutoplay;
  navigation?: boolean;
  pagination?: boolean | CarouselPagination;
  keyboard?: boolean;
  videoPlayback?: VideoPlayback;
  className?: string;
  slideClassName?: string;
  swiperProps?: Partial<SwiperOptions>;
  onSlideChange?: (index: number) => void;
}

type MediaAwareProps<T> = [T] extends [MediaItem]
  ? {
      renderItem?: (item: T, index: number) => ReactNode;
      thumbs?: boolean;
    }
  : {
      renderItem: (item: T, index: number) => ReactNode;
      thumbs?: never;
    };

export type CarouselProps<T> = CarouselCommonProps &
  MediaAwareProps<T> & {
    items: readonly T[];
    getKey?: (item: T, index: number) => string;
  };

export interface ResolvedCarouselProps extends CarouselCommonProps {
  items: readonly unknown[];
  getKey?: (item: unknown, index: number) => string;
  renderItem?: (item: unknown, index: number) => ReactNode;
  thumbs?: boolean;
}

export const isMediaItem = (value: unknown): value is MediaItem => {
  if (typeof value !== "object" || value === null) return false;
  const candidate = value as Partial<MediaItem>;
  return (
    (candidate.kind === "image" || candidate.kind === "video") &&
    typeof candidate.src === "string" &&
    typeof candidate.alt === "string"
  );
};
