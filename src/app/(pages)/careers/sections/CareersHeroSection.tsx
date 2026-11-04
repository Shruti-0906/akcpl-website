import { Button, CountUp, Eyebrow, KidneyIcon } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const STATS = [
  { value: "1,850+", label: "coworkers" },
  { value: "250+", label: "centres in\n14 states" },
  { value: "6.2M+", label: "dialysis sessions\ndelivered to date" },
  { value: "18", label: "years of building\nIndian nephrology" },
  {
    value: (
      <em className="font-cormorant text-[1.15em] font-normal italic">One</em>
    ),
    label: "institution, many\ncareer paths",
  },
] as const;

const CareersHeroSection = () => (
  <>
    <section
      id="home"
      className={cn(
        "relative flex min-h-[calc(80vh-77px)] items-center overflow-hidden bg-hero-depth",
        GUTTER,
      )}
    >
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-hero-grid" />

      <KidneyIcon />

      <div className="relative z-2 w-full py-12 lg:py-0">
        <Eyebrow
          label="Careers at AKC : We're hiring across India"
          className="mb-5 text-[14px] font-normal text-white"
        />

        <h1 className="mb-7 font-cormorant text-[clamp(32px,6vw,62px)] leading-[1.05] font-light tracking-[-0.01em] text-white">
          Work that means <em className="text-[#00b3ff] italic">something.</em>{" "}
          Every single day.
        </h1>

        <p className="mb-9 font-roboto text-[15px] leading-[1.7] font-light text-white sm:text-[17px]">
          Every dialysis session at AKC is life-sustaining. Every technician,
          nurse, physician, coordinator, and engineer in our network is the
          reason a patient walks home today.{" "}
          <em className="italic">
            If you want to do work that visibly matters &mdash; in an
            institution that has been building Indian nephrology for eighteen
            years &mdash; this is where to do it.
          </em>
        </p>

        <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
          <Button
            href="#roles"
            className="rounded-sm bg-primary-subtle px-8 py-4 font-bold tracking-[0.04em] hover:bg-primary-light"
          >
            See open roles <span aria-hidden="true">&rarr;</span>
          </Button>
          <Button
            href="#why"
            variant="outline"
            className="rounded-sm border-white px-8 py-4 font-bold tracking-[0.04em] text-white hover:border-white hover:bg-white/10"
          >
            Why work at AKC <span aria-hidden="true">&darr;</span>
          </Button>
        </div>
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

export default CareersHeroSection;
