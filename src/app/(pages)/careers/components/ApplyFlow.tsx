"use client";

import { createContext, useCallback, useContext, useState } from "react";
import type { ReactNode } from "react";

import type { Job } from "../data";
import ApplyModal from "./ApplyModal";
import Toast from "./Toast";

/** Pass a role to apply for it, or `null` for a general application. */
type OpenApply = (job: Job | null) => void;

const ApplyContext = createContext<OpenApply | null>(null);

export const useApply = (): OpenApply => {
  const openApply = useContext(ApplyContext);

  if (!openApply) {
    throw new Error("useApply must be used inside <ApplyFlow>");
  }

  return openApply;
};

/**
 * Owns the one apply dialog the page shares. The role cards and the closing
 * call to action both open it, so its state cannot live inside either.
 */
const ApplyFlow = ({ children }: { children: ReactNode }) => {
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openCount, setOpenCount] = useState(0);

  const openApply = useCallback<OpenApply>((job) => {
    setActiveJob(job);
    setIsOpen(true);
    setOpenCount((count) => count + 1);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);
  const dismissToast = useCallback(() => setSubmitted(false), []);

  const handleSubmitted = useCallback(() => {
    setIsOpen(false);
    setSubmitted(true);
  }, []);

  return (
    <ApplyContext.Provider value={openApply}>
      {children}

      {/* Remounted per open so a previous attempt's errors never reappear. */}
      <ApplyModal
        key={`${activeJob?.slug ?? "general"}-${openCount}`}
        open={isOpen}
        job={activeJob}
        onClose={closeModal}
        onSubmitted={handleSubmitted}
      />

      {submitted && (
        <Toast
          message="Your application has been submitted."
          onDismiss={dismissToast}
        />
      )}
    </ApplyContext.Provider>
  );
};

export default ApplyFlow;
