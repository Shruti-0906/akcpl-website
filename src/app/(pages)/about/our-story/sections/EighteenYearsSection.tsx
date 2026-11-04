import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import CentreGrowthChart from "../components/CentreGrowthChart";

const Accent = ({ children }: { children: ReactNode }) => (
  <span className="text-primary-subtle italic">{children}</span>
);

const Strong = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold">{children}</strong>
);

type Milestone = {
  year: ReactNode;
  era: string;
  label: string;
  title: ReactNode;
  body: ReactNode;
  note?: string;
};

const MILESTONES: readonly Milestone[] = [
  {
    year: "2008",
    era: "// The Beginning",
    label: "First Dialysis · 15 August",
    title: (
      <>
        The first <Accent>AKC dialysis session.</Accent>
      </>
    ),
    body: (
      <>
        The first dialysis session is delivered on{" "}
        <Strong>15 August 2008 (Independence Day)</Strong> at the founding AKC
        centres in Mulund and Malad. The institution is registered in 2007 and
        operational on 15 August the following year -{" "}
        <em>a date the founders chose deliberately.</em> Apex Kidney Foundation,
        the charitable trust arm, is established alongside.
      </>
    ),
    note: "2 centres · Mumbai only",
  },
  {
    year: "2010",
    era: "// First Year of Academia",
    label: "ApEx Pathshala Founded",
    title: (
      <>
        The first <Accent>ApEx Pathshala</Accent> nephrologist CME.
      </>
    ),
    body: (
      <>
        Within two years of operating, AKC launches{" "}
        <Strong>
          ApEx Pathshala - a structured CME programme for nephrologists
        </Strong>
        . A four-day residential course, run under the Apex Academia umbrella.
        The founding view: a clinical institution that doesn&apos;t teach
        doesn&apos;t last.
      </>
    ),
  },
  {
    year: "2011",
    era: "// Academic Foundation",
    label: "Two Academic Institutions Founded",
    title: (
      <>
        <Accent>ASTRA</Accent> and the{" "}
        <Accent>Apex School of Dialysis Technology.</Accent>
      </>
    ),
    body: (
      <>
        <Strong>
          Two foundational institutions are launched in the same year.
        </Strong>{" "}
        ASTRA - the Apex Swap Transplant Registry - becomes India&apos;s first
        mathematically-optimised paired kidney exchange registry. The Apex
        School of Dialysis Technology opens to train India&apos;s dialysis
        workforce.{" "}
        <em>
          Together, the academic and educational arms of AKC are now in place.
        </em>
      </>
    ),
  },
  {
    year: "2015",
    era: "// First Domino Transplant",
    label: "ASTRA Milestone",
    title: (
      <>
        The first multi-hospital <Accent>domino kidney transplant.</Accent>
      </>
    ),
    body: (
      <>
        ASTRA coordinates the{" "}
        <Strong>
          first documented multi-hospital domino transplant in India - a
          five-pair chain across four hospitals in two cities.
        </Strong>{" "}
        The proof of concept that paired exchange could scale beyond a single
        institution.
      </>
    ),
  },
  {
    year: "2017",
    era: "// Continued Expansion",
    label: "Geographic Build",
    title: (
      <>
        Goa, Delhi, Gujarat - <Accent>new geographies open.</Accent>
      </>
    ),
    body: (
      <>
        New states come online.{" "}
        <Strong>
          Goa builds out as a near-complete state grid (21 centres)
        </Strong>
        . Delhi adds nine centres. Gujarat begins with hospital-based units.
        Smaller footprints open in Rajasthan, Haryana, Uttar Pradesh, Punjab,
        Uttarakhand, and Bihar.
      </>
    ),
  },
  {
    year: "2017",
    era: "// IIT Bombay Collaboration",
    label: "Academic Partnership",
    title: (
      <>
        The formal <Accent>IIT Bombay × AKC</Accent> research collaboration
        begins.
      </>
    ),
    body: (
      <>
        What started as informal exchange becomes a{" "}
        <Strong>
          structured academic-clinical collaboration with IIT Bombay&apos;s IEOR
          Department
        </Strong>
        . Two doctoral scholars anchor their PhD theses on AKC data. The
        collaboration produces publications across kidney exchange, vascular
        access, and treatment policy.
      </>
    ),
  },
  {
    year: "2020",
    era: "// Pandemic Response",
    label: "Project Victory · May 2020",
    title: (
      <>
        <Accent>Project Victory</Accent> - citywide pandemic coordination.
      </>
    ),
    body: (
      <>
        In the depths of the COVID-19 pandemic, AKC convenes a coalition with{" "}
        <Strong>
          IIT Bombay, the Mumbai Nephrology Group, and the Municipal Corporation
          of Greater Mumbai (MCGM)
        </Strong>{" "}
        to build a <em>real-time citywide dialysis-allocation portal</em>. The
        system enrolls 1,418 COVID-positive end-stage kidney disease patients
        and secures dialysis slots for 97% of them within 48 hours.{" "}
        <Strong>
          India&apos;s most impactful dialysis-coordination initiative of the
          pandemic.
        </Strong>
      </>
    ),
    note: "23 COVID-positive centres · 1,418 patients enrolled",
  },
  {
    year: "2021",
    era: "// First State PPP",
    label: "Madhya Pradesh Partnership",
    title: (
      <>
        The <Accent>Madhya Pradesh</Accent> public-private partnership.
      </>
    ),
    body: (
      <>
        AKC enters a{" "}
        <Strong>
          large-scale partnership with the Madhya Pradesh state government
        </Strong>{" "}
        - opening dialysis centres in district-level towns across the state. The
        largest single-state PPP build in AKC&apos;s history. The MP partnership
        eventually scales to{" "}
        <em>more than 70 centres across 50+ district towns</em>, providing free
        dialysis to eligible patients.
      </>
    ),
    note: "70 PPP centres · 50+ MP district towns",
  },
  {
    year: "2022",
    era: "// Publication Milestone",
    label: "Indian J Nephrology",
    title: (
      <>
        Project Victory paper is <Accent>peer-reviewed and published.</Accent>
      </>
    ),
    body: (
      <>
        The Project Victory work is published as an{" "}
        <Strong>Original Article in the Indian Journal of Nephrology</Strong>.
        The published account of citywide dialysis coordination becomes a
        reference document for pandemic-response literature internationally.
      </>
    ),
  },
  {
    year: "2022",
    era: "// Second State PPP",
    label: "Telangana Partnership",
    title: (
      <>
        The <Accent>Telangana</Accent> public-private partnership.
      </>
    ),
    body: (
      <>
        A second large state PPP begins - this time with{" "}
        <Strong>the Telangana state government</Strong>. The build covers nearly
        46 centres in distinct towns across the state, with each centre
        operating as a free public dialysis facility under AKC&apos;s clinical
        standards.
      </>
    ),
    note: "46 PPP centres · Telangana district network",
  },
  {
    year: "2023",
    era: "// First Institutional Capital",
    label: "Tata Capital Healthcare Fund",
    title: (
      <>
        <Accent>Tata Capital</Accent> invests - the network begins to scale.
      </>
    ),
    body: (
      <>
        The{" "}
        <Strong>
          Tata Capital Healthcare Fund makes its institutional investment in AKC
        </Strong>{" "}
        - validating the clinical model and unlocking the first phase of
        national expansion. Governance structures are formalised. Professional
        management is brought in.{" "}
        <em>The expansion from Mumbai to multiple states begins.</em>
      </>
    ),
  },
  {
    year: "2025",
    era: "// Second Institutional Capital",
    label: "Blue Earth Capital",
    title: (
      <>
        <Accent>Blue Earth Capital</Accent> joins as global impact investor.
      </>
    ),
    body: (
      <>
        Global impact investor <Strong>Blue Earth Capital</Strong> joins the AKC
        investor base. The partnership introduces an explicit impact-investing
        framework alongside the existing Tata Capital relationship -{" "}
        <em>
          aligning financial returns with measurable social impact across the
          network.
        </em>
      </>
    ),
  },
  {
    year: <em>2026</em>,
    era: "// Eighteen Years In",
    label: "Today",
    title: (
      <>
        Eighteen years on - <Accent>the institution today.</Accent>
      </>
    ),
    body: (
      <>
        <Strong>
          More than 250 active dialysis centres across 14 Indian states
        </Strong>
        . Over 1,850 Coworkers across clinical, technical, and administrative
        roles.{" "}
        <Strong>
          More than 6.2 million dialysis sessions delivered to date.
        </Strong>{" "}
        An academic body of work anchoring kidney exchange, pandemic response,
        vascular access, home hemodialysis, and treatment policy research.{" "}
        <em>
          The conversation that began in Nagpur, in 2003, has built one of
          India&apos;s most distinctive nephrology institutions.
        </em>
      </>
    ),
    note: "250+ centres · 14 states · 1,850+ Coworkers · 62,00,000+ sessions",
  },
];

