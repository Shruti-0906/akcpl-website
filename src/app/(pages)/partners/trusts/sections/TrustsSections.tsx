import Image from "next/image";

import { cn } from "@/lib";

import { Reveal } from "@/components/ui";

import { TrustLabel as Label } from "../components";

const challenges = [
  [
    "Every rupee, finite",
    "Donor funds are precious and unpredictable. Each rupee saved on operations is another patient who can be treated free.",
  ],
  [
    "Clinical complexity, daily",
    "Most trustees are not clinicians. Maintaining adequacy, water purity, vascular access, and infection control needs an institutional clinical mind.",
  ],
  [
    "Nephrologists, hard to retain",
    "Specialist clinicians are scarce nationally and even scarcer at charitable compensation. Retention is a constant pressure.",
  ],
  [
    "Donor confidence, outcome-driven",
    "Sustaining donor support means showing donors clear, credible outcomes. Most trusts lack the data infrastructure to produce this easily.",
  ],
  [
    "Standards, prone to drift",
    "Quality drifts in any healthcare setting without continuous attention. Trust centres are no exception — and the drift is often invisible until something serious happens.",
  ],
] as const;

const models = [
  {
    numeral: "I",
    label: "Asset-Light Upgrade",
    tagline: "Standards Without the Operational Lift",
    title: (
      <>
        Clinical &amp; <em>Quality Partnership</em>
      </>
    ),
    paragraphs: [
      <>
        For trusts that want to raise clinical standards without taking on
        operational change. AKC provides the institutional clinical mind; the
        trust continues to run the centre.
      </>,
      <>
        AKC licenses <strong>Axis</strong> — its nephrology-native electronic
        health record — to the trust&apos;s centre. Every dialysis session,
        every adequacy measure, every clinical intervention is captured. The
        trust&apos;s data flows (anonymously) into the{" "}
        <strong>Indian Renal Data System</strong>, contributing to national
        research while informing the trust&apos;s own work.
      </>,
      <>
        From this data, AKC produces{" "}
        <em>
          quarterly outcome reports for the board, annual donor outcome
          publications, audit-ready operational documentation
        </em>
        , and the kind of credible quantitative narrative that{" "}
        <strong>turns a one-time donor into a multi-year supporter.</strong>
      </>,
    ],
    fit: (
      <>
        Trusts whose <strong>operations are stable</strong> but whose{" "}
        <em>clinical consistency, audit-readiness, and quality assurance</em>{" "}
        would benefit from an institutional clinical partner.
      </>
    ),
  },
  {
    numeral: "II",
    label: "For Trustees & Donors",
    tagline: "Outcomes the Board Can Show the Donors",
    title: (
      <>
        Technology &amp; <em>Reporting</em>
      </>
    ),
    paragraphs: [
      <>
        Every charitable trust struggles with the same question: how do we show
        donors, credibly and quantitatively, what their money is actually
        achieving? AKC&apos;s technology answers this.
      </>,
      <>
        AKC licenses <strong>Axis</strong> — its nephrology-native electronic
        health record — to the trust&apos;s centre. Every dialysis session,
        every adequacy measure, every clinical intervention is captured. The
        trust&apos;s data flows (anonymously) into the{" "}
        <strong>Indian Renal Data System</strong>, contributing to national
        research while informing the trust&apos;s own work.
      </>,
      <>
        From this data, AKC produces{" "}
        <em>
          quarterly outcome reports for the board, annual donor outcome
          publications, audit-ready operational documentation
        </em>
        , and the kind of credible quantitative narrative that{" "}
        <strong>turns a one-time donor into a multi-year supporter.</strong>
      </>,
    ],
    fit: (
      <>
        Trusts <strong>raising philanthropic capital</strong> who need to show
        donors and boards the outcomes their money is producing — with the
        rigour and transparency modern donors increasingly expect.
      </>
    ),
  },
  {
    numeral: "III",
    label: "Full Partnership",
    tagline: "AKC Runs the Centre. The Trust Owns the Mission.",
    title: (
      <>
        Full <em>Operational Partnership</em>
      </>
    ),
    paragraphs: [
      <>
        For trusts who want to do what trusts do best — raise funds, serve a
        community, honour a mission — and have an institutional partner take
        operational responsibility for the centre itself.
      </>,
      <>
        AKC takes <strong>complete operational responsibility</strong>: clinical
        staffing, nephrology coverage, technicians, machines, water plant, QA,
        EHR, NABH accreditation, and reporting. The trust retains funding,
        branding, governance, and mission direction.
      </>,
      <>
        Patients see the trust&apos;s name at the door. They receive AKC&apos;s
        clinical standard inside. The trustees are freed to focus on community
        work, donor relationships, and strategic direction —{" "}
        <em>without the day-to-day weight of running a dialysis operation.</em>
      </>,
    ],
    fit: (
      <>
        Trusts whose <strong>founders or trustees are stretched thin</strong>,
        whose operational complexity has outgrown the volunteer area, or whose
        mission would be <em>better served by full institutional support.</em>
      </>
    ),
  },
  {
    numeral: "IV",
    label: "For New Trust Initiatives",
    tagline: "A New Charitable Dialysis Centre, From Day One",
    title: (
      <>
        Greenfield <em>Trust Centre Setup</em>
      </>
    ),
    paragraphs: [
      <>
        When a trust is planning to build a new dialysis centre — perhaps in
        honour of a founder, perhaps in response to a community need, perhaps as
        a new chapter in the trust&apos;s mission — AKC offers turnkey setup.
      </>,
      <>
        From{" "}
        <strong>
          site planning to equipment procurement, water-plant installation,
          staff recruitment and training, NABH accreditation, and operational
          launch
        </strong>{" "}
        — AKC delivers a network-grade dialysis centre to the trust&apos;s
        specifications.
      </>,
      <>
        After launch, the trust may choose to take operational control
        (Build–Operate–Transfer), continue with full AKC operations (area III),
        or migrate to any of the lighter-touch area above.{" "}
        <em>The architecture is flexible; the standard is not.</em>
      </>,
    ],
    fit: (
      <>
        Trusts <strong>planning new dialysis centres</strong> — community
        initiatives, memorial centres, CSR-funded outreach, or new chapters in
        an existing trust&apos;s charitable work.
      </>
    ),
  },
] as const;

