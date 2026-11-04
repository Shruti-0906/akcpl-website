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

type CollaborationArea = {
  id: string;
  numeral: string;
  marker: string;
  label: string;
  heading: ReactNode;
  paragraphs: readonly ReactNode[];
  offerLabel: string;
  bullets: readonly ReactNode[];
};

const AREAS: readonly CollaborationArea[] = [
  {
    id: "gov",
    numeral: "I",
    marker: "Area One",
    label: "A National Resource",
    heading: (
      <>
        The{" "}
        <em className="text-primary-subtle italic">Indian Renal Data System</em>
      </>
    ),
    paragraphs: [
      <>
        Every major nephrology nation has a national renal registry &mdash;
        USRDS in America, UKRR in Britain, ANZDATA in Australia, ERA in Europe.
        <em className="italic">India does not.</em> AKC has spent years building
        one.
      </>,
      <>
        The Indian Renal Data System (IRDS) is the country&apos;s{" "}
        <strong className="font-bold text-secondary">
          first comprehensive, prospectively collected, multi-centre renal
          registry.
        </strong>{" "}
        It captures dialysis outcomes, CKD progression, transplant tracking,
        vascular access patency, anaemia management, and mortality &mdash;
        structured for clinical research and policy use.
      </>,
      <>
        AKC offers IRDS to the country as a civic asset. The data infrastructure
        was built inside AKC, but the <em className="italic">purpose</em> has
        always been national. We invite government agencies &mdash; ICMR, the
        Ministry of Health and Family Welfare, NITI Aayog, state health
        departments &mdash; to use it for the policy work it was built to
        support.
      </>,
    ],
    offerLabel: "What partnership on IRDS can look like",
    bullets: [
      <>
        <strong className="font-bold text-secondary">
          Evidence base for national renal policy
        </strong>{" "}
        &mdash; prevalence, incidence, outcomes, geographic and demographic
        distribution
      </>,
      <>
        <strong className="font-bold text-secondary">
          National benchmark for quality
        </strong>{" "}
        &mdash; adequacy, mortality, hospitalisation, access patency across
        centres and regions
      </>,
      <>
        <strong className="font-bold text-secondary">
          Government-sponsored research collaboration
        </strong>{" "}
        with ICMR, AIIMS, and other national institutes
      </>,
      <>
        <strong className="font-bold text-secondary">
          Public health surveillance integration
        </strong>{" "}
        with the National NCD Programme
      </>,
      <>
        <strong className="font-bold text-secondary">
          Identification of access gaps
        </strong>{" "}
        &mdash; geographic and demographic underservice mapping
      </>,
      <>
        <strong className="font-bold text-secondary">
          India&apos;s voice in international registries
        </strong>{" "}
        &mdash; ISN, ERA, USRDS comparative datasets
      </>,
    ],
  },
  {
    id: "php",
    numeral: "II",
    marker: "Area Two",
    label: "Scheme Implementation at Scale",
    heading: (
      <>
        Public Health{" "}
        <em className="text-primary-subtle italic">Partnerships</em>
      </>
    ),
    paragraphs: [
      <>
        AKC has experience operating dialysis under government schemes &mdash;
        at the economics of scheme reimbursement, with the quality of an
        institutional network, and at the scale public health demands.
      </>,
      <>
        India&apos;s public schemes &mdash;{" "}
        <strong className="font-bold text-secondary">
          PMJAY / Ayushman Bharat, the National Dialysis Programme, state-level
          schemes, CGHS, ECHS, ESIC
        </strong>{" "}
        &mdash; have made dialysis access dramatically more equitable. But
        scheme implementation only works when the operating partner can deliver
        quality at scheme economics.{" "}
        <em className="italic">
          This is the operational discipline AKC was built for.
        </em>
      </>,
      <>
        We work with state health departments and central agencies to operate
        scheme-funded dialysis units, expand kidney-care infrastructure into
        underserved geographies, and ensure that every scheme patient receives
        care indistinguishable in quality from a private patient at the same
        centre.
      </>,
    ],
    offerLabel: "What partnership on public health can look like",
    bullets: [
      <>
        <strong className="font-bold text-secondary">
          Public-Private Partnerships (PPP)
        </strong>{" "}
        for scheme-funded dialysis units
      </>,
      <>
        <strong className="font-bold text-secondary">
          Operation of National Dialysis Programme centres
        </strong>{" "}
        at district hospitals
      </>,
      <>
        <strong className="font-bold text-secondary">
          PMJAY / Ayushman Bharat empanelment and delivery
        </strong>{" "}
        with audit-ready reporting
      </>,
      <>
        <strong className="font-bold text-secondary">
          State scheme partnerships
        </strong>{" "}
        &mdash; structured for each state&apos;s framework and reimbursement
        model
      </>,
      <>
        <strong className="font-bold text-secondary">
          Tier 2 and tier 3 expansion
        </strong>{" "}
        into geographies with poor existing access
      </>,
      <>
        <strong className="font-bold text-secondary">
          Quality assurance and reporting frameworks
        </strong>{" "}
        built for public-sector accountability
      </>,
    ],
  },
  {
    id: "pa",
    numeral: "III",
    marker: "Area Three",
    label: "Earned Voice, Quietly Offered",
    heading: (
      <>
        Policy <em className="text-primary-subtle italic">Advocacy</em>
      </>
    ),
    paragraphs: [
      <>
        Through its founders, its clinical leadership, and its data, AKC offers
        government an informed, evidence-based voice in shaping Indian renal
        care policy &mdash; without the commercial agenda that compromises most
        industry contributions.
      </>,
      <>
        Indian renal care policy is being actively rewritten &mdash; from
        quality standards for dialysis units, to reimbursement frameworks under
        PMJAY, to the National Organ Transplantation Programme, to NCD
        surveillance integration.{" "}
        <strong className="font-bold text-secondary">
          Each of these conversations benefits from clinical and operational
          voices that have earned the right to speak.
        </strong>
      </>,
      <>
        AKC&apos;s founders &mdash; with 85+ collective publications, positions
        at Bombay Hospital, Nanavati Max, Hiranandani, and faculty roles in
        international nephrology societies &mdash; are available to contribute
        to government committees, evidence consultations, and policy reviews.{" "}
        <em className="italic">
          We bring the clinical view, the operational view, and the data view.
        </em>
      </>,
    ],
    offerLabel: "What partnership on policy can look like",
    bullets: [
      <>
        <strong className="font-bold text-secondary">
          Subject matter experts
        </strong>{" "}
        for government committees on renal care, dialysis, and transplant
      </>,
      <>
        <strong className="font-bold text-secondary">
          Evidence-based policy briefs
        </strong>{" "}
        drawing on IRDS data and operational learning
      </>,
      <>
        <strong className="font-bold text-secondary">
          National quality standards
        </strong>{" "}
        for dialysis units &mdash; adequacy, water purity, vascular access,
        infection control
      </>,
      <>
        <strong className="font-bold text-secondary">
          Reimbursement framework consultation
        </strong>{" "}
        &mdash; understanding the unit economics of quality dialysis at scheme
        rates
      </>,
      <>
        <strong className="font-bold text-secondary">Policy roundtables</strong>{" "}
        hosted by AKC for state and national stakeholders
      </>,
      <>
        <strong className="font-bold text-secondary">
          WHO, ICMR, NITI Aayog
        </strong>{" "}
        consultation participation
      </>,
      <>
        <strong className="font-bold text-secondary">
          Collaborated with EY and NATHEALTH
        </strong>{" "}
        to shape a national Dialysis White Paper, advancing evidence-based
        policy recommendations for better kidney care across India
      </>,
    ],
  },
] as const;

