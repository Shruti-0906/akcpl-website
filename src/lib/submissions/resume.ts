import "server-only";

import { writeFile } from "node:fs/promises";
import path from "node:path";

import { dayFolder } from "./paths";

const SUBFOLDER = "resumes";

const slug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40) || "applicant";

const stamp = (at: Date) =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hourCycle: "h23",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
    .format(at)
    .replace(/\D/g, "");

/** Writes the PDF into today's `resumes/` folder and returns the stored file
 *  name for the spreadsheet row. Repeat applications are expected, so a name
 *  clash gets a counter rather than overwriting the earlier file. */
export const saveResume = async (
  file: File,
  applicantName: string,
  at: Date = new Date(),
): Promise<string> => {
  const dir = await dayFolder(SUBFOLDER, at);
  const buffer = Buffer.from(await file.arrayBuffer());
  const base = `${stamp(at)}-${slug(applicantName)}`;

  for (let attempt = 1; ; attempt += 1) {
    const fileName = attempt === 1 ? `${base}.pdf` : `${base}-${attempt}.pdf`;

    try {
      // wx fails rather than overwriting, which settles the race without a lock.
      await writeFile(path.join(dir, fileName), buffer, { flag: "wx" });
      // Forward slash regardless of platform: this string is read by a human
      // in a spreadsheet, not resolved by the filesystem.
      return `${SUBFOLDER}/${fileName}`;
    } catch (error) {
      const code = (error as NodeJS.ErrnoException).code;
      if (code !== "EEXIST") throw error;
    }
  }
};
