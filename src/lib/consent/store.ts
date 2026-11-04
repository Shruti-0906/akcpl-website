/**
 * The single stored consent decision. Every optional script on the site reads
 * the answer through here, so adding a vendor is a decision made once.
 *
 * Deliberately framework-free: React binds to it in `useCookieConsent`, but
 * nothing in this file knows React exists.
 *
 * It lives in `localStorage` rather than a cookie because the pages are
 * prerendered - there is no server reading a cookie at request time, so sending
 * the decision up with every request would buy nothing.
 */

export type ConsentRecord = {
  /** Always granted. Stored anyway so the record reads like the panel the
   *  visitor was actually shown. */
  necessary: true;
  /** The one optional category today. Categories rather than a bare boolean, so
   *  a second one later is a new field and not a reinterpretation of everyone's
   *  saved answer. */
  analytics: boolean;
  version: number;
  /** ISO timestamp. Evidence of when consent was given, and what makes an
   *  expiry possible at all. */
  decidedAt: string;
};

const STORAGE_KEY = "akc_cookie_consent";

/** Bump this to invalidate every saved answer and re-ask everybody, which is
 *  exactly what should happen when a new optional category appears: an old
 *  record cannot speak for a choice its owner was never offered. */
export const CONSENT_VERSION = 1;

const DAY_MS = 86_400_000;

/**
 * Consent is not permanent - guidance is to re-ask every 6 to 12 months, and
 * the CNIL caps it at 13. A "no" is trusted for longer than a "yes" because
 * re-asking a refusal too often is itself a consent problem.
 */
const MAX_AGE_DAYS = { granted: 180, declined: 365 } as const;

export const CONSENT_CHANGE_EVENT = "akc:consent-change";
export const CONSENT_OPEN_EVENT = "akc:consent-open";

/** Holds a decision whose write threw, so the banner does not reappear on every
 *  navigation of a page view where storage is blocked. */
let fallback: ConsentRecord | null = null;

/** Three states, and `undefined` is the third: storage has not been read yet. */
let snapshot: ConsentRecord | null | undefined;

const listeners = new Set<() => void>();

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

/**
 * Reading is deliberately suspicious. Missing, unparseable, an older version, a
 * field of the wrong type and an expired decision all get the same answer:
 * there is no decision, so ask again. Absence never means "assume yes".
 */
const parse = (raw: string | null): ConsentRecord | null => {
  if (!raw) return null;

  let parsed: unknown;

  try {
    parsed = JSON.parse(raw);
  } catch {
    return null;
  }

  if (!isObject(parsed)) return null;
  if (parsed.version !== CONSENT_VERSION) return null;
  if (typeof parsed.analytics !== "boolean") return null;
  if (typeof parsed.decidedAt !== "string") return null;

  const decidedAt = Date.parse(parsed.decidedAt);
  if (Number.isNaN(decidedAt)) return null;

  const maxAge = parsed.analytics
    ? MAX_AGE_DAYS.granted
    : MAX_AGE_DAYS.declined;
  if (Date.now() - decidedAt > maxAge * DAY_MS) return null;

  return {
    necessary: true,
    analytics: parsed.analytics,
    version: CONSENT_VERSION,
    decidedAt: parsed.decidedAt,
  };
};

const read = (): ConsentRecord | null => {
  if (typeof window === "undefined") return null;

  try {
    return parse(window.localStorage.getItem(STORAGE_KEY)) ?? fallback;
  } catch {
    // In a private window, or with site data blocked, the access itself throws
    // rather than merely returning nothing.
    return fallback;
  }
};

const publish = (next: ConsentRecord | null): void => {
  snapshot = next;
  listeners.forEach((listener) => listener());
};

/** Keeps the same object identity until something actually changes, which is
 *  what stops the subscription in `useSyncExternalStore` from looping. */
export const getConsentSnapshot = (): ConsentRecord | null => {
  if (snapshot === undefined) snapshot = read();
  return snapshot;
};

/** Nobody has consented on the server: the HTML is built long before any
 *  visitor exists, so it cannot know who has already answered. */
export const getServerConsentSnapshot = (): ConsentRecord | null => null;

export const saveConsent = (analytics: boolean): ConsentRecord => {
  const record: ConsentRecord = {
    necessary: true,
    analytics,
    version: CONSENT_VERSION,
    decidedAt: new Date().toISOString(),
  };

  // Set before the write, so a throw still leaves the decision honoured.
  fallback = record;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    // Storage blocked. `fallback` carries the answer for the rest of this page
    // view, which is the most that can be promised.
  }

  // Published on the same path a change arriving from another tab takes, so
  // there is one flow to reason about rather than two.
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));

  return record;
};

const onConsentChange = () => publish(read());

/** A whole-store clear arrives with a null key, and counts as a change. */
const onStorage = (event: StorageEvent) => {
  if (event.key === null || event.key === STORAGE_KEY) publish(read());
};

export const subscribeToConsent = (listener: () => void): (() => void) => {
  if (listeners.size === 0) {
    window.addEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
    window.addEventListener("storage", onStorage);
  }

  listeners.add(listener);

  return () => {
    listeners.delete(listener);

    if (listeners.size === 0) {
      window.removeEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
      window.removeEventListener("storage", onStorage);
    }
  };
};

/** Lets any UI reopen the preferences panel - the footer link is the one that
 *  matters - without threading shared state through the tree. */
export const openCookiePreferences = (): void => {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
};
