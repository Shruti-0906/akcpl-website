"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useState } from "react";

/** Cumulative dialysis centres by year. */
const CENTRE_GROWTH = [
  { year: "2019", centres: 15 },
  { year: "2020", centres: 30 },
  { year: "2021", centres: 105 },
  { year: "2022", centres: 130 },
  { year: "2023", centres: 170 },
  { year: "2024", centres: 195 },
  { year: "2025", centres: 235 },
  { year: "2026", centres: 250 },
] as const;

const AXIS_MAX = 300;
const TICKS = [0, 50, 100, 150, 200, 250, 300];

const BAR_COLOUR = "var(--color-primary)";
const BAR_HOVER_COLOUR = "var(--color-primary-subtle)";
const INK = "var(--color-secondary)";

const AXIS_TICK = {
  fill: INK,
  fillOpacity: 0.7,
  fontSize: 12,
  fontFamily: "var(--font-roboto)",
};

const AXIS_LABEL = {
  fill: INK,
  fillOpacity: 0.6,
  fontSize: 11,
  fontFamily: "var(--font-roboto)",
};

const CentreGrowthChart = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <figure className="flex flex-col gap-6">
      <figcaption className="font-cormorant text-xl text-black sm:text-2xl">
        Cumulative Dialysis Centres Growth Year-wise
      </figcaption>

      <div aria-hidden="true" className="h-79 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={[...CENTRE_GROWTH]}
            layout="vertical"
            margin={{ top: 4, right: 24, bottom: 16, left: 4 }}
            onMouseLeave={() => setActive(null)}
          >
            <CartesianGrid
              horizontal={false}
              stroke={INK}
              strokeOpacity={0.15}
            />
            <XAxis
              type="number"
              domain={[0, AXIS_MAX]}
              ticks={TICKS}
              tick={AXIS_TICK}
              tickLine={false}
              axisLine={false}
              label={{
                value: "Number of Centres",
                position: "insideBottom",
                offset: -12,
                style: AXIS_LABEL,
              }}
            />
            <YAxis
              type="category"
              dataKey="year"
              tick={AXIS_TICK}
              tickLine={false}
              axisLine={false}
              width={44}
            />
            <Tooltip
              cursor={{ fill: INK, fillOpacity: 0.04 }}
              contentStyle={{
                border: "1px solid var(--color-primary)",
                borderRadius: 0,
                background: "#ffffff",
                fontFamily: "var(--font-roboto)",
                fontSize: 12,
              }}
              labelStyle={{ color: INK }}
              formatter={(value) => [`${value} centres`, ""]}
            />
            <Bar
              dataKey="centres"
              barSize={16}
              radius={[0, 4, 4, 0]}
              onMouseEnter={(_, index) => setActive(index)}
            >
              {CENTRE_GROWTH.map((entry, index) => (
                <Cell
                  key={entry.year}
                  fill={index === active ? BAR_HOVER_COLOUR : BAR_COLOUR}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* sr-only sits on the wrapper: a caption escapes the clip if the table carries it */}
      <div className="sr-only">
        <table>
          <caption>Cumulative dialysis centres by year</caption>
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Centres</th>
            </tr>
          </thead>
          <tbody>
            {CENTRE_GROWTH.map((entry) => (
              <tr key={entry.year}>
                <th scope="row">{entry.year}</th>
                <td>{entry.centres}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
};

export default CentreGrowthChart;
