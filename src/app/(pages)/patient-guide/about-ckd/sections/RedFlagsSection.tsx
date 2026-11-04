import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import ChapterHeader from "../components/ChapterHeader";
import { RED_FLAGS } from "../components/redFlags";
import { CHAPTER, CI_BODY, CI_TITLE } from "../components/text";

/**
 * Chapter VI, `.chap-cream2`: the source's navy same-day red-flags chapter.
 * The white `.flagslisted` box keeps its rose left rule, but drops the
 * shorthand `border:1px solid var(--rule)` from the same declaration -
 * `--rule` is never defined in style.css, so that half of the rule is
 * invalid and never painted.
 */
const RedFlagsSection = () => (
  <section className={cn(CHAPTER, "bg-secondary", GUTTER)}>
    <div>
      <ChapterHeader
        roman="VI"
        label="Chapter Six · When to act quickly"
        inverted
        title={
          <>
            Signs that <em>should not wait.</em>
          </>
        }
      >
        <p>
          Most of what we&rsquo;ve covered so far is about long-term management
          &mdash; things you build into your life over weeks and months. But
          there are some signs that should prompt you to{" "}
          <strong>
            call your nephrologist or go to a hospital the same day.
          </strong>
        </p>
      </ChapterHeader>
    </div>

    <div>
      <div className="relative mt-9 rounded-[2px] border-l-4 border-l-[#B5495B] bg-white px-10 py-9">
        <Eyebrow
          label="Same-day medical attention"
          className="mb-5 text-black"
        />

        <h3 className={cn(CI_TITLE, "text-[32px] lg:text-[32px]")}>
          Do not wait if you experience <em>any of these</em>
        </h3>

        <ul className="grid list-none grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 [&_strong]:font-normal [&_strong]:text-black">
          {RED_FLAGS.map((flag, index) => (
            <li
              key={index}
              className="relative py-1.5 pl-[22px] font-roboto text-[17px] leading-[1.65] font-normal text-[#393f42]"
            >
              <span
                aria-hidden="true"
                className="absolute top-3.5 left-0 size-2 rounded-full bg-[#B5495B]"
              />
              {flag}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <p className={cn(CI_BODY, "mt-7.5 text-[rgba(251,248,243,0.78)]")}>
      <strong>These can be signs of acute deterioration</strong> &mdash;
      sometimes from infection, dehydration, a medication problem, or a fluid
      imbalance. <em>They are usually treatable when caught quickly.</em> Trust
      your instinct &mdash; if something feels seriously wrong, get checked.
    </p>
  </section>
);

export default RedFlagsSection;
