export const TEAL_TOP = "#1a807f";
export const TEAL_BOTTOM = "#35a89a";

export const MONO = "var(--font-space-mono)";
export const INK = "#ffffff";

export const ACCENT_INK = "#e0ae44";
export const GOLD_TOP = "#d2a03c";
export const GOLD_BOTTOM = "#e8bd5f";

export const TOOLTIP_STYLE = {
  border: `1px solid ${TEAL_BOTTOM}`,
  borderRadius: 0,
  background: "#001724",
  fontFamily: "var(--font-roboto)",
  fontSize: 12,
  padding: "8px 12px",
} as const;

export const TOOLTIP_LABEL_STYLE = {
  color: INK,
  fontWeight: 600,
  marginBottom: 2,
} as const;

export const TOOLTIP_ITEM_STYLE = {
  color: INK,
  opacity: 0.8,
  padding: 0,
} as const;
