#!/usr/bin/env python3
"""Upload a day's form submissions to S3.

Mirrors the local layout into the bucket:

    2026-08-19/contact-us.xlsx
    2026-08-19/job-applications.xlsx
    2026-08-19/resumes/105237-asha-menon.pdf

Local files are left in place; S3 is a backup, not a move. Intended to run
from cron on the EC2 instance, authenticating through its IAM role.
"""

from __future__ import annotations

import argparse
import os
import re
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

# India has no DST, so a fixed offset is exact and avoids depending on a tz
# database being present.
TIME_ZONE = timezone(timedelta(hours=5, minutes=30), "IST")

DEFAULT_BUCKET = "akcpl-submissions"
DEFAULT_REGION = "ap-south-1"

DATE_PATTERN = re.compile(r"^\d{4}-\d{2}-\d{2}$")

CONTENT_TYPES = {
    ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ".pdf": "application/pdf",
}


def log(message: str) -> None:
    stamp = datetime.now(TIME_ZONE).strftime("%Y-%m-%d %H:%M:%S")
    print(f"{stamp} {message}", flush=True)


def today_ist() -> str:
    return datetime.now(TIME_ZONE).strftime("%Y-%m-%d")


def submissions_root() -> Path:
    """SUBMISSIONS_DIR from the environment, falling back to the app's own
    .env.local so the path is configured in exactly one place."""
    value = os.environ.get("SUBMISSIONS_DIR", "").strip()

    if not value:
        env_file = Path(__file__).resolve().parent.parent / ".env.local"
        if env_file.is_file():
            for line in env_file.read_text(encoding="utf-8").splitlines():
                key, _, raw = line.partition("=")
                if key.strip() == "SUBMISSIONS_DIR":
                    value = raw.strip().strip('"').strip("'")
                    break

    if not value:
        sys.exit(
            "SUBMISSIONS_DIR is not set, and no value was found in .env.local. "
            "Point it at the directory holding the dated submission folders."
        )

    return Path(value)


def files_in(folder: Path) -> list[Path]:
    return sorted(path for path in folder.rglob("*") if path.is_file())


def upload(folder: Path, date: str, bucket: str, prefix: str, region: str) -> int:
    """Returns the number of files uploaded."""
    import boto3
    from botocore.exceptions import BotoCoreError, ClientError

    client = boto3.client("s3", region_name=region)
    uploaded = 0

    for path in files_in(folder):
        relative = path.relative_to(folder).as_posix()
        key = "/".join(part for part in (prefix.strip("/"), date, relative) if part)
        size = path.stat().st_size

        # Resumes never change once written, so an object of the same size is
        # already this file. The workbooks grow all day and always re-upload.
        if path.suffix.lower() != ".xlsx":
            try:
                existing = client.head_object(Bucket=bucket, Key=key)
                if existing["ContentLength"] == size:
                    log(f"skip   {key} (unchanged)")
                    continue
            except ClientError as error:
                if error.response["Error"]["Code"] not in ("404", "NoSuchKey"):
                    raise

        extra = {}
        content_type = CONTENT_TYPES.get(path.suffix.lower())
        if content_type:
            extra["ContentType"] = content_type

        try:
            client.upload_file(str(path), bucket, key, ExtraArgs=extra)
        except (BotoCoreError, ClientError) as error:
            log(f"FAILED {key}: {error}")
            raise

        log(f"upload {key} ({size} bytes)")
        uploaded += 1

    return uploaded


def parse_date(value: str, flag: str) -> datetime:
    if not DATE_PATTERN.match(value):
        sys.exit(f"{flag} must look like YYYY-MM-DD, got {value!r}")
    try:
        return datetime.strptime(value, "%Y-%m-%d")
    except ValueError:
        sys.exit(f"{flag} is not a real date: {value!r}")


def day_span(start: datetime, end: datetime) -> list[str]:
    if end < start:
        sys.exit("--from must not be later than --to.")
    return [
        (start + timedelta(days=offset)).strftime("%Y-%m-%d")
        for offset in range((end - start).days + 1)
    ]


def existing_days(root: Path) -> list[str]:
    """Dated folders actually present, oldest first."""
    if not root.is_dir():
        return []
    return sorted(
        path.name
        for path in root.iterdir()
        if path.is_dir() and DATE_PATTERN.match(path.name)
    )


def resolve_dates(args, root: Path) -> list[str]:
    now = datetime.now(TIME_ZONE)

    if args.all:
        return existing_days(root)

    if args.days is not None:
        if args.days < 1:
            sys.exit("--days must be 1 or more.")
        return [
            (now - timedelta(days=offset)).strftime("%Y-%m-%d")
            for offset in reversed(range(args.days))
        ]

    if args.from_date or args.to_date:
        start = (
            parse_date(args.from_date, "--from")
            if args.from_date
            else parse_date(existing_days(root)[0], "--from")
            if existing_days(root)
            else now
        )
        end = parse_date(args.to_date, "--to") if args.to_date else now.replace(tzinfo=None)
        return day_span(start, end)

    if args.yesterday:
        return [(now - timedelta(days=1)).strftime("%Y-%m-%d")]

    if args.date:
        parse_date(args.date, "--date")
        return [args.date]

    return [now.strftime("%Y-%m-%d")]


