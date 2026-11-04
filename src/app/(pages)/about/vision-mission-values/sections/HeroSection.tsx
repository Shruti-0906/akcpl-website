import { Eyebrow, KidneyIcon } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const HeroSection = () => {
  return (
    <section id="vmv-hero" className="flex flex-col bg-depth lg:min-h-[70svh]">
      <div
        className={cn(
          "relative flex flex-1 items-center overflow-hidden py-20 lg:py-24",
          GUTTER,
        )}
      >
        <KidneyIcon />

        <div className="relative flex max-w-4xl flex-col gap-5 sm:gap-6">
          <Eyebrow
            label="About AKC · Vision · Mission · Values"
            className="text-white/70"
          />

          <h1 className="font-cormorant text-4xl leading-tight font-semibold text-white sm:text-5xl lg:text-6xl">
            What we are <span className="text-primary italic">here to do.</span>
          </h1>

          <p className="font-roboto text-sm leading-relaxed text-white sm:text-base">
            Every institution should be able to answer three questions clearly:
            where it is trying to go, what it is trying to do along the way, and
            what it will not compromise on. These are AKC&rsquo;s answers -- the
            vision we are working toward, the mission that guides daily work
            across our network, and the values that shape every interaction.
            Stated plainly, and binding on everything we do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
