import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import {
  CI_BODY,
  CI_BODY_LIGHT,
  CI_TITLE,
  HEADING_EM,
  LABEL_LIGHT,
  SECTION_BASE,
} from "../constants";

const STRONG = "font-bold text-secondary";

const BLOCKS: readonly {
  label: string;
  title: ReactNode;
  items: ReactNode[];
}[] = [
  {
    label: "The Revenue Model",
    title: (
      <>
        Recurring, diversified,{" "}
        <em className="text-[#00b3ff] italic">resilient.</em>
      </>
    ),
    items: [
      <>
        <strong className={STRONG}>Direct dialysis services</strong> &mdash;
        cash, insurance, PMJAY and state schemes
      </>,
      <>
        <strong className={STRONG}>Hospital partnerships</strong> &mdash;
        revenue-share, professional fees, technical services
      </>,
      <>
        <strong className={STRONG}>Clinical research services</strong> &mdash;
        investigator-initiated and industry-sponsored trials
      </>,
      <>
        <strong className={STRONG}>Technology &amp; data</strong> &mdash; Axis
        platform optionality, IRDS research collaboration
      </>,
    ],
  },
  {
    label: "The Growth Vectors",
    title: (
      <>
        Geographic, clinical,{" "}
        <em className="text-[#00b3ff] italic">technological.</em>
      </>
    ),
    items: [
      <>
        <strong className={STRONG}>Geographic expansion</strong> &mdash;
        currently 10 of 28 states; significant white-space remains
      </>,
      <>
        <strong className={STRONG}>Service line expansion</strong> &mdash; home
        hemodialysis, peritoneal dialysis, transplant pre/post
      </>,
      <>
        <strong className={STRONG}>Asset-light partnership growth</strong>{" "}
        &mdash; hospital tie-ups, technical services, BOT models
      </>,
      <>
        <strong className={STRONG}>Technology platform extension</strong>{" "}
        &mdash; Axis as licensed infrastructure for other networks
      </>,
      <>
        <strong className={STRONG}>
          Research &amp; clinical-trial monetisation
        </strong>{" "}
        &mdash; AKC as preferred Indian site network
      </>,
      <>
        <strong className={STRONG}>Selective international</strong> &mdash;
        opportunities in comparable markets
      </>,
    ],
  },
] as const;

const BusinessSection = () => (
  <section
    className={cn(SECTION_BASE, "overflow-hidden bg-secondary py-[130px]")}
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-noise opacity-[0.04] mix-blend-multiply"
    />

    <div className={cn("relative z-[2]", GUTTER)}>
      <div className="mb-18">
        <Eyebrow label="Business Model & Growth" className={LABEL_LIGHT} />

        <h2 className={cn(CI_TITLE, "text-white")}>
          Recurring revenue.{" "}
          <em className={HEADING_EM}>Endless geographies. Multiple models.</em>
        </h2>

        <p className={cn(CI_BODY, CI_BODY_LIGHT)}>
          AKC&apos;s economics combine the predictability of chronic-disease
          recurring revenue with the optionality of multiple growth vectors
          &mdash; clinical, geographic, technological, and academic.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {BLOCKS.map((block, index) => (
          <div
            key={block.label}
            className={cn(
              "relative rounded-[2px] px-9 py-[42px]",
              index % 2 === 1 ? "bg-[#cee8f3]" : "bg-white",
            )}
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[3px] bg-primary-subtle"
            />
            <p className="mb-3.5 font-roboto text-[10.5px] font-bold tracking-[0.22em] text-primary-subtle uppercase">
              {block.label}
            </p>
            <h3 className="mb-5.5 font-cormorant text-[29px] leading-[1.25] font-bold tracking-[-0.005em] text-secondary">
              {block.title}
            </h3>
            <ul className="flex flex-col gap-3.5">
              {block.items.map((item, i) => (
                <li
                  key={i}
                  className="relative pl-6 font-roboto text-[15.5px] leading-[1.6] text-[#393f42]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 text-[17px] text-primary-subtle"
                  >
                    &rarr;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BusinessSection;
