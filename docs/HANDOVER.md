# AKCPL Website Knowledge Transfer

Operational handover for whoever maintains the site on the EC2 instance: form
submissions on disk, the S3 upload script, the pm2 process, and the nginx
coming-soon fallback.

---

## 1. Stack

| Item                           | Value                                                                                          |
| ------------------------------ | ---------------------------------------------------------------------------------------------- |
| Framework                      | Next.js 16 (App Router), React 19, TypeScript, Tailwind v4                                     |
| Process manager                | pm2, single **fork** process named `akcpl-website`                                             |
| App port                       | 3000 (nginx proxies to `127.0.0.1:3000`)                                                       |
| Server                         | EC2, nginx in front                                                                            |
| Forms                          | Server Actions (no API routes), reCAPTCHA v2                                                   |
| Submission storage             | XLSX workbooks + resume PDFs on disk; backed up to S3 by running the script, not automatically |
| App directory (server)         | `/apps/akcpl-website`                                                                          |
| Submissions directory (server) | `/apps/akcpl-submissions`                                                                      |

Do **not** switch pm2 to cluster mode. Workbook appends are serialised through
an in-process queue ([excel.ts](src/lib/submissions/excel.ts)), so two Node
processes writing the same file would drop each other's rows.

---

## 2. Environment variables

Live values go in `.env` at the app root (git-ignored). There is no committed
template, so this table is the record of what the file needs.

| Variable                         | Purpose                                            |
| -------------------------------- | -------------------------------------------------- |
| `SUBMISSIONS_DIR`                | Absolute path holding the dated submission folders |
| `NEXT_PUBLIC_SITE_URL`           | Public site URL (metadata, sitemap, robots)        |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA v2 site key (client)                     |
| `RECAPTCHA_SECRET_KEY`           | reCAPTCHA v2 secret (server)                       |
| `NEXT_PUBLIC_GA_ID`              | GA4 measurement id. Blank means the tag never loads |

`NEXT_PUBLIC_*` values are baked in at build time, so changing them needs a
rebuild, not just a restart.

If `RECAPTCHA_SECRET_KEY` is missing, **every** submission is refused with a
server error and `[recaptcha] RECAPTCHA_SECRET_KEY is not set` is logged.

---

## 3. How submissions are stored

Everything is written under `SUBMISSIONS_DIR`, in folders dated by IST:

```
/apps/akcpl-submissions/
  2026-08-19/
    contact-us.xlsx
    job-applications.xlsx
    resumes/
      105237-john-doe.pdf
```

- One folder per IST day, created on that day's first submission.
- `contact-us.xlsx` holds contact form entries, `job-applications.xlsx` holds
  careers form entries.
- Resumes: PDF only, 2 MB max, named `<HHMMSS>-<applicant-slug>.pdf`; the
  workbook row records the relative path.
- Workbooks are written to a `.tmp` file and renamed, so an interrupted write
  cannot truncate a good workbook.
- Duplicate submissions are kept on purpose. The workbook is append-only, so do
  not add dedup or uniqueness checks.
- If a write fails, the whole submission is logged as JSON under
  `[contact-form]` / `[job-application]`, so nothing is lost.

---

## 4. Uploading submissions to S3

Nothing goes to S3 on its own. The app only writes to disk, and the backup
happens only when someone **runs the script below by hand**. There is no
schedule behind it, so the S3 copy is only as current as the last manual run.

Script: [upload_submissions.py](scripts/upload_submissions.py). It **copies**
to S3; local files stay in place. Auth is the instance's IAM role, and there are
no keys in the repo.

Run it from `/apps/akcpl-website`, not from `/` or your home directory. The
script path is relative, so anywhere else gives
`can't open file 'scripts/upload_submissions.py'`:

```bash
cd /apps/akcpl-website
SUBMISSIONS_DIR=/apps/akcpl-submissions python3 scripts/upload_submissions.py
```

Every command below assumes you are already in `/apps/akcpl-website`.

