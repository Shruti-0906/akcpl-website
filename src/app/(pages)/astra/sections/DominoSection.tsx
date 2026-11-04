import { GUTTER } from "@/constants";

const DONORS = [
  { cx: 120, fill: "url(#rcFill)", group: "O", relation: "Father" },
  { cx: 290, fill: "url(#dnFillB)", group: "B", relation: "Wife" },
  { cx: 460, fill: "url(#dnFillA)", group: "A", relation: "Wife" },
  { cx: 630, fill: "url(#dnFillB)", group: "B", relation: "Husband" },
  { cx: 800, fill: "url(#dnFillA)", group: "A", relation: "Wife" },
] as const;

const RECIPIENTS = [
  { cx: 120, fill: "url(#dnFillB)", group: "B", relation: "Daughter" },
  { cx: 290, fill: "url(#dnFillA)", group: "A", relation: "Husband" },
  { cx: 460, fill: "url(#dnFillB)", group: "B", relation: "Husband" },
  { cx: 630, fill: "url(#dnFillA)", group: "A", relation: "Wife" },
  { cx: 800, fill: "url(#rcFill)", group: "O", relation: "Husband" },
] as const;

const CHAIN_ARROWS = [
  "M 145 95 Q 200 175 270 235",
  "M 315 95 Q 370 175 440 235",
  "M 485 95 Q 540 175 610 235",
  "M 655 95 Q 710 175 780 235",
] as const;

const ChainDiagram = () => (
  <svg viewBox="0 0 1000 360" className="block h-auto w-full min-w-[780px]">
    <defs>
      <linearGradient id="dnFill" x1="30%" y1="30%" x2="70%" y2="100%">
        <stop offset="0%" stopColor="#1A9594" />
        <stop offset="100%" stopColor="#0A5A59" />
      </linearGradient>
      <linearGradient id="rcFill" x1="30%" y1="30%" x2="70%" y2="100%">
        <stop offset="0%" stopColor="#B5495B" />
        <stop offset="100%" stopColor="#7E1F2C" />
      </linearGradient>
      <linearGradient id="dnFillB" x1="30%" y1="30%" x2="70%" y2="100%">
        <stop offset="0%" stopColor="#9DB6A4" />
        <stop offset="100%" stopColor="#5C7766" />
      </linearGradient>
      <linearGradient id="dnFillA" x1="30%" y1="30%" x2="70%" y2="100%">
        <stop offset="0%" stopColor="#E5C07B" />
        <stop offset="100%" stopColor="#B8860B" />
      </linearGradient>
      <marker
        id="chainArr"
        markerWidth={9}
        markerHeight={9}
        refX={7}
        refY={4.5}
        orient="auto"
        markerUnits="strokeWidth"
      >
        <path d="M0,0 L0,9 L9,4.5 z" fill="#B8860B" />
      </marker>
    </defs>

    <text
      x={20}
      y={50}
      fontFamily="'Roboto', sans-serif"
      fontSize={10}
      fontWeight={600}
      fill="#0E7C7B"
      letterSpacing={2}
    >
      DONORS
    </text>

    {DONORS.map((donor) => (
      <g key={`donor-${donor.cx}`}>
        <circle cx={donor.cx} cy={70} r={38} fill={donor.fill} />
        <text
          x={donor.cx}
          y={76}
          fontFamily="'Roboto', sans-serif"
          fontSize={20}
          fontWeight={500}
          fill="#FBF8F3"
          textAnchor="middle"
        >
          {donor.group}
        </text>
        <text
          x={donor.cx}
          y={125}
          fontFamily="'Roboto', sans-serif"
          fontStyle="italic"
          fontSize={11}
          fill="#6B7280"
          textAnchor="middle"
        >
          {donor.relation}
        </text>
      </g>
    ))}

    {CHAIN_ARROWS.map((d) => (
      <path
        key={d}
        d={d}
        fill="none"
        stroke="#B8860B"
        strokeWidth={2.5}
        markerEnd="url(#chainArr)"
        opacity={0.85}
      />
    ))}

    {/* Closing loop from the last donor back to the first recipient. */}
    <path
      d="M 820 90 Q 920 200 920 250 Q 920 290 60 290 Q 60 200 95 250"
      fill="none"
      stroke="#B8860B"
      strokeWidth={2.5}
      markerEnd="url(#chainArr)"
      opacity={0.7}
      strokeDasharray="6 4"
    />

    <text
      x={20}
      y={265}
      fontFamily="'Roboto', sans-serif"
      fontSize={10}
      fontWeight={600}
      fill="#0E7C7B"
      letterSpacing={2}
    >
      RECIPIENTS
    </text>

    {RECIPIENTS.map((person) => (
      <g key={`recipient-${person.cx}`}>
        <circle cx={person.cx} cy={270} r={38} fill={person.fill} />
        <text
          x={person.cx}
          y={276}
          fontFamily="'Roboto', sans-serif"
          fontSize={20}
          fontWeight={500}
          fill="#FBF8F3"
          textAnchor="middle"
        >
          {person.group}
        </text>
        <text
          x={person.cx}
          y={325}
          fontFamily="'Roboto', sans-serif"
          fontStyle="italic"
          fontSize={11}
          fill="#6B7280"
          textAnchor="middle"
        >
          {person.relation}
        </text>
      </g>
    ))}
  </svg>
);

