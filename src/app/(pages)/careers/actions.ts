"use server";

import { ERROR_TYPES } from "@/constants";
import {
  RECAPTCHA_REJECTED_MESSAGE,
  readRecaptchaToken,
  verifyRecaptcha,
} from "@/lib/recaptcha";
import { appendSubmission, saveResume } from "@/lib/submissions";

import {
  APPLICATION_COLUMNS,
  APPLICATION_FILE_NAME,
  type ApplyFormState,
} from "./constants";
import { validateApplication, type JobApplication } from "./validation";

/** A failed write must not lose the application: log it where pm2 or journald
 *  will keep it. */
const logUnrecorded = (
  application: Omit<JobApplication, "resume">,
  resumeFile: string | null,
  error: unknown,
) => {
  console.error(
    "[job-application] failed to record submission",
    JSON.stringify({
      application,
      resumeFile,
      error: error instanceof Error ? error.message : String(error),
    }),
  );
};

export const submitApplication = async (
  _prevState: ApplyFormState,
  formData: FormData,
): Promise<ApplyFormState> => {
  const result = validateApplication(formData);

  if (!result.ok) {
    return {
      status: "error",
      errorType: ERROR_TYPES.VALIDATION_ERROR,
      fieldErrors: result.fieldErrors,
      values: result.values,
    };
  }

  // After the cheap field rules, before anything is written.
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

  const { resume, ...details } = result.application;
  let resumeFile: string | null = null;

  try {
    // The PDF lands first so the spreadsheet row never points at a file that
    // does not exist. A failure after this leaves an orphan PDF, which is the
    // recoverable direction.
    resumeFile = await saveResume(resume, details.fullName);

    await appendSubmission(APPLICATION_FILE_NAME, APPLICATION_COLUMNS, [
      details.position,
      details.fullName,
      details.phone,
      details.email,
      details.dateOfBirth,
      details.address,
      details.noticePeriod,
      resumeFile,
    ]);

    return { status: "success" };
  } catch (error) {
    logUnrecorded(details, resumeFile, error);
    return { status: "error", errorType: ERROR_TYPES.UNKNOWN_ERROR };
  }
};
