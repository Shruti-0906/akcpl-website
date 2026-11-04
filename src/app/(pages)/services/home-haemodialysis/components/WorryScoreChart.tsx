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
  ZIndexLayer,
  usePlotArea,
  useYAxisScale,
} from "recharts";
import type { ReactNode } from "react";

import { MONO, TOOLTIP_ITEM_STYLE, TOOLTIP_LABEL_STYLE } from "./chartTheme";

const WORRIES = [
  { label: "Safety", before: 74, after: 23 },
  { label: "Comfort", before: 64, after: 18 },
  { label: "Cost", before: 77, after: 58 },
  { label: "Care Quality", before: 75, after: 25 },
  { label: "Emergency Response", before: 83, after: 27 },
];

const TICKS = [0, 25, 50, 75, 100];

const BEFORE_INK = "#7E1F2C";
const AFTER_INK = "#00CC5C";
const AXIS_INK = "#0e2540";
const TICK_INK = "#6b7280";

const CATEGORY_GAP_RATIO = 0.18;
const CATEGORY_GAP = `${CATEGORY_GAP_RATIO * 100}%`;
const BAR_GAP = 6;

const SANS = "var(--font-roboto)";

type TickProps = {
  x?: number;
  y?: number;
  payload?: { value?: string | number };
};

const CategoryTick = ({ x = 0, y = 0, payload }: TickProps) => (
  <text
    x={x}
    y={y + 18}
    textAnchor="middle"
    fill={AXIS_INK}
    fontFamily={SANS}
    fontSize={11}
    fontWeight={500}
  >
    {payload?.value}
  </text>
);

const ScoreTick = ({ x = 0, y = 0, payload }: TickProps) => (
  <text
    x={x}
    y={y}
    dx={-8}
    dy={4}
    textAnchor="end"
    fill={TICK_INK}
    fontFamily={MONO}
    fontSize={10}
  >
    {payload?.value}
  </text>
);

type LabelProps = {
  x?: string | number;
  y?: string | number;
  width?: string | number;
  value?: ReactNode;
};

const valueLabel = (fill: string) => {
  const ValueLabel = ({ x, y, width, value }: LabelProps) => (
    <text
      x={Number(x ?? 0) + Number(width ?? 0) / 2}
      y={Number(y ?? 0) - 7}
      textAnchor="middle"
      fill={fill}
      fontFamily={MONO}
      fontSize={11}
      fontWeight={600}
    >
      {value}
    </text>
  );

  return ValueLabel;
};

const Connectors = () => {
  const plot = usePlotArea();
  const yScale = useYAxisScale();
  if (!plot || !yScale) return null;

  const band = plot.width / WORRIES.length;
  const barWidth = (band * (1 - 2 * CATEGORY_GAP_RATIO) - BAR_GAP) / 2;

  return (
    /* Above the bars (zIndex 300) so the curve reads across the before bar. */
    <ZIndexLayer zIndex={350}>
      {WORRIES.map((worry, index) => {
        const centre = plot.x + band * (index + 0.5);
        const from = centre - BAR_GAP / 2 - barWidth / 2;
        const to = centre + BAR_GAP / 2 + barWidth / 2;
        const fromY = Number(yScale(worry.before));
        const toY = Number(yScale(worry.after));

        return (
          <path
            key={worry.label}
            d={`M ${from} ${fromY} Q ${from + barWidth / 3} ${fromY + (toY - fromY) * 0.62} ${to} ${toY}`}
            fill="none"
            stroke="#0e7c7b"
            strokeWidth="0.9"
            strokeDasharray="3 4"
          />
        );
      })}
    </ZIndexLayer>
  );
};

const WorryScoreChart = () => {
  return (
    <figure>
      <figcaption className="font-roboto text-[10px] font-semibold tracking-[0.2em] text-black uppercase sm:text-[11px]">
        Worry Score &middot; Before vs After Starting Home HD &middot; 100-Point
        Scale
      </figcaption>

      <div className="-mx-1 mt-8 min-w-0 overflow-x-auto px-1">
        <div className="h-80 w-full min-w-190 sm:h-104 lg:min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={WORRIES}
              margin={{ top: 24, right: 8, bottom: 8, left: 0 }}
              barCategoryGap={CATEGORY_GAP}
              barGap={BAR_GAP}
            >
              <defs>
                <linearGradient id="worry-before" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#B5495B" />
                  <stop offset="100%" stopColor="#7E1F2C" />
                </linearGradient>
                <linearGradient id="worry-after" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00CC5C" />
                  <stop offset="100%" stopColor="#007635" />
                </linearGradient>
              </defs>

              <CartesianGrid
                vertical={false}
                stroke="#0e2540"
                strokeOpacity={0.1}
              />
              <XAxis
                dataKey="label"
                tick={<CategoryTick />}
                tickLine={false}
                axisLine={{ stroke: "#0e2540", strokeOpacity: 0.2 }}
                interval={0}
                height={38}
              />
              <YAxis
                domain={[0, 100]}
                ticks={TICKS}
                tick={<ScoreTick />}
                tickLine={false}
                axisLine={false}
                width={44}
              />
              <Tooltip
                cursor={{ fill: "#0e2540", fillOpacity: 0.04 }}
                contentStyle={{
                  border: "1px solid rgba(14,37,64,0.2)",
                  borderRadius: 0,
                  background: "#ffffff",
                  fontFamily: SANS,
                  fontSize: 12,
                  padding: "8px 12px",
                }}
                labelStyle={{ ...TOOLTIP_LABEL_STYLE, color: AXIS_INK }}
                itemStyle={{ ...TOOLTIP_ITEM_STYLE, color: AXIS_INK }}
              />

              <Bar dataKey="before" name="Before" fill="url(#worry-before)">
                <LabelList dataKey="before" content={valueLabel(BEFORE_INK)} />
              </Bar>
              <Bar dataKey="after" name="After" fill="url(#worry-after)">
                <LabelList dataKey="after" content={valueLabel(AFTER_INK)} />
              </Bar>

              <Connectors />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <p className="mt-2 text-right font-cormorant text-[13px] text-[#6b7280] italic">
        source &middot; AKC Home HD patient survey &middot; n=741
      </p>

      {/* sr-only sits on the wrapper: a caption escapes the clip if the table carries it */}
      <div className="sr-only">
        <table>
          <caption>
            Patient worry scores before and after starting home HD, 100-point
            scale
          </caption>
          <thead>
            <tr>
              <th scope="col">Concern</th>
              <th scope="col">Before starting home HD</th>
              <th scope="col">After starting home HD</th>
            </tr>
          </thead>
          <tbody>
            {WORRIES.map((worry) => (
              <tr key={worry.label}>
                <th scope="row">{worry.label}</th>
                <td>{worry.before}</td>
                <td>{worry.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
};

export default WorryScoreChart;
