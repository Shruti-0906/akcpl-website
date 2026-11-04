"use client";

import { X } from "lucide-react";
import { useActionState, useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent, MouseEvent } from "react";

import { Recaptcha } from "@/components/shared/Recaptcha";
import { cn } from "@/lib";

import { submitApplication } from "../actions";
import {
  APPLY_FORM_INITIAL_STATE,
  MAX_PHONE_DIGITS,
  MAX_RESUME_BYTES,
  RESUME_MIME,
} from "../constants";
import { jobTitle } from "../data";
import type { Job } from "../data";

const LABEL = "mb-2 block font-roboto text-[14px] text-white";

const FIELD = cn(
  "w-full rounded-sm bg-white px-3.5 py-2.5 font-roboto text-[15px] text-black",
  "outline-none focus-visible:ring-2 focus-visible:ring-primary",
);

/** The position is set by the card that opened the dialog, so it reads as fixed. */
const FIELD_READONLY = cn(
  FIELD,
  "cursor-default bg-[#e9eef2] text-[#3a4650] focus-visible:ring-white/60",
);

const Required = () => (
  <span aria-hidden="true" className="text-[#e5484d]">
    *
  </span>
);

const FieldError = ({ message }: { message?: string }) =>
  message ? (
    <p className="mt-1.5 font-roboto text-[13px] text-[#ffb4b4]">{message}</p>
  ) : null;

type ApplyModalProps = {
  open: boolean;
  /** The role applied for, or `null` for a general application. */
  job: Job | null;
  onClose: () => void;
  onSubmitted: () => void;
};

