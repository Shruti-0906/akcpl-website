import type { AccessType } from "./AccessCard";

/** `.ac-visual svg` — full width of the tinted column, capped at the viewBox. */
const DIAGRAM = "mb-3.5 block h-auto w-full max-w-[240px]";
const DIAGRAM_LABEL = "'Roboto', sans-serif";

export const ACCESS_TYPES: readonly AccessType[] = [
  {
    id: "avf",
    visual: (
      <svg
        aria-hidden="true"
        className={DIAGRAM}
        viewBox="0 0 240 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="avfA" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <linearGradient id="avfV" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
        </defs>
        {/* artery */}
        <path
          d="M 40 20 Q 45 100 50 180"
          stroke="url(#avfA)"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
        />
        {/* vein with bulge at AVF */}
        <path
          d="M 160 20 Q 150 80 110 100 Q 145 110 155 130 Q 165 160 170 180"
          stroke="url(#avfV)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        {/* AVF junction circle */}
        <circle cx="80" cy="100" r="18" fill="rgba(14,124,123,0.25)" />
        <circle cx="80" cy="100" r="11" fill="#fff" />
        {/* pulsing rings */}
        <circle
          cx="80"
          cy="100"
          r="28"
          fill="none"
          stroke="#fff"
          strokeWidth="0.6"
          opacity="0.4"
        />
        <circle
          cx="80"
          cy="100"
          r="40"
          fill="none"
          stroke="#fff"
          strokeWidth="0.4"
          opacity="0.22"
        />
        {/* labels */}
        <text
          x="20"
          y="15"
          fontFamily={DIAGRAM_LABEL}
          fontSize="8"
          fontWeight="600"
          fill="#fff"
          letterSpacing="1"
        >
          ARTERY
        </text>
        <text
          x="160"
          y="15"
          fontFamily={DIAGRAM_LABEL}
          fontSize="8"
          fontWeight="600"
          fill="#fff"
          letterSpacing="1"
        >
          VEIN
        </text>
        <text
          x="120"
          y="103"
          fontFamily={DIAGRAM_LABEL}
          fontStyle="italic"
          fontSize="10"
          fill="#fff"
        >
          AVF
        </text>
      </svg>
    ),
    badgeGlyph: "★",
    badge: <>Best Choice &middot; Gold Standard</>,
    title: (
      <>
        AV <em className="text-primary-subtle italic">Fistula</em>
      </>
    ),
    abbreviation: "AVF",
    subtitle: (
      <>
        A direct connection between your own vein and your own artery &mdash;
        usually in your forearm.
      </>
    ),
    body: (
      <>
        The surgeon makes a small incision on your forearm or upper arm and{" "}
        <strong>connects one of your veins directly to a nearby artery.</strong>{" "}
        Over the following weeks, the vein gradually enlarges and strengthens
        under the higher blood pressure &mdash; a process called{" "}
        <em>maturation</em>. Once mature, this enlarged vein becomes the point
        where dialysis needles enter and exit, three times a week.
      </>
    ),
    stats: [
      {
        label: "Made of",
        value: (
          <>
            <em>Your own</em> blood vessels
          </>
        ),
      },
      {
        label: "Maturation",
        value: (
          <>
            <em>6&ndash;12 weeks</em> before first use
          </>
        ),
      },
      {
        label: "Lifespan",
        value: (
          <>
            <em>Years to decades</em> if well cared for
          </>
        ),
      },
    ],
    advantages: [
      {
        id: "infection",
        text: (
          <>
            <strong>Lowest infection rate</strong> of any access type
          </>
        ),
      },
      {
        id: "lifespan",
        text: (
          <>
            <strong>Longest lifespan</strong> &mdash; often a decade or more
          </>
        ),
      },
      {
        id: "flow",
        text: (
          <>
            Best blood flow rates &mdash;{" "}
            <strong>better dialysis quality</strong>
          </>
        ),
      },
      { id: "no-foreign-material", text: "No foreign material in your body" },
      { id: "survival", text: "Best survival outcomes overall" },
    ],
    disadvantages: [
      {
        id: "maturation-time",
        text: (
          <>
            <strong>Needs time to mature</strong> &mdash; cannot be used
            immediately
          </>
        ),
      },
      {
        id: "vein-suitability",
        text: "Not everyone has veins suitable for AVF",
      },
      {
        id: "failure-to-mature",
        text: "Some fistulas fail to mature and need help",
      },
      { id: "cosmetic", text: "Visible bulge under the skin (cosmetic)" },
    ],
  },
  {
    id: "avg",
    visual: (
      <svg
        aria-hidden="true"
        className={DIAGRAM}
        viewBox="0 0 240 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="avgA" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <linearGradient id="avgV" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
        </defs>
        {/* artery */}
        <path
          d="M 40 20 Q 45 80 50 180"
          stroke="url(#avgA)"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
        />
        {/* vein */}
        <path
          d="M 200 20 Q 195 100 198 180"
          stroke="url(#avgV)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        {/* graft loop (synthetic tube) */}
        <path
          d="M 50 90 Q 80 60 120 70 Q 165 80 195 100 Q 180 120 140 130 Q 90 140 55 130"
          stroke="#E5C07B"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          opacity="0.95"
        />
        <path
          d="M 50 90 Q 80 60 120 70 Q 165 80 195 100 Q 180 120 140 130 Q 90 140 55 130"
          stroke="#B8860B"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.4"
          strokeDasharray="4 4"
        />
        {/* labels */}
        <text
          x="20"
          y="15"
          fontFamily={DIAGRAM_LABEL}
          fontSize="8"
          fontWeight="600"
          fill="#fff"
          letterSpacing="1"
        >
          ARTERY
        </text>
        <text
          x="190"
          y="15"
          fontFamily={DIAGRAM_LABEL}
          fontSize="8"
          fontWeight="600"
          fill="#fff"
          letterSpacing="1"
        >
          VEIN
        </text>
        <text
          x="120"
          y="100"
          fontFamily={DIAGRAM_LABEL}
          fontStyle="italic"
          fontSize="10"
          fill="#8C6508"
          textAnchor="middle"
        >
          synthetic graft
        </text>
      </svg>
    ),
    badgeGlyph: "◆",
    badge: <>Alternative &middot; When AVF not possible</>,
    title: (
      <>
        AV <em className="text-primary-subtle italic">Graft</em>
      </>
    ),
    abbreviation: "AVG",
    subtitle: (
      <>
        A soft synthetic tube placed under the skin, connecting an artery to a
        vein.
      </>
    ),
    body: (
      <>
        When your own veins are too small, too damaged, or too deep to make a
        fistula, the surgeon places a{" "}
        <strong>soft synthetic tube (graft) under the skin of your arm</strong>,
        connecting an artery to a vein. The graft itself is what the dialysis
        needles enter &mdash; it acts as an artificial extended vein. Modern
        grafts are made from biocompatible materials and are well tolerated by
        the body.
      </>
    ),
    stats: [
      {
        label: "Made of",
        value: (
          <>
            <em>Synthetic</em> biocompatible tube
          </>
        ),
      },
      {
        label: "Maturation",
        value: (
          <>
            <em>2&ndash;3 weeks</em> before first use
          </>
        ),
      },
      {
        label: "Lifespan",
        value: (
          <>
            <em>3&ndash;5 years</em> typically
          </>
        ),
      },
    ],
    advantages: [
      {
        id: "ready",
        text: (
          <>
            <strong>Ready in weeks</strong>, not months
          </>
        ),
      },
      { id: "small-veins", text: "Works when veins are too small for AVF" },
      { id: "needling-area", text: "Larger needling area" },
      {
        id: "flow",
        text: (
          <>
            <strong>Reliable flow rates</strong> from the start
          </>
        ),
      },
    ],
    disadvantages: [
      { id: "infection", text: "Higher infection risk than AVF" },
      {
        id: "clotting",
        text: (
          <>
            <strong>Higher clotting risk</strong> than AVF
          </>
        ),
      },
      { id: "lifespan", text: "Shorter overall lifespan" },
      { id: "angioplasty", text: "May need repeated angioplasty over time" },
    ],
  },
  {
    id: "tdc",
    visual: (
      <svg
        aria-hidden="true"
        className={DIAGRAM}
        viewBox="0 0 240 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="tdcV" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
        </defs>
        {/* neck / chest silhouette */}
        <path
          d="M 60 30 Q 60 60 75 80 L 80 90 L 80 180 L 200 180 L 200 90 L 165 90 Q 180 60 180 30 L 60 30 Z"
          fill="rgba(122,149,128,0.08)"
          stroke="rgba(122,149,128,0.3)"
          strokeWidth="1"
        />
        {/* internal jugular vein */}
        <path
          d="M 120 30 Q 122 50 130 70 Q 140 100 155 130"
          stroke="url(#tdcV)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
        />
        {/* catheter entering */}
        <path
          d="M 100 95 L 90 110 L 80 130"
          stroke="#D97706"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 100 95 L 90 110 L 80 130"
          stroke="#FBF8F3"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
        {/* catheter outside / dual lumens */}
        <circle cx="80" cy="130" r="4" fill="#D97706" />
        <path
          d="M 80 134 L 65 150 L 50 165"
          stroke="#D97706"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 80 134 L 95 150 L 110 165"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* cuff (the tunnelling cuff) */}
        <rect
          x="95"
          y="105"
          width="6"
          height="3"
          rx="1"
          fill="#fff"
          opacity="0.8"
        />
        {/* exit site */}
        <circle cx="100" cy="95" r="3" fill="#fff" opacity="0.6" />
        {/* labels */}
        <text
          x="180"
          y="50"
          fontFamily={DIAGRAM_LABEL}
          fontSize="8"
          fontWeight="600"
          fill="#fff"
          letterSpacing="1"
        >
          JUGULAR
        </text>
        <text
          x="180"
          y="62"
          fontFamily={DIAGRAM_LABEL}
          fontSize="8"
          fontWeight="600"
          fill="#fff"
          letterSpacing="1"
        >
          VEIN
        </text>
        <text
          x="40"
          y="170"
          fontFamily={DIAGRAM_LABEL}
          fontStyle="italic"
          fontSize="9"
          fill="#D97706"
          textAnchor="middle"
        >
          two lumens
        </text>
        <text
          x="120"
          y="100"
          fontFamily={DIAGRAM_LABEL}
          fontStyle="italic"
          fontSize="9"
          fill="#D97706"
        >
          tunnelled cuff
        </text>
      </svg>
    ),
    badgeGlyph: "⏳",
    badge: <>Bridge &middot; Until permanent access is ready</>,
    title: (
      <>
        Tunnelled <em className="text-primary-subtle italic">Catheter</em>
      </>
    ),
    abbreviation: "TDC / Permcath",
    subtitle: (
      <>
        A soft, flexible tube placed in a large vein in your neck or chest,
        tunnelled under the skin.
      </>
    ),
    body: (
      <>
        A tunnelled dialysis catheter (also called a <em>permcath</em>) is a
        soft tube placed in a large vein &mdash; usually the{" "}
        <strong>right internal jugular vein in your neck.</strong> One end sits
        inside a large vein close to your heart; the other end exits through
        your chest skin, where two ports (one for blood out, one for blood in)
        connect to the dialysis machine. A small cuff under the skin{" "}
        <em>anchors the catheter and reduces infection risk.</em>
      </>
    ),
    stats: [
      {
        label: "Made of",
        value: (
          <>
            <em>Soft silicone</em> dual-lumen tube
          </>
        ),
      },
      {
        label: "Ready",
        value: (
          <>
            Can be used <em>immediately</em>
          </>
        ),
      },
      {
        label: "Intended for",
        value: (
          <>
            <em>Weeks to months</em> &mdash; bridge only
          </>
        ),
      },
    ],
    advantages: [
      {
        id: "same-day",
        text: (
          <>
            <strong>Can start dialysis the same day</strong>
          </>
        ),
      },
      { id: "no-maturation", text: "No maturation period needed" },
      { id: "no-needles", text: "No needles required for each session" },
      { id: "bridge", text: "Useful while AVF is maturing" },
    ],
    disadvantages: [
      {
        id: "infection",
        text: (
          <>
            <strong>Highest infection risk</strong> of all access types
          </>
        ),
      },
      { id: "flow", text: "Lower blood flow than AVF or AVG" },
      { id: "exit-site", text: "Cannot get the exit site wet" },
      {
        id: "long-term",
        text: (
          <>
            <strong>Not designed for long-term use</strong>
          </>
        ),
      },
      { id: "central-veins", text: "Can damage central veins over time" },
    ],
  },
  {
    id: "ncc",
    visual: (
      <svg
        aria-hidden="true"
        className={DIAGRAM}
        viewBox="0 0 240 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ncV" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
        </defs>
        {/* neck silhouette */}
        <path
          d="M 60 30 Q 60 60 75 80 L 80 90 L 80 180 L 200 180 L 200 90 L 165 90 Q 180 60 180 30 L 60 30 Z"
          fill="rgba(181,73,91,0.06)"
          stroke="rgba(181,73,91,0.25)"
          strokeWidth="1"
        />
        {/* vein */}
        <path
          d="M 120 30 Q 122 50 130 70 Q 140 100 150 130"
          stroke="url(#ncV)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
        {/* straight catheter (no tunnel) */}
        <path
          d="M 125 50 L 105 100"
          stroke="#fff"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        {/* exit at skin */}
        <circle cx="125" cy="50" r="5" fill="#fff" />
        {/* dual lumens out */}
        <path
          d="M 125 45 L 110 30 L 90 22"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 125 45 L 140 30 L 160 22"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* warning sign */}
        <text
          x="175"
          y="60"
          fontFamily={DIAGRAM_LABEL}
          fontSize="9"
          fontWeight="600"
          fill="#fff"
          letterSpacing="1"
        >
          DAYS
        </text>
        <text
          x="175"
          y="72"
          fontFamily={DIAGRAM_LABEL}
          fontSize="9"
          fontWeight="600"
          fill="#fff"
          letterSpacing="1"
        >
          ONLY
        </text>
        <text
          x="135"
          y="60"
          fontFamily={DIAGRAM_LABEL}
          fontStyle="italic"
          fontSize="9"
          fill="#fff"
        >
          no cuff
        </text>
        <text
          x="135"
          y="74"
          fontFamily={DIAGRAM_LABEL}
          fontStyle="italic"
          fontSize="9"
          fill="#fff"
        >
          no tunnel
        </text>
      </svg>
    ),
    badgeGlyph: "⚠",
    badge: <>Emergency &middot; Days only</>,
    title: (
      <>
        Non-Cuffed <em className="text-primary-subtle italic">Catheter</em>
      </>
    ),
    abbreviation: "NCC / Temporary",
    subtitle: (
      <>
        A short-term catheter placed quickly for emergency dialysis &mdash; not
        designed for long-term use.
      </>
    ),
    body: (
      <>
        A non-cuffed catheter is placed when dialysis is needed urgently &mdash;
        often within hours. <strong>It&rsquo;s a temporary measure</strong>,
        used when there is no time to plan a permanent access. The catheter goes
        directly into a large vein (jugular or femoral), with no cuff and no
        tunnel under the skin. It is{" "}
        <em>only intended for the first 1&ndash;3 weeks of dialysis,</em> while
        a tunnelled catheter or fistula is being arranged.
      </>
    ),
    stats: [
      {
        label: "Made of",
        value: (
          <>
            <em>Stiff</em> short-term plastic tube
          </>
        ),
      },
      {
        label: "Ready",
        value: (
          <>
            Can be used <em>within hours</em>
          </>
        ),
      },
      {
        label: "Intended for",
        value: (
          <>
            <em>1&ndash;3 weeks maximum</em>
          </>
        ),
      },
    ],
    advantages: [
      {
        id: "lifesaving",
        text: (
          <>
            <strong>Lifesaving in emergencies</strong>
          </>
        ),
      },
      { id: "hours", text: "Can be placed within hours" },
      {
        id: "last-resort",
        text: "Useful when no other access is possible right now",
      },
    ],
    disadvantages: [
      {
        id: "infection",
        text: (
          <>
            <strong>Very high infection risk</strong>
          </>
        ),
      },
      { id: "movement", text: "Restricts movement" },
      {
        id: "replacement",
        text: (
          <>
            <strong>Must be replaced within weeks</strong>
          </>
        ),
      },
      { id: "vein-damage", text: "Damages veins if left in place too long" },
    ],
  },
] as const;
