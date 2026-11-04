import type { ReactNode } from "react";

export type Scholar = {
  status: string;
  firstName: string;
  lastName: string;
  affiliation: string;
  thesis: string;
  summary: ReactNode;
  output: ReactNode;
  anchorLabel: string;
  anchor: ReactNode;
};

const META_LABEL =
  "font-roboto text-[9px] font-bold tracking-[0.2em] text-white/45 uppercase";
const META_VALUE =
  "mt-1.5 font-roboto text-[13px] leading-[1.5] text-white/85";

const ScholarCard = ({
  status,
  firstName,
  lastName,
  affiliation,
  thesis,
  summary,
  output,
  anchorLabel,
  anchor,
}: Scholar) => (
  <article className="flex flex-col border border-white/12 bg-white/[0.02] p-7 sm:p-9">
    <p className="flex items-center gap-3 font-roboto text-[10px] font-semibold tracking-[0.2em] text-white/70 uppercase">
      <span aria-hidden="true" className="h-px w-6 bg-white/40" />
      {status}
    </p>

    <h3 className="mt-5 font-cormorant text-2xl font-bold text-white sm:text-[26px]">
      <em className="font-normal text-primary italic">{firstName}</em>{" "}
      {lastName}
    </h3>

    <p className="mt-4 font-roboto text-[15px] leading-[1.6] text-white/70">
      {affiliation}
    </p>

    <p className="mt-3 font-roboto text-[15px] leading-[1.6] text-white">
      {thesis}
    </p>

    <p className="mt-3 font-roboto text-[15px] leading-[1.6] text-white/70">
      {summary}
    </p>

    <div className="mt-auto grid gap-6 border-t border-white/12 pt-5 sm:grid-cols-2">
      <div>
        <p className={META_LABEL}>Output</p>
        <p className={META_VALUE}>{output}</p>
      </div>
      <div>
        <p className={META_LABEL}>{anchorLabel}</p>
        <p className={META_VALUE}>{anchor}</p>
      </div>
    </div>
  </article>
);

export default ScholarCard;