const ApplyModal = ({ open, job, onClose, onSubmitted }: ApplyModalProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [state, formAction, pending] = useActionState(
    submitApplication,
    APPLY_FORM_INITIAL_STATE,
  );

  const isOpen = open;

  useEffect(() => {
    if (!isOpen) return;

    const opener = document.activeElement;
    panelRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      if (opener instanceof HTMLElement) opener.focus();
    };
  }, [isOpen, onClose]);

  // The overlay covers the page, but the page behind it still scrolls on a
  // wheel or a trackpad drag.
  useEffect(() => {
    if (!isOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  useEffect(() => {
    if (state.status === "success") onSubmitted();
  }, [state, onSubmitted]);

  /**
   * `maxLength` only binds what the user types, so autofill can still overshoot
   * it. Re-applying the cap here means the rule holds however the value arrived.
   */
  const handlePhoneInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const digits = input.value.replace(/\D/g, "").slice(0, MAX_PHONE_DIGITS);
    if (digits !== input.value) input.value = digits;
  };

  /** A click landing on the overlay itself missed the panel: close. */
  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  /** Checked on selection rather than on submit, so an oversized file is
   *  caught before it is uploaded. The action re-checks regardless. */
  const handleResumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const file = input.files?.[0];

    if (!file) {
      setFileError(null);
      return;
    }

    // `accept` filters the file picker, but a drag-and-drop still gets through.
    const problem =
      file.type !== RESUME_MIME
        ? "Please attach your resume as a PDF."
        : file.size > MAX_RESUME_BYTES
          ? `That file is ${(file.size / 1024 / 1024).toFixed(1)} MB. Please attach a PDF under 2 MB.`
          : null;

    if (problem) {
      // Clearing the input is what makes this a block rather than a warning:
      // the file never reaches FormData, and `required` stops the submit.
      input.value = "";
      setFileError(problem);
      return;
    }

    setFileError(null);
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-9000 flex items-center justify-center bg-black/60 p-4"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="apply-modal-title"
        tabIndex={-1}
        className="max-h-[90vh] w-[min(92vw,720px)] overflow-y-auto rounded-sm bg-secondary-light outline-none"
      >
        {/* Keyed on the role so reopening starts from a clean, prefilled form. */}
        <form action={formAction} noValidate={false} className="p-6 sm:p-8">
          <div className="mb-7 flex items-start justify-between gap-4">
            <div>
              <h2
                id="apply-modal-title"
                className="font-cormorant text-[26px] leading-tight font-bold text-white"
              >
                {job ? "Apply for this role" : "Send us your CV"}
              </h2>
              <p className="mt-1 font-roboto text-[13px] text-white/70 italic">
                {job
                  ? jobTitle(job)
                  : "A general application — name the role you are after."}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="-mt-1 -mr-1 shrink-0 cursor-pointer rounded-sm p-1.5 text-white/70 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="apply-position" className={LABEL}>
                Apply For Position <Required />
              </label>
              {/* Fixed when a card set the role, typed by hand when it did not. */}
              <input
                id="apply-position"
                name="position"
                type="text"
                readOnly={job !== null}
                required={job === null}
                defaultValue={
                  job ? jobTitle(job) : (state.values?.position ?? "")
                }
                aria-invalid={state.fieldErrors?.position ? true : undefined}
                className={job ? FIELD_READONLY : FIELD}
              />
              <FieldError message={state.fieldErrors?.position} />
            </div>

            <div>
              <label htmlFor="apply-name" className={LABEL}>
                Full Name <Required />
              </label>
              <input
                id="apply-name"
                name="fullName"
                type="text"
                required
                autoComplete="name"
                defaultValue={state.values?.fullName ?? ""}
                aria-invalid={state.fieldErrors?.fullName ? true : undefined}
                className={FIELD}
              />
              <FieldError message={state.fieldErrors?.fullName} />
            </div>

            <div>
              <label htmlFor="apply-phone" className={LABEL}>
                Phone Number <Required />
              </label>
              <input
                id="apply-phone"
                name="phone"
                type="tel"
                required
                inputMode="numeric"
                maxLength={MAX_PHONE_DIGITS}
                placeholder="9876543210"
                onInput={handlePhoneInput}
                autoComplete="tel"
                defaultValue={state.values?.phone ?? ""}
                aria-invalid={state.fieldErrors?.phone ? true : undefined}
                className={FIELD}
              />
              <FieldError message={state.fieldErrors?.phone} />
            </div>

            <div>
              <label htmlFor="apply-email" className={LABEL}>
                Email Id <Required />
              </label>
              <input
                id="apply-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                defaultValue={state.values?.email ?? ""}
                aria-invalid={state.fieldErrors?.email ? true : undefined}
                className={FIELD}
              />
              <FieldError message={state.fieldErrors?.email} />
            </div>

            <div>
              <label htmlFor="apply-dob" className={LABEL}>
                Date of Birth
              </label>
              <input
                id="apply-dob"
                name="dateOfBirth"
                type="date"
                autoComplete="bday"
                defaultValue={state.values?.dateOfBirth ?? ""}
                aria-invalid={state.fieldErrors?.dateOfBirth ? true : undefined}
                className={FIELD}
              />
              <FieldError message={state.fieldErrors?.dateOfBirth} />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="apply-address" className={LABEL}>
                Address <Required />
              </label>
              <input
                id="apply-address"
                name="address"
                type="text"
                required
                autoComplete="street-address"
                defaultValue={state.values?.address ?? ""}
                aria-invalid={state.fieldErrors?.address ? true : undefined}
                className={FIELD}
              />
              <FieldError message={state.fieldErrors?.address} />
            </div>

            <div>
              <label htmlFor="apply-notice" className={LABEL}>
                Notice Period
              </label>
              <input
                id="apply-notice"
                name="noticePeriod"
                type="text"
                defaultValue={state.values?.noticePeriod ?? ""}
                aria-invalid={
                  state.fieldErrors?.noticePeriod ? true : undefined
                }
                className={FIELD}
              />
              <FieldError message={state.fieldErrors?.noticePeriod} />
            </div>

            <div>
              <label htmlFor="apply-resume" className={LABEL}>
                Upload Resume <Required />
              </label>
              <input
                id="apply-resume"
                name="resume"
                type="file"
                required
                accept={RESUME_MIME}
                onChange={handleResumeChange}
                aria-describedby="apply-resume-hint"
                aria-invalid={
                  (fileError ?? state.fieldErrors?.resume) ? true : undefined
                }
                className="w-full font-roboto text-[13px] text-white/80 file:mr-3 file:rounded-sm file:border-0 file:bg-white file:px-3 file:py-2 file:font-roboto file:text-[13px] file:font-bold file:text-secondary hover:file:bg-white/90"
              />
              <p
                id="apply-resume-hint"
                className="mt-2 font-roboto text-[12px] text-white/60"
              >
                One PDF, up to 2 MB.
              </p>
              <FieldError message={fileError ?? state.fieldErrors?.resume} />
            </div>
          </div>

          <div className="mt-5">
            <span className={LABEL}>
              Verification <Required />
            </span>
            <Recaptcha resetOn={state} />
            <FieldError message={state.fieldErrors?.recaptcha} />
          </div>

          {state.status === "error" && !state.fieldErrors && (
            <p
              role="alert"
              className="mt-5 font-roboto text-[13px] text-[#ffb4b4]"
            >
              Something went wrong on our end and your application wasn&apos;t
              sent. Please try again.
            </p>
          )}

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              disabled={pending || fileError !== null}
              className="cursor-pointer rounded-sm bg-primary px-7 py-3 font-roboto text-sm font-bold tracking-[0.04em] text-white hover:bg-primary-light focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {pending ? "Submitting…" : "Submit application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;
