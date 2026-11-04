import { Button } from "@/components/ui";
import { GUTTER } from "@/constants";

const DISHES = [
  { emoji: "⚪️", name: "Oats Idli", note: "Low-K · Low-P · High fibre" },
  { emoji: "🍛", name: "Moong Dal", note: "Low potassium dal option" },
  { emoji: "🥗", name: "Leached Salad", note: "Soaked & drained vegetables" },
  { emoji: "🍚", name: "Arrowroot Kheer", note: "Low-phosphorus dessert" },
  { emoji: "🫓", name: "Maida Roti", note: "Low-potassium bread choice" },
  { emoji: "🍵", name: "Herbal Tea", note: "Fluid-controlled infusion" },
] as const;

const STATS = [
  { value: "200+", label: "Renal-safe Indian recipes curated" },
  { value: "6", label: "Regional cuisine varieties supported" },
  { value: "AXIS", label: "Diet module linked to lab results" },
] as const;

/** Matches the reference's rgba(13,138,138,.12) fill / .25 border chips. */
const CHIP = "border border-[rgba(13,138,138,0.25)] bg-[rgba(13,138,138,0.12)]";

const DietHeroSection = () => (
  <section
    id="home"
    className={`bg-[linear-gradient(135deg,#00111c_0%,#006693_50%,#001822_100%)] pt-8 pb-16 lg:pt-10 lg:pb-24 ${GUTTER}`}
  >
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-18">
      <div>
        <div
          className={`mb-7 inline-block rounded-sm px-2.5 py-1 font-roboto text-[9px] tracking-[0.18em] text-primary-light uppercase ${CHIP}`}
        >
          AKC Renal Nutrition Programme
        </div>

        <h1 className="font-cormorant text-4xl leading-[1.05] font-light text-white sm:text-5xl lg:text-[62px]">
          &ldquo;Eat Healthy,
          <br />
          Eat to Protect your Kidneys,
          <br />
          <span className="text-[#00b3ff] italic">
            Eat to Enjoy Life.&rdquo;
          </span>
        </h1>

        <p className="mt-7 font-roboto text-[17px] leading-[1.7] font-light text-white">
          A kidney disease diagnosis does not mean a lifetime of bland, joyless
          eating. At AKC, our renal dietitians craft personalised menus that are
          medically precise, culturally familiar, and — above all — genuinely
          delicious. Your kidneys and your taste buds can both be happy.
        </p>

        <div className="mt-9">
          <Button href="#stages" className="rounded-[4px]">
            Explore Your Diet Plan →
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3.5">
        <div className="rounded-[22px] border border-white/15 bg-white/9 p-7 backdrop-blur-md">
          <div className="mb-4.5 flex items-center justify-between gap-3">
            <div className="font-cormorant text-[9.5px] tracking-[2.5px] text-white/35 uppercase">
              ◉ Today&apos;s AKC Renal Menu — CKD Stage 4
            </div>
            <div className="shrink-0 rounded-full bg-[rgb(91,197,242)] px-2.5 py-1 font-roboto text-[11px] font-bold whitespace-nowrap text-black">
              Personalised · Renal-Safe
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {DISHES.map((dish) => (
              <div
                key={dish.name}
                className="rounded-[14px] border border-white/8 bg-white/7 px-3 py-4 text-center"
              >
                <span className="mb-2 block text-[32px]" aria-hidden="true">
                  {dish.emoji}
                </span>
                <div className="font-roboto text-[12.5px] font-bold text-white">
                  {dish.name}
                </div>
                <div className="mt-0.5 font-roboto text-[10.5px] leading-[1.4] text-white/40">
                  {dish.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-[14px] border border-white/10 bg-white/6 min-[420px]:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.value} className="px-3 py-4 text-center">
              <div className="font-cormorant text-[26px] leading-none font-bold text-[#FCD34D]">
                {stat.value}
              </div>
              <div className="mt-1 font-roboto text-[10.5px] leading-[1.3] text-white/35">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3.5 rounded-xl border border-white/12 bg-white/8 px-4.5 py-4">
          <div className="shrink-0 text-[30px]" aria-hidden="true">
          </div>
          <div>
            <div className="font-roboto text-[13.5px] font-bold text-white">
              AXIS Diet Module — Prescription to Plate
            </div>
            <div className="mt-0.5 font-roboto text-[12px] leading-[1.45] text-white/45">
              Your nephrologist prescribes dietary targets in AXIS. Our
              dietitian curates your personalised menu directly in the same
              system — aligned to your labs, your stage, your culture, and your
              preferences.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DietHeroSection;
