import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { NorthStar, ValuesGrid } from "../components";

const AboutSection = () => {
  return (
    <section id="about" className={cn("bg-white py-12 lg:py-16", GUTTER)}>
      <div className="flex flex-col gap-5">
        <Eyebrow label="About AKC" />
        <h2 className="section-heading text-black">
          Welcome to{" "}
          <span className="text-primary-subtle italic">Apex Kidney Care</span>
        </h2>
        <p className="font-roboto text-sm leading-relaxed text-black sm:text-base">
          Apex Kidney Care Pvt. Ltd. (AKC) provides comprehensive kidney care at
          affordable rates to patients suffering from kidney disease. Apex runs
          a chain of world-class dialysis centres. Because Apex is founded,
          owned and run by nephrologists, our patients gain a unique advantage
          in the science and service quality of the dialysis we deliver.
        </p>
      </div>

      <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
        <NorthStar />
        <ValuesGrid />
      </div>
    </section>
  );
};

export default AboutSection;
