export type Job = {
  slug: string;
  title: string;
  titleAccent: string;
  speciality?: string;
  department: string;
  employment: string;
  setting: string;
  urgent: boolean;
  locations: readonly string[];
  qualification: string;
  experience: string;
};

/** The role title as plain text, for labels and anywhere markup can't go. */
export const jobTitle = (job: Job): string =>
  [[job.title, job.titleAccent].filter(Boolean).join(" "), job.speciality]
    .filter(Boolean)
    .join(" · ");

/**
 * Placeholder openings, standing in until the real vacancy list arrives.
 */
export const JOBS: readonly Job[] = [
  {
    slug: "dialysis-technician-home-care",
    title: "Dialysis Technician",
    titleAccent: "",
    speciality: "Home Care",
    department: "Home Hemodialysis Department",
    employment: "Full-time",
    setting: "Field-based",
    urgent: true,
    locations: ["Mumbai", "Delhi", "Goa"],
    qualification: "Diploma in Dialysis Technology",
    experience: "2+ years",
  },
  {
    slug: "dialysis-physician-rmo",
    title: "Dialysis Physician",
    titleAccent: "",
    speciality: "RMO",
    department: "Clinical Operations",
    employment: "Full-time",
    setting: "Centre-based",
    urgent: true,
    locations: ["Mumbai", "Delhi", "Goa"],
    qualification: "MBBS / BHMS / BAMS",
    experience: "1+ year",
  },
  {
    slug: "dialysis-technician",
    title: "Dialysis",
    titleAccent: "Technician",
    department: "Artificial Kidney Dialysis",
    employment: "Full-time",
    setting: "Centre-based",
    urgent: true,
    locations: [
      "MP",
      "Gujarat",
      "Rajasthan",
      "Maharashtra",
      "Goa",
      "Telangana",
      "Delhi",
    ],
    qualification: "Diploma in Dialysis Technology",
    experience: "1+ year",
  },
  {
    slug: "nurse",
    title: "",
    titleAccent: "Nurse",
    department: "Artificial Kidney Dialysis",
    employment: "Full-time",
    setting: "Centre-based",
    urgent: false,
    locations: ["Madhya Pradesh", "Telangana"],
    qualification: "GNM",
    experience: "1+ year",
  },
  {
    slug: "facility-assistant",
    title: "Facility",
    titleAccent: "Assistant",
    department: "Housekeeping",
    employment: "Full-time",
    setting: "Centre-based",
    urgent: true,
    locations: ["MP", "Maharashtra", "Goa", "Telangana", "Delhi"],
    qualification: "10th Pass",
    experience: "1+ year",
  },
  {
    slug: "data-entry-operator",
    title: "Data Entry",
    titleAccent: "Operator",
    department: "Administration",
    employment: "Full-time",
    setting: "Office-based",
    urgent: false,
    locations: ["Maharashtra", "Telangana", "Delhi"],
    qualification: "Graduate",
    experience: "1+ year",
  },
];
