import { Eyebrow } from "@/components";
import { cn } from "@/lib";

import PhaseSection from "../components/PhaseSection";
import { CI_BODY, CI_TITLE } from "../components/text";

const PhaseDonorSection = () => (
  <PhaseSection id="area-2" roman="II" phaseLabel="Phase Two" alt>
    <div>
      <Eyebrow
        label="The Match That Makes It Possible"
        className="mb-5 text-black"
      />

      <h2 className={cn(CI_TITLE, "mb-4")}>
        Finding <em>a Donor</em>
      </h2>

      <p className={CI_BODY}>
        A kidney must come from a willing, consenting family member &mdash; 
        or, with growing frequency,from a deceased donor whose family has
        chosen to give the gift of life.
      </p>

      <p className={CI_BODY}>
        Living donation is the most common route in India and, in many ways, the
        best:{" "}
        <strong>
          living donor kidneys generally function longer and better
        </strong>{" "}
        than those from deceased donors. They allow surgery to be planned, often
        before dialysis ever needs to start &mdash; what is called a{" "}
        <em>pre-emptive transplant</em>.
      </p>

      <p className={CI_BODY}>
        Deceased donation is gathering momentum in India. Through state and
        national networks, patients are registered on a waiting list and matched
        when a suitable kidney becomes available. The wait varies; the gift,
        when it comes, is profound.
      </p>

      <p className={CI_BODY}>
        When a willing living donor isn&rsquo;t a direct match, options remain.{" "}
        <strong>Paired kidney exchange</strong> swaps donors between two or more
        incompatible pairs to create matches for everyone.{" "}
        <strong>ABO-incompatible</strong> and{" "}
        <strong>HLA-desensitisation</strong> protocols at advanced centres can
        also make previously impossible transplants possible.
      </p>
    </div>
  </PhaseSection>
);

export default PhaseDonorSection;
