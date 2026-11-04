"use client";

import { useState } from "react";
import type { ReactNode } from "react";

import { Carousel } from "@/components/ui";
import type { MediaItem } from "@/components/ui";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const S3 = "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Banner";

const SLIDES: readonly MediaItem[] = [
  { kind: "image", src: `${S3}/Homepage+Banner+1.jpg`, alt: "" },
  { kind: "image", src: `${S3}/Homepage+Banner+2.jpg`, alt: "" },
  { kind: "image", src: `${S3}/Homepage+Banner+3.jpg`, alt: "" },
];

type Copy = { heading: ReactNode; body: string };

const COPY: readonly [Copy, Copy, Copy] = [
  {
    heading: (
      <>
        Making an <span className="text-primary italic">Impact</span> in the
        Universe of Kidney Care
      </>
    ),
    body: "Apex Kidney Care is transforming renal health in India through clinical excellence, validated data science, scientific research, and a mission to ensure every kidney patient receives world-class care wherever they are.",
  },
  {
    heading: (
      <>
        Making an <span className="text-primary italic">Impact</span> in the
        Universe of Kidney Care
      </>
    ),
    body: "Apex Kidney Care is transforming renal health in India through clinical excellence, validated data science, scientific research, and a mission to ensure every kidney patient receives world-class care wherever they are.",
  },
  {
    heading: (
      <>
        Making an <span className="text-primary italic">Impact</span> in the
        Universe of Kidney Care
      </>
    ),
    body: "Apex Kidney Care is transforming renal health in India through clinical excellence, validated data science, scientific research, and a mission to ensure every kidney patient receives world-class care wherever they are.",
  },
];

const HeroStage = () => {
  const [active, setActive] = useState(0);
  const copy = COPY[active] ?? COPY[0];

  return (
    <div className="relative flex min-h-90 flex-1 items-center overflow-hidden sm:min-h-110 lg:min-h-0">
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Carousel
          ariaLabel="Apex Kidney Care highlights"
          variant="hero"
          effect="fade"
          loop
          autoplay={{ delay: 6000 }}
          pagination={false}
          items={SLIDES}
          onSlideChange={setActive}
          className="h-full w-full"
          slideClassName="[&>img]:object-cover"
        />

        {/* Swiper's fade effect stacks the active slide, so the scrim needs an
            explicit z-index or it renders underneath the photo. */}
        <div className="absolute inset-0 z-10 bg-black/80" />
      </div>

      <div className={cn("relative z-2 w-full py-16 lg:py-20", GUTTER)}>
        {/*
          One heading whose contents swap, rather than three headings - a page
          should carry a single h1. Keyed on the slide so the copy cross-fades
          in step with the picture instead of snapping.
        */}
        <div
          key={active}
          className="flex max-w-2xl animate-hero-copy flex-col gap-5 sm:gap-6"
        >
          <h1 className="font-cormorant text-4xl leading-tight font-semibold text-white sm:text-5xl lg:text-6xl">
            {copy.heading}
          </h1>
          <p className="font-roboto text-sm text-white sm:text-base">
            {copy.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroStage;
