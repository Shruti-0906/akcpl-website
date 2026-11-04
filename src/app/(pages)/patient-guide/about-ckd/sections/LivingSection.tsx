import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import ChapterHeader from "../components/ChapterHeader";
import IconCard from "../components/IconCard";
import { LIVING_AREAS } from "../components/livingAreas";
import { CHAPTER } from "../components/text";

/**
 * Chapter Seven, `.chap-sage`: CKD folded back into an ordinary life, across
 * six everyday areas. The page's inline `<style>` and the source's own inline
 * `color:#000` both keep this label black on the teal-mist background, so
 * `ChapterHeader` is left uninverted here.
 */
const LivingSection = () => (
  <section className={cn(CHAPTER, "bg-[#e0f2f9]", GUTTER)}>
    <div>
      <ChapterHeader
        roman="VII"
        label="Chapter Seven · Living with CKD"
        title={
          <>
            CKD becomes <em>part of life,</em> not the whole of it.
          </>
        }
      >
        <p>
          Most of the work of living with CKD is small, daily, repeated.{" "}
          <strong>
            It becomes routine &mdash; like brushing your teeth, or wearing a
            seatbelt.
          </strong>{" "}
          After a few months, the diet, the BP check, the medication schedule
          simply become how you live. The diagnosis fades from being the centre
          of your life back to being one part of it.
        </p>
      </ChapterHeader>
    </div>

    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {LIVING_AREAS.map((item, index) => (
        <div key={item.id} className="h-full">
          <IconCard item={item} index={index} />
        </div>
      ))}
    </div>
  </section>
);

export default LivingSection;
