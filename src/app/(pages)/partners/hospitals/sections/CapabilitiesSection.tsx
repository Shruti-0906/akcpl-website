import { Eyebrow } from "@/components";
import { cn } from "@/lib";

import {
  CI_BODY,
  CI_TITLE,
  EM_BRIGHT,
  HOSPITAL_GUTTER,
  LABEL_LIGHT,
} from "../constants";

type Capability = {
  numeral: string;
  title: string;
  body: string;
};

const CAPABILITIES: readonly Capability[] = [
  {
    numeral: "i.",
    title: "Clinical Leadership",
    body: "A founding-clinician network and a curated bench of nephrology consultants — covering your unit, supervising protocols, available for complex cases.",
  },
  {
    numeral: "ii.",
    title: "The Operational Playbook",
    body: "Eighteen years of running 250 centres distilled into SOPs for every aspect of unit operation — from scheduling to crash management to NABH audit readiness.",
  },
  {
    numeral: "iii.",
    title: "Axis — Nephrology EHR",
    body: "AKC's purpose-built electronic health record. Every session captured, every measure tracked, every audit instantly possible. Audit-ready from day one.",
  },
  {
    numeral: "iv.",
    title: "The Indian Renal Data System",
    body: "Your unit's patients become part of India's first comprehensive renal registry — contributing to research, policy, and benchmarking against the network.",
  },
  {
    numeral: "v.",
    title: "QA & Accreditation Support",
    body: "NABH-ready operations, ISO-aligned QA, structured water testing, equipment audits, and accreditation documentation — handled.",
  },
  {
    numeral: "vi.",
    title: "Dialysis Simplified",
    body: "“Dialysis Simplified” brings together leading experts and practicing dialysis professionals through insightful lectures and case-based discussions, fostering knowledge-sharing, clinical learning, and research.",
  },
  {
    numeral: "vii.",
    title: "The AKC Brand",
    body: "Eighteen years of patient trust, regulator relationships, insurance empanelment, and corporate tie-ups — flowing into the renal service your hospital now offers.",
  },
];

/** `.apparatus::before` — two soft radial washes over the navy. */
const WASH =
  "bg-[radial-gradient(ellipse_55%_50%_at_88%_12%,rgba(14,124,123,0.15)_0%,transparent_60%),radial-gradient(ellipse_50%_45%_at_8%_90%,rgba(229,192,123,0.1)_0%,transparent_60%)]";

const CapabilitiesSection = () => {
  return (
    <section
      id="what-akc-brings"
      className={cn(
        "relative scroll-mt-20 overflow-hidden bg-secondary py-[130px]",
        HOSPITAL_GUTTER,
      )}
    >
      <div
        aria-hidden="true"
        className={cn("pointer-events-none absolute inset-0", WASH)}
      />

      <div className="relative z-[2]">
        <div className="mb-18">
          <Eyebrow
            label="What AKC Brings to the Table"
            className={LABEL_LIGHT}
          />

          <h2 className={cn(CI_TITLE, "mb-4 text-white")}>
            Eighteen years of institutional building &mdash;
            <br />
            <em className={EM_BRIGHT}>delivered inside your hospital.</em>
          </h2>

          <p className={cn(CI_BODY, "text-white/65")}>
            Whichever partnership model you choose, what you gain access to is
            not a vendor &mdash; it is an{" "}
            <em className="text-[#00b3ff] italic">institution.</em> Below is the
            apparatus that comes with every AKC partnership.
          </p>
        </div>

        {/* `.app-grid` — 1px gutters showing the #002944 backing through */}
        <div className="grid gap-px border border-[#002944] bg-[#002944] sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((capability, index) => (
            <article
              key={capability.numeral}
              className={cn(
                "px-7 py-8",
                index % 2 === 1 ? "bg-[#e9f7fd]" : "bg-white",
              )}
            >
              <div
                aria-hidden="true"
                className="mb-3.5 font-roboto text-[22px] leading-[normal] font-light text-black italic"
              >
                {capability.numeral}
              </div>

              <h3 className="mb-2.5 font-roboto text-xl leading-[1.2] font-bold tracking-[-0.005em] text-black">
                {capability.title}
              </h3>

              <p className="font-roboto text-[14.5px] leading-[1.65] text-[#393f42]">
                {capability.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
