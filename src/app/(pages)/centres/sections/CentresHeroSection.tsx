import { CountUp, Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const STATS = [
  { value: "250+", label: "active dialysis\ncentres · operational" },
  { value: "151", label: "towns & cities\ncovered" },
  { value: "14", label: "states across\nIndia" },
  { value: "5", label: "centre formats\nunder one network" },
  {
    value: (
      <em className="font-cormorant text-[1.15em] font-normal italic">PPP</em>
    ),
    label: "66% of network is\npublic partnership",
  },
] as const;

const CentresHeroSection = () => (
  <>
    <section
      id="home"
      className={cn(
        "relative flex min-h-140 items-center overflow-hidden bg-hero-depth py-24 lg:py-28",
        GUTTER,
      )}
    >
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-hero-grid" />

      <div className="relative z-2 w-full">
        <Eyebrow
          label="The AKC network · India : 250+ active centres"
          className="mb-5 text-[14px] font-normal text-white"
        />

        <h1 className="mb-7 font-cormorant text-[clamp(32px,5.5vw,60px)] leading-[1.15] font-light tracking-[-0.01em] text-white">
          A dialysis network{" "}
          <em className="text-[#00b3ff] italic">built city by city,</em> state
          by state, <em className="text-[#00b3ff] italic">across India.</em>
        </h1>

        <p className="max-w-[85%] font-roboto text-[15px] leading-[1.7] font-light text-white sm:text-[17px]">
          The AKC network now spans 250+ active dialysis centres in 14 states
          across 151 towns and cities &mdash; from metropolitan hospital
          partnerships in Mumbai and Delhi to district-level public health
          centres in Madhya Pradesh and Telangana, to new markets opening in
          Goa, Gujarat, Rajasthan, Punjab, and beyond. This page is the
          institutional view of that footprint.
        </p>
      </div>
    </section>

    {/* The navy base supplies what the half-opaque bar composites over. */}
    <div className="bg-secondary">
      <div
        className={cn(
          "relative z-2 flex flex-wrap items-center bg-[rgba(5,14,31,0.5)] py-7 backdrop-blur-[10px]",
          GUTTER,
        )}
      >
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex w-1/2 flex-col border-r border-[rgb(6,35,66)] px-4 py-3 last:border-r-0 max-sm:even:border-r-0 sm:w-1/5 sm:px-8 sm:py-0 sm:first:pl-0"
          >
            <p className="mb-1.5 font-roboto text-[32px] leading-none font-bold text-primary-light sm:text-[40px]">
              <CountUp value={stat.value} />
            </p>
            <p className="font-roboto text-[11px] tracking-[0.08em] whitespace-pre-line text-[#8A9BB5] uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default CentresHeroSection;
