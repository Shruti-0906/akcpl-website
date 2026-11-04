"use client";

import { CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

const DISMISS_AFTER_MS = 5000;

type ToastProps = {
  message: string;
  /** Must be stable, or the dismiss timer restarts on every parent render. */
  onDismiss: () => void;
};

const Toast = ({ message, onDismiss }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onDismiss, DISMISS_AFTER_MS);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-4 bottom-6 z-50 mx-auto flex w-fit items-center gap-3 rounded-sm bg-secondary px-5 py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
    >
      <CheckCircle2
        className="size-5 shrink-0 text-primary"
        aria-hidden="true"
      />
      <p className="font-roboto text-[14px] text-white">{message}</p>
    </div>
  );
};

export default Toast;
