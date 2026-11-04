import { Mail, Phone } from "lucide-react";

import { GUTTER } from "@/constants";
import { organization } from "@/config";

/**
 * The lab publishes its own numbers and inbox, so these stay local to this
 * page rather than going into `organization`, which every other CTA reads.
 * Customer Care is the organisation-wide number.
 */
const LAB_PHONES = [
  {
    label: "For Home Visit",
    display: "86554 43319",
    href: "+918655443319",
  },
  { label: "Laboratory", display: "74000 95998", href: "+917400095998" },
  {
    label: "Customer Care",
    display: organization.phone,
    href: organization.phoneHref,
  },
] as const;

const LAB_EMAIL = "contact@kidneycarelab.com";

const LabCtaSection = () => (
  /* The hero's "Book a test" jumps here, so it carries the same `scroll-mt`
     as the other anchored sections to clear the sticky nav and breadcrumb. */
  <section
    id="next-step"
    className={`scroll-mt-36 bg-white py-16 text-center lg:py-20 ${GUTTER}`}
  >
    <div>
      <div className="mb-5 flex items-center justify-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
        <span className="h-px w-6 bg-black" />
        Your Next Step
      </div>
      <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
        Want to <span className="text-primary-subtle italic">book a test?</span>
      </h2>
      <p className="mt-5 mb-6 font-roboto text-[18px] leading-relaxed text-[#393f42]">
        Speak with Lab Coordinators, find a centre near you, or download our
        patient guide to share with your family.
      </p>
      <div className="font-roboto text-lg leading-relaxed font-bold text-black sm:text-2xl lg:text-[30px] lg:leading-[46px]">
        <p>
          <strong className="text-[#313131]">For quick contact</strong> :
        </p>
        {/* Three labelled numbers will not fit one line at the 30px heading
            size, so this row steps down a size and wraps on narrow screens. */}
        <ul className="mt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-base sm:text-lg lg:text-2xl">
          {LAB_PHONES.map((phone, index) => (
            <li key={phone.href} className="inline-flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="mr-1 text-black/40">
                  |
                </span>
              )}
              <Phone className="inline size-5" aria-hidden="true" />
              <span className="text-[#313131]">{phone.label}:</span>
              <a href={`tel:${phone.href}`}>{phone.display}</a>
            </li>
          ))}
        </ul>
        <p className="mt-1 inline-flex items-center gap-2">
          <Mail className="inline size-5" aria-hidden="true" />
          <a href={`mailto:${LAB_EMAIL}`}>{LAB_EMAIL}</a>
        </p>
      </div>
    </div>
  </section>
);

export default LabCtaSection;
