import Link from "next/link";

import { Button } from "@/components";

import { TrustLabel } from "../components";

const TrustCtaSection = () => (
  <section className="bg-white py-20">
    <div className="mx-auto px-6 sm:px-10 lg:px-14.5">
      <div className="mx-auto px-6 text-center sm:px-10 lg:px-14.5">
        <TrustLabel inline>Beginning the Conversation</TrustLabel>
        <h2 className="mb-4 font-cormorant text-[clamp(36px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black [&_em]:text-primary-subtle [&_em]:italic">
          A conversation, <em>at your trust&apos;s pace.</em>
        </h2>
        <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-bold [&_strong]:text-secondary">
          We do not believe in pressured timelines for charitable-trust
          partnerships. The first conversation is exploratory and confidential —
          usually followed by an invitation for trustees to visit an AKC centre
          and see, first-hand, the operating standard that would extend to their
          own.
        </p>
      </div>
      <div className="mt-10 mb-12 grid grid-cols-1 gap-5 md:grid-cols-3 [&_h3]:mb-4 [&_h3]:font-cormorant [&_h3]:text-[26px] [&_h3]:leading-[1.1] [&_h3]:font-bold [&_p]:font-roboto [&_p]:text-[17px] [&_p]:leading-[22px] [&_p]:font-light [&>a]:min-w-0 [&>a]:border [&>a]:border-[#002238] [&>a]:bg-[linear-gradient(135deg,#003e68,#001a2c)] [&>a]:px-5.5 [&>a]:py-7 [&>a]:text-left [&>a]:text-white [&>a]:transition [&>a]:duration-[250ms] [&>a:hover]:-translate-y-[3px] [&>a:hover]:border-primary-subtle">
        <a href="mailto:shirodkar@apexkidneycare.in">
          <TrustLabel light>First Step</TrustLabel>
          <h3>Begin a Conversation</h3>
          <p>
            A free, confidential exploratory conversation with AKC&apos;s trust
            partnerships team — on your timeline, at your trust&apos;s office or
            ours.
          </p>
        </a>
        <a href="mailto:shirodkar@apexkidneycare.in?subject=Trust%20Partnership%20Prospectus">
          <TrustLabel light>Document</TrustLabel>
          <h3>Trust Partnership Prospectus</h3>
          <p>
            The detailed partnership document — engagement area, governance
            framework, mission preservation clauses, and indicative economics.
          </p>
        </a>
        <Link href="/centres">
          <TrustLabel light>For Trustees</TrustLabel>
          <h3>Visit an AKC Centre</h3>
          <p>
            See an AKC centre in operation — clinical standard, patient
            experience, operational discipline — with founder-clinicians
            available to host trustees.
          </p>
        </Link>
      </div>
      <div className="mx-auto px-6 text-center sm:px-10 lg:px-14.5">
        <TrustLabel inline>The First Conversation</TrustLabel>
        <h2 className="mb-4 font-cormorant text-[clamp(36px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black [&_em]:text-primary-subtle [&_em]:italic">
          The right partnership begins with <em>the right conversation.</em>
        </h2>
        <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-bold [&_strong]:text-secondary">
          Tell us about your trust and what a successful partnership would look
          like from your side. The first conversation is free, confidential, and
          without obligation — the structure follows the fit, not the other way
          around.
        </p>
        <Button href="/contact" className="mt-4">
          Get in Touch with us
        </Button>
      </div>
    </div>
  </section>
);

export default TrustCtaSection;
