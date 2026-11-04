import {
  Briefcase,
  FileText,
  FlaskConical,
  HandHeart,
  HeartPulse,
  House,
  Lightbulb,
  MapPin,
  MessageSquare,
  Newspaper,
  TrendingUp,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Destination = {
  label: string;
  /** Omitted for grouping entries that have no page of their own. */
  href?: string;
  children?: readonly Destination[];
};

export type Branch = {
  title: string;
  kicker: string;
  description: string;
  Icon: LucideIcon;
  /** Left rule colour; cycles so the grid reads as three alternating columns. */
  accent: string;
  destinations: readonly Destination[];
};

export const BRANCHES: readonly Branch[] = [
  {
    title: "The Front Door",
    kicker: "Home",
    description: "Where every visitor begins.",
    Icon: House,
    accent: "border-l-primary",
    destinations: [
      { label: "Homepage", href: "/" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
  {
    title: "Who We Are",
    kicker: "About",
    description: "The story, the people and the purpose behind Apex.",
    Icon: UserRound,
    accent: "border-l-tertiary",
    destinations: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Vision, Mission & Values", href: "/about/vision-mission-values" },
      { label: "Our Care Path", href: "/about/our-care-path" },
      { label: "Leadership", href: "/about/leadership" },
    ],
  },
  {
    title: "How We Care",
    kicker: "Services",
    description: "The full range of kidney care we deliver.",
    Icon: HeartPulse,
    accent: "border-l-secondary/25",
    destinations: [
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
    title: "For Patients",
    kicker: "Patient Guide",
    description: "Plain-language help for patients and families.",
    Icon: FileText,
    accent: "border-l-primary",
    destinations: [
      { label: "Patient Guide", href: "/patient-guide" },
      { label: "About CKD", href: "/patient-guide/about-ckd" },
      { label: "Transplant Info", href: "/patient-guide/transplant-info" },
      { label: "Patient FAQ", href: "/patient-guide/faq" },
    ],
  },
  {
    title: "Where We Are",
    kicker: "Centres",
    description: "Our dialysis network across India.",
    Icon: MapPin,
    accent: "border-l-tertiary",
    destinations: [
      {
        label: "Maharashtra",
        children: [
          { label: "Mumbai", href: "/centres/maharashtra/mumbai" },
          { label: "Thane", href: "/centres/maharashtra/thane" },
          { label: "Navi Mumbai", href: "/centres/maharashtra/navi-mumbai" },
        ],
      },
      { label: "Gujarat", href: "/centres/gujarat" },
      { label: "Rajasthan", href: "/centres/rajasthan" },
      { label: "Madhya Pradesh", href: "/centres/madhya-pradesh" },
      { label: "Delhi", href: "/centres/delhi" },
      { label: "Goa", href: "/centres/goa" },
      { label: "Telangana", href: "/centres/telangana" },
      { label: "Uttar Pradesh", href: "/centres/uttar-pradesh" },
      { label: "Bihar", href: "/centres/bihar" },
      { label: "Haryana", href: "/centres/haryana" },
      { label: "Punjab", href: "/centres/punjab" },
      { label: "Uttarakhand", href: "/centres/uttarakhand" },
    ],
  },
  {
    title: "Build With Us",
    kicker: "Partners",
    description: "Ways to work alongside Apex.",
    Icon: HandHeart,
    accent: "border-l-secondary/25",
    destinations: [
      { label: "Partnership Models", href: "/partners/partnership-models" },
      { label: "Hospital Partners", href: "/partners/hospitals" },
      { label: "Our People", href: "/partners/our-people" },
      { label: "IRDS", href: "/partners/irds" },
      { label: "IIT Bombay Collab", href: "/partners/iit-bombay-collaboration" },
    ],
  },
  {
    title: "The Ecosystem",
    kicker: "Initiatives",
    description: "Education, data and technology that scale care.",
    Icon: Lightbulb,
    accent: "border-l-primary",
    destinations: [
      { label: "Initiatives Overview", href: "/initiatives" },
    ],
  },
  {
    title: "Our Science",
    kicker: "Research",
    description: "Published research and the renal data system.",
    Icon: FlaskConical,
    accent: "border-l-tertiary",
    destinations: [
      { label: "Research & Publications", href: "/research" },
    ],
  },
  {
    title: "Back the Mission",
    kicker: "Investors",
    description: "For those investing in India's renal future.",
    Icon: TrendingUp,
    accent: "border-l-secondary/25",
    destinations: [{ label: "Investor Overview", href: "/investors" }],
  },
  {
    title: "Join Us",
    kicker: "Careers",
    description: "Build a career in kidney care.",
    Icon: Briefcase,
    accent: "border-l-primary",
    destinations: [{ label: "Careers at Apex", href: "/careers" }],
  },
  {
    title: "Newsroom",
    kicker: "News",
    description: "Announcements and stories.",
    Icon: Newspaper,
    accent: "border-l-tertiary",
    destinations: [{ label: "News Room", href: "/news-room" }],
  },
  {
    title: "Reach Us",
    kicker: "Contact",
    description: "Start a conversation with Apex.",
    Icon: MessageSquare,
    accent: "border-l-secondary/25",
    destinations: [{ label: "Contact Us", href: "/contact" }],
  },
] as const;

/** Every destination in the tree, nested ones included. */
export const countDestinations = (
  items: readonly Destination[] = BRANCHES.flatMap((b) => b.destinations),
): number =>
  items.reduce(
    (total, item) => total + 1 + (item.children ? countDestinations(item.children) : 0),
    0,
  );
