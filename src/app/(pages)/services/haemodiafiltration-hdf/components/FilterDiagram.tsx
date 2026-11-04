"use client";

import { useEffect, useRef } from "react";

import { useReducedMotion } from "@/hooks";
import { cn } from "@/lib";

/** Molecules seeded per panel, matching the source page's counts. */
const SMALL_COUNT = 7;
const MID_CROSSING = 3;
const MID_TRAPPED = 5;

type Molecule = { size: number; left: number; top: number; crosses: boolean };

/**
 * Small wastes always cross the membrane. Middle molecules only cross under
 * convection - on standard HD they drift partway and fall back.
 */
const seed = (width: number, midsCross: boolean): Molecule[] => {
  const molecules: Molecule[] = [];

  for (let i = 0; i < SMALL_COUNT; i++) {
    molecules.push({
      size: 9,
      left: 8 + Math.random() * (width * 0.36),
      top: 15 + Math.random() * 100,
      crosses: true,
    });
  }

  const mids = midsCross ? MID_CROSSING : MID_TRAPPED;
  for (let i = 0; i < mids; i++) {
    molecules.push({
      size: 17,
      left: 8 + Math.random() * (width * 0.36),
      top: 20 + Math.random() * 85,
      crosses: midsCross,
    });
  }

  return molecules;
};

/** The membrane bar is 3px wide, centred on the panel's midline. */
const MEMBRANE_HALF_WIDTH = 1.5;
/** Enough room that a molecule meets the barrier rather than overlapping it. */
const MEMBRANE_GAP = 2;

const keyframesFor = (molecule: Molecule, width: number): Keyframe[] => {
  if (molecule.crosses) {
    return [
      { transform: "translateX(0)", opacity: 1 },
      { transform: `translateX(${width * 0.62}px)`, opacity: 1 },
      { transform: `translateX(${width * 0.7}px)`, opacity: 0 },
    ];
  }

  /**
   * Diffusion alone never carries these across, so they drift as far as the
   * membrane and fall back. The reach is measured from each molecule's own
   * seeded position - a shared distance sends the ones seeded furthest right
   * straight through the barrier.
   */
  const barrier = width / 2 - MEMBRANE_HALF_WIDTH - MEMBRANE_GAP;
  const reach = Math.max(0, barrier - (molecule.left + molecule.size));

  return [
    { transform: "translateX(0)", opacity: 1 },
    { transform: `translateX(${reach}px)`, opacity: 1 },
    { transform: "translateX(0)", opacity: 1 },
  ];
};

export interface FilterDiagramProps {
  /** Adds the convective sweep and lets middle molecules through. */
  convective?: boolean;
}

const FilterDiagram = ({ convective = false }: FilterDiagramProps) => {
  const flowRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const flow = flowRef.current;
    if (!flow || reducedMotion) return;

    let animations: Animation[] = [];
    let lastWidth = 0;

    const clear = () => {
      animations.forEach((animation) => animation.cancel());
      animations = [];
      flow.replaceChildren();
    };

    /**
     * Positions and travel distances are all proportional to the panel width,
     * so they have to be rebuilt whenever the card resizes - otherwise the
     * molecules overshoot the panel or stop short of the membrane.
     */
    const build = (width: number) => {
      clear();

      seed(width, convective).forEach((molecule) => {
        const dot = document.createElement("div");
        dot.style.position = "absolute";
        dot.style.borderRadius = "50%";
        dot.style.width = `${molecule.size}px`;
        dot.style.height = `${molecule.size}px`;
        dot.style.left = `${molecule.left}px`;
        dot.style.top = `${molecule.top}px`;
        /* Small wastes read black, the middle molecules gold. Keep in step
           with the legend swatches in MechanismCard. */
        dot.style.background = molecule.size === 9 ? "#000000" : "#c9922a";
        flow.appendChild(dot);

        animations.push(
          dot.animate(keyframesFor(molecule, width), {
            duration: 2600 + Math.random() * 1800,
            delay: Math.random() * 1800,
            iterations: Infinity,
            easing: "ease-in-out",
          }),
        );
      });
    };

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      const width = Math.round(entry.contentRect.width);
      if (width === 0 || width === lastWidth) return;
      lastWidth = width;
      build(width);
    });

    /* Fires once on observe with the initial size, which seeds the panel. */
    observer.observe(flow);

    return () => {
      observer.disconnect();
      clear();
    };
  }, [convective, reducedMotion]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        /**
         * The source sets `height:130px` on `.flow` inline but also carries
         * `padding:130px 0` from the shared stylesheet, which its inline block
         * never overrides. Under `box-sizing: border-box` the padding wins out,
         * so the panel actually renders ~262px tall, not 130px.
         */
        "relative mb-5.5 h-32.5 overflow-hidden rounded-[14px] border border-dashed py-32.5",
        convective
          ? "border-white/20 bg-white/5"
          : "border-[#b2e981] bg-white/[0.08]",
      )}
    >
      {convective && (
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#8db9ef] to-transparent opacity-0" />
      )}

      {/* The semi-permeable membrane the wastes have to get across. */}
      <div
        className={cn(
          "absolute top-2 bottom-2 left-1/2 z-1 w-[3px] -translate-x-1/2 rounded-[2px]",
          convective
            ? "bg-[repeating-linear-gradient(to_bottom,#2780a7_0_6px,transparent_6px_11px)]"
            : "bg-[repeating-linear-gradient(to_bottom,#72a744_0_6px,transparent_6px_11px)]",
        )}
      />

      <div ref={flowRef} className="absolute inset-0" />
    </div>
  );
};

export default FilterDiagram;
