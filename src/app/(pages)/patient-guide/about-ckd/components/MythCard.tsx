import type { ReactNode } from "react";

import { Eyebrow } from "@/components";

export type Myth = {
  claim: ReactNode;
  correction: ReactNode;
  truth: ReactNode;
};

export interface MythCardProps {
  myth: Myth;
}

const MARK_CLASS = "ml-[5px] inline-block h-7 w-7 align-middle";

const CrossMark = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={MARK_CLASS}
    fill="none"
    stroke="red"
    strokeWidth={3}
    strokeLinecap="round"
  >
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
);

const CheckMark = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={MARK_CLASS}
    fill="none"
    stroke="green"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 12l6 6L20 6" />
  </svg>
);

/**
 * The source's `.myth` card: a faint sage-tinted panel on the navy chapter,
 * a false claim struck through with a cross, its true restatement with a
 * tick, and a short explanation underneath.
 */
const MythCard = ({ myth }: MythCardProps) => (
  <div className="h-full rounded-[2px] border border-[rgba(216,227,218,0.2)] bg-[rgba(216,227,218,0.08)] p-8">
    <Eyebrow label="Common Misconception" className="mb-5 text-white" />

    <p className="mb-3.5 font-roboto text-2xl leading-[1.3] font-bold tracking-[-0.005em] text-[#F5F0E8]">
      {myth.claim} <CrossMark />
      <br />
      {myth.correction} <CheckMark />
    </p>

    <p className="font-roboto text-lg leading-[1.7] text-[rgba(251,248,243,0.85)] [&_em]:text-[#9DB6A4] [&_em]:italic [&_strong]:text-[#F5F0E8]">
      {myth.truth}
    </p>
  </div>
);

export default MythCard;
