import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import PracticeCard, { type Practice } from "../components/PracticeCard";

const CITE = "font-normal text-primary-subtle italic";
const STRONG = "font-bold text-black";

const PRACTICES: readonly Practice[] = [
  {
    numeral: "01",
    name: (
      <>
        Comprehensive <em className={CITE}>Patient Consent</em>
      </>
    ),
    text: (
      <>
        A detailed, documented informed-consent process.{" "}
        <strong className={STRONG}>
          The patient and family understand the modality, the risks, and the
          protocols
        </strong>{" "}
        before the first session.
      </>
    ),
  },
  {
    numeral: "02",
    name: (
      <>
        Structured <em className={CITE}>Patient Education</em>
      </>
    ),
    text: (
      <>
        Standardised, modular education for the patient and primary caregiver
        by covering machine operation, warning signs, escalation pathways,
        and routine session conduct.
      </>
    ),
  },
  {
    numeral: "03",
    name: (
      <>
        Primary <em className={CITE}>Nephrologist Counselling</em>
      </>
    ),
    text: (
      <>
        The patient&apos;s primary nephrologist remains involved through
        structured counselling sessions by{" "}
        <strong className={STRONG}>not delegated to ancillary staff.</strong>
      </>
    ),
  },
  {
    numeral: "04",
    name: (
      <>
        Trained &amp; ACLS-Certified{" "}
        <em className={CITE}>Dialysis Professionals</em>
      </>
    ),
    text: (
      <>
        Every dialysis professional running a home session is{" "}
        <strong className={STRONG}>
          credentialed, trained, and ACLS-certified
        </strong>{" "}
        by ready to respond to a clinical emergency.
      </>
    ),
  },
  {
    numeral: "05",
    name: (
      <>
        Detailed <em className={CITE}>Session Documentation</em>
      </>
    ),
    text: (
      <>
        Every session is recorded with full clinical depth in the Axis EMR
        by just like an in-centre session.{" "}
        <strong className={STRONG}>
          The home is not a documentation blind-spot.
        </strong>
      </>
    ),
  },
  {
    numeral: "06",
    name: (
      <>
        Periodic <em className={CITE}>Physician Home Visits</em>
      </>
    ),
    text: (
      <>
        The dialysis physician visits the patient&apos;s home periodically
        by checking environment, equipment, technique, and the
        patient&apos;s overall clinical trajectory.
      </>
    ),
  },
  {
    numeral: "07",
    name: (
      <>
        Professional <em className={CITE}>Indemnity Insurance</em>
      </>
    ),
    text: (
      <>
        Each home HD case is covered by professional indemnity insurance by
        closing the medico-legal exposure that worries the broader nephrology
        community.
      </>
    ),
  },
  {
    numeral: "●",
    name: (
      <>
        The <em className={CITE}>Net Result</em>
      </>
    ),
    text: (
      <>
        <strong className={STRONG}>Zero medico-legal cases</strong> on AKC or
        its primary nephrologists across{" "}
        <em className="italic">13+ years and 81,849 home dialysis sessions.</em>
      </>
    ),
  },
];

/** Two soft washes over the navy, teal from the top right and gold bottom left. */
const GLOW =
  "radial-gradient(60% 50% at 92% 8%, rgba(14,124,123,0.22) 0%, rgba(0,0,0,0) 60%), radial-gradient(50% 45% at 6% 92%, rgba(184,134,11,0.1) 0%, rgba(0,0,0,0) 60%)";

const RiskFrameworkSection = () => {
  return (
    <section className={cn("relative bg-secondary py-20 lg:py-12.5", GUTTER)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: GLOW }}
      />

      <div className="relative">
        <div className="mb-16">
          <Eyebrow
            label="The Risk-Mitigation Framework"
            className="text-white"
          />

          <h2 className="mt-5 mb-4 font-cormorant text-3xl leading-[1.05] font-bold tracking-[-0.015em] text-white sm:text-4xl lg:text-[52px]">
            Seven practices.{" "}
            <em className="text-primary-subtle italic">One safety record.</em>
          </h2>

          <p className="font-roboto text-[15px] leading-relaxed font-light text-[#fbf8f3]/72 sm:text-[17px] sm:leading-5.5">
            Zero medico-legal cases across thirteen years and 81,000 sessions is
            not an accident. It is the product of{" "}
            <strong className="font-normal">
              a structured framework AKC has refined over years of practice
            </strong>{" "}
            by covering consent, training, documentation, supervision, and
            insurance. Each element addresses a specific category of risk.{" "}
            <em className="italic">
              The framework is replicable, transferable, and the foundation of
              every home HD set-up we operate.
            </em>
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRACTICES.map((practice, index) => (
            <PracticeCard
              key={practice.numeral}
              {...practice}
              tinted={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiskFrameworkSection;
