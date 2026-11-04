import Image from "next/image";

import { Eyebrow } from "@/components/ui";
import { GUTTER } from "@/constants";

const VALUES = [
  "Integrity",
  "Accuracy",
  "Impartiality",
  "Confidentiality",
  "Accountability",
  "Respect",
  "Safety",
  "Continuous improvement",
] as const;

const QualitySection = () => (
  <section className={`bg-secondary py-16 lg:py-32.5 ${GUTTER}`}>
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[2fr_1fr]">
      <div>
        <Eyebrow label="Quality & Accreditation" className="text-white" />
        <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-white">
          NABL-accredited.
        </h2>
        <p className="mt-6 font-roboto text-[17px] leading-[1.78] text-white/70">
          AKCPL is accredited by the{" "}
          <strong className="font-bold">
            National Accreditation Board for Testing and Calibration
            Laboratories (NABL)
          </strong>{" "}
          — certificate <em className="italic">MC-7466</em>. NABL accreditation
          requires demonstrated adherence to{" "}
          <strong className="font-bold">ISO 15189 standards</strong> covering
          technical competence, quality management, traceability, and result
          reliability.
        </p>
        <p className="mt-6 font-roboto text-[17px] leading-[1.78] text-white/70">
          Beyond the accreditation, AKCPL operates a{" "}
          <em className="italic">Code of Conduct</em> built on eight values that
          the team is held to every day. These are the principles the laboratory
          was set up on, and they govern every interaction — from a
          patient&apos;s first sample collection to the nephrologist receiving
          the result.
        </p>

        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3.5 sm:grid-cols-3">
          {VALUES.map((value) => (
            <li
              key={value}
              className="relative ml-5 pl-1.5 font-roboto text-[17px] leading-[1.6] text-white/70"
            >
              <span
                aria-hidden="true"
                className="absolute top-2 -left-4.5 size-2 rotate-45 bg-primary-subtle"
              />
              {value}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center p-8">
        <Image
          src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/logos/NABL+Logo.png"
          alt="NABL accredited, certificate MC-7466"
          width={350}
          height={434}
          className="h-auto w-full max-w-95"
        />
        <p className="mt-4 font-roboto text-xl font-bold tracking-[0.08em] text-white">
          MC-7466
        </p>
        <a
          href="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/NABL+CERTIFICATE.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 font-roboto text-sm text-white/80 underline underline-offset-4 transition hover:text-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
        >
          View certificate <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </section>
);

export default QualitySection;
