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

type Pillar = {
  numeral: string;
  marker: string;
  eyebrow: string;
  title: ReactNode;
  paragraphs: ReactNode[];
  offerLabel: string;
  offerItems: ReactNode[];
};

const STRONG = "font-bold";
const ITEM_STRONG = "font-bold text-secondary";

export const PILLARS: readonly Pillar[] = [
  {
    numeral: "I",
    marker: "Pillar One",
    eyebrow: "The Unreplicable Asset",
    title: (
      <>
        Founder-Clinician <em className={HEADING_EM}>Credibility</em>
      </>
    ),
    paragraphs: [
      <>
        Eighteen years of standing in Indian nephrology, four founding
        clinicians from Mumbai&apos;s most respected hospitals, 85+ collective
        indexed publications. Capital cannot accelerate this; only time and
        quality can.
      </>,
      <>
        The single hardest thing to manufacture in Indian healthcare is the
        clinical credibility that earns the trust of{" "}
        <strong className={STRONG}>
          nephrologists, hospitals, patients, and regulators
        </strong>{" "}
        simultaneously. AKC has it because its founders earned it personally,
        over careers spent at Bombay Hospital, Nanavati Max, and Hiranandani
        &mdash; and then spent eighteen years extending it into an institution.
      </>,
      <>
        Competitors with capital can build centres. They cannot manufacture the
        trust that decides which centre a senior consultant refers her patients
        to.
      </>,
    ],
    offerLabel: "The credibility, evidenced",
    offerItems: [
      <>
        <strong className={ITEM_STRONG}>Founder clinicians</strong> from Bombay
        Hospital, Max Nanavati, Dr. L H Hiranandani and Sushrut Hospital
      </>,
      <>
        <strong className={ITEM_STRONG}>
          85+ collective indexed publications
        </strong>
        , FRCP Edinburgh, ISN Education Ambassador roles
      </>,
      <>
        <strong className={ITEM_STRONG}>18 years</strong> of operational and
        clinical track record
      </>,
      <>
        <strong className={ITEM_STRONG}>Inbound referral networks</strong> from
        Mumbai&apos;s senior medical community
      </>,
    ],
  },
  {
    numeral: "II",
    marker: "Pillar Two",
    eyebrow: "The Professional Asset",
    title: (
      <>
        Professional <em className={HEADING_EM}>Leadership</em>
      </>
    ),
    paragraphs: [
      <>
        A company built by professionals, for a clinical business. Nephrology
        expertise, operational discipline and management experience sit at the
        centre of every decision &mdash; from how centres are designed to how
        care is delivered.
      </>,
      <>
        Dialysis is not a business where financial scale alone creates
        advantage. Clinical judgement, experienced leadership and disciplined
        execution determine outcomes. Apex brings these capabilities together
        under one organisation, aligning clinical priorities with operational
        rigour.
      </>,
      <>
        The result is a company that understands both sides of the equation: the
        complexity of patient care and the realities of running a high-quality
        dialysis network. Decisions are made with professional accountability,
        not just commercial logic.
      </>,
    ],
    offerLabel: "Professional depth, evidenced",
    offerItems: [
      <>
        <strong className={ITEM_STRONG}>Clinician-informed leadership</strong>{" "}
        &mdash; clinical priorities embedded into operational and strategic
        decision-making
      </>,
      <>
        <strong className={ITEM_STRONG}>
          Experienced management discipline
        </strong>{" "}
        &mdash; structured processes, accountability and performance management
        across the organisation
      </>,
      <>
        <strong className={ITEM_STRONG}>
          Patient-first operating philosophy
        </strong>{" "}
        &mdash; decisions designed around quality, safety and continuity of care
      </>,
      <>
        <strong className={ITEM_STRONG}>Institutional knowledge</strong> &mdash;
        professionals building systems and capabilities that compound with every
        centre, every team and every year
      </>,
    ],
  },
  {
    numeral: "III",
    marker: "Pillar Three",
    eyebrow: "The Compounding Asset",
    title: (
      <>
        Operational <em className={HEADING_EM}>Scale</em>
      </>
    ),
    paragraphs: [
      <>
        Two hundred centres, ten states, eighteen years of running them.
        Procurement scale, technician training infrastructure, accreditation
        muscle &mdash; each of which gets stronger with every centre added.
      </>,
      <>
        Dialysis is, fundamentally, an{" "}
        <strong className={STRONG}>
          operational business with clinical stakes.
        </strong>{" "}
        The economics turn on procurement, technician productivity, machine
        uptime, water purity, and centre utilisation &mdash; all of which
        scale-led operators do better than independents.
      </>,
      <>
        AKC&apos;s unit economics are not theoretical; they are stress-tested
        across two hundred centres and a decade of practice. A new centre
        activated in 2026 inherits everything the network has learned since
        2007.
      </>,
    ],
    offerLabel: "The scale, evidenced",
    offerItems: [
      <>
        <strong className={ITEM_STRONG}>250+ centres</strong> across 14 states
        &mdash; the largest single-specialty nephrology network in India
      </>,
      <>
        <strong className={ITEM_STRONG}>Network-scale procurement</strong> on
        dialysers, tubing sets, EPO, iron, machines
      </>,
      <>
        <strong className={ITEM_STRONG}>
          Centralised technician training and certification
        </strong>{" "}
        programme
      </>,
      <>
        <strong className={ITEM_STRONG}>Mature SOPs</strong> for every aspect of
        unit operation, NABH-accreditation-ready
      </>,
    ],
  },
  {
    numeral: "IV",
    marker: "Pillar Four",
    eyebrow: "The Increasing-Returns Asset",
    title: (
      <>
        Data &amp; <em className={HEADING_EM}>Technology</em>
      </>
    ),
    paragraphs: [
      <>
        The Axis EHR, the Indian Renal Data System, the IIT Bombay operational
        research collaboration. These create increasing-returns moats &mdash;
        the platform becomes more valuable with every centre and every patient
        added.
      </>,
      <>
        AKC has spent years building what no other Indian renal organisation
        has: a{" "}
        <strong className={STRONG}>
          nephrology-native technology and data layer.
        </strong>{" "}
        The Axis EHR captures every session, every adequacy measure, every
        intervention. The Indian Renal Data System (IRDS) aggregates this into
        India&apos;s first comprehensive renal registry.
      </>,
      <>
        The IIT Bombay collaboration brings operational research and AI/ML
        capability that is genuinely rare in Indian healthcare.{" "}
        <em className="italic">
          The data asset compounds; the moat deepens; the optionality grows.
        </em>
      </>,
    ],
    offerLabel: "The platform, evidenced",
    offerItems: [
      <>
        <strong className={ITEM_STRONG}>
          Axis &mdash; AKC&apos;s nephrology-native EHR
        </strong>
        , deployed across the network
      </>,
      <>
        <strong className={ITEM_STRONG}>
          The Indian Renal Data System (IRDS)
        </strong>{" "}
        &mdash; the country&apos;s first comprehensive renal registry
      </>,
      <>
        <strong className={ITEM_STRONG}>IIT Bombay collaboration</strong> on
        operational research and AI/ML in dialysis
      </>,
      <>
        <strong className={ITEM_STRONG}>Optionality</strong> on technology
        licensing, research-data monetisation, and clinical-trial site
        infrastructure
      </>,
    ],
  },
  {
    numeral: "V",
    marker: "Pillar Five",
    eyebrow: "The Trust Asset",
    title: (
      <>
        Brand &amp; Patient <em className={HEADING_EM}>Trust</em>
      </>
    ),
    paragraphs: [
      <>
        A chronic-disease patient on dialysis is making a decade-long decision.
        Brand is what decides which network they make it with &mdash; and
        AKC&apos;s brand has been built over eighteen years of consistent
        quality.
      </>,
      <>
        Dialysis patients do not switch easily. The relationship is long, the
        trust is irreplaceable, and the family decides for the patient as much
        as the patient does.{" "}
        <strong className={STRONG}>
          Brand, in this category, is patient lifetime value compounded.
        </strong>
      </>,
      <>
        AKC&apos;s brand carries trust signals that newer entrants cannot
        manufacture: relationships with insurers and corporates, a recognised
        standard of quality, referral patterns from senior physicians, and the
        institutional credibility of founders who are still actively running the
        company.
      </>,
    ],
    offerLabel: "The brand, evidenced",
    offerItems: [
      <>
        <strong className={ITEM_STRONG}>Eighteen years</strong> of patient trust
        built across 250+ centres
      </>,
      <>
        <strong className={ITEM_STRONG}>
          Established insurance, CGHS, ECHS empanelment
        </strong>
        , and corporate tie-ups
      </>,
      <>
        <strong className={ITEM_STRONG}>NABH-aligned operations</strong> across
        the network
      </>,
      <>
        <strong className={ITEM_STRONG}>High patient retention</strong> and
        inherited family-network referral
      </>,
    ],
  },
  {
    numeral: "VI",
    marker: "Pillar Six",
    eyebrow: "The Cultural Asset",
    title: (
      <>
        Mission as <em className={HEADING_EM}>Moat</em>
      </>
    ),
    paragraphs: [
      <>
        The single most under-appreciated source of defensibility in healthcare
        is the kind of institution mission attracts and retains the kind of
        clinicians and operators others cannot.
      </>,
      <>
        AKC&apos;s mission &mdash;{" "}
        <em className="italic">
          &quot;to make a therapeutic impact in the universe of kidney
          disease&quot;
        </em>{" "}
        &mdash; is not marketing. It is the reason senior nephrologists who
        could earn more elsewhere choose AKC. It is the reason operators stay
        through the unglamorous decades. It is what makes the institution worth
        building, and worth building well.
      </>,
      <>
        <strong className={STRONG}>Just capital cannot replicate this.</strong>{" "}
        A competitor with money can buy machines, lease centres, and hire
        technicians. They cannot manufacture the twenty-year culture that
        produces an institution. Mission, in this category, is structural
        advantage.
      </>,
    ],
    offerLabel: "The mission, evidenced",
    offerItems: [
      <>
        <strong className={ITEM_STRONG}>IRDS as public infrastructure</strong>{" "}
        &mdash; the data system is being built for the country, not just for AKC
      </>,
      <>
        <strong className={ITEM_STRONG}>Talent retention</strong> at rates
        uncommon in Indian healthcare
      </>,
    ],
  },
] as const;

