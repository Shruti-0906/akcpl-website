import Image from "next/image";

import { Eyebrow } from "@/components";
import { cn } from "@/lib";

import {
  CI_BODY,
  CI_TITLE,
  HEADING_EM,
  LABEL_DARK,
  PEOPLE_GUTTER,
} from "../constants";

const S3 = "https://akcpl-assets.s3.ap-south-1.amazonaws.com";

const PremiseSection = () => {
  return (
    <section
      id="premise"
      className={cn("relative overflow-hidden bg-white py-16 lg:py-32.5")}
    >
      {/* `.premise::before` — teal and gold corner wash over the white ground. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_92%_12%,rgba(14,124,123,0.18)_0%,transparent_60%),radial-gradient(ellipse_45%_40%_at_8%_88%,rgba(184,134,11,0.1)_0%,transparent_60%)]"
      />

      {/* `.prem-grid` — 1fr copy / 1.15fr copy, both aligned to the top. */}
      <div
        className={cn(
          "relative z-[2] grid items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20",
          PEOPLE_GUTTER,
        )}
      >
        <div>
          <Eyebrow label="The Premise" className={LABEL_DARK} />

          <h2 className={cn(CI_TITLE, "mb-9")}>
            Professional roles.{" "}
            <em className={HEADING_EM}>One trained discipline.</em>
          </h2>

          <Image
            src={`${S3}/Sections/Our+People_The+Premise.jpg`}
            alt="AKC clinical staff at work on a dialysis treatment floor"
            width={900}
            height={600}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-auto w-full"
          />
        </div>

        <div>
          <p className={CI_BODY}>
            A dialysis centre runs on the coordinated work of three
            professionals: <strong>the dialysis technician</strong> who connects
            the patient to the machine and watches the session moment by moment;{" "}
            <strong>the dialysis nurse</strong> who manages clinical events,
            escalations, and medication;{" "}
            <strong>the biomedical engineer</strong> who keeps the dialysis
            machines and the RO water plant within specification.
          </p>

          <p className={CI_BODY}>
            Each role demands a specific qualification, a specific training
            pathway, and years of hands-on practice before a person can be fully
            entrusted with their part of the work. AKC treats this as a{" "}
            <em className="italic">
              professional standard, not a hiring preference
            </em>{" "}
            &mdash; the credentials are documented, the training is structured,
            and the continuous education continues throughout each
            professional&apos;s career on the network.
          </p>

          {/* `.area-offer` — a 3px teal bar reading over the faint teal wash. */}
          <div className="mt-9 rounded-[2px] border-l-[3px] border-primary-subtle bg-[rgba(14,124,123,0.06)] px-9 py-8">
            <p className={cn(CI_BODY, "mb-0")}>
              <strong>The patient does not see the years of training.</strong>{" "}
              They see the technician who finds the fistula on the first
              attempt, the nurse who responds correctly to a drop in blood
              pressure, the engineer who has the RO plant working before anyone
              notices it wasn&apos;t.{" "}
              <strong>That invisibility is the proof.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiseSection;
