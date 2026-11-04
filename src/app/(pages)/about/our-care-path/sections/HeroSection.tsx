import { Activity, CircleCheckBig, Heart, Shield, Smile, Users } from "lucide-react";

import { Eyebrow, KidneyIcon } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const PRINCIPLES = [
  { label: "Scientific Protocols", Icon: CircleCheckBig },
  { label: "Uncompromising Safety", Icon: Shield },
  { label: "Empathy by Default", Icon: Heart },
  { label: "Positive Daily Tone", Icon: Smile },
  { label: "Active Encouragement", Icon: Activity },
  { label: "Continuous Support", Icon: Users },
] as const;

const HeroSection = () => {
  return (
    <section id="care-path-hero" className="flex flex-col bg-depth lg:min-h-[70svh]">
      <div
        className={cn(
          "relative flex flex-1 items-center overflow-hidden py-20 lg:py-24",
          GUTTER,
        )}
      >
        <KidneyIcon />

        <div className="relative flex max-w-4xl flex-col gap-5 sm:gap-6">
          <Eyebrow
            label="How AKC cares for dialysis patients · Public & private centres · All India"
            className="text-white/70"
          />

          <h1 className="font-cormorant text-4xl leading-tight font-semibold text-white sm:text-5xl lg:text-6xl">
            Dialysis is the treatment.
            <span className="block text-primary italic">
              The care is everything else.
            </span>
          </h1>

          <p className="font-roboto text-sm leading-relaxed text-white sm:text-base">
            Across 220+ centres in public, charitable, hospital, and private
            settings, AKC cares for chronic dialysis patients the same way - with
            scientific protocols, uncompromising safety, and the kind of human
            warmth that a person who comes here three times a week, for years,
            actually needs. This page is about how that care works in practice.
          </p>
        </div>
      </div>

      <div className={cn("border-t border-white/10 bg-black/20", GUTTER)}>
        <div className="flex flex-wrap justify-center gap-y-8 py-8 lg:flex-nowrap lg:divide-x lg:divide-white/15">
          {PRINCIPLES.map(({ label, Icon }) => (
            <div
              key={label}
              className="basis-1/2 text-center sm:basis-1/3 lg:basis-1/6 lg:px-6 lg:text-left lg:first:pl-0 flex flex-col items-center"
            >
              <Icon
                aria-hidden="true"
                className="mx-auto size-6 text-primary-light lg:mx-0"
              />
              <p className="mt-2 font-roboto text-[0.7rem] sm:text-sm tracking-wider text-white/80 uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
