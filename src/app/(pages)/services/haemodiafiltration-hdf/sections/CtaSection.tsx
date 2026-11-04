import { Mail, Phone } from "lucide-react";

import { organization } from "@/config";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const CtaSection = () => (
  <section id="cta" className={cn("bg-white py-20 text-center", GUTTER)}>
    <h2 className="section-heading leading-[1.05] font-bold tracking-[-0.015em] text-black">
      Talk to your nephrologist about{" "}
      <em className="text-primary-subtle italic">hemodiafiltration</em>.
    </h2>
    <p className="mt-4 mb-8.75 font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
      Not everyone needs HDF, and not every patient is suited to it — but for
      many on dialysis, it&rsquo;s the closest thing yet to a deeper, kinder
      clean.
      <br />
      Ask the Apex team whether it&rsquo;s right for you.
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
  </section>
);

export default CtaSection;
