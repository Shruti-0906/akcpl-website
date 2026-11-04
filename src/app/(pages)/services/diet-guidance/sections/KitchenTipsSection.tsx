import { GUTTER } from "@/constants";
import { cn } from "@/lib";

/** Reference .tip-card fill. */
const LIGHT_CARD =
  "bg-[linear-gradient(135deg,rgb(214_239_255),rgb(255_255_255))] border border-[rgba(91,197,242,0.3)]";

const TIPS = [
  {
    icon: "💧",
    title: "The Leaching Method",
    body: "Potassium dissolves in water. Peel and cut vegetables into small pieces, double boil in plenty of water for 5–10 minutes, discard the cooking water completely, then cook the leached vegetables as usual. This removes 30–50% of the potassium — transforming high-K vegetables into safe options.",
    footLabel: "Best for:",
    foot: "Potato, spinach, cauliflower, beans, tomatoes, mushrooms",
  },
  {
    icon: "🥚",
    title: "The Egg White Secret",
    body: "Egg white is the perfect renal protein — high-biological-value, virtually no phosphorus, no potassium, and very low fat. Two egg whites provide the same protein as one whole egg, with a fraction of the phosphorus (whole egg yolk is high in phosphorus). 3 egg whites in a bhurji = safe, satisfying, high-quality protein.",
    footLabel: "Replace:",
    foot: "Whole eggs with 2× egg whites for better phosphorus control",
  },
  {
    icon: "🍚",
    title: "White Over Whole Grain",
    body: "In standard nutrition, whole grain is always better. In CKD, the opposite is often true. Nachni flour has 3× the potassium and 5× the phosphorus of refined wheat flour (maida). White rice has far less potassium than brown rice. This counterintuitive truth allows patients to enjoy rotis and rice without fear.",
    footLabel: "Prefer:",
    foot: "Maida roti, white rice, suji (semolina) over whole grain versions",
  },
  {
    icon: "💧",
    title: "The Small Cup Rule (Dialysis)",
    body: "Dialysis patients on fluid restriction find the hardest part is managing thirst. The psychological trick: always use the smallest cup available (100ml). A “full” cup feels satisfying even if it is small. Keep your entire day's fluid allowance in a 500ml bottle and pour from it only — when it is empty, you are done.",
    footLabel: "Also try:",
    foot: "Frozen low potassium fruit cubes — suck one when thirsty instead of drinking",
  },
  {
    icon: "🍬",
    title: "Renal-Safe Indian Sweets",
    body: "Many patients believe they can no longer eat sweets. Not true! Rasgulla, Jalebi, and Peda are all relatively safe for renal patients (low potassium, moderate phosphorus from milk sugar) — and are excellent calorie sources. Arrowroot halwa, suji halwa (minimal milk) and rice payasam are also safe options. Enjoy in appropriate portions!",
    footLabel: "Avoid:",
    foot: "Burfi, chocolate barfi, nut-heavy sweets (high phosphorus & K+)",
  },
  {
    icon: "🌿",
    title: "Flavour Without Sodium",
    body: "Reducing salt does not mean bland food. The entire Indian spice pantry is sodium-free and kidney-safe: turmeric, cumin, coriander, curry leaves, green chillies, ginger, garlic, hing (asafoetida), mustard seeds, cardamom, cinnamon, bay leaves. Liberal use of these transforms low-sodium cooking into cuisine you are proud to serve.",
    footLabel: "Ban from the table:",
    foot: "Salt shaker, soy sauce, ready-made masalas (high sodium)",
  },
] as const;

const KitchenTipsSection = () => (
  <section id="tips" className={`bg-[#e0f2f9] py-16 lg:py-30 ${GUTTER}`}>
    <div className="mb-4 text-center">
      <div className="mb-5 flex items-center justify-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
        <span className="h-px w-6 bg-black" />
        Kitchen Wisdom
      </div>
      <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
        Practical tips from AKC&apos;s{" "}
        <span className="text-primary-subtle italic">renal kitchen.</span>
      </h2>
      <p className="mx-auto mt-5 font-roboto text-[15px] leading-[1.75] text-[#393f42]">
        Simple techniques that protect your kidneys without sacrificing the joy
        of cooking.
      </p>
    </div>

    <div className="mt-13 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {TIPS.map((tip) => (
        <div
          key={tip.title}
          className={cn("flex flex-col rounded-2xl px-5.5 py-6.5", LIGHT_CARD)}
        >
          <span className="mb-3.5 block text-[30px]" aria-hidden="true">
            {tip.icon}
          </span>
          <div className="mb-2 font-cormorant text-2xl font-bold text-black">
            {tip.title}
          </div>
          <p className="flex-1 font-roboto text-[17px] leading-[1.7] text-[#393f42]">
            {tip.body}
          </p>
          <p className="mt-3 flex items-start gap-1.5 rounded-lg border border-[#c5dae7] bg-white/50 px-3 py-2.5 font-roboto text-[12.5px] leading-[1.5] font-bold text-black">
            <span aria-hidden="true" className="shrink-0">
              💡
            </span>
            <span>
              {tip.footLabel} {tip.foot}
            </span>
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default KitchenTipsSection;
