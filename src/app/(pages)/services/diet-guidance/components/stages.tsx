import type { ReactNode } from "react";

export type NutrientRow = {
  nutrient: string;
  target: string;
  /** Drives the target pill colour. */
  status: "restrict" | "moderate" | "normal";
  why: string;
};

export type MealCard = {
  emoji?: string;
  label: string;
  kcal: string;
  dishes: readonly ReactNode[];
  note: string;
};

export type Stage = {
  key: string;
  tab: string;
  tableTitle: string;
  /** Column headings differ per stage on the reference site. */
  headers: readonly [string, string, string];
  nutrients: readonly NutrientRow[];
  meals: readonly MealCard[];
};

export const STAGES = [
  {
    key: "pre",
    tab: "Pre-Dialysis (CKD 3–4)",
    tableTitle: "CKD Stage 3–4 — Nutrient Guidelines",
    headers: ["Nutrient", "Target", "Why This Matters"],
    nutrients: [
      {
        nutrient: "🥩 Protein",
        target: "0.6–0.8g/kg/day",
        status: "restrict",
        why: "Excess protein produces urea and nitrogenous waste that accelerates CKD progression. High-biological-value protein (egg white, fish, chicken) is preferred.",
      },
      {
        nutrient: "🍌 Potassium",
        target: "2,000–3,000mg/day",
        status: "restrict",
        why: "As GFR falls, kidneys can no longer excrete K+ efficiently. High serum K+ (>5.5) causes dangerous cardiac arrhythmias. Restrict bananas, oranges, potatoes, tomatoes.",
      },
      {
        nutrient: "🥛 Phosphorus",
        target: "800–1,000mg/day",
        status: "restrict",
        why: "Phosphorus retention causes calcium-phosphorus deposits in blood vessels and bones, accelerating cardiovascular disease. Limit dairy, nuts, cola drinks.",
      },
      {
        nutrient: "🧂 Sodium",
        target: "1,500–2,000mg/day",
        status: "moderate",
        why: "Excess sodium causes water retention, raised blood pressure, and rapid GFR decline. Avoid pickles, papad, processed foods, added salt at table.",
      },
      {
        nutrient: "🍬 Calories",
        target: "30–35 kcal/kg/day",
        status: "normal",
        why: "Adequate calories prevent muscle breakdown (catabolism) — essential as protein restriction limits one calorie source. Rice, refined wheat, sugar (in moderation) provide safe calories.",
      },
      {
        nutrient: "💧 Fluid",
        target: "As tolerated",
        status: "moderate",
        why: "Fluid restriction is not usually needed in early CKD unless urine output is low. 1.5–2L/day is generally appropriate unless edema or hypertension is present.",
      },
    ],
    meals: [
      {
        emoji: "☀️",
        label: "Breakfast",
        kcal: "~380 kcal",
        dishes: [
          <>
            <strong>Tofu with Oats Upma</strong> — 1 cup with minimal salt
          </>,
          <>
            OR <strong>Semolina (Suji) Idli</strong> — 2 pieces with green
            chutney
          </>,
          <>
            <strong>Tea with limited milk</strong> (100ml) or herbal tea
          </>,
        ],
        note: "💡 Avoid whole-wheat bread (high K+). White bread or maida roti is the better choice in CKD.",
      },
      {
        emoji: "🍛",
        label: "Lunch",
        kcal: "~620 kcal",
        dishes: [
          <>
            <strong>Steamed Rice</strong> 1 cup + <strong>Moong Dal</strong> ½
            cup
          </>,
          <>
            <strong>Leached Ash Gourd / Bottle Gourd Sabzi</strong>
          </>,
          <>
            <strong>1 small apple</strong> (peeled, low-K option)
          </>,
        ],
        note: "💡 Leaching trick: Boil vegetables, discard water, then cook. Removes 30–50% potassium.",
      },
      {
        emoji: "🌙",
        label: "Dinner",
        kcal: "~580 kcal",
        dishes: [
          <>
            <strong>2 Maida Rotis</strong> + <strong>Egg White Bhurji</strong>{" "}
            (2 whites)
          </>,
          <>
            OR <strong>Chicken Stew</strong> (breast, no skin) 50g
          </>,
          <>
            <strong>Ridge Gourd / Lauki Sabzi</strong> — salted minimally
          </>,
        ],
        note: "💡 Chicken and egg white are high-biological-value proteins — preferred over dal which has higher phosphorus per gram.",
      },
    ],
  },
  {
    key: "dialysis",
    tab: "On Dialysis (CKD 5D)",
    tableTitle: "On Dialysis (CKD 5D) — Revised Nutrient Guidelines",
    headers: ["Nutrient", "Target", "Why This Changes"],
    nutrients: [
      {
        nutrient: "🥩 Protein",
        target: "1.0–1.2g/kg/day",
        status: "normal",
        why: "Dialysis itself removes amino acids. Protein requirement INCREASES on dialysis — you need more to compensate for dialysis losses. Malnutrition is the biggest risk.",
      },
      {
        nutrient: "🍌 Potassium",
        target: "2,000–2,500mg/day",
        status: "restrict",
        why: "Dialysis removes K+ 3× per week only. Between sessions, K+ accumulates — dangerous if you eat high-K+ foods. Strict restriction between sessions is essential.",
      },
      {
        nutrient: "🥛 Phosphorus",
        target: "800–1,000mg/day",
        status: "restrict",
        why: "Dialysis removes phosphorus poorly. Hyperphosphataemia causes bone disease, calcification of vessels. Phosphate binders prescribed with meals.",
      },
      {
        nutrient: "💧 Fluid",
        target: "500–700ml + urine output",
        status: "restrict",
        why: "Most dialysis patients make little or no urine. Excess fluid builds up between sessions — causing breathlessness, pulmonary oedema, high BP. Strict fluid restriction is life-saving.",
      },
      {
        nutrient: "🍬 Calories",
        target: "35 kcal/kg/day",
        status: "normal",
        why: "Higher calorie requirement on dialysis. Include refined carbs, healthy fats (ghee in moderation), sugar-based sweets (rasgulla, low-K options) to meet calorie targets safely.",
      },
      {
        nutrient: "🧂 Sodium",
        target: "<2,000mg/day",
        status: "restrict",
        why: "Strict sodium restriction reduces thirst — making fluid restriction easier and reducing interdialytic weight gain. This alone dramatically improves patient outcomes.",
      },
    ],
    meals: [
      {
        emoji: "☀️",
        label: "Breakfast (Dialysis Day)",
        kcal: "~400 kcal",
        dishes: [
          <>
            <strong>Egg White Omelette</strong> (3 whites) + 2 Maida Toast
          </>,
          <>
            <strong>100ml low-fat milk</strong> or 50ml tea
          </>,
        ],
        note: "💡 On dialysis days, eat a good protein breakfast BEFORE the session — dialysis removes amino acids and you need the reserves.",
      },
      {
        emoji: "🍛",
        label: "Lunch (Post-Dialysis)",
        kcal: "~680 kcal",
        dishes: [
          <>
            <strong>Rice ¾ cup + Chicken Dal</strong> (moong + small chicken
            portion)
          </>,
          <>
            <strong>Leached Lauki Sabzi + 1 Roti</strong>
          </>,
          <>
            <strong>Rasgulla (1 piece)</strong> — safe low-K, high-calorie
            dessert
          </>,
        ],
        note: "💡 After dialysis, reward yourself with good food — your K+ has just been cleared. This is the safest time to eat slightly higher-potassium foods in moderation.",
      },
      {
        emoji: "💧",
        label: "Fluid Management Trick",
        kcal: "Critical",
        dishes: [
          <>
            Use a <strong>500ml water bottle</strong> — fill once, that&apos;s
            your day&apos;s allowance
          </>,
          <>
            <strong>Frozen lemon cubes</strong> instead of water when thirsty —
            same fluid with longer satisfaction
          </>,
          <>
            <strong>Small cup rule</strong> — use a 100ml cup always, never a
            glass
          </>,
        ],
        note: "💡 Chewing gum, cold water sips, and acid candies stimulate saliva and reduce thirst without adding to fluid intake.",
      },
    ],
  },
  {
    key: "transplant",
    tab: "Post-Transplant",
    tableTitle: "Post-Transplant — Freedom Returns (Mostly!)",
    headers: ["Nutrient", "Status", "What Changes"],
    nutrients: [
      {
        nutrient: "🍌 Potassium",
        target: "Usually Normal",
        status: "normal",
        why: "With a working transplant, the kidney excretes K+ normally. Most K+ restrictions lift within weeks! Bananas, oranges and tomatoes return to the menu gradually. Monitor as per nephrologist advice.",
      },
      {
        nutrient: "💧 Fluid",
        target: "Drink Freely!",
        status: "normal",
        why: "Fluid restriction ends immediately. In fact, good hydration is now important to protect the new kidney. 2.5–3L/day is often encouraged in the first year.",
      },
      {
        nutrient: "🥩 Protein",
        target: "Moderate",
        status: "moderate",
        why: "Normal protein intake (0.8–1.0g/kg) is appropriate. Avoid very high-protein diets that strain the new kidney. Immunosuppression can cause muscle loss — adequate protein protects muscle mass.",
      },
      {
        nutrient: "🍊 Grapefruit",
        target: "Avoid Always",
        status: "restrict",
        why: "Grapefruit and pomelo contain furanocoumarins that inhibit CYP3A4 — dramatically increasing tacrolimus and cyclosporine blood levels. This is a drug interaction, not a kidney restriction. Strictly avoid forever.",
      },
      {
        nutrient: "🧂 Sodium",
        target: "Still Moderate",
        status: "moderate",
        why: "Post-transplant steroids and CNIs cause hypertension and fluid retention. Moderate sodium restriction (2,000mg/day) protects blood pressure and transplant function long-term.",
      },
      {
        nutrient: "🍰 Weight",
        target: "Watch Carefully",
        status: "moderate",
        why: "Post-transplant steroids and new appetite cause rapid weight gain. Obesity damages transplant kidneys. AKC's dietitian monitors weight monthly and adjusts calorie targets to prevent post-transplant weight gain.",
      },
    ],
    meals: [
      {
        emoji: "🎉",
        label: "What Returns to Your Plate",
        kcal: "Freedom!",
        dishes: [
          <>
            <strong>Banana &amp; orange</strong> — after nephrologist confirms
            K+ normal
          </>,
          <>
            <strong>Whole-wheat roti</strong> — high-fibre options return
          </>,
          <>
            <strong>Normal portions of dal &amp; legumes</strong> — gradually
          </>,
          <>
            <strong>Unlimited drinking water</strong> — kidney is working!
          </>,
        ],
        note: "💡 Reintroduce restricted foods gradually over 3–6 months, guided by your AXIS diet module and monthly lab results.",
      },
      {
        emoji: "⚠️",
        label: "Permanent Restrictions",
        kcal: "Always",
        dishes: [
          <>
            <strong>Grapefruit &amp; Pomelo</strong> — NEVER after transplant
          </>,
          <>
            <strong>Raw/undercooked meat, fish, eggs</strong> — infection risk
            with immunosuppression
          </>,
          <>
            <strong>Unpasteurised dairy &amp; soft cheeses</strong> — Listeria
            risk
          </>,
        ],
        note: "💡 The AKC transplant dietitian updates your AXIS menu within 1 week of discharge with post-transplant safe guidelines.",
      },
    ],
  },
  {
    key: "diabetic",
    tab: "Diabetic Kidney Disease",
    tableTitle: "Diabetic Kidney Disease — Dual Management",
    headers: ["Challenge", "Approach", "AKC Solution"],
    nutrients: [
      {
        nutrient: "Blood Sugar Control",
        target: "HbA1c <7%",
        status: "moderate",
        why: "High blood sugar accelerates kidney damage independently of CKD management. AKC dietitians plan carbohydrate-controlled meals that manage both blood sugar AND kidney-specific restrictions simultaneously.",
      },
      {
        nutrient: "Protein Restriction",
        target: "0.6–0.8g/kg",
        status: "restrict",
        why: "Same as CKD — but diabetic patients often compensate restricted protein with high-carb foods, worsening blood sugar. AKC uses complex carbs (oats, barley) to balance both issues.",
      },
      {
        nutrient: "Carbohydrate Choice",
        target: "Low GI Options",
        status: "moderate",
        why: "White rice and maida (often safer in CKD for K+ reasons) spike blood sugar. AKC uses portion control and pairing strategies (add dal or curd to lower GI) rather than blanket restrictions.",
      },
      {
        nutrient: "Potassium",
        target: "As per eGFR",
        status: "restrict",
        why: "Same restrictions as regular CKD — but many 'diabetic-friendly' fruits (guava, orange, banana) are high-K+. AKC dietitians identify the safe diabetic-AND-renal-friendly fruit options: apple, pear, grapes in small portions.",
      },
    ],
    meals: [
      {
        emoji: "🍽️",
        label: "Diabetic-Renal Breakfast",
        kcal: "~350 kcal",
        dishes: [
          <>
            <strong>Oats Porridge</strong> (no sugar) — 1 cup
          </>,
          <>
            <strong>Egg white omelette</strong> (2 whites) with minimal oil
          </>,
          <>
            <strong>Unsweetened herbal tea</strong>
          </>,
        ],
        note: "💡 Oats has a low glycaemic index AND lower potassium than wheat — a rare win for both restrictions.",
      },
      {
        emoji: "💡",
        label: "The Plate Method — AKC Adaptation",
        kcal: "Visual Guide",
        dishes: [
          <>
            <strong>½ plate:</strong> Low-K vegetables (gourd, cabbage,
            cauliflower)
          </>,
          <>
            <strong>¼ plate:</strong> Small portion of rice or 1 roti
          </>,
          <>
            <strong>¼ plate:</strong> Lean protein (chicken breast, egg white,
            fish)
          </>,
        ],
        note: "💡 This controls carbohydrates for blood sugar while keeping protein moderate for CKD — without needing to count every gram.",
      },
    ],
  },
] as const satisfies readonly Stage[];
