import { Clock, Gem, Layers, MapPin, Milestone, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type Reason = {
  id: string;
  icon: LucideIcon;
  /** `<em>` renders as the blue italic accent. */
  title: ReactNode;
  /** `<strong>` reads as emphasis; `<em>` turns italic, gold when tinted. */
  body: ReactNode;
};

export const REASONS: readonly Reason[] = [
  {
    id: "visibly-matters",
    icon: MapPin,
    title: (
      <>
        Work that <em>visibly matters</em>
      </>
    ),
    body: (
      <>
        Every dialysis session you support keeps a patient alive. You see the
        result the same day &mdash; on faces, in walks home, in families who
        thank you. Few jobs give you that feedback loop.
      </>
    ),
  },
  {
    id: "institution",
    icon: Gem,
    title: (
      <>
        An <em>institution,</em> not a chain
      </>
    ),
    body: (
      <>
        Nephrologist-founded. Nephrologist-led. Our protocols, our research, our
        training programme, our quality dashboard &mdash;{" "}
        <em className="text-[#9a7420]">
          all of it is built by clinicians who spend their days on the dialysis
          floor.
        </em>
      </>
    ),
  },
  {
    id: "teamwork",
    icon: Users,
    title: (
      <>
        Teamwork that&rsquo;s <em>actually real</em>
      </>
    ),
    body: (
      <>
        A dialysis session needs{" "}
        <strong>
          technician, nurse, physician, biomedical engineer, and coordinator
          working in sync
        </strong>{" "}
        &mdash; backed by{" "}
        <em className="text-[#9a7420]">SCM, lab, QA, operations, and admin</em>.
        You will know your team well, and they will know you.{" "}
        <em className="text-[#9a7420]">
          The work doesn&rsquo;t happen any other way.
        </em>
      </>
    ),
  },
  {
    id: "mobility",
    icon: Milestone,
    title: (
      <>
        Career mobility <em>across India</em>
      </>
    ),
    body: (
      <>
        250+ centres in 14 states means{" "}
        <strong>real geographic mobility</strong>. Want to move from Mumbai to
        Goa, Bhopal to Hyderabad, Delhi to Indore?{" "}
        <em>We have centres in all of them &mdash; and roles in many.</em>
      </>
    ),
  },
  {
    id: "teaches-you",
    icon: Layers,
    title: (
      <>
        A workplace that <em>teaches you</em>
      </>
    ),
    body: (
      <>
        We run the{" "}
        <strong>
          Apex School of Dialysis Technology, ApEx Pathshala CME, and structured
          on-the-job training
        </strong>{" "}
        across every role.{" "}
        <em className="text-[#9a7420]">
          You will be measurably better at your job in a year than you are
          today.
        </em>
      </>
    ),
  },
  {
    id: "stability",
    icon: Clock,
    title: (
      <>
        Stability with <em>scale</em>
      </>
    ),
    body: (
      <>
        Eighteen years.{" "}
        <strong>
          Tata Capital Healthcare Fund and Blue Earth Capital as institutional
          investors
        </strong>
        . Continuous growth.{" "}
        <em>
          A career here is not a bet on whether the company will exist in five
          years.
        </em>
      </>
    ),
  },
] as const;
