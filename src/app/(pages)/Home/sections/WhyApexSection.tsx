import Image from "next/image";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const WhyApexSection = () => {
  return (
    <section
      id="why-apex"
      className={cn("bg-depth-deep py-12 lg:py-16", GUTTER)}
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,25rem)] lg:gap-16">
        <div className="flex flex-col gap-8">
          <Eyebrow label="Why Apex is Different" className="text-white/65" />

          <div className="flex flex-col gap-3">
            <h2 className="section-heading font-medium text-white">
              Built by the nephrologists who{" "}
              <span className="text-primary italic">treat you.</span>
            </h2>
            <p className="font-roboto text-sm leading-relaxed text-white/70 sm:text-base">
              Apex Kidney Care is India&apos;s only kidney-care company founded,
              owned and run by nephrologists. That isn&apos;t a credential we
              wear. It&apos;s the reason every decision - clinical, technical,
              human - starts from the patient&apos;s side of the table.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="section-heading font-medium text-white">
              Because we&apos;re nephrologists, we see{" "}
              <span className="text-primary italic">all of it.</span>
            </h3>
            <p className="font-roboto text-sm leading-relaxed text-white/70 sm:text-base">
              The dialysis sessions form 12 hours of a patient&apos;s week. As
              nephrologists, we are trained to care for the other 156 hours too
              - the access, the diet, the numbers, the mind, the money, the road
              ahead. Holistic care isn&apos;t a service line at Apex. It&apos;s
              how kidney doctors think.
            </p>
          </div>

          <blockquote className="section-heading font-medium text-white">
            &quot;We don&apos;t just run dialysis centres. We care for{" "}
            <span className="text-primary italic">nephrology</span> patients -
            at scale.&quot;
          </blockquote>
        </div>

        <Image
          src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Homepage+-+Why+Apex+is+different+-+section.jpg"
          alt="A nephrologist resting a hand on a patient's hand at the bedside"
          width={612}
          height={918}
          quality={100}
          sizes="(min-width: 1024px) 402px, 100vw"
          className="mx-auto h-full w-full max-w-100.5 lg:mr-0"
        />
      </div>
    </section>
  );
};

export default WhyApexSection;
