import { env } from "./env";

export const site = {
  name: "Apex Kidney Care",
  shortName: "AKC",
  tagline: "If it's Dialysis, it's AKC",
  description:
    "World-class dialysis and kidney care across India - 250+ centres backed by clinical excellence, research and data-driven patient outcomes.",
  url: env.siteUrl,
  locale: "en_IN",

  keywords: [
    "dialysis centre",
    "kidney care",
    "hemodialysis",
    "chronic kidney disease",
    "CKD treatment",
    "nephrology",
    "renal care India",
    "kidney transplant",
  ],
} as const;

export type Site = typeof site;
