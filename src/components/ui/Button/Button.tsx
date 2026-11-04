import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib";

export type ButtonVariant = "primary" | "outline";

export interface ButtonProps {
  children: ReactNode;
  /** Renders a `next/link` when set, a `button` otherwise. */
  href?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
}

const BASE = cn(
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3",
  "font-roboto text-sm font-medium transition",
  "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  "focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  "select-none active:scale-95"
);

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary/90",
  outline:
    "border border-secondary/75 text-secondary hover:border-secondary hover:bg-secondary/5",
};

const Button = ({
  children,
  href,
  variant = "primary",
  type = "button",
  disabled = false,
  className,
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) => {
  const classes = cn(BASE, VARIANTS[variant], className);

  if (href) {
    /** In-page anchors use a native link so the browser re-scrolls on every click. */
    if (href.startsWith("#")) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          aria-label={ariaLabel}
          draggable={false}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
        draggable={false}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
      draggable={false}
    >
      {children}
    </button>
  );
};

export default Button;
