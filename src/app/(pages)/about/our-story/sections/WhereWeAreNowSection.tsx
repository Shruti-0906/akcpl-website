import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const STATS = [
  {
    value: "250+",
    label: "Active Centres",
    detail: "Across 14 Indian states and 151 towns & cities.",
  },
  {
    value: "1,850",
    label: "Coworkers",
    detail: "Clinical, technical, administrative across the national network.",
  },
  {
    value: "62,00,000+",
    label: "Sessions Delivered",
    detail: "Cumulative dialysis sessions across the AKC network to date.",
  },
  {
    value: "18",
    label: "Years of Operation",
    detail: "Since the first dialysis session on 15 August 2008.",
  },
] as const;

const WhereWeAreNowSection = () => {
  return (
    <section
      id="where-we-are-now"
      className={cn("bg-depth-deep py-14 lg:py-20", GUTTER)}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
        <Eyebrow
          label="Where We Are Now"
          className="justify-center text-white/70"
        />
        <h2 className="section-heading text-white">
          The institution as it{" "}
          <span className="text-primary italic">stands today.</span>
        </h2>
        <p className="font-roboto text-sm leading-relaxed text-white/70 sm:text-base">
          A snapshot, in numbers, of what eighteen years of building looks like
          in mid-2026.
        </p>
      </div>

      <dl className="mt-10 grid divide-y divide-white/15 border border-white/15 lg:mt-12 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2 p-6">
            <dd className="font-roboto text-3xl font-bold text-primary-light lg:text-4xl">
              {stat.value}
            </dd>
            <dt className="font-roboto text-[0.7rem] font-semibold tracking-wider text-white uppercase">
              {stat.label}
            </dt>
            <p className="font-roboto text-[0.7rem] leading-relaxed tracking-wide text-white/50 uppercase">
              {stat.detail}
            </p>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default WhereWeAreNowSection;
