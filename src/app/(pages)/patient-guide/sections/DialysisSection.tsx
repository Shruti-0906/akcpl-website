import Image from "next/image";

import { Button } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import PathCard from "../components/PathCard";
import { SOLID_BUTTON } from "../components/buttons";
import { PATHS } from "../components/paths";

const BODY =
  "font-roboto text-[17px] leading-[22px] font-light text-[#393f42]";

const DialysisSection = () => (
  <section className="relative bg-[#e0f2f9] pt-20 pb-25">
    <div className={GUTTER}>
      <h2 className="mb-4 font-cormorant text-4xl leading-[1.05] font-bold tracking-[-0.015em] text-black lg:text-[52px]">
        Dialysis &mdash; Your Options,{" "}
        <em className="text-primary-subtle italic">Explained.</em>
      </h2>
      <p className={cn(BODY, "mb-11.25")}>
        When kidneys can no longer do their job, dialysis steps in as your
        artificial kidney. Modern dialysis offers more choices than ever &mdash;
        and at AKC, every choice is delivered to one uncompromising standard.
      </p>

      <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          {/*
           * `.found-prose p` wins over `.ci-body` on line-height (1.78) and the
           * <img> is inline + baseline-aligned, so the strut leaves a gap below
           * the image. Kept so the grid's `items-center` lands where it does in
           * the source.
           */}
          <p className="mb-0 font-roboto text-[17px] leading-[1.78]">
            <Image
              src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Patient+Guide+-+Dialysis+Section.jpg"
              alt="Dialysis Option"
              width={700}
              height={363}
              className="inline h-auto w-full align-baseline"
            />
          </p>
        </div>

        <div>
          <h2 className="mb-3.75 font-cormorant text-[36px] leading-[1.05] font-bold tracking-[-0.015em] text-black">
            When Kidneys Need Support: Understanding Dialysis
          </h2>
          <p className={cn(BODY, "mb-3.75")}>
            When chronic kidney disease reaches its most advanced stage &mdash;{" "}
            <strong>CKD Stage 5, also called End-Stage Renal Disease</strong>{" "}
            &mdash; the kidneys can no longer filter waste and excess fluid from
            the blood on their own.{" "}
            <em className="italic">Dialysis is your artificial kidney</em>,
            taking over what nature can no longer do.
          </p>
          <p className={cn(BODY, "mb-3.75")}>
            There are two broad paths: <strong>Hemodialysis</strong>, where
            blood is filtered through a machine, and{" "}
            <strong>Peritoneal Dialysis</strong>, where filtration happens
            inside your own abdomen. Within hemodialysis itself, there are four
            modalities &mdash; each suited to different lives, lifestyles, and
            clinical needs.
          </p>
          <p className={cn(BODY, "mb-3.75")}>
            The right choice depends on you. This page explains each option,
            what it offers, and who it suits best &mdash; so you and your
            nephrologist can decide together.
          </p>
        </div>
      </div>

      <div className="mt-7.5 grid grid-cols-1 gap-20 lg:grid-cols-2">
        {PATHS.map((path) => (
          <PathCard key={path.title} path={path} />
        ))}
      </div>

      <p className="mb-3.75">
        <Button
          href="/services/dialysis-options"
          className={cn(SOLID_BUTTON, "mt-7.5")}
        >
          Read more about Incentre Dialysis <span aria-hidden="true">→</span>
        </Button>
      </p>
    </div>
  </section>
);

export default DialysisSection;
