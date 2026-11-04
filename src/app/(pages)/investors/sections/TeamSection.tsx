import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import {
  CI_BODY,
  CI_BODY_LIGHT,
  LABEL_LIGHT,
  SECTION_BASE,
} from "../constants";

const STRONG = "font-bold text-secondary";

type Member = {
  tag: string;
  name: string;
  role: string;
  bio: ReactNode;
  delay: number;
};

const MEMBERS: readonly Member[] = [
  {
    tag: "Co-Founder",
    name: "Dr. Shrirang Bichu",
    role: "Nephrology · Bombay Hospital",
    bio: (
      <>
        Anchors AKC&apos;s COVID-era research and transplant outcomes work.{" "}
        <strong className={STRONG}>15+ publications.</strong>
      </>
    ),
    delay: 0,
  },
  {
    tag: "Co-Founder",
    name: "Dr. Jatin Kothari",
    role: "Director, Nephrology — Nanavati Max · FRCP Edinburgh · ISN Education Ambassador",
    bio: (
      <>
        <strong className={STRONG}>40+ publications.</strong> Leads AKC&apos;s
        clinical education and international partnerships. Shapes ApEx
        Pathshala.
      </>
    ),
    delay: 80,
  },
  {
    tag: "Co-Founder",
    name: "Dr. Rajesh Kumar",
    role: "Nephrology · LH Hiranandani Hospital",
    bio: (
      <>
        Leads infection control and COVID research initiatives across the
        network. <strong className={STRONG}>10+ publications.</strong>
      </>
    ),
    delay: 80,
  },
  {
    tag: "Founder & Director",
    name: "Dr. Viswanath Billa",
    role: "Associate Professor of Nephrology, Bombay Hospital",
    bio: (
      <>
        One of India&apos;s most cited nephrology faculty members.{" "}
        <strong className={STRONG}>20+ indexed publications.</strong> Anchors
        AKC&apos;s clinical leadership and research agenda.
      </>
    ),
    delay: 0,
  },
  {
    tag: "Chief Executive Officer",
    name: "Indranil Roy Choudhury",
    role: "CEO · Apex Kidney Care",
    bio: (
      <>
        Drives AKC&apos;s{" "}
        <strong className={STRONG}>
          expansion strategy, investor relations, and operational excellence
        </strong>{" "}
        across 250+ centres and fourteen states &mdash; translating the
        founders&apos; clinical vision into a nationally scalable,
        technology-enabled kidney care network.
      </>
    ),
    delay: 0,
  },
  {
    tag: "Operational Leadership",
    name: "A Full Institutional Team",
    role: "Operations · Clinical Governance · Technology · Finance",
    bio: (
      <>
        A complete institutional leadership bench across operations, clinical
        governance, technology, finance, and partnerships &mdash;{" "}
        <strong className={STRONG}>
          stress-tested across two decades of network growth.
        </strong>
      </>
    ),
    delay: 80,
  },
] as const;

const TeamSection = () => (
  <section className={cn(SECTION_BASE, "bg-secondary py-[130px]")}>
    <div className={GUTTER}>
      <div className="mb-15">
        <Eyebrow label="The People Building This" className={LABEL_LIGHT} />

        <p className={cn(CI_BODY, CI_BODY_LIGHT)}>
          AKC is led by the four nephrologists who founded it, alongside an
          operational leadership team that has scaled the network across
          eighteen years and ten states.{" "}
          <strong className="font-bold">
            The people who built this institution are still the people running
            it.
          </strong>
        </p>
      </div>

      <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
        {MEMBERS.map((member, index) => (
          <div
            key={member.name}
            className={cn(
              "px-8 py-9",
              index % 2 === 1 ? "bg-[#e9f7fd]" : "bg-white",
            )}
          >
            <p className="mb-3.5 font-roboto text-[10.5px] font-bold tracking-[0.22em] text-primary-subtle uppercase">
              {member.tag}
            </p>
            <h3 className="mb-2 font-roboto text-[22px] leading-[1.2] font-bold tracking-[-0.005em] text-secondary">
              {member.name}
            </h3>
            <p className="mb-3.5 font-roboto text-[17px] leading-[1.5] text-[#393f42] italic">
              {member.role}
            </p>
            <p className="font-roboto text-[17px] leading-[1.65] text-[#393f42]">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
