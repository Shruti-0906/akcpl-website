"use client";

import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib";

import { CENTRES_BY_STATE } from "../data";

/** Bubble and dot colours, densest tier first. */
export const TIER_COLOUR = {
  high: "#d9a441",
  mid: "#2aa0a6",
  low: "#8a9bb5",
} as const;

type StateLegendProps = {
  /** State currently hovered on the map or in this list. */
  activeState: string | null;
  onHover: (state: string | null) => void;
  /** Runs the centre search for the state that was clicked. */
  onSelect: (state: string) => void;
};

const StateLegend = ({ activeState, onHover, onSelect }: StateLegendProps) => (
  <ul className="flex flex-col gap-1">
    {CENTRES_BY_STATE.map((entry) => {
      const isActive = activeState === entry.state;

      return (
        <li key={entry.state}>
          <button
            type="button"
            onClick={() => onSelect(entry.state)}
            onMouseEnter={() => onHover(entry.state)}
            onMouseLeave={() => onHover(null)}
            onFocus={() => onHover(entry.state)}
            onBlur={() => onHover(null)}
            aria-label={`Search the ${entry.count} centres in ${entry.state}`}
            className={cn(
              "flex w-full cursor-pointer items-center gap-3.5 rounded-sm px-2.5 py-1.5 text-left transition-colors",
              "focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
              isActive ? "bg-white/10" : "hover:bg-white/5",
            )}
          >
            <span className="font-roboto text-[15px] text-white">
              {entry.state}
            </span>

            <ArrowUpRight
              aria-hidden="true"
              className={cn(
                "ml-auto size-4 shrink-0 transition-opacity",
                isActive ? "opacity-60" : "opacity-0",
              )}
            />
          </button>
        </li>
      );
    })}
  </ul>
);

export default StateLegend;
