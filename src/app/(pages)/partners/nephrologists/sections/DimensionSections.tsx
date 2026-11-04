import type { ReactNode } from "react";

import { SectionLabel } from "../components";

type Dimension = {
  numeral: string;
  category: string;
  leverage: string;
  heading: ReactNode;
  paragraphs: ReactNode[];
  bullets: readonly (readonly [string, string])[];
  closing: ReactNode;
};

const dimensions: readonly Dimension[] = [
  {
    numeral: "I",
    category: "Business",
    leverage: "Operational Leverage",
    heading: (
      <>
        Be a doctor. <em>Not an operations manager.</em>
      </>
    ),
    paragraphs: [
      <>
        Running a dialysis unit is an unglamorous business problem disguised as
        a medical one. The nephrologist who learns it does so at the cost of the
        work they actually trained for.
      </>,
      <>
        A nephrologist who sets up independently must learn vendor management,
        water-plant maintenance, technician hiring, NABH accreditation,
        insurance empanelment, billing, GST, fire-safety compliance, and patient
        acquisition — before they can practise medicine in their own unit. Most
        underestimate this work. Many burn out on it.
      </>,
      <>
        AKC&apos;s offer, framed honestly:{" "}
        <em>we run the business so you can run the medicine.</em> We have done
        it across 200+ centres and ten states; the operating playbook is mature,
        the unit economics are known, and the procurement scale is real.
      </>,
    ],
    bullets: [
      [
        "Turnkey unit setup",
        " — site selection, machines, water plant, fit-out, staffing, NABH accreditation, all delivered to AKC's operating standard.",
      ],
      [
        "Operations off your plate",
        " — technicians, scheduling, machine maintenance, water QC, consumables, vendor relationships, billing, compliance, all centrally managed.",
      ],
      [
        "Bulk-procurement economics",
        " — dialysers, tubing sets, EPO, iron, water-plant consumables sourced at network scale. The margin difference is real, and it is shared.",
      ],
      [
        "Multiple partnership structures",
        " — turnkey, hospital tie-up, joint venture, professional-fee, revenue-share. Capital participation is optional, not required.",
      ],
      [
        "Income that compounds beyond consultation fees",
        " — your income stops being clinical-hours-times-rate and starts including a partnership component that scales with the unit and the network.",
      ],
    ],
    closing: (
      <>
        <strong>
          Every hour you spend negotiating with a water-plant vendor
        </strong>{" "}
        is an hour you&apos;re not spending on your patients, your family, or
        your research. AKC takes those hours back.
      </>
    ),
  },
  {
    numeral: "II",
    category: "Data",
    leverage: "Intellectual Leverage",
    heading: (
      <>
        A patient cohort <em>you can finally see.</em>
      </>
    ),
    paragraphs: [
      <>
        Most senior Indian nephrologists have practised for two decades without
        ever being able to answer simple longitudinal questions about their own
        patients. The data exists. It just isn&apos;t visible.
      </>,
      <>
        What is my median Kt/V? My one-year graft survival? What proportion of
        my patients are on a fistula at six months? How does my anaemia control
        compare to national norms? For most clinicians, these questions cannot
        be answered — not because the information is hidden, but because{" "}
        <em>it has never been structured in a way that lets them be asked.</em>
      </>,
      <>
        AKC has built, over a decade of patient work, the data layer that Indian
        nephrology has always needed. As a partner, it becomes yours to use.
      </>,
    ],
    bullets: [
      [
        "Axis — AKC's nephrology-native EHR.",
        " Every session, every adequacy measure, every medication, every access intervention. Not generic hospital EHR data; nephrology data, structured the way nephrologists think.",
      ],
      [
        "The Indian Renal Data System (IRDS)",
        " — a national, prospectively collected, multi-centre registry. Your cohort, your network, your country — visible side by side.",
      ],
      [
        "Auto-generated quality dashboards",
        " — open it Monday morning. See adequacy, anaemia, BP control, phosphate, access patency, hospitalisations, mortality, across every centre you oversee.",
      ],
      [
        "Honest benchmarking",
        " — the most professionally useful thing a registry can give a clinician is comparison. AKC makes it available, anonymously.",
      ],
      [
        "Data export and self-service queries",
        " — for audit, research, presentations, or simply for understanding your own practice better.",
      ],
    ],
    closing: (
      <>
        For the first time in Indian nephrology, you can practise with{" "}
        <strong>feedback loops as tight as a clinical trial.</strong>
      </>
    ),
  },
  {
    numeral: "III",
    category: "Research",
    leverage: "Academic Leverage",
    heading: (
      <>
        The substrate for <em>real academic work.</em>
      </>
    ),
    paragraphs: [
      <>
        Most talented Indian nephrologists in private practice quietly accept
        that the publication side of their careers is over the day they leave
        fellowship. It does not have to be.
      </>,
      <>
        Investigator-initiated research is almost impossible for a solo Indian
        nephrologist. Multi-centre studies require infrastructure — statistical
        support, IRB coordination, data quality assurance, manuscript-writing
        support — that exists in only a handful of academic institutions in the
        country. That gap is what keeps capable clinicians out of the
        literature.
      </>,
      <>
        AKC&apos;s research proposition reverses it. The infrastructure is
        built. The cohort is assembled. The mentorship is institutional. The
        question that remains is whether you still want to do the work.
      </>,
    ],
    bullets: [
      [
        "A national cohort of tens of thousands of patients",
        " — the denominator that makes Indian multi-centre research competitive with international literature.",
      ],
      [
        "IRDS as a research substrate",
        " — prospectively collected, structured, cleaned. The first ninety percent of research effort, already done.",
      ],
      [
        "The IIT Bombay collaboration",
        " — operational research, modelling, AI/ML applications in dialysis. Data-science collaborators you would not otherwise meet.",
      ],
      [
        "Founder mentorship, institutionalised",
        " — the founding nephrologists have 85+ collective indexed publications and active research programmes. Mentorship is structural, not transactional.",
      ],
      [
        "Statistical, biostatistical, regulatory, and writing support",
        " — the unglamorous middle work that decides whether an idea ever becomes a published paper.",
      ],
      [
        "Industry-sponsored trial site activation",
        " — AKC's scale draws clinical trials. Partner nephrologists become Principal Investigators on studies they would never otherwise see.",
      ],
      [
        "Co-authorship on multi-centre AKC studies",
        " — the network publishes; partner nephrologists publish with it.",
      ],
    ],
    closing: (
      <>
        AKC doesn&apos;t ask you to give up academic medicine. It gives you the
        platform to do the academic medicine{" "}
        <strong>
          you trained for, but private practice took away from you.
        </strong>
      </>
    ),
  },
  {
    numeral: "IV",
    category: "Credibility",
    leverage: "Reputational Leverage",
    heading: (
      <>
        Practise inside <em>an institution.</em>
      </>
    ),
    paragraphs: [
      <>
        A nephrologist in solo practice carries their own credibility on their
        own shoulders, every single day. Inside an institution, credibility
        moves in both directions.
      </>,
      <>
        Quality in independent practice varies between centres because quality
        depends on the individual. Patients have no easy way to compare.
        Insurance empanelment is one-by-one. Hospitals that partner with you do
        not know what they are getting until they see it. Each interaction
        begins with you, alone, making your case.
      </>,
      <>
        Being inside AKC&apos;s network changes this geometry.{" "}
        <em>The institution vouches for you, and you for it.</em> What the
        network has built — eighteen years of clinical standards, brand equity,
        and institutional relationships — becomes part of your day-to-day
        practice.
      </>,
    ],
    bullets: [
      [
        "The AKC standard is your standard, audited.",
        " Validated Kt/V, ultra-pure water, structured-trained technicians, vascular access protocols — operationalised, not aspired to.",
      ],
      [
        "Eighteen years of institutional brand equity",
        " — patient base, regulator relationships, hospital tie-ups, NABH accreditation, insurance empanelment.",
      ],
      [
        "Founder clinical credibility extending to your practice",
        " — Bombay Hospital, Nanavati Max, Hiranandani; FRCP Edinburgh; ISN Education Ambassador; 85+ collective publications.",
      ],
      [
        "NABH-accredited operations",
        " across the network, which simplifies insurance, CGHS/ECHS, corporate empanelment, and hospital MOUs.",
      ],
      [
        "Patient flow that reflects institutional trust",
        " — AKC's existing patients refer family and colleagues. You inherit demand you did not have to earn alone.",
      ],
    ],
    closing: (
      <>
        Practise your medicine.{" "}
        <strong>
          Let the institution carry your credibility into rooms you would not
          otherwise enter.
        </strong>
      </>
    ),
  },
  {
    numeral: "V",
    category: "Growth",
    leverage: "Career Leverage",
    heading: (
      <>
        A career that <em>doesn&apos;t plateau.</em>
      </>
    ),
    paragraphs: [
      <>
        The traditional Indian nephrology career has a relatively low ceiling.
        Most clinicians reach it by their mid-forties. AKC offers a longer,
        branched arc — for those who still want one.
      </>,
      <>
        Fellowship, then consultant, then senior consultant, then a private
        clinic, then eventually a dialysis unit — the standard career runs out
        of new chapters by roughly age forty-five. Most clinicians stop growing
        professionally not because they stop wanting to, but because there is{" "}
        <em>nowhere obvious to grow to.</em>
      </>,
      <>
        AKC&apos;s offer to a partner nephrologist is a career trajectory that
        keeps branching. What this looks like depends entirely on which
        direction you want to grow in.
      </>,
    ],
    bullets: [
      [
        "Clinical leadership roles across the network",
        " — chief nephrologist of a state, regional clinical head, head of transplant care, head of interventional nephrology.",
      ],
      [
        "Sub-specialty fellowships via the AKC training arm",
        " — transplant, interventional nephrology, peritoneal dialysis, vascular access, home dialysis. Skills you cannot easily get elsewhere in India at this depth.",
      ],
      [
        "Geographic expansion at network scale",
        " — a partner nephrologist can have clinical oversight across multiple centres without being physically resident at each one. The network model creates leverage on clinical time.",
      ],
      [
        "Faculty positions in ApEx Pathshala",
        " — teaching the next generation of Indian nephrologists is itself a growth lever, professionally and reputationally.",
      ],
      [
        "Equity and partnership pathways for senior partners",
        " — for those who want to participate in AKC's growth as owners, not just clinicians.",
      ],
      [
        "Transition from clinician to clinical leader",
        " — for nephrologists who want it, the move from one-on-one patient care to systems-level influence is institutionalised here.",
      ],
    ],
    closing: (
      <>
        AKC is the difference between{" "}
        <strong>a career ceiling and a career runway.</strong>
      </>
    ),
  },
  {
    numeral: "VI",
    category: "Stature",
    leverage: "Institutional Leverage",
    heading: (
      <>
        Be in the rooms where <em>standards are set.</em>
      </>
    ),
    paragraphs: [
      <>
        Stature is the slow-burning dimension. It is about whose name is invited
        to the policy table, whose voice carries at conferences, whose practice
        shapes national norms. Most Indian nephrologists, however talented,
        never enter these rooms.
      </>,
      <>
        The rooms are organised around <em>institutions</em>, not individuals.
        Academic centres send representatives. Government committees consult
        institutions. International societies seek institutional voices. The
        unaffiliated solo practitioner, however excellent, is largely invisible
        to most of this work.
      </>,
      <>
        AKC, at scale, <em>is</em> one of those institutions. Its data informs
        national policy. Its publications carry the weight of multi-centre
        evidence. Its faculty are increasingly the voices Indian kidney health
        is consulted through. Partner nephrologists sit inside that platform.
      </>,
    ],
    bullets: [
      [
        "Influence on national kidney care policy",
        " — through IRDS, AKC is producing the data government and ICMR increasingly use to set policy. Partner nephrologists are inside that conversation.",
      ],
      [
        "ISN, ASN, ERA, AAKK representation",
        " — multi-centre research, AKC-branded presentations, panel and chair positions that come with institutional standing.",
      ],
      [
        "Authorship on landmark Indian nephrology papers",
        " — multi-centre cohort studies, registry papers, operational research, of the kind that get cited internationally.",
      ],
      [
        "Clinical governance positions within AKC",
        " — voice in setting the very protocols the network practises by. The highest form of professional stature is shaping the rules you operate under.",
      ],
      [
        "Media and thought-leadership platform",
        " — AKC's communications team positions its clinicians as the voices on kidney health in India.",
      ],
      [
        "Mentorship of the next generation",
        " — the most enduring form of stature in medicine is the doctors your students go on to become. ApEx Pathshala makes this institutional.",
      ],
      [
        "Recognition as a builder, not just a clinician",
        " — a distinct kind of professional standing comes from helping build a national institution. AKC offers a share in that legacy.",
      ],
    ],
    closing: (
      <>
        Somewhere between being a great doctor and being remembered as one,{" "}
        <strong>an institution has to vouch for you.</strong> AKC is that
        institution.
      </>
    ),
  },
];

