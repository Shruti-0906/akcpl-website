import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

export type Stat = { label: string; value: string };

export type Modality = {
  id: string;
  numeral: string;
  label: string;
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  stats: readonly Stat[];
  prose: readonly ReactNode[];
  calloutText: ReactNode;
  bestFor: readonly string[];
  /** Tints the section so consecutive chapters alternate. */
  alt?: boolean;
};

const ModalityChapter = ({ modality }: { modality: Modality }) => (
  <section
    id={modality.id}
    className={cn(
      "scroll-mt-36 py-16 lg:py-30",
      modality.alt ? "bg-[#e0f2f9]" : "bg-white",
      GUTTER,
    )}
  >
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[120px_1fr] lg:gap-12">
      <div className="lg:sticky lg:top-32 lg:self-start">
        <div
          aria-hidden="true"
          className="flex shrink-0 flex-col items-start gap-4"
        >
          <span className="font-cormorant text-5xl leading-none text-black italic lg:text-7xl">
            {modality.numeral}
          </span>
          <span className="block h-px w-10 bg-black/30" />
        </div>
        <span className="mt-4 block font-roboto text-[10.5px] font-bold tracking-[0.24em] text-[#393f42] uppercase">
          {modality.label}
        </span>
      </div>

      <div>
        <Eyebrow label={modality.eyebrow} className="mb-5" />
        <h2 className="section-heading text-black">{modality.title}</h2>
        <p className="mt-2 mb-9 font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
          {modality.subtitle}
        </p>

        <div className="mb-9 grid grid-cols-2 gap-6 divide-black/10 lg:grid-cols-4 lg:divide-x">
          {modality.stats.map((stat) => (
            <div key={stat.label} className="lg:px-6 lg:first:pl-0">
              <div className="font-roboto text-[10px] font-bold tracking-[0.18em] text-[#393f42] uppercase">
                {stat.label}
              </div>
              <div className="mt-1.5 font-roboto text-lg font-bold text-secondary">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-5">
          {modality.prose.map((paragraph, index) => (
            <p
              key={index}
              className="font-roboto text-[17px] leading-[1.78] text-[#393f42] [&_em]:text-[#00b3ff] [&_em]:italic [&_strong]:font-bold [&_strong]:text-secondary"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="my-9 rounded-r-sm border-l-2 border-primary-subtle bg-[#0e7c7b]/[0.06] px-7 py-6">
          <div className="mb-2 font-roboto text-[10px] font-bold tracking-[0.22em] text-primary-subtle uppercase">
            At AKC
          </div>
          <div className="font-roboto text-[17px] leading-[1.45] font-bold text-secondary italic [&_strong]:not-italic">
            {modality.calloutText}
          </div>
        </div>

        <div className="border-t border-black/10 pt-7">
          <div className="mb-3.5 font-roboto text-[10.5px] font-bold tracking-[0.22em] text-black uppercase">
            Often suited to
          </div>
          <ul className="grid grid-cols-1 gap-x-7 gap-y-2.5 sm:grid-cols-2">
            {modality.bestFor.map((item) => (
              <li
                key={item}
                className="flex gap-2 font-roboto text-[17px] leading-snug text-[#393f42]"
              >
                <span aria-hidden="true">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ModalityChapter;
