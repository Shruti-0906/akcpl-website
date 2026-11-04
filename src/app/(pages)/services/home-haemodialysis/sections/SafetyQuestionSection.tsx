import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

/** The white panel carries a 3px rule along the top edge. */
const PANEL =
  "relative bg-white before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:content-['']";

const SafetyQuestionSection = () => {
  return (
    <section className={cn("bg-secondary py-20 lg:py-12.5", GUTTER)}>
      <div className="mb-16">
        <Eyebrow label="The Safety Question" className="text-white" />

        <h2 className="mt-5 mb-4 font-cormorant text-3xl leading-[1.05] font-bold tracking-[-0.015em] text-white sm:text-4xl lg:text-[52px]">
          Is dialysis safe to do{" "}
          <em className="text-primary-subtle italic">at home?</em>
        </h2>

        <p className="font-roboto text-[15px] leading-relaxed font-light text-[#fbf8f3]/72 sm:text-[17px] sm:leading-5.5">
          The most common question we are asked by patients, by
          families, by nephrologists.{" "}
          <strong className="font-normal">
            The evidence from the AKC programme is unambiguous.
          </strong>{" "}
          Across{" "}
          <em className="italic">81,849 completed home dialysis sessions</em> in
          our database, the safety record speaks for itself.
        </p>
      </div>

      <div
        className={cn(
          PANEL,
          "w-fit p-[42px_24px] before:bg-primary-subtle sm:p-[42px_36px]",
        )}
      >
        <p className="mb-3.5 font-roboto text-5xl leading-none font-bold tracking-[-0.028em] text-secondary sm:text-[62px]">
          81,849
        </p>
        <p className="mb-2 font-roboto text-[10.5px] leading-[1.4] font-bold tracking-[0.18em] text-secondary uppercase">
          Home HD Sessions Completed
        </p>
        <p className="font-roboto text-[15px] leading-relaxed font-light text-[#393f42] sm:text-[17px] sm:leading-5.5">
          Across the AKC programme, 2012&ndash;2026.
        </p>
      </div>

    </section>
  );
};

export default SafetyQuestionSection;
