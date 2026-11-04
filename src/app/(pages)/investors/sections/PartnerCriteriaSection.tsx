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

const STRONG = "font-bold text-black";
const EM = "text-primary-subtle italic";

const TITLE_EM = "font-bold text-primary-subtle italic";

const CRITERIA: readonly { num: string; title: ReactNode; text: ReactNode }[] =
  [
    {
      num: "i.",
      title: (
        <>
          Long-horizon <em className={TITLE_EM}>capital</em>
        </>
      ),
      text: (
        <>
          AKC is a twenty-year
          institution-build, not a near-term exit.{" "}
          <strong className={STRONG}>
            The patient capital that backs hospital chains, education
            institutions, and infrastructure
          </strong>{" "}
          is the right shape for what we are building.
        </>
      ),
    },
    {
      num: "ii.",
      title: (
        <>
          Mission <em className={TITLE_EM}>alignment</em>
        </>
      ),
      text: (
        <>
          Capital that understands that{" "}
          <em className={EM}>&quot;mission&quot;</em> in healthcare is not a
          feature; it is the moat. Capital that is willing to forgo a near-term
          margin point for a long-term standard improvement.{" "}
          <strong className={STRONG}>
            Investors who would be proud to be on the page that tells AKC&apos;s
            story in ten years.
          </strong>
        </>
      ),
    },
    {
      num: "iii.",
      title: (
        <>
          Healthcare <em className={TITLE_EM}>conviction</em>
        </>
      ),
      text: (
        <>
          Investors who have done healthcare work before, or who are willing to
          do the work to understand its operational and regulatory complexity.{" "}
          <strong className={STRONG}>
            Generalist capital that treats healthcare as just another sector
          </strong>{" "}
          is not the right partner for this kind of build.
        </>
      ),
    },
    {
      num: "iv.",
      title: (
        <>
          Operational <em className={TITLE_EM}>value-add</em>
        </>
      ),
      text: (
        <>
          A board contribution beyond capital &mdash; operational expertise,
          regulatory networks, international healthcare connections, talent
          introductions.{" "}
          {/* <strong className={STRONG}>
            The best healthcare investors are operators-turned-investors.
          </strong>{" "}
          We look for that. */}
        </>
      ),
    },
    {
      num: "v.",
      title: (
        <>
          Scale <em className={TITLE_EM}>capacity</em>
        </>
      ),
      text: (
        <>
          Capital that can grow with us. Follow-on capacity matters more than
          initial cheque size.{" "}
          <strong className={STRONG}>
            An institutional balance sheet that can support AKC&apos;s
            geographic and clinical expansion
          </strong>{" "}
          across the next decade is the right partnership profile.
        </>
      ),
    },
  ] as const;

const PartnerCriteriaSection = () => (
  <section
    className={cn(SECTION_BASE, "overflow-hidden bg-secondary py-[130px]")}
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 55% 50% at 90% 10%, rgba(229,192,123,.12) 0%, transparent 60%)",
      }}
    />

    <div className={cn("relative z-[2]", GUTTER)}>
      <div className="mb-18">
        <Eyebrow
          label="How We Choose Our Capital Partners"
          className={LABEL_LIGHT}
        />

        <h2 className={cn(CI_TITLE, "text-white")}>
          We are selective <em className={HEADING_EM}>about our capital</em>.
        </h2>

        <p className={cn(CI_BODY, CI_BODY_LIGHT)}>
          An institution like AKC is built across a generation, not a fund
          cycle. The capital that backs us must understand that. Below is what
          we look for in a partner &mdash; and what we offer, in turn.
        </p>
      </div>

      <div className="flex flex-col">
        {CRITERIA.map((criterion, index) => (
          <div
            key={criterion.num}
            className={cn(
              "mb-0.5 grid items-start gap-12 p-[30px]",
              "lg:grid-cols-[80px_280px_1fr]",
              index % 2 === 1 ? "bg-[#e9f7fd]" : "bg-white",
            )}
          >
            <p className="font-roboto text-[32px] leading-none font-light text-black italic">
              {criterion.num}
            </p>
            <h3 className="font-cormorant text-[22px] leading-[1.25] font-bold tracking-[-0.005em] text-black">
              {criterion.title}
            </h3>
            <p className="font-roboto text-[17px] leading-[1.7] text-black/78">
              {criterion.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerCriteriaSection;
