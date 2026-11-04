import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const PeritonealSection = () => (
  <section className={cn("bg-[#e0f2f9] py-14 lg:py-22.5", GUTTER)}>
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-16">
      <div
        aria-hidden="true"
        className="flex shrink-0 flex-col items-start gap-4"
      >
        <span className="font-cormorant text-5xl leading-none text-black italic lg:text-6xl">
          V
        </span>
        <span className="block h-px w-10 bg-black/30" />
      </div>

      <div>
        <Eyebrow label="A Brief Note on the Other Path" className="mb-5" />
        <h3 className="section-heading text-black">
          Peritoneal Dialysis{" "}
          <span className="text-primary-subtle italic">
            filtration from within.
          </span>
        </h3>
        <p className="mt-3 max-w-3xl font-roboto text-[17px] leading-5.5 font-light text-[#393f42]">
          For select patients,{" "}
          <strong className="font-bold text-secondary">
            Peritoneal Dialysis (PD)
          </strong>{" "}
          offers an alternative path altogether using the peritoneal membrane
          inside your own abdomen as the natural filter, performed at home
          through daily exchanges or an overnight cycler. Based upon clinical
          suitability, our nephrologists actively facilitate the adoption of PD
          where it is the right fit. A dedicated PD page is being prepared as
          part of this patient-education series.
        </p>
      </div>
    </div>
  </section>
);

export default PeritonealSection;
