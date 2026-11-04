import Image from "next/image";

import { Button, Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const AsdtSection = () => (
  <section
    className={cn(
      "relative flex min-h-160 items-center overflow-hidden bg-depth",
      GUTTER,
    )}
  >
    <Image
      src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Careers+-+ASDT+Section.png"
      alt=""
      width={1063}
      height={684}
      aria-hidden="true"
      className="pointer-events-none absolute right-0 bottom-0 h-60 w-auto max-w-none opacity-[0.14] sm:h-80 lg:right-16 lg:h-105"
    />

    <div className="relative z-2 w-full py-16 lg:py-20">
      <Eyebrow
        label="Founded by Apex Kidney Care · Since 2011 : Apex Academia"
        className="mb-5 text-[14px] font-normal text-white"
      />

      <h2 className="mb-6 font-cormorant text-[clamp(28px,4vw,46px)] leading-[1.12] font-light tracking-[-0.01em] text-white">
        <em className="text-[#00b3ff] italic">ASDT :</em> A career in dialysis.
        <br />
        Built for the long road.
      </h2>

      <p className="mb-9 max-w-[1700px] font-roboto text-[15px] leading-[1.7] font-light text-white sm:text-[17px]">
        AKC&rsquo;s institute for the next generation of dialysis professionals.
        Affiliated with the Tata Institute of Social Sciences (TISS) and the
        Maharashtra State Board of Skill, Vocational Education and Training
        (MSBSVET) &mdash; with structured curricula, extensive hands-on training
        across AKC&rsquo;s 250 centres, and a{" "}
        <em className="italic">
          direct pathway into one of India&rsquo;s fastest-growing healthcare
          careers.
        </em>
      </p>

      <Button
        href="/apex-school-of-dialysis-technology"
        className="rounded-sm bg-primary-subtle px-8 py-4 font-bold tracking-[0.04em] hover:bg-primary-light"
      >
        Click here for more details <span aria-hidden="true">&rarr;</span>
      </Button>
    </div>
  </section>
);

export default AsdtSection;