const EighteenYearsSection = () => {
  return (
    <section
      id="eighteen-years"
      className={cn("bg-[#E0F2F9] py-12 lg:py-16", GUTTER)}
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
        {/* top-16 mirrors the section's lg:py-16, so it pins the moment the section top is reached */}
        <div className="flex flex-col gap-8 lg:sticky lg:top-16">
          <div className="flex flex-col gap-5">
            <Eyebrow label="The Eighteen Years" />
            <h2 className="section-heading text-black">
              From two centres in Mumbai{" "}
              <span className="text-primary-subtle italic">
                to a national network.
              </span>
            </h2>
            <p className="font-roboto text-sm leading-relaxed text-black sm:text-base">
              The eighteen years between 2008 and 2026 tell a story of patient
              growth first, then institutional building, then the addition of
              academic and educational arms, then the entry of institutional
              capital, and finally the public-health-scale expansion that
              defines AKC today. The major moments, in order.
            </p>
          </div>

          <CentreGrowthChart />
        </div>

        <ol className="relative flex flex-col">
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-5 w-px -translate-x-1/2 bg-secondary/25"
          />

          {MILESTONES.map((milestone) => (
            <li key={milestone.label} className="relative flex pb-6">
              <div aria-hidden="true" className="relative w-10 shrink-0">
                <span className="absolute top-7 left-1/2 size-4 -translate-x-1/2 rounded-full border-2 border-tertiary bg-tertiary-subtle" />
              </div>

              <article className="flex flex-1 flex-col gap-4 border border-primary/40 bg-white/10 p-5 sm:flex-row sm:gap-6 lg:p-6">
                <div className="shrink-0 sm:w-28">
                  <p className="font-roboto text-3xl leading-none font-bold text-tertiary sm:text-4xl">
                    {milestone.year}
                  </p>
                  <p className="mt-1.5 font-roboto text-[0.65rem] font-semibold tracking-wider text-tertiary uppercase">
                    {milestone.era}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Eyebrow
                    label={milestone.label}
                    className="font-medium text-black/70"
                  />
                  <h3 className="font-cormorant text-xl leading-snug font-bold text-secondary sm:text-2xl">
                    {milestone.title}
                  </h3>
                  <p className="font-roboto text-sm leading-tight text-black/80 sm:text-base">
                    {milestone.body}
                  </p>
                  {milestone.note && (
                    <p className="font-roboto text-[0.7rem] text-black/55">
                      {milestone.note}
                    </p>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default EighteenYearsSection;
