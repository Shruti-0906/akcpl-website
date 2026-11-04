"use client";

import { openCookiePreferences } from "@/lib/consent";

/** Reopens the panel by dispatching one window event, so the panel stays a
 *  single instance with no shared state threaded through the tree. */
const CookiePreferencesLink = ({ className }: { className: string }) => (
  <button type="button" onClick={openCookiePreferences} className={className}>
    Cookie Preferences
  </button>
);

export default CookiePreferencesLink;
