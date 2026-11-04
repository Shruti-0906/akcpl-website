import { GUTTER } from "@/constants";

/** Reference .team-quote / .dp-card fill. */
const LIGHT_CARD =
  "bg-[linear-gradient(135deg,rgb(214_239_255),rgb(255_255_255))] border border-[rgba(91,197,242,0.3)]";

/** Reference .tv-item fill. */
const DARK_CARD =
  "bg-[linear-gradient(135deg,rgb(0_62_104),rgb(0_26_44))] border border-[#002238]";

const VALUES = [
  {
    icon: "🇮🇳",
    title: "India-First Nutrition Science",
    body: "Western renal diet guidelines are based on Western foods. Our dietitians are trained specifically in Indian foods — their potassium and phosphorus content, how Indian cooking techniques (boiling, leaching, fermenting) change nutrient profiles, and how Indian meal structures can be adapted for renal safety.",
  },
  {
    icon: "💬",
    title: "Counselling in Your Language",
    body: "Dietary advice in a language you don't fully understand is advice that doesn't get followed. AKC dietitians are multilingual — counselling in Hindi, Tamil, Telugu, Kannada, Marathi, Bengali and Gujarati. Your shopping list is in your language too.",
  },
] as const;


const DietitianTeamSection = () => (
  <section id="team" className={`bg-[#e0f2f9] py-16 lg:py-30 ${GUTTER}`}>
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-18">
      <div className={`rounded-2xl p-10 ${LIGHT_CARD}`}>
        <div
          aria-hidden="true"
          className="mb-3.5 font-cormorant text-[96px] leading-[0.4] text-black/12"
        >
          &ldquo;
        </div>
        <p className="mb-4 font-roboto text-xl leading-[1.6] font-bold text-black italic">
          My job is not to take food away from my patients. It is to give them
          back the joy of eating — safely, deliciously, within the boundaries
          that protect their kidneys. When a patient calls to tell me they just
          made their favourite biryani in a renal-safe version and it tasted
          wonderful — that is my best day.
        </p>
        <div className="font-roboto text-sm font-bold text-secondary-light">
          Mrs. K. N., M.Sc. (Foods &amp; Nutrition), RD
        </div>
        <div className="mt-0.5 font-roboto text-xs text-[#393f42]">
          Chief Renal Dietitian, AKC · 12 years of clinical nutrition
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {VALUES.map((value) => (
          <div
            key={value.title}
            className={`flex items-start gap-3.5 rounded-2xl p-5.5 ${DARK_CARD}`}
          >
            <span className="shrink-0 text-2xl" aria-hidden="true">
              {value.icon}
            </span>
            <div>
              <div className="mb-1 font-cormorant text-2xl font-bold text-white">
                {value.title}
              </div>
              <p className="font-roboto text-[15px] leading-[1.65] text-white/50">
                {value.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DietitianTeamSection;
