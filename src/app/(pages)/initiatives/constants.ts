const AKC_BASE = "https://www.apexkidneycare.com/akc_new";

export const MANUALS = [
  {
    label: "Read Water Manual",
    href: `${AKC_BASE}/water-manual/wat-man.html`,
  },
  {
    label: "Read Hemodialysis Manual",
    href: `${AKC_BASE}/hemodialysis-manual/hemod-man.html`,
  },
  {
    label: "Download Covid Coffee Table Book",
    href: `${AKC_BASE}/images/CTB_Covid.pdf`,
  },
] as const;

export const SECTION_BASE =
  "relative scroll-mt-33 overflow-hidden py-20 leading-[normal]";

const EYEBROW_BASE =
  "text-sm leading-[normal] [&>span]:w-6 [&>span]:opacity-100";

export const EYEBROW_LABEL = `${EYEBROW_BASE} text-white`;

export const EYEBROW_LABEL_2 = `${EYEBROW_BASE} text-black`;

export const HEADING_EM = "text-primary-subtle italic";

export const BTN_PRIMARY = [
  "inline-flex items-center gap-2 rounded border border-primary-subtle bg-primary-subtle",
  "px-8 py-4 font-roboto text-[14px] font-bold tracking-[0.04em] text-white",
  "hover:border-primary-light",
  "hover:bg-primary-light",
].join(" ");
