import Image from "next/image";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { LABEL_DARK, SECTION_BASE } from "../constants";

const ThesisSection = () => (
  <section
    id="it"
    className={cn(SECTION_BASE, "overflow-hidden bg-white py-[110px]")}
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-noise opacity-[0.04] mix-blend-multiply"
    />

    <div
      className={cn(
        "relative z-[2] grid gap-5 lg:grid-cols-[1.5fr_1fr]",
        GUTTER,
      )}
    >
      <div>
        <Eyebrow label="The Investment Thesis" className={LABEL_DARK} />

        <p className="relative pt-12 pb-9 font-cormorant text-[30px] leading-[1.3] font-bold tracking-[-0.012em] text-black italic">
          <span
            aria-hidden="true"
            className="absolute -top-px left-0 h-[3px] w-15 bg-primary-subtle"
          />
          India&apos;s renal care category is among the country&apos;s largest,
          fastest-growing, and most fragmented healthcare segments. The{" "}
          <strong className="font-cormorant text-[#00b3ff]">
            institution capable of consolidating it at quality is the
            institution that will define the category.
          </strong>{" "}
          AKC has spent eighteen years building to be that institution &mdash;
          and is now selectively raising the capital to be the only one of its
          kind at national scale.
          <span className="mt-8 block font-roboto text-[11px] font-bold tracking-[0.22em] text-tertiary uppercase not-italic">
            AKC · Investor Overview · 2026
          </span>
        </p>
      </div>

      <div>
        <Image
          src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Investor-Thesis+Section.jpg"
          alt="Investment Thesis"
          width={623}
          height={493}
          quality={100}
          className="h-auto w-full"
        />
      </div>
    </div>
  </section>
);

export default ThesisSection;
