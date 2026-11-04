import { AlertCircle } from "lucide-react";

import { Eyebrow } from "@/components";
import { KidneyIcon } from "@/components/icons";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const HeroSection = () => (
  <section id="faq-hero" className="relative overflow-hidden bg-depth pb-8">
    <KidneyIcon />

    <div className={cn("relative z-10 pt-14", GUTTER)}>
      <Eyebrow
        label="For Dialysis Patients & Their Families : Plain-Language Answers"
        className="mb-5 text-[14px] font-normal text-white"
      />

      <h1 className="font-cormorant text-[clamp(32px,6vw,62px)] leading-[1.05] font-light tracking-[-0.01em] text-white">
        Your questions,{" "}
        <em className="text-[#00b3ff] italic">answered honestly.</em>
      </h1>

      <p className="mt-7 font-roboto text-[15px] leading-[1.7] font-light text-white sm:text-[17px]">
        Dialysis comes with a lot of new vocabulary, unfamiliar tests, and
        questions nobody warned you about.{" "}
        <strong className="font-normal text-white">
          Below are the questions we hear most often from our patients
        </strong>{" "}
        — grouped by topic, written in plain language, and answered the way we
        would answer in clinic.{" "}
        <em className="text-white italic">
          This page is a starting point, not a substitute for your
          nephrologist&rsquo;s specific advice for you.
        </em>
      </p>

      <div className="mt-6 grid grid-cols-[auto_1fr] gap-3.5 rounded-xs border border-l-[3px] border-[rgba(181,73,91,0.25)] border-l-[#B5495B] bg-[#F2D9DE]/95 px-4 py-4 sm:gap-5 sm:px-7 sm:py-[22px]">
        <span className="flex size-9.5 shrink-0 items-center justify-center rounded-full bg-[#B5495B]">
          <AlertCircle className="size-4.5 text-white" aria-hidden="true" />
        </span>
        <div>
          <p className="mb-1.5 font-roboto text-[10.5px] font-semibold tracking-[0.22em] text-[#B5495B] uppercase">
            Important · Read First
          </p>
          <p className="font-roboto text-[14px] leading-[1.6] text-[#2A2A2A] sm:text-[15px]">
            If you are experiencing{" "}
            <strong className="font-medium text-secondary">
              chest pain, severe breathlessness, heavy bleeding from your
              access, sudden confusion, or any symptom that feels urgent
            </strong>{" "}
            —{" "}
            <em className="text-[#B5495B] italic">
              do not look for the answer here.
            </em>{" "}
            Contact your dialysis centre or go to your nearest emergency
            department immediately.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
