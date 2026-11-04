import { GUTTER } from "@/constants";
import { cn } from "@/lib";

/** Reference .traffic-light fill. */
const DARK_CARD =
  "bg-[linear-gradient(135deg,rgb(0_62_104),rgb(0_26_44))] border border-[rgba(13,138,138,0.2)]";

/** Reference .ae-card fill. */
const LIGHT_CARD =
  "bg-[linear-gradient(135deg,rgb(214_239_255),rgb(255_255_255))] border border-[rgba(91,197,242,0.3)]";

const ZONES = [
  {
    title: "Restrict Significantly",
    dot: "bg-[#EF4444]",
    items: [
      "🍌 Banana",
      "🍊 Orange",
      "🍅 Tomato sauce",
      "🥔 Potato (unleached)",
      "🥛 Dairy (>1 cup/day)",
      "🥜 Nuts & seeds",
      "🥤 Coconut water",
      "🥫 Processed foods",
      "🫙 Pickles / papad",
      "🥤 Cola drinks",
      "🌾 Whole wheat bran",
    ],
  },
  {
    title: "In Moderation (Small Portions)",
    dot: "bg-[#EAB308]",
    items: [
      "🍇 Grapes (10)",
      "🍎 Apple (1 small)",
      "🍈 Guava (½)",
      "🥦 Cauliflower (leached)",
      "🧅 Onion",
      "🌽 Corn (small)",
      "☕ Tea (100ml)",
    ],
  },
  {
    title: "Enjoy Freely (Renal-Safe)",
    dot: "bg-[#22C55E]",
    items: [
      "🥒 Cucumber",
      "🥬 Cabbage",
      "🧅 Spring onion",
      "🍚 White rice",
      "🫓 Maida roti",
      "🥚 Egg white",
      "🍗 Chicken (small)",
      "🐟 Fish (small)",
      "🍰 Arrowroot sweets",
      "🍭 Jalebi / Rasgulla",
      "🥘 Bottle gourd",
    ],
  },
] as const;

const NUTRIENTS = [
  {
    icon: "🍌",
    name: "Potassium — Why It Matters",
    body: "Diseased kidneys cannot excrete potassium efficiently. When serum K+ rises above 5.5 mEq/L, it disrupts cardiac electrical conduction — causing life-threatening arrhythmias. The highest-K+ culprits in the Indian diet: banana, orange, coconut water, potato, tomato, mosambi.",
    swap: "Replace banana with apple or pear. Replace coconut water with plain water or lemon water (small amount). Leach potatoes by boiling, discarding water, then cooking.",
  },
  {
    icon: "🥛",
    name: "Phosphorus — The Silent Danger",
    body: "Phosphorus accumulates in CKD, causing calcium to be pulled from bones (renal osteodystrophy) and deposited in blood vessels (calcification). High-phosphorus foods: dairy in large quantities, nuts and seeds, cola drinks, whole-grain cereals, dark chocolate, processed meats.",
    swap: "Limit milk to 100ml/day. Use rice-based sweets (kheer, payasam) over milk-heavy desserts. Replace whole wheat with refined wheat or rice. Choose white bread over brown.",
  },
  {
    icon: "🧂",
    name: "Sodium — The Thirst Trap",
    body: "High sodium intake raises blood pressure, worsens fluid retention (especially important for dialysis patients), and accelerates kidney damage. Sodium is hidden everywhere: pickles, papads, processed snacks, ready-to-eat meals, restaurant food, sauces and condiments.",
    swap: "Cook at home with ½ the usual salt. Use lime, coriander, cumin and turmeric for flavour instead of salt. Completely avoid papad, pickles, namkeens and packed snacks.",
  },
] as const;

const ManageSection = () => (
  <section id="avoid" className={`bg-white py-16 lg:py-30 ${GUTTER}`}>
    <div className="mb-12">
      <div className="mb-5 flex items-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
        <span className="h-px w-6 bg-black" />
        Manage, Don&apos;t Fear
      </div>
      <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
        Some foods need{" "}
        <span className="text-primary-subtle italic">
          managing — not banning.
        </span>
      </h2>
      <p className="mt-5 font-roboto text-[15px] leading-[1.75] text-[#393f42]">
        AKC&apos;s approach is not about creating fear around food — it is about
        understanding which nutrients need managing, why they matter for kidney
        health, and what delicious swaps are available.
      </p>
    </div>

    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
      <div className={cn("overflow-hidden rounded-2xl", DARK_CARD)}>
        <div className="border-b border-white/7 bg-white/4 px-[22px] py-4 font-roboto text-[9.5px] tracking-[2px] text-white/30 uppercase">
          ◉ Renal Diet Traffic Light Guide — CKD Stage 4
        </div>

        <div className="p-6">
          {ZONES.map((zone) => (
            <div key={zone.title} className="mb-5 last:mb-0">
              <div className="mb-4.5 flex items-center gap-2.5">
                <span className={`size-3.5 rounded-full ${zone.dot}`} />
                <span className="font-roboto text-sm font-bold text-white">
                  {zone.title}
                </span>
              </div>
              <ul className="flex flex-wrap gap-[7px]">
                {zone.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-[5px] rounded-full bg-white/6 px-[11px] py-[5px] font-roboto text-[12px] font-bold text-white/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {NUTRIENTS.map((nutrient) => (
          <div
            key={nutrient.name}
            className={cn("rounded-2xl p-[18px]", LIGHT_CARD)}
          >
            <div className="mb-2 flex items-center gap-2.5">
              <span className="text-2xl" aria-hidden="true">
                {nutrient.icon}
              </span>
              <span className="font-cormorant text-2xl font-bold text-black">
                {nutrient.name}
              </span>
            </div>
            <p className="mb-2.5 font-roboto text-[17px] leading-[1.65] text-[#393f42]">
              {nutrient.body}
            </p>
            <p className="mt-1 rounded-md border border-[#c5dae7] bg-white/50 px-3 py-2.5 font-roboto text-[11.5px] leading-[1.5] text-[#393f42]">
              <strong className="font-bold text-secondary-light">
                AKC Safe Swap:
              </strong>{" "}
              {nutrient.swap}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ManageSection;
