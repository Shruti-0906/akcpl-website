import { cn } from "@/lib";

import { TrustLabel } from "../components";

const governance = [
  [
    "i.",
    "Clinical Governance Protocols",
    "AKC's validated protocols and documented standards reduce trustee exposure to clinical governance risk — with everything auditable and traceable.",
  ],
  [
    "ii.",
    "Quarterly Outcome Reports",
    "Board-ready quarterly reports on adequacy, mortality, hospitalisations, infections, and patient satisfaction. Trustees walk into board meetings prepared.",
  ],
  [
    "iii.",
    "Annual Donor Reporting",
    "A polished annual outcome publication suitable for donor circulation, public release, and trust's own communications — produced by AKC, branded by the trust.",
  ],
  [
    "iv.",
    "Audit-Ready Operations",
    "Documentation, processes, and data structured for statutory audit, NABH renewal, tax-authority scrutiny, and donor due diligence — all of it.",
  ],
  [
    "v.",
    "Mission Preservation Clauses",
    "Formal partnership agreements include explicit mission-preservation language — protecting the trust's character from operational drift over time.",
  ],
  [
    "vi.",
    "Independent Quality Audits",
    "The trust may commission independent external clinical audits of AKC's operations at the trust's centre — on its own schedule, at AKC's cost.",
  ],
] as const;

const GovernanceSection = () => (
  <section
    id="trust-governance"
    className="relative bg-secondary py-22 md:py-32.5"
  >
    <div className="mx-auto px-6 sm:px-10 lg:px-14.5">
      <TrustLabel light>For Trustees &amp; Boards</TrustLabel>
      <h2
        className={cn(
          "mb-4 font-cormorant text-[clamp(36px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black [&_em]:text-primary-subtle [&_em]:italic",
          "text-white",
          "[&_br]:hidden md:[&_br]:inline",
        )}
      >
        The governance, reporting, and accountability
        <br />
        <em>your role demands.</em>
      </h2>
      <p
        className={cn(
          "mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-bold [&_strong]:text-secondary",
          "text-white/50",
        )}
      >
        Trustees carry real personal and fiduciary responsibility for the
        centres they oversee. AKC&apos;s partnership architecture is designed
        not just to elevate clinical work, but to{" "}
        <em>materially reduce the operational and reputational risk</em>{" "}
        trustees carry on a trust&apos;s behalf.
      </p>
      <div
        className={cn(
          "mt-16 grid grid-cols-1 gap-px border border-[#002944] bg-[#002944] md:grid-cols-3",
          "mt-18",
        )}
      >
        {governance.map(([number, title, text]) => (
          <div
            key={title}
            className="min-w-0 bg-white px-8 py-9 even:bg-[#e9f7fd] [&_h3]:mb-3 [&_h3]:font-roboto [&_h3]:text-xl [&_h3]:leading-[1.2] [&_h3]:font-bold [&_h3]:text-black [&_p]:font-roboto [&_p]:text-[14.5px] [&_p]:leading-[1.65] [&_p]:font-normal [&_p]:text-[#393f42] [&_p_strong]:text-secondary [&>div]:mb-3.5 [&>div]:font-roboto [&>div]:text-2xl [&>div]:leading-[normal] [&>div]:font-light [&>div]:text-black [&>div]:italic"
          >
            <div>{number}</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GovernanceSection;
