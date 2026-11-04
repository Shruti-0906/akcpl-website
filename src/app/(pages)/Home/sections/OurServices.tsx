import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { ServicesTabs } from "../components";

const OurServices = () => {
  return (
    <section id="services" className={cn("bg-[#e0f2f9] py-20 lg:py-8", GUTTER)}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="section-heading text-black">
          Our <span className="text-primary-subtle italic">Services</span>
        </h2>
        <p className="font-roboto text-sm text-black/70 sm:text-base">
          Comprehensive Kidney Care, Delivered with Excellence.
        </p>
      </div>

      <div className="mt-10 lg:mt-12">
        <ServicesTabs />
      </div>
    </section>
  );
};

export default OurServices;
