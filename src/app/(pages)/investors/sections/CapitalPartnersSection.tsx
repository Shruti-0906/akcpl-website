import Image from "next/image";
import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import {
  CI_BODY,
  CI_TITLE,
  HEADING_EM,
  LABEL_DARK,
  SECTION_BASE,
} from "../constants";

const STRONG = "font-bold text-secondary";
const EM = "text-[#00b3ff] italic";

const LOGOS = "https://akcpl-assets.s3.ap-south-1.amazonaws.com/logos";

type Investor = {
  kind: string;
  name: ReactNode;
  /** Sits in the whitespace beside the two-line name. */
  logo: { src: string; alt: string; width: number; height: number };
  category: string;
  body: ReactNode[];
  fit: ReactNode;
};

const INVESTORS: readonly Investor[] = [
  {
    kind: "Healthcare PE · India",
    name: (
      <>
        Tata Capital
        <br />
        Healthcare Fund
      </>
    ),
    logo: {
      src: `${LOGOS}/Tata_Capital_Logo.jpeg`,
      alt: "Tata Capital Healthcare Fund logo",
      width: 1280,
      height: 512,
    },
    category:
      "The healthcare investment platform of one of India's most institutional names.",
    body: [
      <>
        Tata Capital&apos;s dedicated healthcare fund backs{" "}
        <strong className={STRONG}>
          growth-stage Indian healthcare businesses
        </strong>{" "}
        with the patient horizon, sectoral depth, and institutional gravitas
        that mature healthcare building demands. The Tata name carries weight in
        Indian healthcare for good reasons &mdash;{" "}
        <em className={EM}>
          nearly a century of building hospitals, research institutions, and
          public-spirited enterprises
        </em>{" "}
        before the term ESG was invented.
      </>,
      <>
        Their partnership with AKC reflects a shared belief that{" "}
        <strong className={STRONG}>
          category-leading Indian healthcare businesses are best built on Indian
          terms
        </strong>{" "}
        &mdash; with operational discipline, clinical depth, and a multi-decade
        view of what excellence looks like.
      </>,
    ],
    fit: (
      <>
        <strong className="font-bold text-primary-subtle not-italic">
          Healthcare conviction, patient horizons, and institutional gravitas
        </strong>{" "}
        of the kind very few Indian funds can offer. The board contribution is
        operational, sectoral, and long-term.
      </>
    ),
  },
  {
    kind: "Impact Capital · Global",
    name: (
      <>
        Blue Earth
        <br />
        Capital
      </>
    ),
    logo: {
      src: `${LOGOS}/Blue_Earth_capital.jpeg`,
      alt: "Blue Earth Capital logo",
      width: 764,
      height: 401,
    },
    category:
      "Institutional impact capital with a mandate for measurable health outcomes.",
    body: [
      <>
        Blue Earth is an institutional impact investor backing healthcare and
        infrastructure businesses across emerging markets &mdash; with a mandate
        that demands{" "}
        <strong className={STRONG}>
          both financial performance and measurable social outcomes
        </strong>
        . Their portfolio reflects a particular conviction in mission-led
        companies that scale.
      </>,
      <>
        Their partnership with AKC is a vote of confidence in the proposition
        this entire page has argued: that{" "}
        <em className={EM}>
          mission is not a feature of AKC&apos;s business &mdash; it is the
          structural advantage on which AKC&apos;s defensibility, talent
          retention, and long-term economics rest.
        </em>
      </>,
    ],
    fit: (
      <>
        <strong className="font-bold text-primary-subtle not-italic">
          Mission alignment, impact measurement discipline, and emerging-market
          healthcare experience
        </strong>{" "}
        &mdash; with the institutional rigour that makes board-level work
        substantive rather than ceremonial.
      </>
    ),
  },
] as const;

