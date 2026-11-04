import Image from "next/image";

import { Eyebrow } from "@/components";
import { cn } from "@/lib";

const GOV_GUTTER = "px-6 sm:px-10 lg:px-15";

const LABEL =
  "mb-5 text-sm leading-[normal] text-black [&>span]:w-6 [&>span]:opacity-100";

const GovernmentHeroSection = () => (
  <section
    id="government-hero"
    className={cn(
      "relative flex min-h-[80vh] items-center overflow-hidden",
      GOV_GUTTER,
    )}
  >
    {/* Banner under a flat black scrim, as on the other partner heroes. This
        photo is a darker one at 114/255, so it takes the lighter scrim. */}
    <div aria-hidden="true" className="absolute inset-0 z-0">
      <Image
        src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Banner/Government+Banner.jpg"
        alt=""
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />
    </div>

    <div className="relative z-[2] max-w-[920px] pt-[142px]">
      <Eyebrow
        label="For Government & Policymakers · Public Health Partnership"
        className={cn(LABEL, "text-white")}
      />
      <h1 className="mb-7 font-cormorant text-[clamp(48px,6vw,62px)] leading-[1.05] font-light tracking-[-0.01em] text-white">
        When India writes its renal care policy,
        <br />
        <em className="text-[#00b3ff] italic">the data should be Indian.</em>
      </h1>
      <p className="mb-12 max-w-[90%] font-roboto text-[17px] leading-[1.7] font-light text-white">
        AKC has spent eighteen years building the country&apos;s first
        comprehensive renal data system, training a generation of nephrologists,
        and operating dialysis at every scale — from PMJAY to private. We bring
        this infrastructure to the table as a civic asset, not a commercial one.
      </p>
    </div>
  </section>
);

export default GovernmentHeroSection;
