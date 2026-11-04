import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import LadderRung from "../components/LadderRung";
import { LADDER } from "../components/ladder";

const HierarchySection = () => (
  <section
    id="hierarchy"
    className={cn(
      "relative scroll-mt-36 overflow-hidden bg-secondary py-30 text-[#F5F0E8]",
      GUTTER,
    )}
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_92%_10%,rgba(14,124,123,0.2)_0%,transparent_60%),radial-gradient(ellipse_45%_40%_at_5%_92%,rgba(184,134,11,0.08)_0%,transparent_60%)]"
    />

    <div className="relative z-2">
      <div className="mb-14">
        <Eyebrow label="The Access Hierarchy" className="mb-5 text-white" />
        <h2 className="section-heading leading-[1.05] font-bold tracking-[-0.015em] text-white">
          Why{" "}
          <em className="text-primary-subtle italic">fistula first &mdash;</em>{" "}
          and what that means for you.
        </h2>
        <p className="mt-4 font-roboto text-[17px] leading-[22px] font-light text-[rgba(251,248,243,0.78)]">
          Across the world of nephrology, there is broad agreement on the order
          in which access types should be considered.{" "}
          <strong className="font-bold text-white">
            This isn&rsquo;t a marketing preference &mdash; it&rsquo;s the
            result of decades of patient outcome data.
          </strong>{" "}
          An AV Fistula keeps patients healthier, on dialysis longer, and out of
          hospital more often than any other access type.{" "}
          <em className="text-primary-subtle italic">
            This is the AKC clinical position too.
          </em>
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-3.5">
        {LADDER.map((rung) => (
          <div key={rung.num}>
            <LadderRung rung={rung} />
          </div>
        ))}
      </div>

      <div className="relative mt-9 rounded-[2px] border-l-[3px] border-primary-subtle bg-[rgba(14,124,123,0.06)] px-9 py-8">
        <p className="font-roboto text-[17px] leading-[22px] font-light text-[rgba(251,248,243,0.78)]">
          <strong className="font-bold text-white">
            The most important conversation
          </strong>{" "}
          you can have with your nephrologist before starting dialysis is:{" "}
          <strong className="font-bold text-white">
            &ldquo;What&rsquo;s the plan to get me onto an AV fistula?&rdquo;
          </strong>{" "}
          If the answer is vague, ask again.{" "}
          <em className="text-primary-subtle italic">
            Catheters are bridges. Fistulas are destinations.
          </em>
        </p>
      </div>
    </div>
  </section>
);

export default HierarchySection;
