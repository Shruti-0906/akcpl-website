import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import MortalityChart from "../components/MortalityChart";

const FACTS = [
  { value: "1,360", label: "patients randomly assigned" },
  { value: "61", label: "dialysis centres, 8 countries" },
  { value: "2.5 yrs", label: "median follow-up" },
  { value: "23 L+", label: 'clean fluid flushed per session (the HDF "dose")' },
] as const;

const EvidenceSection = () => (
  <section
    id="evidence"
    className={cn(
      "relative scroll-mt-36 overflow-hidden bg-secondary py-22.5 text-white",
      GUTTER,
    )}
  >
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_85%_12%,rgba(2,132,199,0.16),transparent_60%)]"
    />

    <div className="relative z-2">
      <div className="mb-12">
        <Eyebrow
          label="The evidence · the CONVINCE trial"
          className="mb-5 text-white"
        />
        <h2 className="section-heading leading-[1.05] font-bold tracking-[-0.015em] text-white">
          This isn&rsquo;t a theory. It was{" "}
          <em className="text-primary-subtle italic">measured</em>.
        </h2>
        <p className="mt-4.5 font-roboto text-[17px] leading-[22px] font-light text-[rgba(251,248,243,0.78)]">
          In 2023, a landmark trial — CONVINCE, published in the New England
          Journal of Medicine and co-authored by Prof. Bernard Canaud — randomly
          assigned 1,360 dialysis patients across eight European countries to
          either high-dose HDF or standard high-flux dialysis, then followed
          them for about two and a half years.
        </p>
      </div>

      <div className="mb-11.5 grid grid-cols-4 gap-4.5 max-[820px]:grid-cols-2 max-[440px]:grid-cols-1">
        {FACTS.map((fact) => (
          <div
            key={fact.value}
            className="rounded-[14px] border border-white/10 bg-white/[0.04] px-5.5 py-6"
          >
            <span className="block font-roboto text-[34px] leading-[1.05] font-bold text-white">
              {fact.value}
            </span>
            <span className="mt-2 block font-roboto text-[13px] leading-[1.45] text-white/65">
              {fact.label}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 items-center gap-9 max-[760px]:grid-cols-1 max-[760px]:gap-7">
        <div>
          <MortalityChart />
        </div>

        <div className="font-roboto text-[17px] leading-[22px] font-light text-[rgba(251,248,243,0.78)]">
          <p className="mb-4">
            More people on HDF survived during the trial — a{" "}
            <b className="font-bold text-tertiary">
              77% higher probability of survival
            </b>{" "}
            (a result very unlikely to be down to chance).
          </p>
          <p>
            The benefit was strongest against{" "}
            <b className="font-bold text-tertiary">infection-related deaths</b>,
            including COVID-19. A later 2024 analysis in{" "}
            <em className="italic">The Lancet</em>, pooling every major trial,
            reached the same verdict: HDF reduces deaths, and more clean-fluid
            flushing means more benefit.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default EvidenceSection;
