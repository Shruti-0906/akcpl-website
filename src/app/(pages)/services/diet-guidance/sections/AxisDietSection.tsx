import { GUTTER } from "@/constants";

/** Reference .axis-mockup / .wb-card dark panel fill. */
const DARK_PANEL =
  "bg-[linear-gradient(135deg,rgb(0_62_104),rgb(0_26_44))] border border-[#002238]";

const NAV_GROUPS = [
  {
    label: "Nutrition",
    items: [
      { icon: "🍽️", label: "Diet Prescription", active: true },
      { icon: "📅", label: "Weekly Menu" },
      { icon: "📊", label: "Lab ↔ Diet Trend" },
      { icon: "📚", label: "Recipe Library" },
    ],
  },
  {
    label: "Patient",
    items: [
      { icon: "👤", label: "Profile & Preferences" },
      { icon: "🛒", label: "Shopping Guide" },
      { icon: "📱", label: "Send to App" },
    ],
  },
  {
    label: "Reports",
    items: [{ icon: "📋", label: "Monthly Nutrition Report" }],
  },
] as const;

const TARGETS = [
  { value: "0.8g/kg", label: "Protein/day", color: "text-[#FCD34D]" },
  { value: "2,000mg", label: "Potassium max", color: "text-[#FCA5A5]" },
  { value: "800mg", label: "Phosphorus max", color: "text-[#6EE7B7]" },
  { value: "1,500ml", label: "Fluid/day", color: "text-[#93C5FD]" },
] as const;

const MEALS = [
  {
    label: "Breakfast",
    dish: "Oats Upma",
    note: "Oats Upma + Raw Tofu (40 g)",
    kcal: "✓ 450 kcal",
  },
  {
    label: "Lunch",
    dish: "Steamed Rice + Moong Dal + Leached Beans",
    note: "1 cup rice, moderate portion",
    kcal: "✓ 550 kcal",
  },
  {
    label: "Snack",
    dish: "Arrowroot biscuits + Apple (peeled)",
    note: "Low-K fruit choice",
    kcal: "✓ 180 kcal",
  },
  {
    label: "Dinner",
    dish: "2 Rotis + Egg White Bhurji + Gourd Sabzi",
    note: "Rice Roti, low-K vegetables",
    kcal: "✓ 580 kcal",
  },
] as const;

const WORKFLOW = [
  {
    title: "Nephrologist Prescribes in AXIS",
    body: "During the monthly clinical review, the nephrologist prescribes specific dietary targets — potassium, phosphorus, protein, fluid, sodium — directly in AXIS, linked to the patient's latest lab results. The prescription updates automatically when labs change.",
  },
  {
    title: "Dietitian Curates the Menu",
    body: "Within 48 hours, the renal dietitian opens the AXIS diet module, reviews the prescription and the patient's cultural background and food preferences, and curates a 7-day personalised menu from AKC's library of 200+ renal-safe Indian recipes.",
  },
  {
    title: "Labs ↔ Diet Correlation Tracking",
    body: "AXIS automatically flags when a patient's potassium or phosphorus trends upward — cross-referencing with the diet log to identify likely dietary contributors and alerting the dietitian to schedule a review before the next clinical session.",
  },
] as const;

