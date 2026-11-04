import "server-only";

import { existsSync } from "node:fs";
import { rename } from "node:fs/promises";

import ExcelJS from "exceljs";

import { dayFilePath, istTimestamp } from "./paths";

export type SubmissionColumn = { header: string; width: number };

export type CellValue = string | number;

const SHEET_NAME = "Submissions";
const TIMESTAMP_FORMAT = "dd-mm-yyyy hh:mm:ss";
const TIMESTAMP_COLUMN: SubmissionColumn = {
  header: "Timestamp (IST)",
  width: 22,
};

/** Appending re-reads the whole workbook, so overlapping writes would drop
 *  each other's rows. One Node process, so chaining them is enough. */
let writeQueue: Promise<unknown> = Promise.resolve();

const enqueue = <T>(task: () => Promise<T>): Promise<T> => {
  const result = writeQueue.then(task, task);
  writeQueue = result.catch(() => undefined);
  return result;
};

const openWorkbook = async (
  filePath: string,
  columns: readonly SubmissionColumn[],
) => {
  const workbook = new ExcelJS.Workbook();

  if (existsSync(filePath)) {
    await workbook.xlsx.readFile(filePath);
    const existing = workbook.getWorksheet(SHEET_NAME);
    return { workbook, sheet: existing ?? workbook.addWorksheet(SHEET_NAME) };
  }

  const sheet = workbook.addWorksheet(SHEET_NAME);
  sheet.columns = [TIMESTAMP_COLUMN, ...columns].map((column) => ({
    header: column.header,
    width: column.width,
  }));
  sheet.getRow(1).font = { bold: true };
  sheet.views = [{ state: "frozen", ySplit: 1 }];

  return { workbook, sheet };
};

/** Appends one row to today's IST-dated workbook, creating it if absent. The
 *  timestamp column is owned here so it always agrees with the day folder. */
export const appendSubmission = (
  fileName: string,
  columns: readonly SubmissionColumn[],
  values: readonly CellValue[],
  at: Date = new Date(),
): Promise<void> =>
  enqueue(async () => {
    const filePath = await dayFilePath(fileName, at);
    const { workbook, sheet } = await openWorkbook(filePath, columns);

    // Positional, not keyed: exceljs does not persist column keys, so a
    // keyed addRow writes nothing once the file has been read back.
    const row = sheet.addRow([istTimestamp(at), ...values]);
    row.getCell(1).numFmt = TIMESTAMP_FORMAT;

    // Swap rather than overwrite: rename is atomic, so an interrupted write
    // cannot replace a good workbook with a truncated one.
    const tmpPath = `${filePath}.tmp`;
    await workbook.xlsx.writeFile(tmpPath);
    await rename(tmpPath, filePath);
  });
