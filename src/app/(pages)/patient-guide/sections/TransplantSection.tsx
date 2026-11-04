import Image from "next/image";

import { Button, Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import TransplantStatCard from "../components/TransplantStatCard";
import { SOLID_BUTTON } from "../components/buttons";
import { TRANSPLANT_STATS } from "../components/transplantStats";

const CI_TITLE =
  "font-cormorant text-4xl leading-[1.05] font-bold tracking-[-0.015em] text-black lg:text-[52px]";

const CI_BODY =
  "mb-3.75 font-roboto text-[17px] leading-[22px] font-light text-[#393f42]";

const TransplantSection = () => (
  <section className={cn("relative bg-white pt-20 pb-30", GUTTER)}>
    <Eyebrow
      label="Patient Education · Treatment Options"
      className="mb-5 text-black"
    />

    <h2 className={cn(CI_TITLE, "mb-4")}>
      Kidney Transplant &mdash;{" "}
      <em className="text-primary-subtle italic">A New Beginning.</em>
    </h2>

    <p className={cn(CI_BODY, "mb-11.25")}>
      For most patients with end-stage kidney disease, a transplant offers
      something dialysis cannot &mdash;{" "}
      <em className="italic">a return to a fuller, freer life.</em> This is the
      story of that journey, and how AKC walks it with you from the first
      conversation to a lifetime beyond.
    </p>

    <Eyebrow label="Why Transplant" className="mb-5 text-black" />

    <h2 className={cn(CI_TITLE, "mb-11.25")}>
      Often the{" "}
      <em className="text-primary-subtle italic">best long-term answer</em> to
      end-stage kidney disease.
    </h2>

    <div className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
      <div>
        {/* The source hangs the image inside its own `.ci-body`, whose bottom
            margin is the only gap before the copy begins. */}
        <div className="mb-3.75">
          <Image
            src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Patient+Guide+-+Transplant+Section.jpg"
            alt="Transplant"
            width={800}
            height={434}
            className="h-auto w-full"
          />
        </div>

        <p className={CI_BODY}>
          A successful kidney transplant restores something that no dialysis
          machine can fully replicate &mdash;{" "}
          <strong>continuous, physiological filtration</strong>, twenty-four
          hours a day, performed by a living organ.
        </p>

        <p className={CI_BODY}>
          Compared to lifelong dialysis, transplantation generally offers{" "}
          <em className="italic">
            longer survival, better quality of life, freedom from the dialysis
            schedule, fewer dietary restrictions, and the return of energy
          </em>{" "}
          that patients often had given up on.
        </p>

        <p className={CI_BODY}>
          It is not the right path for every patient, and it is not without its
          own work. But for those who are candidates, it is often the single
          most consequential medical decision they will make.
        </p>

        {/* The source wraps this button in a fifth `.ci-body`, whose 15px
            bottom margin is part of the column's measured height. */}
        <Button
          href="/patient-guide/transplant-info"
          className={cn(SOLID_BUTTON, "mt-7.5 mb-3.75")}
        >
          Read more about Transplant <span aria-hidden="true">→</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {TRANSPLANT_STATS.map((stat) => (
          <TransplantStatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </div>
  </section>
);

export default TransplantSection;
