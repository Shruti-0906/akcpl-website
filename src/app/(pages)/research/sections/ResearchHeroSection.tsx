import { CountUp, Eyebrow, KidneyIcon } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const STATS = [
  { value: "15+", label: "Peer-reviewed papers & abstracts" },
  { value: "5", label: "Research themes across the portfolio" },
  { value: "2", label: "Doctoral theses anchored on AKC data" },
  { value: "2011", label: "First joint research project" },
  { value: "Multi", label: "Journals & conferences across India & abroad" },
] as const;

const ResearchHeroSection = () => {
  return (
    <section
      id="research-hero"
      className="flex flex-col bg-depth lg:min-h-[70svh]"
    >
      <div
        className={cn(
          "relative flex flex-1 items-center overflow-hidden py-20 lg:py-24",
          GUTTER,
        )}
      >
        <KidneyIcon />

        <div className="relative flex max-w-4xl flex-col gap-5 sm:gap-6">
          <Eyebrow
            label="Research & Publications : AKC × Apex Kidney Foundation"
            className="text-white"
          />

          <h1 className="font-cormorant text-4xl leading-tight font-light text-white sm:text-5xl lg:text-[62px]">
            A dialysis network{" "}
            <span className="text-[#00b3ff] italic">that publishes</span> what
            it learns.
          </h1>

          <p className="font-roboto text-sm font-light text-white sm:text-base">
            Across more than a decade, AKC and the Apex Kidney Foundation have
            produced{" "}
            <strong className="font-normal">
              a body of peer-reviewed research
            </strong>{" "}
            on kidney exchange optimisation, pandemic-era dialysis coordination,
            vascular access policy, home hemodialysis safety, and data-driven
            dialysis treatment.{" "}
            <span className="italic">
              The work has appeared in indexed medical journals, international
              operations-research proceedings, and has anchored two doctoral
              theses at IIT Bombay.
            </span>{" "}
            This page is the consolidated record.
          </p>
        </div>
      </div>

      <div className={cn("border-t border-white/10 bg-[#050e1f]/50", GUTTER)}>
        <div className="grid grid-cols-2 gap-y-8 py-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0 lg:divide-x lg:divide-white/15">
          {STATS.map((stat) => (
            <div key={stat.label} className="lg:px-6 lg:first:pl-0">
              <p className="font-roboto text-3xl font-semibold text-primary-light lg:text-[40px]">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-1 font-roboto text-[0.7rem] tracking-wider text-white/80 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchHeroSection;
