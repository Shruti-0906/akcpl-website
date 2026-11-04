import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import RolesGrid from "../components/RolesGrid";

const RolesSection = () => (
  <section
    id="roles"
    className={cn(
      "relative scroll-mt-33 overflow-hidden bg-secondary py-20 lg:py-24",
      GUTTER,
    )}
  >
    <div className="relative mx-auto mb-14 max-w-4xl text-center">
      <Eyebrow
        label="Open roles right now"
        className="mb-5 inline-flex text-[14px] font-normal text-white"
      />

      <h2 className="mb-5 font-cormorant text-[clamp(30px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-white">
        We&apos;re <em className="text-[#00b3ff] italic">hiring</em> across
        India.
      </h2>

      <p className="font-roboto text-[16px] leading-[1.7] font-light text-[rgba(251,248,243,0.78)]">
        A snapshot of current openings. New roles open every week &mdash; if you
        don&apos;t see your exact fit below, send your CV anyway.
      </p>
    </div>

    <RolesGrid />
  </section>
);

export default RolesSection;
