import { GUTTER } from "@/constants";

/** Shared gradient defs — declared once, referenced by both schematics. */
const SwapGradients = () => (
  <defs>
    <linearGradient id="lockGradB" x1="30%" y1="30%" x2="70%" y2="100%">
      <stop offset="0%" stopColor="#9DB6A4" />
      <stop offset="100%" stopColor="#5C7766" />
    </linearGradient>
    <linearGradient id="lockGradA" x1="30%" y1="30%" x2="70%" y2="100%">
      <stop offset="0%" stopColor="#E5C07B" />
      <stop offset="100%" stopColor="#B8860B" />
    </linearGradient>
    <linearGradient id="lockGradAr" x1="30%" y1="30%" x2="70%" y2="100%">
      <stop offset="0%" stopColor="#B5495B" />
      <stop offset="100%" stopColor="#7E1F2C" />
    </linearGradient>
    <linearGradient id="lockGradBr" x1="30%" y1="30%" x2="70%" y2="100%">
      <stop offset="0%" stopColor="#1A9594" />
      <stop offset="100%" stopColor="#0A5A59" />
    </linearGradient>
  </defs>
);

const FAMILY_LABEL = {
  fontFamily: "'Roboto', sans-serif",
  fontSize: 9,
  fontWeight: 600,
  fill: "#6B7280",
  letterSpacing: 2,
} as const;

const BLOOD_LABEL = {
  fontFamily: "'Roboto', sans-serif",
  fontSize: 15,
  fontWeight: 500,
  fill: "#FBF8F3",
  textAnchor: "middle",
} as const;

const ROLE_LABEL = {
  fontFamily: "'Roboto', sans-serif",
  fontSize: 9,
  fontWeight: 500,
  fill: "#0E2540",
  textAnchor: "middle",
} as const;

/** Left schematic — both pairs locked by incompatibility. */
const LockedSchematic = () => (
  <svg viewBox="0 0 320 280" className="block h-auto w-full">
    <SwapGradients />

    <text x={16} y={40} {...FAMILY_LABEL}>
      FAMILY 1
    </text>
    <circle cx={100} cy={70} r={30} fill="url(#lockGradB)" />
    <text x={100} y={75} {...BLOOD_LABEL}>
      B
    </text>
    <text x={100} y={115} {...ROLE_LABEL}>
      Donor
    </text>
    <text
      x={160}
      y={76}
      fontFamily="'Roboto', sans-serif"
      fontStyle="italic"
      fontSize={22}
      fill="#B5495B"
      textAnchor="middle"
      fontWeight={500}
    >
      ⨯
    </text>
    <circle cx={220} cy={70} r={30} fill="url(#lockGradAr)" />
    <text x={220} y={75} {...BLOOD_LABEL}>
      A
    </text>
    <text x={220} y={115} {...ROLE_LABEL}>
      Patient
    </text>

    <line x1={16} y1={145} x2={304} y2={145} stroke="#E0DACE" strokeWidth={1} />

    <text x={16} y={178} {...FAMILY_LABEL}>
      FAMILY 2
    </text>
    <circle cx={100} cy={210} r={30} fill="url(#lockGradA)" />
    <text x={100} y={215} {...BLOOD_LABEL}>
      A
    </text>
    <text x={100} y={255} {...ROLE_LABEL}>
      Donor
    </text>
    <text
      x={160}
      y={216}
      fontFamily="'Roboto', sans-serif"
      fontStyle="italic"
      fontSize={22}
      fill="#B5495B"
      textAnchor="middle"
      fontWeight={500}
    >
      ⨯
    </text>
    <circle cx={220} cy={210} r={30} fill="url(#lockGradBr)" />
    <text x={220} y={215} {...BLOOD_LABEL}>
      B
    </text>
    <text x={220} y={255} {...ROLE_LABEL}>
      Patient
    </text>
  </svg>
);