/** Alternating white and pale blue bands, `.area` / `.area-alt`. */
const PillarChapter = ({
  pillar,
  index,
}: {
  pillar: Pillar;
  index: number;
}) => {
  const isAlt = index % 2 === 1;

  return (
    <section
      className={cn(
        SECTION_BASE,
        "py-[110px]",
        isAlt ? "bg-[#e0f2f9]" : "bg-white",
      )}
    >
      <div className={GUTTER}>
        <div className="grid items-start gap-12 lg:grid-cols-[140px_1fr]">
          <div className="self-start lg:sticky lg:top-30">
            <p className="font-roboto text-[88px] leading-[0.85] font-light text-black italic">
              {pillar.numeral}
            </p>
            <span
              aria-hidden="true"
              className="mt-4.5 ml-1 block h-px w-[34px] bg-primary-subtle"
            />
            <span className="mt-4 ml-1 block font-roboto text-[10.5px] font-bold tracking-[0.24em] text-black uppercase">
              {pillar.marker}
            </span>
          </div>

          <div>
            <Eyebrow label={pillar.eyebrow} className={LABEL_DARK} />
            <h2 className={CI_TITLE}>{pillar.title}</h2>

            {pillar.paragraphs.map((paragraph, i) => (
              <p key={i} className={CI_BODY}>
                {paragraph}
              </p>
            ))}

            <div className="relative mt-9 rounded-[2px] border-l-2 border-l-primary-subtle bg-[rgba(14,124,123,0.06)] px-9 py-8">
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-[3px] bg-primary-subtle"
              />
              <p className="mb-4.5 font-roboto text-lg font-bold tracking-[0.05em] text-secondary-light uppercase">
                {pillar.offerLabel}
              </p>
              <ul className="flex flex-col gap-3.5">
                {pillar.offerItems.map((item, i) => (
                  <li
                    key={i}
                    className="relative ml-5 list-disc pl-[5px] font-roboto text-[17px] leading-[1.6] text-[#393f42]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute top-2 -left-[18px] size-2 rotate-45 bg-primary-subtle"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarChapter;
