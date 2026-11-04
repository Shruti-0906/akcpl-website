"use client";

import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { isActiveRoute, mainNav } from "@/config";
import type { NavItem } from "@/config";
import { cn } from "@/lib";

const DRAWER_ID = "mobile-navigation";

const FOCUSABLE = "a[href], button:not([disabled])";

const ROW_CLASSES = cn(
  "flex w-full items-center justify-between gap-2 border-b border-black/10 px-5 py-3.5",
  "font-roboto text-left text-base text-secondary transition-colors",
  "hover:text-primary focus-visible:text-primary focus-visible:outline-none",
);

const MobileNav = () => {
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const [stack, setStack] = useState<NavItem[]>([]);

  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const isOpen = openedAt === pathname;
  const current = stack.at(-1) ?? null;
  const items = current ? (current.children ?? []) : mainNav;

  const open = () => {
    setStack([]);
    setOpenedAt(pathname);
  };

  const close = () => {
    setOpenedAt(null);
    triggerRef.current?.focus();
  };

  const dismiss = () => setOpenedAt(null);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const drawer = drawerRef.current;
      if (!drawer) return;

      const focusable = Array.from(
        drawer.querySelectorAll<HTMLElement>(FOCUSABLE),
      );
      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    listRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
  }, [isOpen, stack.length]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label="Open navigation"
        aria-expanded={isOpen}
        aria-controls={DRAWER_ID}
        onClick={open}
        className="text-secondary transition-colors hover:text-primary focus-visible:outline-none xl:hidden"
      >
        <Menu className="size-6" aria-hidden="true" />
      </button>

      <div
        aria-hidden="true"
        onClick={close}
        className={cn(
          "fixed inset-0 z-40 bg-secondary/40 transition-opacity duration-200 xl:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <aside
        ref={drawerRef}
        id={DRAWER_ID}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        inert={!isOpen}
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(85vw,360px)] flex-col",
          "bg-white shadow-xl transition-transform duration-200 xl:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex shrink-0 items-center justify-between gap-2 border-b border-black/10 px-5 py-4">
          {current ? (
            <button
              type="button"
              onClick={() => setStack((prev) => prev.slice(0, -1))}
              className="flex items-center gap-1.5 font-roboto text-base font-medium text-secondary transition-colors hover:text-primary focus-visible:outline-none"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
              {current.label}
            </button>
          ) : (
            <span className="font-roboto text-base font-medium text-secondary">
              Menu
            </span>
          )}

          <button
            type="button"
            aria-label="Close navigation"
            onClick={close}
            className="text-secondary transition-colors hover:text-primary focus-visible:outline-none"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <ul ref={listRef} className="flex-1 overflow-y-auto overscroll-contain">
          {/* Only offered when the group actually has a landing page. */}
          {current?.href && (
            <li>
              <Link
                href={current.href}
                draggable={false}
                onClick={dismiss}
                aria-current={pathname === current.href ? "page" : undefined}
                className={cn(
                  ROW_CLASSES,
                  pathname === current.href && "text-primary",
                )}
              >
                All {current.label}
              </Link>
            </li>
          )}

          {items.map((item) => {
            const active = isActiveRoute(item.href, pathname);

            return (
              <li key={item.label}>
                {item.children?.length ? (
                  <button
                    type="button"
                    onClick={() => setStack((prev) => [...prev, item])}
                    className={cn(ROW_CLASSES, active && "text-primary")}
                  >
                    {item.label}
                    <ChevronRight className="size-4" aria-hidden="true" />
                  </button>
                ) : (
                  item.href && (
                    <Link
                      href={item.href}
                      draggable={false}
                      onClick={dismiss}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={cn(ROW_CLASSES, active && "text-primary")}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default MobileNav;