const AxisDietSection = () => (
  <section id="axis" className={`bg-[#e0f2f9] py-16 lg:py-30 ${GUTTER}`}>
    <div className="mx-auto max-w-7xl">
      <div className="mb-12">
        <div className="mb-5 flex items-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
          <span className="h-px w-6 bg-black" />
          AXIS Diet Module
        </div>
        <h2 className="font-cormorant text-[clamp(2.25rem,4vw,3.625rem)] leading-[1.1] font-bold text-black">
          From prescription to plate{" "}
          <span className="text-primary-subtle italic">— in one system.</span>
        </h2>
        <p className="mt-5 font-roboto text-[15px] leading-[1.75] text-[#393f42]">
          The AXIS Diet Module connects the nephrologist&apos;s clinical
          prescription directly to the dietitian&apos;s menu planning — so every
          meal recommendation is perfectly calibrated to the patient&apos;s
          labs, stage, comorbidities and cultural preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-18">
        <div className={`overflow-hidden rounded-2xl ${DARK_PANEL}`}>
          <div className="flex flex-wrap items-center gap-3 border-b border-white/8 bg-white/4 px-4.5 py-3.5">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-[#FF5F57]" />
              <span className="size-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="size-2.5 rounded-full bg-[#28C840]" />
            </div>
            <span className="font-roboto text-[11px] font-bold text-white">
              AXIS
            </span>
            <span className="rounded bg-primary/25 px-2 py-0.5 font-roboto text-[9px] tracking-wide text-[#6fb2e1] uppercase">
              Diet &amp; Nutrition Module
            </span>
            <span className="ml-auto font-roboto text-[10px] text-white/45">
              Mrs. K. N. — Renal Dietitian
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr]">
            <aside className="border-b border-white/6 bg-black/25 py-4 sm:border-r sm:border-b-0">
              {NAV_GROUPS.map((group) => (
                <div key={group.label} className="mb-4 last:mb-0">
                  <div className="mb-1.5 px-4 font-roboto text-[9px] font-bold tracking-[0.18em] text-white/30 uppercase">
                    {group.label}
                  </div>
                  <ul>
                    {group.items.map((item) => (
                      <li
                        key={item.label}
                        className={`flex items-center gap-2 px-4 py-1.5 font-roboto text-[11.5px] ${
                          "active" in item && item.active
                            ? "bg-primary/25 text-white"
                            : "text-white/55"
                        }`}
                      >
                        <span aria-hidden="true">{item.icon}</span>
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </aside>

            <div className="p-5.5">
              <div className="font-roboto text-[10px] text-white/35">
                AXIS / Nutrition / Diet Prescription / Mr. Ramesh Pillai
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-3 rounded-lg border border-white/8 bg-white/5 p-3.5">
                <span className="grid size-9 place-items-center rounded-full bg-white/10 text-base">
                  <span aria-hidden="true">👨</span>
                </span>
                <div className="flex-1">
                  <div className="font-roboto text-[12.5px] font-bold text-white">
                    Mr. R. P.
                  </div>
                  <div className="font-roboto text-[9.5px] leading-snug text-white/45">
                    AKC/KCH/2022/04512 · 58 yrs · CKD Stage 4 · eGFR 18 ·
                    Diabetic
                  </div>
                </div>
                <span className="rounded bg-primary/25 px-2 py-1 text-center font-roboto text-[9px] font-bold text-[#6fb2e1]">
                  Stage 4 CKD — Pre-Dialysis
                </span>
              </div>

              <div className="mt-4 mb-2 font-roboto text-[9px] font-bold tracking-[0.18em] text-white/35 uppercase">
                Nephrologist Prescribed Targets
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {TARGETS.map((target) => (
                  <div
                    key={target.label}
                    className="rounded-md border border-white/8 bg-white/5 px-2 py-2.5 text-center"
                  >
                    <div
                      className={`font-roboto text-[14px] leading-none font-bold ${target.color}`}
                    >
                      {target.value}
                    </div>
                    <div className="mt-1 font-roboto text-[9.5px] text-white/50">
                      {target.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 mb-2 font-roboto text-[9px] font-bold tracking-[0.18em] text-white/35 uppercase">
                Dietitian-Curated Menu — Monday
              </div>

              <div className="overflow-hidden rounded-lg border border-white/8 bg-white/4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/8 bg-white/4 px-3.5 py-2.5">
                  <span className="font-roboto text-[10px] font-bold text-white">
                    Monday
                  </span>
                  <span className="font-roboto text-[9px] text-white/45">
                    ~1,800 kcal · K: 1,890mg · P: 740mg · Protein: 45g
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4">
                  {MEALS.map((meal) => (
                    <div
                      key={meal.label}
                      className="border-r border-white/4 px-2.5 py-2.5 last:border-r-0"
                    >
                      <div className="mb-1.5 font-roboto text-[9px] tracking-[1px] text-white/20 uppercase">
                        {meal.label}
                      </div>
                      <div className="font-roboto text-[12px] font-bold text-white/75">
                        {meal.dish}
                      </div>
                      <div className="mt-0.5 font-roboto text-[10px] text-white/50">
                        {meal.note}
                      </div>
                      <div className="mt-1.5 font-roboto text-[10px] text-[#6EE7B7]">
                        {meal.kcal}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <div className="flex-1 rounded-md border border-white/8 bg-white/5 px-3 py-2.5 font-roboto text-[10.5px] text-white/55">
                  🍽️ Full 7-day menu generated · Sent to patient&apos;s MyKidney
                  app
                </div>
                <div className="rounded-md border border-[#22C55E]/30 bg-[#22C55E]/10 px-3 py-2.5 font-roboto text-[10.5px] text-[#6EE7B7]">
                  ✓ All targets met
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4.5">
          {WORKFLOW.map((step) => (
            <div
              key={step.title}
              className={`rounded-[14px] p-5.5 ${DARK_PANEL}`}
            >
              <div>
                <div className="font-cormorant text-2xl font-bold text-white">
                  {step.title}
                </div>
                <p className="mt-1.5 font-roboto text-[17px] leading-[1.65] text-white/50">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AxisDietSection;
