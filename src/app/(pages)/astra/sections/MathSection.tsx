import { cn } from "@/lib";

import { GUTTER } from "@/constants";

const STAGES = [
  {
    num: "i",
    title: (
      <>
        Compatibility <em className="text-primary-light italic">Matrix</em>
      </>
    ),
    text: (
      <>
        Every donor-recipient pair in the registry is scored against every other
        pair on{" "}
        <strong className="font-bold text-[#F5F0E8]">
          blood-group match, cross-match status, viral status, and willingness
          to travel.
        </strong>{" "}
        Each cell scores 1 (compatible) or 0 (incompatible).
      </>
    ),
  },
  {
    num: "ii",
    title: (
      <>
        Pairing <em className="text-primary-light italic">Matrix</em>
      </>
    ),
    text: (
      <>
        A second matrix marks the cases where{" "}
        <strong className="font-bold text-[#F5F0E8]">
          two mutual donor-recipient pairs are compatible
        </strong>{" "}
        — i.e., where a binary swap is possible. This step delivers the{" "}
        <em className="text-primary-light italic">quantity</em> objective: the
        maximum number of feasible swaps.
      </>
    ),
  },
  {
    num: "iii",
    title: (
      <>
        Fairness &amp; Quality{" "}
        <em className="text-primary-light italic">Scoring</em>
      </>
    ),
    text: (
      <>
        Every potential match receives a weighted score capturing{" "}
        <strong className="font-bold text-[#F5F0E8]">
          fairness factors (sensitisation, blood group disadvantage, waiting
          time)
        </strong>{" "}
        and{" "}
        <em className="text-primary-light italic">
          utility factors (HLA mismatch, donor-recipient age difference).
        </em>{" "}
        Fairness carries 80% of the weight.
      </>
    ),
  },
  {
    num: "iv",
    title: (
      <>
        Max Cardinality,{" "}
        <em className="text-primary-light italic">Max Weight</em>
      </>
    ),
    text: (
      <>
        A graph is constructed with pairs as nodes, possible swaps as edges, and
        scores as edge weights. A{" "}
        <strong className="font-bold text-[#F5F0E8]">
          max-cardinality, max-weight matching algorithm
        </strong>{" "}
        finds the combination that maximises both{" "}
        <em className="text-primary-light italic">number</em> and{" "}
        <em className="text-primary-light italic">quality</em> of transplants.
      </>
    ),
  },
] as const;

const FAIRNESS = [
  {
    label: (
      <>
        <strong className="font-bold text-[#F5F0E8]">PRA%</strong> ·
        sensitisation level
      </>
    ),
    weight: "0.70",
  },
  {
    label: (
      <>
        <strong className="font-bold text-[#F5F0E8]">O recipient</strong> ·
        structural disadvantage
      </>
    ),
    weight: "0.45",
  },
  {
    label: (
      <>
        <strong className="font-bold text-[#F5F0E8]">AB donor</strong> ·
        structural disadvantage
      </>
    ),
    weight: "0.30",
  },
  {
    label: (
      <strong className="font-bold text-[#F5F0E8]">
        Failed vascular accesses
      </strong>
    ),
    weight: "0.80",
  },
  {
    label: (
      <>
        <strong className="font-bold text-[#F5F0E8]">Waiting time</strong> on
        dialysis
      </>
    ),
    weight: "0.75",
  },
  {
    label: (
      <strong className="font-bold text-[#F5F0E8]">
        Period from registration
      </strong>
    ),
    weight: "0.20",
  },
] as const;

const UTILITY = [
  {
    label: <strong className="font-bold text-[#F5F0E8]">HLA mismatches</strong>,
    weight: "0.45",
  },
  {
    label: (
      <>
        <strong className="font-bold text-[#F5F0E8]">Age difference</strong>{" "}
        between donor and recipient
      </>
    ),
    weight: "0.35",
  },
] as const;

