import type { ReactNode } from "react";

import { GUTTER } from "@/constants";

type Block =
  | { kind: "heading"; text: string; size: 36 | 25 }
  | { kind: "text"; text: ReactNode }
  | { kind: "list"; items: readonly ReactNode[] };

const AUDIT_COMMITTEE = [
  { role: "VP, BD & Operations", responsibility: "Chairperson / Ethics Officer" },
  { role: "Executive Assistant to Group CEO", responsibility: "Member" },
  { role: "Head of I.T", responsibility: "Member" },
  { role: "Head of HR", responsibility: "Member" },
  { role: "Manager Academics", responsibility: "Member" },
] as const;

const SUBJECT_OBLIGATIONS = [
  "be normally informed of the allegations at the outset of a formal investigation and have opportunity for providing their inputs during the investigation.",
  "co-operate during the investigation process to the extent that such cooperation will not compromise the protections available under the applicable laws.",
  "not interfere with the investigation, nor withhold, destroy or tamper with any evidence or influence, coach, threaten or intimidate the witness.",
  "have the right to consult with a person or persons of their choice, other than with the investigation team and/or the WhistleBlower.",
  "be given the opportunity to respond to material findings contained in an investigation report unless there are compelling reasons not to do so.",
] as const;

const CONTENT: readonly Block[] = [
  { kind: "heading", size: 36, text: "Applicability" },
  {
    kind: "text",
    text: "This Whistle Blower Policy (“Policy”) is applicable to all Employees, Trainees, Consultant, Directors and Stakeholders of Apex Kidney Care Pvt Ltd and its Subsidiaries (collectively referred as ‘Company’).",
  },
  { kind: "heading", size: 25, text: "Introduction" },
  {
    kind: "text",
    text: "The Company believes in the conduct of its affairs in a fair and transparent manner by adopting the highest standards of professionalism, honesty, integrity and ethical behavior. Towards this, the Company has adopted the Apex Kidney Care Code of Conduct, Anti Fraud Policy hereafter referred as (“Code”), which lays down the principles and standards that govern the actions of the Company, its Employees, Trainees, Consultants, Directors, and stakeholders. By living the values embodied in the Code, Apex Kidney Care Pvt Ltd has built a brand reputation of trust and integrity.",
  },
  {
    kind: "text",
    text: (
      <>
        Any actual or potential violation of the Code or violation of the
        applicable laws would be a matter of serious concern for the Company.
        This Policy has been formulated to provide a vigil mechanism to
        empower Employees, Trainees, Consultants, Directors, and stakeholders
        to report any actual or potential illegal and unethical practices in
        violation of the law of the land (“<strong>Violation</strong>”)
        without fear of retaliation.
      </>
    ),
  },
  { kind: "heading", size: 36, text: "1. Definitions" },
  {
    kind: "text",
    text: "The definitions of some of the key terms used in this policy are given below.",
  },
  {
    kind: "list",
    items: [
      <>
        “<strong>Audit Committee</strong>” means the Audit Committee
        constituted of AKC &amp; group companies.
      </>,
      <>
        “<strong>Director</strong>” means a director on the Board of Company
        Name and/or its subsidiaries.
      </>,
      <>
        “<strong>Employee</strong>” includes every person in employment of
        Apex Kidney Care Pvt Ltd and/or its Subsidiaries, regardless of
        geographic location, and includes consultants, associates, interns
        and trainees of the Company.
      </>,
      <>
        “<strong>Stakeholders</strong>” include others with whom the Company
        has financial or commercial dealings.
      </>,
      <>
        “<strong>Whistle Blower</strong>” is the Employee, Trainee,
        Consultants, Director or Stakeholder reporting a Violation under this
        Policy.
      </>,
      <>
        “<strong>Protected Disclosure</strong>” is the communication of a
        Violation, made in good faith by the Whistle Blower and sent over
        email or as a hard copy in terms of this Policy, disclosing
        verifiable information and evidence of the Violation.
      </>,
      <>
        “<strong>Subject(s)</strong>” is the Employee(s) or Director(s)
        against or in relation to whom a Violation has been reported, or
        evidence gathered during an investigation.
      </>,
      <>
        “<strong>Subsidiaries</strong>” means the direct and indirect
        subsidiaries of Apex Kidney Care Pvt Ltd as per the provisions of the
        Companies Act, 2013.
      </>,
    ],
  },
  { kind: "heading", size: 36, text: "2. Scope" },
  {
    kind: "list",
    items: [
      "Anybody with knowledge of and having verifiable information or material about violation or indulging in any illegal or unethical acts by any Employee, Trainee, Consultants or Director of the Company, is entitled to make a Protected Disclosure in terms of this Policy.",
      "The Whistle Blower’s role is that of a reporting party with reliable and verifiable information about illegal or unethical acts committed by Subject(s). A Whistle Blower should not act on their own in conducting any investigative activities, nor prescribe any corrective or remedial action. The WhistleBlower shall have no automatic right to participate in any investigative activities, other than when requested to do so during the investigation process.",
    ],
  },
  { kind: "heading", size: 36, text: "3. Reporting a Protected Disclosure" },
  {
    kind: "list",
    items: [
      <>
        A WhistleBlower is encouraged to report any Violation to Apex Kidney
        Care Pvt Ltd “Ethics Officer” at{" "}
        <a href="mailto:integrity@apexkidneycare.in">
          integrity@apexkidneycare.in
        </a>
      </>,
      <>
        Audit Committee :-
        <br />
        <table className="mt-4 mb-6 w-full border-collapse text-left">
          <thead>
            <tr>
              <th className="border border-[#ccc] bg-primary-light px-2.5 py-2.5 font-bold text-white">
                Designation
              </th>
              <th className="border border-[#ccc] bg-primary-light px-2.5 py-2.5 font-bold text-white">
                Responsibility of Committee
              </th>
            </tr>
          </thead>
          <tbody>
            {AUDIT_COMMITTEE.map((row) => (
              <tr key={row.role}>
                <td className="border border-[#ccc] bg-white px-2.5 py-2.5">
                  {row.role}
                </td>
                <td className="border border-[#ccc] bg-white px-2.5 py-2.5">
                  {row.responsibility}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>,
      "If for any reason the WhistleBlower is not comfortable making a Protected Disclosure in terms of (a) above or in appropriate or exceptional cases a Protected Disclosure may also be addressed to the Chairperson of the Audit Committee.",
      <>
        Hard copies of the Protected Disclosure may also be sent to:
        <br />
        <u>Ethics Officer</u>, Apex Kidney Care Pvt Ltd
      </>,
      "The Protected Disclosure may be in English, Hindi or the official language of the place of employment/business of the WhistleBlower. It should be factual and should contain as much specific information as possible to allow for proper assessment of the nature and extent of the Violation.",
      "To facilitate an effective and expeditious investigation and for availing the protection under this Policy, the WhistleBlower(s) must identify themselves in the Protected Disclosure. The identity of the Whistle Blower will be kept confidential to the extent possible given the legitimate needs of law and the investigation.",
      "A Whistle Blower who provides their communication details will receive an acknowledgment of receipt of the Protected Disclosure.",
    ],
  },
  { kind: "heading", size: 25, text: "Investigation" },
  {
    kind: "list",
    items: [
      "All Protected Disclosures reported under this Policy will be investigated by the Apex Kidney Care Pvt Ltd by Ethics officer or sent for investigation to such person as may be deemed fit.",
      "In exceptional cases, the Chairperson of the Audit Committee may refer the Protected Disclosure to an external investigator.",
      "The investigation shall be completed normally within 45 days of the receipt of the Protected Disclosure.",
      "The decision to conduct an investigation is not an acceptance of the accusation and is to be treated as part of the neutral fact-finding process.",
      "Decisions taken by the audit committee and/or the Chairperson of the Audit Committee, including interpretation of any of the clauses of this Policy, shall be final and binding on all concerned.",
    ],
  },
  { kind: "heading", size: 36, text: "4. Anonymity of Whistle Blower(s)" },
  {
    kind: "list",
    items: [
      "Our whistle blower anonymity approach will ensure that the identity of individual who reports concerns or wrongdoing is kept confidential to the fullest extent possible.",
      "We understand the potential risks associated with coming forward with sensitive information and are dedicated to protecting the anonymity of whistleblowers.",
      "Any reports made through our whistleblower channels will be handled with the utmost discretion & confidentiality.",
    ],
  },
  { kind: "heading", size: 36, text: "5. Rights and Obligations of the Subject" },
  {
    kind: "list",
    items: [
      <>
        The Subject(s) shall:
        <ol className="mt-2 flex list-outside list-[circle] flex-col gap-2 pl-8 text-[20px] leading-[1.6] font-light text-[#444444]">
          {SUBJECT_OBLIGATIONS.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </>,
      "The identity of the Subject(s) will be kept confidential to the extent possible given the legitimate needs of law and the investigation.",
    ],
  },
  { kind: "heading", size: 36, text: "6. Protection to WhistleBlower" },
  {
    kind: "list",
    items: [
      "The Company condemns any kind of discrimination, harassment, victimization or any other unfair practice against WhistleBlowers. No unfair treatment will be meted out to a Whistle Blower for making a Protected Disclosure under this Policy. To the extent applicable, complete protection will, be given to Whistle Blower against any unfair practice such as retaliation, threat or intimidation or termination/suspension of service/contract, disciplinary action, transfer, demotion, refusal of promotion, or the like including any direct or indirect use of authority to obstruct the Whistle Blower’s right to continue to perform his/her duties/functions including making further Protected Disclosure.",
      "Any other employee or director assisting in the said investigation shall also be protected to the same extent as the WhistleBlower.",
      "Any violation of the above clauses (a) and (b) may be reported to the Chairperson of the Audit Committee, who shall have it investigated and based on the report of the investigation, recommend suitable action to the management or the Board, as appropriate.",
      "The Company will take steps to minimize difficulties which the Whistle Blower may experience as a result of making the Protected Disclosure. Thus, if the WhistleBlower is required to give evidence in the criminal or disciplinary proceedings, the Company will arrange for the Whistle Blower to receive advice about the procedure, etc.",
    ],
  },
  { kind: "heading", size: 36, text: "7. Outcome of Investigation" },
  {
    kind: "list",
    items: [
      "If the investigation leads to the conclusion that an illegal, improper or unethical act has been committed, appropriate disciplinary or corrective action may be initiated against the Subject(s). The disciplinary action may include wage freeze, suspension, recovery, claw back, termination of employment/contract or any other punitive legal action.",
      "It is clarified that any disciplinary or corrective action initiated against the Subject(s) as a result of the findings of an investigation pursuant to this Policy shall adhere to the applicable personnel or staff conduct and disciplinary procedures.",
      "The progress, the outcome of the investigation and the actions taken may be communicated to the Whistle Blower in such manner as may be determined by the Apex Kidney Care Pvt Ltd by Ethics Officer.",
    ],
  },
  { kind: "heading", size: 36, text: "8. Disqualifications" },
  {
    kind: "text",
    text: "Protection under this Policy does not mean protection from any action arising out of false or bogus allegations made by a Whistle Blower in the Protected Disclosure knowing it to be false or bogus or with a bad faith intention, or such actions related to or arising from any event/incident or matter totally unconnected with the Protected Disclosure. Further, any abuse of protection under this policy will warrant appropriate action.",
  },
  { kind: "heading", size: 25, text: "Amendment" },
  {
    kind: "text",
    text: "Apex Kidney Care reserves its right to amend or modify this Policy in whole or in part, at any time without assigning any reason whatsoever.",
  },
];

const PolicySection = () => (
  <section className={`bg-white pt-8 pb-24 lg:pt-10 lg:pb-30 ${GUTTER}`}>
    <div className="mb-12">
      <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
        Whistle Blower Policy
      </h2>
    </div>

    <div>
      {CONTENT.map((block, index) => {
        if (block.kind === "heading") {
          return (
            <h2
              key={index}
              className={`mb-2.5 font-cormorant leading-[1.05] font-bold text-black ${
                block.size === 36 ? "text-[36px]" : "text-[25px]"
              }`}
            >
              {block.text}
            </h2>
          );
        }

        if (block.kind === "list") {
          return (
            <ul key={index} className="mb-7.5 flex flex-col gap-3.5">
              {block.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="relative ml-5 pl-1.5 font-roboto text-[17px] leading-[1.6] text-[#393f42]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-2 -left-4.5 size-2 rotate-45 bg-primary-subtle"
                  />
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={index}
            className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42]"
          >
            {block.text}
          </p>
        );
      })}
    </div>
  </section>
);

export default PolicySection;
