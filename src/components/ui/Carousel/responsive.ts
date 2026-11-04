import type { ResponsiveValue } from "./types";

export const BREAKPOINTS = { sm: 640, md: 768, lg: 1024, xl: 1280 } as const;

type BreakpointKey = keyof typeof BREAKPOINTS;

const KEYS: readonly BreakpointKey[] = ["sm", "md", "lg", "xl"];

type ResponsiveNumber = ResponsiveValue<number>;

export const baseValue = (
  value: ResponsiveNumber | undefined,
  fallback: number,
): number => {
  if (value === undefined) return fallback;
  if (typeof value === "number") return value;
  return value.base ?? fallback;
};

export const maxValue = (
  value: ResponsiveNumber | undefined,
  fallback: number,
): number => {
  if (value === undefined) return fallback;
  if (typeof value === "number") return value;
  const numbers = [value.base, value.sm, value.md, value.lg, value.xl].filter(
    (entry): entry is number => typeof entry === "number",
  );
  return numbers.length > 0 ? Math.max(...numbers) : fallback;
};

const definedAt = (
  value: ResponsiveNumber | undefined,
  key: BreakpointKey,
): number | undefined =>
  value === undefined || typeof value === "number" ? undefined : value[key];

const resolveAt = (
  value: ResponsiveNumber | undefined,
  key: BreakpointKey,
  fallback: number,
): number => {
  if (value === undefined || typeof value === "number") return fallback;
  const downTo = KEYS.slice(0, KEYS.indexOf(key) + 1).reverse();
  for (const candidate of downTo) {
    const at = value[candidate];
    if (typeof at === "number") return at;
  }
  return fallback;
};

export interface BreakpointOptions {
  slidesPerView?: number;
  spaceBetween?: number;
}

export const buildBreakpoints = (
  slidesPerView: ResponsiveNumber | undefined,
  gap: ResponsiveNumber | undefined,
): Record<number, BreakpointOptions> | undefined => {
  const used = KEYS.filter(
    (key) =>
      definedAt(slidesPerView, key) !== undefined ||
      definedAt(gap, key) !== undefined,
  );
  if (used.length === 0) return undefined;

  const out: Record<number, BreakpointOptions> = {};
  for (const key of used) {
    out[BREAKPOINTS[key]] = {
      slidesPerView: resolveAt(slidesPerView, key, baseValue(slidesPerView, 1)),
      spaceBetween: resolveAt(gap, key, baseValue(gap, 0)),
    };
  }
  return out;
};

export const buildSizes = (value: ResponsiveNumber | undefined): string => {
  if (value === undefined) return "100vw";
  if (typeof value === "number") return `${Math.round(100 / value)}vw`;
  const parts: string[] = [];
  for (const key of [...KEYS].reverse()) {
    const at = value[key];
    if (typeof at === "number") {
      parts.push(
        `(min-width: ${BREAKPOINTS[key]}px) ${Math.round(100 / at)}vw`,
      );
    }
  }
  parts.push(`${Math.round(100 / (value.base ?? 1))}vw`);
  return parts.join(", ");
};
