"use client";

import { ChevronDown, Quote } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib";

import type { Testimonial } from "./testimonials";

/**
 * Fixed collapsed quote height — about ten lines at the 15px / 1.65 body
 * setting. Held rather than capped so every card reads at the same size.
 */
const COLLAPSED = "h-[15.5rem]";

type TestimonialCardProps = {
  item: Testimonial;
  index: number;
};

const TestimonialCard = ({ item, index }: TestimonialCardProps) => {
  const tinted = index % 2 === 1;

  const quoteId = useId();
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [clipped, setClipped] = useState(false);

  /** Measured only while collapsed — expanding always fits, which would hide the toggle. */
  useEffect(() => {
    const el = quoteRef.current;
    if (!el || expanded) return;

    const measure = () => setClipped(el.scrollHeight > el.clientHeight + 1);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [expanded]);

  return (
    <figure
      className={cn(
        "flex h-full flex-col border-t-[3px] px-7 py-8 sm:px-8",
        tinted
          ? "border-primary-subtle bg-[#e0f2f9]"
          : "border-secondary bg-white",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "mb-7 flex size-12 shrink-0 items-center justify-center rounded-full",
          tinted
            ? "bg-primary/15 text-primary-subtle"
            : "bg-black/5 text-secondary",
        )}
      >
        <Quote className="size-5" />
      </span>

      <div className="relative mb-5">
        <blockquote
          id={quoteId}
          ref={quoteRef}
          lang={item.lang}
          className={cn(
            "overflow-hidden font-roboto text-[15px] leading-[1.65] font-light text-[#393f42] [&_em]:italic [&_p+p]:mt-3.5 [&_strong]:font-semibold [&_strong]:text-black",
            !expanded && COLLAPSED,
          )}
        >
          {item.quote}
        </blockquote>

        {!expanded && clipped && (
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-x-0 bottom-0 block h-16 bg-gradient-to-t to-transparent",
              tinted ? "from-[#e0f2f9]" : "from-white",
            )}
          />
        )}
      </div>

      {/* Slot is held even without a toggle so card heights stay in step. */}
      <div className="mb-6 flex h-5 items-center">
        {clipped && (
          <button
            type="button"
            onClick={() => setExpanded((open) => !open)}
            aria-expanded={expanded}
            aria-controls={quoteId}
            className={cn(
              "inline-flex cursor-pointer items-center gap-1.5 font-roboto text-[13px] font-bold tracking-[0.02em] underline-offset-4 hover:underline",
              tinted ? "text-primary-subtle" : "text-secondary",
            )}
          >
            {expanded ? "Show less" : "Read more"}
            <ChevronDown
              aria-hidden="true"
              className={cn(
                "size-4 transition-transform duration-200",
                expanded && "rotate-180",
              )}
            />
          </button>
        )}
      </div>

      <figcaption className="mt-auto font-cormorant text-[22px] leading-tight font-bold text-black sm:text-[24px]">
        {item.name}
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
