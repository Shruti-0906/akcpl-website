import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import ChapterHeader from "../components/ChapterHeader";
import SafetyRuleCard from "../components/SafetyRuleCard";
import { DAILY_RULES, NEVER_RULES } from "../components/safetyRules";

const PANEL_TITLE =
  "mb-4 font-cormorant text-[32px] leading-[1.05] font-bold tracking-[-0.015em] text-white";
const RULE_LIST = "grid list-none grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2";

const SafetySection = () => (
  <section
    id="safety"
    className={cn("scroll-mt-36 bg-secondary py-27.5", GUTTER)}
  >
    <ChapterHeader
      roman="IV"
      label="Safety rules"
      inverted
      title={
        <>
          How to{" "}
          <em className="text-primary-subtle italic">
            protect your access arm.
          </em>
        </>
      }
    >
      <p>
        Once your AVF or AVG is created, your access arm{" "}
        <strong>is no longer an ordinary arm.</strong> It carries a lifeline
        that needs protecting from anything that could compress it, damage it,
        or introduce infection. These rules become second nature within a few
        months, but they need to be followed every single day &mdash;{" "}
        <em>for as long as you are on dialysis.</em>
      </p>
    </ChapterHeader>

    <div className="mt-10 rounded-[3px] border border-l-4 border-[#B5495B] bg-[rgba(181,73,91,0.04)] px-6 py-10 sm:px-11">
      <p className="mb-3.5 inline-flex items-center gap-2 font-roboto text-[10.5px] font-semibold tracking-[0.22em] text-[#B5495B] uppercase">
        <span
          aria-hidden="true"
          className="size-1.5 shrink-0 rounded-full bg-[#B5495B]"
        />
        Absolute Rules &middot; Never Allow
      </p>
      <h3 className={PANEL_TITLE}>
        Things <em className="text-primary-subtle italic">nobody</em> may do
        with your access arm.
      </h3>

      <ul className={RULE_LIST}>
        {NEVER_RULES.map((rule) => (
          <SafetyRuleCard key={rule.id} rule={rule} tone="never" />
        ))}
      </ul>
    </div>

    {/* `.dailyok` is borderless: both `border: 1px solid var(--green-soft)` and
        `border-left: 4px solid var(--green-pulse)` name undefined variables, and an
        invalid `border` shorthand unsets `border-style` to `none`. Only the
        translucent green background survives. (The `.safety` block above keeps its
        borders — those use `--rose`, which is defined.) */}
    <div className="mt-6 rounded-[3px] bg-[rgba(45,165,113,0.04)] px-6 py-10 sm:px-11">
      <Eyebrow label="Daily & Safe · Do These" className="mb-5 text-white" />
      <h3 className={PANEL_TITLE}>
        Good <em className="text-primary-subtle italic">daily habits</em> for
        access protection.
      </h3>

      <ul className={RULE_LIST}>
        {DAILY_RULES.map((rule) => (
          <SafetyRuleCard key={rule.id} rule={rule} tone="daily" />
        ))}
      </ul>
    </div>
  </section>
);

export default SafetySection;