That uploads **today's** (IST) folder to `s3://akcpl-submissions/<date>/...`.

Keep the `SUBMISSIONS_DIR=` prefix. The script does not read the app's `.env`,
so without the prefix (or an exported variable) it exits with
`SUBMISSIONS_DIR is not set`.

### Day selection (pick one; they are mutually exclusive)

| Flag                                | Uploads                                                 |
| ----------------------------------- | ------------------------------------------------------- |
| _(none)_                            | Today, IST                                              |
| `--yesterday`                       | The previous IST day; catches writes made near midnight |
| `--date 2026-08-19`                 | That single day                                         |
| `--days 7`                          | The last 7 IST days, including today                    |
| `--from 2026-08-01 --to 2026-08-15` | Inclusive range (`--to` defaults to today)              |
| `--all`                             | Every dated folder present; use for a first backfill    |

### Other flags

| Flag            | Effect                                                            |
| --------------- | ----------------------------------------------------------------- |
| `--dry-run`     | Prints the exact S3 keys it would write; never contacts S3        |
| `-y`, `--yes`   | Skips the overwrite confirmation prompt                           |
| `--bucket NAME` | Target bucket. Default `akcpl-submissions` (env `S3_BUCKET`)      |
| `--prefix PATH` | Key prefix before the date folder. Default none (env `S3_PREFIX`) |
| `--region NAME` | Default `ap-south-1` (env `AWS_REGION`)                           |

### Examples

```bash
# See what today would upload, without touching S3
SUBMISSIONS_DIR=/apps/akcpl-submissions python3 scripts/upload_submissions.py --dry-run

# Yesterday, unattended
SUBMISSIONS_DIR=/apps/akcpl-submissions python3 scripts/upload_submissions.py --yesterday -y

# Last 7 days
SUBMISSIONS_DIR=/apps/akcpl-submissions python3 scripts/upload_submissions.py --days 7 -y

# A specific range
SUBMISSIONS_DIR=/apps/akcpl-submissions python3 scripts/upload_submissions.py --from 2026-08-01 --to 2026-08-15 -y

# First-time backfill of everything on disk
SUBMISSIONS_DIR=/apps/akcpl-submissions python3 scripts/upload_submissions.py --all -y

# Different bucket / prefix
SUBMISSIONS_DIR=/apps/akcpl-submissions python3 scripts/upload_submissions.py --bucket my-bucket --prefix backups/akcpl -y
```

### Behaviour to know

> ### ⚠️ WARNING: this overwrites S3 objects
>
> Anything already in the bucket under the same
> key is replaced, with no versioning or undo on the script's side. Re-running a
> past date replaces that date's objects with whatever is on disk now, so a
> local file that was truncated or deleted will overwrite the good S3 copy.
>
> An interactive run asks for confirmation first. **`-y`, or a run with no
> terminal attached, skips that prompt and overwrites straight away.** Use
> `--dry-run` first when you are unsure what a command covers.

- **Workbooks always re-upload:** they grow through the day, so the S3 copy is
  replaced. **Resumes** already in S3 with the same byte size are skipped.
- A missing or empty day folder is logged and skipped, not an error.
- One failing day does not abandon a multi-day run: the failed dates are listed
  at the end and the exit code is `1`.
- Needs `python3` and `boto3` on the instance.

---

## 5. Running and deploying the app

```bash
cd /apps/akcpl-website

sudo git pull
sudo npm ci
sudo npm run build
sudo pm2 restart akcpl-website

sudo pm2 status
sudo pm2 logs akcpl-website --lines 100
```

Run `sudo pm2 save` after any change to the process list so it survives a
reboot.

Before pushing changes:

```bash
npm run typecheck
npm run lint
```

---

## 6. nginx and the coming-soon page

nginx proxies everything to the Next.js process on port 3000. When that process
is down, nginx catches the 502/503/504 and serves a static coming-soon page
instead of an error, so **stopping pm2 is how you put the site behind "coming
soon"**.

