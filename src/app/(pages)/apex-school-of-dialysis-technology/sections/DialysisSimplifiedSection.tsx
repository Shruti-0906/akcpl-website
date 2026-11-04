import Image from "next/image";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { PhotoCaption } from "../components";

const CITIES = [
  "Mumbai",
  "Bhopal",
  "Delhi",
  "Goa",
  "Hyderabad",
  "+ other cities",
] as const;

const FACULTY = [
  {
    num: "i",
    name: (
      <em className="font-normal text-primary-subtle italic">Nephrologists</em>
    ),
    role: "AKC's clinical leadership — on adequacy, anaemia, vascular access, complications.",
  },
  {
    num: "ii",
    name: (
      <>
        <em className="font-normal text-primary-subtle italic">
          Dialysis Technology
        </em>{" "}
        Teachers
      </>
    ),
    role: "Senior faculty from the Apex School of Dialysis Technology and partner institutions.",
  },
  {
    num: "iii",
    name: (
      <>
        <em className="font-normal text-primary-subtle italic">Industry</em>{" "}
        Trainers
      </>
    ),
    role: "Manufacturer-specific trainers — on dialysis machines, RO water plant operation, equipment safety.",
  },
] as const;

const DialysisSimplifiedSection = () => (
  <section
    id="dialysis-simplified"
    className={cn("relative overflow-hidden bg-secondary py-32.5", GUTTER)}
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_92%_12%,rgba(14,124,123,0.08)_0%,transparent_60%),radial-gradient(ellipse_45%_40%_at_5%_92%,rgba(184,134,11,0.06)_0%,transparent_60%)]"
    />

    <div className="relative z-[2]">
      <div className="mb-16">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <Eyebrow
            label="Continuing Medical Education"
            className="text-[14px] font-normal text-white"
          />
          <span className="inline-flex items-center gap-[7px] rounded-[20px] bg-[#e0f2f9] px-[11px] py-1 font-roboto text-[10px] font-bold tracking-[0.16em] text-primary-subtle uppercase before:size-1.5 before:rounded-full before:bg-primary-subtle before:content-['']">
            Dialysis Simplified
          </span>
        </div>

        <h2 className="mb-4 font-cormorant text-[clamp(30px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-white">
          Training doesn&rsquo;t stop at graduation.{" "}
          <em className="text-primary-subtle italic">
            It travels with the work.
          </em>
        </h2>

        <p className="font-roboto text-[17px] leading-[22px] font-light text-[rgba(251,248,243,0.72)]">
          <strong className="font-normal">Dialysis Simplified</strong> is
          AKC&rsquo;s flagship continuing-education programme for practising
          dialysis technicians and nurses &mdash; conducted periodically in{" "}
          <em className="italic">Mumbai, Bhopal, Delhi, Goa, Hyderabad,</em> and
          other cities where the AKC network operates. Designed for working
          professionals who need to stay current as protocols evolve, equipment
          changes, and clinical evidence updates.
        </p>
      </div>

      <div className="relative mb-8 grid min-h-[460px] overflow-hidden rounded-[2px] bg-white before:absolute before:inset-x-0 before:top-0 before:z-[3] before:h-[3px] before:bg-[linear-gradient(90deg,#0075a9,#009ee3)] before:content-[''] lg:grid-cols-[1fr_1.05fr]">
        <div className="relative min-h-[380px] overflow-hidden bg-[linear-gradient(135deg,#0075a9_0%,#001f34_70%)] before:absolute before:inset-0 before:z-[1] before:bg-[radial-gradient(circle_at_25%_30%,rgba(229,192,123,0.16)_0%,transparent_55%),radial-gradient(circle_at_75%_75%,rgba(14,124,123,0.32)_0%,transparent_55%)] before:content-['']">
          <Image
            src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/ASDT+-+Dialysis+Simplified+Section.jpg"
            alt="Dialysis Simplified session"
            width={800}
            height={800}
            className="h-auto w-full"
          />
          <PhotoCaption>
            <em className="font-normal text-primary-light italic">
              A Dialysis Simplified session
            </em>{" "}
            &mdash; technicians, nurses, faculty, and government officials in
            the same room.
          </PhotoCaption>
        </div>

        <div className="flex flex-col justify-center px-8 py-12 lg:px-12 lg:py-13">
          <span className="mb-[18px] inline-flex items-center gap-2 self-start rounded-[20px] bg-[#e0f2f9] px-3.5 py-[5px] font-roboto text-[10px] font-bold tracking-[0.18em] text-primary-subtle uppercase before:size-[7px] before:rounded-full before:bg-primary-subtle before:content-['']">
            Active Programme · Multi-City
          </span>

          <h3 className="mb-4 font-cormorant text-[28px] leading-[1.05] font-bold tracking-[-0.015em] text-black sm:text-[36px]">
            Dialysis <em className="text-primary-subtle italic">Simplified</em>
          </h3>

          <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
            A periodic CME programme conducted by AKC for the{" "}
            <strong className="font-normal">
              thousands of dialysis technicians and nurses
            </strong>{" "}
            working across the network and at partner facilities. Each Dialysis
            Simplified event combines{" "}
            <em className="italic">
              structured lectures, hands-on demonstrations, case discussions,
            </em>{" "}
            and direct engagement with government officials who oversee
            India&rsquo;s public dialysis programmes.
          </p>

          <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
            The format is deliberate:{" "}
            <strong className="font-normal">
              clinical authority meets policy authority meets the people doing
              the daily work.
            </strong>{" "}
            Technicians and nurses leave with updated protocols, current
            evidence, and a direct line to the policy framework their centres
            operate within.
          </p>
        </div>
      </div>

      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <div className="relative w-full rounded-[2px] bg-white p-9 before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-primary-subtle before:content-['']">
          <Eyebrow
            label="Where it Happens"
            className="mb-5 text-[14px] font-normal text-black"
          />
          <h3 className="mb-4 font-cormorant text-[22px] leading-[1.05] font-bold tracking-[-0.015em] text-black sm:text-[26px]">
            Cities across{" "}
            <em className="text-primary-subtle italic">the AKC network.</em>
          </h3>

          <div className="mb-[18px] flex flex-wrap gap-2.5">
            {CITIES.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-2 rounded-[20px] border border-primary-light bg-[#e0f2f9] px-3.5 py-2 font-roboto text-[12px] font-bold tracking-[0.02em] text-primary-subtle before:size-1.5 before:rounded-full before:bg-primary-subtle before:content-['']"
              >
                {city}
              </span>
            ))}
          </div>

          <p className="font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
            Sessions are hosted in cities where AKC operates dialysis centres
            &mdash; bringing the CME to the workforce, rather than expecting the
            workforce to travel to a single venue. New cities are added as the
            network expands.
          </p>
        </div>

        <div className="relative w-full rounded-[2px] bg-white p-9 before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-primary-subtle before:content-['']">
          <Eyebrow
            label="Who Teaches"
            className="mb-5 text-[14px] font-normal text-black"
          />
          <h3 className="mb-4 font-cormorant text-[22px] leading-[1.05] font-bold tracking-[-0.015em] text-black sm:text-[26px]">
            Faculty drawn from{" "}
            <em className="text-primary-subtle italic">three disciplines.</em>
          </h3>

          <div className="flex flex-col">
            {FACULTY.map((row) => (
              <div
                key={row.num}
                className="grid grid-cols-[42px_1fr] items-start gap-[18px] py-3.5 last:pb-0"
              >
                <p className="pt-[3px] text-right font-roboto text-[22px] leading-none font-normal tracking-[-0.012em] text-primary-subtle italic">
                  {row.num}
                </p>
                <div>
                  <p className="mb-1 font-roboto text-[15.5px] font-bold tracking-[-0.005em] text-secondary">
                    {row.name}
                  </p>
                  <p className="font-roboto text-[13.5px] leading-[1.55] text-[#404040]">
                    {row.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative grid items-center gap-8 overflow-hidden rounded-[2px] bg-secondary px-8 py-11 sm:grid-cols-[auto_1fr] sm:gap-12 sm:px-13">
        <span className="relative z-[2] flex size-24 shrink-0 items-center justify-center rounded-full after:absolute after:inset-2.5 after:rounded-full after:border after:border-[#F5F0E8] after:opacity-50 after:content-['']">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            className="relative z-[2] size-[38px] text-[#F5F0E8]"
          >
            <path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-7h6v7M9 9h.01M15 9h.01" />
          </svg>
        </span>

        <div className="relative z-[2]">
          <Eyebrow
            label="The Distinctive Feature"
            className="mb-5 text-[14px] font-normal text-white"
          />
          <h3 className="mb-4 font-cormorant text-[28px] leading-[1.05] font-bold tracking-[-0.015em] text-white sm:text-[36px]">
            Government engagement &mdash;{" "}
            <em className="text-primary-subtle italic">
              built into the format.
            </em>
          </h3>
          <p className="font-roboto text-[17px] leading-[22px] font-light text-[rgba(251,248,243,0.72)]">
            A defining feature of Dialysis Simplified is{" "}
            <strong className="font-normal">
              active interaction with government officials
            </strong>{" "}
            who oversee India&rsquo;s dialysis Public-Private Partnership
            programmes &mdash; state health authorities, municipal officials,
            programme administrators. They share{" "}
            <em className="italic">
              guidelines, real-world expectations, lessons from the field, and
              direct suggestions
            </em>{" "}
            to the technicians and nurses who run the country&rsquo;s PPP
            dialysis centres. The conversation flows both ways: officials hear
            from the workforce too.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default DialysisSimplifiedSection;