const OFFER_LIST_ITEM =
  "relative ml-5 pl-1.25 font-roboto text-[17px] leading-[1.6] text-[#393f42] marker:text-[#393f42] before:absolute before:top-[9px] before:-left-4.5 before:size-2 before:rotate-45 before:bg-primary-subtle before:content-['']";

const AreaSection = ({
  area,
  alternate,
}: {
  area: CollaborationArea;
  alternate: boolean;
}) => (
  <section
    id={area.id}
    className={cn(
      "scroll-mt-20 py-[110px]",
      GOV_GUTTER,
      alternate ? "bg-[#e0f2f9]" : "bg-white",
    )}
  >
    <div className="grid gap-12 lg:grid-cols-[140px_1fr]">
      <div className="self-start lg:sticky lg:top-30">
        <div className="font-roboto text-[88px] leading-[0.85] font-light text-black italic after:mt-4.5 after:ml-1 after:block after:h-px after:w-8.5 after:bg-primary-subtle after:content-['']">
          {area.numeral}
        </div>
        <div className="mt-4 ml-1 font-roboto text-[10.5px] leading-[1.5] font-bold tracking-[0.24em] text-black uppercase">
          {area.marker}
        </div>
      </div>

      <div>
        <Eyebrow label={area.label} className={LABEL} />
        <h2 className={cn(CI_TITLE, "mb-4")}>{area.heading}</h2>

        {area.paragraphs.map((paragraph, index) => (
          <p key={index} className={CI_BODY}>
            {paragraph}
          </p>
        ))}

        <div className="relative mt-9 overflow-hidden rounded-[2px] border-l-2 border-primary-subtle bg-[rgba(14,124,123,0.06)] px-9 py-8 before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-primary-subtle before:content-['']">
          <h3 className="mb-4.5 font-roboto text-lg leading-[normal] font-bold tracking-[0.05em] text-secondary-light uppercase">
            {area.offerLabel}
          </h3>
          <ul className="flex list-disc flex-col gap-3.5">
            {area.bullets.map((bullet, index) => (
              <li key={index} className={OFFER_LIST_ITEM}>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const CollaborationAreasSection = () => (
  <>
    {AREAS.map((area, index) => (
      <AreaSection key={area.id} area={area} alternate={index % 2 === 1} />
    ))}
  </>
);

export default CollaborationAreasSection;
