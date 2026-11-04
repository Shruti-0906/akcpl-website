import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import ChapterHeader from "../components/ChapterHeader";
import MythCard from "../components/MythCard";
import { MYTHS } from "../components/myths";
import { CHAPTER } from "../components/text";

/**
 * Chapter IV: the navy `.chap-navy` chapter debunking the four most common
 * CKD misconceptions, closed with a `.gentle-pull` summary quote.
 */
const MythsSection = () => (
  <section className={cn(CHAPTER, "overflow-hidden bg-secondary", GUTTER)}>
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-chapter-glow"
    />

    <div className="relative z-2">
      <div>
        <ChapterHeader
          roman="IV"
          label="Chapter Four · What CKD is not"
          inverted
          title={
            <>
              Some things <em>you&rsquo;ve probably heard.</em> Most of them
              aren&rsquo;t true.
            </>
          }
        >
          <p>
            When people are diagnosed with CKD, friends and relatives mean well
            &mdash; but the information they share is often wrong, or out of
            date, or applies to a different stage of the disease. Some of the
            most common things you&rsquo;ll hear are simply not true.
          </p>
          <p>
            Here are four of the most common misconceptions, addressed plainly.
          </p>
        </ChapterHeader>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {MYTHS.map((myth, index) => (
          <div key={index} className="h-full">
            <MythCard myth={myth} />
          </div>
        ))}
      </div>

      <div>
        <div className="my-9 rounded-[0_2px_2px_0] border-l-[3px] border-primary-light bg-[rgba(14,124,123,0.08)] px-10 py-8">
          <p className="font-roboto text-lg leading-[1.45] font-light tracking-[-0.005em] text-[#F5F0E8] italic [&_strong]:font-normal [&_strong]:text-primary-light [&_strong]:not-italic">
            <strong>The headline:</strong> CKD is a manageable, long-term
            condition for most people who have it. It is not a death sentence.
            It is not a guarantee of dialysis.{" "}
            <strong>
              It is a signal that your kidneys need attention &mdash; and that
              attention works.
            </strong>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default MythsSection;
