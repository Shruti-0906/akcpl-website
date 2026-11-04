import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { cn } from "@/lib";

import { RolePhoto } from "../components";
import {
  CI_BODY,
  CI_TITLE,
  HEADING_EM,
  LABEL_DARK,
  PEOPLE_GUTTER,
} from "../constants";

const S3 = "https://akcpl-assets.s3.ap-south-1.amazonaws.com";

type Role = {
  id: string;
  numeral: string;
  label: string;
  heading: ReactNode;
  standfirst: ReactNode;
  body: ReactNode;
  credHeading: ReactNode;
  credentials: readonly { num: string; text: ReactNode }[];
  standard: ReactNode;
  photo: { src: string; alt: string; tag: string; caption: ReactNode };
};

const ROLES: readonly Role[] = [
  {
    id: "dialysis-professional",
    numeral: "I",
    label: "The Dialysis Professional",
    heading: (
      <>
        The person <em className={HEADING_EM}>at the machine.</em>
      </>
    ),
    standfirst: (
      <>
        The dialysis professional who connects the patient to the machine,
        watches the session, and is the staff member the patient will see most
        often, year after year.
      </>
    ),
    body: (
      <>
        The dialysis professional is the person closest to the patient.{" "}
        <strong>
          They prepare the machine. They cannulate the vascular access. They
          monitor the session in real time. They respond to intra-dialytic
          events before they become emergencies.
        </strong>{" "}
        Over a long-tenure patient&apos;s years on dialysis, the dialysis
        professional is the staff member they will know best.
      </>
    ),
    credHeading: (
      <>
        A formal{" "}
        <em className="font-normal text-primary-subtle italic">
          credential in dialysis technology.
        </em>
      </>
    ),
    credentials: [
      {
        num: "01",
        text: (
          <>
            A{" "}
            <strong className="font-bold text-secondary">
              graduate or diploma qualification in Dialysis Technology
            </strong>{" "}
            &mdash; typically a 2-year B.Voc, B.Sc., or recognised diploma
            programme.
          </>
        ),
      },
      {
        num: "02",
        text: (
          <>
            Graduates of the{" "}
            <strong className="font-bold text-secondary">
              Apex School of Dialysis Technology
            </strong>{" "}
            or equivalent institutions accredited under recognised university or
            skill-council frameworks.
          </>
        ),
      },
      {
        num: "03",
        text: (
          <>
            <strong className="font-bold text-secondary">
              Hands-on clinical training
            </strong>{" "}
            &mdash; minimum six months of supervised practice at an active
            dialysis centre before independent practice.
          </>
        ),
      },
      {
        num: "04",
        text: (
          <>
            <strong className="font-bold text-secondary">
              Basic Life Support (BLS) certification
            </strong>{" "}
            from the American Heart Association or equivalent, refreshed
            periodically.
          </>
        ),
      },
    ],
    standard: (
      <>
        <strong>
          A dialysis professional runs the session under the directives of the
          nephrologist
        </strong>{" "}
        &mdash; but the patient&apos;s experience of every session is mediated
        by them. Their training and temperament are foundational.
      </>
    ),
    photo: {
      src: `${S3}/Sections/our_people+the_roles_S1.jpg`,
      alt: "A dialysis professional at the machine beside a patient during a session",
      tag: "/ Role I · Photograph Region",
      caption: (
        <>
          <em className="font-normal text-primary-light italic">
            The dialysis professional
          </em>{" "}
          &mdash; at the machine, with the patient, throughout the session.
        </>
      ),
    },
  },
  {
    id: "biomedical-engineer",
    numeral: "II",
    label: "The Biomedical Engineer",
    heading: (
      <>
        The professional{" "}
        <em className={HEADING_EM}>the patient never meets.</em>
      </>
    ),
    standfirst: (
      <>
        The engineer who maintains the dialysis machines, treats and tests the
        water, and ensures the equipment behind every session is operating to
        specification.
      </>
    ),
    body: (
      <>
        A dialysis centre is, in the end, a hardware system.{" "}
        <strong>
          The biomedical engineer is the professional responsible for that
          hardware: every dialysis machine on the floor, the reverse osmosis
          water plant in the back, the dialysate distribution loop, the alarm
          systems, the sterilisation cycles, the consumables management.
        </strong>{" "}
        The patient rarely sees them &mdash; but every safe session depends on
        their work.
      </>
    ),
    credHeading: (
      <>
        An engineer with{" "}
        <em className="font-normal text-primary-subtle italic">
          medical device expertise.
        </em>
      </>
    ),
    credentials: [
      {
        num: "01",
        text: (
          <>
            A{" "}
            <strong className="font-bold text-secondary">
              B.E., B.Tech, or Diploma in Biomedical Engineering
            </strong>{" "}
            &mdash; or a closely related engineering discipline with medical
            device specialisation.
          </>
        ),
      },
      {
        num: "02",
        text: (
          <>
            <strong className="font-bold text-secondary">
              Manufacturer-specific training and certifications
            </strong>{" "}
            on dialysis machines from the OEMs whose equipment is deployed in
            the AKC network.
          </>
        ),
      },
      {
        num: "03",
        text: (
          <>
            <strong className="font-bold text-secondary">
              Water treatment expertise
            </strong>{" "}
            &mdash; reverse osmosis system operation, AAMI/ISO water quality
            standards, microbiological and chemical monitoring.
          </>
        ),
      },
      {
        num: "04",
        text: (
          <>
            <strong className="font-bold text-secondary">
              Hands-on field service experience
            </strong>{" "}
            &mdash; with structured maintenance, calibration, and
            emergency-response protocols built into the role.
          </>
        ),
      },
    ],
    standard: (
      <>
        <strong>
          The biomedical engineer&apos;s work is most successful when it is
          invisible.
        </strong>{" "}
        A patient who never thinks about whether the machine is working has been
        served well by an engineer doing their job correctly.
      </>
    ),
    photo: {
      src: `${S3}/Sections/our_people+the_roles_S2.jpg`,
      alt: "A biomedical engineer checking a dialysis machine in front of the RO water plant",
      tag: "/ Role II · Photograph Region",
      caption: (
        <>
          <em className="font-normal text-primary-light italic">
            The biomedical engineer
          </em>{" "}
          &mdash; at the RO plant and the dialysis machine, before either shows
          a problem.
        </>
      ),
    },
  },
];

