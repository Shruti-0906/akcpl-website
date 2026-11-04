import type { CentreService } from "./CentreCard";

export const CENTRE_SERVICES: readonly CentreService[] = [
  {
    id: "vessel-mapping",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 2v10M12 22v-4M4.93 4.93l7.07 7.07M4.93 19.07l3-3M19.07 4.93l-7.07 7.07" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: (
      <>
        Pre-operative <em>vessel mapping</em>
      </>
    ),
    body: (
      <>
        Detailed ultrasound mapping of every vein and artery in your arms to
        find the <strong>best possible location for your AVF</strong> &mdash;
        before any surgery is planned.
      </>
    ),
  },
  {
    id: "access-creations",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M5 12h14M12 5v14" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    title: (
      <>
        All four access <em>creations</em>
      </>
    ),
    body: (
      <>
        AVF and AVG creation, tunnelled catheter placement under ultrasound
        guidance, and emergency catheter insertion.{" "}
        <strong>The full range, in one centre.</strong>
      </>
    ),
  },
  {
    id: "maturation-tracking",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: (
      <>
        Maturation <em>tracking</em>
      </>
    ),
    body: (
      <>
        Structured follow-up at 2, 4, and 6 weeks post-surgery to confirm your
        AVF is maturing well &mdash; and to <strong>intervene early</strong> if
        it isn&rsquo;t.
      </>
    ),
  },
  {
    id: "surveillance",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3 12h4l2-6 4 12 2-6h6" />
      </svg>
    ),
    title: (
      <>
        Quarterly <em>surveillance</em>
      </>
    ),
    body: (
      <>
        Every three months, your access flow is measured and any narrowing is
        detected <strong>before it causes failure.</strong> The single most
        effective way to extend access lifespan.
      </>
    ),
  },
  {
    id: "salvage-interventions",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M4 4l16 16M20 4L4 20" />
      </svg>
    ),
    title: (
      <>
        Salvage <em>interventions</em>
      </>
    ),
    body: (
      <>
        When a fistula or graft starts to fail, the centre can perform{" "}
        <strong>
          angioplasty (balloon dilation), stenting, or surgical revision
        </strong>{" "}
        to restore function before access is lost.
      </>
    ),
  },
  {
    id: "patient-education",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="9" cy="9" r="3" />
        <circle cx="17" cy="11" r="2" />
        <path d="M3 20c0-3 3-5 6-5s6 2 6 5M16 20c0-2 2-3 4-3" />
      </svg>
    ),
    title: (
      <>
        Patient <em>education</em>
      </>
    ),
    body: (
      <>
        Every patient is taught how to monitor their own access daily &mdash;{" "}
        <strong>LOOK / LISTEN / FEEL</strong> &mdash; and given a clear plan for
        what to do if something changes.
      </>
    ),
  },
] as const;
