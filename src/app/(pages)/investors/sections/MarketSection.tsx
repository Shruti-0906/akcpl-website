import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { BODY_ON_NAVY, CREAM, LABEL_LIGHT, SECTION_BASE } from "../constants";

type BigNumber = {
  label: string;
  value: string;
  suffix: string;
  text: ReactNode;
};

const BIG_NUMBERS: readonly BigNumber[] = [
  {
    label: "CKD Burden",
    value: "220",
    suffix: "M",
    text: (
      <>
        Indians at risk of chronic kidney disease &mdash; an estimated 17%+ of
        adults, driven by diabetes, hypertension, and an ageing population.
      </>
    ),
  },
  {
    label: "Dialysis Demand",
    value: "15",
    suffix: "%+",
    text: (
      <>
        Annual growth in dialysis demand &mdash; well ahead of healthcare-spend
        growth generally and of most other chronic-disease categories.
      </>
    ),
  },
  {
    label: "Underservice",
    value: "~25",
    suffix: "%",
    text: (
      <>
        Of population medically requiring dialysis are receiving it.
      </>
    ),
  },
] as const;

const STRONG = `font-bold ${CREAM}`;

const DYNAMICS: readonly { heading: ReactNode; paragraphs: ReactNode[] }[] = [
  {
    heading: (
      <>
        Why <em className="text-[#00b3ff] italic">now</em>
      </>
    ),
    paragraphs: [
      <>
        <strong className={STRONG}>Diabetes and hypertension prevalence</strong>{" "}
        are rising rapidly across India, and CKD progression follows on a
        10&ndash;15 year lag. The dialysis demand curve of the next two decades
        is already locked in by the disease prevalence of today.
      </>,
      <>
        <strong className={STRONG}>Government tailwinds</strong> &mdash; PMJAY
        dialysis coverage, state-level schemes, National Dialysis Programme
        &mdash; are systematically expanding insured demand and formalising the
        market.
      </>,
      <>
        <strong className={STRONG}>The market remains fragmented.</strong>{" "}
        Thousands of standalone units; two or three multi-state networks with
        genuine institutional capability.
      </>,
    ],
  },
  {
    heading: (
      <>
        Why <em className="text-[#00b3ff] italic">AKC</em>
      </>
    ),
    paragraphs: [
      <>
        <strong className={STRONG}>Scale and standard, together.</strong> Most
        networks at AKC&apos;s scale do not have AKC&apos;s clinical
        institution-building; most institutions with AKC&apos;s clinical
        credibility do not have its scale.
      </>,
      <>
        <strong className={STRONG}>The platform compounds.</strong> Every new
        centre adds to the data, every patient adds to the network, every
        nephrologist adds to the institution. The marginal-value-of-scale curve
        is steeper here than in most healthcare categories.
      </>,
      <>
        <strong className={STRONG}>The mission is the moat.</strong> AKC has
        built what it has built because its founders cared enough to spend two
        decades on it.
      </>,
    ],
  },
] as const;

const MarketSection = () => (
  <section
    id="mo"
    className={cn(
      SECTION_BASE,
      "overflow-hidden bg-secondary py-[130px]",
      CREAM,
    )}
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 55% 50% at 88% 12%, rgba(184,134,11,.13) 0%, transparent 60%), radial-gradient(ellipse 50% 45% at 8% 90%, rgba(14,124,123,.1) 0%, transparent 60%)",
      }}
    />

    <div className={cn("relative z-[2]", GUTTER)}>
      <div className="mb-18">
        <Eyebrow label="The Market Opportunity" className={LABEL_LIGHT} />

        <h2
          className={cn(
            "mb-7 font-cormorant text-[clamp(36px,4vw,58px)] leading-[1.08] font-bold tracking-[-0.02em]",
            CREAM,
          )}
        >
          A category large enough to matter.
          <br />
          Fragmented enough to{" "}
          <em className="text-[#00b3ff] italic">consolidate.</em>
        </h2>

        <p
          className={cn("font-roboto text-[17px] leading-[1.7]", BODY_ON_NAVY)}
        >
          India&apos;s chronic kidney disease burden is among the largest in the
          world. The care infrastructure to serve it is among the most
          underbuilt. The result is a market that is{" "}
          <strong className={STRONG}>
            growing structurally at well above GDP, dominated by sub-scale
            operators, and primed for the institution that can combine quality
            with scale.
          </strong>
        </p>
      </div>

      <div className="mb-12 grid gap-px border border-[#002944] bg-[#002944] sm:grid-cols-2 lg:grid-cols-3">
        {BIG_NUMBERS.map((item) => (
          <div key={item.label} className="bg-secondary px-8 py-10">
            <p className="mb-3.5 font-roboto text-[11px] leading-[1.4] font-bold tracking-[0.18em] text-tertiary-subtle uppercase">
              {item.label}
            </p>
            <p className="mb-3 font-roboto text-[64px] leading-none font-bold tracking-[-0.025em] text-[#00b3ff]">
              {item.value}
              <span className="ml-1 align-top text-[36px] font-light text-tertiary-subtle">
                {item.suffix}
              </span>
            </p>
            <p
              className={cn(
                "font-roboto text-[14.5px] leading-[1.65]",
                "text-[rgba(251,248,243,0.72)]",
              )}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-16 border-t border-[rgba(229,192,123,0.2)] pt-10 lg:grid-cols-2">
        {DYNAMICS.map((column, index) => (
          <div key={index}>
            <h4
              className={cn(
                "mb-4 font-roboto text-[22px] font-bold tracking-[-0.005em]",
                CREAM,
              )}
            >
              {column.heading}
            </h4>
            {column.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className={cn(
                  "mb-3 font-roboto text-[16px] leading-[1.7] last:mb-0",
                  BODY_ON_NAVY,
                )}
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MarketSection;
