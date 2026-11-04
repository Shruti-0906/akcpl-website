import Image from "next/image";
import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { cn } from "@/lib";

import {
  CI_BODY,
  CI_TITLE,
  HEADING_EM,
  LABEL_DARK,
  LABEL_INLINE,
  PEOPLE_GUTTER,
} from "../constants";

const S3 = "https://akcpl-assets.s3.ap-south-1.amazonaws.com";

type Standard = {
  num: string;
  name: ReactNode;
  text: string;
};

const EM_INHERIT = "font-normal italic";

const STANDARDS: readonly Standard[] = [
  {
    num: "01",
    name: (
      <>
        Clinical <em className={EM_INHERIT}>Practice</em>
      </>
    ),
    text: "Adequacy of treatment, vascular access management, anaemia and bone-mineral disease protocols, clinical documentation.",
  },
  {
    num: "02",
    name: (
      <>
        Infection <em className={EM_INHERIT}>Control</em>
      </>
    ),
    text: "Aseptic technique, dialyser reuse protocols, viral status protocols, biomedical waste disposal, hand hygiene compliance.",
  },
  {
    num: "03",
    name: (
      <>
        Water <em className={EM_INHERIT}>Quality</em>
      </>
    ),
    text: "RO plant operation, daily readings of TDS, endotoxin, microbiological tests, dialysate composition, AAMI/ISO standards.",
  },
  {
    num: "04",
    name: (
      <>
        Staff <em className={EM_INHERIT}>Credentials</em>
      </>
    ),
    text: "Qualifications, training records, BLS/ACLS currency, manufacturer certifications for biomedical engineers, ongoing CME.",
  },
  {
    num: "05",
    name: (
      <>
        Patient <em className={EM_INHERIT}>Rights</em>
      </>
    ),
    text: "Informed consent, dignity in care, grievance handling, transparency on treatment plan, family communication standards.",
  },
  {
    num: "06",
    name: (
      <>
        Equipment <em className={EM_INHERIT}>&amp; Maintenance</em>
      </>
    ),
    text: "Preventive maintenance schedules, calibration logs, equipment lifecycle management, alarm response protocols.",
  },
  {
    num: "07",
    name: (
      <>
        Documentation <em className={EM_INHERIT}>Discipline</em>
      </>
    ),
    text: "Per-session records, medication administration, intra-dialytic events, audit trails, EMR completeness.",
  },
  {
    num: "08",
    name: (
      <>
        Emergency <em className={EM_INHERIT}>Preparedness</em>
      </>
    ),
    text: "Code response protocols, fire and electrical safety, backup power, water supply contingency, emergency drills.",
  },
];

const NabhSection = () => {
  return (
    <section
      id="nabh"
      className={cn(
        "relative scroll-mt-20 bg-[#e0f2f9] py-16 lg:py-32.5",
        PEOPLE_GUTTER,
      )}
    >
      {/* `.nabh-header` */}
      <div className="mx-auto mb-16 text-center">
        <Eyebrow
          label="The Third-Party Validation"
          className={cn(LABEL_DARK, LABEL_INLINE)}
        />

        <h2 className={cn(CI_TITLE, "mb-6")}>
          NABH accreditation.{" "}
          <em className={HEADING_EM}>Audited. Documented. Earned.</em>
        </h2>

        <p className={cn(CI_BODY, "mb-0")}>
          Internal training and protocols are necessary.{" "}
          <strong>
            Third-party accreditation is what makes them externally verifiable.
          </strong>{" "}
          AKC pursues accreditation from the{" "}
          <em className="italic">
            National Accreditation Board for Hospitals &amp; Healthcare
            Providers (NABH)
          </em>{" "}
          &mdash; India&apos;s official healthcare-quality accreditation body
          &mdash; across centres where the framework applies.
        </p>
      </div>

      {/* `.nabh-main` — the seal beside the explanation, under a teal cap. */}
      <div className="mb-8 grid items-center gap-10 rounded-[2px] border border-t-[3px] border-primary-subtle border-t-primary-subtle bg-white px-8 py-10 lg:grid-cols-[auto_1fr] lg:gap-16 lg:px-14 lg:py-14">
        <Image
          src={`${S3}/Sections/Our+People+NABH.png`}
          alt="NABH Accredited"
          width={300}
          height={300}
          sizes="300px"
          className="h-auto w-[300px] max-w-full"
        />

        <div>
          <Eyebrow
            label="What NABH Accreditation Means"
            className={LABEL_DARK}
          />

          <h3 className={cn(CI_TITLE, "mb-5 text-[28px]")}>
            A third party comes in{" "}
            <em className={HEADING_EM}>and audits everything.</em>
          </h3>

          <p className={CI_BODY}>
            NABH accreditation is not a self-declaration.{" "}
            <strong>It is a formal audit</strong> conducted by trained external
            assessors against a documented national standard for healthcare
            quality &mdash; covering clinical practice, infection control, water
            quality, staff credentials, documentation discipline, patient
            safety, biomedical waste management, and patient rights.
          </p>

          <p className={cn(CI_BODY, "mb-0")}>
            The figures NABH audits are the same figures the{" "}
            <em className="italic">Axis QA Dashboard monitors continuously.</em>{" "}
            The credentials NABH inspects are the same credentials this page
            describes.{" "}
            <strong>
              Accreditation is the moment the internal standard becomes
              externally verified.
            </strong>
          </p>
        </div>
      </div>

      {/* `.nabh-standards` */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STANDARDS.map((standard, index) => (
          <article
            key={standard.num}
            className={cn(
              "rounded-[2px] border border-l-[3px] border-primary-subtle px-5.5 py-6",
              index % 2 === 1 ? "bg-[#e9f7fd]" : "bg-white",
            )}
          >
            <div className="mb-2.5 font-roboto text-[12px] font-bold text-[#00b3ff]">
              {standard.num}
            </div>
            <h4 className="mb-2 font-roboto text-[18px] leading-[1.3] font-bold tracking-[-0.005em] text-secondary">
              {standard.name}
            </h4>
            <p className="font-roboto text-[15px] leading-[1.55] text-[#393f42]">
              {standard.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NabhSection;
