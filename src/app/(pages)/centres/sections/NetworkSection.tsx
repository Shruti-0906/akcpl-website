import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import CentreSearch from "../components/CentreSearch";

const NetworkSection = () => (
  <section
    id="network"
    className={cn(
      "relative scroll-mt-33 bg-[#d9edf8] py-20 lg:py-24",
      GUTTER,
    )}
  >
    {/* Carries the page's h1 now that the hero band is gone. The accents take
        the subtle teal rather than the hero's brighter cyan, which is reserved
        for dark grounds. */}
    <div className="mb-10 text-center">
      <Eyebrow
        label="The AKC network · India : 250+ active centres"
        className="mb-5 inline-flex text-[14px] font-normal text-secondary"
      />

      <h1 className="mx-auto mb-7 max-w-4xl font-cormorant text-[clamp(32px,5.5vw,60px)] leading-[1.15] font-light tracking-[-0.01em] text-black">
        A dialysis network{" "}
        <em className="text-primary-subtle italic">built city by city,</em>{" "}
        state by state,{" "}
        <em className="text-primary-subtle italic">across India.</em>
      </h1>

      <Eyebrow
        label="// Apex Dialysis Networks"
        className="mb-0 inline-flex text-[14px] font-normal text-secondary lg:text-[17px]"
      />
    </div>

    <CentreSearch />
  </section>
);

export default NetworkSection;
