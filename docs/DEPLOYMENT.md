# Deployment and Infrastructure

Everything needed to run, release and troubleshoot the AKCPL website in
production: the AWS components it sits on, the release steps, the coming-soon
fallback, and the manual S3 backup of form submissions.

For the codebase itself, see the [README](../README.md).

---

## 1. Architecture at a glance

A request travels through four hops before it reaches Next.js:

```
Browser
   |  HTTPS :443
   v
Application Load Balancer   akc-new-website        (ACM certificate lives here)
   |  HTTP :80
   v
Target group                akc-new-website-tg
   |
   v
EC2 instance  t3.small, ap-south-1
   |
   +-- nginx  :80            proxy, security headers, coming-soon fallback
         |  HTTP 127.0.0.1:3000
         v
       Next.js  (pm2 fork process "akcpl-website")
         |
         v
       Disk  /apps/akcpl-submissions        XLSX workbooks + resume PDFs
         |
         |  manual run of scripts/upload_submissions.py
         v
       S3  s3://akcpl-submissions/
```

Two consequences of this shape are worth internalising before you change
anything:

- **TLS ends at the load balancer.** nginx and Next.js only ever see plain HTTP
  on port 80. The original scheme arrives as the `X-Forwarded-Proto` header,
  which nginx passes through. Do not add a Certbot certificate to the instance.
- **Nothing reaches S3 on its own.** The app writes to local disk only. The S3
  copy is exactly as current as the last time a human ran the upload script.

---

## 2. AWS infrastructure components

All resources are in **ap-south-1 (Mumbai)**.

### Compute

| Item            | Value                                           |
| --------------- | ----------------------------------------------- |
| Service         | EC2, single instance                            |
| Instance type   | **t3.small** (2 vCPU, 2 GiB RAM)                |
| Region          | **ap-south-1** (Mumbai)                         |
| OS              | Amazon Linux                                    |
| App directory   | `/apps/akcpl-website`                           |
| Data directory  | `/apps/akcpl-submissions`                       |
| Process manager | pm2, one **fork** process named `akcpl-website` |
| Web server      | nginx, listening on port 80                     |
| App port        | 3000, bound to `127.0.0.1`                      |

There is exactly one instance. It is not in an Auto Scaling group and it is not
replaceable without losing the submissions on its disk, because the workbooks
live on the instance's own volume rather than in S3 or a database. Treat the
volume as stateful.

Builds run on this box, and `npm run build` on 2 GiB is tight. If a build is
killed with no useful error, suspect memory before anything else: confirm swap
is present, or build elsewhere and copy the artefact across.

### Load balancing

| Item                | Value                                              |
| ------------------- | -------------------------------------------------- |
| Load balancer       | **`akc-new-website`**, Application Load Balancer   |
| Target group        | **`akc-new-website-tg`**                           |
| Listener            | HTTPS :443, ACM certificate attached               |
| Forwards to targets | HTTP :80 on the instance, where nginx is listening |
| Registered target   | The single t3.small instance                       |

The ALB exists specifically so the SSL certificate is managed by AWS rather than
on the instance. That is the reason to keep traffic flowing through it:
bypassing the ALB and pointing DNS at the instance drops HTTPS entirely.

A port 80 listener, if present, should redirect to 443 rather than forward.

> **Health checks and the coming-soon page.** nginx converts a 502/503/504 from
> a dead Next.js process into the coming-soon page returned with a **200**. If
> the target group health check hits `/`, it will therefore keep reporting the
> target healthy while the app is actually down. That is fine if you want the
> ALB to keep serving coming-soon, but it means **the target group is not a
> signal that the app is up**. Check `pm2 status` for that. If you would rather
> the health check track the app itself, point it at a path that bypasses the
> fallback and confirm nginx does not intercept it.

### Certificate

| Item     | Value                                                          |
| -------- | -------------------------------------------------------------- |
| Service  | AWS Certificate Manager (ACM)                                  |
| Attached | HTTPS listener on `akc-new-website`                            |
| Domains  | `apexkidneycare.com`, `www.apexkidneycare.com`                 |
| Renewal  | Automatic, provided the validation CNAME stays in the DNS zone |

ACM renews on its own. The one way this breaks is someone deleting the DNS
validation record, so leave those records alone.

### Storage and access

| Item             | Value                                                          |
| ---------------- | -------------------------------------------------------------- |
| S3 bucket        | `akcpl-submissions` (script default, override with `--bucket`) |
| Bucket region    | `ap-south-1`                                                   |
| Key layout       | `<date>/contact-us.xlsx`, `<date>/resumes/<file>.pdf`          |
| Credentials      | The instance's IAM role. No keys in the repo, none on disk     |
| Required actions | `s3:PutObject`, `s3:HeadObject` / `s3:GetObject` on the bucket |

The script needs `HeadObject` as well as `PutObject`: it compares resume sizes
before deciding to skip an upload.

### Values to confirm on the console

These are specific to the account and are deliberately not written down here.
Read them off AWS rather than guessing:

- Instance ID, availability zone, Elastic IP, and volume size
- Security group rules. The instance's port 80 should accept traffic from the
  ALB's security group only, not from the whole internet
