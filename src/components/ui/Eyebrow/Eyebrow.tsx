import { cn } from "@/lib";

export interface EyebrowProps {
  label: string;
  /** Override the text colour on dark surfaces, e.g. `text-white/60`. */
  className?: string;
}

const Eyebrow = ({ label, className }: EyebrowProps) => (
  <p
    className={cn(
      "flex items-center gap-3 font-roboto text-xs sm:text-sm font-normal tracking-[0.22em] text-secondary/55 uppercase",
      className,
    )}
  >
    <span aria-hidden="true" className="h-px w-8 bg-current opacity-50" />
    {label}
  </p>
);

export default Eyebrow;
