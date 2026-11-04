import { GUTTER } from "@/constants";

const PairedExchangeDiagram = () => (
  <svg viewBox="0 0 500 500" className="mx-auto w-full max-w-xl">
    <defs>
      <linearGradient id="circleGradTeal" x1="30%" y1="30%" x2="70%" y2="100%">
        <stop offset="0%" stopColor="#1A9594" />
        <stop offset="100%" stopColor="#0A5A59" />
      </linearGradient>
      <linearGradient id="circleGradGold" x1="30%" y1="30%" x2="70%" y2="100%">
        <stop offset="0%" stopColor="#E5C07B" />
        <stop offset="100%" stopColor="#B8860B" />
      </linearGradient>
      <linearGradient id="circleGradSage" x1="30%" y1="30%" x2="70%" y2="100%">
        <stop offset="0%" stopColor="#9DB6A4" />
        <stop offset="100%" stopColor="#5C7766" />
      </linearGradient>
      <linearGradient id="circleGradRose" x1="30%" y1="30%" x2="70%" y2="100%">
        <stop offset="0%" stopColor="#B5495B" />
        <stop offset="100%" stopColor="#7E1F2C" />
      </linearGradient>
      <marker
        id="arr-teal"
        markerWidth={8}
        markerHeight={8}
        refX={6}
        refY={4}
        orient="auto"
        markerUnits="strokeWidth"
      >
        <path d="M0,0 L0,8 L8,4 z" fill="#0E7C7B" />
      </marker>
      <marker
        id="arr-gold"
        markerWidth={8}
        markerHeight={8}
        refX={6}
        refY={4}
        orient="auto"
        markerUnits="strokeWidth"
      >
        <path d="M0,0 L0,8 L8,4 z" fill="#B8860B" />
      </marker>
    </defs>

    <circle
      cx={250}
      cy={250}
      r={230}
      fill="none"
      stroke="#E5C07B"
      strokeWidth={0.5}
      strokeDasharray="3 5"
      opacity={0.4}
    />
    <circle
      cx={250}
      cy={250}
      r={200}
      fill="none"
      stroke="rgba(14,124,123,0.2)"
      strokeWidth={1}
    />

    {/* Family 1 */}
    <g transform="translate(130, 110)">
      <text
        x={0}
        y={-50}
        fontFamily="'Roboto', sans-serif"
        fontSize={10}
        fontWeight={600}
        fill="#0E7C7B"
        letterSpacing={2}
        textAnchor="middle"
      >
        FAMILY 1
      </text>
      <circle cx={-45} cy={0} r={36} fill="url(#circleGradSage)" />
      <text
        x={-45}
        y={5}
        fontFamily="'Roboto', sans-serif"
        fontSize={18}
        fontWeight={500}
        fill="#FBF8F3"
        textAnchor="middle"
      >
        B
      </text>
      <text
        x={-45}
        y={55}
        fontFamily="'Roboto', sans-serif"
        fontSize={9}
        fontWeight={500}
        fill="#0E2540"
        textAnchor="middle"
      >
        DONOR
      </text>
      <circle cx={45} cy={0} r={36} fill="url(#circleGradRose)" />
      <text
        x={45}
        y={5}
        fontFamily="'Roboto', sans-serif"
        fontSize={18}
        fontWeight={500}
        fill="#FBF8F3"
        textAnchor="middle"
      >
        A
      </text>
      <text
        x={45}
        y={55}
        fontFamily="'Roboto', sans-serif"
        fontSize={9}
        fontWeight={500}
        fill="#0E2540"
        textAnchor="middle"
      >
        PATIENT
      </text>
      <text
        x={0}
        y={5}
        fontFamily="'Roboto', sans-serif"
        fontStyle="italic"
        fontSize={11}
        fill="#B5495B"
        textAnchor="middle"
      >
        ≠
      </text>
    </g>

    {/* Family 2 */}
    <g transform="translate(370, 390)">
      <text
        x={0}
        y={80}
        fontFamily="'Roboto', sans-serif"
        fontSize={10}
        fontWeight={600}
        fill="#0E7C7B"
        letterSpacing={2}
        textAnchor="middle"
      >
        FAMILY 2
      </text>
      <circle cx={-45} cy={0} r={36} fill="url(#circleGradGold)" />
      <text
        x={-45}
        y={5}
        fontFamily="'Roboto', sans-serif"
        fontSize={18}
        fontWeight={500}
        fill="#FBF8F3"
        textAnchor="middle"
      >
        A
      </text>
      <text
        x={-45}
        y={55}
        fontFamily="'Roboto', sans-serif"
        fontSize={9}
        fontWeight={500}
        fill="#0E2540"
        textAnchor="middle"
      >
        DONOR
      </text>
      <circle cx={45} cy={0} r={36} fill="url(#circleGradTeal)" />
      <text
        x={45}
        y={5}
        fontFamily="'Roboto', sans-serif"
        fontSize={18}
        fontWeight={500}
        fill="#FBF8F3"
        textAnchor="middle"
      >
        B
      </text>
      <text
        x={45}
        y={55}
        fontFamily="'Roboto', sans-serif"
        fontSize={9}
        fontWeight={500}
        fill="#0E2540"
        textAnchor="middle"
      >
        PATIENT
      </text>
      <text
        x={0}
        y={5}
        fontFamily="'Roboto', sans-serif"
        fontStyle="italic"
        fontSize={11}
        fill="#B5495B"
        textAnchor="middle"
      >
        ≠
      </text>
    </g>

    {/* Swap arrows */}
    <path
      d="M 90 130 Q 250 250 410 380"
      fill="none"
      stroke="#0E7C7B"
      strokeWidth={2.5}
      markerEnd="url(#arr-teal)"
      opacity={0.85}
    />
    <path
      d="M 325 380 Q 250 250 180 130"
      fill="none"
      stroke="#B8860B"
      strokeWidth={2.5}
      markerEnd="url(#arr-gold)"
      opacity={0.85}
    />

    {/* Centre ASTRA badge */}
    <g transform="translate(250, 250)">
      <circle r={56} fill="#0E2540" />
      <circle
        r={56}
        fill="none"
        stroke="#E5C07B"
        strokeWidth={1}
        opacity={0.6}
      />
      <circle
        r={46}
        fill="none"
        stroke="#E5C07B"
        strokeWidth={0.5}
        opacity={0.35}
      />
      <text
        x={0}
        y={-2}
        fontFamily="'Roboto', sans-serif"
        fontWeight={500}
        fontSize={20}
        fill="#FBF8F3"
        textAnchor="middle"
        letterSpacing={2}
      >
        ASTRA
      </text>
      <text
        x={0}
        y={18}
        fontFamily="'Roboto', sans-serif"
        fontSize={7}
        fontWeight={600}
        fill="#E5C07B"
        textAnchor="middle"
        letterSpacing={3}
      >
        SINCE 2011
      </text>
    </g>
  </svg>
);