- The target group's health check path, interval and thresholds
- The ACM certificate ARN and the Route 53 hosted zone holding the alias record

```bash
aws elbv2 describe-load-balancers --names akc-new-website --region ap-south-1
aws elbv2 describe-target-groups  --names akc-new-website-tg --region ap-south-1
aws elbv2 describe-target-health \
  --target-group-arn <arn-from-the-previous-command> --region ap-south-1
```

---

## 3. Environment variables on the server

Live values sit in `/apps/akcpl-website/.env`, which is git-ignored. There is
no committed template, so the table below is the record of what the file needs.

| Variable                         | Production value                    |
| -------------------------------- | ----------------------------------- |
| `SUBMISSIONS_DIR`                | `/apps/akcpl-submissions`           |
| `NEXT_PUBLIC_SITE_URL`           | `https://apexkidneycare.com`        |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA v2 site key               |
| `RECAPTCHA_SECRET_KEY`           | reCAPTCHA v2 secret                 |
| `NEXT_PUBLIC_GA_ID`              | GA4 measurement id, optional        |

`NEXT_PUBLIC_*` values are baked into the bundle at build time. Changing one
requires `npm run build` before the restart, not just `pm2 restart`.

A missing `RECAPTCHA_SECRET_KEY` refuses **every** submission on the site and
logs `[recaptcha] RECAPTCHA_SECRET_KEY is not set`.

---

## 4. Releasing a new version

Every command below assumes you are in `/apps/akcpl-website`.

**Before you push, on your own machine:**

```bash
npm run typecheck
npm run lint
```

**On the server:**

```bash
cd /apps/akcpl-website

# 1. Pull the new code
sudo git pull

# 2. Install dependencies exactly as locked
sudo npm ci

# 3. Build. This is the step that bakes in NEXT_PUBLIC_* values
sudo npm run build

# 4. Swap the running process over
sudo pm2 restart akcpl-website

# 5. Confirm
sudo pm2 status
sudo pm2 logs akcpl-website --lines 100
```

Then load the site over HTTPS and submit a test enquiry, so you know the whole
path from ALB to disk still works.

Notes on the steps:

- Use `npm ci`, not `npm install`. It installs from the lockfile and will not
  quietly move a dependency.
- The site is briefly unavailable between steps 3 and 4 finishing. nginx serves
  the coming-soon page during that window rather than an error.
- Run `sudo pm2 save` after any change to the **process list** (adding,
  renaming, or removing a process), so the list survives a reboot. A plain
  restart does not need it.
- pm2 runs under `sudo` here, so the process and its logs belong to root. Always
  use `sudo` with pm2, or you will be talking to a different, empty pm2 daemon
  under your own user.

### Rolling back

There is no build artifact store, so a rollback is a checkout of the previous
commit and a rebuild:

```bash
cd /apps/akcpl-website
sudo git log --oneline -10
sudo git checkout <last-good-commit-sha>
sudo npm ci
sudo npm run build
sudo pm2 restart akcpl-website
```

This leaves the repo with a detached HEAD. Get back onto the branch with
`sudo git checkout main` once the fix is committed forward.

---

## 5. pm2

```bash
sudo pm2 status                          # running? restart count? uptime?
sudo pm2 logs akcpl-website              # live tail
sudo pm2 logs akcpl-website --lines 200  # last 200 lines
sudo pm2 logs akcpl-website --err        # error stream only
sudo pm2 describe akcpl-website          # config, including log file paths
sudo pm2 restart akcpl-website
sudo pm2 stop akcpl-website
sudo pm2 start akcpl-website
sudo pm2 save                            # persist the process list across reboot
```

> **Never switch this process to cluster mode.** Workbook appends are serialised
> through an in-process queue in
> [src/lib/submissions/excel.ts](../src/lib/submissions/excel.ts). That queue
> only coordinates writers inside one Node process, so a second process writing
> the same workbook would silently drop the other's rows. One fork process, no
> exceptions.

A climbing restart count in `pm2 status` means the app is crash-looping. Read
the error log before restarting it again.

If the process is ever deleted from pm2 and has to be recreated from scratch,
this is the command that created it. It is pm2's default fork mode with a single
instance, which is what you want:

```bash
cd /apps/akcpl-website
sudo pm2 start npm --name akcpl-website -- start
sudo pm2 save
```

Runtime config reaches the app through `/apps/akcpl-website/.env`, which
`next start` loads. `.env.local` is for local development and is not used on the
server.

---

## 6. nginx and the coming-soon page

nginx proxies everything to Next.js on port 3000. When that process is down it
catches the 502/503/504 and serves a static coming-soon page instead of an
error, which means **stopping pm2 is how you put the site behind "coming
soon"**:

```bash
sudo pm2 stop akcpl-website     # show coming soon
sudo pm2 start akcpl-website    # bring the site back
```

The page is one self-contained HTML file with inline CSS and a `noindex` tag,
committed at [akc-coming-soon/index.html](../akc-coming-soon/index.html). On the
server it resolves to `/apps/akcpl-website/akc-coming-soon`, which is what nginx
points at. To change its wording: edit, commit, `git pull` on the server. nginx
reads it straight off disk, so there is no build and no restart.

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

