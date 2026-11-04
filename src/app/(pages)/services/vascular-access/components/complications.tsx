import type { Complication } from "./ComplicationCard";

export const COMPLICATIONS: readonly Complication[] = [
  {
    id: "stenosis",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 9l6 6M15 9l-6 6" />
      </>
    ),
    title: (
      <>
        <em>Stenosis</em> &middot; narrowing
      </>
    ),
    body: (
      <>
        A narrowing of the access vein or graft, usually where it joins the
        artery. Can develop over months.{" "}
        <strong>
          Causes reduced dialysis flow rates and prolonged bleeding after needle
          removal.
        </strong>
      </>
    ),
    signature: (
      <>
        <strong>Affects:</strong> AVF, AVG &middot; <strong>Treated by:</strong>{" "}
        angioplasty (balloon dilation)
      </>
    ),
    tinted: true,
  },
  {
    id: "thrombosis",
    icon: <path d="M12 2L4 14h7l-2 8 9-14h-7l1-6z" />,
    title: (
      <>
        <em>Thrombosis</em> &middot; clot
      </>
    ),
    body: (
      <>
        The access suddenly clots and stops working.{" "}
        <strong>The thrill disappears.</strong> Can happen overnight. Usually
        preceded by stenosis or low blood pressure during dialysis.
      </>
    ),
    signature: (
      <>
        <strong>Affects:</strong> AVF, AVG, catheters &middot;{" "}
        <strong>Action:</strong> same-day intervention may restore flow
      </>
    ),
    tinted: false,
  },
  {
    id: "infection",
    icon: <path d="M12 2v6M5 8a7 7 0 0014 0M9 22h6M12 16v6" />,
    title: <em>Infection</em>,
    body: (
      <>
        Redness, warmth, swelling, pus, or fever around the access site.{" "}
        <strong>Particularly serious in grafts and catheters.</strong> Can
        spread to the bloodstream if not treated quickly.
      </>
    ),
    signature: (
      <>
        <strong>Affects:</strong> all access types (highest in catheters)
        &middot; <strong>Treated with:</strong> antibiotics; sometimes access
        removal
      </>
    ),
    tinted: true,
  },
  {
    id: "aneurysm",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
    title: (
      <>
        <em>Aneurysm</em> &middot; ballooning
      </>
    ),
    body: (
      <>
        Over years, repeated needling in the same spot can cause the vein wall
        to balloon out into a soft, pulsating swelling.{" "}
        <strong>Usually safe, but large aneurysms need monitoring</strong> and
        sometimes surgical repair.
      </>
    ),
    signature: (
      <>
        <strong>Affects:</strong> AVF mostly &middot;{" "}
        <strong>Prevention:</strong> rotating needle sites;
        &ldquo;rope-ladder&rdquo; cannulation
      </>
    ),
    tinted: false,
  },
  {
    id: "steal-syndrome",
    icon: (
      <>
        <path d="M3 12h6l-3-6M21 12h-6l3 6" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    title: <em>Steal syndrome</em>,
    body: (
      <>
        The fistula &ldquo;steals&rdquo; blood that should be going to your hand
        &mdash; causing{" "}
        <strong>cold fingers, numbness, weakness, or pain</strong> in the access
        hand. More common in older patients and those with diabetes.
      </>
    ),
    signature: (
      <>
        <strong>Affects:</strong> AVF, AVG &middot; <strong>Treated by:</strong>{" "}
        surgical revision to redirect flow
      </>
    ),
    tinted: false,
  },
  {
    id: "bleeding",
    icon: (
      <>
        <path d="M5 16l7-8 4 4 3-4" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
    title: (
      <>
        <em>Bleeding</em> after dialysis
      </>
    ),
    body: (
      <>
        Persistent oozing or fresh bleeding from a needle site after dialysis
        &mdash; or, rarely, sudden major bleeding from an aneurysm.{" "}
        <strong>Always apply firm direct pressure</strong> with a clean cloth
        and seek immediate help if bleeding does not stop.
      </>
    ),
    signature: (
      <>
        <strong>Action:</strong> direct pressure for 10&ndash;15 minutes
        &middot; never use tourniquets &middot; call emergency if persistent
      </>
    ),
    tinted: true,
  },
  {
    id: "central-vein-stenosis",
    icon: (
      <>
        <path d="M12 3l9 7-9 11-9-11 9-7z" />
        <circle cx="12" cy="11" r="2" />
      </>
    ),
    title: (
      <>
        Central vein <em>stenosis</em>
      </>
    ),
    body: (
      <>
        A narrowing of the large veins in your chest &mdash; usually caused by
        past catheters.{" "}
        <strong>Causes swelling of the access arm, face, or neck.</strong> One
        of the strongest reasons to avoid catheters when possible.
      </>
    ),
    signature: (
      <>
        <strong>Affects:</strong> patients with current/past catheters &middot;{" "}
        <strong>Treated by:</strong> angioplasty &middot; sometimes stenting
      </>
    ),
    tinted: false,
  },
  {
    id: "failure-to-mature",
    icon: <path d="M4 12h6l-2-4M14 12h6l-2-4M14 12l-2 4M10 12l2 4" />,
    title: <em>Failure to mature</em>,
    body: (
      <>
        Sometimes an AVF doesn&rsquo;t develop properly &mdash; flow stays low,
        the vein stays small. <strong>Treatable in many cases</strong> with
        balloon dilation, accessory vein ligation, or other interventions to
        help it mature.
      </>
    ),
    signature: (
      <>
        <strong>Affects:</strong> new AVFs &middot; <strong>Treated by:</strong>{" "}
        assisted maturation procedures at the access centre
      </>
    ),
    tinted: true,
  },
] as const;
