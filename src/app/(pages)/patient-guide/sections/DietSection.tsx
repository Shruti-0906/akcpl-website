import { Button, Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { SOLID_BUTTON } from "../components/buttons";

const DietSection = () => (
  <section
    id="diet"
    className={cn(
      "relative mt-10 flex min-h-[80svh] items-center overflow-hidden bg-hero-depth",
      GUTTER,
    )}
  >
    <div aria-hidden="true" className="absolute inset-0 bg-hero-grid" />

    {/* Inline `padding-top:0; max-width:100%` overrides both `.hero-content` defaults. */}
    <div className="relative z-2 w-full">
      <Eyebrow
        label="Patient Education · Treatment Options"
        className="mb-5 text-white"
      />

      <h1 className="mb-7 font-cormorant text-5xl leading-[1.05] font-light tracking-[-0.01em] text-white lg:text-[62px]">
        “Eat Healthy, Eat to Protect your Kidneys,{" "}
        <em className="text-primary italic">Eat to Enjoy Life.”</em>
      </h1>

      <p className="mb-12 max-w-[90%] font-roboto text-[17px] leading-[1.7] font-light text-white">
        A kidney disease diagnosis does not mean a lifetime of bland, joyless
        eating. At AKC, our renal dietitians craft personalised menus that are
        medically precise, culturally familiar, and &mdash; above all &mdash;
        genuinely delicious. Your kidneys and your taste buds can both be happy.
      </p>

      <div className="flex flex-wrap gap-4">
        <Button href="/services/diet-guidance" className={SOLID_BUTTON}>
          Click here for more details <span aria-hidden="true">→</span>
        </Button>
      </div>
    </div>
  </section>
);

export default DietSection;
