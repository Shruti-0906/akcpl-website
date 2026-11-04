import {
  Building2,
  Clock,
  HeartPulse,
  IndianRupee,
  Monitor,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type Benefit = {
  id: string;
  icon: LucideIcon;
  /** `<em>` renders as the blue italic accent. */
  title: ReactNode;
  body: ReactNode;
};

export const BENEFITS: readonly Benefit[] = [
  {
    id: "health",
    icon: HeartPulse,
    title: (
      <>
        Health &amp; <em>Wellness</em>
      </>
    ),
    body: (
      <>
        Health and term insurance for you.{" "}
        <em className="text-[#9a7420]">
          Mental health support with confidential counselling access.
        </em>
      </>
    ),
  },
  {
    id: "financial",
    icon: IndianRupee,
    title: (
      <>
        Financial <em>strength</em>
      </>
    ),
    body: (
      <>
        Competitive salaries benchmarked against the market.{" "}
        <em className="text-[#9a7420]">
          Annual performance increments and performance-linked bonuses.
        </em>
      </>
    ),
  },
  {
    id: "statutory",
    icon: Building2,
    title: (
      <>
        Statutory <em>benefits</em>
      </>
    ),
    body: (
      <>
        All government-mandated benefits delivered fully and correctly:{" "}
        <em className="text-[#9a7420]">
          PF, ESIC, gratuity, statutory bonus, LWF, maternity benefit.
        </em>
      </>
    ),
  },
  {
    id: "work-life",
    icon: Clock,
    title: (
      <>
        Work-life <em>balance</em>
      </>
    ),
    body: (
      <>
        Paid holidays. Paid leave.{" "}
        <em className="text-[#9a7420]">
          Flexible hours where the role allows.
        </em>{" "}
        Predictable shifts where roles require structure.
      </>
    ),
  },
  {
    id: "career-growth",
    icon: TrendingUp,
    title: (
      <>
        Career <em>growth</em>
      </>
    ),
    body: (
      <>
        Structured performance appraisal.{" "}
        <strong>Training, mentorship, and clear advancement paths.</strong>{" "}
        <em className="text-[#9a7420]">
        </em>
      </>
    ),
  },
  {
    id: "recognition",
    icon: Star,
    title: (
      <>
        Awards &amp; <em>Recognition</em>
      </>
    ),
    body: (
      <>
        Employee recognition programmes that{" "}
        <strong>actually celebrate your work.</strong>{" "}
        <em className="text-[#9a7420]">
          Referral bonuses when you bring in great colleagues.
        </em>
      </>
    ),
  },
  {
    id: "culture",
    icon: Users,
    title: (
      <>
        Culture &amp; <em>inclusion</em>
      </>
    ),
    body: (
      <>
        Inclusive environment. Team events. Festival celebrations.{" "}
        <em className="text-[#9a7420]">
          Equal opportunity employer. Workplace safety taken seriously.
        </em>
      </>
    ),
  },
  {
    id: "modern-tools",
    icon: Monitor,
    title: (
      <>
        Modern <em>tools</em>
      </>
    ),
    body: (
      <>
        Latest IT infrastructure across all centres.{" "}
        <em className="text-[#9a7420]">
          Axis EMR, our in-house clinical platform.
        </em>{" "}
        State-of-the-art dialysis machines.
      </>
    ),
  },
] as const;
