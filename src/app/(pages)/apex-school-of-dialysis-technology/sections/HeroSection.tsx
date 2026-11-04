import Image from "next/image";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const STATS = [
  { value: "2011", label: "institute\nfounded" },
  { value: "15", label: "years training\nthe workforce" },
  { value: "{count}", label: "alumni trained\nto date" },
  { value: "TISS", label: "+ MSBSVET\naffiliations" },
] as const;

const HeroSection = () => (
  <>
    <section
      id="home"
      className={cn(
        // The reference hero is 80vh, but its top 77px sits hidden under a
        // fixed nav and breadcrumb bar. Ours are in flow, so we subtract that
        // strip to land the content and the stats bar where the original does.
        "relative flex min-h-[calc(80vh-77px)] items-center overflow-hidden",
        GUTTER,
      )}
    >
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(13,138,138,0.18)_0%,transparent_70%),radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(201,146,42,0.1)_0%,transparent_60%),linear-gradient(135deg,#00111c_0%,#006693_50%,#001822_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,138,138,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(13,138,138,0.06)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_80%)] bg-[size:60px_60px]" />
      </div>

      <Image
        src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Banner/ASDT+-+Hero+Banner.png"
        alt=""
        width={1063}
        height={684}
        aria-hidden="true"
        className="pointer-events-none absolute top-[68%] right-[-40px] hidden h-[400px] w-auto max-w-none -translate-y-1/2 opacity-[0.12] lg:block"
      />

      {/* The reference pads 90px here to clear its fixed nav and breadcrumb bar;
          ours are in normal flow, so the hero centres on its own. */}
      <div className="relative z-[2] max-w-[90%] py-12 lg:py-0">
        <Eyebrow
          label="Founded by Apex Kidney Care · Since 2011 : Apex Academia"
          className="mb-5 text-[14px] font-normal text-white"
        />

        <h1 className="mb-5 font-cormorant text-[clamp(32px,6vw,62px)] leading-[1.05] font-light tracking-[-0.01em] text-white">
          <em className="text-[#00b3ff] italic">ASDT :</em> A career in
          dialysis.
          <br />
          Built for the long road.
        </h1>

        <p className="mb-5 font-roboto text-[15px] leading-[1.7] font-light text-white sm:text-[17px]">
          AKC&rsquo;s institute for the next generation of dialysis
          professionals.{" "}
          <strong className="font-normal text-white">
            Affiliated with the Tata Institute of Social Sciences (TISS) and the
            Maharashtra State Board of Skill, Vocational Education and Training
            (MSBSVET)
          </strong>{" "}
          &mdash; with structured curricula, extensive hands-on training across
          AKC&rsquo;s 250 centres, and a{" "}
          <em className="text-white italic">
            direct pathway into one of India&rsquo;s fastest-growing healthcare
            careers.
          </em>
        </p>

        <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
          <a
            href="#apply"
            className="inline-flex items-center justify-center gap-2 rounded border border-primary-subtle bg-primary-subtle px-8 py-4 font-roboto text-sm font-bold tracking-[0.04em] text-white hover:border-primary-light hover:bg-primary-light"
          >
            Apply for admission
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#programme"
            className="inline-flex items-center justify-center gap-2 rounded border border-white px-8 py-4 font-roboto text-sm font-bold tracking-[0.04em] text-white hover:border-primary-light hover:text-primary-light"
          >
            See the programme
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>

    {/* The reference bar is a half-opaque wash that composites over the navy
        page background; the navy base here supplies what body{} does there. */}
    <div className="bg-secondary">
      <div
        className={cn(
          "relative z-[2] flex flex-wrap items-center bg-[rgba(5,14,31,0.5)] py-7 backdrop-blur-[10px]",
          GUTTER,
        )}
      >
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex w-1/2 flex-col border-r border-[rgb(6,35,66)] px-4 py-3 last:border-r-0 sm:w-1/4 sm:px-8 sm:py-0 sm:first:pl-0"
          >
            <p className="mb-1.5 font-roboto text-[32px] leading-none font-bold text-primary-light sm:text-[40px]">
              {stat.value}
            </p>
            <p className="font-roboto text-[11px] tracking-[0.08em] whitespace-pre-line text-[#8A9BB5] uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default HeroSection;