const DominoSection = () => (
  <section className={`bg-[#e0f2f9] py-16 lg:py-32.5 ${GUTTER}`}>
    <div className="mb-14">
      <div className="mb-5 flex items-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
        <span className="h-px w-6 bg-black" />
        The Domino Expansion
      </div>

      <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
        Beyond two pairs.{" "}
        <span className="text-primary-subtle italic">Beyond one swap.</span>
      </h2>

      <p className="mt-5 font-roboto text-[17px] leading-relaxed text-[#393f42]">
        A binary swap involves two pairs. A{" "}
        <strong className="font-bold text-secondary">
          domino chain involves three, four, or five
        </strong>{" "}
        — with each family&apos;s donor giving to the next family&apos;s patient
        in a cycle. The mathematical and logistical complexity grows steeply
        with chain length.{" "}
        <em className="text-primary-subtle italic">
          So does the number of patients who can finally be transplanted.
        </em>{" "}
        ASTRA was, to our knowledge, the first Indian registry to implement
        domino matching at scale.
      </p>
    </div>

    <div className="relative mb-12 overflow-x-auto rounded-sm bg-white px-6 py-12 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-primary-subtle before:content-[''] lg:px-10">
      <div className="mb-6 flex items-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
        <span className="h-px w-6 bg-black" />
        // 5-Way Domino Chain · The First ASTRA Domino
      </div>

      <ChainDiagram />

      <p className="mt-6 font-roboto text-[17px] leading-relaxed text-[#393f42]">
        Five donor-recipient pairs —{" "}
        <em className="text-primary-subtle italic">
          five families locked by incompatibility
        </em>{" "}
        — coordinated across multiple hospitals into one simultaneous chain of
        transplants. Each family&apos;s donor gave to the next family&apos;s
        patient; the chain closed when the last donor gave to the first
        family&apos;s patient.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="relative rounded-sm border border-[#d1f1ff] bg-white px-11 py-12 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-primary-subtle before:content-['']">
        <div className="mb-4.5 flex items-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
          <span className="h-px w-6 bg-black" />
          // Binary Swaps Only
        </div>

        <div className="mb-5.5 flex flex-wrap items-baseline gap-4.5">
          <div className="font-roboto text-[72px] leading-none font-bold tracking-[-0.028em] text-primary-subtle">
            45
            <span className="align-top text-[42px] text-primary-light">%</span>
          </div>
          <h3 className="font-roboto text-[22px] leading-[1.2] font-bold tracking-[-0.008em] text-secondary">
            Of pairs matched{" "}
            <em className="font-normal text-primary-subtle italic">
              using only binary swaps
            </em>
          </h3>
        </div>

        <p className="mb-4.5 font-roboto text-[17px] leading-[22px] font-light text-[#2A2A2A]">
          Restricting the matching algorithm to two-pair binary swaps yields 92
          successful matches out of 202 D-R pairs.{" "}
          <strong className="font-bold text-secondary">
            More than half the registry&apos;s pairs go unmatched.
          </strong>
        </p>

        <div className="border-t border-[#d1f1ff] pt-4.5 font-roboto text-xs leading-relaxed tracking-[0.02em] text-[#666666]">
          Pool:{" "}
          <strong className="font-bold text-primary-subtle">202 pairs</strong> ·
          Output:{" "}
          <strong className="font-bold text-primary-subtle">
            92 transplants
          </strong>
        </div>
      </div>

      <div className="relative rounded-sm border border-[#d1f1ff] bg-white px-11 py-12 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-primary-subtle before:content-['']">
        <div className="mb-4.5 flex items-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
          <span className="h-px w-6 bg-black" />
          // Binary + Dominos (up to 5-pair)
        </div>

        <div className="mb-5.5 flex flex-wrap items-baseline gap-4.5">
          <div className="font-roboto text-[72px] leading-none font-bold tracking-[-0.028em] text-primary-subtle">
            61
            <span className="align-top text-[42px] text-primary-light">%</span>
          </div>
          <h3 className="font-roboto text-[22px] leading-[1.2] font-bold tracking-[-0.008em] text-secondary">
            Of pairs matched{" "}
            <em className="font-normal text-primary-subtle italic">
              when dominos are added
            </em>
          </h3>
        </div>

        <p className="mb-4.5 font-roboto text-[17px] leading-[22px] font-light text-[#2A2A2A]">
          The same pool, with the algorithm permitted to construct domino chains
          up to 5 pairs long, yields 123 transplants.{" "}
          <strong className="font-bold text-secondary">
            An additional 31 patients receive a kidney
          </strong>{" "}
          who would otherwise have been unmatched.
        </p>

        <div className="border-t border-[#d1f1ff] pt-4.5 font-roboto text-xs leading-relaxed tracking-[0.02em] text-[#666666]">
          Pool:{" "}
          <strong className="font-bold text-primary-subtle">202 pairs</strong> ·
          Output:{" "}
          <strong className="font-bold text-primary-subtle">
            123 transplants
          </strong>{" "}
          · composition:{" "}
          <strong className="font-bold text-primary-subtle">
            6 five-way dominos, 29 three-way dominos, 3 binary swaps
          </strong>
        </div>
      </div>
    </div>

    <p className="mx-auto mt-9 text-center font-roboto text-lg leading-relaxed text-[#393f42] italic">
      <strong className="font-bold text-secondary not-italic">
        +16 percentage points of additional matches
      </strong>{" "}
      — a 35% relative improvement — achieved by extending the algorithm from
      <br />
      binary-only to multi-pair dominos.{" "}
      <em className="text-primary-subtle italic">
        As the registry grows, this benefit expands further.
      </em>
    </p>
  </section>
);

export default DominoSection;
