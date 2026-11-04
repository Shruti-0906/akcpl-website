import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import ChapterHeader from "../components/ChapterHeader";

/**
 * The red-flag signs, each a bolded lead phrase plus the qualifying detail
 * that follows it in the source list.
 */
const RED_FLAGS = [
  { lead: "The thrill is weak or absent", rest: " for the first time" },
  { lead: "The bruit (whooshing sound) has stopped", rest: "" },
  { lead: "Redness, warmth, or swelling", rest: " around the access" },
  { lead: "Pus or unusual drainage", rest: " from the access site" },
  { lead: "Fever, chills, or feeling unwell", rest: " with any catheter" },
  {
    lead: "Persistent bleeding",
    rest: " from the access site after dialysis",
  },
  {
    lead: "Sudden swelling",
    rest: " of the access arm, hand, face, or neck",
  },
  {
    lead: "Cold, numb, painful, or bluish fingers",
    rest: " on the access hand",
  },
  { lead: "Severe pain", rest: " in the access arm or chest" },
  { lead: "Any change you cannot explain", rest: " — trust your instinct" },
] as const;

const RedFlagsSection = () => (
  <section className={cn("relative scroll-mt-36 bg-white py-27.5", GUTTER)}>
    <div className="relative z-2">
      <ChapterHeader
        roman="V"
        label="When to call us immediately"
        title={
          <>
            Signs that{" "}
            <em className="text-primary-subtle italic">cannot wait.</em>
          </>
        }
      >
        <p>
          If you notice any of the following,{" "}
          <strong>
            call your AKC vascular access team the same day &mdash; even if
            it&rsquo;s evening, even if it&rsquo;s a weekend.
          </strong>{" "}
          Many access problems are completely fixable if caught within hours,
          and permanently damaging if caught a few days later.{" "}
          <em>
            Trust your instinct &mdash; if something feels wrong, get checked.
          </em>
        </p>
      </ChapterHeader>

      <div className="mt-9 rounded-[2px] border border-l-4 border-[#B5495B] bg-white px-6 py-9 sm:px-10">
        <span className="mb-3.5 inline-flex items-center gap-2 font-roboto text-[10.5px] font-semibold tracking-[0.22em] text-[#B5495B] uppercase">
          <span
            aria-hidden="true"
            className="size-1.5 shrink-0 rounded-full bg-[#B5495B]"
          />
          Same-day medical attention
        </span>

        <h3 className="mb-4 font-cormorant text-[32px] leading-[1.05] font-bold tracking-[-0.015em] text-black">
          Call us <em className="text-primary-subtle italic">immediately</em> if
          you notice
        </h3>
        <p className="mb-3.75 font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
          For any of the following, do not wait for your next dialysis session.
        </p>

        <ul className="grid list-none grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
          {RED_FLAGS.map((flag) => (
            <li
              key={flag.lead}
              // `.flags-list li { color: var(--ink-soft) }` — undefined, so `color`
              // falls back to inheritance. Nothing between here and `body` sets one,
              // so the text lands on `body { color: var(--white) }`: white on the
              // white `.flags` panel. Only the bold lead below stays legible.
              className="relative py-1.5 pl-5.5 font-roboto text-[17px] leading-[1.65] text-white"
            >
              <span
                aria-hidden="true"
                className="absolute top-3.5 left-0 size-2 rounded-full bg-[#B5495B]"
              />
              <strong className="font-medium text-secondary">
                {flag.lead}
              </strong>
              {flag.rest}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default RedFlagsSection;
