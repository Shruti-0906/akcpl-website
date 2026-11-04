import Image from "next/image";

import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import IconCard from "../components/IconCard";
import { KIDNEY_JOBS } from "../components/kidneyJobs";
import { CHAPTER, CI_BODY, CI_TITLE } from "../components/text";

/**
 * Reading order of the two-column card grid, as indices into `KIDNEY_JOBS`.
 *
 * The grid runs Filter / Balance, then Red blood cells / Bones, then Blood
 * pressure / Chemistry, which is not the order the data is declared in. Each
 * card keeps the tint it takes from its own position in `KIDNEY_JOBS`, so the
 * original index is passed through rather than the position in this array.
 */
const CARD_ORDER = [0, 1, 3, 4, 2, 5] as const;

/**
 * Chapter I opener: the CKD title, the "what your kidneys do" standfirst, the
 * six-job grid, and the closing `.area-offer` note. No `ChapterHeader` here -
 * the source gives this section a plain `.ci-title` instead of the roman
 * numeral pattern the later chapters use.
 */
const IntroSection = () => (
  /*
   * No top padding on the first section, unlike the other chapters. The source
   * stacks `.chap`'s 110px with the h1's own 90px margin, but its nav and
   * breadcrumb are `position: fixed` and cover the top ~115px of that, so a
   * visitor only ever sees about 85px. Ours are sticky and sit in flow, so
   * keeping the 110px would show the whole 200px as a gap under the crumb.
   */
  <section className={cn(CHAPTER, "bg-white pt-0", GUTTER)}>
    <h1 className={cn(CI_TITLE, "mt-22.5 mb-0")}>
      Chronic Kidney Disease <em>(CKD)</em>
    </h1>

    {/*
     * Plain heading, not `CI_TITLE` - its `em` is sage-deep bold, not
     * `CI_TITLE`'s teal italic.
     */}
    <h2 className="mt-8.75 mb-2 font-roboto text-2xl leading-[1.2] font-bold tracking-[-0.012em] text-secondary">
      What your kidneys actually do{" "}
      <em className="font-bold text-[#5C7766] italic">every day</em>
    </h2>

    <p className="mb-2 font-roboto text-[15px] text-[#393f42] italic">
      Most people think &ldquo;kidneys make urine.&rdquo; That&rsquo;s true
      &mdash; but it&rsquo;s about a fifth of the job. Here&rsquo;s the rest of
      what they&rsquo;re quietly doing.
    </p>

    <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
        {CARD_ORDER.map((jobIndex) => {
          const item = KIDNEY_JOBS[jobIndex];
          if (!item) return null;

          return (
            <div key={item.id} className="h-full">
              <IconCard item={item} index={jobIndex} />
            </div>
          );
        })}
      </div>

      <div className="h-full">
        <div className="relative h-full min-h-[280px] overflow-hidden rounded-[2px]">
          <Image
            src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/CKD+Page+-+1st+Image+(Section+1).jpg"
            alt="A clinician reaching towards a projected anatomical illustration of the kidneys, ureters and bladder"
            fill
            quality={100}
            /* The column is a third of the width but far taller than it is
               wide, so `object-cover` crops the sides and the height sets the
               resolution needed. Asking for a third would upscale it. */
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>

    <div>
      <div className="mt-9 rounded-[2px] border-l-[3px] border-primary-subtle bg-[rgba(14,124,123,0.06)] px-9 py-8">
        <p className={cn(CI_BODY, "mb-0")}>
          When you understand <strong>how much your kidneys do,</strong> CKD
          stops sounding like a single problem and starts sounding like what it
          actually is &mdash;{" "}
          <strong>a set of jobs that need a little help.</strong>
        </p>
      </div>
    </div>
  </section>
);

export default IntroSection;