const CapitalPartnersSection = () => (
  <section
    className={cn(SECTION_BASE, "overflow-hidden bg-[#e0f2f9] py-[130px]")}
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-noise opacity-[0.04] mix-blend-multiply"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 55% 50% at 92% 15%, rgba(184,134,11,.06) 0%, transparent 60%), radial-gradient(ellipse 45% 40% at 4% 90%, rgba(14,37,64,.04) 0%, transparent 60%)",
      }}
    />

    <div className={cn("relative z-[2]", GUTTER)}>
      <div className="mb-14">
        <Eyebrow
          label="The Capital Already in Partnership"
          className={LABEL_DARK}
        />

        <h2 className={CI_TITLE}>
          Two institutions{" "}
          <em className={HEADING_EM}>have already taken the seat</em>
          <br />
          at the AKC table.
        </h2>

        <p className={CI_BODY}>
          AKC is honoured to count among its investors two institutions that
          exemplify what we look for in capital partnership &mdash;{" "}
          <strong className="font-bold">
            long horizons, healthcare conviction, mission alignment, and the
            operational seriousness that makes a board contribution meaningful.
          </strong>{" "}
          They are listed below.
        </p>
      </div>

      <div className="mb-12 flex items-center gap-3.5 border-b border-[#a8d4f1] pb-[22px] font-roboto text-[11px] font-bold tracking-[0.18em] text-black uppercase">
        <span
          aria-hidden="true"
          className="inline-block size-2 rounded-full bg-primary-subtle shadow-[0_0_0_4px_rgba(184,134,11,0.18)]"
        />
        <span>
          <span className="font-bold text-primary-subtle">Two</span>
          &nbsp;Institutional Investors &nbsp;·&nbsp; Patient Capital
          &nbsp;·&nbsp; Mission-Aligned
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {INVESTORS.map((investor, index) => (
          <div key={investor.kind}>
            <div
              className={cn(
                "relative flex h-full flex-col rounded-[2px] px-11 pt-12 pb-10",
                index % 2 === 1 ? "bg-[#cee8f3]" : "bg-white",
              )}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] bg-primary-subtle"
              />

              <Eyebrow label={investor.kind} className={LABEL_DARK} />

              <div className="mb-2 flex items-start justify-between gap-5">
                <h3 className="font-roboto text-[36px] leading-[1.05] font-bold tracking-[-0.018em] text-secondary">
                  {investor.name}
                </h3>

                {/* Height-capped so the two logos sit level despite differing
                    aspect ratios. */}
                <Image
                  src={investor.logo.src}
                  alt={investor.logo.alt}
                  width={investor.logo.width}
                  height={investor.logo.height}
                  sizes="160px"
                  className="h-12 w-auto shrink-0 object-contain"
                />
              </div>
              <p className="mb-7 font-roboto text-[17px] leading-[1.3] font-light tracking-[-0.005em] text-[#393f42] italic">
                {investor.category}
              </p>

              {investor.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="mb-6 font-roboto text-[17px] leading-[1.78] text-[#393f42]"
                >
                  {paragraph}
                </p>
              ))}

              <div className="mt-auto border-t border-[#ccc] pt-6">
                <p className="mb-3 font-roboto text-[10px] font-bold tracking-[0.22em] text-primary-subtle uppercase">
                  Why this partnership
                </p>
                <p className="font-roboto text-[16px] leading-[1.5] font-bold tracking-[-0.003em] text-secondary italic">
                  {investor.fit}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-11 border-t border-[rgba(14,37,64,0.12)] pt-8 font-roboto text-[17px] leading-[1.65] text-[#393f42] italic">
        AKC engages with additional institutional capital on a selective and
        confidential basis.{" "}
        <strong className="font-bold text-secondary not-italic">
          Full disclosure of investor terms, governance arrangements, and
          historical participation
        </strong>{" "}
        is shared during the diligence process, under appropriate
        confidentiality, with prospective partners whose profile aligns with the
        criteria below.
      </p>
    </div>
  </section>
);

export default CapitalPartnersSection;
