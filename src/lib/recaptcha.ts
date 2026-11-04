const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

/** Long enough for a slow round trip, short enough that a hung Google never
 *  holds the form's server action open. */
const VERIFY_TIMEOUT_MS = 5000;

export const RECAPTCHA_FIELD = "g-recaptcha-response";

/**
 * `rejected` is the visitor's problem and theirs to fix; `unavailable` is ours,
 * and the caller should report it as a server error rather than blame them.
 */
export type RecaptchaResult = "verified" | "rejected" | "unavailable";

type SiteVerifyResponse = {
  success?: boolean;
  "error-codes"?: string[];
};

/** Read lazily: a build machine without the secret must still build. */
const secretKey = (): string | null =>
  process.env.RECAPTCHA_SECRET_KEY?.trim() || null;

/** Spends the token: anything but `verified` needs a freshly solved one. */
export const verifyRecaptcha = async (
  token: string,
): Promise<RecaptchaResult> => {
  if (!token) return "rejected";

  const secret = secretKey();

  if (!secret) {
    console.error(
      "[recaptcha] RECAPTCHA_SECRET_KEY is not set; refusing every submission",
    );
    return "unavailable";
  }

  try {
    const response = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
      cache: "no-store",
      signal: AbortSignal.timeout(VERIFY_TIMEOUT_MS),
    });

    if (!response.ok) {
      console.error("[recaptcha] siteverify returned", response.status);
      return "unavailable";
    }

    const result: SiteVerifyResponse = await response.json();

    if (result.success) return "verified";

    // A bad secret is our misconfiguration, not a failed challenge.
    const codes = result["error-codes"] ?? [];
    const ourFault = codes.some(
      (code) =>
        code === "invalid-input-secret" ||
        code === "missing-input-secret" ||
        code === "bad-request",
    );

    if (ourFault) {
      console.error("[recaptcha] siteverify rejected our request", codes);
      return "unavailable";
    }

    return "rejected";
  } catch (error) {
    console.error(
      "[recaptcha] siteverify request failed",
      error instanceof Error ? error.message : String(error),
    );
    return "unavailable";
  }
};

export const readRecaptchaToken = (formData: FormData): string => {
  const token = formData.get(RECAPTCHA_FIELD);
  return typeof token === "string" ? token.trim() : "";
};

export const RECAPTCHA_REJECTED_MESSAGE =
  "Please confirm you are not a robot and try again.";
