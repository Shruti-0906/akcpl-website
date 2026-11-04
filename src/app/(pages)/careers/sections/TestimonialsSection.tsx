import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import TestimonialCard from "../components/TestimonialCard";
import { TESTIMONIALS } from "../components/testimonials";

const TestimonialsSection = () => (
  <section
    id="testimonials"
    className={cn(
      "relative scroll-mt-33 overflow-hidden bg-white py-20 lg:py-24",
      GUTTER,
    )}
  >
    <div className="relative mx-auto mb-14 max-w-5xl text-center">
      <Eyebrow
        label="Employee Testimonials"
        className="mb-5 inline-flex text-[14px] font-normal text-secondary"
      />

      <h2 className="mb-5 font-cormorant text-[clamp(30px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
        In their <em className="text-primary-subtle italic">own words</em>.
      </h2>

      <p className="font-roboto text-[16px] leading-[1.7] font-light text-[#393f42]">
        TODO intro line for the testimonials section.
      </p>
    </div>

    <div className="relative grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
      {TESTIMONIALS.map((item, index) => (
        <TestimonialCard key={item.name} item={item} index={index} />
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
