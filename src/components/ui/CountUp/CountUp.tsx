"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

import { useAppReady, useReducedMotion } from "@/hooks";

import { formatValue, parseValue, type ParsedValue } from "./parse";

const DURATION_MS = 1200;

const ease = (progress: number): number => 1 - (1 - progress) ** 3;

interface CounterProps {
  text: string;
  parsed: ParsedValue;
  durationMs: number;
}

const Counter = ({ text, parsed, durationMs }: CounterProps) => {
  const reducedMotion = useReducedMotion();
  const appReady = useAppReady();
  const ref = useRef<HTMLSpanElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        observer.disconnect();
        node.textContent = formatValue(0, parsed);
        setSeen(true);
      },
      { threshold: 0.5 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [parsed, reducedMotion]);

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion || !seen || !appReady) return;

    let frame = 0;
    let startedAt = 0;

    const step = (now: number) => {
      if (!startedAt) startedAt = now;

      const progress = Math.min((now - startedAt) / durationMs, 1);
      if (progress < 1) {
        node.textContent = formatValue(parsed.target * ease(progress), parsed);
        frame = requestAnimationFrame(step);
        return;
      }

      node.textContent = text;
    };

    frame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frame);
      node.textContent = text;
    };
  }, [appReady, durationMs, parsed, reducedMotion, seen, text]);

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {text}
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
};

export interface CountUpProps {
  value: ReactNode;
  count?: boolean;
  durationMs?: number;
}

const CountUp = ({ value, count, durationMs = DURATION_MS }: CountUpProps) => {
  const parsed = useMemo(
    () =>
      typeof value === "string" && count !== false
        ? parseValue(value, count === true)
        : null,
    [count, value],
  );

  if (typeof value !== "string" || !parsed) return <>{value}</>;

  return <Counter text={value} parsed={parsed} durationMs={durationMs} />;
};

export default CountUp;
