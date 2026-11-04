import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

type Affiliation = {
  eyebrow: string;
  name: ReactNode;
  subtitle: string;
  body: ReactNode;
  foot: ReactNode;
};

const AFFILIATIONS: readonly Affiliation[] = [
  {
    eyebrow: "Academic Affiliation",
    name: (
      <>
        <em className="text-primary-subtle italic">Tata Institute of</em> Social
        Sciences
      </>
    ),
    subtitle:
      "A deemed university and institution of national eminence · Mumbai",
    body: (
      <>
        <strong className="font-normal">TISS</strong> is among India&rsquo;s
        most respected institutions of social sciences and allied disciplines
        &mdash; a deemed university with national reach. The School of Dialysis
        Technology&rsquo;s affiliation with TISS provides{" "}
        <em className="italic">
          academic standing, structured curriculum oversight, and a formal
          degree-aligned credential
        </em>{" "}
        for graduates pursuing the academic pathway.
      </>
    ),
    foot: <>academic standing · national recognition</>,
  },
  {
    eyebrow: "Vocational Affiliation",
    name: (
      <>
        <em className="text-primary-subtle italic">Maharashtra</em> State Board
      </>
    ),
    subtitle:
      "State Board of Skill, Vocational Education & Training, Government of Maharashtra",
    body: (
      <>
        <strong className="font-normal">MSBSVET</strong> is the official state
        vocational training authority for Maharashtra &mdash; the government
        body that recognises and accredits skill-based vocational programmes.
        The affiliation with MSBSVET ensures the School&rsquo;s qualifications
        are{" "}
        <em className="italic">
          formally recognised for employment in both public and private sector
          healthcare,
        </em>{" "}
        with the credibility of state-level vocational accreditation.
      </>
    ),
    foot: <>state vocational recognition · government credential</>,
  },
];

const AffiliationsSection = () => (
  <section className={cn("relative bg-secondary py-32.5", GUTTER)}>
    <div className="mb-14">
      <Eyebrow
        label="The Affiliations"
        className="mb-5 text-[14px] font-normal text-white"
      />

      <h2 className="mb-4 font-cormorant text-[clamp(30px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-white">
        Credentials that{" "}
        <em className="text-primary-subtle italic">employers recognise.</em>
      </h2>

      <p className="font-roboto text-[17px] leading-[22px] font-light text-[rgba(251,248,243,0.72)]">
        The qualifications awarded by the Apex School of Dialysis Technology are
        recognised through{" "}
        <strong className="font-normal">
          two formal academic and vocational affiliations
        </strong>{" "}
        &mdash; ensuring that graduates leave with credentials that are
        accepted, transferable, and stand up to scrutiny wherever they choose to
        work.
      </p>
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      {AFFILIATIONS.map((item) => (
        <div
          key={item.eyebrow}
          className="relative flex h-full flex-col rounded-[2px] bg-white px-8 py-10 sm:px-11 sm:py-12"
        >
          <div>
            <Eyebrow
              label={item.eyebrow}
              className="mb-5 text-[14px] font-normal text-black"
            />
            <h3 className="mb-4 font-cormorant text-[24px] leading-[1.05] font-bold tracking-[-0.015em] text-black sm:text-[30px]">
              {item.name}
            </h3>
          </div>

          <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
            {item.subtitle}
          </p>

          <p className="mb-[15px] flex-1 font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
            {item.body}
          </p>

          <p className="mt-[22px] border-t border-[#ccc] pt-[18px] font-roboto text-[11px] text-black">
            {item.foot}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default AffiliationsSection;
