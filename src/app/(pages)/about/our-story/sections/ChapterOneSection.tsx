import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const PARAGRAPHS = [
  "At the Western Zone conference of the Indian Society of Nephrology in Nagpur in 2003, four young Mumbai nephrologists found themselves talking on the sidelines. A couple of them had returned recently from training fellowships in Canada and Australia. They had seen what dialysis looked like in countries where the system worked. They knew what India's dialysis sector looked like by comparison.",
  "The gap was not subtle. The infrastructure was thin. Quality varied wildly between centres. Patients lived with treatments that fell well short of international standards. Nephrologists practising in Mumbai's tertiary hospitals saw the same patients arrive over and over with the same problems - problems that better-organised dialysis would have prevented.",
  "The conversation that week began as the kind that happens at every conference: “someone should really do something about this.” What was unusual was that this conversation did not stop when the conference ended. It carried on the following week. And the week after.",
] as const;

const ChapterOneSection = () => {
  return (
    <section id="chapter-one" className={cn("bg-white py-12 lg:py-16", GUTTER)}>
      <div className="flex gap-8 lg:gap-14">
        <div
          aria-hidden="true"
          className="flex shrink-0 flex-col items-start gap-4"
        >
          <span className="font-cormorant text-5xl leading-none text-black italic lg:text-6xl">
            I
          </span>
          <span className="block h-px w-10 bg-black/30" />
        </div>

        <div className="flex flex-col gap-4">
          <Eyebrow label="Chapter One · Nagpur, 2003" />
          <h2 className="section-heading text-black">
            The meeting{" "}
            <span className="text-primary-subtle italic">
              on the sidelines.
            </span>
          </h2>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-5 lg:mt-10">
        {PARAGRAPHS.map((paragraph, index) => (
          <p
            key={index}
            className="font-roboto text-sm leading-relaxed text-black sm:text-base"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <aside className="mt-10 border-l-4 border-primary bg-primary-subtle/5 p-6 lg:mt-12 lg:px-8">
        <p className="font-roboto text-sm leading-relaxed text-black sm:text-base">
          <strong className="font-semibold">
            The plan was simple to say and hard to do.
          </strong>{" "}
          Build a stand-alone dialysis centre in Mumbai - led by nephrologists,
          run to international standards, and structured so that the
          patient&apos;s interest came before everything else.
        </p>
        <p className="mt-1 font-roboto text-sm leading-relaxed text-black sm:text-base">
          - The Founding Premise · 2003
        </p>
      </aside>
    </section>
  );
};

export default ChapterOneSection;