/**
 * `.role` alternates its ground through `:nth-of-type(even)`, which also swaps
 * the photo and copy columns and drops the credential card to a warm grey. The
 * run opens on white so Role I separates from the tinted `.areas-intro` above.
 */
const RoleSections = () => {
  return (
    <>
      {ROLES.map((role, index) => {
        const flipped = index % 2 === 1;

        return (
          <section
            key={role.id}
            id={role.id}
            className={cn(
              "scroll-mt-20 py-20",
              PEOPLE_GUTTER,
              flipped ? "bg-[#e0f2f9]" : "bg-white",
            )}
          >
            {/* `.role-inner` — 1.2fr / 1fr, both columns aligned to the top. */}
            <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
              {/* `.role-photo { position:sticky; top:120px }` — the copy column
                  scrolls while the photograph holds. Sticky has to live on the
                  grid item so its travel is bounded by the grid area, not by a
                  wrapper shrunk to the figure. */}
              <div
                className={cn(
                  "lg:sticky lg:top-30 lg:self-start",
                  flipped ? "lg:order-2" : "lg:order-1",
                )}
              >
                <RolePhoto {...role.photo} />
              </div>

              <div className={flipped ? "lg:order-1" : "lg:order-2"}>
                {/* `.role-roman` — the numeral trailed by a short teal rule. */}
                <div className="mb-5.5 inline-flex items-center gap-3.5 font-roboto text-5xl leading-none font-bold tracking-[-0.02em] text-black italic">
                  {role.numeral}
                  <span
                    aria-hidden="true"
                    className="h-px w-15 bg-primary-subtle opacity-50"
                  />
                </div>

                <Eyebrow label={role.label} className={LABEL_DARK} />

                <h2 className={cn(CI_TITLE, "mb-4")}>{role.heading}</h2>

                <p className={CI_BODY}>{role.standfirst}</p>
                <p className={CI_BODY}>{role.body}</p>

                {/* `.cred-block` — a 3px teal bar inside a teal hairline card. */}
                <div
                  className={cn(
                    "mb-6 rounded-[2px] border border-l-[3px] border-primary-subtle px-7.5 py-7",
                    flipped ? "bg-white" : "bg-[#f9f9f9]",
                  )}
                >
                  <div className="mb-3 font-roboto text-[10px] font-bold tracking-[0.22em] text-primary-subtle uppercase">
                    Qualifications
                  </div>

                  <h3 className="mb-3.5 font-roboto text-[18px] leading-[1.25] font-bold tracking-[-0.008em] text-secondary">
                    {role.credHeading}
                  </h3>

                  <ul className="flex flex-col">
                    {role.credentials.map((cred) => (
                      <li
                        key={cred.num}
                        className="flex items-start gap-3 border-b border-primary-subtle py-2 last:border-b-0 last:pb-0"
                      >
                        <span className="min-w-8 shrink-0 pt-0.5 font-roboto text-[10.5px] font-bold text-primary-subtle">
                          {cred.num}
                        </span>
                        <span className="flex-1 font-roboto text-[14.5px] leading-[1.6] text-[#2A2A2A]">
                          {cred.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* `.mod-callout` */}
                <div className="my-9 rounded-[0_2px_2px_0] border-l-2 border-primary-subtle bg-[rgba(14,124,123,0.06)] px-7.5 py-6.5">
                  <Eyebrow label="The Standard" className={LABEL_DARK} />
                  <p className={cn(CI_BODY, "mb-0")}>{role.standard}</p>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default RoleSections;
