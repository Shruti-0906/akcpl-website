import Image from "next/image";
import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { cn } from "@/lib";

const GOV_GUTTER = "px-6 sm:px-10 lg:px-15";

const CI_TITLE =
  "font-cormorant text-[clamp(36px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black";

const CI_BODY =
  "mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42]";

const LABEL =
  "mb-5 text-sm leading-[normal] text-black [&>span]:w-6 [&>span]:opacity-100";

const TITLE_EM = "text-primary-subtle italic";

type Fact = {
  title: string;
  value: ReactNode;
  body: ReactNode;
};

const FACTS: readonly Fact[] = [
  {
    title: "CKD Prevalence",
    value: (
      <>
        17<span>%+</span>
      </>
    ),
    body: (
      <>
        Of Indian adults are estimated to be living with chronic kidney disease
        — one of the highest national prevalences in the world.
      </>
    ),
  },
  {
    title: "At-Risk Population",
    value: (
      <>
        220<span>M</span>
      </>
    ),
    body: (
      <>
        Indians at risk — the scale of the at-risk cohort exceeds the total
        population of most countries.
      </>
    ),
  },
  {
    title: "Dialysis Access",
    value: (
      <>
        ~25<span>%</span>
      </>
    ),
    body: (
      <>
        Of population medically requiring dialysis are receiving it.
      </>
    ),
  },
];

const PublicHealthCaseSection = () => (
  <section
    id="public-health-case"
    className={cn("bg-white pt-20 pb-30", GOV_GUTTER)}
  >
    <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
      <div className="mb-15">
        <Eyebrow label="The Public Health Case" className={LABEL} />
        <h2 className={cn(CI_TITLE, "mb-4")}>
          Kidney disease is among India&apos;s{" "}
          <em className={TITLE_EM}>most under-recognised</em> public health
          crises.
        </h2>
        <p className={CI_BODY}>
          It is silent, expensive, and chronic. It is disproportionately driven
          by diabetes and hypertension — conditions that have surged across
          India over the past two decades. And it is{" "}
          <strong className="font-bold">
            poorly visible in our national health data
          </strong>
          , which makes it hard to legislate, fund, and address at the scale it
          deserves.
        </p>
      </div>
      <Image
        src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Government+-+Public+Health+Case+Section.jpg"
        alt="Kidney Disease"
        width={800}
        height={434}
        sizes="(min-width: 1024px) 36vw, 100vw"
        className="h-auto w-full"
        priority
      />
    </div>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {FACTS.map((fact) => (
        <article
          key={fact.title}
          className="rounded-lg border border-[#002238] bg-card-deep px-7 py-9"
        >
          <h3 className="mb-4 font-cormorant text-2xl leading-[1.05] font-bold text-white">
            {fact.title}
          </h3>
          <div className="mb-1.5 block font-roboto text-[40px] leading-[normal] font-bold text-[#5bc5f2] [&>span]:ml-0.5">
            {fact.value}
          </div>
          <p className={cn(CI_BODY, "text-[rgba(251,248,243,0.72)]")}>
            {fact.body}
          </p>
        </article>
      ))}
    </div>
  </section>
);

export default PublicHealthCaseSection;
