"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type {
  FocusEvent as ReactFocusEvent,
  KeyboardEvent as ReactKeyboardEvent,
} from "react";

import { isActiveRoute, mainNav, organization, site } from "@/config";
import { cn } from "@/lib";

import MobileNav from "./MobileNav";
import NavDropdown from "./NavDropdown";

const CLOSE_DELAY = 150;

const LINK_CLASSES = cn(
  "font-roboto text-sm font-semibold text-black transition-colors",
  "hover:text-primary focus-visible:text-primary focus-visible:outline-none",
);

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const cancelClose = useCallback(() => {
    if (closeTimer.current === null) return;
    clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }, []);

  const open = (index: number) => {
    cancelClose();
    setOpenIndex(index);
  };

  const closeNow = useCallback(
    (restoreFocus = false) => {
      cancelClose();
      if (restoreFocus && openIndex !== null) {
        triggerRefs.current[openIndex]?.focus();
      }
      setOpenIndex(null);
    },
    [cancelClose, openIndex],
  );

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenIndex(null), CLOSE_DELAY);
  };

  useEffect(() => cancelClose, [cancelClose]);

  useEffect(() => {
    if (openIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeNow(true);
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) closeNow();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [openIndex, closeNow]);

  const handleTriggerKeyDown = (
    event: ReactKeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key !== "ArrowDown") return;
    event.preventDefault();
    open(index);
  };

  const handleBlur = (event: ReactFocusEvent<HTMLDivElement>) => {
    const next = event.relatedTarget as Node | null;
    if (next && event.currentTarget.contains(next)) return;
    closeNow();
  };

  return (
    <header className="navbar sticky top-0 z-50 flex h-23.5 items-center justify-between bg-white px-6 pt-3 pb-1.5 xl:px-15">
      <Link href="/" draggable={false} className="flex-none select-none">
        <Image
          src={organization.logo}
          alt={site.name}
          width={100}
          height={100}
          className="h-full w-24 object-contain"
          loading="eager"
        />
      </Link>

      <nav
        ref={navRef}
        aria-label="Main"
        className="hidden h-full items-center gap-5 xl:flex font-roboto"
      >
        {mainNav.map((item, index) => {
          const active = isActiveRoute(item.href, pathname);

          if (!item.children?.length) {
            if (!item.href) return null;

            return (
              <Link
                key={item.label}
                href={item.href}
                draggable={false}
                aria-current={pathname === item.href ? "page" : undefined}
                className={cn(LINK_CLASSES, active && "text-primary")}
              >
                {item.label}
              </Link>
            );
          }

          const panelId = `nav-panel-${index}`;
          const isOpen = openIndex === index;

          return (
            <div
              key={item.label}
              className="relative flex h-full items-center"
              onPointerEnter={() => open(index)}
              onPointerLeave={scheduleClose}
              onBlur={handleBlur}
            >
              {/* A grouping entry has no page of its own, so the trigger only
                  opens the menu - a button, not a link to nowhere. */}
              <button
                ref={(node) => {
                  triggerRefs.current[index] = node;
                }}
                type="button"
                aria-expanded={isOpen}
                aria-controls={isOpen ? panelId : undefined}
                onClick={() => (isOpen ? closeNow() : open(index))}
                onKeyDown={(event) => handleTriggerKeyDown(event, index)}
                className={cn(
                  LINK_CLASSES,
                  "inline-flex cursor-pointer items-center gap-0.5",
                  (active || isOpen) && "text-primary",
                )}
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>

              {isOpen && <NavDropdown item={item} id={panelId} />}
            </div>
          );
        })}
      </nav>

      <MobileNav />
    </header>
  );
};

export default Navbar;