The page lives in this repo at [akc-coming-soon/index.html](akc-coming-soon/index.html):
one self-contained HTML file, inline CSS, `noindex`. On the server it resolves
to `/apps/akcpl-website/akc-coming-soon`, which is what nginx points at. To
change its text, edit the file, commit, and `git pull` on the server; nginx
serves it straight off disk, so no build or restart is needed.

Server block for `apexkidneycare.com` / `www.apexkidneycare.com`:

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name apexkidneycare.com www.apexkidneycare.com;

    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    client_max_body_size 50M;
    client_body_timeout 120s;

    location / {
        proxy_pass http://127.0.0.1:3000;

        proxy_http_version 1.1;

        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host  $host;

        proxy_cache off;

        proxy_connect_timeout 60s;
        proxy_read_timeout 300s;
        proxy_send_timeout 300s;

        # If Next.js is down, show coming soon page
        proxy_intercept_errors on;
        error_page 502 503 504 = @coming_soon;
    }

    location @coming_soon {
        root /apps/akcpl-website/akc-coming-soon;
        try_files /index.html =404;
    }
}
```

Show the coming-soon page:

```bash
sudo pm2 stop akcpl-website
```

Bring the site back:

```bash
sudo pm2 start akcpl-website    # or: sudo pm2 restart akcpl-website
```

After editing nginx config:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Because the fallback is wired to 502/503/504, a real crash shows the same page.
If coming-soon appears unexpectedly, check `sudo pm2 status` and
`sudo pm2 logs akcpl-website` first.

---

## 7. If a form errors or no file is created

When a submission fails, the app writes the whole thing to the log before
returning the error, so the enquiry or application is never lost. Read the logs
and you can re-enter it by hand.

```bash
sudo pm2 logs akcpl-website              # live tail
sudo pm2 logs akcpl-website --lines 200  # last 200 lines
sudo pm2 logs akcpl-website --err        # error stream only
```

`sudo pm2 describe akcpl-website` prints the log file paths. Because pm2 runs
under sudo they sit in root's home, normally
`/root/.pm2/logs/akcpl-website-out.log` and `-error.log`, so they can be
grepped directly:

```bash
sudo grep "contact-form" /root/.pm2/logs/akcpl-website-error.log
sudo grep "job-application" /root/.pm2/logs/akcpl-website-error.log
sudo grep "recaptcha" /root/.pm2/logs/akcpl-website-error.log
```

### How the lines look

A failed contact enquiry. The tag is `[contact-form]` and the submission is
JSON on the same line:

```
[contact-form] failed to record submission {"submission":{"fullName":"John Doe","phone":"9876543210","email":"john@example.com","city":"Mumbai","query":"..."},"error":"EACCES: permission denied, open '/apps/akcpl-submissions/2026-08-19/contact-us.xlsx.tmp'"}
```

A failed job application, tagged `[job-application]`. `resumeFile` is the saved
resume path, or `null` if even that did not get written:

```
[job-application] failed to record submission {"application":{"position":"Dialysis Technician","fullName":"John Doe","phone":"9876543210","email":"john@example.com","dateOfBirth":"1995-04-12","address":"...","noticePeriod":"30 days"},"resumeFile":"resumes/105237-john-doe.pdf","error":"ENOSPC: no space left on device"}
```

reCAPTCHA problems are tagged `[recaptcha]`. If every submission on the site is
failing, look here first:

```
[recaptcha] RECAPTCHA_SECRET_KEY is not set; refusing every submission
[recaptcha] siteverify returned 503
[recaptcha] siteverify rejected our request [ 'invalid-input-secret' ]
```

Reading them:

- The `error` field is the real cause. `EACCES` or `EPERM` means the process
  cannot write to `SUBMISSIONS_DIR`; `ENOSPC` means the disk is full; `ENOENT`
  means the path in `SUBMISSIONS_DIR` does not exist.
- `[recaptcha]` lines about a missing or invalid secret mean every visitor is
  being turned away, not just one.
- No line at all for a submission that appeared to succeed means the write went
  through, so check the date folder for that IST day.
