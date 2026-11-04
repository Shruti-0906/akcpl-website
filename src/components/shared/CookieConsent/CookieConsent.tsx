"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

import { useAppReady, useCookieConsent } from "@/hooks";
import { cn } from "@/lib";
import { CONSENT_OPEN_EVENT } from "@/lib/consent";

const PRIVACY_HREF = "/privacy-policy";

const LINK_CLASSES =
  "text-primary-subtle underline underline-offset-2 transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none";

const PRIMARY_BUTTON =
  "rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-subtle focus-visible:bg-primary-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-subtle";

const SECONDARY_BUTTON =
  "rounded-full border border-secondary/25 px-6 py-2.5 text-sm font-medium text-secondary transition-colors hover:border-secondary hover:bg-secondary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";

const QUIET_BUTTON =
  "text-sm font-medium text-primary-subtle underline underline-offset-4 transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none";

/** A labelled switch rather than a checkbox, because the panel reads as a set
 *  of settings and each one takes effect only on save. */
const Toggle = ({
  checked,
  labelledBy,
  onChange,
}: {
  checked: boolean;
  labelledBy: string;
  onChange: (next: boolean) => void;
}) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    aria-labelledby={labelledBy}
    onClick={() => onChange(!checked)}
    className={cn(
      "relative h-6 w-11 shrink-0 rounded-full transition-colors",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-subtle",
      checked ? "bg-primary" : "bg-black/20",
    )}
  >
    <span
      className={cn(
        "absolute top-0.5 left-0.5 size-5 rounded-full bg-white shadow transition-transform",
        checked && "translate-x-5",
      )}
    />
  </button>
);

/**
 * The banner and the preferences panel, mounted once at the root and
 * deliberately outside the shared page chrome, so a page that hides the navbar
 * and footer still asks the question.
 *
 * They are never on screen together: the banner shows only while there is no
 * decision and the panel is closed.
 */
const CookieConsent = () => {
  const { hydrated, decided, analytics, save } = useCookieConsent();
  const appReady = useAppReady();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [panelOpen, setPanelOpen] = useState(false);

  /** The panel edits a draft. Flipping a switch and then closing the panel
   *  changes nothing, because nothing is written until "Save preferences". */
  const [draft, setDraft] = useState(false);

  const openPanel = useCallback(() => {
    setDraft(analytics);
    setPanelOpen(true);
  }, [analytics]);

  useEffect(() => {
    window.addEventListener(CONSENT_OPEN_EVENT, openPanel);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, openPanel);
  }, [openPanel]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (panelOpen && !dialog.open) dialog.showModal();
    if (!panelOpen && dialog.open) dialog.close();
  }, [panelOpen]);

  useEffect(() => {
    if (!panelOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [panelOpen]);

  const decide = (value: boolean) => {
    save(value);
    setPanelOpen(false);
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    // Checked against the target, so a click inside the card does not dismiss.
    if (event.target === dialogRef.current) setPanelOpen(false);
  };

  /**
   * The banner waits for the client. The HTML is built long before any visitor
   * exists, so a server-rendered banner would flash at every returning visitor
   * on each cold load before storage could be read.
   */
  const bannerVisible = hydrated && appReady && !decided && !panelOpen;

  return (
    <>
      {bannerVisible && (
        <section
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-60 animate-hero-copy px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="mx-auto max-w-6xl rounded-lg border-t-[3px] border-primary bg-white p-5 shadow-[0_24px_70px_rgba(0,31,52,0.32)] sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <div className="max-w-3xl">
                <h2 className="font-cormorant text-xl text-secondary sm:text-2xl">
                  We use cookies
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-black/70">
                  Some are needed to serve these pages and to keep our forms
                  safe from abuse. The rest help us understand how the site is
                  used, through Google Analytics. Nothing optional is loaded
                  until you choose, and you can change your mind at any time.
                  See our{" "}
                  <Link href={PRIVACY_HREF} className={LINK_CLASSES}>
                    privacy policy
                  </Link>
                  .
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <button
                  type="button"
                  onClick={openPanel}
                  className={QUIET_BUTTON}
                >
                  Manage preferences
                </button>

                <button
                  type="button"
                  onClick={() => decide(false)}
                  className={SECONDARY_BUTTON}
                >
                  Necessary only
                </button>

                <button
                  type="button"
                  onClick={() => decide(true)}
                  className={PRIMARY_BUTTON}
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="cookie-preferences-title"
        onClose={() => setPanelOpen(false)}
        onClick={handleBackdropClick}
        className={cn(
          "m-auto w-[min(92vw,620px)] overflow-hidden rounded-lg bg-white p-0",
          "shadow-[0_24px_70px_rgba(0,31,52,0.32)]",
          "backdrop:bg-secondary/60 backdrop:backdrop-blur-[2px]",
        )}
      >
        <div className="relative border-t-[3px] border-primary bg-white px-6 pt-8 pb-6 sm:px-8 sm:pt-9">
          <button
            type="button"
            onClick={() => setPanelOpen(false)}
            aria-label="Close cookie preferences"
            className="absolute top-4 right-4 grid size-9 place-items-center rounded-full text-black/45 transition-colors hover:bg-black/5 hover:text-secondary focus-visible:bg-black/5 focus-visible:outline-none"
          >
            <X className="size-4" />
          </button>

          <h2
            id="cookie-preferences-title"
            className="font-cormorant text-2xl text-secondary"
          >
            Cookie preferences
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-black/70">
            Choose what this site may load. Your choice is stored on this device
            and honoured everywhere on the site. Full detail is in our{" "}
            <Link href={PRIVACY_HREF} className={LINK_CLASSES}>
              privacy policy
            </Link>
            .
          </p>

          <div className="mt-7 space-y-5">
            <section className="rounded-md border border-black/10 p-4">
              <div className="flex items-start justify-between gap-4">
                <h3
                  id="cookie-category-necessary"
                  className="text-sm font-medium text-secondary"
                >
                  Strictly necessary
                </h3>

                <span className="shrink-0 rounded-full bg-black/6 px-3 py-1 text-xs font-medium text-black/55">
                  Always on
                </span>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-black/65">
                Serving these pages, protecting our forms from bots through
                Google reCAPTCHA, and remembering the choice you make here.
                Turning this off would stop the forms working, so it is not
                offered as a toggle.
              </p>
            </section>

            <section className="rounded-md border border-black/10 p-4">
              <div className="flex items-start justify-between gap-4">
                <h3
                  id="cookie-category-analytics"
                  className="text-sm font-medium text-secondary"
                >
                  Analytics and marketing
                </h3>

                <Toggle
                  checked={draft}
                  labelledBy="cookie-category-analytics"
                  onChange={setDraft}
                />
              </div>

              <p className="mt-2 text-sm leading-relaxed text-black/65">
                Google Analytics 4, which tells us which pages earn attention
                and where visitors arrive from. Left off, none of those scripts
                is loaded and nothing is sent to Google.
              </p>
            </section>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-end gap-3 border-t border-black/10 pt-5">
            <button
              type="button"
              onClick={() => decide(draft)}
              className={SECONDARY_BUTTON}
            >
              Save preferences
            </button>

            <button
              type="button"
              onClick={() => decide(true)}
              className={PRIMARY_BUTTON}
            >
              Accept all
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CookieConsent;