def confirm(
    bucket: str, prefix: str, dates: list[str], file_count: int
) -> bool | None:
    """Ask before overwriting. Returns None when there is nobody to ask, so a
    scripted run proceeds rather than hanging or silently doing nothing."""
    where = f"s3://{bucket}/{prefix.strip('/') + '/' if prefix.strip('/') else ''}"
    span = dates[0] if len(dates) == 1 else f"{dates[0]} to {dates[-1]}"

    print()
    print(f"  Uploading {file_count} file(s) for {span} ({len(dates)} day(s))")
    print(f"  to {where}")
    print()
    print("  CAUTION: objects already in S3 under the same keys will be")
    print("  OVERWRITTEN. The workbooks are always replaced; resumes of an")
    print("  unchanged size are skipped.")
    print()

    try:
        answer = input("  Continue? [y/N] ").strip().lower()
    except EOFError:
        # Redirected or closed stdin. Some shells still report a tty here, so
        # this is the real non-interactive signal, not isatty alone.
        return None

    return answer in ("y", "yes")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--date",
        help="Single day as YYYY-MM-DD. Defaults to today in Asia/Kolkata.",
    )
    parser.add_argument(
        "--yesterday",
        action="store_true",
        help="The previous IST day, to catch writes made near midnight.",
    )
    parser.add_argument(
        "--from",
        dest="from_date",
        help="Start of an inclusive range, YYYY-MM-DD.",
    )
    parser.add_argument(
        "--to",
        dest="to_date",
        help="End of an inclusive range, YYYY-MM-DD. Defaults to today.",
    )
    parser.add_argument(
        "--days",
        type=int,
        help="The last N IST days, including today.",
    )
    parser.add_argument(
        "--all",
        action="store_true",
        help="Every dated folder present. Use for a first backfill.",
    )
    parser.add_argument(
        "-y",
        "--yes",
        action="store_true",
        help="Skip the overwrite confirmation. Use this in cron.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="List what would be uploaded without contacting S3.",
    )
    parser.add_argument("--bucket", default=os.environ.get("S3_BUCKET", DEFAULT_BUCKET))
    parser.add_argument("--prefix", default=os.environ.get("S3_PREFIX", ""))
    parser.add_argument("--region", default=os.environ.get("AWS_REGION", DEFAULT_REGION))
    args = parser.parse_args()

    selectors = [
        bool(args.date),
        args.yesterday,
        bool(args.from_date or args.to_date),
        args.days is not None,
        args.all,
    ]
    if sum(selectors) > 1:
        sys.exit("Pick one of --date, --yesterday, --from/--to, --days or --all.")

    root = submissions_root()
    dates = resolve_dates(args, root)

    if not dates:
        log("no dated folders found - nothing to upload")
        return 0

    # Pre-pass so the confirmation can state the real total before anything
    # is sent, and so empty days are reported once rather than mid-upload.
    work: list[tuple[str, Path, list[Path]]] = []
    for date in dates:
        folder = root / date

        # A missing folder just means nobody submitted that day.
        if not folder.is_dir():
            log(f"{date}: no folder, skipping")
            continue

        found = files_in(folder)
        if not found:
            log(f"{date}: folder is empty, skipping")
            continue

        work.append((date, folder, found))

    total_files = sum(len(found) for _, _, found in work)

    if not work:
        log("nothing to upload")
        return 0

    span = (
        dates[0] if len(dates) == 1 else f"{dates[0]} to {dates[-1]} ({len(dates)} days)"
    )
    log(f"target: {span}")

    if args.dry_run:
        for date, folder, found in work:
            for path in found:
                relative = path.relative_to(folder).as_posix()
                key = "/".join(
                    part for part in (args.prefix.strip("/"), date, relative) if part
                )
                log(f"would upload s3://{args.bucket}/{key} ({path.stat().st_size} bytes)")
        log(f"dry run: {total_files} file(s) across {len(work)} day(s) with content")
        return 0

    if not args.yes:
        if sys.stdin.isatty():
            answer = confirm(args.bucket, args.prefix, dates, total_files)
        else:
            answer = None

        if answer is None:
            # cron and CI have nobody to ask; blocking would hang forever.
            log("non-interactive - proceeding without confirmation")
        elif not answer:
            log("aborted - nothing was uploaded")
            return 1

    total_uploaded = 0
    total_unchanged = 0
    failed_files = 0
    failed: list[str] = []

    for date, folder, found in work:
        try:
            sent = upload(folder, date, args.bucket, args.prefix, args.region)
            total_uploaded += sent
            total_unchanged += len(found) - sent
        except Exception as error:
            # Keep going: one bad day must not abandon the rest of a backfill.
            log(f"{date}: FAILED - {error}")
            failed.append(date)
            failed_files += len(found)

    summary = (
        f"done - {total_uploaded} uploaded, {total_unchanged} unchanged, "
        f"across {len(dates)} day(s)"
    )
    if failed:
        summary += f", {failed_files} file(s) NOT uploaded"
    log(summary)

    if failed:
        log(f"failed days: {', '.join(failed)}")
        return 1

    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except Exception as error: 
        log(f"ERROR {error}")
        sys.exit(1)
