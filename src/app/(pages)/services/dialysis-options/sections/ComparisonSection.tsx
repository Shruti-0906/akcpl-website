import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const COLUMNS = ["Standard Flux HD", "High Flux HD", "HDF", "CRRT"] as const;

const ROWS: readonly { label: string; values: readonly string[] }[] = [
  {
    label: "Frequency",
    values: [
      "3× per week",
      "3× per week",
      "3× per week",
      "Continuous · 24 hours/day",
    ],
  },
  {
    label: "Session length",
    values: [
      "~4 hours",
      "~4 hours",
      "~4 hours",
      "Continuous · typically ≥24 hours",
    ],
  },
  {
    label: "Setting",
    values: ["AKC centre", "AKC centre", "AKC advanced centre", "AKC Centre"],
  },
  {
    label: "Small-solute clearance",
    values: ["Excellent", "Excellent", "Excellent", "Excellent · continuous"],
  },
  {
    label: "Middle-molecule clearance",
    values: [
      "Limited",
      "Improved",
      "Highest in-centre",
      "High · especially with convection",
    ],
  },
  {
    label: "Cardiovascular benefit",
    values: [
      "Baseline",
      "Improved over standard",
      "Strongest evidence base",
      "Excellent haemodynamic tolerance",
    ],
  },
  {
    label: "Patient lifestyle",
    values: [
      "Centre-based routine",
      "Centre-based routine",
      "Centre-based routine",
      "ICU-based · for critically ill patients",
    ],
  },
  {
    label: "Training required",
    values: [
      "None",
      "None",
      "None",
      "Specialised ICU & nephrology team",
    ],
  },
] as const;

const HEAD_CELL =
  "border-b-2 border-primary-light bg-[rgb(91,197,242)] p-4 text-left";

const ComparisonSection = () => (
  <section className={cn("bg-white py-16 lg:py-30", GUTTER)}>
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <Eyebrow label="At a Glance" className="mb-5 justify-center text-black/80" />
        <h2 className="section-heading text-black">
          Four modalities,{" "}
          <span className="text-primary-subtle italic">side by side.</span>
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-180 border-collapse border border-black/10 font-roboto">
          <thead>
            <tr>
              <th className={cn("w-50", HEAD_CELL)} />
              {COLUMNS.map((column) => (
                <th
                  key={column}
                  className={cn(
                    HEAD_CELL,
                    "font-cormorant text-lg leading-tight font-bold tracking-[-0.005em] text-black",
                  )}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label}>
                <td className="border-b border-black/15 bg-[#e0f2f9] p-4.5 align-top font-roboto text-[17px] font-bold tracking-[0.16em] text-secondary uppercase">
                  {row.label}
                </td>
                {row.values.map((value, index) => (
                  <td
                    key={index}
                    className={cn(
                      "border-b border-black/15 p-4.5 align-top text-[15px] leading-relaxed text-[#393f42]",
                      index % 2 === 1 ? "bg-[#e9f7fd]" : "bg-white",
                    )}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-center font-roboto text-sm text-[#393f42] italic">
        "Disclaimer - The information provided is for general awareness only and should not replace professional medical advice. Always consult your nephrologist for guidance specific to your condition."
      </p>
    </div>
  </section>
);

export default ComparisonSection;
