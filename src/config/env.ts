export function required(name: string, value: string | undefined): string {
  if (value === undefined || value.trim() === "") {
    throw new Error(
      `Missing required environment variable: ${name}. Add it to .env.local.`,
    );
  }
  return value.trim();
}

/** Returns the value, or `fallback` when unset. Use for vars with a safe default. */
export function optional(value: string | undefined, fallback: string): string {
  return value !== undefined && value.trim() !== "" ? value.trim() : fallback;
}

const isProduction = process.env.NODE_ENV === "production";

const rawSiteUrl = isProduction
  ? required("NEXT_PUBLIC_SITE_URL", process.env.NEXT_PUBLIC_SITE_URL)
  : optional(process.env.NEXT_PUBLIC_SITE_URL, "http://localhost:3000");

export const env = {
  siteUrl: rawSiteUrl.replace(/\/$/, ""),
  recaptchaSiteKey: required(
    "NEXT_PUBLIC_RECAPTCHA_SITE_KEY",
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  ),
  /** GA4 measurement id. Optional on purpose: unset means the tag never loads,
   *  so a build machine without it still builds and local runs send nothing. */
  gaId: optional(process.env.NEXT_PUBLIC_GA_ID, ""),
  isProduction,
} as const;
