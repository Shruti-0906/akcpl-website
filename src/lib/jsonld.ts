import { organization } from "@/config/organization";
import { site } from "@/config/site";

export type JsonLdNode = Record<string, unknown> & {
  "@type": string | readonly string[];
};

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

function absolute(path: string): string {
  return path.startsWith("http") ? path : `${site.url}${path}`;
}

export function organizationNode(): JsonLdNode {
  return {
    "@type": ["MedicalOrganization", "MedicalClinic"],
    "@id": ORG_ID,
    name: organization.name,
    legalName: organization.legalName,
    url: site.url,
    logo: absolute(organization.logo),
    image: absolute(organization.logo),
    description: site.description,
    email: organization.email,
    telephone: organization.phoneHref,
    medicalSpecialty: organization.medicalSpecialty,
    address: {
      "@type": "PostalAddress",
      streetAddress: organization.address.street,
      addressLocality: organization.address.locality,
      addressRegion: organization.address.region,
      postalCode: organization.address.postalCode,
      addressCountry: organization.address.country,
    },
    areaServed: organization.areaServed.map((state) => ({
      "@type": "State",
      name: state,
    })),
    sameAs: Object.values(organization.social),
  };
}

export function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbNode(
  trail: readonly { name: string; path: string }[],
): JsonLdNode {
  const items = [{ name: "Home", path: "/" }, ...trail];

  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function faqNode(
  items: readonly { question: string; answer: string }[],
): JsonLdNode {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function medicalWebPageNode({
  title,
  description,
  path,
  audience = "Patient",
}: {
  title: string;
  description: string;
  path: string;
  audience?: "Patient" | "Clinician";
}): JsonLdNode {
  return {
    "@type": "MedicalWebPage",
    name: title,
    description,
    url: absolute(path),
    inLanguage: "en-IN",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    audience: { "@type": "MedicalAudience", audienceType: audience },
  };
}

export function centreNode({
  name,
  path,
  street,
  locality,
  region,
  postalCode,
  telephone,
}: {
  name: string;
  path: string;
  street: string;
  locality: string;
  region: string;
  postalCode?: string;
  telephone?: string;
}): JsonLdNode {
  return {
    "@type": "MedicalClinic",
    name,
    url: absolute(path),
    parentOrganization: { "@id": ORG_ID },
    medicalSpecialty: organization.medicalSpecialty,
    ...(telephone ? { telephone } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: street,
      addressLocality: locality,
      addressRegion: region,
      ...(postalCode ? { postalCode } : {}),
      addressCountry: organization.address.country,
    },
  };
}

export function jsonLdGraph(...nodes: readonly JsonLdNode[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