const MathSection = () => (
  <section
    id="how"
    className={`relative scroll-mt-36 overflow-hidden bg-secondary py-16 lg:py-32.5 ${GUTTER}`}
  >
    {/* Reference .math::before decorative wash. */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_92%_8%,rgba(14,124,123,0.22)_0%,transparent_60%),radial-gradient(ellipse_50%_45%_at_6%_92%,rgba(184,134,11,0.08)_0%,transparent_60%)]"
    />

    <div className="relative">
      <div className="mb-16">
        <div className="mb-5 flex items-center gap-3 font-roboto text-sm tracking-[0.22em] text-white uppercase">
          <span className="h-px w-6 bg-white" />
          The Mathematics
        </div>

        <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-white">
          For a small registry, manual matching works.
          <br />
          <span className="text-primary-light italic">
            For a national one, you need an algorithm.
          </span>
        </h2>

        <p className="mt-5 font-roboto text-[17px] leading-relaxed text-[#FBF8F3]/72">
          ASTRA&apos;s matching engine is a{" "}
          <strong className="font-bold text-[#F5F0E8]">
            graph-optimisation algorithm
          </strong>{" "}
          developed and refined over more than a decade. The algorithm runs in
          polynomial time, produces solutions in seconds, and balances two
          objectives that pull against each other —{" "}
          <em className="text-primary-light italic">
            quantity (how many transplants are possible)
          </em>{" "}
          and{" "}
          <em className="text-primary-light italic">
            quality (how fair and how durable each match is).
          </em>
        </p>
      </div>

      {/* Algorithm 4-stage grid — 1px gaps rendered as the grid's own background. */}
      <div className="mb-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-[rgba(14,124,123,0.22)] bg-[rgba(14,124,123,0.22)] sm:grid-cols-2 lg:grid-cols-4">
        {STAGES.map((stage, index) => (
          <div
            key={stage.num}
            className="relative flex flex-col bg-[rgba(14,124,123,0.04)] px-7.5 py-9 before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-primary-light before:content-['']"
          >
            <div className="mb-4 font-roboto text-4xl leading-none font-light tracking-[-0.018em] text-primary-light italic">
              {stage.num}
            </div>
            <h3 className="mb-3.5 font-cormorant text-xl leading-tight font-bold text-white">
              {stage.title}
            </h3>
            <p className="flex-1 font-roboto text-[17px] leading-[22px] font-light text-[#FBF8F3]/72">
              {stage.text}
            </p>
          </div>
        ))}
      </div>

      {/* Fairness vs utility weighting block */}
      <div className="rounded-sm border border-[rgba(14,124,123,0.18)] bg-[rgba(14,124,123,0.04)] px-6 py-11 lg:px-12">
        <div className="mb-2.5 font-roboto text-sm tracking-[0.22em] text-[#C9922A] uppercase">
          // The Scoring System
        </div>

        <h3 className="mb-8 font-roboto text-[26px] leading-tight font-normal tracking-[-0.012em] text-[#F5F0E8]">
          <em className="text-[#C9922A] italic">80%</em> weight on fairness.{" "}
          <em className="text-[#C9922A] italic">20%</em> on utility.
          <span className="mt-2 block font-roboto text-[15px] font-normal text-[#FBF8F3]/65 italic">
            A deliberate institutional choice: equity matters more than
            optimisation.
          </span>
        </h3>

        <div className="mb-7 flex h-12 overflow-hidden rounded-sm">
          <div className="flex grow-[80] basis-0 items-center border-r border-black/20 bg-[linear-gradient(90deg,#009ee3,#0075a9)] px-6 font-roboto text-xs font-bold tracking-[0.18em] text-[#F5F0E8] uppercase">
            Fairness · 80%
          </div>
          <div className="flex grow-[20] basis-0 items-center bg-[linear-gradient(90deg,#fdebc4,#C9922A)] px-4.5 font-roboto text-[11.5px] font-bold tracking-[0.16em] text-secondary uppercase">
            Utility · 20%
          </div>
        </div>

        <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
          <div>
            <div className="mb-3.5 font-roboto text-[10px] font-bold tracking-[0.22em] text-primary-light uppercase">
              // Fairness Parameters · 80% of score
            </div>
            <ul className="flex flex-col">
              {FAIRNESS.map((item, index) => (
                <li
                  key={index}
                  className="grid grid-cols-[1fr_auto] items-center gap-3.5 border-b border-[rgba(14,124,123,0.15)] py-2.75 font-roboto text-sm leading-relaxed text-[#FBF8F3]/85 last:border-b-0"
                >
                  <span>{item.label}</span>
                  <span className="font-roboto text-[11.5px] font-bold text-primary-light">
                    {item.weight}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-3.5 font-roboto text-[10px] font-bold tracking-[0.22em] text-[#C9922A] uppercase">
              // Utility Parameters · 20% of score
            </div>
            <ul className="flex flex-col">
              {UTILITY.map((item, index) => (
                <li
                  key={index}
                  className="grid grid-cols-[1fr_auto] items-center gap-3.5 border-b border-[rgba(14,124,123,0.15)] py-2.75 font-roboto text-sm leading-relaxed text-[#FBF8F3]/85 last:border-b-0"
                >
                  <span>{item.label}</span>
                  <span className="font-roboto text-[11.5px] font-bold text-[#C9922A]">
                    {item.weight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MathSection;
