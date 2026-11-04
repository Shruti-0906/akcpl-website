import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const CommitmentSection = () => {
  return (
    <section
      id="commitment"
      className={cn("bg-secondary-light py-14 lg:py-20", GUTTER)}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <Eyebrow
          label="Our Commitment"
          className="justify-center text-white/70"
        />

        <blockquote className="section-heading font-medium text-white">
          &quot;We measure our success not by the number of patients we treat,
          but by the{" "}
          <span className="text-primary italic">quality of life</span> we
          restore - one kidney at a time, across every district of India.&quot;
        </blockquote>
      </div>
    </section>
  );
};

export default CommitmentSection;
