import type { ReactNode } from "react";

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

type Model = {
  numeral: string;
  tag: string;
  title: string;
  body: ReactNode;
  bestFor: string;
  tinted: boolean;
};

const MODELS: readonly Model[] = [
  {
    numeral: "I.",
    tag: "Most common · Turnkey",
    title: "Full-Service Operation",
    tinted: true,
    body: (
      <>
        AKC operates the dialysis unit inside your hospital, end to end. We
        bring everything &mdash; machines, water plant, technicians, nephrology
        coverage, QA, EHR, accreditation. You provide space, infrastructure, and
        the patient relationship. Revenue is shared on an aligned model.{""}
        <strong className="font-bold text-secondary">
          You don&apos;t run a dialysis unit; you offer one.
        </strong>
      </>
    ),
    bestFor:
      "Hospitals that want a specialised dialysis service without taking on the operational and clinical complexity themselves.",
  },
  {
    numeral: "II.",
    tag: "Asset-light · Upgrade",
    title: "Clinical & Technical Services",
    tinted: false,
    body: (
      <>
        For hospitals that already have a dialysis unit but want to raise the
        standard. AKC provides clinical leadership, validated protocols, the QA
        framework, technician training, and access
        to the Axis EHR.{""}
        <strong className="font-bold text-secondary">
          The hospital owns and operates; AKC supplies the institutional brain.
        </strong>
      </>
    ),
    bestFor:
      "Hospitals with an existing unit that needs upgrading to network-grade clinical and operational standards.",
  },
  {
    numeral: "III.",
    tag: "Greenfield · Strategic",
    title: "Joint Venture & Greenfield Builds",
    tinted: true,
    body: (
      <>
        For hospitals planning major capital investment in renal care &mdash; a
        new transplant centre, a regional dialysis hub, an integrated renal
        service line. Joint capital, joint operations, joint clinical
        leadership. AKC&apos;s institutional expertise meets the hospital&apos;s
        resources and ambition.{""}
        <strong className="font-bold text-secondary">
          Landmark projects, jointly built.
        </strong>
      </>
    ),
    bestFor:
      "Larger hospitals and hospital chains undertaking strategic capital projects in renal care.",
  },
];

const PartnershipModelsSection = () => {
  return (
    <section
      id="partnership-models"
      className={cn("scroll-mt-20 bg-[#e0f2f9] pt-30 pb-25", HOSPITAL_GUTTER)}
    >
      <div className="mx-auto mb-16 max-w-[820px] text-center">
        <Eyebrow
          label="Three Partnership Models"
          className={cn(LABEL_DARK, LABEL_INLINE)}
        />

        <h2 className={cn(CI_TITLE, "mb-4")}>
          One framework, <em className={HEADING_EM}>three ways to fit.</em>
        </h2>

        <p className={CI_BODY}>
          Every hospital is different. Different capital appetite, different
          operational bandwidth, different existing infrastructure. AKC
          structures partnerships to fit the institution &mdash; not the other
          way around.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {MODELS.map((model) => (
          <article
            key={model.numeral}
            className={cn(
              "group relative flex flex-col overflow-hidden rounded-[2px] px-9 py-10",
              "hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(14,37,64,0.06)]",
              model.tinted ? "bg-[#e9f7fd]" : "bg-white",
            )}
          >
            {/* `.model-card::before` — 3px teal rule that wipes in from the left */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-primary-subtle group-hover:scale-x-100"
            />

            <div className="mb-4.5 font-roboto text-4xl leading-none font-light text-primary-subtle italic">
              {model.numeral}
            </div>

            <div className="mb-5 flex items-center gap-3 font-roboto text-sm leading-[normal] tracking-[0.22em] text-secondary/55 uppercase">
              <span aria-hidden="true" className="h-px w-6 bg-current" />
              {model.tag}
            </div>

            <h3 className="mb-4 font-cormorant text-[29px] leading-[1.18] font-bold tracking-[-0.008em] text-secondary">
              {model.title}
            </h3>

            <p className="mb-6 flex-1 font-roboto text-[17px] leading-[1.7] text-[#393f42]">
              {model.body}
            </p>

            <div className="pt-5 font-roboto text-[11.5px] leading-[1.5] font-bold tracking-[0.04em] text-black">
              <strong className="mb-2 block text-[10px] font-bold tracking-[0.22em] text-primary-subtle uppercase">
                Best for
              </strong>
              {model.bestFor}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PartnershipModelsSection;
