import { Mail, Phone } from "lucide-react";

import { Eyebrow } from "@/components";
import { organization } from "@/config";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const HomeHdCtaSection = () => (
  <section className={cn("bg-white py-16 text-center lg:py-20", GUTTER)}>
    <div className="mx-auto max-w-7xl">
      <Eyebrow
        label="Your Next Step"
        className="mb-5 justify-center text-black/80"
      />

      <h2 className="section-heading text-black">
        Want to <span className="text-primary-subtle italic">know more?</span>
      </h2>

      <p className="mx-auto mt-5 mb-6 max-w-2xl font-roboto text-[17px] font-light text-[#393f42] lg:leading-5.5">
        Speak with an AKC nephrologist, find a centre near you, or download our
        patient guide to share with your family.
      </p>

      <p className="font-roboto text-lg leading-relaxed font-bold text-black sm:text-2xl lg:leading-11.5">
        <strong className="text-[#313131]">For quick contact</strong> :
        <br />
        <span className="inline-flex items-center gap-2 align-middle">
          <Phone className="inline size-5 lg:size-6" aria-hidden="true" />{" "}
          <a href={`tel:${organization.phoneHref}`}>{organization.phone}</a>
        </span>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <span className="inline-flex items-center gap-2 align-middle">
          <Mail className="inline size-5 lg:size-6" aria-hidden="true" />{" "}
          <a href={`mailto:${organization.email}`}>{organization.email}</a>
        </span>
      </p>
    </div>
  </section>
);

export default HomeHdCtaSection;
