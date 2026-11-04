import Link from "next/link";

import { Button, Eyebrow, KidneyIcon } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const UPCOMING = [
  "A validated, research-grade renal data registry",
  "Population health analytics",
  "Clinical research built on real network data",
  "Evidence-based policy recommendations",
] as const;

const IrdsHeroSection = () => (
  <section
    id="home"
    className={cn(
      "relative flex min-h-[calc(100vh-135px)] items-center overflow-hidden bg-hero-depth",
      GUTTER,
    )}
  >
    <div aria-hidden="true" className="absolute inset-0 z-0 bg-hero-grid" />

    <KidneyIcon />

    <div className="relative z-2 w-full max-w-160 py-16 lg:py-0">
      <Eyebrow
        label="Indian Renal Data System"
        className="mb-5 text-[14px] font-normal text-white"
      />

      <h1 className="mb-7 font-cormorant text-[clamp(40px,7vw,64px)] leading-[1.05] font-light tracking-[-0.01em] text-white">
        Coming <em className="text-[#00b3ff] italic">soon.</em>
      </h1>

      <p className="mb-9 font-roboto text-[15px] leading-[1.7] font-light text-white sm:text-[17px]">
        This is where the Indian Renal Data System will live &mdash; the
        nation&apos;s first validated, research-grade renal data registry, built
        to power analytics, research, and policy for India&apos;s kidney health
        crisis. We are putting it together now. Until it opens, our team is glad
        to discuss the registry or research collaboration directly.
      </p>

      <ul className="mb-10 space-y-4 border-l border-white/25 pl-6">
        {UPCOMING.map((item) => (
          <li
            key={item}
            className="font-roboto text-[15px] leading-[1.6] font-light text-white/75"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-col flex-wrap items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
        <Button
          href="/contact"
          className="rounded-sm bg-primary-subtle px-8 py-4 font-bold tracking-[0.04em] hover:bg-primary-light"
        >
          Contact the team <span aria-hidden="true">&rarr;</span>
        </Button>

        <Link
          href="/initiatives"
          className="font-roboto text-sm font-normal text-white/80 underline underline-offset-4 transition hover:text-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
        >
          Back to initiatives
        </Link>
      </div>
    </div>
  </section>
);

export default IrdsHeroSection;
