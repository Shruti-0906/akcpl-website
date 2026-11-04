import { cn } from "@/lib";

import { GUTTER } from "@/constants";

const CELLS = [
  {
    num: "2011",
    label: "Programme Founded",
    sub: "By Apex Kidney Foundation, Mumbai.",
  },
  {
    num: (
      <>
        13
        <span className="align-top text-[32px] font-light text-primary-subtle">
          +
        </span>
      </>
    ),
    label: "Years Operational",
    sub: "Continuous registry operations since inception.",
  },
  {
    num: (
      <>
        4
        <span className="align-top text-[32px] font-light text-primary-subtle">
          +
        </span>
      </>
    ),
    label: "Cities & Hospitals",
    sub: "Across the first published domino — growing every year.",
  },
  {
    num: (
      <em className="text-[0.85em] font-normal text-primary-subtle italic">
        India&apos;s
      </em>
    ),
    label: (
      <>
        First Computer-Aided
        <br />
        Swap Registry
      </>
    ),
    sub: "Mathematical optimisation built into matching since the start.",
  },
] as const;

const DISTRIBUTION = [
  {
    colour: "#0E7C7B",
    name: (
      <>
        <strong className="font-bold text-secondary">
          A ↔ B incompatibility
        </strong>{" "}
        · either direction
      </>
    ),
    pct: "53%",
  },
  {
    colour: "#B5495B",
    name: (
      <>
        <strong className="font-bold text-secondary">Any → O recipient</strong>{" "}
        · the hardest matches
      </>
    ),
    pct: "36%",
  },
  {
    colour: "#B8860B",
    name: (
      <>
        <strong className="font-bold text-secondary">AB → Any</strong> ·
        structurally disadvantaged donors
      </>
    ),
    pct: "11%",
  },
] as const;

/** Donut: circumference at r=70 is 439.82; segments are 53% / 36% / 11%. */
const DistributionDonut = () => (
  <svg viewBox="0 0 200 200" className="h-full w-full">
    <circle
      cx={100}
      cy={100}
      r={70}
      fill="none"
      stroke="#EEF7F6"
      strokeWidth={32}
    />
    <circle
      cx={100}
      cy={100}
      r={70}
      fill="none"
      stroke="#0E7C7B"
      strokeWidth={32}
      strokeDasharray="233.1 439.82"
      strokeDashoffset={0}
      transform="rotate(-90 100 100)"
    />
    <circle
      cx={100}
      cy={100}
      r={70}
      fill="none"
      stroke="#B5495B"
      strokeWidth={32}
      strokeDasharray="158.3 439.82"
      strokeDashoffset={-233.1}
      transform="rotate(-90 100 100)"
    />
    <circle
      cx={100}
      cy={100}
      r={70}
      fill="none"
      stroke="#B8860B"
      strokeWidth={32}
      strokeDasharray="48.4 439.82"
      strokeDashoffset={-391.4}
      transform="rotate(-90 100 100)"
    />
    <text
      x={100}
      y={96}
      fontFamily="'Roboto', sans-serif"
      fontWeight={400}
      fontStyle="italic"
      fontSize={14}
      fill="#0E2540"
      textAnchor="middle"
    >
      Incompatibility
    </text>
    <text
      x={100}
      y={114}
      fontFamily="'Roboto', sans-serif"
      fontWeight={600}
      fontSize={9}
      fill="#B8860B"
      textAnchor="middle"
      letterSpacing={2}
    >
      DISTRIBUTION
    </text>
  </svg>
);

const NumbersSection = () => (
  <section className={`bg-secondary py-16 lg:py-32.5 ${GUTTER}`}>
    <div className="mb-14 text-center">
      <div className="mb-5 flex items-center justify-center gap-3 font-roboto text-sm tracking-[0.22em] text-white uppercase">
        <span className="h-px w-6 bg-white" />
        By the Numbers
      </div>

      <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-white">
        ASTRA <span className="text-primary-subtle italic">by the data.</span>
      </h2>

      <p className="mt-5 font-roboto text-[17px] leading-relaxed text-[#FBF8F3]/72">
        A snapshot of the registry&apos;s cumulative reach, structure, and
        population — from a published analysis of{" "}
        <strong className="font-bold text-[#F5F0E8]">
          125 ASTRA-registered patients
        </strong>{" "}
        generating
        <br />
        <strong className="font-bold text-[#F5F0E8]">40 swaps</strong> across
        binary and domino formats.
      </p>
    </div>

    {/* 1px gaps rendered as the grid's own background, matching the reference. */}
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
      {CELLS.map((cell, index) => (
        <div
          key={cell.sub}
          className="relative bg-white px-7.5 py-10.5 before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-primary-subtle before:content-['']"
        >
          <div className="mb-3.5 font-roboto text-[58px] leading-none font-bold tracking-[-0.028em] text-[#00b3ff]">
            {cell.num}
          </div>
          <div className="mb-2 font-roboto text-[10.5px] leading-snug font-bold tracking-[0.18em] text-secondary uppercase">
            {cell.label}
          </div>
          <div className="font-roboto text-[13.5px] leading-snug text-[#393f42] italic">
            {cell.sub}
          </div>
        </div>
      ))}
    </div>

    <div className="relative mt-12 grid grid-cols-1 items-center gap-12 rounded-sm bg-white px-6 py-12 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-[#fdebc4] before:content-[''] lg:grid-cols-[auto_1fr] lg:gap-16 lg:px-13">
      <div className="mx-auto size-60 shrink-0">
        <DistributionDonut />
      </div>

      <div>
        <div className="mb-3.5 flex items-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
          <span className="h-px w-6 bg-black" />
          // Blood Group Incompatibility Patterns at ASTRA
        </div>

        <h3 className="mb-5 font-cormorant text-4xl leading-tight font-bold text-secondary">
          The shape of{" "}
          <em className="font-normal text-[#fdebc4] italic">
            what walks through the door.
          </em>
        </h3>

        <ul className="flex flex-col gap-3">
          {DISTRIBUTION.map((item) => (
            <li
              key={item.pct}
              className="grid grid-cols-[18px_1fr_auto] items-center gap-3.5 border-b border-black/10 py-2.5 last:border-b-0"
            >
              <span
                aria-hidden="true"
                className="size-3.5 rounded-full"
                style={{ background: item.colour }}
              />
              <span className="font-roboto text-[14.5px] text-[#2A2A2A]">
                {item.name}
              </span>
              <span className="font-roboto text-[13px] font-bold text-secondary">
                {item.pct}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default NumbersSection;
