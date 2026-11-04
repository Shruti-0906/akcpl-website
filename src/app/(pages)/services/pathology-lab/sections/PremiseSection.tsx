import { GUTTER } from "@/constants";

const SampleFlowDiagram = () => (
  <svg viewBox="0 0 500 500" className="mx-auto w-full max-w-xl">
    <defs>
      <linearGradient id="vialG" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FBF8F3" stopOpacity={0.3} />
        <stop offset="40%" stopColor="#0E7C7B" stopOpacity={0.15} />
        <stop offset="100%" stopColor="#0A5A59" stopOpacity={0.5} />
      </linearGradient>
      <linearGradient id="bloodG" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#C9304A" />
        <stop offset="100%" stopColor="#7E1F2C" />
      </linearGradient>
      <linearGradient id="flowG" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0E7C7B" />
        <stop offset="100%" stopColor="#B8860B" />
      </linearGradient>
    </defs>

    <circle
      cx={250}
      cy={250}
      r={220}
      fill="none"
      stroke="rgba(14,124,123,0.1)"
      strokeWidth={0.5}
      strokeDasharray="3 5"
    />
    <circle
      cx={250}
      cy={250}
      r={180}
      fill="none"
      stroke="rgba(229,192,123,0.15)"
      strokeWidth={0.5}
    />

    <g transform="translate(250, 250)">
      <path
        d="M -36 -90 L -36 -76 L -32 -72 L -32 60 Q -32 85 -16 92 Q 0 96 16 92 Q 32 85 32 60 L 32 -72 L 36 -76 L 36 -90 Z"
        fill="url(#vialG)"
        stroke="#0A5A59"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <rect x={-36} y={-100} width={72} height={14} rx={3} fill="#5C7766" />
      <rect x={-36} y={-100} width={72} height={4} fill="#3F5849" />
      <path
        d="M -32 0 L -32 60 Q -32 85 -16 92 Q 0 96 16 92 Q 32 85 32 60 L 32 0 Z"
        fill="url(#bloodG)"
        opacity={0.85}
      />
      <line
        x1={-32}
        y1={-40}
        x2={-22}
        y2={-40}
        stroke="#0A5A59"
        strokeWidth={0.7}
        opacity={0.5}
      />
      <line
        x1={-32}
        y1={-20}
        x2={-26}
        y2={-20}
        stroke="#0A5A59"
        strokeWidth={0.7}
        opacity={0.4}
      />
      <line
        x1={-32}
        y1={0}
        x2={-22}
        y2={0}
        stroke="#0A5A59"
        strokeWidth={0.7}
        opacity={0.5}
      />
      <line
        x1={-32}
        y1={20}
        x2={-26}
        y2={20}
        stroke="#0A5A59"
        strokeWidth={0.7}
        opacity={0.4}
      />
    </g>

    <g stroke="url(#flowG)" strokeWidth={1.2} fill="none" strokeDasharray="3 4">
      <path d="M 282 200 Q 360 170 400 130" />
      <path d="M 290 250 Q 380 250 420 250" />
      <path d="M 282 300 Q 360 330 400 370" />
      <path d="M 218 200 Q 140 170 100 130" />
      <path d="M 210 250 Q 120 250 80 250" />
      <path d="M 218 300 Q 140 330 100 370" />
    </g>

    {[
      { x: 420, y: 130, stroke: "#B8860B", fill: "#8C6508", label: "Cr" },
      { x: 440, y: 250, stroke: "#B8860B", fill: "#8C6508", label: "eGFR" },
      { x: 420, y: 370, stroke: "#B8860B", fill: "#8C6508", label: "K+" },
      { x: 80, y: 130, stroke: "#0E7C7B", fill: "#0A5A59", label: "Hb" },
      { x: 60, y: 250, stroke: "#0E7C7B", fill: "#0A5A59", label: "PTH" },
      { x: 80, y: 370, stroke: "#0E7C7B", fill: "#0A5A59", label: "Ca" },
    ].map((node) => (
      <g key={node.label} transform={`translate(${node.x}, ${node.y})`}>
        <circle r={22} fill="#FBF8F3" stroke={node.stroke} strokeWidth={1.5} />
        <text
          x={0}
          y={4}
          fontFamily="'Roboto', sans-serif"
          fontSize={9}
          fontWeight={600}
          fill={node.fill}
          textAnchor="middle"
          letterSpacing={1}
        >
          {node.label}
        </text>
      </g>
    ))}

    <g transform="translate(250, 450)">
      <text
        x={0}
        y={-6}
        fontFamily="'Roboto', sans-serif"
        fontSize={9}
        fontWeight={600}
        fill="#5C7766"
        textAnchor="middle"
        letterSpacing={3}
      >
        AXIS EMR INTEGRATION
      </text>
      <path
        d="M -120 4 L -90 4 L -85 -8 L -75 14 L -65 -2 L -55 4 L -25 4 L -20 -10 L -10 12 L 0 4 L 35 4 L 40 -8 L 50 14 L 60 -2 L 70 4 L 120 4"
        stroke="#0E7C7B"
        strokeWidth={1.5}
        fill="none"
        strokeLinecap="round"
      />
    </g>

    <text
      x={250}
      y={494}
      fontFamily="'Roboto', sans-serif"
      fontStyle="italic"
      fontSize={11}
      fill="#5C7766"
      textAnchor="middle"
    >
      Sample · Result · Trend · All in one institution.
    </text>
  </svg>
);

