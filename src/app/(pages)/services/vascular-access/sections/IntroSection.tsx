import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import ChapterHeader from "../components/ChapterHeader";

const IntroSection = () => (
  <section className={cn("scroll-mt-36 bg-white py-27.5", GUTTER)}>
    <div>
      <ChapterHeader
        roman="I"
        label="Why this matters"
        title={
          <>
            The most important{" "}
            <em className="text-primary-subtle italic">medical decision</em> on
            your journey.
          </>
        }
      >
        <p>
          If you are starting hemodialysis &mdash; or someone you love is
          &mdash; the single most important medical decision in the months ahead
          is what type of vascular access to create, and when.
        </p>
        <p>
          Hemodialysis works by drawing your blood out of your body, cleaning
          it through a filter, and returning it. To do this, the machine needs a
          reliable way to take large volumes of blood out &mdash; around{" "}
          <strong>300 to 400 millilitres every minute</strong> &mdash; and to
          return it just as quickly. Ordinary veins cannot handle these flows.
          They are too small, too deep, and too fragile.
        </p>
        <p>
          So the surgeon creates a <em>vascular access</em> &mdash; a specially
          engineered point of connection between your bloodstream and the
          dialysis machine. <strong>There are four main types,</strong> and each
          has its place. The rest of this page walks you through every one of
          them.
        </p>
      </ChapterHeader>
    </div>
  </section>
);

export default IntroSection;
