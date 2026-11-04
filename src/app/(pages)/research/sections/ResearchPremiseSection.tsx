import Image from "next/image";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const THEMES = [
  {
    numeral: "I",
    lead: "Kidney",
    accent: "Exchange",
    count: 9,
    href: "#kidney-exchange",
  },
  {
    numeral: "II",
    lead: "Pandemic",
    accent: "Response",
    count: 2,
    href: "#pandemic-response",
  },
  {
    numeral: "III",
    lead: "Vascular",
    accent: "Access",
    count: 3,
    href: "#vascular-access",
  },
  {
    numeral: "IV",
    lead: "Home",
    accent: "Hemodialysis",
    count: 2,
    href: "#home-hemodialysis",
  },
  {
    numeral: "V",
    lead: "Treatment",
    accent: "Policy",
    count: 2,
    href: "#treatment-policy",
  },
] as const;

const STRONG = "font-semibold text-secondary";
const CITE = "text-primary-subtle italic";

const ResearchPremiseSection = () => {
  return (
    <section>
      <div className={cn("bg-[#071a2f] py-12 lg:py-14", GUTTER)}>
        <p className="text-center font-roboto text-[11px] font-semibold tracking-[0.22em] text-[#00b3ff] uppercase">
          Jump to a research theme
        </p>

        <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {THEMES.map((theme) => (
            <li key={theme.numeral}>
              <a
                href={theme.href}
                className="flex h-full items-center gap-3 rounded-xs bg-white p-[16px_18px] transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                <span
                  aria-hidden="true"
                  className="font-roboto text-[11px] font-semibold text-primary-light lowercase"
                >
                  {theme.numeral}
                </span>

                <span>
                  <span className="block font-roboto text-lg font-semibold text-secondary">
                    {theme.lead}{" "}
                    <em className="font-normal text-primary-subtle italic">
                      {theme.accent}
                    </em>
                  </span>
                  <span className="mt-0.5 block font-roboto text-xs font-semibold text-secondary">
                    <span className="text-tertiary">{theme.count}</span>{" "}
                    publications
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={cn(
          "bg-white bg-[radial-gradient(60%_50%_at_92%_0%,rgba(201,146,42,0.08)_0%,rgba(255,255,255,0)_60%)] py-16 lg:py-24",
          GUTTER,
        )}
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow label="The Institutional Premise" className="text-black" />

            <h2 className="mt-5 font-cormorant text-3xl leading-[1.15] font-bold text-black sm:text-4xl lg:text-[40px]">
              Clinical practice produces data.{" "}
              <em className={CITE}>
                The data deserves to be analysed and published.
              </em>
            </h2>

            <Image
              src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Research+-+Research+Premise+Section.jpg"
              alt="AKC researchers reviewing dialysis cohort charts and survival curves across a wall of monitors in the data room."
              width={800}
              height={534}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="mt-8 w-full rounded-xs object-cover shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-roboto text-[15px] leading-[1.7] text-[#393f42]">
              Over more than a decade of operations across{" "}
              <strong className={STRONG}>
                more than 220 dialysis centres in 14 Indian states
              </strong>
              , AKC has accumulated one of India&apos;s largest structured
              datasets in maintenance hemodialysis &mdash; spanning treatment
              protocols, vascular access, kidney exchange registries, infection
              outcomes, and patient survival.
            </p>

            <p className="font-roboto text-[15px] leading-[1.7] text-[#393f42]">
              The Apex Kidney Foundation was established to{" "}
              <em className={CITE}>do something with that dataset</em> &mdash;
              to convert clinical observation into peer-reviewed evidence, to
              collaborate with academic researchers who could bring mathematical
              and analytical rigour, and to{" "}
              <strong className={STRONG}>
                publish findings where they could be read, cited, and challenged
              </strong>
              .
            </p>

            <p className="font-roboto text-[15px] leading-[1.7] text-[#393f42]">
              The published work falls into{" "}
              <em className={CITE}>five distinct research themes</em>, each
              anchored by multiple papers and at least one doctoral scholar.
              Each theme connects directly to a clinical problem AKC&apos;s
              network was already trying to solve.
            </p>

            <p className="mt-2 border-l-[3px] border-primary-subtle bg-[#eef4f5] p-[20px_24px] font-roboto text-[15px] leading-[1.7] text-[#393f42]">
              <strong className={STRONG}>
                A clinical network without a research function
              </strong>{" "}
              learns slowly, mostly by anecdote. A clinical network with one
              learns from its own data structurally, publishes what works, and
              lets the rest of the field benefit.{" "}
              <em className="italic">
                This is the institutional argument for the work below.
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPremiseSection;
