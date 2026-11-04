"use client";

import { useEffect, useState } from "react";

import { markAppReady } from "@/hooks";
import { cn } from "@/lib";

const HIDE_DELAY = 1600;

/** Kept in step with the `duration-600` fade on the overlay below. */
const FADE_MS = 600;

const Loader = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;
    let readyTimer: ReturnType<typeof setTimeout>;

    const scheduleHide = () => {
      hideTimer = setTimeout(() => setHidden(true), HIDE_DELAY);
      readyTimer = setTimeout(markAppReady, HIDE_DELAY + FADE_MS);
    };

    if (document.readyState === "complete") scheduleHide();
    else window.addEventListener("load", scheduleHide);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(readyTimer);
      window.removeEventListener("load", scheduleHide);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-5",
        "bg-secondary transition-[opacity,visibility] duration-600 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
        hidden && "invisible opacity-0",
      )}
    >
      <p className="font-cormorant text-[48px] font-light tracking-[0.04em] text-white">
        Apex <span className="text-primary-light">Kidney Care</span>
      </p>
      <div className="relative h-px w-50 overflow-hidden bg-white/10">
        <span className="absolute inset-y-0 left-0 animate-load-progress bg-primary-light" />
      </div>
    </div>
  );
};

export default Loader;
