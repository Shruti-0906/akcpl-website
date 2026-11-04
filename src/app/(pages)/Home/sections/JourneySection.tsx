import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const JourneySection = () => {
  return (
    <section id="journey" className={cn("bg-white py-12 lg:py-16", GUTTER)}>
      <h2 className="text-center section-heading text-black">
        Choose Your <span className="text-primary-subtle italic">Journey</span>
      </h2>

      <div className="mt-10 grid bg-[#001D31] sm:grid-cols-[minmax(0,18rem)_1fr] lg:mt-12 lg:grid-cols-[minmax(0,25rem)_1fr]">
        <Image
          src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Homepage+-+Journey+Section.png"
          alt="Three generations of an Indian family sitting together outdoors"
          width={408}
          height={271}
          sizes="(min-width: 1024px) 25rem, (min-width: 640px) 18rem, 100vw"
          className="h-56 w-full object-cover sm:h-full"
        />

        <div className="flex flex-col items-start justify-center gap-3 p-8 lg:p-10">
          <h3 className="font-cormorant text-xl font-bold text-white sm:text-2xl">
            I am a Patient / Caregiver
          </h3>
          <p className="font-roboto text-sm leading-relaxed text-white/70 sm:text-base">
            Understand your kidney condition, explore treatment options, and
            find a centre near you for compassionate, world-class care.
          </p>
          <Link
            href="/patient-guide"
            aria-label="Open the patient and caregiver guide"
            className="group inline-flex items-center gap-1.5 font-roboto text-sm font-medium text-primary transition hover:text-primary/75 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none sm:text-base"
          >
            Click here
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
