import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import NetworkShape from "../components/NetworkShape";
import { CENTRES_BY_STATE } from "../data";

const countFor = (state: string) =>
  CENTRES_BY_STATE.find((entry) => entry.state === state)?.count ?? 0;

const ShapeSection = () => (
  <section
    id="shape"
    className={cn("relative bg-white pt-20 pb-12 lg:pt-24 lg:pb-14", GUTTER)}
  >
    {/* `inline-flex` lets the label shrink to its text so `text-center` can
        centre it, rather than spanning the row. */}
    <div className="text-center">
      <Eyebrow
        label="The shape of the network"
        className="mb-5 inline-flex text-[14px] font-normal text-secondary lg:text-[17px]"
      />

      <h2 className="mb-6 font-cormorant text-[clamp(28px,3.4vw,46px)] leading-[1.15] font-semibold text-black">
        A dialysis network{" "}
        <em className="text-primary-subtle italic">shaped less like a chain</em>{" "}
        and{" "}
        <em className="text-primary-subtle italic">
          more like a public utility.
        </em>
      </h2>
    </div>

    <p className="mb-12 max-w-[1500px] font-roboto text-[15px] leading-[1.7] font-light text-[#393f42] lg:text-[16.5px]">
      Where private hospital networks tend to concentrate in metro corridors,
      AKC&rsquo;s footprint looks deliberately different. Two of the three
      largest state networks &mdash; Madhya Pradesh (
      {countFor("Madhya Pradesh")} centres) and Telangana (
      {countFor("Telangana")} centres) &mdash; are predominantly
      state-government partnership centres in district-level towns, often as the
      only structured dialysis provider for hundreds of kilometres. The
      metropolitan centres in Mumbai, Thane, and Delhi sit alongside that public
      footprint as part of the same institution.
    </p>

    <NetworkShape />
  </section>
);

export default ShapeSection;
