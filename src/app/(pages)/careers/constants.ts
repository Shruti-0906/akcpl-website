import type { ErrorType } from "@/constants";
import type { SubmissionColumn } from "@/lib/submissions";

export const APPLICATION_FILE_NAME = "job-applications.xlsx";

export const APPLICATION_COLUMNS: readonly SubmissionColumn[] = [
  { header: "Position", width: 30 },
  { header: "Name", width: 26 },
  { header: "Phone", width: 18 },
  { header: "Email", width: 30 },
  { header: "Date of Birth", width: 15 },
  { header: "Address", width: 40 },
  { header: "Notice Period", width: 18 },
  { header: "Resume File", width: 34 },
];

export const MAX_RESUME_BYTES = 2 * 1024 * 1024;
export const RESUME_MIME = "application/pdf";

export const MAX_PHONE_DIGITS = 13;
export const MIN_PHONE_DIGITS = 10;

export type ApplyField =
  | "position"
  | "fullName"
  | "phone"
  | "email"
  | "dateOfBirth"
  | "address"
  | "noticePeriod"
  | "resume";

export type ApplyValues = Record<Exclude<ApplyField, "resume">, string>;

/** `recaptcha` carries an error but never a value: it is not an input. */
export type ApplyFieldErrors = Partial<
  Record<ApplyField | "recaptcha", string>
>;

export type ApplyFormState = {
  status: "idle" | "success" | "error";
  errorType?: ErrorType;
  fieldErrors?: ApplyFieldErrors;
  values?: ApplyValues;
};

export const APPLY_FORM_INITIAL_STATE: ApplyFormState = { status: "idle" };
