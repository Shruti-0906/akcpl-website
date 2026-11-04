import { GUTTER } from "@/constants";

import { cn } from "@/lib";

type Tone = "green" | "amber";

const REGIONS = [
  {
    flag: "🌾",
    region: "North Indian",
    title: "Roti & Sabzi Belt",
    dishes: [
      {
        emoji: "🫓",
        name: "Maida / Semolina Roti",
        tag: "Low-K ✓",
        tone: "green",
      },
      {
        emoji: "🥘",
        name: "Lauki / Tinda Sabzi",
        tag: "Low-K ✓",
        tone: "green",
      },
      {
        emoji: "🍚",
        name: "Kheer (arrowroot / rice)",
        tag: "Moderate P",
        tone: "amber",
      },
      {
        emoji: "🥣",
        name: "Moong Dal Tadka (Dal after soaking)",
        tag: "Low-K ✓",
        tone: "green",
      },
      {
        emoji: "🥥",
        name: "Rasgulla / Jalebi",
        tag: "Safe Calorie ✓",
        tone: "green",
      },
    ],
  },
  {
    flag: "🥥",
    region: "South Indian",
    title: "Rice & Rasam Country",
    dishes: [
      {
        emoji: "🥞",
        name: "Semolina / Oat Idli",
        tag: "Low-P ✓",
        tone: "green",
      },
      {
        emoji: "🫙",
        name: "Rasam (without tomato excess)",
        tag: "Moderate",
        tone: "amber",
      },
      {
        emoji: "🍚",
        name: "Steamed White Rice + Ghee",
        tag: "Low-K ✓",
        tone: "green",
      },
      {
        emoji: "🐟",
        name: "Grilled Fish (moderate portion)",
        tag: "HBV Protein ✓",
        tone: "green",
      },
      {
        emoji: "⚪️",
        name: "Appam with Stew (no coconut excess)",
        tag: "Low-K ✓",
        tone: "green",
      },
    ],
  },
  {
    flag: "🫙",
    region: "West Indian",
    title: "Gujarati & Maharashtra",
    dishes: [
      {
        emoji: "🫓",
        name: "Phulka (thin wheat roti)",
        tag: "Moderate K",
        tone: "amber",
      },
      {
        emoji: "🥘",
        name: "Dudhi Sabzi (bottle gourd)",
        tag: "Low-K ✓",
        tone: "green",
      },
      {
        emoji: "🥣",
        name: "Sabudana Khichdi",
        tag: "Safe Calorie ✓",
        tone: "green",
      },
      {
        emoji: "🍶",
        name: "Shrikhand (small portion)",
        tag: "Moderate P",
        tone: "amber",
      },
      {
        emoji: "🥚",
        name: "Egg White Bhurji",
        tag: "HBV Protein ✓",
        tone: "green",
      },
    ],
  },
] as const;

/** Reference .rdt-green / .rdt-amber — amber's colour var is undefined so it inherits. */
const TONES: Record<Tone, string> = {
  green: "bg-[rgba(34,197,94,0.2)] text-[#6EE7B7]",
  amber: "bg-[rgba(234,179,8,0.2)]",
};

const IndianCuisineSection = () => (
  <section id="india" className={`bg-secondary py-16 lg:py-30 ${GUTTER}`}>
    <div className="mb-12">
      <div className="mb-5 font-roboto text-sm tracking-[0.22em] text-white/70 uppercase">
        Good News
      </div>
      <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-white">
        Indian cuisine is{" "}
        <span className="text-[#00b3ff] italic">more renal-friendly</span> than
        you think.
      </h2>
      <p className="mt-5 font-roboto text-[15px] leading-[1.75] text-white/50">
        India&apos;s rich culinary diversity offers hundreds of naturally
        low-potassium, low-phosphorus dishes that need only minor adaptations to
        be fully renal-safe. You don&apos;t have to give up your culture to
        protect your kidneys.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-[22px] lg:grid-cols-3">
      {REGIONS.map((region) => (
        <div
          key={region.region}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/8"
        >
          <div className="px-[22px] pt-[22px] pb-3.5">
            <span className="mb-2 block text-[28px]" aria-hidden="true">
              {region.flag}
            </span>
            <div className="mb-1 font-roboto text-[9px] font-bold tracking-[2.5px] text-white/40 uppercase">
              {region.region}
            </div>
            <div className="font-cormorant text-[22px] font-bold text-white">
              {region.title}
            </div>
          </div>

          <ul className="flex flex-col gap-2 px-[22px] pb-[22px]">
            {region.dishes.map((dish) => (
              <li
                key={dish.name}
                className="flex items-center gap-2.5 rounded-lg bg-white/7 px-3 py-2.5 font-roboto text-[13px] text-white/80"
              >
                <span className="shrink-0 text-[18px]" aria-hidden="true">
                  {dish.emoji}
                </span>
                <span className="flex-1">{dish.name}</span>
                <span
                  className={cn(
                    "shrink-0 rounded-[3px] px-[7px] py-0.5 font-roboto text-[10px] font-bold whitespace-nowrap",
                    TONES[dish.tone],
                  )}
                >
                  {dish.tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default IndianCuisineSection;
