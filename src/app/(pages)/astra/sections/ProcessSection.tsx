import { GUTTER } from "@/constants";

const STEPS = [
  {
    num: "i",
    name: (
      <>
        Workup &amp;{" "}
        <em className="font-normal text-primary-subtle italic">Confirmation</em>
      </>
    ),
    text: (
      <>
        The patient&apos;s primary nephrologist completes the full transplant
        workup and confirms{" "}
        <strong className="font-bold text-secondary">
          medical and legal suitability
        </strong>{" "}
        of both the patient and the willing family donor.
      </>
    ),
  },
  {
    num: "ii",
    name: (
      <>
        Registration{" "}
        <em className="font-normal text-primary-subtle italic">via ASTRA</em>
      </>
    ),
    text: (
      <>
        The primary nephrologist contacts the ASTRA{" "}
        <strong className="font-bold text-secondary">database manager</strong>{" "}
        to register the donor-recipient pair, with full clinical and
        immunological details captured in the registry.
      </>
    ),
  },
  {
    num: "iii",
    name: (
      <>
        Algorithmic{" "}
        <em className="font-normal text-primary-subtle italic">Matching</em>
      </>
    ),
    text: (
      <>
        ASTRA periodically scans the registry. The matching algorithm runs
        across all currently-registered pairs to identify{" "}
        <strong className="font-bold text-secondary">
          potential binary swaps and domino chains
        </strong>{" "}
        that maximise both fairness and graft quality.
      </>
    ),
  },
  {
    num: "iv",
    name: (
      <>
        Match{" "}
        <em className="font-normal text-primary-subtle italic">Confirmation</em>
      </>
    ),
    text: (
      <>
        When matches are identified, the primary nephrologists involved are
        contacted to{" "}
        <strong className="font-bold text-secondary">
          handover the matched pairs
        </strong>{" "}
        — reviewing the proposed swap and confirming clinical agreement.
      </>
    ),
  },
  {
    num: "v",
    name: (
      <>
        Hospital{" "}
        <em className="font-normal text-primary-subtle italic">Coordination</em>
      </>
    ),
    text: (
      <>
        In a domino arrangement, primary nephrologists coordinate{" "}
        <strong className="font-bold text-secondary">
          across multiple hospitals
        </strong>{" "}
        to procure authorisation, schedule simultaneous theatres, and manage
        logistics for donor and recipient transport.
      </>
    ),
  },
  {
    num: "vi",
    name: (
      <>
        Simultaneous{" "}
        <em className="font-normal text-primary-subtle italic">Transplants</em>
      </>
    ),
    text: (
      <>
        All transplants in the chain are{" "}
        <strong className="font-bold text-secondary">
          performed on the same day, at the same time,
        </strong>{" "}
        in the participating hospitals — ensuring no donor in the chain can
        withdraw after another has given.
      </>
    ),
  },
] as const;

const ProcessSection = () => (
  <section className={`bg-[#e0f2f9] py-16 lg:py-32.5 ${GUTTER}`}>
    <div className="mb-14">
      <div className="mb-5 flex items-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
        <span className="h-px w-6 bg-black" />
        The Patient Journey
      </div>

      <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
        How a registered pair{" "}
        <span className="text-primary-subtle italic">
          becomes a transplant.
        </span>
      </h2>

      <p className="mt-5 font-roboto text-[17px] leading-relaxed text-[#393f42]">
        From the moment a primary nephrologist identifies an incompatible
        donor-recipient pair to the moment of simultaneous surgery in two
        hospitals, ASTRA orchestrates a{" "}
        <strong className="font-bold text-secondary">
          structured, documented, multi-stakeholder process.
        </strong>{" "}
        The patient and family interact with their own treating nephrologist;
        ASTRA operates in the background as the registry, matcher, and
        coordinator.
      </p>
    </div>

    <div className="flex flex-col gap-3.5">
      {STEPS.map((step) => (
        <div
          key={step.num}
          className="grid grid-cols-1 items-center gap-4 rounded-sm border-l-[3px] border-primary-subtle bg-white px-7 py-6 lg:grid-cols-[64px_1fr_2fr] lg:gap-8"
        >
          <div className="text-center font-roboto text-[42px] leading-none font-light tracking-[-0.02em] text-primary-subtle italic">
            {step.num}
          </div>
          <div className="font-cormorant text-xl leading-tight font-bold tracking-[-0.005em] text-secondary">
            {step.name}
          </div>
          <p className="font-roboto text-[14.5px] leading-relaxed text-[#2A2A2A]">
            {step.text}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default ProcessSection;
