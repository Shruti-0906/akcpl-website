import { Eyebrow } from "@/components";
import { cn } from "@/lib";

import PhaseSection from "../components/PhaseSection";
import { CI_BODY, CI_TITLE } from "../components/text";

const PhaseSurgerySection = () => (
  <PhaseSection id="area-3" roman="III" phaseLabel="Phase Three">
    <div>
      <Eyebrow label="The Day Itself" className="mb-5 text-black" />

      <h2 className={cn(CI_TITLE, "mb-4")}>
        Surgery <em>&amp; Recovery</em>
      </h2>

      <p className={CI_BODY}>
        The operation itself is now routine in experienced hands. What matters
        most is the surgical team, the centre, and the careful weeks that
        follow.
      </p>

      <p className={CI_BODY}>
        A kidney transplant typically takes <strong>three to four hours</strong>
        . The new kidney is placed in the lower abdomen, usually on the right or
        left side &mdash; your own kidneys are almost always left in place. Most
        centres in India have decades of experience; in expert hands, the
        surgery has become reassuringly predictable.
      </p>

      <p className={CI_BODY}>
        You can expect a hospital stay of <strong>five to ten days</strong>,
        with the new kidney often beginning to work within hours. The first few
        weeks at home involve frequent blood tests, careful infection
        precautions, and the start of immunosuppressive medications &mdash; the
        drugs that will protect your new kidney from your own immune system for
        as long as you have it.
      </p>
    </div>
  </PhaseSection>
);

export default PhaseSurgerySection;
