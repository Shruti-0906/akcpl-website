import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import ChapterHeader from "../components/ChapterHeader";
import ComplicationCard from "../components/ComplicationCard";
import { COMPLICATIONS } from "../components/complications";

const GRID = "mt-10 grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-4";

const ComplicationsSection = () => (
  <section
    id="complications"
    className={cn("scroll-mt-36 bg-white py-27.5", GUTTER)}
  >
    <div>
      <ChapterHeader
        roman="II"
        label="What can go wrong"
        title={
          <>
            Complications &mdash;{" "}
            <em className="text-primary-subtle italic">
              and what they look like.
            </em>
          </>
        }
      >
        <p>
          Every type of vascular access can run into problems.{" "}
          <strong>Most of these problems can be fixed if caught early</strong>{" "}
          &mdash; sometimes with a simple angioplasty, sometimes with revision
          surgery, sometimes just with antibiotics.{" "}
          <em>What matters most is recognising them quickly.</em> Below are the
          complications you should know about, what they feel like or look like,
          and which access types they affect.
        </p>
      </ChapterHeader>
    </div>

    <div className={GRID}>
      {COMPLICATIONS.slice(0, 4).map((complication) => (
        <div key={complication.id} className="h-full">
          <ComplicationCard complication={complication} />
        </div>
      ))}
    </div>

    <div className={GRID}>
      {COMPLICATIONS.slice(4).map((complication) => (
        <div key={complication.id} className="h-full">
          <ComplicationCard complication={complication} />
        </div>
      ))}
    </div>

    <div className="mt-9 rounded-[2px] border-l-[3px] border-primary-subtle bg-[rgba(14,124,123,0.06)] px-9 py-8">
      <p className="font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic">
        <strong>The single biggest predictor</strong> of whether a complication
        is fixable or catastrophic is{" "}
        <strong>how quickly it&rsquo;s caught.</strong> Most stenoses,
        infections, and early thromboses are <em>completely fixable</em> when
        reported the same day &mdash; and irreversible when reported a week
        later.
      </p>
    </div>
  </section>
);

export default ComplicationsSection;
