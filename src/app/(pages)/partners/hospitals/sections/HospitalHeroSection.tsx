import Image from "next/image";

import { Eyebrow } from "@/components";
import { cn } from "@/lib";

import { HOSPITAL_GUTTER, LABEL_LIGHT } from "../constants";

const HospitalHeroSection = () => {
  return (
    <section
      id="hospital-hero"
      className={cn(
        "relative flex min-h-[80vh] items-center overflow-hidden",
        HOSPITAL_GUTTER,
      )}
    >
      {/* The banner with a flat black scrim over it. The photo is a night shot
          with no quiet area, so white type needs something solid behind it. */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Image
          src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Banner/Hospital+Banner.jpg"
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
          label="For Hospitals · Institutional Partnership"
          className={LABEL_LIGHT}
        />

        <h1 className="mb-7 font-cormorant text-[clamp(48px,6vw,62px)] leading-[1.05] font-light tracking-[-0.01em] text-white">
          Your hospital. Our dialysis.
          <br />
          <em className="text-[#00b3ff] italic">One institution</em> to your
          patient.
        </h1>

        <p className="mb-12 max-w-[90%] font-roboto text-[17px] leading-[1.7] font-light text-white">
          Bring world-class dialysis inside your hospital &mdash; without the
          capital, without the operations, and without the clinical risk of
          building it from scratch. The patient relationship stays with you. The
          institutional apparatus comes from AKC.
        </p>
      </div>
    </section>
  );
};

export default HospitalHeroSection;
