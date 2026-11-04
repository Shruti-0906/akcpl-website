import type { SurveillanceCheck } from "./SurveillanceCard";

export const SURVEILLANCE_CHECKS: readonly SurveillanceCheck[] = [
  {
    id: "each-check",
    label: "What happens at each check",
    tinted: false,
    title: (
      <>
        Quarterly <em>access flow monitoring</em>
      </>
    ),
    body: (
      <>
        Every three months, your dialysis access is measured at the AKC Vascular
        Access Centre. The team checks{" "}
        <strong>
          blood flow rate, vein diameter, depth, and any signs of narrowing
        </strong>{" "}
        &mdash; usually with a simple bedside ultrasound that takes 15 minutes.
      </>
    ),
    items: [
      <>
        <strong>Access flow measurement</strong> &mdash; using ultrasound
        dilution or doppler
      </>,
      <>
        <strong>Physical examination</strong> &mdash; thrill, bruit, vein
        course, skin condition
      </>,
      <>
        <strong>Trend review</strong> &mdash; comparing today&rsquo;s flow with
        previous measurements
      </>,
      <>
        <strong>Cannulation site assessment</strong> &mdash; to detect early
        aneurysm formation
      </>,
      <>
        <strong>Early intervention</strong> if any concern is found &mdash;
        angioplasty, revision, or close follow-up
      </>,
    ],
  },
  {
    id: "why-this-matters",
    label: "Why this matters",
    tinted: true,
    title: (
      <>
        The single best thing you can do <em>for your access lifespan</em>
      </>
    ),
    body: (
      <>
        <strong>Most accesses that fail did not have to.</strong> The narrowing
        that eventually clotted them was developing for weeks before it became
        critical &mdash; and angioplasty at that earlier point would have
        prevented the failure entirely.
      </>
    ),
    items: [
      <>
        <strong>Detects problems weeks earlier</strong> than symptoms appear
      </>,
      <>
        <strong>Reduces unplanned hospital visits</strong> from access failure
      </>,
      <>
        <strong>Prevents emergency catheter placements</strong>
      </>,
      <>
        <strong>Extends average access lifespan</strong> measurably across the
        patient cohort
      </>,
      <>Free as part of your AKC dialysis care</>,
    ],
  },
] as const;
