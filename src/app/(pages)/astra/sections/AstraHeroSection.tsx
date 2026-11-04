import { cn } from "@/lib";

import { Button } from "@/components/ui";
import { KidneyIcon } from "@/components/icons";
import { GUTTER } from "@/constants";

const STATS = [
  { num: "2011", label: "programme founded by Apex Kidney Foundation" },
  {
    num: <em className="italic">India&apos;s First</em>,
    label: "mathematically-optimised swap transplant registry",
  },
  {
    num: (
      <>
        5<span className="text-[0.6em]">-way</span>
      </>
    ),
    label: "maximum domino chain supported",
  },
  {
    num: (
      <>
        +16<span className="text-[0.6em]">pp</span>
      </>
    ),
    label: "match-rate gain vs binary-only swaps",
  },
  {
    num: (
      <>
        80<span className="text-[0.6em]">%</span>
      </>
    ),
    label: "algorithm weight on fairness & equity",
  },
] as const;

const AstraHeroSection = () => (
  <>
    <section
      id="home"
      className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden bg-[linear-gradient(135deg,#00111c_0%,#006693_50%,#001822_100%)]"
    >
      <KidneyIcon />

      <div className={`relative py-16 lg:py-20 ${GUTTER}`}>
        <div className="max-w-[90%]">
          <div className="mb-5 flex items-center gap-3 font-roboto text-sm tracking-[0.22em] text-white uppercase">
            <span className="h-px w-6 bg-white" />
            The Apex Swap Transplant Registry : Since 2011 : India&apos;s
            Pioneer
          </div>

          <h1 className="font-cormorant text-4xl leading-[1.05] font-light text-white sm:text-5xl lg:text-[62px]">
            When a kidney from your family{" "}
            <span className="text-[#00b3ff] italic">isn&apos;t a match,</span> a
            kidney from{" "}
            <span className="text-[#00b3ff] italic">another family</span> still
            can be.
          </h1>

          <p className="mt-6 font-roboto text-[17px] leading-relaxed font-light text-white">
            A paired kidney exchange is a barter between two incompatible
            donor-recipient pairs — one family&apos;s donor gives to another
            family&apos;s patient, and vice versa. ASTRA, founded by the{" "}
            <strong className="font-bold">
              Apex Kidney Foundation in 2011
            </strong>
            , is{" "}
            <em className="italic">
              India&apos;s pioneering registry of incompatible donor-recipient
              pairs
            </em>
            , using mathematical optimisation to turn locked family pairs into
            successful transplants.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#register" className="rounded-sm">
              Register a Pair →
            </Button>
            <Button
              href="#how"
              variant="outline"
              className="rounded-sm border-white text-white hover:border-white hover:bg-white/10"
            >
              How ASTRA works ↓
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
            {stat.num}
          </div>
          <div className="mt-1.5 font-roboto text-[11px] tracking-[0.08em] text-white/60 uppercase">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </>
);

export default AstraHeroSection;
