import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import HomeHdPenetrationChart from "../components/HomeHdPenetrationChart";
import PatientGrowthChart from "../components/PatientGrowthChart";
import { ACCENT_INK } from "../components/chartTheme";

const CARD_CLASSES =
  "rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8";

const WhereWeStandSection = () => {
  return (
    <section
      id="outcomes"
      className={cn("bg-depth-deep py-16 lg:py-24", GUTTER)}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-14 lg:gap-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <Eyebrow label="Where Home HD Stands" className="text-white/55" />

            <h2 className="font-cormorant text-3xl leading-tight font-semibold text-white sm:text-4xl lg:text-5xl">
              Home hemodialysis is now becoming{" "}
              <span className="text-primary-light italic">
                mainstream everywhere
              </span>
            </h2>

            <p className="max-w-4xl font-roboto text-sm leading-relaxed text-white/75">
              Across developed nephrology systems, between 2% and 16% of
              patients on dialysis are treated at home. In India, the figure is
              closer to zero. AKC&apos;s own home HD penetration of 1.6% leads
              the country - and even that is a small fraction of what global
              comparators routinely achieve.
            </p>
          </div>

          <div className={CARD_CLASSES}>
            <HomeHdPenetrationChart />

            <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-2xl font-roboto text-xs leading-relaxed font-medium text-white italic">
                <span style={{ color: ACCENT_INK }}>
                  New Zealand and Australia
                </span>{" "}
                - with structured public-sector funding for home HD - have made
                it routine. India has barely begun. AKC&apos;s programme exists
                to change that.
              </p>
              <p className="font-roboto text-[10px] whitespace-nowrap text-white/40">
                source &middot;{" "}
                <span style={{ color: ACCENT_INK, opacity: 0.8 }}>
                  international registries + AKC database
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid min-w-0 items-center gap-10 *:min-w-0 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col gap-5">
            <h2 className="font-cormorant text-3xl leading-tight font-semibold text-white sm:text-4xl">
              AKC&apos;s Home HD{" "}
              <span className="text-primary-light italic">
                programme has grown every year since 2012.
              </span>
            </h2>

            <p className="font-roboto text-sm leading-relaxed text-white/75">
              Starting with a handful of carefully selected patients in 2012,
              the AKC Home HD programme has grown to over 700 patients currently
              on home dialysis - with cumulative reach exceeding{" "}
              <span className="text-primary-light italic">1000 patients</span>{" "}
              over the programme&apos;s lifetime.
            </p>

            <p className="font-roboto text-sm leading-relaxed text-white/75">
              The growth has been steady rather than explosive - reflecting the
              careful patient selection, structured training, and clinical
              oversight that home HD demands.{" "}
              <span className="text-primary-light italic">
                Each patient is a carefully chosen clinical decision.
              </span>
            </p>
          </div>

          <div className={CARD_CLASSES}>
            <PatientGrowthChart />

            <p
              style={{ color: ACCENT_INK }}
              className="mt-5 text-right font-cormorant text-sm italic opacity-70"
            >
              source &middot; The Apex Database
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeStandSection;
