import { Button, Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { OUTLINE_BUTTON, SOLID_BUTTON } from "../components";

const HeroSection = () => (
  <section
    id="home"
    className={cn(
      /**
       * The source hero is 93vh measured from the document top, because its
       * navbar and breadcrumb are `position: fixed` and sit over it. Ours are
       * sticky and so take up flow, which is why their combined 133px comes
       * back off the height here - and why the source's `margin-top: 40px`
       * is omitted: on the original it hides behind the fixed bars.
       */
      "relative flex min-h-[calc(93svh-133px)] flex-col overflow-hidden bg-hero-depth pb-20 lg:flex-row lg:items-center lg:pb-0",
      GUTTER,
    )}
  >
    <div aria-hidden="true" className="absolute inset-0 z-0 bg-hero-grid" />

    <div className="relative z-2 flex flex-col pt-25 lg:max-w-[58%]">
      <Eyebrow label="Hemodiafiltration · HDF" className="mb-5 text-white" />

      <h1 className="mb-7 font-cormorant text-[clamp(48px,6vw,62px)] leading-[1.05] font-light tracking-[-0.01em] text-white max-[768px]:text-[40px]">
        A superior machine,
        <span className="block">
          a <em className="text-[#00b3ff] italic">deeper</em> clean.
        </span>
      </h1>

      <p className="mb-12 font-roboto text-[17px] leading-[1.7] font-light text-white">
        Standard dialysis clears the small wastes. Hemodiafiltration goes
        further — flushing out the bigger, more harmful molecules that ordinary
        dialysis leaves behind. In the largest trial ever run, patients on
        high-dose HDF lived longer.
      </p>

      <div className="flex flex-wrap gap-4">
        <Button href="#diff" className={SOLID_BUTTON}>
          See how it works <span aria-hidden="true">→</span>
        </Button>
        <Button
          href="#evidence"
          variant="outline"
          className={cn(
            OUTLINE_BUTTON,
            "border-white text-white hover:border-white hover:bg-white/10",
          )}
        >
          The proof <span aria-hidden="true">↓</span>
        </Button>
      </div>
    </div>

    <div className="relative z-2 mt-20 rounded-[22px] border border-white/10 bg-white/[0.04] px-9.5 py-10 text-center backdrop-blur-[8px]">
      <p className="font-roboto text-7xl leading-[0.9] font-bold tracking-[-0.03em] text-white lg:text-[108px]">
        <span className="text-tertiary">77%</span>
      </p>
      <p className="mt-3.5 font-roboto text-base leading-[1.5] text-white">
        higher survival with high-dose HDF, compared with standard high-flux
        dialysis <b className="font-bold text-white">— the CONVINCE trial</b>
      </p>
      <p className="mt-5.5 font-roboto text-sm tracking-[1.5px] text-tertiary uppercase">
        NEJM 2023 · 1,360 patients · 8 countries
      </p>
    </div>
  </section>
);

export default HeroSection;
