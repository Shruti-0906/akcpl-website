import Image from "next/image";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import ChapterHeader from "../components/ChapterHeader";
import StageRow from "../components/StageRow";
import { STAGES } from "../components/stages";
import { CHAPTER, CI_BODY } from "../components/text";

/**
 * Chapter Three: the five CKD stages by eGFR. The source's `.stage-content`
 * blocks all carry an inline `style="display:block"` despite the base
 * `.stage-content{display:none}` rule, so every stage renders open here -
 * there is no accordion, toggle, or client state to port.
 */
const StagesSection = () => (
  <section className={cn(CHAPTER, "bg-white", GUTTER)}>
    <div>
      <ChapterHeader
        roman="III"
        label="Chapter Three · The five stages"
        title={
          <>
            CKD has <em>five stages.</em> <em>Where you are matters.</em>
          </>
        }
      >
        <p>
          Doctors describe CKD in <strong>five stages</strong>, based on a
          number called <em>eGFR</em> — the estimated glomerular filtration
          rate. It&rsquo;s calculated from a blood creatinine test and tells us,
          roughly, <em>how much filtering work your kidneys can do.</em> A
          healthy eGFR is around 90 or above. Lower numbers mean less filtering
          capacity.
        </p>
        <p>
          Reading what stage you&rsquo;re at is not a moment for panic.{" "}
          <strong>It&rsquo;s a moment for clarity.</strong> Different stages
          need different things. Early stages are about prevention and
          slowing-down. Later stages are about preparation and planning. The
          same person can stay in one stage for many years.
        </p>
      </ChapterHeader>
    </div>

    <div>
      <div id="stage" className="mt-7.5">
        <Eyebrow
          label="// The Five Stages of CKD · By eGFR"
          className="mb-5 text-black"
        />

        {/* The stage table sits beside the banded kidney, which restates the
            same five eGFR thresholds visually. */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-[3px] border border-primary-subtle bg-white py-2 lg:col-span-2">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-0.75 bg-[linear-gradient(90deg,var(--color-primary-subtle),var(--color-secondary),var(--color-primary-subtle))]"
            />

            {STAGES.map((stage, index) => (
              <StageRow key={stage.id} stage={stage} index={index} />
            ))}
          </div>

          {/* The banded kidney restates the same five eGFR thresholds as the
              table beside it. Its own "Chronic kidney disease" title is part
              of the artwork, so there is no separate caption.

              The artwork is portrait but sits on a square canvas with about a
              fifth of the width as blank margin down each side. A taller frame
              crops that dead space so the kidney fills the column instead of
              floating in the top half of it. Past roughly a 3:5 frame the crop
              starts biting into the kidney itself. */}
          <figure className="relative m-0 aspect-3/5 w-full">
            <Image
              src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/CKD+Page+-+3rd+Image+(Section+3).jpg"
              alt="A kidney banded into the five stages of chronic kidney disease by eGFR, from normal at 90% or above down to kidney failure below 15%"
              fill
              quality={100}
              /* Cover scales the square up until its height fills the frame, so
                 the resolution needed is well above the column's own width. */
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </div>
    </div>

    <div className="mt-9 rounded-[2px] border-l-[3px] border-primary-subtle bg-[rgba(14,124,123,0.06)] px-9 py-8">
      <p className={cn(CI_BODY, "mb-0")}>
        <strong>The crucial thing to understand:</strong> being in an early
        stage does not automatically mean you will reach a later one.{" "}
        <strong>Many people stay in Stage 2 or 3 for decades.</strong> What you
        do from this point onwards matters far more than which stage you happen
        to be in today.
      </p>
    </div>
  </section>
);

export default StagesSection;