There is no TLS block here by design: the ALB terminates HTTPS and forwards
plain HTTP to port 80.

After editing the config:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Never reload without `nginx -t` passing first.

Because the fallback is wired to 502/503/504, a real crash shows the same page a
deliberate maintenance stop does. **If coming-soon appears unexpectedly, it is a
crash until proven otherwise.** Check `sudo pm2 status` and
`sudo pm2 logs akcpl-website` first.

---

## 7. How submissions are stored

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
- Resumes are PDF only, 2 MB max, named `<HHMMSS>-<applicant-slug>.pdf`. The
  workbook row records the relative path.
- Workbooks are written to a `.tmp` file and renamed, so an interrupted write
  cannot truncate a good workbook.
- Duplicate submissions are kept on purpose. The workbook is append-only, so do
  not add dedup or uniqueness checks.
- If a write fails, the whole submission is logged as JSON under
  `[contact-form]` / `[job-application]`, so nothing is lost.

Keep an eye on disk space. Nothing prunes old day folders, and a full disk
surfaces as `ENOSPC` in the logs with submissions failing.

---

## 8. Backing up submissions to S3

Nothing goes to S3 automatically. The app only writes to disk, and the backup
happens only when someone **runs the script below by hand**. There is no
schedule behind it, so the S3 copy is only as current as the last manual run.

Script: [scripts/upload_submissions.py](../scripts/upload_submissions.py). It
**copies** to S3; local files stay in place. Auth is the instance's IAM role and
there are no keys in the repo. It needs `python3` and `boto3` on the instance.

Run it from `/apps/akcpl-website`, not from `/` or your home directory. The
script path is relative, so anywhere else gives
`can't open file 'scripts/upload_submissions.py'`:

```bash
cd /apps/akcpl-website
SUBMISSIONS_DIR=/apps/akcpl-submissions python3 scripts/upload_submissions.py
```

That uploads **today's** (IST) folder to `s3://akcpl-submissions/<date>/...`.

Keep the `SUBMISSIONS_DIR=` prefix. The script does not read the app's `.env`,
so without the prefix, or an exported variable, it exits with
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

> ### WARNING: this overwrites S3 objects
>
> Anything already in the bucket under the same key is replaced, with no
> versioning or undo on the script's side. Re-running a past date replaces that
> date's objects with whatever is on disk now, so a local file that was
> truncated or deleted will overwrite the good S3 copy.
>
> An interactive run asks for confirmation first. **`-y`, or a run with no
> terminal attached, skips that prompt and overwrites straight away.** Use
> `--dry-run` first when you are unsure what a command covers.

- **Workbooks always re-upload:** they grow through the day, so the S3 copy is
  replaced. **Resumes** already in S3 with the same byte size are skipped.
- A missing or empty day folder is logged and skipped, not an error.
- One failing day does not abandon a multi-day run: the failed dates are listed
  at the end and the exit code is `1`.

---

## 9. If a form errors or no file is created

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
`/root/.pm2/logs/akcpl-website-out.log` and `-error.log`, so they can be grepped
directly:

```bash
sudo grep "contact-form" /root/.pm2/logs/akcpl-website-error.log
sudo grep "job-application" /root/.pm2/logs/akcpl-website-error.log
sudo grep "recaptcha" /root/.pm2/logs/akcpl-website-error.log
```

### How the lines look

A failed contact enquiry. The tag is `[contact-form]` and the submission is JSON
on the same line:

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

### Reading them

- The `error` field is the real cause. `EACCES` or `EPERM` means the process
  cannot write to `SUBMISSIONS_DIR`; `ENOSPC` means the disk is full; `ENOENT`
  means the path in `SUBMISSIONS_DIR` does not exist.
- `[recaptcha]` lines about a missing or invalid secret mean every visitor is
  being turned away, not just one.
- No line at all for a submission that appeared to succeed means the write went
  through, so check the date folder for that IST day.

---

## 10. Triage by symptom

| Symptom                              | Look here first                                                                         |
| ------------------------------------ | --------------------------------------------------------------------------------------- |
| Coming-soon page unexpectedly        | `sudo pm2 status`, then the error log. The app is down or crash-looping                 |
| 502/503 from the ALB, no coming-soon | nginx itself is down or misconfigured: `sudo systemctl status nginx`, `sudo nginx -t`   |
| Certificate warning in the browser   | The ACM cert on the `akc-new-website` HTTPS listener, and whether DNS points at the ALB |
| Every form submission fails          | `sudo grep "recaptcha" /root/.pm2/logs/akcpl-website-error.log`                         |
| Submissions succeed but no XLSX      | Wrong `SUBMISSIONS_DIR`, or the IST date folder is not where you are looking            |
| Workbook rows missing                | Confirm pm2 is in fork mode with a single instance                                      |
| `ENOSPC` in the logs                 | Disk full: `df -h`. Old day folders are never pruned                                    |
| S3 copy is out of date               | Expected. Nothing is scheduled, so run the upload script                                |
