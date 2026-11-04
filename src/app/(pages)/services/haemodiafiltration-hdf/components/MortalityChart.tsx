import { cn } from "@/lib";

/** Bar widths are relative to the higher figure, as on the source page. */
const BARS = [
  {
    label: "Standard dialysis (HD)",
    value: "21.9%",
    width: 100,
    valueClass: "text-[#EF4444]",
    fillClass: "bg-linear-to-r from-[#B91C1C] to-[#EF4444]",
  },
  {
    label: "High-dose HDF",
    value: "17.3%",
    width: 79,
    /**
     * The source colours this row and its bar with `var(--teal-lt)`, a
     * variable it never defines. The percentage therefore falls back to the
     * inherited white, and the bar's gradient is dropped as invalid - which
     * is why no HDF bar shows on the original page.
     */
    valueClass: "text-white",
    fillClass: "",
  },
] as const;

const MortalityChart = () => (
  <div className="rounded-[18px] border border-white/[0.09] bg-white/[0.03] px-7.5 py-8.5">
    {BARS.map((bar, index) => (
      <div key={bar.label} className={index === 0 ? "mb-6.5" : undefined}>
        <div className="mb-2 flex items-baseline justify-between">
          <span className="font-roboto text-sm font-bold">{bar.label}</span>
          <span
            className={cn("font-roboto text-2xl font-bold", bar.valueClass)}
          >
            {bar.value}
          </span>
        </div>
        <div className="h-[5px] overflow-hidden rounded-lg bg-white/[0.07]">
          <div
            className={cn("h-full rounded-lg", bar.fillClass)}
            style={{ width: `${bar.width}%` }}
          />
        </div>
      </div>
    ))}

    <p className="mt-1.5 font-roboto text-xs text-white/50">
      Survival Probability
    </p>
  </div>
);

export default MortalityChart;
