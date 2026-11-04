import { Activity, Heart, House, ShieldCheck } from "lucide-react";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import HdfBenefitCard, { type HdfBenefit } from "../components/HdfBenefitCard";
import HdfFusion from "../components/HdfFusion";

const ICON = "size-5";

const BENEFITS: readonly HdfBenefit[] = [
  {
    title: "A DEEPER CLEAN",
    icon: <ShieldCheck className={ICON} />,
    text: (
      <>
        A strong current of clean fluid flushes out the bigger &ldquo;middle
        molecules&rdquo; that ordinary dialysis can&apos;t shift &mdash; the
        ones linked to inflammation and fatigue.
      </>
    ),
  },
  {
    title: "BUILT FOR LONGER LIFE",
    icon: <Heart className={ICON} />,
    text: (
      <>
        In the largest dialysis trial ever run (CONVINCE), high-dose HDF lowered
        the risk of death by 23% versus standard dialysis.
      </>
    ),
  },
  {
    title: "GENTLER SESSIONS",
    icon: <Activity className={ICON} />,
    text: (
      <>
        HDF tends to be kinder on blood pressure during treatment &mdash; often
        meaning fewer crashes, cramps and that washed-out feeling afterwards.
      </>
    ),
  },
  {
    title: "THE FREEDOM OF HOME",
    icon: <House className={ICON} />,
    text: (
      <>
        All of it delivered in your own bedroom by a trained, ACLS-certified
        team &mdash; no commute, no waiting room, on a schedule that fits your
        life.
      </>
    ),
  },
];

const FACTS = [
  { value: "ACLS", label: "Certified Care Team" },
  { value: "Periodic", label: "Physician Home Visit" },
] as const;

const HomeHdfSection = () => {
  return (
    <section className={cn("bg-[#e0f2f9] py-20 lg:py-26", GUTTER)}>
      <div className="mx-auto max-w-303.75">
        <div className="grid items-center gap-10 lg:grid-cols-[608fr_550fr] lg:gap-14">
          <div>
            <Eyebrow
              label="Home Hemodiafiltration · Home HDF"
              className="text-black"
            />

            <h2 className="mt-5 font-cormorant text-4xl leading-[1.08] font-bold tracking-[-0.015em] text-black sm:text-5xl lg:text-[56px]">
              The deepest clean in dialysis &mdash; now in your own{" "}
              <em className="text-primary-subtle italic">home</em>.
            </h2>

            <p className="mt-6 font-roboto text-[15px] leading-[1.72] text-black/80 sm:text-[17px]">
              Hemodiafiltration removes far more of the harmful wastes that
              standard dialysis leaves behind. Apex now delivers it where
              you&apos;re most comfortable &mdash; at home. It&apos;s the{" "}
              <strong className="font-bold">
                science of HDF and the freedom of home, in one programme.
              </strong>
            </p>
          </div>

          <HdfFusion />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-18 lg:grid-cols-4">
          {BENEFITS.map((benefit) => (
            <HdfBenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>

        <div className="mx-auto mt-7 flex w-fit items-center justify-center rounded-[20px] border border-white/12 bg-[#03162a] p-[25px_24px] sm:p-[25px_14px]">
          <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-8.5">
            {FACTS.map((fact) => (
              /* Stacked, the rule runs underneath and the last one drops it;
                 in a row it becomes the vertical divider on every item. */
              <div
                key={fact.value}
                className="border-b border-[#062342] pb-5 text-center last:border-b-0 last:pb-0 sm:border-r sm:border-b-0 sm:p-[2px_57px] sm:text-left"
              >
                <p className="mb-1.5 font-roboto text-[40px] leading-none font-bold text-primary-light">
                  {fact.value}
                </p>
                <p className="font-roboto text-xs tracking-[0.04em] whitespace-nowrap text-white uppercase">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHdfSection;
