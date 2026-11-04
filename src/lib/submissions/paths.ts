import "server-only";

import { mkdir } from "node:fs/promises";
import path from "node:path";

const TIME_ZONE = "Asia/Kolkata";

/** en-CA formats as YYYY-MM-DD, which is exactly the folder name we want. */
const folderFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

/** h23, not hour12:false — the latter renders midnight as "24" on some ICU
 *  builds, pushing the date forward a day. */
const partsFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: TIME_ZONE,
  hourCycle: "h23",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

export const istDateFolder = (at: Date = new Date()): string =>
  folderFormatter.format(at);

export const istTimestamp = (at: Date = new Date()): Date => {
  const parts = new Map(
    partsFormatter.formatToParts(at).map(({ type, value }) => [type, value]),
  );

  const num = (key: Intl.DateTimeFormatPartTypes): number => {
    const value = parts.get(key);
    if (value === undefined) {
      throw new Error(`Intl did not return a "${key}" part for the timestamp`);
    }
    return Number(value);
  };

  return new Date(
    Date.UTC(
      num("year"),
      num("month") - 1,
      num("day"),
      num("hour"),
      num("minute"),
      num("second"),
    ),
  );
};

export const submissionsRoot = (): string => {
  const root = process.env.SUBMISSIONS_DIR?.trim();

  if (!root) {
    throw new Error(
      "SUBMISSIONS_DIR is not set. Point it at the directory that should hold " +
        "submission workbooks, e.g. /home/ec2-user/akcpl-submissions",
    );
  }

  return root;
};

/** Creates today's IST folder, optionally a subfolder inside it, and returns
 *  the absolute path. */
export const dayFolder = async (
  subfolder?: string,
  at?: Date,
): Promise<string> => {
  const base = path.join(submissionsRoot(), istDateFolder(at));
  const dir = subfolder ? path.join(base, subfolder) : base;
  await mkdir(dir, { recursive: true });
  return dir;
};

export const dayFilePath = async (
  fileName: string,
  at?: Date,
): Promise<string> => path.join(await dayFolder(undefined, at), fileName);
