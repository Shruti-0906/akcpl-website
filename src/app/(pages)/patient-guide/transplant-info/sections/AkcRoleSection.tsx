import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { CI_BODY, CI_TITLE } from "../components/text";

const BEFORE_ITEMS: readonly ReactNode[] = [
  "Candidacy discussion and counselling",
  "Comprehensive pre-transplant optimisation",
  "Coordination with your chosen transplant centre",
  <>Donor evaluation support &amp; counselling</>,
  "Managing dialysis until the day of surgery",
];

const AFTER_ITEMS: readonly ReactNode[] = [
  "Post-discharge handover from surgical team",
  <>Frequent early follow-up &amp; lab monitoring</>,
  "Immunosuppression dosing and adjustment",
  "Rejection surveillance and prompt response",
  <>Lifelong nephrology care &mdash; for as long as the kidney lasts</>,
];

const AkcRoleSection = () => (
  <section className={cn("relative bg-white py-32.5", GUTTER)}>
    <div className="mx-auto mb-16 text-center">
      <Eyebrow
        label="Our Role in Your Transplant"
        className="mb-5 inline-flex text-black"
      />

      <div>
        <h2 className={CI_TITLE}>
          We don&rsquo;t perform the surgery.
          <br />
          We walk the <em>entire journey</em> with you.
        </h2>
      </div>

      <div>
        <p className={CI_BODY}>
          Transplant surgery itself is done at the centre of your choice, by
          surgeons you and your family trust. AKC&rsquo;s role is the{" "}
          <em>continuum of care</em> around it &mdash; before, during, and for
          the rest of your life after. This is what sets a transplant journey at
          AKC apart.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_auto_1fr]">
      <div>
        <div className="relative h-full rounded-[2px] border border-[#ccc] bg-white px-9 py-10">
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[3px] bg-primary-subtle"
          />

          <div className="mb-3.5 font-roboto text-[10.5px] font-bold tracking-[0.22em] text-primary-subtle uppercase">
            Before Transplant
          </div>

          <h3 className="mb-6 font-roboto text-2xl leading-[1.25] font-bold tracking-[-0.005em] text-secondary">
            Preparing you for the best possible outcome
          </h3>

          <ul className="flex list-none flex-col gap-3.5">
            {BEFORE_ITEMS.map((item, index) => (
              <li
                key={index}
                className="relative pl-6 font-roboto text-[17px] leading-[1.6] text-[#393f42]"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-2 left-0 size-2.5 rounded-full bg-primary-subtle"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center pt-6 lg:pt-30">
        <div className="relative font-roboto text-[36px] font-light text-black italic">
          ⟶
          <span className="block text-center text-[10.5px]">
            Continuous Care
          </span>
        </div>
      </div>

      <div>
        <div className="relative h-full rounded-[2px] border border-[#ccc] bg-[#e9f7fd] px-9 py-10">
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[3px] bg-primary-subtle"
          />

          <div className="mb-3.5 font-roboto text-[10.5px] font-bold tracking-[0.22em] text-primary-subtle uppercase">
            After Transplant
          </div>

          <h3 className="mb-6 font-roboto text-2xl leading-[1.25] font-bold tracking-[-0.005em] text-secondary">
            Protecting your new kidney for decades
          </h3>

          <ul className="flex list-none flex-col gap-3.5">
            {AFTER_ITEMS.map((item, index) => (
              <li
                key={index}
                className="relative pl-6 font-roboto text-[17px] leading-[1.6] text-[#393f42]"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-2 left-0 size-2.5 rounded-full bg-primary-subtle"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div>
      <p className="mt-16 font-roboto text-base leading-normal text-secondary">
        <strong>
          One nephrologist. One record. One continuous arc of care
        </strong>{" "}
        &mdash; from the first conversation about transplant to the twentieth
        year of your new kidney&rsquo;s life.
      </p>
    </div>
  </section>
);

export default AkcRoleSection;
