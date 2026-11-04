import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { cn } from "@/lib";

import {
  CI_BODY,
  CI_TITLE,
  HEADING_EM,
  LABEL_DARK,
  PEOPLE_GUTTER,
} from "../constants";

type Programme = {
  label: string;
  name: ReactNode;
  text: ReactNode;
  audience: string;
  cadence: string;
};

const PROGRAMMES: readonly Programme[] = [
  {
    label: "01 · CME",
    name: (
      <>
        <em className={HEADING_EM}>Dialysis Simplified</em> · Nephrology CME
      </>
    ),
    text: (
      <>
        <strong>
          AKC&apos;s annual continuing medical education programme for dialysis
          professionals
        </strong>
        , run under the Apex Academia umbrella &mdash; bringing the
        network&apos;s technicians and nurses together on current evidence in
        adequacy, anaemia, vascular access, and intra-dialytic management.
      </>
    ),
    audience: "For dialysis professionals",
    cadence: "annual",
  },
  {
    label: "02 · In-House",
    name: (
      <>
        <em className={HEADING_EM}>Centre-Level</em> Education Programmes
      </>
    ),
    text: (
      <>
        <strong>
          Monthly clinical updates, case reviews, and protocol training
        </strong>{" "}
        at the centre and regional level &mdash; covering adequacy, anaemia,
        infection control, machine handling, water quality, and evolving best
        practice for technicians and nurses.
      </>
    ),
    audience: "For all centres",
    cadence: "monthly",
  },
  {
    label: "03 · Certifications",
    name: (
      <>
        Refresher <em className={HEADING_EM}>Certifications</em>
      </>
    ),
    text: (
      <>
        <strong>BLS and ACLS recertification</strong> on defined cycles.
        Manufacturer-specific machine recertifications when equipment is
        updated. Periodic NABH-aligned refreshers on infection control,
        biomedical waste, and patient safety.
      </>
    ),
    audience: "For all clinical staff",
    cadence: "periodic",
  },
];

const ContinuousEducationSection = () => {
  return (
    <section
      id="continuous-education"
      className={cn("relative bg-white py-16 lg:py-32.5", PEOPLE_GUTTER)}
    >
      {/* `.cont-header` */}
      <div className="mb-16">
        <Eyebrow label="Continuous Education" className={LABEL_DARK} />

        <h2 className={cn(CI_TITLE, "mb-6")}>
          Training doesn&apos;t end at graduation.{" "}
          <em className={HEADING_EM}>It continues for the career.</em>
        </h2>

        <p className={cn(CI_BODY, "mb-0 max-w-[760px]")}>
          Dialysis is a moving field. Protocols change, equipment evolves, and
          the evidence base on adequacy, anaemia, and access is continuously
          being updated.{" "}
          <strong>
            AKC&apos;s workforce undergoes continuous structured education
            throughout their tenure
          </strong>{" "}
          &mdash; not as a compliance requirement, but as the working assumption
          of a professional clinical career.
        </p>
      </div>

      {/* `.cont-grid` */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROGRAMMES.map((programme, index) => (
          <article
            key={programme.label}
            className={cn(
              "relative flex flex-col rounded-[2px] border border-t-2 border-primary-subtle border-t-primary-subtle px-8 py-9",
              "transition-[transform,box-shadow] duration-250 hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(14,37,64,0.06)]",
              index % 2 === 1 ? "bg-[#e9f7fd]" : "bg-white",
            )}
          >
            <Eyebrow
              label={programme.label}
              className={cn(LABEL_DARK, "mb-4")}
            />

            <h3 className={cn(CI_TITLE, "mb-3.5 text-[24px]")}>
              {programme.name}
            </h3>

            <p className={cn(CI_BODY, "mb-5 flex-1")}>{programme.text}</p>

            {/* `.cont-card-foot` */}
            <div className="mt-auto border-t border-primary-subtle pt-3.5 font-roboto text-[10.5px] text-[#00b3ff]">
              {programme.audience}{" "}
              <span className="text-primary-subtle">·</span> {programme.cadence}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ContinuousEducationSection;
