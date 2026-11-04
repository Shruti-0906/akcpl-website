"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  ACCENT_INK,
  INK,
  MONO,
  TEAL_BOTTOM,
  TEAL_TOP,
  TOOLTIP_ITEM_STYLE,
  TOOLTIP_LABEL_STYLE,
  TOOLTIP_STYLE,
} from "./chartTheme";

const PATIENTS: readonly { year: string; patients: number }[] = [
  { year: "'13", patients: 25 },
  { year: "'14", patients: 150 },
  { year: "'15", patients: 230 },
  { year: "'16", patients: 400 },
  { year: "'17", patients: 535 },
  { year: "'18", patients: 630 },
  { year: "'19", patients: 660 },
  { year: "'20", patients: 705 },
  { year: "'21", patients: 735 },
  { year: "'22", patients: 765 },
  { year: "'23", patients: 805 },
  { year: "'24", patients: 825 },
  { year: "'25", patients: 890 },
  { year: "'26", patients: 1000 },
];

/**
 * The approved design gives 0-600, 600-800 and 800-1000 an equal band each, so
 * bars are plotted against this piecewise position rather than the raw count.
 * Axis ticks and the tooltip map back to real patient numbers.
 */
const BANDS = [0, 600, 800, 1000];

const toPlot = (patients: number) => {
  const upper = BANDS.findIndex((edge) => patients <= edge);
  if (upper <= 0) return patients <= 0 ? 0 : BANDS.length - 1;

  const low = BANDS[upper - 1]!;
  const high = BANDS[upper]!;
  return upper - 1 + (patients - low) / (high - low);
};

const PATIENT_GROWTH = PATIENTS.map((entry) => ({
  ...entry,
  plot: toPlot(entry.patients),
}));

const Y_TICKS = [0, 1, 2, 3];
const X_TICKS = ["'13", "'16", "'19", "'22", "'26"];

const LAST_YEAR = PATIENTS[PATIENTS.length - 1]!.year;

const CATEGORY_GAP = "19%";

type TickProps = {
  x?: number;
  y?: number;
  payload?: { value?: string | number };
};

const YearTick = ({ x = 0, y = 0, payload }: TickProps) => (
  <text
    x={x}
    y={y + 18}
    textAnchor="middle"
    fill={INK}
    fillOpacity={0.75}
    fontFamily={MONO}
    fontSize={12}
  >
    {payload?.value}
  </text>
);

const PatientTick = ({ x = 0, y = 0, payload }: TickProps) => (
  <text
    x={x}
    y={y}
    dx={-10}
    dy={4}
    textAnchor="end"
    fill={INK}
    fillOpacity={0.75}
    fontFamily={MONO}
    fontSize={12}
  >
    {BANDS[Number(payload?.value ?? 0)]}
  </text>
);

type LabelProps = {
  x?: number;
  y?: number;
  width?: number;
  index?: number;
};

const FinalLabel = ({ x = 0, y = 0, width = 0, index = 0 }: LabelProps) => {
  if (PATIENT_GROWTH[index]?.year !== LAST_YEAR) return null;

  return (
    <text
      x={x + width / 2}
      y={y - 12}
      textAnchor="middle"
      fill={ACCENT_INK}
      fontFamily={MONO}
      fontSize={13}
      fontWeight={700}
    >
      1000+
    </text>
  );
};

const PatientGrowthChart = () => {
  return (
    <figure className="flex flex-col gap-6">
      <figcaption
        style={{ color: ACCENT_INK }}
        className="font-roboto text-[11px] font-semibold tracking-[0.22em] uppercase"
      >
        Cumulative Patients &middot; 2012&ndash;2025
      </figcaption>

      {/* Fourteen bars need room; below this the chart scrolls. */}
      <div className="-mx-1 min-w-0 overflow-x-auto px-1">
        <div
          aria-hidden="true"
          className="h-64 w-full min-w-140 sm:h-72 lg:min-w-0"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={PATIENT_GROWTH}
              margin={{ top: 28, right: 8, bottom: 4, left: 0 }}
              barCategoryGap={CATEGORY_GAP}
            >
              <defs>
                <linearGradient id="hd-growth-teal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={TEAL_TOP} />
                  <stop offset="100%" stopColor={TEAL_BOTTOM} />
                </linearGradient>
              </defs>

              <CartesianGrid
                vertical={false}
                stroke={INK}
                strokeOpacity={0.08}
              />
              <XAxis
                dataKey="year"
                ticks={X_TICKS}
                tick={<YearTick />}
                tickLine={false}
                axisLine={{ stroke: INK, strokeOpacity: 0.35 }}
                height={36}
              />
              <YAxis
                domain={[0, 3]}
                ticks={Y_TICKS}
                tick={<PatientTick />}
                tickLine={false}
                axisLine={false}
                width={52}
              />
              <Tooltip
                cursor={{ fill: INK, fillOpacity: 0.05 }}
                contentStyle={TOOLTIP_STYLE}
                labelStyle={TOOLTIP_LABEL_STYLE}
                itemStyle={TOOLTIP_ITEM_STYLE}
                separator=""
                formatter={(_value, _name, item) => [
                  `${item?.payload?.patients} patients`,
                  "",
                ]}
              />
              <Bar dataKey="plot" fill="url(#hd-growth-teal)">
                <LabelList dataKey="plot" content={<FinalLabel />} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="sr-only">
        <table>
          <caption>
            Cumulative patients on the AKC Home HD programme by year
          </caption>
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Cumulative patients</th>
            </tr>
          </thead>
          <tbody>
            {PATIENTS.map((entry) => (
              <tr key={entry.year}>
                <th scope="row">20{entry.year.slice(1)}</th>
                <td>{entry.patients}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
};

export default PatientGrowthChart;
