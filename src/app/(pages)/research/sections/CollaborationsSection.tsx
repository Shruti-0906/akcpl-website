import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

type Partner = {
  role: string;
  lead: string;
  name: string;
  subtitle: ReactNode;
  body: ReactNode;
  meta: string;
};

const STRONG = "font-bold text-black";

const PARTNERS: readonly Partner[] = [
  {
    role: "Primary Academic Partner",
    lead: "IIT Bombay",
    name: "IEOR Department",
    subtitle: (
      <>
        Industrial Engineering &amp; Operations Research · faculty lead:{" "}
        <strong className={STRONG}>Prof. Narayan Rangaraj</strong>
      </>
    ),
    body: (
      <>
        Home to{" "}
        <strong className={STRONG}>
          both doctoral scholars working on AKC data
        </strong>{" "}
        and the institutional anchor for most of the published
        operations-research output. The relationship has run continuously since
        2011 and remains the largest source of AKC&apos;s research throughput.
      </>
    ),
    meta: "7 publications · 2 PhD theses",
  },
  {
    role: "Engineering & Methodology Partner",
    lead: "IIT Bombay",
    name: "Chemical Engineering",
    subtitle: (
      <>
        Faculty &amp; methodology contributor ·{" "}
        <strong className={STRONG}>Prof. S. Noronha</strong>
      </>
    ),
    body: (
      <>
        Methodological partner on the vascular access and treatment-policy
        research streams &mdash; contributing systems-engineering perspectives
        to the joint work and{" "}
        <strong className={STRONG}>
          co-leading the Project Victory technical architecture.
        </strong>
      </>
    ),
    meta: "3+ joint publications · Project Victory technical lead",
  },
  {
    role: "Pandemic Response Coalition",
    lead: "Mumbai",
    name: "Nephrology Group",
    subtitle: (
      <>
        Independent nephrologist coalition · clinical co-authors on Project
        Victory
      </>
    ),
    body: (
      <>
        The nephrology community that joined the Project Victory citywide
        coalition in 2020 &mdash; contributing clinical case data, real-time
        slot allocation, and co-authorship on the{" "}
        <em className="text-tertiary italic">Indian J Nephrology paper</em>{" "}
        documenting the work.
      </>
    ),
    meta: "1 peer-reviewed paper · 174-centre coalition",
  },
  {
    role: "Public-Health Authority Partner",
    lead: "Municipal Corporation",
    name: "of Greater Mumbai",
    subtitle: <>MCGM · municipal public-health authority of Mumbai metro</>,
    body: (
      <>
        Public-health partner on Project Victory &mdash; designated{" "}
        <strong className={STRONG}>
          23 COVID-positive hemodialysis facilities
        </strong>{" "}
        and provided the institutional umbrella for the citywide coordination
        that enabled the published outcomes paper.
      </>
    ),
    meta: "1 peer-reviewed paper · 174 dialysis centres covered",
  },
];

const CollaborationsSection = () => {
  return (
    <section
      id="collaborations"
      className={cn("scroll-mt-33 bg-secondary py-20 lg:py-27.5", GUTTER)}
    >
      <Eyebrow label="Academic Collaborations" className="text-white" />

      <h2 className="mt-4 mb-4 font-cormorant text-3xl leading-[1.05] font-bold text-white sm:text-4xl lg:text-[52px]">
        Research{" "}
        <em className="text-primary-subtle italic">
          partners and institutional anchors.
        </em>
      </h2>

      <p className="font-roboto text-[15px] leading-[1.7] font-light text-white/75 sm:text-[17px]">
        AKC&apos;s research output is the work of{" "}
        <strong className="font-normal text-white">
          clinical-academic partnerships
        </strong>{" "}
        &mdash; not of either side alone. The institutions and roles below have
        anchored the body of work.
      </p>

      <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
        {PARTNERS.map((partner) => (
          /* Each card is white with a gold rule along the top edge. */
          <article
            key={partner.name}
            className="flex flex-col border-t-2 border-tertiary bg-white p-7 sm:p-9"
          >
            <p className="font-roboto text-[10px] font-bold tracking-[0.18em] text-tertiary uppercase">
              {partner.role}
            </p>

            <h3 className="mt-4 font-roboto text-xl font-bold text-black sm:text-[22px]">
              <em className="font-normal text-tertiary italic">
                {partner.lead}
              </em>{" "}
              {partner.name}
            </h3>

            <p className="mt-3 font-roboto text-[14px] leading-[1.6] text-[#393f42] italic">
              {partner.subtitle}
            </p>

            <p className="mt-5 font-roboto text-[15px] leading-[1.7] text-[#393f42]">
              {partner.body}
            </p>

            <p className="mt-auto pt-8 font-roboto text-[12px] text-primary-subtle">
              {partner.meta}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CollaborationsSection;
