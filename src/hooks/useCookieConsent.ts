"use client";

import { useSyncExternalStore } from "react";

import {
  getConsentSnapshot,
  getServerConsentSnapshot,
  saveConsent,
  subscribeToConsent,
  type ConsentRecord,
} from "@/lib/consent";

/** Hydration is its own subscription that never fires: false on the server,
 *  true on the client, one re-render and done. */
const subscribeToNothing = () => () => {};
const hydratedOnClient = () => true;
const hydratedOnServer = () => false;

export type CookieConsent = {
  consent: ConsentRecord | null;
  /** False until the client has taken over, which the banner needs: the HTML
   *  was prerendered and cannot know who has already answered. */
  hydrated: boolean;
  decided: boolean;
  analytics: boolean;
  save: (analytics: boolean) => void;
};

/**
 * Reads the stored decision. Components do not copy consent into their own
 * state, so a save re-renders every consumer on the page with no effect in
 * between, and a change from another tab lands the same way.
 */
export const useCookieConsent = (): CookieConsent => {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );

  const hydrated = useSyncExternalStore(
    subscribeToNothing,
    hydratedOnClient,
    hydratedOnServer,
  );

  return {
    consent,
    hydrated,
    decided: consent !== null,
    // False whenever in doubt.
    analytics: consent?.analytics === true,
    save: saveConsent,
  };
};
