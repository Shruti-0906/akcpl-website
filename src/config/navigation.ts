/**
 * Site information architecture
 */

export type NavItem = {
  label: string;
  /** Omitted for grouping entries that have no page of their own. */
  href?: string;
  children?: readonly NavItem[];
};

export type FooterNav = {
  label: string;
  href?: string;
  children?: readonly FooterNav[];
};

export const mainNav: readonly NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Sitemap",
    href: "/sitemap",
  },
  {
    label: "About",
    children: [
      { label: "Our Story", href: "/about/our-story" },
      {
        label: "Vision, Mission, Values",
        href: "/about/vision-mission-values",
      },
      { label: "Our Care Path", href: "/about/our-care-path" },
      { label: "Leadership", href: "/about/leadership" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Incentre Dialysis", href: "/services/dialysis-options" },
      {
        label: "Hemodiafiltration - HDF",
        href: "/services/haemodiafiltration-hdf",
      },
      { label: "Home Hemodialysis", href: "/services/home-haemodialysis" },
      { label: "Vascular Access", href: "/services/vascular-access" },
      { label: "Pathology Lab", href: "/services/pathology-lab" },
      { label: "Diet Consultation", href: "/services/diet-guidance" },
      { label: "Platform Services", href: "/services/platform-services" },
      { label: "Pharmacy", href: "/services/pharmacy" },
    ],
  },
  {
    label: "Patient Guide",
    href: "/patient-guide",
  },
  {
    label: "Centres",
    href: "/centres",
  },
  {
    label: "Initiatives",
    href: "/initiatives",
  },
  {
    label: "Research",
    href: "/research",
  },
  {
    label: "Partners",
    href: "/#partner",
  },
  {
    label: "Investors",
    href: "/investors",
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "News Room",
    href: "/news-room",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
] as const;

export const isActiveRoute = (
  href: string | undefined,
  pathname: string,
): boolean => {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

export const footerNav: readonly FooterNav[] = [
  {
    label: "For Patients",
    children: [
      { label: "About CKD", href: "/patient-guide/about-ckd" },
      { label: "Transplant Info", href: "/patient-guide/transplant-info" },
      { label: "Find a Centre", href: "/centres" },
      { label: "Patient FAQ", href: "/patient-guide/faq" },
      { label: "Diet & Lifestyle", href: "/services/diet-guidance" },
    ],
  },
  {
    label: "For Clinicians",
    children: [
      {
        label: "Clinical Fellowship",
        href: "/initiatives/clinical-fellowship",
      },
      { label: "EHR Axis", href: "/initiatives#ehr" },
      { label: "Research Collaboration", href: "/research#collaborations" },
      { label: "Grand Rounds", href: "/research/grand-rounds" },
    ],
  },
  {
    label: "Company",
    children: [
      /* Both manuals open in their turn.js flipbook reader, the same one the
         initiatives page and the renal diet recipe books use. */
      {
        label: "Read Water Manual",
        href: "https://www.apexkidneycare.com/akc_new/water-manual/wat-man.html",
      },
      {
        label: "Read Hemodialysis Manual",
        href: "https://www.apexkidneycare.com/akc_new/hemodialysis-manual/hemod-man.html",
      },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Careers", href: "/careers" },
      {
        label: "Bio-Medical Waste (BMW) Data",
        href: "/resources/bio-medical-waste-data",
      },
    ],
  },
  {
    label: "Partners & Investors",
    children: [
      /* Same destination as the navbar's Partners entry. */
      { label: "Partnership Models", href: "/#partner" },
      { label: "Hospitals", href: "/partners/hospitals" },
      { label: "Our People", href: "/partners/our-people" },
      { label: "Investor Relations", href: "/investors" },
      { label: "IRDS", href: "/initiatives/indian-renal-data-system" },
      /* The collaboration panel sits inside the initiatives research section. */
      { label: "IIT Bombay Collab", href: "/initiatives#iit" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
] as const;

export const footerLegal: readonly FooterNav[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "CSR Policy AKCPL", href: "/csr-policy" },
  { label: "MGT 7 AKCPL", href: "/mgt-7" },
  { label: "Whistle Blower Policy", href: "/whistle-blower-policy" },
  { label: "Sitemap", href: "/sitemap" },
] as const;

export const liveRoutes: readonly string[] = [
  "/",
  "/about/our-story",
  "/about/vision-mission-values",
  "/about/our-care-path",
  "/about/leadership",
  "/services/dialysis-options",
  "/services/home-haemodialysis",
  "/research",
  "/sitemap",
  "/patient-guide/faq",
  "/apex-school-of-dialysis-technology",
  "/services/pathology-lab",
  "/services/diet-guidance",
  "/services/platform-services",
  "/services/pharmacy",
  "/privacy-policy",
  "/whistle-blower-policy",
  "/resources/bio-medical-waste-data",
  "/astra",
  "/patient-guide",
  "/patient-guide/about-ckd",
  "/patient-guide/transplant-info",
  "/services/haemodiafiltration-hdf",
  "/services/vascular-access",
  "/initiatives",
  "/initiatives/dialysis-qa-framework",
  "/initiatives/indian-renal-data-system",
  "/investors",
  "/careers",
  "/centres",
  "/partners/hospitals",
  "/partners/government",
  "/partners/trusts",
  "/partners/nephrologists",
  "/partners/our-people",
  "/contact",
  "/news-room",
] as const;
