import Image from "next/image";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import ChapterHeader from "../components/ChapterHeader";
import SymptomItem from "../components/SymptomItem";
import { SYMPTOMS } from "../components/symptoms";
import { CHAPTER, CI_BODY, CI_TITLE } from "../components/text";

/**
 * The `.symptoms` box's `.section-label` is never styled on its own — it
 * inherits white from `.chap.chap-cream2 .section-label`, the same rule that
 * whitens the chapter header's label on the navy background above. Sitting on
 * this box's white fill, that makes the label invisible; the live page shows
 * only the heading below it. Reproduced as-is with `text-white` so the DOM
 * text and its line of vertical space still match the source.
 */
const SymptomsSection = () => (
  <section className={cn(CHAPTER, "bg-secondary", GUTTER)}>
    <div>
      <ChapterHeader
        roman="II"
        label="Chapter Two · What you might feel"
        inverted
        title={
          <>
            The body has ways <em>of telling you.</em>
          </>
        }
      />
    </div>

    {/* The chapter's body copy sits beside the photograph rather than under
        the title, so the header above is rendered without children. */}
    <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
      <div>
        <div className="relative aspect-3/2 overflow-hidden rounded-[2px]">
          <Image
            src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/CKD+Page+-+2nd+Image+(Section+2).jpg"
            alt="A side-by-side illustration comparing a healthy kidney with a diseased one"
            fill
            quality={100}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div>
        <div
          className={cn(
            CI_BODY,
            "mb-0 text-[rgba(251,248,243,0.78)] [&>p]:mb-3.75 [&>p:last-child]:mb-0",
          )}
        >
          <p>
            Here is something many people find surprising:{" "}
            <strong>CKD can be silent for a long time.</strong> In the early
            stages, you may feel completely normal. Your kidneys have enormous
            reserve capacity &mdash; you can lose half of one and still function
            fine. So most people are not diagnosed because they &ldquo;felt
            something&rdquo; &mdash; they&rsquo;re diagnosed because{" "}
            <em>a routine blood or urine test showed something unexpected.</em>
          </p>
          <p>
            But as CKD progresses, the body begins to send signals.{" "}
            <strong>None of these symptoms, alone, means you have CKD.</strong>{" "}
            Each can have many other causes. What matters is the pattern, the
            persistence, and the combination &mdash; especially in people who
            already have diabetes or high blood pressure.
          </p>
        </div>
      </div>
    </div>

    <div>
      <div className="relative mt-10 overflow-hidden rounded-[3px] border border-primary-subtle bg-white px-12 py-11">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-0.75 bg-primary-subtle"
        />

        {/* Invisible in the source — see the section-level comment above. */}
        <Eyebrow
          label="// Signals to take seriously"
          className="mb-5 text-white"
        />

        <h3 className={cn(CI_TITLE, "text-4xl lg:text-4xl")}>
          Symptoms that may suggest your kidneys <em>need attention</em>
        </h3>

        <div className="mb-8.75 grid grid-cols-1 sm:grid-cols-2">
          {SYMPTOMS.map((symptom, index) => (
            <SymptomItem key={symptom.id} symptom={symptom} index={index} />
          ))}
        </div>

        <p className={CI_BODY}>
          <strong>
            If you have several of these, especially together, talk to your
            doctor.
          </strong>{" "}
          A simple blood test (for creatinine) and a urine test (for protein)
          can show within hours whether your kidneys need attention. These tests
          are inexpensive, painless, and widely available. There is no good
          reason to wait.
        </p>
      </div>
    </div>
  </section>
);

export default SymptomsSection;
