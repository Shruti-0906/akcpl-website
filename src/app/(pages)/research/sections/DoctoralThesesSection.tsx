import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import ScholarCard, { type Scholar } from "../components/ScholarCard";

const SCHOLARS: readonly Scholar[] = [
  {
    status: "PhD Scholar 01 · Completed",
    firstName: "Utkarsh",
    lastName: "Verma, PhD",
    affiliation:
      "IIT Bombay, Industrial Engineering & Operations Research · supervised by Prof. Narayan Rangaraj",
    thesis:
      "Mathematical optimisation of kidney exchange programmes — with applications to the ASTRA registry",
    summary: (
      <>
        The doctoral programme that built the mathematical foundation for
        ASTRA&apos;s max-cardinality, max-weight matching algorithm.
        Verma&apos;s work covered compatibility-graph construction,
        fairness-utility weighting, multi-registry coordination, and the
        simulation of long-term gains from deceased-donor-initiated chains.
      </>
    ),
    output: (
      <>
        <strong className="font-bold text-white">2 journal papers</strong> · 5+
        conference presentations · international fellowship
      </>
    ),
    anchorLabel: "Anchor Theme",
    anchor: (
      <>
        <strong className="font-bold text-white">
          Kidney Exchange Optimisation
        </strong>{" "}
        · Theme 01
      </>
    ),
  },
  {
    status: "PhD Scholar 02 · Ongoing & Published",
    firstName: "Manoj",
    lastName: "Kumar, PhD",
    affiliation:
      "IIT Bombay, Industrial Engineering & Operations Research · supervised by Prof. Narayan Rangaraj & Prof. S. Noronha",
    thesis:
      "Vascular access optimisation and data-driven treatment policies in maintenance hemodialysis",
    summary: (
      <>
        Kumar&apos;s thesis takes the AKC network-level dataset and asks what
        optimal access sequencing, patency-aware prescribing, and prescriptive
        treatment policy would look like when grounded in real cohort data.
        Combined work across two themes (vascular access and treatment policy).
      </>
    ),
    output: (
      <>
        <strong className="font-bold text-white">2 journal papers</strong> · 1
        preprint · 3+ conference presentations ·{" "}
        <em className="italic">ISN award</em>
      </>
    ),
    anchorLabel: "Anchor Themes",
    anchor: (
      <strong className="font-bold text-white">
        Vascular Access + Treatment Policy
      </strong>
    ),
  },
];

const GLOW =
  "radial-gradient(55% 45% at 88% 0%, rgba(13,138,138,0.16) 0%, rgba(0,0,0,0) 65%)";

const DoctoralThesesSection = () => {
  return (
    <section className={cn("relative bg-secondary py-20 lg:py-27.5", GUTTER)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: GLOW }}
      />

      <div className="relative">
        <Eyebrow label="Doctoral Theses" className="text-white" />

        <h2 className="mt-4 mb-4 font-cormorant text-3xl leading-[1.05] font-bold text-white sm:text-4xl lg:text-[52px]">
          Two doctoral scholars.{" "}
          <em className="text-primary-subtle italic">Two theses.</em> One
          dataset.
        </h2>

        <p className="font-roboto text-[15px] leading-[1.7] font-light text-white/75 sm:text-[17px]">
          Beyond the publication record, the collaboration&apos;s deepest
          investment has been in{" "}
          <strong className="font-normal text-white">
            two doctoral scholars at IIT Bombay&apos;s IEOR Department
          </strong>{" "}
          who anchored their PhD theses on research problems drawn from the AKC
          network &mdash;{" "}
          <em className="italic">
            each spending several years working with the data, the clinical
            team, and the operational realities of dialysis at scale.
          </em>
        </p>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          {SCHOLARS.map((scholar) => (
            <ScholarCard key={scholar.firstName} {...scholar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctoralThesesSection;
