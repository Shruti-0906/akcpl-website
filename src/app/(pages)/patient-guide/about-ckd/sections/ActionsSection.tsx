import Image from "next/image";

import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import ActionCard from "../components/ActionCard";
import { ACTIONS } from "../components/actions";
import ChapterHeader from "../components/ChapterHeader";
import { CHAPTER } from "../components/text";

/** Chapter Five, `#what-to-do`: the six things that make a real difference. */
const ActionsSection = () => (
  <section id="what-to-do" className={cn(CHAPTER, "bg-white", GUTTER)}>
    {/* The chapter header shares the top of the section with a photograph,
        with the six cards running full width beneath. */}
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
      <div>
        <ChapterHeader
          roman="V"
          label="Chapter Five · What you can do"
          title={
            <>
              Six things that <em>make a real difference.</em>
            </>
          }
        >
          <p>
            If you take nothing else from this page, take these six things. They
            are the things that, in clinical practice, repeatedly slow CKD
            &mdash; sometimes dramatically &mdash; in people who do them
            consistently. None of them is dramatic on its own.{" "}
            <em>Their power is in doing them all, every day, for years.</em>
          </p>
        </ChapterHeader>
      </div>

      <div>
        <div className="relative aspect-4/3 overflow-hidden rounded-[2px]">
          <Image
            src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/CKD+Page+-+4th+Image+(Section+5).jpg"
            alt="An adult's and a child's cupped hands together holding a paper kidney cut-out"
            fill
            quality={100}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>

    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {ACTIONS.map((action, index) => (
        <div key={action.id} className="h-full">
          <ActionCard action={action} index={index} />
        </div>
      ))}
    </div>
  </section>
);

export default ActionsSection;
