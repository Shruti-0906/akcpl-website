import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { HEADING_EM, EYEBROW_LABEL_2, SECTION_BASE } from "../../constants";

const PartnerSection = () => (
  <section
    id="partner"
    className={cn(SECTION_BASE, "bg-white text-center", GUTTER)}
  >
    <div className="mx-auto flex max-w-3xl flex-col items-center">
      <Eyebrow
        label="Partner with AKC"
        className={cn(EYEBROW_LABEL_2, "justify-center")}
      />
      <h2 className="mt-5 mb-5 font-cormorant text-[clamp(36px,4vw,58px)] leading-[1.1] font-bold text-black">
        Partner with AKC for{" "}
        <em className={HEADING_EM}>Industry-Leading Renal Care</em>
      </h2>
      <p className="font-roboto text-[17px] leading-[1.75] font-light text-[#393f42]">
        Learn more about how our Clinical Quality Assurance Framework raises the
        standard of dialysis care.
      </p>
    </div>
  </section>
);

export default PartnerSection;
