import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { CI_TITLE } from "../components/text";

/** `.donor-body p.ci-body` - the cream-at-72%-opacity body copy on navy. */
const DONOR_BODY =
  "mb-3.75 font-roboto text-[17px] leading-[22px] font-light text-[rgba(251,248,243,0.72)] [&_em]:italic";

const DonorSection = () => (
  <section
    className={cn(
      "relative overflow-hidden bg-secondary py-32.5 text-[#F5F0E8]",
      GUTTER,
    )}
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 55% 50% at 88% 12%, rgba(184, 134, 11, 0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 45% at 8% 90%, rgba(14, 124, 123, 0.1) 0%, transparent 60%)",
      }}
    />

    <div className="relative z-2">
      <div>
        <Eyebrow label="A Word About the Donor" className="mb-5 text-white" />

        <div
          className={cn(
            CI_TITLE,
            "mb-4 text-[35px] leading-[45px] text-white lg:text-[35px]",
          )}
        >
          A kidney transplant is, before it is anything else,{" "}
          <strong>an act of love</strong> &mdash; from one human being to
          another, or from a grieving family to a stranger they will never meet.
        </div>
      </div>

      <div className="my-7.5 grid grid-cols-1 items-center gap-9 border-t border-b border-[#073b5e] py-7.5 lg:grid-cols-2">
        <div>
          <h4 className="mb-2.5 font-roboto text-2xl font-bold text-white">
            For living donors
          </h4>
          <p className={DONOR_BODY}>
            Modern living donation is{" "}
            <strong className="text-white">extraordinarily safe</strong>. Donors
            undergo the same rigorous medical evaluation as recipients, and the
            surgery itself is performed laparoscopically in most centres. The
            vast majority of living donors return to full, normal lives &mdash;
            including pregnancy, work, and sport &mdash; with one kidney that
            more than meets their body&rsquo;s needs.
          </p>
        </div>

        <div>
          <h4 className="mb-2.5 font-roboto text-2xl font-bold text-white">
            For donor families
          </h4>
          <p className={DONOR_BODY}>
            Deceased donation in India is governed by the{" "}
            <strong className="text-white">
              Transplantation of Human Organs and Tissues Act
            </strong>
            . It is a free, voluntary act of one family honouring a loved one by
            saving the lives of others. We owe these families, quite literally,
            the lives our recipients then live.
          </p>
        </div>
      </div>

      <div>
        <p className={DONOR_BODY}>
          Whether you are a recipient, a potential donor, or a family weighing
          the decision &mdash; AKC nephrologists are available to talk it
          through, without pressure, before any commitment is made.
        </p>
      </div>
    </div>
  </section>
);

export default DonorSection;
