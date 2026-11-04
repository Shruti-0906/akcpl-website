export const organization = {
  legalName: "Apex Kidney Care Pvt. Ltd.",
  name: "Apex Kidney Care",
  medicalSpecialty: "Nephrologic",
  /** Served from the assets bucket. Single source of truth - the navbar,
      the footer, and the structured-data graph all read this. */
  logo: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/logos/AKC+logo.png",
  email: "info@apexkidneycare.com",
  /** Display form. Change here and every CTA picks it up. */
  phone: "74000 95950",
  /** Dial form for `tel:` links. */
  phoneHref: "+917400095950",

  address: {
    street: "1st Floor, Fargo House, next to Spectra Motors, Kanchpada",
    locality: "Malad (W)",
    region: "Maharashtra",
    postalCode: "400064",
    country: "IN",
  },

  areaServed: [
    "Maharashtra",
    "Gujarat",
    "Rajasthan",
    "Goa",
    "Delhi",
    "Madhya Pradesh",
    "Bihar",
    "Telangana",
    "Uttar Pradesh",
    "Haryana",
    "Punjab",
    "Uttarakhand",
  ],

  social: {
    linkedin: "https://www.linkedin.com/company/apexkidneycare/",
    facebook: "https://www.facebook.com/apexkidneycarepvtltd/",
    instagram: "https://www.instagram.com/apexkidneycare/",
    youtube: "https://www.youtube.com/@apexkidneycare",
    x: "https://x.com/apex_kidneycare",
  },
} as const;

export type Organization = typeof organization;
