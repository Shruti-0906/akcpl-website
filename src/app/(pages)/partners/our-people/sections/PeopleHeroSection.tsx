import Image from "next/image";

import { CountUp, Eyebrow } from "@/components";
import { cn } from "@/lib";

import { LABEL_LIGHT, PEOPLE_GUTTER } from "../constants";

const STATS = [
  { value: "1,850", label: "Coworkers" },
  { value: "70+", label: "nephrologists", detail: "on the clinical team" },
  { value: "750+", label: "technicians", detail: "& nurses" },
  {
    value: "2011",
    label: "Apex School",
    detail: "of Dialysis Technology",
  },
  { value: "NABH", label: "accredited", detail: "where applicable" },
] as const;

const PeopleHeroSection = () => {
  return (
    <section id="people-hero" className="flex flex-col bg-secondary">
      <div
        className={cn(
          "relative flex items-center overflow-hidden",
          PEOPLE_GUTTER,
        )}
      >
        {/* Banner under a flat black scrim, as on the partner heroes. This
            photo is a dark one at 85/255, so it takes the lighter scrim. */}
        <div aria-hidden="true" className="absolute inset-0 z-0">
          <Image
            src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Banner/Dialysis+Professional+Banner.jpg"
            alt=""
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        {/* `.hero-content` — the reference's inline `padding-top:130px` clears
            its `position:fixed` navbar and breadcrumb, both of which sit in
            normal flow here, so the band is sized to its copy instead: a short
            top pad, and `.hero-sub`'s own 48px margin closing it out. */}
        <div className="relative z-[2] w-full pt-14">
          <Eyebrow
            label="Our People · The Workforce Behind Every Chair : Trained · Credentialed · Hands-On"
            className={LABEL_LIGHT}
          />

          <h1 className="mb-7 font-cormorant text-[clamp(48px,6vw,62px)] leading-[1.05] font-light tracking-[-0.01em] text-white">
            Dialysis is a machine.
            <br />
            <em className="text-[#00b3ff] italic">It is run by people.</em>
          </h1>

          <p className="mb-12 font-roboto text-[17px] leading-[1.7] font-light text-white">
            A dialysis network does not run on equipment. It runs on the{" "}
            {/* `.hero-sub` declares no `strong` rule, so the UA default of
                `font-weight:bolder` resolves to 400 over its 300 base. Preflight
                carries the same rule, so this is left unclassed to match. */}
            <strong>trained, credentialed, hands-on professionals</strong> who
            connect the patient to the machine, manage intra-dialytic events,
            maintain the equipment, treat the water, and audit the work
            afterwards. AKC&apos;s workforce is{" "}
            {/* `.hero-sub` declares no `em` rule, so this stays white. */}
            <em className="italic">
              professionally trained, formally credentialed, and continuously
              upskilled
            </em>{" "}
            &mdash; the foundation on which every clinical claim AKC makes
            actually stands.
          </p>
        </div>
      </div>

      <div
        className={cn(
          "relative bg-[rgba(5,14,31,0.5)] py-7 backdrop-blur-[10px]",
          PEOPLE_GUTTER,
        )}
      >
        <div className="flex flex-wrap gap-y-8 sm:flex-nowrap sm:gap-y-0 sm:divide-x sm:divide-[rgb(6_35_66)]">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="basis-1/2 sm:flex-1 sm:basis-auto sm:px-8 sm:first:pl-0"
            >
              <div className="mb-1.5 font-roboto text-[40px] leading-none font-bold text-primary-light">
                <CountUp value={stat.value} />
              </div>
              <div className="font-roboto text-[11px] tracking-[0.08em] text-[#8A9BB5] uppercase">
                {stat.label}
                {"detail" in stat && (
                  <span className="block">{stat.detail}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleHeroSection;
