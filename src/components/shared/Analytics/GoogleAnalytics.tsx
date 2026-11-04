"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef } from "react";

import { env } from "@/config";
import { useCookieConsent, useTrackerConsentTransition } from "@/hooks";
import {
  GA_BOOTSTRAP_ID,
  GA_LOADER_ID,
  gaBootstrap,
  gaPageView,
  gaRegrant,
  gaRevoke,
  gaScriptSrc,
} from "@/lib/analytics";

/**
 * Google Analytics 4, behind the consent gate.
 *
 * The gate is the absence of a script tag: until the visitor grants the
 * analytics category nothing is rendered, so nothing is fetched from Google, no
 * cookie is set and no request carries the visitor's IP. That is stronger than
 * loading the SDK and setting a "denied" flag inside it, where the vendor's
 * code is already running and merely trusted to honour the flag.
 */
const GoogleAnalytics = () => {
  const { analytics } = useCookieConsent();
  const pathname = usePathname();
  const countedFirstView = useRef(false);

  useTrackerConsentTransition(analytics, {
    onRevoke: gaRevoke,
    onRegrant: gaRegrant,
  });

  useEffect(() => {
    if (!analytics) return;

    // The bootstrap's own `config` call already reported the load it mounted
    // on, so the first run here would be a second count of the same view.
    if (!countedFirstView.current) {
      countedFirstView.current = true;
      return;
    }

    // A client-side navigation, or a re-grant mid-session: either way the tag
    // has not seen the page the visitor is currently on.
    gaPageView();
  }, [analytics, pathname]);

  // An unset measurement id turns the tag off outright rather than loading a
  // library with nowhere to report.
  if (!env.gaId || !analytics) return null;

  return (
    <>
      <Script
        id={GA_LOADER_ID}
        src={gaScriptSrc()}
        strategy="afterInteractive"
      />
      <Script id={GA_BOOTSTRAP_ID} strategy="afterInteractive">
        {gaBootstrap()}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
