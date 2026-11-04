import { CountUp } from "@/components/ui";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { HeroStage } from "../components";

const STATS = [
  { value: "6,200,000+", label: "Dialysis Done" },
  { value: "68,000+", label: "Patients Treated" },
  { value: "250+", label: "Dialysis Centres" },
  { value: "151", label: "Cities" },
  { value: "14", label: "States" },
] as const;

const HIGHLIGHTS = [
  "IIT Bombay Collaboration",
  "Nephrology EHR Axis",
  "Transplant Support",
  "Vascular Access Innovation",
  "Indian Renal Data System",
] as const;

const MARQUEE_HIGHLIGHTS = [...HIGHLIGHTS, ...HIGHLIGHTS, ...HIGHLIGHTS];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex flex-col bg-depth lg:min-h-[calc(100svh-94px)]"
    >
      {/* Client-side: the copy is keyed to the active slide. Kept out of this
          section so the stats and marquee below stay server-rendered. */}
      <HeroStage />

      <div className={cn("border-t border-white/10 bg-black/20", GUTTER)}>
        <div className="grid grid-cols-2 gap-y-8 py-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0 lg:divide-x lg:divide-white/15">
          {STATS.map((stat) => (
            <div key={stat.label} className="lg:px-6 lg:first:pl-0">
              <p className="font-roboto text-3xl font-semibold text-primary-light lg:text-[40px]">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-1 font-roboto text-[0.7rem] tracking-wider text-white/80 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/40">
        <div className="group flex overflow-x-clip mask-[linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] py-5 select-none">
          {[0, 1].map((track, index) => (
            <ul
              key={index}
              aria-hidden={track === 1}
              className="flex min-w-full shrink-0 animate-marquee items-center gap-x-20 pr-20 group-hover:[animation-play-state:paused]"
            >
              {MARQUEE_HIGHLIGHTS.map((highlight, index) => (
                <li
                  key={index}
                  className="font-roboto text-sm whitespace-nowrap text-white/45"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
