import { Eyebrow } from "@/components";
import { cn } from "@/lib";

import {
  CI_BODY,
  CI_TITLE,
  HEADING_EM,
  HOSPITAL_GUTTER,
  LABEL_DARK,
  LABEL_INLINE,
} from "../constants";

const PARTNERS = [
  "PD Hinduja",
  "Dr. LH Hiranandani",
  "Wockhardt",
  "Medipolis",
  "Healthway",
] as const;

const HospitalPartnersSection = () => {
  return (
    <section
      id="hospital-partners"
      className={cn("scroll-mt-20 bg-[#e0f2f9] py-[110px]", HOSPITAL_GUTTER)}
    >
      <div className="grid justify-items-center text-center">
        <Eyebrow
          label="Our partners"
          className={cn(LABEL_DARK, LABEL_INLINE)}
        />

        <h2 className={cn(CI_TITLE, "mb-4")}>
          The hospitals that build kidney care{" "}
          <em className={HEADING_EM}>with us</em>.
        </h2>

        <p className={CI_BODY}>
          Apex Kidney Care delivers dialysis hand-in-hand with India&apos;s
          leading hospitals, charitable trusts, governments and mission-driven
          investors. Together, these partnerships carry world-class kidney care
          to the communities that need it most.
        </p>
      </div>

      <div className="mt-13.5">
        {/* `.glabel` — label flanked by hairlines */}
        <div className="mb-5.5 flex items-center gap-3.5">
          <span aria-hidden="true" className="h-px flex-1 bg-secondary/10" />
          <span className="font-roboto text-xl font-semibold tracking-[2px] whitespace-nowrap text-black uppercase">
            Hospital partners
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-secondary/10" />
        </div>

        {/* Wrapping flex rather than an auto-fill grid, so a short list sits
            centred instead of being stretched across the full width. */}
        <div className="flex flex-wrap justify-center gap-4">
          {PARTNERS.map((partner) => (
            <div
              key={partner}
              className="-my-2.5 flex h-26 w-47.5 items-center justify-center rounded-[14px] border border-secondary/10 bg-white p-4.5 text-center hover:-translate-y-1 hover:border-tertiary hover:shadow-[0_14px_32px_rgba(7,33,58,0.10)]"
            >
              <span className="font-roboto text-[17px] leading-[1.2] font-semibold text-secondary">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* `.foot` — carries `rv in` on the reference, so it does not animate. */}
      <div className="mt-12 text-center">
        <p className={CI_BODY}>
          <b className="font-bold text-secondary">250+</b> centres
          &nbsp;&middot;&nbsp; <b className="font-bold text-secondary">65+</b>{" "}
          partner hospitals &nbsp;&middot;&nbsp;
          <b className="font-bold text-secondary">14</b> states across India
        </p>
      </div>
    </section>
  );
};

export default HospitalPartnersSection;
