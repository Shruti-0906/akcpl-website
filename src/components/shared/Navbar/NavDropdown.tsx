"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import { isActiveRoute } from "@/config";
import type { NavItem } from "@/config";
import { cn } from "@/lib";

const COLUMN_CLASSES =
  "w-52 shrink-0 bg-white";

const ROW_CLASSES = cn(
  "flex items-center justify-between gap-2 px-4 py-2.5",
  "font-roboto text-sm text-secondary transition-colors",
  "hover:text-primary focus-visible:text-primary focus-visible:outline-none",
);

type NavDropdownProps = {
  item: NavItem;
  id: string;
};

const NavDropdown = ({ item, id }: NavDropdownProps) => {
  const columns = item.children ?? [];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  /** Parents may render as a div when they have no page, so widen to HTMLElement. */
  const parentRefs = useRef<(HTMLElement | null)[]>([]);
  const childRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const pathname = usePathname();

  const nested =
    activeIndex === null ? [] : (columns[activeIndex]?.children ?? []);

  const focusParent = (index: number) => parentRefs.current[index]?.focus();
  const focusChild = (index: number) => childRefs.current[index]?.focus();

  const handleParentKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    index: number,
  ) => {
    const count = columns.length;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusParent((index + 1) % count);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      focusParent((index - 1 + count) % count);
    } else if (event.key === "ArrowRight" && columns[index]?.children?.length) {
      event.preventDefault();
      setActiveIndex(index);
      requestAnimationFrame(() => focusChild(0));
    }
  };

  const handleChildKeyDown = (
    event: KeyboardEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    const count = nested.length;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusChild((index + 1) % count);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      focusChild((index - 1 + count) % count);
    } else if (event.key === "ArrowLeft" && activeIndex !== null) {
      event.preventDefault();
      focusParent(activeIndex);
    }
  };

  return (
    <div id={id} className="absolute top-full left-0 z-50 flex items-start font-roboto">
      <ul className={COLUMN_CLASSES}>
        {columns.map((child, index) => {
          const hasNested = Boolean(child.children?.length);

          const highlighted =
              (activeIndex === index && hasNested) ||
              isActiveRoute(child.href, pathname);

            const content = (
              <>
                {child.label}
                {hasNested && (
                  <ChevronRight className="size-3.5" aria-hidden="true" />
                )}
              </>
            );

            const shared = {
              ref: (node: HTMLElement | null) => {
                parentRefs.current[index] = node;
              },
              className: cn(ROW_CLASSES, highlighted && "text-primary"),
              onPointerEnter: () => setActiveIndex(hasNested ? index : null),
              onFocus: () => setActiveIndex(hasNested ? index : null),
              onKeyDown: (event: KeyboardEvent<HTMLElement>) =>
                handleParentKeyDown(event, index),
            };

            return (
              <li key={index} className="border-b border-black/10 last:border-b-0">
                {child.href ? (
                  <Link
                    {...shared}
                    href={child.href}
                    draggable={false}
                    aria-current={pathname === child.href ? "page" : undefined}
                  >
                    {content}
                  </Link>
                ) : (
                  /* Grouping entry with no page of its own; still focusable so
                     arrow-key navigation into its children keeps working. */
                  <div {...shared} tabIndex={-1}>
                    {content}
                  </div>
                )}
              </li>
            );
        })}
      </ul>

      {nested.length > 0 && (
        <ul className={COLUMN_CLASSES}>
          {nested.map((leaf, index) =>
            leaf.href ? (
              <li
                key={index}
                className="border-b border-black/10 last:border-b-0"
              >
                <Link
                  ref={(node) => {
                    childRefs.current[index] = node;
                  }}
                  href={leaf.href}
                  draggable={false}
                  aria-current={pathname === leaf.href ? "page" : undefined}
                  className={cn(
                    ROW_CLASSES,
                    isActiveRoute(leaf.href, pathname) && "text-primary",
                  )}
                  onKeyDown={(event) => handleChildKeyDown(event, index)}
                >
                  {leaf.label}
                </Link>
              </li>
            ) : null,
          )}
        </ul>
      )}
    </div>
  );
};

export default NavDropdown;
