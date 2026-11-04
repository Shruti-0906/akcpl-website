import { cn } from "@/lib";

import { CountUp, Eyebrow } from "@/components/ui";
import { Button } from "@/components/ui";
import { KidneyIcon } from "@/components/icons";
import { GUTTER } from "@/constants";

const STATS = [
  { num: "NABL", label: "accredited diagnostic lab" },
  { num: "24+", label: "Routine Health to Renal & Transplant Test packages" },
  { num: "8am – 8pm", label: "specimen logistics chain" },
  { num: "250+", label: "AKC centres connected via EMR" },
  { num: "One", label: "institution from sample to insight" },
] as const;

const LabHeroSection = () => (
  <>
    <section className="relative flex min-h-[75vh] flex-col justify-center overflow-hidden bg-[linear-gradient(135deg,#00111c_0%,#006693_50%,#001822_100%)]">
      <KidneyIcon />

      <div className={`relative py-16 lg:py-20 ${GUTTER}`}>
        <div className="max-w-[90%]">
          <Eyebrow
            label="AKCPL · The Diagnostic Arm of AKC : NABL · MC-7466"
            className="text-white/80"
          />
          <h1 className="font-cormorant text-4xl leading-[1.05] font-light text-white sm:text-5xl lg:text-[62px]">
            A lab built around{" "}
            <span className="text-[#00b3ff] italic">
              patient with kidney ailments.
            </span>
          </h1>
          <p className="mt-6 font-roboto text-[17px] leading-relaxed font-light text-white">
            Apex Kidney Care Pathology Lab is{" "}
            <strong className="font-bold">
              Apex Kidney Care&apos;s in-house diagnostic arm
            </strong>{" "}
            — a NABL-accredited medical laboratory, equipped with the
            world&apos;s leading instrumentation, integrated directly into
            AKC&apos;s Axis EMR.{" "}
            <em className="italic">
              Most labs hand over a result. AKCPL hands over a trend.
            </em>
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#next-step" className="rounded-sm">
              Book a test →
            </Button>
          </div>
        </div>
      </div>
    </section>

    <div
      className={`flex flex-col gap-8 bg-[#03172a] py-7 sm:flex-row ${GUTTER}`}
    >
      {STATS.map((stat, index) => (
        <div
          key={stat.label}
          className={cn(
            "flex-1 border-white/10 px-0 sm:px-8 sm:first:pl-0 sm:last:border-r-0",
            index < STATS.length - 1 && "sm:border-r",
          )}
        >
          <div className="font-roboto text-3xl font-bold text-primary-light">
            <CountUp value={stat.num} />
          </div>
          <div className="mt-1.5 font-roboto text-[11px] tracking-[0.08em] text-white/60 uppercase">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </>
);

export default LabHeroSection;
