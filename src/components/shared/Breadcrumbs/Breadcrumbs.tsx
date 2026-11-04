"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { getTrail } from "./trail";
import type { Crumb } from "./trail";

export interface BreadcrumbsProps {
  trail?: readonly Crumb[];
}

const Breadcrumbs = ({ trail }: BreadcrumbsProps) => {
  const pathname = usePathname();

  /** The home page carries no trail. */
  if (!trail && pathname === "/") return null;

  const crumbs = trail ?? getTrail(pathname);

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "sticky top-23.5 z-40 border-t border-primary bg-[#c9c9c9] py-2.5",
        GUTTER,
      )}
    >
      <ol className="flex flex-wrap items-center font-roboto text-xs sm:text-sm">
        {crumbs.map((crumb, index) => {
          const isCurrent = index === crumbs.length - 1;

          return (
            <li key={crumb.href ?? crumb.label} className="flex items-center">
              {index > 0 && (
                <span aria-hidden="true" className="px-2 text-[#A0522D]">
                  &gt;&gt;
                </span>
              )}

              {isCurrent ? (
                <span aria-current="page" className="text-[#A0522D]">
                  {crumb.label}
                </span>
              ) : crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-secondary/85 transition hover:text-[#A0522D] focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-secondary/85">{crumb.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
