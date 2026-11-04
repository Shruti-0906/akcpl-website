import Link from "next/link";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { CI_BODY, CI_TITLE } from "../components/text";
import { STATIONS } from "../components/timeline";

const JourneySection = () => (
  <section
    className={cn("relative overflow-hidden bg-secondary pt-0 pb-27.5", GUTTER)}
  >
    <div>
      <div className="mt-2 mb-17.5 text-center">
        <h1 className={cn(CI_TITLE, "text-white")}>Transplant</h1>
      </div>
    </div>

    <div className="relative z-2 mx-auto max-w-[1280px]">
      <div>
        <div className="mx-auto mb-18 max-w-[780px] text-center">
          <Eyebrow
            label="The Transplant Journey"
            className="mb-5 inline-flex text-white"
          />
          <h2 className={cn(CI_TITLE, "text-white")}>
            Four chapters, <em>one new life.</em>
          </h2>
          <p className={cn(CI_BODY, "text-[rgba(251,248,243,0.72)]")}>
            A transplant is not a single event &mdash; it is a journey that
            begins long before the operating theatre and continues, in your
            nephrologist&rsquo;s care, for the rest of your life.
          </p>
        </div>
      </div>

      <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {/* `.timeline::before`: the gradient rule the four dots sit on.
            Only makes sense once the stations sit in a single row, so it's
            hidden while the grid is stacked below `lg`. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-8 right-[8%] left-[8%] hidden h-px bg-[linear-gradient(to_right,rgba(14,124,123,0.5)_0%,rgba(184,134,11,0.6)_50%,rgba(181,73,91,0.6)_100%)] lg:block"
        />

        {STATIONS.map((station) => (
          <Link
            key={station.id}
            href={station.href}
            className="group relative block px-3 text-center"
          >
            <div
              className={cn(
                "relative z-2 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white font-roboto text-2xl font-bold italic shadow-[0_4px_16px_rgba(14,37,64,0.06)] group-hover:shadow-[0_8px_24px_rgba(14,37,64,0.12)]",
                station.dotClassName,
              )}
            >
              {station.roman}
            </div>

            <div className="mb-2 font-roboto text-[10.5px] font-bold tracking-[0.22em] text-[#00b3ff] uppercase">
              {station.phase}
            </div>

            <div className="mb-2.5 font-roboto text-xl leading-[1.2] font-bold tracking-[-0.005em] text-white">
              {station.name}
            </div>

            <p className="mx-auto max-w-[200px] font-roboto text-[17px] leading-[1.55] text-[rgba(251,248,243,0.72)]">
              {station.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default JourneySection;
