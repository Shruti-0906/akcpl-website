import { GUTTER } from "@/constants";

import { STAGES } from "../components";

/** Reference .sp-nutrients / .meal-card fill. */
const LIGHT_CARD =
  "bg-[linear-gradient(135deg,rgb(214_239_255),rgb(255_255_255))] border border-[rgba(91,197,242,0.3)]";

/** Reference .status-restrict / .status-moderate / .status-normal — text colour only, no pill. */
const STATUS_COLOR = {
  restrict: "text-[#5a0000]",
  moderate: "text-[#af7100]",
  normal: "text-[#003e68]",
} as const;

const StagesSection = () => {
  const stage = STAGES[0];

  return (
    <section
      id="stages"
      className={`scroll-mt-36 bg-white py-16 lg:py-30 ${GUTTER}`}
    >
      <div className="mb-10 text-center">
        <div className="mb-5 flex items-center justify-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
          <span className="h-px w-6 bg-black" />
          Your Diet, Your Stage
        </div>
        <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
          The right food for{" "}
          <span className="text-primary-subtle italic">
            exactly where you are.
          </span>
        </h2>
        <p className="mx-auto mt-5 font-roboto text-[15px] leading-[1.75] text-[#393f42]">
          Kidney disease nutrition changes at every stage. AKC dietitians tailor
          recommendations precisely to your eGFR, your comorbidities, and
          whether you are pre-dialysis, on dialysis, or post-transplant.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className={`rounded-2xl p-6 lg:p-8 ${LIGHT_CARD}`}>
          <div className="mb-5 font-cormorant text-xl font-bold text-black">
            {stage.tableTitle}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse font-roboto">
              <thead>
                <tr>
                  {stage.headers.map((head, index) => (
                    <th
                      key={head}
                      style={index < 2 ? { width: "25%" } : undefined}
                      className="border-b-[1.5px] border-[rgb(223,223,223)] px-3 py-2 text-left font-roboto text-[9px] tracking-[1.5px] text-[#393f42] uppercase"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stage.nutrients.map((row) => (
                  <tr key={row.nutrient} className="group">
                    <td className="border-b border-[rgb(223,223,223)] px-3 py-3 align-top font-roboto text-[13.5px] font-bold whitespace-nowrap text-black group-last:border-b-0">
                      {row.nutrient}
                    </td>
                    <td className="border-b border-[rgb(223,223,223)] px-3 py-3 align-top font-roboto text-[12px] font-bold whitespace-nowrap group-last:border-b-0">
                      <span className={STATUS_COLOR[row.status]}>
                        {row.target}
                      </span>
                    </td>
                    <td className="border-b border-[rgb(223,223,223)] px-3 py-3 align-top font-roboto text-[12px] leading-[1.45] text-[#393f42] group-last:border-b-0">
                      {row.why}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          {stage.meals.map((meal) => (
            <div
              key={meal.label}
              className={`overflow-hidden rounded-2xl ${LIGHT_CARD}`}
            >
              <div className="flex items-center gap-3 px-[18px] py-[14px]">
                {meal.emoji && (
                  <span className="text-xl" aria-hidden="true">
                    {meal.emoji}
                  </span>
                )}
                <span className="flex-1 font-roboto text-[9.5px] font-bold tracking-[1.5px] text-[#393f42] uppercase">
                  {meal.label}
                </span>
                <span className="font-roboto text-[10.5px] font-bold text-black">
                  {meal.kcal}
                </span>
              </div>

              <div className="flex flex-col gap-1.5 px-[18px] pb-[18px]">
                {meal.dishes.map((dish, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 font-roboto text-[13.5px] text-[#393f42] [&_strong]:font-bold [&_strong]:text-secondary"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 text-[11px] text-[rgb(223,223,223)]"
                    >
                      →
                    </span>
                    <span>{dish}</span>
                  </div>
                ))}

                <p className="mt-1 rounded-md border border-[#c5dae7] bg-white/50 px-3 py-2.5 font-roboto text-[11.5px] leading-[1.5] text-[#393f42]">
                  {meal.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StagesSection;
