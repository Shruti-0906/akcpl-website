import type { ReactNode } from "react";

import { Button, CountUp, Eyebrow } from "@/components";
import { cn } from "@/lib";

import {
  CI_BODY_LIGHT,
  CI_TITLE,
  HEADING_EM,
  LABEL_DARK,
  LABEL_LIGHT,
  PEOPLE_GUTTER,
} from "../constants";

type SchoolStat = { value: string; label: string; italic?: boolean };

const SCHOOL_STATS: readonly SchoolStat[] = [
  { value: "2011", label: "School Founded", italic: true },
  { value: "15+", label: "Years of Training" },
  { value: "2 yr", label: "Programme Length" },
  { value: "250+", label: "Centres for Clinical Practicum" },
];

type Route = {
  pathway: string;
  name: ReactNode;
  text: ReactNode;
};

const ROUTES: readonly Route[] = [
  {
    pathway: "Pathway 01",
    name: (
      <>
        Apex School{" "}
        <em className="font-normal text-primary-subtle italic">Graduates</em>
      </>
    ),
    text: (
      <>
        Direct intake of{" "}
        <strong className="font-bold text-black">
          Apex School of Dialysis Technology graduates
        </strong>{" "}
        &mdash; with full continuity from training to deployment within the AKC
        network. The single largest source of the network&apos;s technician
        workforce.
      </>
    ),
  },
  {
    pathway: "Pathway 02",
    name: (
      <>
        External Institutes &amp;{" "}
        <em className="font-normal text-primary-subtle italic">Universities</em>
      </>
    ),
    text: (
      <>
        Recruits from{" "}
        <strong className="font-bold text-black">
          other recognised dialysis technology programmes
        </strong>{" "}
        &mdash; including university-affiliated B.Voc, B.Sc., and diploma
        courses from across India. Onboarded through AKC&apos;s internal
        credentialing and induction process.
      </>
    ),
  },
  {
    pathway: "Pathway 03",
    name: (
      <>
        In-Network{" "}
        <em className="font-normal text-primary-subtle italic">
          Apprenticeship
        </em>
      </>
    ),
    text: (
      <>
        For experienced technicians joining AKC mid-career, a{" "}
        <strong className="font-bold text-black">
          structured apprenticeship and recertification pathway
        </strong>{" "}
        ensures every member of the workforce meets the same standards
        regardless of where they trained.
      </>
    ),
  },
];

const TrainingSection = () => {
  return (
    <section
      id="training"
      className="relative overflow-hidden bg-secondary py-16 lg:py-32.5"
    >
      {/* `.training::before` — the teal and gold corner wash over the navy. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-chapter-glow"
      />

      <div className={cn("relative z-[2]", PEOPLE_GUTTER)}>
        {/* `.tr-header` */}
        <div className="mb-16">
          <Eyebrow label="The Training Apparatus" className={LABEL_LIGHT} />

          <h2 className={cn(CI_TITLE, "mb-6 text-white")}>
            We built the school{" "}
            <em className={HEADING_EM}>
              because the country didn&apos;t have one.
            </em>
          </h2>

          <p className={cn(CI_BODY_LIGHT, "mb-0 max-w-[760px]")}>
            In 2011, after AKC had been operating for three years, it became
            clear that{" "}
            <strong>
              India did not have a structured training pathway for the dialysis
              workforce
            </strong>{" "}
            at the scale and standard the country required. Rather than wait,
            AKC built one. The Apex School of Dialysis Technology has been
            training the network&apos;s technicians and nurses ever since, and
            remains{" "}
            <em className="italic">
              one of India&apos;s most established institutions of its kind.
            </em>
          </p>
        </div>

        {/* `.school-flag` — the flagship card. Its `::before` cap is dropped:
            the reference gradient interpolates an undefined `--gold-3`, so the
            declaration never computes and the bar renders transparent. */}
        <div className="mb-12 rounded-[2px] border border-[rgba(14,124,123,0.25)] bg-[rgba(14,124,123,0.06)] px-8 py-10 lg:px-13 lg:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div>
              {/* `.school-tag` — the leading dot resolves to `--gold-3` and so
                  never paints; only the tinted pill survives. */}
              <div className="mb-4.5 inline-flex items-center gap-2 rounded-[20px] bg-[rgba(229,192,123,0.1)] px-3 py-1 font-roboto text-[10px] font-bold tracking-[0.18em] text-[#F5F0E8] uppercase">
                Founded 2011 · Apex Academia
              </div>

              <h3 className={cn(CI_TITLE, "mb-5.5 text-[28px] text-white")}>
                Apex School of{" "}
                <em className={HEADING_EM}>Dialysis Technology</em>
              </h3>

              <p className={CI_BODY_LIGHT}>
                A <strong>structured curriculum in dialysis technology</strong>,
                integrating classroom instruction with extensive hands-on
                training at active AKC centres. Graduates of the School form a
                substantial proportion of AKC&apos;s technician and nursing
                workforce, and many now serve at dialysis centres across India
                and abroad.
              </p>

              <p className={CI_BODY_LIGHT}>
                The School operates under the{" "}
                <em className="italic">Apex Academia umbrella</em> &mdash;
                AKC&apos;s institutional framework for clinical education, which
                also includes the &lsquo;Dialysis Simplified&rsquo; which is the
                dialysis professionals annual CME programme.{" "}
                <strong>
                  Curriculum, clinical training, examination, and graduation are
                  all under one institutional standard.
                </strong>
              </p>

              <Button
                href="/apex-school-of-dialysis-technology"
                className="rounded-sm bg-primary-subtle px-8 py-4 font-bold tracking-[0.04em] hover:bg-primary-light"
              >
                Explore the School <span aria-hidden="true">&rarr;</span>
              </Button>
            </div>

            {/* `.school-stats` — hairline 2x2 grid, the rules showing through
                the 1px gap. */}
            <div className="grid grid-cols-2 gap-px border border-[rgba(229,192,123,0.18)] bg-[rgb(2_65_100)]">
              {SCHOOL_STATS.map((stat) => (
                <div key={stat.label} className="bg-[rgb(1_36_56)] px-5.5 py-6">
                  <div
                    className={cn(
                      "mb-2 font-roboto text-[38px] leading-none font-light tracking-[-0.024em] text-[#F5F0E8]",
                      stat.italic && "text-[32px] font-normal italic",
                    )}
                  >
                    <CountUp value={stat.value} />
                  </div>
                  <div className="font-roboto text-[10px] leading-[1.4] font-bold tracking-[0.18em] text-[rgb(251_248_243/0.6)] uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* `.routes-grid` — the external training routes, on a light ground. */}
        <div className="grid gap-px border border-[rgba(14,124,123,0.22)] bg-[rgba(14,124,123,0.22)] sm:grid-cols-2 lg:grid-cols-3">
          {ROUTES.map((route, index) => (
            <div
              key={route.pathway}
              className={cn(
                "flex flex-col px-7 py-8",
                index % 2 === 1 ? "bg-[rgb(233,247,253)]" : "bg-white",
              )}
            >
              <Eyebrow
                label={route.pathway}
                className={cn(LABEL_DARK, "mb-3.5")}
              />

              <h3 className="mb-3 font-roboto text-[19px] leading-[1.25] font-bold tracking-[-0.005em] text-black">
                {route.name}
              </h3>

              <p className="flex-1 font-roboto text-[13.5px] leading-[1.65] text-[#393f42]">
                {route.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
