import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const FACT_CLASSES = "font-roboto text-sm text-black sm:text-base";

const FirstSessionSection = () => {
  return (
    <section
      id="first-session"
      className={cn("bg-white py-12 lg:py-16", GUTTER)}
    >
      <div className="flex flex-col gap-5">
        <Eyebrow label="The First Dialysis Session" />

        <h2 className="section-heading text-black">
          <span className="text-primary-subtle italic">15 August</span> 2008 :
          Independence Day · Mumbai
        </h2>

        <p className="font-roboto text-sm leading-relaxed text-black sm:text-base">
          The first AKC dialysis session was delivered on Independence Day,
          2008. The first two centres - in <em>Mulund and Malad</em> - opened in
          the suburbs of Mumbai. A small clinical team. A handful of patients.
          The institution that would become India&apos;s largest dialysis
          network was born on a date the founders did not choose by accident.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          <Eyebrow label="// First Centres" />
          <p className={FACT_CLASSES}>
            <strong className="font-semibold">Mulund</strong> &amp;{" "}
            <strong className="font-semibold">Malad</strong> suburbs of Mumbai
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Eyebrow label="// Mode of Care" />
          <p className={FACT_CLASSES}>
            <strong className="font-semibold">Stand-alone</strong> dialysis
            centres, nephrologist-led
          </p>
        </div>
      </div>
    </section>
  );
};

export default FirstSessionSection;
