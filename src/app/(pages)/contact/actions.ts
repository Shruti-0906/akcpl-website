"use server";

import { ERROR_TYPES } from "@/constants";
import {
  RECAPTCHA_REJECTED_MESSAGE,
  readRecaptchaToken,
  verifyRecaptcha,
} from "@/lib/recaptcha";
import { appendSubmission } from "@/lib/submissions";
import type { ContactSubmission } from "@/types";

import {
  CONTACT_COLUMNS,
  CONTACT_FILE_NAME,
  type ContactFormState,
} from "./constants";
import { validateContactForm } from "./validation";

const logUnrecorded = (submission: ContactSubmission, error: unknown) => {
  console.error(
    "[contact-form] failed to record submission",
    JSON.stringify({
      submission,
      error: error instanceof Error ? error.message : String(error),
    }),
  );
};

export const submitContactForm = async (
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> => {
  const result = validateContactForm(formData);

  if (!result.ok) {
    return {
      status: "error",
      errorType: ERROR_TYPES.VALIDATION_ERROR,
      fieldErrors: result.fieldErrors,
      values: result.values,
    };
  }

  const captcha = await verifyRecaptcha(readRecaptchaToken(formData));

  if (captcha === "rejected") {
    return {
      status: "error",
      errorType: ERROR_TYPES.VALIDATION_ERROR,
      fieldErrors: { recaptcha: RECAPTCHA_REJECTED_MESSAGE },
      values: result.values,
    };
  }

  if (captcha === "unavailable") {
    return { status: "error", errorType: ERROR_TYPES.UNKNOWN_ERROR };
  }

  try {
    const { fullName, phone, email, city, query } = result.submission;
    await appendSubmission(CONTACT_FILE_NAME, CONTACT_COLUMNS, [
      fullName,
      phone,
      email,
      city,
      query,
    ]);
    return { status: "success" };
  } catch (error) {
    logUnrecorded(result.submission, error);
    return { status: "error", errorType: ERROR_TYPES.UNKNOWN_ERROR };
  }
};
