
const COUNTABLE = /^(\D*)(\d[\d,]*(?:\.\d+)?)(\D*)$/;

const YEAR = /^(?:19|20)\d{2}$/;

export interface ParsedValue {
  prefix: string;
  suffix: string;
  target: number;
  decimals: number;
  separators: readonly number[];
}

const separatorOffsets = (integer: string): number[] => {
  const offsets: number[] = [];
  let digits = 0;

  for (let i = integer.length - 1; i >= 0; i -= 1) {
    if (integer[i] === ",") offsets.push(digits);
    else digits += 1;
  }

  return offsets;
};

export const parseValue = (
  value: string,
  allowYear = false,
): ParsedValue | null => {
  const match = COUNTABLE.exec(value.trim());
  if (!match) return null;

  const [, prefix = "", figure = "", suffix = ""] = match;
  const [integer = "", fraction = ""] = figure.split(".");
  const digits = integer.replace(/,/g, "");

  const bareYear =
    !prefix && !suffix && !fraction && digits === integer && YEAR.test(digits);
  if (bareYear && !allowYear) return null;

  return {
    prefix,
    suffix,
    target: Number(fraction ? `${digits}.${fraction}` : digits),
    decimals: fraction.length,
    separators: separatorOffsets(integer),
  };
};

const applySeparators = (
  digits: string,
  separators: readonly number[],
): string =>
  [...digits]
    .reverse()
    .map((digit, index) =>
      index > 0 && separators.includes(index) ? `${digit},` : digit,
    )
    .reverse()
    .join("");

/** Rebuilds one frame of the count in the shape of the original string. */
export const formatValue = (value: number, parsed: ParsedValue): string => {
  const [integer = "", fraction] = value.toFixed(parsed.decimals).split(".");
  const grouped = applySeparators(integer, parsed.separators);

  return `${parsed.prefix}${grouped}${fraction ? `.${fraction}` : ""}${parsed.suffix}`;
};
