import { Eyebrow } from "@/components";
import { cn } from "@/lib";

/** Page gutter for this route. */
const GOV_GUTTER = "px-6 sm:px-10 lg:px-15";

const CI_TITLE =
  "font-cormorant text-[clamp(36px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black";

const LABEL =
  "mb-5 text-sm leading-[normal] text-black [&>span]:w-6 [&>span]:opacity-100";

const TITLE_EM = "text-primary-subtle italic";

const CIVIC_WASH =
  "bg-[radial-gradient(ellipse_55%_60%_at_90%_20%,rgba(0,117,169,0.18)_0%,transparent_65%),radial-gradient(ellipse_45%_50%_at_5%_90%,rgba(229,192,123,0.08)_0%,transparent_65%)]";

const CivicThesisSection = () => (
  <section
    id="civic-thesis"
    className={cn(
      "relative scroll-mt-20 overflow-hidden bg-secondary py-[130px]",
      GOV_GUTTER,
    )}
  >
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", CIVIC_WASH)}
    />

    <div className="relative z-[2]">
      <Eyebrow label="The Civic Thesis" className={cn(LABEL, "text-white")} />

      <p
        className={cn(
          CI_TITLE,
          "mb-4 text-[35px] leading-[45px] tracking-[-0.015em] text-white",
        )}
      >
        AKC offers government and policy partners an{" "}
        <em className={TITLE_EM}>
          <strong className="font-bold">
            institutional ally, not a vendor
          </strong>
        </em>{" "}
        &mdash; one that has spent eighteen years building exactly the kinds of
        infrastructure that kidney care in India needs: a national data
        system, a clinical training pipeline, an operations capability proven
        across schemes, and a clinical voice that has earned the right to speak
        on policy.
        <span className="mt-8 block font-roboto text-[11px] font-bold tracking-[0.22em] text-white/50 uppercase">
          AKC · Public Health Partnership Brief · 2026
        </span>
      </p>
    </div>
  </section>
);

export default CivicThesisSection;