const partners = [
  [
    "Lalbaugcha Raja Trust",
    "A celebrated Mumbai civic institution whose charitable work has long extended beyond the festival that made the name.",
    "Mumbai · Charitable Dialysis",
  ],
  [
    "Lions Hospital Trust",
    "A community service trust delivering subsidised healthcare in the tradition of Lions International's civic mission.",
    "Charitable Dialysis Operations",
  ],
  [
    "Prabodhan Trust",
    "A regional charitable trust whose dialysis work extends specialist kidney care into communities that would otherwise be underserved.",
    "Community Charitable Trust",
  ],
  [
    "Rehbar Foundation Trust",
    "A community foundation built around the principle of guiding the underserved to the healthcare their families could not otherwise reach.",
    "Community Foundation",
  ],
  [
    "Nirali A. M. Naik Trust",
    "An industrial family memorial trust honouring Nirali Naik — one of India's most distinguished charitable healthcare institutions, founded by the Naik family.",
    "Memorial Trust · Industrial Family",
  ],
  [
    "Shanmukhpriya Trust",
    "A charitable trust whose dialysis programme has brought network-grade renal care to a population that would otherwise lack access to it.",
    "Charitable Trust Partner",
  ],
  [
    "Noon Trust",
    "A philanthropic trust whose charitable healthcare commitments include the dialysis programme AKC operates on its behalf.",
    "Philanthropic Trust",
  ],
] as const;

const multipliers = [
  [
    "i.",
    "The Outcome Multiplier",
    <>
      Network-standard adequacy, water purity, vascular access, infection
      control — your patients <strong>receive care indistinguishable</strong>{" "}
      from any AKC centre.
    </>,
  ],
  [
    "ii.",
    "The Donor Confidence Multiplier",
    <>
      Quantitative outcome reports give donors visibility they&apos;ve often
      never had — turning{" "}
      <strong>one-time givers into long-term supporters.</strong>
    </>,
  ],
  [
    "iii.",
    "The Workforce Multiplier",
    <>
      ApEx Pathshala training scholarships help your centre{" "}
      <strong>recruit and retain nephrologists and technicians</strong> who
      would otherwise be hard to attract at charitable compensation.
    </>,
  ],
  [
    "iv.",
    "The Quality Multiplier",
    <>
      NABH-accreditation support raises your centre to{" "}
      <strong>network-recognised standards</strong> — which then attracts more
      talent, more donors, and more patient confidence.
    </>,
  ],
  [
    "v.",
    "The Patient Multiplier",
    <>
      Each of the above translates, eventually, into the only metric that
      matters:{" "}
      <strong>
        more patients served, better, on the same charitable budget.
      </strong>
    </>,
  ],
] as const;

