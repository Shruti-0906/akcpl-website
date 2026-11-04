import Image from "next/image";
import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { cn } from "@/lib";

import {
  CI_BODY,
  CI_TITLE,
  HEADING_EM,
  HOSPITAL_GUTTER,
  LABEL_DARK,
} from "../constants";

type Choice = {
  tag: string;
  title: string;
  body: ReactNode;
  /** `.choice-tag` is black on the first card, teal on the other two. */
  tagClass: string;
  cardClass: string;
};

const CHOICES: readonly Choice[] = [
  {
    tag: "Option One",
    title: "Build your own.",
    tagClass: "text-black",
    cardClass: "bg-[#d1f1ff]",
    body: (
      <>
        <strong className="font-bold text-secondary">
          Capital-intensive, operationally complex, hard to staff.
        </strong>{" "}
        Machines, water plant, accreditation, technician hiring, vascular access
        programme, QA &mdash; three years of building before you have what AKC
        delivers on day one.
      </>
    ),
  },
  {
    tag: "Option Two",
    title: "Refer patients out.",
    tagClass: "text-primary-subtle",
    cardClass: "bg-white",
    body: (
      <>
        <strong className="font-bold text-secondary">
          Clinically clean &mdash; but you lose them.
        </strong>{" "}
        Once a patient is on dialysis at another centre three times a week, that
        centre owns the longitudinal relationship. Their family&apos;s other
        care often follows.
      </>
    ),
  },
  {
    tag: "Option Three",
    title: "Partner well.",
    tagClass: "text-primary-subtle",
    cardClass: "bg-[#d1f1ff]",
    body: (
      <>
        <strong className="font-bold text-secondary">
          Bring a specialised dialysis institution inside your hospital.
        </strong>{" "}
        The clinical, operational, and capital burden stays with the partner.
        The patient and the relationship stay with you.{" "}
        <em className="italic">
          If &mdash; and only if &mdash; the partner is the right one.
        </em>
      </>
    ),
  },
];

const HospitalChallengeSection = () => {
  return (
    <section
      id="hospital-challenge"
      className={cn("scroll-mt-20 bg-white py-15", HOSPITAL_GUTTER)}
    >
      {/* `.corevalues` — 1.5fr copy / 1fr image */}
      <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        <div className="mb-10 lg:mb-15">
          <Eyebrow
            label="The Quiet Problem Most Hospitals Have"
            className={LABEL_DARK}
          />

          <h2 className={cn(CI_TITLE, "mb-4")}>
            You serve CKD patients.
            <br />
            <em className={HEADING_EM}>
              But where do they go
              <br className="hidden lg:inline" /> when they need dialysis?
            </em>
          </h2>

          <p className={CI_BODY}>
            Every multi-specialty hospital in India serves chronic kidney
            disease patients &mdash; as outpatients, as cardiac comorbidities,
            as diabetics.{" "}
            {/* `.ci-body` declares no `strong` rule, so this is bold at the
                inherited #393f42 rather than navy. */}
            <strong className="font-bold">
              What most hospitals do not have is a specialised dialysis unit
              good enough to keep those patients
            </strong>{" "}
            when they progress to end-stage renal disease. The choice is usually
            between three uncomfortable options.
          </p>
        </div>

        <div className="w-full self-start overflow-hidden">
          <Image
            src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Hospitals+-+Hospital+Challenge+Section.jpg"
            alt="The Quiet Problem Most Hospitals Have"
            width={800}
            height={534}
            sizes="(min-width: 1024px) 34rem, 100vw"
            className="h-auto w-full"
            priority
          />
        </div>
      </div>

      {/* `.choices` */}
      <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CHOICES.map((choice) => (
          <article
            key={choice.tag}
            className={cn(
              // `.choice-1/2/3` each carry a 3px teal cap; the `1px solid
              // var(--rule)` border in the reference never renders, as --rule
              // is used throughout its stylesheet but never defined.
              "rounded-[2px] border-t-[3px] border-primary-subtle px-8 py-9",
              "hover:-translate-y-[3px]",
              choice.cardClass,
            )}
          >
            <div
              className={cn(
                "mb-3.5 font-roboto text-sm leading-[normal] font-bold tracking-[0.22em] uppercase",
                choice.tagClass,
              )}
            >
              {choice.tag}
            </div>
            <div className="mb-3.5 font-roboto text-[22px] leading-[1.2] font-bold tracking-[-0.005em] text-secondary">
              {choice.title}
            </div>
            <p className="font-roboto text-[17px] leading-[1.65] text-[#393f42]">
              {choice.body}
            </p>
          </article>
        ))}
      </div>

      {/* `.diagnosis-conclusion` */}
      <div className="rounded-[0_2px_2px_0] border-l-[3px] border-primary-subtle bg-white px-9 py-8 font-roboto text-[21px] leading-[1.5] tracking-[-0.005em] text-secondary italic">
        AKC exists, in part, to be{" "}
        <strong className="font-bold text-primary-subtle not-italic">
          the right partner.
        </strong>{" "}
        250 centres, ten states, eighteen years. The operational playbook is
        mature. The clinical standard is audited. The institutional
        infrastructure is built. What remains is to see if there is a fit
        between your hospital and ours.
      </div>
    </section>
  );
};

export default HospitalChallengeSection;
