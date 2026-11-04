import type { Metadata } from "next";

import { organization } from "@/config/organization";
import { site } from "@/config/site";

import { breadcrumbNode, jsonLdGraph, medicalWebPageNode } from "./jsonld";

export const DEFAULT_OG_IMAGE = {
  url: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Site+-+Social+Share+Card+(og-image).jpg",
  width: 1200,
  height: 630,
  alt: "Apex Kidney Care - Redefining renal health in India",
} as const;

/**
 * Base metadata for the whole site.
 */
export const rootMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  publisher: organization.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: "/",
    title: `${site.name} - ${site.tagline}`,
    description: site.description,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - ${site.tagline}`,
    description: site.description,
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: { telephone: false, address: false, email: false },
};

type PageMetaInput = {
  title: string;
  description?: string;
  path: string;
  image?: string;
  keywords?: readonly string[];
  noIndex?: boolean;
};

/** Per-page metadata. */
export function pageMetadata({
  title,
  description = site.description,
  path,
  image,
  keywords,
  noIndex = false,
}: PageMetaInput): Metadata {
  const canonical = path === "/" ? "/" : path.replace(/\/$/, "");

  const ogImage = image ? { url: image } : DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    keywords: [...(keywords ?? site.keywords)],
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      title,
      description,
      url: canonical,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}

type PageSeoInput = Omit<PageMetaInput, "description"> & {
  description: string;
  audience?: "Patient" | "Clinician";
  trail?: readonly { name: string; path: string }[];
};

export function pageSeo({ trail = [], audience, ...meta }: PageSeoInput) {
  return {
    metadata: pageMetadata(meta),
    jsonLd: jsonLdGraph(
      medicalWebPageNode({ ...meta, audience }),
      breadcrumbNode([...trail, { name: meta.title, path: meta.path }]),
    ),
  };
}
