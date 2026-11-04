import type { ReactNode } from "react";

import { cn } from "@/lib";

export type SafetyRule = {
  id: string;
  /** The bolded opening clause of the rule. */
  lead: string;
  /** The rest of the line, set after the bold lead. */
  rest: ReactNode;
};

export type SafetyRuleTone = "never" | "daily";

const SafetyRuleCard = ({
  rule,
  tone,
}: {
  rule: SafetyRule;
  tone: SafetyRuleTone;
}) => (
  <li className="relative py-1 pl-7 font-roboto text-[14.5px] leading-[1.65] text-[rgba(251,248,243,0.78)]">
    <span
      aria-hidden="true"
      className={cn(
        "absolute top-0 left-0 flex size-5 items-center justify-center rounded-full text-xs leading-none font-semibold text-[#F5F0E8]",
        // Only the "never" marker gets a filled circle: `.safety-list li::before`
        // uses `var(--rose)`, which is defined. `.dailyok-list li::before` uses
        // `var(--green-pulse)`, which is not — so the tick glyph shows with no disc.
        tone === "never" && "bg-[#B5495B]",
      )}
    >
      {tone === "never" ? "⨯" : "✓"}
    </span>
    <strong className="font-medium text-white">{rule.lead}</strong> {rule.rest}
  </li>
);

export default SafetyRuleCard;
