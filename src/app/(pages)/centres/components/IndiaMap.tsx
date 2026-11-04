"use client";

import indiaMap from "@svg-maps/india";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib";

import { CENTRES_BY_STATE } from "../data";

/** Radius of the densest state's bubble, in viewBox units. */
const MAX_RADIUS = 21;

const MIN_RADIUS = 3.5;

const TALLIES = new Map(CENTRES_BY_STATE.map((entry) => [entry.state, entry]));

const BUSIEST = CENTRES_BY_STATE[0]?.count ?? 1;

/** Area-proportional, so a state with 4x the centres reads as 4x the blob. */
const radiusFor = (count: number) =>
  Math.max(MIN_RADIUS, MAX_RADIUS * Math.sqrt(count / BUSIEST));

/**
 * A bounding-box centre is only a rough centroid, so for states with an
 * irregular outline the label can drift off the body of the shape. These
 * offsets, in viewBox units, pull those few back over their own territory.
 */
const LABEL_OFFSETS: Record<string, { x?: number; y?: number }> = {
  Maharashtra: { x: -18 },
  Haryana: { x: 8 },
  "Madhya Pradesh": { y: 12 },
};

type Bubble = { state: string; x: number; y: number; r: number; tier: string };

type IndiaMapProps = {
  activeState: string | null;
  onHover: (state: string | null) => void;
};

const IndiaMap = ({ activeState, onHover }: IndiaMapProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  /**
   * The map package ships outlines but no centroids, so each bubble is placed
   * at the measured centre of its state's rendered path.
   */
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const placed = CENTRES_BY_STATE.flatMap((entry) => {
      const path = svg.querySelector<SVGPathElement>(
        `[data-state="${entry.state}"]`,
      );
      if (!path) return [];

      const box = path.getBBox();
      const offset = LABEL_OFFSETS[entry.state] ?? {};

      return [
        {
          state: entry.state,
          x: box.x + box.width / 2 + (offset.x ?? 0),
          y: box.y + box.height / 2 + (offset.y ?? 0),
          r: radiusFor(entry.count),
          tier: entry.tier,
        },
      ];
    });

    setBubbles(placed);
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox={indiaMap.viewBox}
      role="img"
      aria-label="Map of India showing Apex Kidney Care centres by state"
      className="h-auto w-full max-w-130"
    >
      {indiaMap.locations.map((location) => {
        const name = location.name ?? "";
        const tally = TALLIES.get(name);
        const isActive = activeState === name;

        return (
          <path
            key={location.id}
            d={location.path}
            data-state={name}
            onMouseEnter={() => tally && onHover(name)}
            onMouseLeave={() => tally && onHover(null)}
            className={cn(
              "transition-[fill] duration-200",
              tally ? "cursor-pointer" : "pointer-events-none",
            )}
            fill={isActive ? "#1d76ad" : tally ? "#12507a" : "#0d3c5c"}
            stroke="#3d8cc0"
            strokeWidth={0.7}
          />
        );
      })}

      {bubbles.map((bubble) => {
        const isActive = activeState === bubble.state;

        return (
          <g key={bubble.state} className="pointer-events-none">
            {/* The tier bubble is gone, so the label sits on the point itself
                rather than below where the circle used to be. */}
            <text
              x={bubble.x}
              y={bubble.y + 3}
              textAnchor="middle"
              className="font-roboto"
              fontSize={8}
              fill={isActive ? "#ffffff" : "rgba(255,255,255,0.7)"}
            >
              {bubble.state}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default IndiaMap;