/** Right schematic — pairs swapped via ASTRA. */
const SwappedSchematic = () => (
  <svg viewBox="0 0 320 280" className="block h-auto w-full">
    <defs>
      <marker
        id="swapArrow"
        markerWidth={8}
        markerHeight={8}
        refX={6}
        refY={4}
        orient="auto"
        markerUnits="strokeWidth"
      >
        <path d="M0,0 L0,8 L8,4 z" fill="#0E7C7B" />
      </marker>
    </defs>

    <text x={16} y={40} {...FAMILY_LABEL}>
      FAMILY 1
    </text>
    <circle cx={100} cy={70} r={30} fill="url(#lockGradB)" />
    <text x={100} y={75} {...BLOOD_LABEL}>
      B
    </text>
    <text x={100} y={115} {...ROLE_LABEL}>
      Donor
    </text>
    <circle cx={220} cy={70} r={30} fill="url(#lockGradAr)" />
    <text x={220} y={75} {...BLOOD_LABEL}>
      A
    </text>
    <text x={220} y={115} {...ROLE_LABEL}>
      Patient
    </text>

    <line x1={16} y1={145} x2={304} y2={145} stroke="#E0DACE" strokeWidth={1} />

    <text x={16} y={178} {...FAMILY_LABEL}>
      FAMILY 2
    </text>
    <circle cx={100} cy={210} r={30} fill="url(#lockGradA)" />
    <text x={100} y={215} {...BLOOD_LABEL}>
      A
    </text>
    <text x={100} y={255} {...ROLE_LABEL}>
      Donor
    </text>
    <circle cx={220} cy={210} r={30} fill="url(#lockGradBr)" />
    <text x={220} y={215} {...BLOOD_LABEL}>
      B
    </text>
    <text x={220} y={255} {...ROLE_LABEL}>
      Patient
    </text>

    <path
      d="M 130 90 Q 175 145 195 195"
      fill="none"
      stroke="#0E7C7B"
      strokeWidth={2.5}
      markerEnd="url(#swapArrow)"
    />
    <path
      d="M 130 195 Q 175 145 195 90"
      fill="none"
      stroke="#0E7C7B"
      strokeWidth={2.5}
      markerEnd="url(#swapArrow)"
    />

    <g>
      <rect x={240} y={135} width={58} height={18} rx={9} fill="#003e68" />
      <text
        x={269}
        y={148}
        fontFamily="'Roboto', sans-serif"
        fontSize={8}
        fontWeight={600}
        fill="#fff"
        textAnchor="middle"
        letterSpacing={2}
      >
        SWAP
      </text>
    </g>
  </svg>
);

const SwapSection = () => (
  <section className={`bg-[#e0f2f9] py-16 lg:py-32.5 ${GUTTER}`}>
    <div className="mb-16">
      <div className="mb-5 flex items-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
        <span className="h-px w-6 bg-black" />
        The Binary Swap
      </div>

      <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
        Two families. Two donors.{" "}
        <span className="text-primary-subtle italic">Two transplants.</span>
      </h2>

      <p className="mt-5 font-roboto text-[17px] leading-relaxed text-[#393f42]">
        The simplest paired exchange involves{" "}
        <strong className="font-bold text-secondary">
          two donor-recipient pairs.
        </strong>{" "}
        Family 1&apos;s donor is compatible with Family 2&apos;s patient; Family
        2&apos;s donor is compatible with Family 1&apos;s patient. Both
        transplants are{" "}
        <em className="text-primary-subtle italic">scheduled simultaneously</em>
        , performed on the same day, so that no donor can withdraw after the
        other has given. Two families that were each blocked by their own
        incompatibility leave the operating theatre with two new kidneys in two
        new bodies.
      </p>
    </div>

    <div className="relative mt-12 rounded-sm bg-white px-6 py-14 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-primary-subtle before:content-[''] lg:px-12">
      <div className="mb-9 flex items-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
        <span className="h-px w-6 bg-black" />
        Binary Swap · Schematic
      </div>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-center">
          <div className="mb-5 font-roboto text-[10px] font-bold tracking-[0.22em] text-[#393f42] uppercase">
            Without a registry · Both pairs locked
          </div>
          <div className="w-full max-w-[340px]">
            <LockedSchematic />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-5 font-roboto text-[10px] font-bold tracking-[0.22em] text-[#393f42] uppercase">
            Via ASTRA · Pairs swapped
          </div>
          <div className="w-full max-w-[340px]">
            <SwappedSchematic />
          </div>
        </div>
      </div>

      <div className="my-9 rounded-r-sm border-l-2 border-primary-subtle bg-[#0e7c7b]/[0.06] px-7.5 py-6.5">
        <p className="font-roboto text-[17px] leading-relaxed text-[#393f42]">
          <strong className="font-bold text-black">
            Both surgeries happen simultaneously.
          </strong>{" "}
          Both families receive a kidney that was{" "}
          <em className="italic">always available within the larger pool</em> —
          it just needed a registry to find the right match.
        </p>
      </div>
    </div>
  </section>
);

export default SwapSection;
