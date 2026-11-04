import { z } from "zod";

import {
  MAX_PHONE_DIGITS,
  MAX_RESUME_BYTES,
  MIN_PHONE_DIGITS,
  RESUME_MIME,
  type ApplyField,
  type ApplyFieldErrors,
  type ApplyValues,
} from "./constants";

const LIMITS = {
  position: 120,
  fullName: 100,
  email: 200,
  address: 300,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const tooLong = (limit: number) =>
  `Please keep this under ${limit} characters.`;

export type JobApplication = {
  position: string;
  fullName: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  address: string;
  noticePeriod: string;
  resume: File;
};

const applicationSchema = z.object({
  position: z
    .string()
    .min(1, "Please name the position you are applying for.")
    .max(LIMITS.position, tooLong(LIMITS.position)),
  fullName: z
    .string()
    .min(1, "Please enter your name.")
    .max(LIMITS.fullName, tooLong(LIMITS.fullName)),
  phone: z.string().refine((value) => {
    const digits = value.replace(/\D/g, "");
    return (
      digits.length >= MIN_PHONE_DIGITS && digits.length <= MAX_PHONE_DIGITS
    );
  }, `Please enter a phone number of ${MIN_PHONE_DIGITS}-${MAX_PHONE_DIGITS} digits.`),
  email: z
    .string()
    .min(1, "Please enter your email address.")
    .max(LIMITS.email, tooLong(LIMITS.email))
    .regex(EMAIL_PATTERN, "Please enter a valid email address."),
  dateOfBirth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please enter a valid date.")
    .or(z.literal("")),
  address: z
    .string()
    .min(1, "Please enter your address.")
    .max(LIMITS.address, tooLong(LIMITS.address)),
  noticePeriod: z.string(),
  resume: z
    .instanceof(File, { message: "Please attach your resume as a PDF." })
    .refine((file) => file.size > 0, "Please attach your resume as a PDF.")
    .refine(
      (file) => file.type === RESUME_MIME,
      "Your resume must be a PDF file.",
    )
    .refine(
      (file) => file.size <= MAX_RESUME_BYTES,
      "That file is over 2 MB. Please attach a smaller PDF.",
    ),
});

/** `values` rides along on both branches so a caller that rejects an
 *  otherwise valid form can still echo what was typed. */
type ValidationResult =
  | { ok: true; application: JobApplication; values: ApplyValues }
  | { ok: false; fieldErrors: ApplyFieldErrors; values: ApplyValues };

const read = (formData: FormData, field: ApplyField): string => {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
};

export const validateApplication = (formData: FormData): ValidationResult => {
  const values = {
    position: read(formData, "position"),
    fullName: read(formData, "fullName"),
    phone: read(formData, "phone"),
    email: read(formData, "email"),
    dateOfBirth: read(formData, "dateOfBirth"),
    address: read(formData, "address"),
    noticePeriod: read(formData, "noticePeriod"),
  };

  const parsed = applicationSchema.safeParse({
    ...values,
    resume: formData.get("resume"),
  });

  if (!parsed.success) {
    const fieldErrors: ApplyFieldErrors = {};

    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      // First message per field wins: the schema runs missing -> malformed.
      if (typeof field === "string" && !(field in fieldErrors)) {
        fieldErrors[field as ApplyField] = issue.message;
      }
    }

    return { ok: false, fieldErrors, values };
  }

  return { ok: true, application: parsed.data, values };
};
