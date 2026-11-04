import { Mail, Phone } from "lucide-react";

import { Eyebrow } from "@/components";
import { organization } from "@/config";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const CtaSection = () => (
  <section className={cn("relative bg-white py-20 text-center", GUTTER)}>
    <Eyebrow
      label="Your Lifeline Is Our Shared Responsibility"
      className="mb-5 justify-center text-black"
    />

    <h2 className="section-heading leading-[1.05] font-bold tracking-[-0.015em] text-black">
      Want to <em className="text-primary-subtle italic">know more?</em>
    </h2>

    <p className="mt-4 mb-6.25 font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
      Speak with an AKC nephrologist, find a centre near you, or download our
      patient guide to share with your family.
    </p>

    <p className="mb-3.75 font-roboto text-xl leading-8 font-bold text-black sm:text-[30px] sm:leading-[46px]">
      <strong className="text-[#313131]">For quick contact</strong> :
    </p>
    <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-roboto text-xl font-bold text-black sm:text-[30px]">
      <span className="inline-flex items-center gap-2 align-middle">
        <Phone className="inline size-5 sm:size-6" aria-hidden="true" />{" "}
        <a href={`tel:${organization.phoneHref}`}>{organization.phone}</a>
      </span>
      <span aria-hidden="true">|</span>
      <span className="inline-flex items-center gap-2 align-middle">
        <Mail className="inline size-5 sm:size-6" aria-hidden="true" />{" "}
        <a href={`mailto:${organization.email}`}>{organization.email}</a>
      </span>
    </span>
  </section>
);

export default CtaSection;
