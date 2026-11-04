import { ArrowRight } from "lucide-react";

import { Button, Eyebrow } from "@/components";

const NorthStar = () => (
  <div className="flex flex-col justify-center gap-6">
    <Eyebrow label="Our North Star" />

    <h3 className="section-heading text-black">
      We don&apos;t just treat kidney disease.
      <span className="block">
        We build the{" "}
        <span className="text-primary italic">infrastructure of hope</span> for
        India&apos;s 220 million people at risk.
      </span>
    </h3>

    <div className="flex flex-col gap-4">
      <p className="font-roboto text-sm leading-relaxed text-black sm:text-base">
        India faces a silent epidemic. Chronic kidney disease affects over 17%
        of our population, yet care infrastructure remains fragmented, data is
        sparse, and clinical training is uneven. Apex Kidney Care was founded to
        fundamentally change this.
      </p>
      <p className="font-roboto text-sm leading-relaxed text-black sm:text-base">
        Through a vertically integrated model combining clinical delivery,
        technology, data science, and education, AKC is building what India has
        never had before: a unified, validated, continuously improving renal
        care ecosystem.
      </p>
    </div>

    <Button href="/about/our-story" className="self-start">
      Read Our Full Story
      <ArrowRight aria-hidden="true" className="size-4" />
    </Button>
  </div>
);

export default NorthStar;
