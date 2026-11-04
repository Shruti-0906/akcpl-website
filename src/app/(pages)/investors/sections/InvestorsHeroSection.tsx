import Image from "next/image";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { LABEL_LIGHT, SECTION_BASE } from "../constants";

const InvestorsHeroSection = () => (
  <section
    id="home"
    className={cn(
      SECTION_BASE,
      "flex min-h-[80vh] items-center overflow-hidden",
      GUTTER,
    )}
  >
    {/* Banner under a flat black scrim, as on the partner heroes. This photo
        is a dark one at 97/255, so it takes the lighter scrim. */}
    <div aria-hidden="true" className="absolute inset-0 z-0">
      <Image
        src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Banner/Investor+Banner.jpg"
        alt=""
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />
    </div>

    <div className="relative z-[2] w-full pt-[142px]">
      <Eyebrow
        label="For Investors · Strategic Capital · Long-Horizon Partnership"
        className={LABEL_LIGHT}
      />

      <h1 className="mb-7 font-cormorant text-[clamp(48px,6vw,62px)] leading-[1.05] font-light tracking-[-0.01em] text-white">
        A category-leading healthcare institution.
        <br />
        <em className="text-[#00b3ff] italic">Built on mission.</em>
      </h1>

      <p className="mb-12 max-w-[90%] font-roboto text-[17px] leading-[1.7] font-light text-white">
        AKC is India&apos;s largest single-specialty nephrology network &mdash;
        250+ centres, 14 states, 18 years of clinical institution-building. The
        market is booming. The infrastructure to serve it is fragmented.{" "}
        <em className="italic">
          The opportunity, for the right kind of capital partner, is to back the
          consolidator that is also the standard-setter.
        </em>
      </p>
    </div>
  </section>
);

export default InvestorsHeroSection;
