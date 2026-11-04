# AKCPL Website

Marketing and patient-facing website for Apex Kidney Care Pvt. Ltd.
(`apexkidneycare.com`), built on Next.js 16 with the App Router.

Contact and careers enquiries are handled entirely by Server Actions. There is
no API layer and no database: submissions are appended to XLSX workbooks on the
server's disk, and copied to S3 by a script that someone runs by hand.

For anything to do with the server, AWS or releases, see
**[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)**.

---

## Stack

| Layer        | Choice                                           |
| ------------ | ------------------------------------------------ |
| Framework    | Next.js 16, App Router, React 19                 |
| Language     | TypeScript 5                                     |
| Styling      | Tailwind CSS v4 (PostCSS plugin, no config file) |
| Forms        | Server Actions + Zod validation + reCAPTCHA v2   |
| Spreadsheets | ExcelJS                                          |
| UI extras    | lucide-react, Swiper, Recharts, @svg-maps/india  |
| Formatting   | Prettier with `prettier-plugin-tailwindcss`      |
| Linting      | ESLint 9 with `eslint-config-next`               |

---

## Getting started

Requires Node 20 or newer and npm.

```bash
git clone <repo-url>
cd akcpl-website
npm install

# create .env.local by hand, see the table below

npm run dev
```

The dev server runs on http://localhost:3000.

To exercise the forms locally you need a real reCAPTCHA v2 key pair and a
writable `SUBMISSIONS_DIR`. Point it at any local folder, for example
`SUBMISSIONS_DIR=C:/tmp/akcpl-submissions`, and the app will create the dated
subfolders itself.

---

## Environment variables

Local values live in `.env.local`, server values in `.env`. Both are
git-ignored and there is no committed template, so the table below is the only
record of what the file needs.

| Variable                         | Purpose                                            |
| -------------------------------- | -------------------------------------------------- |
| `SUBMISSIONS_DIR`                | Absolute path holding the dated submission folders |
| `NEXT_PUBLIC_SITE_URL`           | Public site URL, used by metadata, sitemap, robots |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA v2 site key, sent to the browser         |
| `RECAPTCHA_SECRET_KEY`           | reCAPTCHA v2 secret, server only                   |
| `NEXT_PUBLIC_GA_ID`              | GA4 measurement id. Blank means the tag never loads |

`NEXT_PUBLIC_*` values are inlined at build time, so changing one needs a
rebuild, not just a restart.

`NEXT_PUBLIC_GA_ID` is optional. Blank is a working state: Google Analytics is
simply never loaded, which is also how local development is kept out of the
reports. Set or not, the tag stays behind the cookie consent banner.

If `RECAPTCHA_SECRET_KEY` is missing, every submission is refused with a server
error and `[recaptcha] RECAPTCHA_SECRET_KEY is not set` is logged.

---

## Scripts

| Command                | What it does                       |
| ---------------------- | ---------------------------------- |
| `npm run dev`          | Dev server on port 3000            |
| `npm run build`        | Production build                   |
| `npm run start`        | Serves the production build        |
| `npm run typecheck`    | `next typegen` then `tsc --noEmit` |
| `npm run lint`         | ESLint                             |
| `npm run format`       | Prettier, writes in place          |
| `npm run format:check` | Prettier, check only               |

Run `npm run typecheck` and `npm run lint` before pushing.

---

## Project structure

```
src/
  app/
    (pages)/            Every route lives here
      Home/             Homepage sections (the one route that is not a folder-per-URL)
      about/  careers/  contact/  centres/  services/  ...
        page.tsx        Route entry
        sections/       Sections used only by that page
        actions.ts      Server Actions, where the page has a form
  components/
    shared/             Navbar, Footer, Breadcrumbs, Recaptcha, Loader, ...
    ui/                 Button, Carousel, CountUp, Eyebrow, Reveal
    icons/  seo/
  lib/
    submissions/        Workbook writes, resume storage, path resolution
    recaptcha.ts        siteverify call
    seo.ts  jsonld.ts   Metadata and structured data helpers
  config/  constants/  content/  hooks/  types/  utils/

scripts/
  upload_submissions.py Manual S3 backup of the submissions directory

akc-coming-soon/
  index.html            Static page nginx serves when the app is down

docs/
  DEPLOYMENT.md         Server, AWS and release runbook
  HANDOVER.md           Original operational handover
```

New routes go in `src/app/(pages)/<route>/` with their sections colocated in a
`sections/` folder next to `page.tsx`.

---

## Forms and submissions

Both forms follow the same path: client component posts to a Server Action, the
action verifies the reCAPTCHA token, validates with Zod, then appends a row to
that day's workbook.

- [src/app/(pages)/contact/actions.ts](<src/app/(pages)/contact/actions.ts>)
  writes to `contact-us.xlsx`.
- [src/app/(pages)/careers/actions.ts](<src/app/(pages)/careers/actions.ts>)
  writes to `job-applications.xlsx` and saves the resume PDF.

Storage rules worth knowing before you touch this code:

- One folder per IST day under `SUBMISSIONS_DIR`, created on that day's first
  submission.
- Workbooks are append-only. Duplicate submissions are kept on purpose, so do
  not add dedup or uniqueness checks.
- Writes go to a `.tmp` file and are then renamed, so an interrupted write
  cannot truncate a good workbook.
- Appends are serialised through an in-process queue in
  [src/lib/submissions/excel.ts](src/lib/submissions/excel.ts). This is why
  production runs a single pm2 fork process and must never move to cluster mode.
- Resumes are PDF only, 2 MB max, saved as `<HHMMSS>-<applicant-slug>.pdf`.
  `next.config.ts` raises the Server Action body limit to 3 MB to leave room for
  multipart overhead.
- If a write fails, the whole submission is logged as JSON so nothing is lost.

---

## Deployment

Production runs on a single EC2 instance in Mumbai behind an Application Load
Balancer, managed by pm2 and fronted by nginx. Full infrastructure inventory,
release steps, the coming-soon fallback and the S3 backup script are documented
in [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).