const TrustsSections = () => (
  <div data-trusts-page className="w-full overflow-x-clip">
    <section className="relative flex min-h-[70vh] items-center overflow-hidden px-6 text-white sm:px-10 lg:px-14.5">
      {/* Banner under a flat black scrim, as on the hospitals and
          nephrologists heroes. This photo is a bright one at 207/255, so it
          takes the heavier scrim to keep the white type legible. */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Image
          src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Banner/Trust+Banner.jpg"
          alt=""
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-[2] w-full min-w-0 pt-18 md:pt-25">
        <Label light>For Public Charitable Trusts · Dialysis Partnership</Label>
        <h1 className="mb-7 font-cormorant text-[40px] leading-[1.05] font-light tracking-[-0.01em] md:text-[clamp(48px,6vw,62px)] [&_em]:text-[#00b3ff] [&_em]:italic">
          You built the dialysis centre from goodwill.
          <br />
          <em>Let&apos;s make every machine deliver more.</em>
        </h1>
        <p className="font-roboto text-[17px] leading-[1.7] font-light [&_em]:italic">
          AKC partners with public charitable trusts running dialysis centres to
          amplify the work they already do.{" "}
          <em>The mission stays yours. The donors stay yours.</em> The standards
          rise. The economics improve. The patients benefit.
        </p>
      </div>
    </section>

    <Reveal>
      <section className="bg-white py-20 md:py-[110px]">
        <div className="mx-auto px-6 sm:px-10 lg:px-14.5">
          <Label>An Acknowledgment, First</Label>
          <p className="relative pt-12 pb-9 font-cormorant text-[30px] leading-[1.3] font-bold tracking-[-0.012em] text-black italic before:absolute before:top-0 before:left-0 before:h-[3px] before:w-15 before:bg-primary-subtle before:content-[''] [&_strong]:text-primary-subtle [&_strong]:italic">
            Some of the finest dialysis care in this country is delivered not by
            hospitals, not by commercial chains, but by{" "}
            <strong>
              trusts — built from goodwill, sustained by donors, run by people
              who answer to a community rather than to a quarterly report.
            </strong>
          </p>
          <div className="mt-2.5 grid grid-cols-1 gap-8 border-t border-[#ccc] pt-10 md:grid-cols-2 md:gap-16 md:pt-16">
            <div>
              <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-bold [&_strong]:text-secondary">
                Religious community trusts. Industrial family foundations.
                Memorial trusts honouring a beloved family member.
                Festival-mandal trusts that have grown beyond celebration into
                civic work. Across India, thousands of dialysis chairs are run
                on a single civic instinct — that{" "}
                <em>
                  a person without means should not be left to die for want of
                  dialysis they cannot afford.
                </em>
              </p>
              <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-bold [&_strong]:text-secondary">
                This work pre-dates the consolidators. It pre-dates the schemes.
                In many parts of India, it pre-dates the dialysis units that
                came afterwards.
              </p>
              <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-bold [&_strong]:text-secondary">
                AKC was built, in part, <strong>alongside this work</strong> —
                and we have spent eighteen years building the kinds of clinical,
                operational, and data infrastructure that can amplify charitable
                dialysis without changing its character.
              </p>
              <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-bold [&_strong]:text-secondary">
                The conversation we are inviting on this page is not a sales
                pitch. It is an offer of institutional capability to
                organisations whose{" "}
                <em>
                  mission and reach are already greater than ours will ever be.
                </em>
              </p>
            </div>
            <Image
              src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Trusts+-+Trusts+Section.jpg"
              alt="An Acknowledgment, First"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>
    </Reveal>

    <Reveal>
      <section className="bg-[#e0f2f9] py-22 md:py-30">
        <div className="mx-auto px-6 sm:px-10 lg:px-14.5">
          <Label>The Quiet Difficulty</Label>
          <h2 className="mb-4 font-cormorant text-[clamp(36px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black [&_em]:text-primary-subtle [&_em]:italic">
            Heroic work, run on{" "}
            <em>budgets that do not forgive inefficiency.</em>
          </h2>
          <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-bold [&_strong]:text-secondary">
            Most trusts running dialysis centres face the same set of quiet
            challenges. <strong>None of them are failures of the trust.</strong>{" "}
            They are the natural consequences of trying to deliver specialised,
            expensive, highly regulated healthcare on charitable budgets —
            without an institutional partner whose entire existence is built
            around solving these problems.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {challenges.map(([title, text]) => (
              <div
                key={title}
                className="border border-l-2 border-[#c9e4ed] border-l-primary-subtle bg-white px-6 py-7 even:bg-[#cee8f3] [&_h3]:mb-2.5 [&_h3]:font-cormorant [&_h3]:text-2xl [&_h3]:leading-[1.25] [&_h3]:font-bold [&_h3]:text-secondary [&_p]:font-roboto [&_p]:text-[14.5px] [&_p]:leading-[1.6] [&_p]:font-normal [&_p]:text-[#404040]"
              >
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-secondary-light px-9 py-8 font-roboto text-lg leading-[1.5] font-normal text-[rgba(251,248,243,0.72)] italic [&_strong]:text-white [&_strong]:not-italic">
            The trusts that built these centres are not asking for help{" "}
            <em>because they have done it poorly.</em> They are not asking
            because they cannot continue. They have continued, often remarkably,
            for decades.{" "}
            <strong>
              AKC&apos;s offer is simply that the next decade could be lighter,
              fuller, and more impactful
            </strong>{" "}
            — with the right institutional partner walking alongside.
          </div>
        </div>
      </section>
    </Reveal>

    <Reveal>
      <section className="bg-secondary py-20 md:py-[110px]">
        <div className="mx-auto px-6 sm:px-10 lg:px-14.5">
          <Label light>The Partnership Thesis</Label>
          <p
            className={cn(
              "relative pt-12 pb-9 font-cormorant text-[30px] leading-[1.3] font-bold tracking-[-0.012em] text-black italic before:absolute before:top-0 before:left-0 before:h-[3px] before:w-15 before:bg-primary-subtle before:content-[''] [&_strong]:text-primary-subtle [&_strong]:italic",
              "text-white [&>span]:mt-8 [&>span]:block [&>span]:font-roboto [&>span]:text-[11px] [&>span]:leading-[normal] [&>span]:font-bold [&>span]:tracking-[0.22em] [&>span]:text-tertiary [&>span]:uppercase",
            )}
          >
            AKC offers public charitable trusts running dialysis centres a
            partnership that{" "}
            <strong>
              preserves the trust&apos;s identity, mission, and donor
              relationships
            </strong>{" "}
            — while adding the clinical, operational, technological, and data
            apparatus that eighteen years of network building has produced. The
            trust remains the trust. The mission remains the mission. The
            standards rise.
            <span>AKC · Charitable Partnership Brief · 2026</span>
          </p>
        </div>
      </section>
    </Reveal>

    <Reveal>
      <section className="bg-[#e0f2f9] pt-30 pb-15">
        <div className="mx-auto px-6 text-center sm:px-10 lg:px-14.5">
          <Label inline>Four Ways to Engage</Label>
          <h2 className="mb-4 font-cormorant text-[clamp(36px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black [&_em]:text-primary-subtle [&_em]:italic">
            Choose the partnership <em>that fits your trust</em>.
          </h2>
          <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-bold [&_strong]:text-secondary">
            AKC offers four distinct engagement area, ordered from{" "}
            <em>lightest-touch</em> to <em>fullest partnership.</em> Most trusts
            begin with one and grow into others over time; a few stay at the
            area that fits them and never need more. Both are entirely fine.
          </p>
        </div>
      </section>
    </Reveal>
    {models.map((model, index) => (
      <Reveal key={model.numeral}>
        <section
          className={cn(
            "relative bg-white py-20 md:py-[110px]",
            index % 2 && "bg-[#e0f2f9]",
          )}
        >
          <div className="mx-auto px-6 sm:px-10 lg:px-14.5">
            <div className="grid grid-cols-1 gap-9 md:grid-cols-[140px_1fr] md:gap-12 [&>*]:min-w-0">
              <div className="static self-start md:sticky md:top-30">
                <div className="font-roboto text-[88px] leading-[0.85] font-light text-black italic after:mt-4.5 after:mr-0 after:mb-4 after:ml-1 after:block after:h-px after:w-8.5 after:bg-primary-subtle after:content-['']">
                  {model.numeral}
                </div>
                <span className="font-roboto text-[10.5px] leading-[normal] font-bold tracking-[0.22em] text-black uppercase">
                  {model.label}
                </span>
              </div>
              <div>
                <div className="mb-3 font-roboto text-[10.5px] leading-[normal] font-bold tracking-[0.22em] text-primary-subtle uppercase">
                  {model.tagline}
                </div>
                <h2 className="mb-4 font-cormorant text-[clamp(36px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black [&_em]:text-primary-subtle [&_em]:italic">
                  {model.title}
                </h2>
                {model.paragraphs.map((paragraph, i) => (
                  <p
                    className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-bold [&_strong]:text-secondary"
                    key={i}
                  >
                    {paragraph}
                  </p>
                ))}
                <div className="relative mt-9 border-l-2 border-primary-subtle bg-[rgba(14,124,123,0.06)] px-9 py-8 font-roboto text-[17px] leading-[1.6] font-normal text-[#393f42] [&_h3]:mb-4.5 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:tracking-[0.05em] [&_h3]:text-secondary-light [&_h3]:uppercase [&_strong]:text-secondary">
                  <h3>Best fit for</h3>
                  <div>{model.fit}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    ))}

    <Reveal>
      <section className="bg-[#e0f2f9] py-22 md:py-32.5">
        <div className="mx-auto px-6 sm:px-10 lg:px-14.5">
          <Label>The Trusts We Already Walk Alongside</Label>
          <h2 className="mb-4 font-cormorant text-[clamp(36px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black [&_em]:text-primary-subtle [&_em]:italic">
            Not a proposal. <em>A partnership already in motion.</em>
          </h2>
          <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-bold [&_strong]:text-secondary">
            Across geographies, missions, and communities, AKC operates dialysis
            centres in partnership with the following public charitable trusts —
            running each centre to AKC&apos;s{" "}
            <strong>full network clinical standard</strong>, in service of each
            trust&apos;s own distinct mission, donors, and community.
          </p>
          <div className="mt-14 mb-12 flex items-start gap-3.5 border-b border-[#c9e4ed] pb-5.5 font-roboto text-[11px] leading-[1.6] font-bold tracking-[0.18em] text-black uppercase md:items-center md:leading-[normal] [&_i]:size-2 [&_i]:rounded-full [&_i]:bg-[#7a9580] [&_i]:shadow-[0_0_0_4px_rgba(122,149,128,0.2)] [&_strong]:text-[#55735e]">
            <i />
            <span>
              <strong>Seven</strong>&nbsp; Active Trust Partnerships
              &nbsp;·&nbsp; Network Clinical Standard &nbsp;·&nbsp; Each Mission
              Preserved
            </span>
          </div>
          <div className="mb-[15px] grid grid-cols-1 items-stretch gap-2.5 md:grid-cols-2 xl:grid-cols-4">
            {partners.map(([name, description, rule]) => (
              <div
                key={name}
                className="relative flex min-h-60 min-w-0 flex-col bg-white px-7 py-8 transition duration-[250ms] before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-[#7a9580] before:transition-transform before:duration-500 before:ease-[cubic-bezier(.2,.7,.2,1)] before:content-[''] even:bg-[#cee8f3] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(14,37,64,0.06)] hover:before:scale-x-100 [&_h3]:mb-2 [&_h3]:font-cormorant [&_h3]:text-2xl [&_h3]:leading-[1.15] [&_h3]:font-bold [&_h3]:text-secondary"
              >
                <Label>Active Partner</Label>
                <h3>{name}</h3>
                <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-bold [&_strong]:text-secondary">
                  {description}
                </p>
                <div className="mt-auto border-t border-[#ccc] pt-3.5 font-roboto text-[10.5px] leading-[1.4] font-bold tracking-[0.16em] text-secondary-light uppercase">
                  {rule}
                </div>
              </div>
            ))}
          </div>
          <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-bold [&_strong]:text-secondary">
            Each of these partnerships is structured differently — in accordance
            with the trust&apos;s character, donor base, scale, and operational
            footprint. What they share is a common conviction:{" "}
            <strong>
              that a charitable dialysis chair should deliver the same standard
              of care as any other chair in the AKC network.
            </strong>{" "}
            Some partnerships have been running for years. Each is treated as
            the trust&apos;s own.
          </p>
        </div>
      </section>
    </Reveal>

    <Reveal>
      <section className="relative bg-secondary py-22 md:py-32.5">
        <div className="mx-auto px-6 sm:px-10 lg:px-14.5">
          <div className="mx-auto px-6 text-center sm:px-10 lg:px-14.5">
            <Label light inline>
              The Multiplier Effect
            </Label>
            <h2 className="mb-4 font-cormorant text-[clamp(36px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black text-white [&_em]:text-primary-subtle [&_em]:italic">
              What changes <em>when an institution walks alongside.</em>
            </h2>
            <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] text-white/50 [&_em]:italic [&_strong]:font-bold [&_strong]:text-secondary">
              Across every engagement area above, the partnership produces the
              same set of compounding effects — each of which translates,
              eventually, into more patients receiving better care for the same
              charitable rupee.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-px border border-[#002944] bg-[#002944] md:grid-cols-3">
            {multipliers.map(([number, title, text]) => (
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
    </Reveal>

    <Reveal>
      <section className="bg-white py-22 md:py-32.5">
        <div className="mx-auto px-6 sm:px-10 lg:px-14.5">
          <div className="mx-auto px-6 text-center sm:px-10 lg:px-14.5">
            <Label inline>A Word About Identity</Label>
            <h2 className="mb-4 font-cormorant text-[clamp(36px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black [&_em]:text-primary-subtle [&_em]:italic">
              AKC walks alongside your trust, <em>in the shadows.</em>
            </h2>
            <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-bold [&_strong]:text-secondary">
              The single concern we hear most often from trustees:{" "}
              <em>
                will partnering with AKC change who we are, dilute our mission,
                or weaken our relationship with our donors and community?
              </em>{" "}
              The honest answer is no — and the partnership is structured to
              make that explicit.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-[1fr_auto_1fr] md:gap-8 [&>*]:min-w-0">
            <div className="relative h-full border border-[#ccc] bg-white px-9 py-10 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-primary-subtle before:content-[''] [&_h3]:mb-6 [&_h3]:font-roboto [&_h3]:text-2xl [&_h3]:leading-[1.25] [&_h3]:font-bold [&_h3]:text-secondary [&_h3_em]:text-[#00b3ff] [&_h3_em]:italic [&_li]:relative [&_li]:pl-6 [&_li]:font-roboto [&_li]:text-[17px] [&_li]:leading-[1.6] [&_li]:font-normal [&_li]:text-[#393f42] [&_li]:before:absolute [&_li]:before:top-2 [&_li]:before:left-0 [&_li]:before:size-2.5 [&_li]:before:rounded-full [&_li]:before:bg-primary-subtle [&_li]:before:content-[''] [&_ul]:flex [&_ul]:list-none [&_ul]:flex-col [&_ul]:gap-3.5">
              <div className="mb-3 font-roboto text-[10.5px] leading-[normal] font-bold tracking-[0.22em] text-primary-subtle uppercase">
                AKC Brings
              </div>
              <h3>
                The <em>institutional apparatus</em> behind your charitable
                work.
              </h3>
              <ul>
                {[
                  "Clinical leadership and protocol governance",
                  "Operational SOPs and quality assurance frameworks",
                  "Procurement at 200-centre network scale",
                  "Axis EHR and IRDS data infrastructure",
                  "Technician training and continuing education",
                  "NABH accreditation support and audit readiness",
                  "Donor-grade outcome reporting and documentation",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex rotate-90 items-center justify-center p-0 font-roboto text-4xl leading-[normal] font-light text-black italic md:rotate-0 md:justify-start md:pt-30">
              ⟷
            </div>
            <div className="relative h-full border border-[#ccc] bg-white px-9 py-10 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-primary-subtle before:content-[''] [&_h3]:mb-6 [&_h3]:font-roboto [&_h3]:text-2xl [&_h3]:leading-[1.25] [&_h3]:font-bold [&_h3]:text-secondary [&_h3_em]:text-[#00b3ff] [&_h3_em]:italic [&_li]:relative [&_li]:pl-6 [&_li]:font-roboto [&_li]:text-[17px] [&_li]:leading-[1.6] [&_li]:font-normal [&_li]:text-[#393f42] [&_li]:before:absolute [&_li]:before:top-2 [&_li]:before:left-0 [&_li]:before:size-2.5 [&_li]:before:rounded-full [&_li]:before:bg-primary-subtle [&_li]:before:content-[''] [&_ul]:flex [&_ul]:list-none [&_ul]:flex-col [&_ul]:gap-3.5">
              <div className="mb-3 font-roboto text-[10.5px] leading-[normal] font-bold tracking-[0.22em] text-primary-subtle uppercase">
                Stays the Trust&apos;s
              </div>
              <h3>
                Your <em>mission, identity, and community.</em>
              </h3>
              <ul>
                {[
                  "The trust's name and brand at every door, every report, every patient interaction",
                  "The trust's mission, voice, and community character",
                  "Trustee governance and strategic decision-making authority",
                  "The right to define charitable beds, subsidy levels, and patient selection",
                  "The legacy — built by the trust, attributed to the trust",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  </div>
);

export default TrustsSections;
