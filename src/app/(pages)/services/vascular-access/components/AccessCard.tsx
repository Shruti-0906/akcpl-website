import type { ReactNode } from "react";

import { Eyebrow } from "@/components";

export type AccessStat = {
  /** Rendered as the small rule-and-caps label above the value. */
  label: string;
  value: ReactNode;
};

export type AccessPoint = {
  id: string;
  text: ReactNode;
};

export type AccessType = {
  id: string;
  /** Inline diagram shown in the tinted left column. */
  visual: ReactNode;
  /** Decorative glyph that opens the badge. */
  badgeGlyph: string;
  badge: ReactNode;
  title: ReactNode;
  /** The short form trailing the title, e.g. `AVF`. */
  abbreviation: string;
  subtitle: ReactNode;
  body: ReactNode;
  stats: readonly AccessStat[];
  advantages: readonly AccessPoint[];
  disadvantages: readonly AccessPoint[];
};

const ProConList = ({
  label,
  items,
}: {
  label: string;
  items: readonly AccessPoint[];
}) => (
  <div>
    <p className="mb-4.5 font-roboto text-[18px] font-bold tracking-[0.05em] text-secondary-light uppercase">
      {label}
    </p>
    <ul className="flex list-none flex-col gap-3.5">
      {items.map((item) => (
        <li
          key={item.id}
          className="relative ml-5 pl-1.25 font-roboto text-[17px] leading-[1.6] text-[#393f42] before:absolute before:top-2 before:-left-4.5 before:size-2 before:rotate-45 before:bg-primary-subtle before:content-[''] [&_strong]:font-bold [&_strong]:text-secondary"
        >
          {item.text}
        </li>
      ))}
    </ul>
  </div>
);

const AccessCard = ({ access }: { access: AccessType }) => (
  // The source `.access-card::before` top accent bar is not reproduced: every card
  // carries `t-best`, whose gradient is `linear-gradient(90deg, var(--green-pulse),
  // var(--teal))`. `--green-pulse` is undefined, so the whole `background` is invalid
  // at computed-value time and the bar paints nothing.
  <article className="relative grid grid-cols-1 overflow-hidden rounded-[3px] border-[5px] border-white bg-white hover:shadow-[0_12px_32px_rgba(14,37,64,0.06)] lg:grid-cols-[300px_1fr]">
    <div className="relative flex flex-col items-center justify-center bg-linear-[135deg,#e0f2f9_0%,#d1f1ff_100%] px-6 py-8">
      {access.visual}

      <p className="inline-flex items-center gap-1.75 rounded-[20px] bg-white px-3.5 py-1.25 text-center font-roboto text-[10px] font-semibold tracking-[0.18em] text-primary-subtle uppercase shadow-[0_0_0_1px_#0075a9]">
        {/* `.ac-badge.b-best::before` fills with `var(--green-pulse)`, which is
            undefined — the dot reserves its 6px of space but stays unpainted. */}
        <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full" />
        <span aria-hidden="true">{access.badgeGlyph}</span>
        {access.badge}
      </p>
    </div>

    <div className="px-6 py-9 sm:px-10">
      <h3 className="mb-4 section-heading leading-[1.05] font-bold tracking-[-0.015em] text-black">
        {access.title} &middot;{" "}
        <span className="text-[18px] font-normal">{access.abbreviation}</span>
      </h3>

      <p className="mb-4.5 font-roboto text-[14.5px] text-black italic">
        {access.subtitle}
      </p>

      <p className="mb-3.75 font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic">
        {access.body}
      </p>

      <div className="mb-5.5 grid grid-cols-1 gap-3 py-4.5 sm:grid-cols-3">
        {access.stats.map((stat) => (
          <div key={stat.label}>
            <Eyebrow label={stat.label} className="mb-5 text-black" />
            {/* `.ac-stat-val em` is teal at weight 400 — a defined variable, so it
                does render, unlike the em colours elsewhere on this page. */}
            <p className="font-roboto text-[15.5px] leading-[1.3] font-medium tracking-[-0.005em] text-secondary [&_em]:font-normal [&_em]:text-primary-subtle [&_em]:italic">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <ProConList label="Advantages" items={access.advantages} />
        <ProConList label="Disadvantages" items={access.disadvantages} />
      </div>
    </div>
  </article>
);

export default AccessCard;
