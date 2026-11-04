import { GUTTER } from "@/constants";
import { cn } from "@/lib";

/** Reference .wb-card / .why-science-visual dark panel fill. */
const DARK_PANEL =
  "bg-[linear-gradient(135deg,rgb(0_62_104),rgb(0_26_44))] border border-[#002238]";

const SLIDERS = [
  {
    name: "🍌 Potassium",
    value: "2,850 mg/day → Target: 2,000",
    valueColor: "text-[#FCA5A5]",
    fill: "90%",
    gradient: "linear-gradient(to right,#EF4444,#FCA5A5)",
    target: "67%",
    note: "Action: Remove banana, potato — add cabbage, apple",
  },
  {
    name: "🥛 Phosphorus",
    value: "780 mg/day → Target: 800",
    valueColor: "text-[#FCD34D]",
    fill: "73%",
    gradient: "linear-gradient(to right,#EAB308,#FCD34D)",
    target: "75%",
    note: "Near target — continue limiting dairy to 1 cup/day",
  },
  {
    name: "🥩 Protein",
    value: "42g/day",
    valueColor: "text-[#6EE7B7]",
    fill: "65%",
    gradient: "linear-gradient(to right,#22C55E,#86EFAC)",
    target: "62%",
    note: "✓ Optimal — high-biological-value proteins maintained",
  },
  {
    name: "💧 Fluid Intake",
    value: "1,800 ml/day → as per urine output",
    valueColor: "text-[#FCA5A5]",
    fill: "85%",
    gradient: "linear-gradient(to right,#3B82F6,#93C5FD)",
    target: "56%",
    note: "Action: Reduce chaas — use small cups for water",
  },
] as const;

const LABS = [
  { value: "5.8", color: "text-[#FCA5A5]", label: "Serum K+ (mEq/L)" },
  { value: "4.2", color: "text-[#FCD34D]", label: "Phosphorus (mg/dL)" },
  { value: "3.8", color: "text-[#6EE7B7]", label: "Albumin (g/dL)" },
] as const;

const BELIEFS = [
  {
    title: "Diet Directly Changes Your Lab Results",
    body: "High potassium foods raise your serum K+ — which can cause life-threatening cardiac arrhythmias. Excess phosphorus damages blood vessels. Too much protein accelerates kidney function loss. The right diet is as powerful as any medication — and AXIS tracks the connection in real time.",
  },
  {
    title: "Good Nutrition Slows CKD Progression",
    body: "Studies show that a well-managed renal diet can slow eGFR decline by 30–40% compared to patients with no dietary guidance. AKC's proactive nutrition programme is not just about managing symptoms — it is about preserving kidney function for as long as possible.",
  },
  {
    title: "Eating Well Improves Quality of Life",
    body: "Malnutrition affects up to 40% of dialysis patients — and is an independent predictor of mortality. AKC's dietitians ensure adequate calorie and protein intake, preventing the muscle wasting and fatigue that make patients feel weak and helpless. Eating well is feeling well.",
  },
] as const;

const WhyDietSection = () => (
  <section id="why" className={`bg-white py-16 lg:py-30 ${GUTTER}`}>
    <div className="mx-auto max-w-7xl">
      <div className="mb-12">
        <div className="mb-5 flex items-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
          <span className="h-px w-6 bg-black" />
          Why Renal Nutrition Matters
        </div>
        <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
          What you eat is what your{" "}
          <span className="text-primary-subtle italic">kidneys process.</span>
        </h2>
        <p className="mt-5 font-roboto text-[15px] leading-[1.75] text-[#393f42]">
          In kidney disease, the foods that are perfectly healthy for others —
          bananas, dairy, whole grains — can dangerously elevate potassium,
          phosphorus or protein in ways that damage your remaining kidney
          function or your heart. The right diet literally protects you.
        </p>
      </div>

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="overflow-hidden rounded-2xl border border-[rgb(223,223,223)] bg-[linear-gradient(135deg,rgb(0_62_104),rgb(0_26_44))]">
          <div className="flex items-center gap-3 border-b border-white/10 px-5 py-3.5">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-[#FF5F57]" />
              <span className="size-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="size-2.5 rounded-full bg-[#28C840]" />
            </div>
            <span className="font-roboto text-[11px] text-white/70">
              AXIS Lab ↔ Diet Correlation — Mr. Suresh, CKD Stage 4
            </span>
          </div>

          <div className="p-5">
            <div className="mb-3.5 font-space-mono text-[9px] tracking-[2px] text-[#6fb2e1] uppercase">
              Nutrient balance — current vs target
            </div>

            <div className="space-y-4">
              {SLIDERS.map((slider) => (
                <div key={slider.name}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <span className="font-roboto text-[13px] font-bold text-white">
                      {slider.name}
                    </span>
                    <span
                      className={`font-roboto text-[11px] ${slider.valueColor}`}
                    >
                      {slider.value}
                    </span>
                  </div>
                  <div className="relative mt-2 h-1.5 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: slider.fill,
                        backgroundImage: slider.gradient,
                      }}
                    />
                    <span
                      className="absolute inset-y-[-3px] w-0.5 bg-white/70"
                      style={{ left: slider.target }}
                    />
                  </div>
                  <div className="mt-1.5 font-roboto text-[11px] text-white/45">
                    {slider.note}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3">
              {LABS.map((lab) => (
                <div
                  key={lab.label}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-center"
                >
                  <div
                    className={`font-roboto text-lg font-bold ${lab.color}`}
                  >
                    {lab.value}
                  </div>
                  <div className="mt-0.5 font-roboto text-[9.5px] text-white/50">
                    {lab.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3.5 rounded-lg border border-secondary-light/60 bg-secondary-light/40 px-3.5 py-3 font-roboto text-[12px] leading-[1.55] text-white/60">
              🤖 <strong className="text-white/80">Insight:</strong> Potassium
              trend up 0.3 mEq/L over 3 months. Diet review triggered. Dietitian
              consultation booked for next session.
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4.5">
          {BELIEFS.map((belief) => (
            <div
              key={belief.title}
              className={cn(
                "rounded-[14px] p-5.5",
                DARK_PANEL,
              )}
            >
              <div>
                <div className="font-cormorant text-2xl font-bold text-white">
                  {belief.title}
                </div>
                <p className="mt-1.5 font-roboto text-[17px] leading-[1.65] text-white/50">
                  {belief.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyDietSection;
