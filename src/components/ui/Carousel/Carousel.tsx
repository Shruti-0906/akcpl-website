"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { FocusEvent, ReactNode } from "react";
import {
  A11y,
  Autoplay,
  EffectFade,
  Keyboard,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";

import { useReducedMotion } from "@/hooks";
import { cn } from "@/lib";

import CarouselThumbs from "./CarouselThumbs";
import MediaSlide from "./MediaSlide";
import {
  baseValue,
  buildBreakpoints,
  buildSizes,
  maxValue,
} from "./responsive";
import { isMediaItem } from "./types";
import type { CarouselProps, ResolvedCarouselProps } from "./types";

const MODULES = [A11y, Autoplay, EffectFade, Keyboard, Pagination];

const ARROW_CLASSES = cn(
  "absolute top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center",
  "rounded-full bg-white/90 text-secondary shadow-md transition",
  "hover:bg-white focus-visible:ring-2 focus-visible:ring-primary",
  "focus-visible:ring-offset-2 focus-visible:outline-none",
  "disabled:pointer-events-none disabled:opacity-40",
);

const Carousel = <T,>(props: CarouselProps<T>) => {
  const {
    items,
    renderItem,
    getKey,
    ariaLabel,
    variant = "default",
    slidesPerView,
    gap,
    aspectRatio,
    centered = false,
    effect = "slide",
    loop = false,
    autoplay,
    navigation = false,
    pagination = false,
    keyboard = true,
    videoPlayback = "manual",
    thumbs = false,
    className,
    slideClassName,
    swiperProps,
    onSlideChange,
  } = props as ResolvedCarouselProps;

  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [edges, setEdges] = useState({ isBeginning: true, isEnd: false });
  const reducedMotion = useReducedMotion();

  const count = items.length;
  const single = count === 1;

  const fade = effect === "fade";
  const perViewBase = fade ? 1 : baseValue(slidesPerView, 1);
  const breakpoints = fade ? undefined : buildBreakpoints(slidesPerView, gap);
  const maxPerView = fade ? 1 : maxValue(slidesPerView, 1);

  const canLoop = loop && !single && count > maxPerView;
  const showArrows = navigation && !single;
  const paginationType =
    pagination === true ? "bullets" : pagination === false ? null : pagination;
  const showPagination = paginationType !== null && !single;

  const autoplayConfig =
    autoplay === false || autoplay === undefined ? null : autoplay;
  const wantsAutoplay = autoplayConfig !== null && !single && !reducedMotion;

  const sizes = buildSizes(fade ? 1 : slidesPerView);

  const mediaItems = items.filter(isMediaItem);
  const useThumbs = thumbs && count > 1 && mediaItems.length === count;

  useEffect(() => {
    const autoplayControl = swiperRef.current?.autoplay;
    if (!autoplayControl) return;
    if (wantsAutoplay && !autoplayControl.running) {
      autoplayControl.start();
    } else if (!wantsAutoplay && autoplayControl.running) {
      autoplayControl.stop();
    }
  }, [wantsAutoplay]);

  const syncEdges = (swiper: SwiperClass) => {
    setEdges({ isBeginning: swiper.isBeginning, isEnd: swiper.isEnd });
    setActiveIndex(swiper.realIndex);
  };

  const handleFocus = () => {
    if (wantsAutoplay) swiperRef.current?.autoplay?.pause();
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!wantsAutoplay) return;
    const next = event.relatedTarget as Node | null;
    if (next && event.currentTarget.contains(next)) return;
    swiperRef.current?.autoplay?.resume();
  };

  const keyFor = (item: unknown, index: number) =>
    getKey?.(item, index) ?? String(index);

  const renderSlide = (item: unknown, index: number): ReactNode => {
    if (renderItem) return renderItem(item, index);
    if (isMediaItem(item)) {
      return (
        <MediaSlide
          item={item}
          playback={videoPlayback}
          priority={index === 0}
          sizes={sizes}
        />
      );
    }
    return null;
  };

  if (count === 0) return null;

  return (
    <div
      className={cn(
        "relative w-full",
        "[--swiper-theme-color:var(--color-primary)]",
        "[--swiper-pagination-bullet-inactive-color:var(--color-secondary)]",
        variant === "hero" && "h-full",
        variant === "default" &&
          showPagination &&
          "[--swiper-pagination-bottom:0]",
        className,
      )}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <Swiper
        modules={MODULES}
        role="region"
        aria-label={ariaLabel}
        slidesPerView={perViewBase}
        spaceBetween={baseValue(gap, 0)}
        breakpoints={breakpoints}
        centeredSlides={centered}
        loop={canLoop}
        effect={fade ? "fade" : "slide"}
        fadeEffect={{ crossFade: true }}
        watchSlidesProgress
        autoplay={
          wantsAutoplay
            ? {
                delay: autoplayConfig?.delay ?? 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: autoplayConfig?.pauseOnHover ?? true,
              }
            : false
        }
        keyboard={keyboard ? { enabled: true, onlyInViewport: true } : false}
        pagination={
          showPagination && paginationType !== null
            ? { type: paginationType, clickable: true }
            : false
        }
        a11y={{
          containerMessage: ariaLabel,
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          syncEdges(swiper);
        }}
        onSlideChange={(swiper) => {
          syncEdges(swiper);
          onSlideChange?.(swiper.realIndex);
        }}
        onResize={syncEdges}
        onBreakpoint={syncEdges}
        className={cn(
          variant === "hero" && "h-full",
          variant === "default" && showPagination && "pb-8",
        )}
        {...swiperProps}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={keyFor(item, index)}
            className={cn(
              "relative overflow-hidden",
              variant === "hero" && "h-full",
              slideClassName,
            )}
            style={aspectRatio ? { aspectRatio } : undefined}
          >
            {renderSlide(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>

      {showArrows && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={!canLoop && edges.isBeginning}
            className={cn(ARROW_CLASSES, "left-2")}
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
            disabled={!canLoop && edges.isEnd}
            className={cn(ARROW_CLASSES, "right-2")}
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </>
      )}

      {useThumbs && (
        <CarouselThumbs
          items={mediaItems}
          ariaLabel={ariaLabel}
          activeIndex={activeIndex}
          onSelect={(index) => {
            swiperRef.current?.slideToLoop(index);
          }}
        />
      )}
    </div>
  );
};

export default Carousel;
