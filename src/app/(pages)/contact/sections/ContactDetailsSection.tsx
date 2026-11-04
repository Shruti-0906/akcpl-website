import { Mail, MapPin, Phone } from "lucide-react";

import { GUTTER } from "@/constants";
import { organization } from "@/config";

/** Reference .tv-item fill, also used for the appointment form card. */
const DARK_CARD =
  "bg-[linear-gradient(135deg,rgb(0_62_104),rgb(0_26_44))] border border-[#002238]";

const CARDS = [
  {
    icon: Mail,
    title: "Email",
    content: (
      <a href={`mailto:${organization.email}`} className="hover:underline">
        {organization.email}
      </a>
    ),
  },
  {
    icon: MapPin,
    title: "Address",
    content:
      "1st Floor, Fargo House, next to Spectra Motors, Kanchpada, Malad (W), Mumbai - 400064",
  },
  {
    icon: Phone,
    title: "Call",
    content: (
      <a href={`tel:${organization.phoneHref}`} className="hover:underline">
        {organization.phone}
      </a>
    ),
  },
] as const;

const ContactDetailsSection = () => (
  <section className={`bg-[#e0f2f9] pt-16 pb-12 lg:pt-20 ${GUTTER}`}>
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
        GET IN TOUCH
      </h2>
      <p className="mt-5 font-dm-sans text-[17px] leading-relaxed text-[#393f42]">
        We&apos;d love to hear from you. Fill out the form or reach us through
        the details below.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
      {CARDS.map(({ icon: Icon, title, content }) => (
        <div
          key={title}
          className={`flex items-center gap-3 rounded-2xl px-5 py-5 ${DARK_CARD}`}
        >
          <div className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10">
            <Icon className="size-4.5 text-primary-light" aria-hidden="true" />
          </div>
          <div>
            <div className="font-dm-sans text-[15px] font-bold text-white">
              {title}
            </div>
            <div className="mt-1 font-dm-sans text-[14px] leading-snug text-white/70">
              {content}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ContactDetailsSection;
