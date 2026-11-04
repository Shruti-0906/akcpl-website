"use client";

import Image from "next/image";

import { Carousel } from "@/components/ui";
import { cn } from "@/lib";

const S3 = "https://akcpl-assets.s3.ap-south-1.amazonaws.com/testimonials";

type Testimonial = {
  src: string;
  alt: string;
};

/* The cards are published squares, so the frame is 1:1 and nothing is cropped.
   Add a new entry here and it joins the carousel; no other file changes. */
const TESTIMONIALS: readonly Testimonial[] = [
  {
    src: `${S3}/testimonials%201.jpeg`,
    alt: "Testimonials and recognition: the Health Minister visited the Goa Naveli dialysis unit and appreciated the facility and the care provided by the team. Photographs show the visit and the centre's dialysis floor.",
  },
  {
    src: `${S3}/testimonials%202.jpeg`,
    alt: "An appreciation letter to an Apex dialysis centre thanking the technicians and nursing staff, highlighting the centre's cleanliness, facilities and patient care.",
  },
];

/* Swiper needs roughly twice the visible slides before it can wrap around;
   below that it warns and the looping misbehaves. This turns itself on once
   enough cards have been added. */
const CAN_LOOP = TESTIMONIALS.length >= 4;

const TestimonialsCarousel = () => (
  <Carousel
    ariaLabel="Testimonials and recognition"
    items={TESTIMONIALS}
    getKey={(item) => item.src}
    /* A preview sits clear of the edge only when the slot count is at least two
       plus the preview scale, so 2.7 against 0.65 leaves a whole card showing. */
    slidesPerView={{ base: 1, md: 2.7 }}
    gap={{ base: 16, md: 0 }}
    centered
    loop={CAN_LOOP}
    navigation
    pagination
    aspectRatio="1 / 1"
    autoplay={{ delay: 6000 }}
    slideClassName={cn(
      "rounded-xl transition-[transform,opacity,filter] duration-500 ease-out",
      /* Swiper marks the centred slide. Everything either side is shrunk,
         faded and softened so it reads as a preview of what is coming rather
         than a second thing competing for attention. Arriving on a slide is
         what brings it back to full size and full sharpness. */
      "[&:not(.swiper-slide-active)]:scale-[0.65]",
      "[&:not(.swiper-slide-active)]:opacity-45",
      "[&:not(.swiper-slide-active)]:blur-[2px]",
      "motion-reduce:transition-none",
    )}
    renderItem={(item) => (
      /* Rendered here rather than through the carousel's own media slide so the
         quality can be pinned: these cards are dense text, and the default
         re-encode turns the letter body to mush. */
      <Image
        src={item.src}
        alt={item.alt}
        fill
        quality={100}
        sizes="(min-width: 1024px) 67vw, (min-width: 768px) 77vw, 100vw"
        className="object-contain"
      />
    )}
  />
);

export default TestimonialsCarousel;
