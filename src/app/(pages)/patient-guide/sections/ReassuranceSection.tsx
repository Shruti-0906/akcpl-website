import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import ReassuranceCard from "../components/ReassuranceCard";
import { REASSURANCES } from "../components/reassurances";

/**
 * The `.reassure` band. The source ships it as a bare `<div>` between the hero
 * and Chapter One; here it becomes a real `<section>` so the page keeps a flat,
 * landmark-friendly structure. The source never sets its own background here -
 * it relies on the site's navy `body` background showing through the grid gap
 * and padding around the cards, so this section sets that navy explicitly.
 */
const ReassuranceSection = () => (
  <section
    className={cn(
      "grid grid-cols-1 gap-3.5 bg-secondary py-7.5 lg:grid-cols-3",
      GUTTER,
    )}
  >
    {REASSURANCES.map((reassurance, index) => (
      <div key={index} className="h-full">
        <ReassuranceCard reassurance={reassurance} index={index} />
      </div>
    ))}
  </section>
);

export default ReassuranceSection;
