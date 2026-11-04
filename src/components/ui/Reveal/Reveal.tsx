"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { useAppReady, useReducedMotion } from "@/hooks";
import { cn } from "@/lib";

/** Kept in step with the `duration-600` transition below. */
const DURATION_MS = 600;

/** A little slack so the classes are stripped after the transition, not during. */
const SETTLE_MS = 100;

type Phase = "hidden" | "revealing" | "settled";

export interface RevealProps {
  children: ReactNode;
  delayMs?: number;
  className?: string;
}

const Reveal = ({ children, delayMs = 0, className }: RevealProps) => {
  const reducedMotion = useReducedMotion();
  const appReady = useAppReady();
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  const [phase, setPhase] = useState<Phase>("hidden");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        observer.disconnect();
        setSeen(true);
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion || !seen || !appReady) return;

    const start = setTimeout(() => setPhase("revealing"), delayMs);
    const settle = setTimeout(
      () => setPhase("settled"),
      delayMs + DURATION_MS + SETTLE_MS,
    );

    return () => {
      clearTimeout(start);
      clearTimeout(settle);
    };
  }, [appReady, delayMs, reducedMotion, seen]);

  const shown = reducedMotion ? "settled" : phase;

  return (
    <div
      ref={ref}
      className={cn(
        shown === "hidden" && "translate-y-8 opacity-0",
        shown === "revealing" &&
          "translate-y-0 opacity-100 transition-[opacity,translate] duration-600 ease-out",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Reveal;
