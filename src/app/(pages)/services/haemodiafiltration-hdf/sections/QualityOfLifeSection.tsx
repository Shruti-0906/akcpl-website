import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const CARDS = [
  {
    title: "Sharper thinking",
    body: "Cognitive function declined more slowly on HDF",
  },
  {
    title: "More movement",
    body: "Physical function better preserved over time",
  },
  {
    title: "Staying connected",
    body: "Social participation held up better",
  },
] as const;

const QualityOfLifeSection = () => (
  <section
    className={cn("bg-linear-to-br from-[#d5f3ff] to-white py-22.5", GUTTER)}
  >
    <div className="flex flex-wrap items-center gap-12">
      <div className="min-w-70 flex-1">
        <h2 className="section-heading leading-[1.05] font-bold tracking-[-0.015em] text-black">
          It&rsquo;s not just{" "}
          <em className="text-primary-subtle italic">more years</em>. It&rsquo;s
          better ones.
        </h2>
        <p className="mt-4 font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
          CONVINCE measured how patients actually felt — every three months —
          across physical health, pain, mood, sleep and thinking. The HDF
          group&rsquo;s quality of life slipped more slowly than the
          standard-dialysis group&rsquo;s, with the clearest gap in cognitive
          function: the ability to think clearly and stay engaged.
        </p>
      </div>

      <div className="flex min-w-65 flex-col gap-3.5">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="rounded-[13px] border border-white/25 bg-white/25 px-5.5 py-4.5 text-black"
          >
            <b className="mb-0.75 block font-roboto text-lg font-bold">
              {card.title}
            </b>
            <span className="font-roboto text-[13.5px] text-black/80">
              {card.body}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default QualityOfLifeSection;
