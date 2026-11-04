import { Button, Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { SOLID_BUTTON } from "../components/buttons";

const VascularAccessSection = () => (
  <section
    id="vascular"
    className={cn(
      "relative mt-10 flex min-h-[75svh] items-center overflow-hidden bg-hero-depth",
      GUTTER,
    )}
  >
    <div aria-hidden="true" className="absolute inset-0 bg-hero-grid" />

    <div className="relative z-2 w-full max-w-[90%]">
      <Eyebrow
        label="For Patients & Caregivers : Reading time · 12 minutes"
        className="mb-5 text-white"
      />

      <h1 className="mb-7 font-cormorant text-5xl leading-[1.05] font-light tracking-[-0.01em] text-white lg:text-[62px]">
        Your vascular access
        <span className="block">
          is your <em className="text-primary italic">lifeline.</em>
        </span>
      </h1>

      <p className="mb-12 font-roboto text-[17px] leading-[1.7] font-light text-white">
        Every hemodialysis session depends on one thing:{" "}
        <strong className="font-bold">
          a working access where the machine can connect to your bloodstream.
        </strong>{" "}
        Without it, dialysis isn&rsquo;t possible. With the right one, well
        planned and well cared for, dialysis becomes part of life that fades
        into the background.{" "}
        <em className="italic">
          This page explains every type of access &mdash; how it&rsquo;s made,
          when it&rsquo;s made, what can go wrong, and what you can do daily to
          protect it.
        </em>
      </p>

      <div>
        <Button href="/services/vascular-access" className={SOLID_BUTTON}>
          Click here for more details <span aria-hidden="true">→</span>
        </Button>
      </div>
    </div>
  </section>
);

export default VascularAccessSection;