const DimensionSections = () => (
  <>
    {dimensions.map((dimension, index) => (
      <section
        key={dimension.numeral}
        id={`dim-${index + 1}`}
        className={`${"relative scroll-mt-[117px] bg-white py-[110px]"} ${index % 2 ? "bg-[#e0f2f9]" : ""}`}
      >
        <div className="relative z-[2] mx-auto w-full px-6 sm:px-10 lg:px-14.5">
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[140px_1fr]">
            <div className="self-start text-black md:sticky md:top-30 [&>div]:font-roboto [&>div]:text-[88px] [&>div]:leading-[0.85] [&>div]:font-light [&>div]:text-black [&>div]:italic [&>div]:after:mt-[18px] [&>div]:after:ml-1 [&>div]:after:block [&>div]:after:h-px [&>div]:after:w-8.5 [&>div]:after:bg-primary-subtle [&>div]:after:content-[''] [&>span]:mt-4 [&>span]:ml-1 [&>span]:block [&>span]:text-[10.5px] [&>span]:leading-[normal] [&>span]:font-bold [&>span]:tracking-[0.24em] [&>span]:text-black [&>span]:uppercase">
              <div>{dimension.numeral}</div>
              <span>{dimension.category}</span>
            </div>
            <div className="max-w-full">
              <SectionLabel>{dimension.leverage}</SectionLabel>
              <h2 className="mb-4 font-cormorant text-[clamp(36px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black [&_em]:text-primary-subtle [&_em]:italic">
                {dimension.heading}
              </h2>
              {dimension.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-normal [&_strong]:text-inherit"
                >
                  {paragraph}
                </p>
              ))}
              <div className="relative mt-9 rounded-[2px] border-l-2 border-primary-subtle bg-[rgba(14,124,123,0.06)] px-9 py-8 before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-primary-subtle before:content-[''] [&_h3]:mb-[18px] [&_h3]:font-roboto [&_h3]:text-lg [&_h3]:leading-[normal] [&_h3]:font-bold [&_h3]:tracking-[0.05em] [&_h3]:text-secondary-light [&_h3]:uppercase [&_li]:relative [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-[5px] [&_li]:text-[17px] [&_li]:leading-[1.6] [&_li]:text-[#393f42] [&_li]:before:absolute [&_li]:before:top-2 [&_li]:before:-left-[18px] [&_li]:before:size-2 [&_li]:before:rotate-45 [&_li]:before:bg-primary-subtle [&_li]:before:content-[''] [&_li_strong]:font-bold [&_li_strong]:text-secondary [&_ul]:flex [&_ul]:list-none [&_ul]:flex-col [&_ul]:gap-3.5">
                <h3>What this looks like in practice</h3>
                <ul>
                  {dimension.bullets.map(([lead, text]) => (
                    <li key={lead}>
                      <strong>{lead}</strong>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-5 mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-normal [&_strong]:text-inherit">
                {dimension.closing}
              </p>
            </div>
          </div>
        </div>
      </section>
    ))}
  </>
);

export default DimensionSections;
