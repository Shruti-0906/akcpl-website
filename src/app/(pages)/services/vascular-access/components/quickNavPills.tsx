import type { QuickNavPill } from "./QuickNavPillCard";

export const QUICK_NAV_PILLS: readonly QuickNavPill[] = [
  {
    href: "#access-types",
    roman: "I",
    name: (
      <>
        The four <em>access types</em>
      </>
    ),
  },
  {
    href: "#hierarchy",
    roman: "II",
    name: (
      <>
        Why <em>fistula first</em>
      </>
    ),
  },
  {
    href: "#timing",
    roman: "III",
    name: (
      <>
        When to <em>create access</em>
      </>
    ),
  },
  {
    href: "#vac-centre",
    roman: "IV",
    name: (
      <>
        AKC&rsquo;s <em>Access Centre</em>
      </>
    ),
  },
  {
    href: "#monitoring",
    roman: "V",
    name: (
      <>
        Daily <em>monitoring</em>
      </>
    ),
  },
] as const;
