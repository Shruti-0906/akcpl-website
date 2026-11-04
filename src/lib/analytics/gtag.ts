import { env } from "@/config";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Distinct ids: the framework deduplicates scripts by id, so a shared one
 *  would silently drop the second tag. */
export const GA_LOADER_ID = "ga4-loader";
export const GA_BOOTSTRAP_ID = "ga4-bootstrap";

export const gaScriptSrc = (): string =>
  `https://www.googletagmanager.com/gtag/js?id=${env.gaId}`;

/** The bootstrap the loader needs. `gtag` is declared as a function so it lands
 *  on `window`, which is what every helper below checks for. */
export const gaBootstrap = (): string =>
  `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${env.gaId}');`;

/** All four signals move together, because the visitor was shown one toggle.
 *  Splitting them here would claim a distinction they were never offered. */
const signals = (granted: boolean) => {
  const value = granted ? "granted" : "denied";

  return {
    analytics_storage: value,
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
  };
};

const updateConsent = (granted: boolean): void => {
  if (typeof window.gtag !== "function") return;
  window.gtag("consent", "update", signals(granted));
};

/** Google's own kill switch, and the bluntest of the three: it stops the
 *  resident library sending even if a call slips past the other guards. */
const setDisableFlag = (disabled: boolean): void => {
  const flags = window as unknown as Record<string, boolean>;
  flags[`ga-disable-${env.gaId}`] = disabled;
};

/**
 * Denying consent stops new cookies; the ones already on the device have to be
 * expired by hand. GA writes `_ga` and `_ga_<stream>` on the registrable
 * domain, so clearing on the exact host alone leaves them in place.
 */
const dropCookies = (): void => {
  const names = document.cookie
    .split(";")
    .map((pair) => pair.split("=")[0]?.trim())
    .filter(
      (name): name is string =>
        typeof name === "string" && name.startsWith("_ga"),
    );

  if (names.length === 0) return;

  const host = window.location.hostname;
  const registrable = host.split(".").slice(-2).join(".");
  const domains = ["", host, `.${host}`, `.${registrable}`];

  names.forEach((name) => {
    domains.forEach((domain) => {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    });
  });
};

/**
 * No-ops before consent, because the global does not exist yet. Callers can
 * fire events unconditionally without knowing about the gate.
 */
export const gaEvent = (
  name: string,
  params: Record<string, unknown> = {},
): void => {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
};

/** `page_location` is read off the address bar rather than a route prop, so
 *  campaign parameters on the URL survive into the report. */
export const gaPageView = (): void => {
  gaEvent("page_view", {
    page_location: window.location.href,
    page_title: document.title,
  });
};

export const gaRevoke = (): void => {
  setDisableFlag(true);
  updateConsent(false);
  dropCookies();
};

/** No page view here: the route effect in the component files that one, and
 *  firing it in both places would count the same view twice. */
export const gaRegrant = (): void => {
  setDisableFlag(false);
  updateConsent(true);
};
