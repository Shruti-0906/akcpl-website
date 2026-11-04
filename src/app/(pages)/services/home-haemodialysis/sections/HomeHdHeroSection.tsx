import { ArrowRight } from "lucide-react";

import { Button, CountUp, KidneyIcon } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const STATS = [
  { value: "1,000+", label: "Cumulative Patients on Home HD" },
  { value: "81,849", label: "Home Dialysis Sessions Completed" },
  { value: "2012", label: "Programme Founded" },
  { value: "13+", label: "Years of Continuous Experience" },
] as const;

const HomeHdHeroSection = () => {
  return (
    <section id="home-hd-hero" className="flex flex-col bg-depth">
      <div
        className={cn(
          "relative flex flex-1 items-center overflow-hidden py-20 lg:py-24",
          GUTTER,
        )}
      >
        <KidneyIcon />

        <div className="relative flex max-w-3xl flex-col gap-5 sm:gap-6">
          <h1 className="font-cormorant text-4xl leading-tight font-semibold text-white sm:text-5xl lg:text-6xl">
            When dialysis{" "}
            <span className="text-primary italic">comes home,</span> life{" "}
            <span className="text-primary italic">opens up.</span>
          </h1>

          <p className="font-roboto text-sm text-white sm:text-base">
            For more than a decade, AKC has brought dialysis into the
            patient&apos;s own home - safely, professionally, and with the same
            clinical infrastructure that runs the centres. 1,000+ patients.
            81,000+ home sessions. Zero medico-legal cases. The AKC Home HD
            programme is India&apos;s longest-running structured home
            hemodialysis service, and the dataset behind it is the most
            comprehensive in the country.
          </p>

          <div className="flex flex-wrap gap-3 pt-1 sm:gap-4">
            <Button href="/contact">
              Enquire about Home HD
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button
              href="#outcomes"
              variant="outline"
              className="border-white/60 text-white hover:border-white hover:bg-white/10"
            >
              See the outcomes
            </Button>
          </div>
        </div>
      </div>

      <div className={cn("border-t border-white/10 bg-black/20", GUTTER)}>
        <div className="grid grid-cols-2 gap-y-8 py-8 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-white/15">
          {STATS.map((stat) => (
            <div key={stat.label} className="lg:px-6 lg:first:pl-0">
              <p className="font-roboto text-3xl font-semibold text-primary-light lg:text-[40px]">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-1 max-w-45 font-roboto text-[0.7rem] tracking-wider text-white/80 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHdHeroSection;
