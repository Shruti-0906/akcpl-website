"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  ACCENT_INK,
  GOLD_BOTTOM,
  GOLD_TOP,
  INK,
  MONO,
  TEAL_BOTTOM,
  TEAL_TOP,
  TOOLTIP_ITEM_STYLE,
  TOOLTIP_LABEL_STYLE,
  TOOLTIP_STYLE,
} from "./chartTheme";

const PENETRATION = [
  { country: "US", share: 2.4 },
  { country: "UK", share: 2.1 },
  { country: "Australia", share: 8.8 },
  { country: "New Zealand", share: 16 },
  { country: "Canada", share: 5 },
  { country: "India (AKC)", share: 1.6 },
] as const;

const HIGHLIGHT = "India (AKC)";

const TICKS = [0, 5, 10, 15, 20];

const CATEGORY_GAP = "18%";

const LABEL_WEIGHT = 600;

type TickProps = {
  x?: number;
  y?: number;
  payload?: { value?: string | number };
};

const CountryTick = ({ x = 0, y = 0, payload }: TickProps) => {
  const value = String(payload?.value ?? "");

  if (value !== HIGHLIGHT) {
    return (
      <text
        x={x}
        y={y + 20}
        textAnchor="middle"
        fill={INK}
        fillOpacity={0.85}
        fontFamily={MONO}
        fontSize={14}
        fontWeight={LABEL_WEIGHT}
      >
        {value}
      </text>
    );
  }

  return (
    <g>
      <line
        x1={x}
        y1={y}
        x2={x}
        y2={y + 46}
        stroke={INK}
        strokeOpacity={0.3}
        strokeDasharray="3 4"
      />
      <text
        x={x}
        y={y + 20}
        textAnchor="middle"
        fill={ACCENT_INK}
        fontFamily={MONO}
        fontSize={14}
        fontWeight={LABEL_WEIGHT}
      >
        {value}
      </text>
      <text
        x={x}
        y={y + 62}
        textAnchor="middle"
        fill={ACCENT_INK}
        fontFamily={MONO}
        fontSize={11}
        fontWeight={700}
        letterSpacing="0.16em"
      >
        AKC &middot; INDIA LEADER
      </text>
    </g>
  );
};

const ShareTick = ({ x = 0, y = 0, payload }: TickProps) => (
  <text
    x={x}
    y={y}
    dx={-8}
    dy={4}
    textAnchor="end"
    fill={INK}
    fontFamily={MONO}
    fontSize={13}
    fontWeight={700}
  >
    {payload?.value}%
  </text>
);

type ValueLabelProps = {
  x?: number;
  y?: number;
  width?: number;
  index?: number;
  value?: string | number;
};

const ValueLabel = ({
  x = 0,
  y = 0,
  width = 0,
  index = 0,
  value,
}: ValueLabelProps) => {
  const highlighted = PENETRATION[index]?.country === HIGHLIGHT;

  return (
    <text
      x={x + width / 2}
      y={y - 14}
      textAnchor="middle"
      fill={highlighted ? ACCENT_INK : INK}
      fillOpacity={highlighted ? 1 : 0.85}
      fontFamily={MONO}
      fontSize={19}
      fontWeight={700}
    >
      {value}%
    </text>
  );
};

const HomeHdPenetrationChart = () => {
  return (
    <figure className="flex flex-col gap-6">
      <figcaption
        style={{ color: ACCENT_INK }}
        className="font-roboto text-[11px] font-semibold tracking-[0.18em] uppercase"
      >
        Home HD as % of total dialysis population
      </figcaption>

      <div className="-mx-1 min-w-0 overflow-x-auto px-1">
        <div
          aria-hidden="true"
          className="h-80 w-full min-w-170 sm:h-96 lg:min-w-0"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[...PENETRATION]}
              margin={{ top: 32, right: 28, bottom: 4, left: 0 }}
              barCategoryGap={CATEGORY_GAP}
            >
              <defs>
                <linearGradient id="hd-bar-teal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={TEAL_TOP} />
                  <stop offset="100%" stopColor={TEAL_BOTTOM} />
                </linearGradient>
                <linearGradient id="hd-bar-gold" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={GOLD_TOP} />
                  <stop offset="100%" stopColor={GOLD_BOTTOM} />
                </linearGradient>
              </defs>

              <CartesianGrid
                vertical={false}
                stroke={INK}
                strokeOpacity={0.08}
              />
              <XAxis
                dataKey="country"
                tick={<CountryTick />}
                tickLine={false}
                axisLine={{ stroke: INK, strokeOpacity: 0.35 }}
                height={82}
                interval={0}
              />
              <YAxis
                domain={[0, 20]}
                ticks={TICKS}
                tick={<ShareTick />}
                tickLine={false}
                axisLine={false}
                width={56}
              />
              <Tooltip
                cursor={{ fill: INK, fillOpacity: 0.05 }}
                contentStyle={TOOLTIP_STYLE}
                labelStyle={TOOLTIP_LABEL_STYLE}
                itemStyle={TOOLTIP_ITEM_STYLE}
                separator=""
                formatter={(value) => [`${value}% on home HD`, ""]}
              />
              <Bar dataKey="share" maxBarSize={140}>
                {PENETRATION.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      entry.country === HIGHLIGHT
                        ? "url(#hd-bar-gold)"
                        : "url(#hd-bar-teal)"
                    }
                  />
                ))}
                <LabelList dataKey="share" content={<ValueLabel />} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* sr-only sits on the wrapper; a caption escapes the clip if the table carries it */}
      <div className="sr-only">
        <table>
          <caption>
            Home hemodialysis as a percentage of the total dialysis population,
            by country
          </caption>
          <thead>
            <tr>
              <th scope="col">Country</th>
              <th scope="col">Share on home HD</th>
            </tr>
          </thead>
          <tbody>
            {PENETRATION.map((entry) => (
              <tr key={entry.country}>
                <th scope="row">{entry.country}</th>
                <td>{entry.share}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
};

export default HomeHdPenetrationChart;