const ProblemSection = () => (
  <section
    className={`relative overflow-hidden bg-white py-16 lg:py-32.5 ${GUTTER}`}
  >
    {/* Reference .problem::before decorative wash. */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_92%_12%,rgba(14,124,123,0.18)_0%,transparent_60%),radial-gradient(ellipse_45%_40%_at_8%_88%,rgba(181,73,91,0.1)_0%,transparent_60%)]"
    />

    <div className="relative">
      <div className="mb-5 flex items-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
        <span className="h-px w-6 bg-black" />
        The Problem
      </div>

      <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
        A willing family donor —{" "}
        <span className="text-primary-subtle italic">
          but the wrong blood group, the wrong cross-match, or the wrong viral
          status.
        </span>
      </h2>

      <div className="mt-8 grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <PairedExchangeDiagram />

        <div>
          <p className="mb-4 font-roboto text-[17px] leading-relaxed text-[#393f42]">
            A significant fraction of Indian patients waiting for a kidney
            transplant{" "}
            <strong className="font-bold text-black">
              have a family member willing to donate
            </strong>{" "}
            — a parent, spouse, sibling, child. But intent alone does not make a
            transplant possible. The donor must also be{" "}
            <em className="text-[#C9922A] italic">
              medically and immunologically compatible
            </em>
            : matched blood group, negative cross-match, no transmissible viral
            infection that disqualifies them.
          </p>

          <p className="mb-4 font-roboto text-[17px] leading-relaxed text-[#393f42]">
            When the family donor is incompatible, the patient&apos;s options
            narrow sharply. They wait for a deceased donor — a wait that in
            India can stretch for years. They consider ABO-incompatible
            transplant, which is medically more complex and expensive. Or,
            increasingly,{" "}
            <strong className="font-bold text-black">
              they enter a paired kidney exchange
            </strong>{" "}
            — pairing their willing donor with another family in the same
            predicament, so that each family&apos;s donor gives to the
            other&apos;s patient.
          </p>

          <p className="mb-4 font-roboto text-[17px] leading-relaxed text-[#393f42]">
            This is the model ASTRA was built around.{" "}
            <em className="text-[#C9922A] italic">
              The kidney that was always available in the family stays in the
              system — it just goes to a different recipient.
            </em>
          </p>

          <div className="my-9 rounded-r-sm border-l-2 border-primary-subtle bg-[#0e7c7b]/[0.06] px-7.5 py-6.5">
            <p className="font-roboto text-[17px] leading-relaxed text-[#393f42]">
              <strong className="font-bold text-black">
                Behind every locked donor-recipient pair
              </strong>{" "}
              is a patient who could be transplanted, a willing donor whose
              kidney would otherwise go unused, and a family counting time.{" "}
              <strong className="font-bold text-black">
                ASTRA&apos;s job is to unlock them.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
