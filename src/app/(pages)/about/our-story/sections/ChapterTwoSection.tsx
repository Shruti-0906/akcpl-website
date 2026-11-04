import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const PARAGRAPH_CLASSES =
  "font-roboto text-sm leading-relaxed text-black sm:text-base";

const ChapterTwoSection = () => {
  return (
    <section
      id="chapter-two"
      className={cn("bg-[#E0F2F9] py-12 lg:py-16", GUTTER)}
    >
      <div className="flex gap-8 lg:gap-14">
        <div
          aria-hidden="true"
          className="flex shrink-0 flex-col items-start gap-4"
        >
          <span className="font-cormorant text-5xl leading-none text-black italic lg:text-6xl">
            II
          </span>
          <span className="block h-px w-10 bg-black/30" />
        </div>

        <div className="flex flex-col gap-4">
          <Eyebrow label="Chapter Two · 2003-2007" />
          <h2 className="section-heading text-black">
            Four years of{" "}
            <span className="text-primary-subtle italic">weekly meetings.</span>
          </h2>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-5 lg:mt-10">
        <p className={PARAGRAPH_CLASSES}>
          From 2003 to 2007, the founding group met consistently - once a week,
          every week, for four years. The reason for that discipline was not
          academic: it was practical. The four nephrologists came from different
          hospitals, different training backgrounds, different temperaments.
          Before any business model could be built, they needed to know that
          their <em>mindsets matched</em> - that when difficult decisions arose,
          they would resolve them the same way.
        </p>

        <p className={PARAGRAPH_CLASSES}>
          The mathematics of running a dialysis unit in Mumbai looked
          impossible. Real estate costs in the city were among the highest in
          India. Dialysis machines were expensive. Consumables were imported.
          The session pricing patients could afford did not cover the cost of
          doing the work to international standards.{" "}
          <em>
            Quality dialysis, by itself, is not a profit-making venture - even
            before real estate costs are factored in.
          </em>
        </p>

        <p className={PARAGRAPH_CLASSES}>
          For four years, the group met without much to show for it. No
          premises. No machines. No patients. Just conversations about how the
          institution should work, what its principles needed to be, and who
          would do what when the work began. It was, in retrospect, the most
          important part of the whole story.{" "}
          <em>
            The four years of preparation were what made the eighteen years that
            followed possible.
          </em>
        </p>
      </div>

      <aside className="mt-10 border-l-4 border-primary-subtle bg-secondary/5 p-6 lg:mt-12 lg:px-8">
        <p className={PARAGRAPH_CLASSES}>
          <strong className="font-semibold">
            Most institutions are built by people who haven&apos;t talked to
            each other long enough.
          </strong>{" "}
          AKC was built by people who had.
        </p>
      </aside>
    </section>
  );
};

export default ChapterTwoSection;
