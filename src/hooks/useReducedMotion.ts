"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

const subscribe = (onStoreChange: () => void): (() => void) => {
  const query = window.matchMedia(QUERY);
  query.addEventListener("change", onStoreChange);
  return () => query.removeEventListener("change", onStoreChange);
};

const getSnapshot = (): boolean => window.matchMedia(QUERY).matches;

const getServerSnapshot = (): boolean => false;

export const useReducedMotion = (): boolean =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
