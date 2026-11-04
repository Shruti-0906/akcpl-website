import Link from "next/link";

import { Button, Eyebrow, KidneyIcon } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const UPCOMING = [
  "Renal medication available through AKC centres",
  "How prescriptions and refills are handled on the network",
  "What patients and their families need to bring",
] as const;

const PharmacyHeroSection = () => (
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
        label="Pharmacy"
        className="mb-5 text-[14px] font-normal text-white"
      />

      <h1 className="mb-7 font-cormorant text-[clamp(40px,7vw,64px)] leading-[1.05] font-light tracking-[-0.01em] text-white">
        Coming <em className="text-[#00b3ff] italic">soon.</em>
      </h1>

      <p className="mb-9 font-roboto text-[15px] leading-[1.7] font-light text-white sm:text-[17px]">
        This is where Apex Kidney Care&apos;s pharmacy service will be set out
        in full. We are putting it together now. Until it opens, speak to your
        centre or our team about the medication you need.
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
          href="/"
          className="font-roboto text-sm font-normal text-white/80 underline underline-offset-4 transition hover:text-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
        >
          Back to home
        </Link>
      </div>
    </div>
  </section>
);

export default PharmacyHeroSection;
