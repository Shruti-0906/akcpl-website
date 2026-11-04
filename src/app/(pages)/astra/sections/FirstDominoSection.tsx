import { GUTTER } from "@/constants";

const HOSPITALS = [
  {
    x: 120,
    index: "HOSPITAL 1",
    line1: "Bombay",
    line2: "Hospital",
    city: "Mumbai",
  },
  {
    x: 370,
    index: "HOSPITAL 2",
    line1: "Hinduja",
    line2: "Hospital",
    city: "Mumbai",
  },
  {
    x: 620,
    index: "HOSPITAL 3",
    line1: "Hiranandani",
    line2: "Hospital",
    city: "Mumbai",
  },
  {
    x: 870,
    index: "HOSPITAL 4",
    line1: "Lazarus",
    line2: "Hospital",
    city: "Hyderabad",
  },
] as const;

const CONNECTORS = [
  { x1: 190, x2: 300 },
  { x1: 440, x2: 550 },
  { x1: 690, x2: 800 },
] as const;

const HospitalChainDiagram = () => (
  <svg viewBox="0 0 1000 320" className="block h-auto w-full min-w-[780px]">
    <defs>
      <marker
        id="hospArr"
        markerWidth={9}
        markerHeight={9}
        refX={7}
        refY={4.5}
        orient="auto"
        markerUnits="strokeWidth"
      >
        <path d="M0,0 L0,9 L9,4.5 z" fill="#E5C07B" />
      </marker>
    </defs>

    {HOSPITALS.map((hospital) => (
      <g key={hospital.index} transform={`translate(${hospital.x}, 140)`}>
        <rect
          x={-70}
          y={-50}
          width={140}
          height={100}
          rx={3}
          fill="rgba(229,192,123,0.06)"
          stroke="rgba(229,192,123,0.35)"
          strokeWidth={1}
        />
        <text
          x={0}
          y={-22}
          fontFamily="'Roboto', sans-serif"
          fontSize={9}
          fontWeight={600}
          fill="#E5C07B"
          textAnchor="middle"
          letterSpacing={2}
        >
          {hospital.index}
        </text>
        <text
          x={0}
          y={0}
          fontFamily="'Roboto', sans-serif"
          fontSize={14}
          fontWeight={500}
          fill="#FBF8F3"
          textAnchor="middle"
        >
          {hospital.line1}
        </text>
        <text
          x={0}
          y={17}
          fontFamily="'Roboto', sans-serif"
          fontSize={14}
          fontWeight={500}
          fill="#FBF8F3"
          textAnchor="middle"
        >
          {hospital.line2}
        </text>
        <text
          x={0}
          y={38}
          fontFamily="'Roboto', sans-serif"
          fontStyle="italic"
          fontSize={11}
          fill="rgba(251,248,243,0.6)"
          textAnchor="middle"
        >
          {hospital.city}
        </text>
      </g>
    ))}

    {CONNECTORS.map((line) => (
      <line
        key={line.x1}
        x1={line.x1}
        y1={140}
        x2={line.x2}
        y2={140}
        stroke="#E5C07B"
        strokeWidth={1.5}
        markerEnd="url(#hospArr)"
        opacity={0.7}
      />
    ))}

    {/* Closing loop back to the first hospital. */}
    <path
      d="M 870 90 Q 870 30 500 30 Q 120 30 120 90"
      fill="none"
      stroke="#E5C07B"
      strokeWidth={1.5}
      markerEnd="url(#hospArr)"
      opacity={0.55}
      strokeDasharray="6 4"
    />

    <text
      x={500}
      y={290}
      fontFamily="'Roboto', sans-serif"
      fontSize={11}
      fontWeight={500}
      fill="#E5C07B"
      textAnchor="middle"
      letterSpacing={3}
    >
      SIMULTANEOUS SURGERIES · SAME DAY · COORDINATED ACROSS THE CHAIN
    </text>
  </svg>
);

const FirstDominoSection = () => (
  <section
    className={`relative overflow-hidden bg-secondary py-16 lg:py-32.5 ${GUTTER}`}
  >
    {/* Reference .first::before decorative wash. */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_92%_12%,rgba(184,134,11,0.18)_0%,transparent_60%),radial-gradient(ellipse_45%_40%_at_8%_88%,rgba(14,124,123,0.12)_0%,transparent_60%)]"
    />

    <div className="relative">
      <div className="mb-16">
        <div className="mb-5 flex items-center gap-3 font-roboto text-sm tracking-[0.22em] text-white uppercase">
          <span className="h-px w-6 bg-white" />
          The First Domino
        </div>

        <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-white">
          Four hospitals. Two cities.{" "}
          <span className="text-[#C9922A] italic">One simultaneous chain.</span>
        </h2>

        <p className="mt-5 font-roboto text-[17px] leading-relaxed text-[#FBF8F3]/72">
          The historic first ASTRA domino brought together{" "}
          <strong className="font-bold text-[#F5F0E8]">
            five donor-recipient pairs across four hospitals in two cities
          </strong>{" "}
          —{" "}
          <em className="text-[#C9922A] italic">
            Bombay Hospital, Hinduja Hospital, Hiranandani Hospital in Mumbai,
            and Lazarus Hospital in Hyderabad
          </em>
          . The chain required clinical coordination across the four
          institutions, simultaneous operating-theatre scheduling, and full
          procedural alignment. It was a proof of concept that the algorithm,
          the protocol, and the cross-institutional coordination could all work
          together at scale.
        </p>
      </div>

      <div className="relative mt-12 overflow-x-auto rounded-sm border border-[rgba(229,192,123,0.18)] bg-[rgba(229,192,123,0.04)] px-6 py-12 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-[#C9922A] before:content-[''] lg:px-10">
        <div className="mb-6 font-roboto text-sm tracking-[0.22em] text-white uppercase">
          // First Multi-Hospital Domino · Participating Institutions
        </div>

        <HospitalChainDiagram />

        <p className="mt-7 font-roboto text-[17px] leading-relaxed text-[#FBF8F3]/72">
          Authorised, scheduled, and executed as a single coordinated event —{" "}
          <em className="text-[#C9922A] italic">
            the first documented multi-hospital domino kidney transplant in
            India.
          </em>{" "}
          The proof point that paired exchange could scale beyond a single
          institution.
        </p>
      </div>
    </div>
  </section>
);

export default FirstDominoSection;
