"use client";

import { useEffect, useRef } from "react";

type Transitions = {
  /** Tell the still-resident library to stop and to drop its cookies. */
  onRevoke: () => void;
  /** Tell it again, because its script tag will not re-execute. */
  onRegrant: () => void;
};

/**
 * Bridges the one asymmetry that drives most of the consent code:
 *
 * > Rendering a script tag mounts a tracker. *Not* rendering it does not
 * > unmount the tracker. The vendor library stays in memory, and the framework
 * > will not re-run an inline script it has already executed.
 *
 * So the three transitions are not symmetric. A first grant needs nothing: the
 * freshly injected script initialises itself. A revoke and a re-grant both have
 * to be spoken to a library that is already resident.
 *
 * Plain re-renders and development's deliberate double-invoke are ignored,
 * because the guard compares against what was last seen rather than counting
 * runs.
 */
export const useTrackerConsentTransition = (
  granted: boolean,
  { onRevoke, onRegrant }: Transitions,
): void => {
  const seen = useRef<boolean | null>(null);
  const installed = useRef(false);
  const callbacks = useRef({ onRevoke, onRegrant });

  useEffect(() => {
    callbacks.current = { onRevoke, onRegrant };
  });

  useEffect(() => {
    if (seen.current === granted) return;
    seen.current = granted;

    if (granted) {
      // The script tag is about to mount for the first time and will bootstrap
      // itself. Nothing to say to it.
      if (!installed.current) {
        installed.current = true;
        return;
      }

      callbacks.current.onRegrant();
      return;
    }

    if (installed.current) callbacks.current.onRevoke();
  }, [granted]);
};
