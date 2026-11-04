import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import PublicationRow, { type Publication } from "./PublicationRow";

export type Theme = {
  id: string;
  numeral: string;
  eyebrow: string;
  title: ReactNode;
  intro: readonly ReactNode[];
  publications: readonly Publication[];
};

const ThemeSection = ({ theme, tinted }: { theme: Theme; tinted: boolean }) => (
  <section
    id={theme.id}
    className={cn(
      "scroll-mt-24 py-20 lg:py-27.5",
      tinted ? "bg-[#e0f2f9]" : "bg-white",
      GUTTER,
    )}
  >
    <div className="grid gap-x-0 gap-y-6 lg:grid-cols-[198px_1fr]">
      <p
        aria-hidden="true"
        className="font-cormorant text-6xl leading-[0.85] font-light text-black italic lg:text-[88px]"
      >
        {theme.numeral}
      </p>

      <div>
        <Eyebrow label={theme.eyebrow} className="text-secondary" />

        <h2 className="mt-4 mb-4 font-cormorant text-3xl leading-[1.05] font-bold text-black sm:text-4xl lg:text-[52px]">
          {theme.title}
        </h2>

        <div className="flex flex-col gap-4">
          {theme.intro.map((paragraph, index) => (
            <p
              key={index}
              className="font-roboto text-[15px] leading-[1.7] text-[#393f42]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>

    <ul className="mt-8">
      {theme.publications.map((publication, index) => (
        <PublicationRow key={`${publication.year}-${index}`} {...publication} />
      ))}
    </ul>
  </section>
);

export default ThemeSection;
