import { GUTTER } from "@/constants";

const POLICIES = [
  {
    num: "i",
    name: (
      <>
        Recognise{" "}
        <em className="font-normal text-[#00b3ff] italic">
          second-degree relatives
        </em>{" "}
        as eligible donors
      </>
    ),
    text: "Just as is done for direct transplants — expanding the family donor pool dramatically.",
  },
  {
    num: "ii",
    name: (
      <>
        <em className="font-normal text-[#00b3ff] italic">Single-point</em>{" "}
        authorisation, not duplicated reviews
      </>
    ),
    text: "Interviewing and review should occur once at the government level, not at each hospital in the chain.",
  },
  {
    num: "iii",
    name: (
      <>
        Define{" "}
        <em className="font-normal text-[#00b3ff] italic">
          &quot;domino&quot;
        </em>{" "}
        in the regulatory framework
      </>
    ),
    text: "Paired exchange can be binary or multi-pair. The rules need to acknowledge both formats explicitly.",
  },
  {
    num: "iv",
    name: (
      <>
        Time-bound{" "}
        <em className="font-normal text-[#00b3ff] italic">permission grants</em>
      </>
    ),
    text: "Authorities must approve or formally explain rejection within a fixed window — not let applications drift.",
  },
  {
    num: "v",
    name: (
      <>
        A{" "}
        <em className="font-normal text-[#00b3ff] italic">
          centralised national registry
        </em>
      </>
    ),
    text: "All swap pairs routed through one registry, eliminating fragmented private mini-registries.",
  },
  {
    num: "vi",
    name: (
      <>
        Standardised{" "}
        <em className="font-normal text-[#00b3ff] italic">
          inter-hospital billing
        </em>
      </>
    ),
    text: "A central directive to amicably resolve cost differences between hospitals in a swap arrangement.",
  },
  {
    num: "vii",
    name: (
      <>
        <em className="font-normal text-[#00b3ff] italic">Update DDT</em>{" "}
        waitlist registration forms
      </>
    ),
    text: "Ask every applicant whether an incompatible family donor exists — revealing ~10% of waitlist patients as immediate swap candidates.",
  },
  {
    num: "viii",
    name: (
      <>
        <em className="font-normal text-[#00b3ff] italic">
          Reasonable refusal
        </em>{" "}
        rules
      </>
    ),
    text: "Patients may decline a match for clinical reasons — but unreasonable demands like religion-matching should disqualify them.",
  },
  {
    num: "ix",
    name: (
      <>
        <em className="font-normal text-[#00b3ff] italic">ABOi transplants</em>{" "}
        via the swap registry first
      </>
    ),
    text: "Register an ABO-incompatible case in the swap registry first; only proceed to ABOi after a defined waiting window.",
  },
  {
    num: "x",
    name: (
      <>
        <em className="font-normal text-[#00b3ff] italic">Incentivise</em>{" "}
        swap-performing hospitals
      </>
    ),
    text: "Just as deceased-donor retrieval earns hospitals brownie points — swap transplants should too.",
  },
] as const;

const PolicySection = () => (
  <section className={`bg-[#e0f2f9] py-16 lg:py-32.5 ${GUTTER}`}>
    <div className="mb-16">
      <div className="mb-5 flex items-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
        <span className="h-px w-6 bg-black" />
        The Policy Frontier
      </div>

      <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
        For India to do <span className="text-[#fdebc4] italic">thousands</span>{" "}
        of paired exchanges, ten things need to change.
      </h2>

      <p className="mt-5 font-roboto text-[17px] leading-relaxed text-[#393f42]">
        ASTRA&apos;s experience over a decade has surfaced the{" "}
        <strong className="font-bold text-secondary">
          structural and regulatory barriers
        </strong>{" "}
        that currently limit the scale of paired kidney exchange in India. The
        following ten changes — ranging from legal definitions to billing
        protocols to waitlist registration forms — would, in our institutional
        view,{" "}
        <em className="text-[#fdebc4] italic">
          unlock thousands more transplants per year
        </em>{" "}
        with no additional medical infrastructure required.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {POLICIES.map((policy, index) => (
        <div
          key={policy.num}
          className="relative flex items-start gap-4.5 rounded-sm bg-white px-7.5 py-7 before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-primary-subtle before:content-['']"
        >
          <div className="min-w-9 shrink-0 pt-0.5 font-roboto text-[32px] leading-none font-light tracking-[-0.018em] text-primary-subtle italic">
            {policy.num}
          </div>
          <div className="flex-1">
            <h3 className="mb-2 font-roboto text-[19px] leading-[1.3] font-bold tracking-[-0.005em] text-secondary">
              {policy.name}
            </h3>
            <p className="font-roboto text-[17px] leading-[22px] font-light text-[#2A2A2A]">
              {policy.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PolicySection;
