"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";

import { cn } from "@/lib";

import type { MediaItem } from "./types";

interface CarouselThumbsProps {
  items: readonly MediaItem[];
  ariaLabel: string;
  activeIndex: number;
  onSelect: (index: number) => void;
}

const thumbSource = (item: MediaItem): string | undefined =>
  item.kind === "image" ? item.src : item.poster;

const CarouselThumbs = ({
  items,
  ariaLabel,
  activeIndex,
  onSelect,
}: CarouselThumbsProps) => {
  const stripRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    stripRef.current?.slideTo(activeIndex);
  }, [activeIndex]);

  return (
    <Swiper
      modules={[A11y]}
      onSwiper={(swiper) => {
        stripRef.current = swiper;
      }}
      watchSlidesProgress
      slidesPerView={4}
      spaceBetween={8}
      breakpoints={{ 640: { slidesPerView: 5 }, 1024: { slidesPerView: 6 } }}
      className="mt-3"
      aria-label={`${ariaLabel} thumbnails`}
    >
      {items.map((item, index) => {
        const source = thumbSource(item);
        const isActive = index === activeIndex;
        return (
          <SwiperSlide
            key={`${item.src}-${index}`}
            className="relative aspect-video overflow-hidden rounded"
          >
            <button
              type="button"
              aria-label={`Go to slide ${index + 1}: ${item.alt}`}
              aria-current={isActive || undefined}
              onClick={() => onSelect(index)}
              className={cn(
                "absolute inset-0 cursor-pointer transition",
                "focus-visible:ring-2 focus-visible:ring-primary",
                "focus-visible:outline-none",
                isActive
                  ? "ring-2 ring-primary ring-inset"
                  : "opacity-60 hover:opacity-100",
              )}
            >
              {source ? (
                <Image
                  src={source}
                  alt=""
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              ) : (
                <span className="absolute inset-0 bg-secondary-light" />
              )}
            </button>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselThumbs;