const PremiseSection = () => (
  <section
    className={`relative overflow-hidden bg-white py-16 lg:py-32.5 ${GUTTER}`}
  >
    {/* Reference .premise::before decorative wash. */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_92%_10%,rgba(14,124,123,0.22)_0%,transparent_60%),radial-gradient(ellipse_45%_40%_at_5%_92%,rgba(229,192,123,0.08)_0%,transparent_60%)]"
    />

    <div className="relative">
      <div className="mb-5 flex items-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
        <span className="h-px w-6 bg-black" />
        Why an In-House Lab
      </div>
      <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
        When the lab and the dialysis centre{" "}
        <span className="text-primary-subtle italic">share a database,</span>{" "}
        medicine changes.
      </h2>

      <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <SampleFlowDiagram />

        <div className="space-y-5">
          <p className="font-roboto text-[17px] leading-relaxed text-[#393f42]">
            Most dialysis networks send their patients to{" "}
            <strong className="font-bold">outside diagnostic labs</strong>. The
            lab returns a PDF report, the patient brings it back to the next
            consultation, the nephrologist reads it once, and the data lives in
            a folder somewhere —{" "}
            <em className="italic">
              disconnected from every other test that patient has ever had.
            </em>
          </p>
          <p className="font-roboto text-[17px] leading-relaxed text-[#393f42]">
            AKCPL was built on the opposite premise.{" "}
            <strong className="font-bold">
              Every test we run on an AKC patient flows directly into Axis EMR —
              the same system holding their dialysis prescriptions, their home
              HD records, their vascular access history, and every blood test
              they have ever had with us.
            </strong>{" "}
            <em className="italic">
              The result becomes a data point in a continuous timeline.
            </em>
          </p>
          <p className="font-roboto text-[17px] leading-relaxed text-[#393f42]">
            That changes what the nephrologist sees. Not{" "}
            <em className="italic">&ldquo;the latest haemoglobin&rdquo;</em> —
            but{" "}
            <strong className="font-bold">
              the patient&apos;s haemoglobin trend over twelve months, with the
              EPO dose changes and the iron studies overlaid.
            </strong>{" "}
            Not <em className="italic">&ldquo;the latest PTH&rdquo;</em> — but{" "}
            <strong className="font-bold">
              where this patient sits across the cohort of AKC dialysis patients
            </strong>{" "}
            with similar risk profiles.
          </p>

          <div className="rounded-r-sm border-l-2 border-primary-subtle bg-[#0e7c7b]/[0.06] px-7 py-6">
            <p className="font-roboto text-[17px] leading-[1.45] text-[#393f42]">
              <strong className="font-bold">
                Most labs hand over a result.
              </strong>{" "}
              AKCPL hands over a result, a trend, a cohort comparison, and a
              flag if something&apos;s drifting.{" "}
              <em className="italic">
                That is what an in-house lab for a nephrology institution should
                actually do.
              </em>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PremiseSection;
