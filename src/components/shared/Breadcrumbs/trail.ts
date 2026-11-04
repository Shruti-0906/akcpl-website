import { footerLegal, footerNav, liveRoutes, mainNav } from "@/config";
import type { FooterNav, NavItem } from "@/config";

export type Crumb = {
  label: string;
  /** Omitted unless the route has actually shipped, so a crumb never links to a 404. */
  href?: string;
};

const collectLabels = (
  items: readonly (NavItem | FooterNav)[],
  into: Map<string, string>,
) => {
  items.forEach((item) => {
    if (item.href && !into.has(item.href)) into.set(item.href, item.label);
    if (item.children) collectLabels(item.children, into);
  });
};

const ROUTE_LABELS = (() => {
  const labels = new Map<string, string>();
  collectLabels(mainNav, labels);
  collectLabels(footerNav, labels);
  collectLabels(footerLegal, labels);
  return labels;
})();

const titleCase = (segment: string) =>
  segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const getTrail = (pathname: string): Crumb[] => {
  const segments = pathname.split("/").filter(Boolean);

  return segments.reduce<Crumb[]>(
    (crumbs, segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;
      const label = ROUTE_LABELS.get(href) ?? titleCase(segment);

      crumbs.push(liveRoutes.includes(href) ? { label, href } : { label });

      return crumbs;
    },
    [{ label: "Home", href: "/" }],
  );
};
