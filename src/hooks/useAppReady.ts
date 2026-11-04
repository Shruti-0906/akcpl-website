"use client";

import { useSyncExternalStore } from "react";

const READY_EVENT = "akc:app-ready";

let ready = false;

export const markAppReady = (): void => {
  if (ready) return;

  ready = true;
  window.dispatchEvent(new Event(READY_EVENT));
};

const subscribe = (onStoreChange: () => void): (() => void) => {
  window.addEventListener(READY_EVENT, onStoreChange);
  return () => window.removeEventListener(READY_EVENT, onStoreChange);
};

const getSnapshot = (): boolean => ready;

const getServerSnapshot = (): boolean => false;

export const useAppReady = (): boolean =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
