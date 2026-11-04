import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const GLANCE: readonly { label: string; value: ReactNode }[] = [
  {
    label: "Eligibility",
    value: (
      <>
        <strong className="font-bold text-secondary">
          12<sup>th</sup> Pass (Science stream)
        </strong>{" "}
        for the Diploma. <em className="italic">GNM B.Sc. Nursing</em> for the
        dialysis nursing specialisation.
      </>
    ),
  },
  {
    label: "Duration",
    value: (
      <>
        Approximately{" "}
        <strong className="font-bold text-secondary">2 years</strong> for the
        diploma programme, with structured classroom and clinical phases.
      </>
    ),
  },
  {
    label: "Affiliations",
    value: (
      <>
        <strong className="font-bold text-secondary">TISS</strong> (academic)
        and <strong className="font-bold text-secondary">MSBSVET</strong> (state
        vocational) &mdash; both formally recognised credentials.
      </>
    ),
  },
  {
    label: "Location",
    value: (
      <>
        <strong className="font-bold text-secondary">Mumbai</strong>, with
        clinical practicum across the AKC network.
      </>
    ),
  },
  {
    label: "Selection",
    value: (
      <>
        Written assessment + aptitude interview + medical fitness.{" "}
        <em className="italic">Need-based scholarships available.</em>
      </>
    ),
  },
  {
    label: "Placement",
    value: (
      <>
        Structured placement support into AKC&rsquo;s network and partner
        institutions on graduation.
      </>
    ),
  },
];

const AdmissionsSection = () => (
  <section id="apply" className={cn("relative bg-secondary py-32.5", GUTTER)}>
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <Eyebrow
          label="Admissions"
          className="mb-5 text-[14px] font-normal text-white"
        />

        <h2 className="mb-4 font-cormorant text-[clamp(30px,4.4vw,50px)] leading-[1.05] font-bold tracking-[-0.015em] text-white">
          Apply for{" "}
          <em className="text-primary-subtle italic">the next intake.</em>
        </h2>

        <p className="mb-8 font-roboto text-[17px] leading-[22px] font-light text-[rgba(251,248,243,0.72)]">
          Applications are accepted on a rolling basis through the academic
          year, with structured intakes for the diploma programme. The
          application process includes a written test, an aptitude interview,
          and a medical fitness assessment.{" "}
          <em className="italic">
            Need-based scholarships are available for eligible candidates.
          </em>
        </p>

        <div className="mt-4.5 flex flex-col flex-wrap gap-4.5 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded border border-primary-subtle bg-primary-subtle px-8 py-4 font-roboto text-sm font-bold tracking-[0.04em] text-white hover:border-primary-light hover:bg-primary-light"
          >
            Apply for admission
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/ASDT+-+Brochure+(Admissions+Section).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded border border-white px-8 py-4 font-roboto text-sm font-bold tracking-[0.04em] text-white hover:border-primary-light hover:text-primary-light"
          >
            Download brochure
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="relative rounded-xs bg-white px-9 py-10">
        <Eyebrow
          label="Admission At-a-Glance"
          className="mb-5 text-[14px] font-normal text-black"
        />

        <h3 className="mb-4 font-cormorant text-[28px] leading-[1.05] font-bold tracking-[-0.015em] text-black sm:text-[36px]">
          What to <em className="text-primary-subtle italic">expect.</em>
        </h3>

        <ul className="flex list-none flex-col">
          {GLANCE.map((row) => (
            <li
              key={row.label}
              className="grid items-start gap-4.5 border-b border-[#ccc] py-3.5 last:border-b-0 sm:grid-cols-[130px_1fr]"
            >
              <p className="pt-0.5 font-roboto text-[12px] leading-normal font-bold tracking-[0.18em] text-black uppercase">
                {row.label}
              </p>
              <p className="font-roboto text-[15px] leading-[1.6] text-[#2A2A2A]">
                {row.value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AdmissionsSection;
