import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { TestimonialsCarousel } from "../components";

const TestimonialsSection = () => {
  return (
    /* White against the blue services section above it, so the two read as
       separate blocks without needing a rule between them. */
    <section id="testimonials" className={cn("bg-white py-20 lg:py-24", GUTTER)}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="section-heading text-black">
          Testimonials &amp;{" "}
          <span className="text-primary-subtle italic">Recognition</span>
        </h2>
        <p className="font-roboto text-sm text-black/70 sm:text-base">
          Positive Feedback. Compassionate Care.
        </p>
      </div>

      {/* The cards are square, so their height follows this width. Capping it
          against the viewport height as well keeps a whole card on screen on a
          short laptop, where a fixed 64rem would run past the fold. */}
      <div className="mx-auto mt-10 w-full max-w-[min(82.5rem,165dvh)] lg:mt-12">
        <TestimonialsCarousel />
      </div>
    </section>
  );
};

export default TestimonialsSection;
