import type { ErrorType } from "@/constants";
import type { SubmissionColumn } from "@/lib/submissions";

export const QUERY_OPTIONS = [
  "Dialysis Enquiry",
  "Home Dialysis",
  "Diet Help",
  "Partner with us",
  "Apply for job",
  "Dialysis Education",
] as const;

export type QueryOption = (typeof QUERY_OPTIONS)[number];

export const CONTACT_FILE_NAME = "contact-us.xlsx";

export const CONTACT_COLUMNS: readonly SubmissionColumn[] = [
  { header: "Name", width: 28 },
  { header: "Phone", width: 18 },
  { header: "Email", width: 32 },
  { header: "City", width: 20 },
  { header: "Query", width: 24 },
];

export const MIN_PHONE_DIGITS = 10;
export const MAX_PHONE_DIGITS = 12;

export type ContactField = "fullName" | "phone" | "email" | "city" | "message";

export type ContactValues = Record<ContactField, string>;

export type FieldErrors = Partial<Record<ContactField | "recaptcha", string>>;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  errorType?: ErrorType;
  fieldErrors?: FieldErrors;
  values?: ContactValues;
};

export const CONTACT_FORM_INITIAL_STATE: ContactFormState = { status: "idle" };
