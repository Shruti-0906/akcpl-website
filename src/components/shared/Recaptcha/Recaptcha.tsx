"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

import { env } from "@/config";

/** `explicit` keeps Google from auto-scanning the page on load: that scan runs
 *  once, so a widget mounted by a later client-side navigation is missed. */
const SCRIPT_SRC = "https://www.google.com/recaptcha/api.js?render=explicit";

const SCRIPT_ID = "google-recaptcha";

type Grecaptcha = {
  ready?: (callback: () => void) => void;
  render: (
    container: HTMLElement,
    parameters: { sitekey: string; theme?: "light" | "dark" },
  ) => number;
  reset: (widgetId?: number) => void;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

type RecaptchaProps = {
  /** Clears a solved checkbox when this changes identity. Tokens are
   *  single-use, so pass the state a server action returns. */
  resetOn?: unknown;
};

/**
 * reCAPTCHA v2 checkbox. Needs no wiring from the form: the widget injects its
 * own `g-recaptcha-response` field, so placing this inside a `<form>` is what
 * carries the token into the FormData a server action receives.
 */
const Recaptcha = ({ resetOn }: RecaptchaProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const lastResetOn = useRef(resetOn);
  const [unavailable, setUnavailable] = useState(false);

  const renderWidget = useCallback(() => {
    const draw = () => {
      const container = containerRef.current;

      if (!container || widgetIdRef.current !== null) return;

      const api = window.grecaptcha;

      if (typeof api?.render !== "function") {
        console.error("[recaptcha] the API became ready without a renderer");
        setUnavailable(true);
        return;
      }

      try {
        widgetIdRef.current = api.render(container, {
          sitekey: env.recaptchaSiteKey,
          theme: "dark",
        });
      } catch (error) {
        console.error("[recaptcha] could not render the widget", error);
        setUnavailable(true);
      }
    };

    const grecaptcha = window.grecaptcha;
    if (!grecaptcha) return;

    if (typeof grecaptcha.ready === "function") grecaptcha.ready(draw);
    else draw();
  }, []);

  useEffect(() => {
    if (lastResetOn.current === resetOn) return;

    lastResetOn.current = resetOn;

    if (widgetIdRef.current !== null) {
      window.grecaptcha?.reset(widgetIdRef.current);
    }
  }, [resetOn]);

  return (
    <>
      <div className="h-[78px] max-[440px]:h-[55px]">
        <div
          ref={containerRef}
          className="origin-top-left max-[440px]:scale-[0.7]"
        />
      </div>

      {unavailable && (
        <p
          role="alert"
          className="mt-1.5 font-roboto text-[13px] text-[#ff8080]"
        >
          The verification widget could not load. Please disable any ad blocker
          for this page and reload.
        </p>
      )}

      <Script
        id={SCRIPT_ID}
        src={SCRIPT_SRC}
        onReady={renderWidget}
        onError={() => setUnavailable(true)}
      />
    </>
  );
};

export default Recaptcha;
