/**
 * The `.outcome` figures inside the source's `.outcomes-grid` - an oversized
 * number, an optional `.pct` suffix, and the bold label with its italic
 * sub-line underneath.
 */
export interface Outcome {
  /** The oversized `.outcome-num` figure, e.g. "95" or "15–25". */
  num: string;
  /** The smaller `.pct` suffix beside the figure. Omitted when there isn't one. */
  pct?: string;
  /** The bold uppercase `.outcome-label`. */
  label: string;
  /** The italic `.outcome-sub` line beneath the label. */
  sub: string;
}

export const OUTCOMES: Outcome[] = [
  {
    num: "95",
    pct: "%",
    label: "1-Year Graft Survival",
    sub: "Living donor transplants",
  },
  {
    num: "85",
    pct: "%",
    label: "5-Year Graft Survival",
    sub: "Living donor transplants",
  },
  {
    num: "90",
    pct: "%",
    label: "1-Year Graft Survival",
    sub: "Deceased donor transplants",
  },
  {
    num: "15–25",
    label: "Years of Function",
    sub: "Common with good care",
  },
];
