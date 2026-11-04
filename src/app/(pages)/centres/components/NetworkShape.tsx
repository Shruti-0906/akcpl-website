"use client";

import { useState } from "react";

import { Eyebrow } from "@/components";

import { useCentreSearch } from "./CentreSearchProvider";
import IndiaMap from "./IndiaMap";
import StateLegend from "./StateLegend";

/**
 * Holds the state shared by the map and the legend, so hovering either one
 * highlights the other.
 */
const NetworkShape = () => {
  const [activeState, setActiveState] = useState<string | null>(null);
  const { jumpToSearch } = useCentreSearch();

  return (
    <div className="grid items-center gap-10 rounded-sm bg-secondary px-6 py-10 lg:grid-cols-[1.15fr_1fr] lg:px-12 lg:py-12">
      <div className="flex justify-center">
        <IndiaMap activeState={activeState} onHover={setActiveState} />
      </div>

      <div>
        <Eyebrow
          label="State-by-state · by centre count"
          className="mb-5 text-[13px] font-normal text-white"
        />

        <h3 className="mb-7 font-cormorant text-[24px] leading-tight font-semibold text-white lg:text-[28px]">
          Fourteen states.{" "}
          <em className="text-[#00b3ff] italic">Two density tiers.</em> One
          institutional footprint.
        </h3>

        <StateLegend
          activeState={activeState}
          onHover={setActiveState}
          onSelect={jumpToSearch}
        />
      </div>
    </div>
  );
};

export default NetworkShape;
