import type { ReactNode } from "react";

import { cn } from "@/lib";

export type PublicationKind =
  | "Journal"
  | "Conference"
  | "Presentation"
  | "Proceedings Poster"
  | "Public Report"
  | "Working Paper"
  | "Preprint"
  | "Clinical Evidence Paper"
  | "Survey Study"
  | "Working Paper Series";

export type Publication = {
  year: string;
  venue: string;
  kind: PublicationKind;
  title: ReactNode;
  authors: ReactNode;
  tags: readonly { label: string; accent?: boolean }[];
};

const KIND_INK: Record<PublicationKind, string> = {
  Journal: "text-tertiary",
  Conference: "text-primary-subtle",
  Presentation: "text-[#5c7766]",
  "Proceedings Poster": "text-[#5c7766]",
  "Public Report": "text-[#5c7766]",
  "Working Paper": "text-[#5c7766]",
  Preprint: "text-[#5c7766]",
  "Clinical Evidence Paper": "text-[#5c7766]",
  "Survey Study": "text-[#5c7766]",
  "Working Paper Series": "text-[#5c7766]",
};

const PublicationRow = ({
  year,
  venue,
  kind,
  title,
  authors,
  tags,
}: Publication) => (
  <li className="grid gap-x-8 gap-y-4 border-b border-[#b7d2dd] py-7 lg:grid-cols-[130px_1fr] lg:px-9">
    <div>
      <p className="font-roboto text-2xl leading-none font-bold tracking-[-0.018em] text-[#00b3ff] italic sm:text-4xl">
        {year}
      </p>
      <p className="mt-1.5 font-roboto text-[10.5px] leading-[1.4] font-bold text-primary-subtle">
        {venue}
      </p>
      <p
        className={cn(
          "mt-1 font-roboto text-[9px] font-bold tracking-[0.22em] uppercase",
          KIND_INK[kind],
        )}
      >
        {kind}
      </p>
    </div>

    <div className="min-w-0">
      <h3 className="mb-3 font-roboto text-lg leading-[1.3] font-bold tracking-[-0.008em] text-black">
        {title}
      </h3>

      <p className="mb-3.5 font-roboto text-[15px] leading-[1.6] text-[#393f42]">
        {authors}
      </p>

      <ul className="flex flex-wrap gap-x-3.5 gap-y-2 border-t border-dashed border-[#b7d2dd] pt-2.5">
        {tags.map((tag) => (
          <li
            key={tag.label}
            className={cn(
              "font-roboto text-[11px] tracking-[0.02em]",
              tag.accent ? "font-bold text-tertiary" : "text-[#00b3ff]",
            )}
          >
            {tag.label}
          </li>
        ))}
      </ul>
    </div>
  </li>
);

export default PublicationRow;
