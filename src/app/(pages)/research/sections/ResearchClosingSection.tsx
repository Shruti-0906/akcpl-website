import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const ResearchClosingSection = () => {
  return (
    <section className={cn("bg-white py-16 text-center lg:py-20", GUTTER)}>
      <Eyebrow
        label="For Researchers, Reviewers & Collaborators"
        className="justify-center text-secondary"
      />

      <p className="mx-auto mt-8 max-w-6xl font-cormorant font-semibold text-2xl leading-[1.35] text-black sm:text-3xl lg:text-[34px]">
        <em className="text-primary-subtle italic">
          The published record is the institutional commitment.
        </em>{" "}
        AKC &amp; the Apex Kidney Foundation continue to make their network
        data, their operational protocols, and their research findings available
        to academic partners, peer reviewers, clinical guideline committees, and
        policy researchers working on the future of dialysis and transplantation
        in India.
      </p>
    </section>
  );
};

export default ResearchClosingSection;
