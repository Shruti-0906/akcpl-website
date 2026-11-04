import Link from "next/link";
import type { ReactNode } from "react";

export type QuickNavPill = {
  /** In-page anchor the pill jumps to. */
  href: string;
  roman: string;
  name: ReactNode;
};

const QuickNavPillCard = ({ pill }: { pill: QuickNavPill }) => (
  <Link
    href={pill.href}
    className="relative grid grid-cols-[0.2fr_2fr] items-center rounded-[2px] bg-white p-4.5 text-left before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-primary-subtle before:content-['']"
  >
    <span
      aria-hidden="true"
      className="font-roboto text-[9.5px] font-medium tracking-normal text-primary-subtle"
    >
      {pill.roman}
    </span>
    <span className="font-roboto text-[17px] leading-[1.3] font-medium tracking-[-0.005em] text-secondary [&_em]:font-normal [&_em]:text-primary-subtle [&_em]:italic">
      {pill.name}
    </span>
  </Link>
);

export default QuickNavPillCard;
