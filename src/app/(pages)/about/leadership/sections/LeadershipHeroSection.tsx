import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const LeadershipHeroSection = () => {
  return (
    <section className={cn("bg-white pt-8 pb-6 lg:pt-10 lg:pb-8", GUTTER)}>
      <div className="mx-auto max-w-7xl">
        <h1 className="section-heading text-black">
          A Collective
          <br />
          <span className="text-primary-subtle italic">Commitment</span>
        </h1>

        {/* No measure cap: with the banner gone the copy runs the full
            container width, so the whole paragraph sets in three or four
            lines rather than six. */}
        <p className="mt-5 font-roboto text-base leading-relaxed text-[#393f42]">
          At AKC, our dedicated team of doctors, nurses, and dialysis
          technicians works with compassion, precision, and commitment to
          deliver safe and high-quality kidney care. With advanced clinical
          expertise and a patient-first approach, we strive to create a
          comfortable, supportive, and trusted treatment experience for every
          patient. It is this collective commitment that makes trusted kidney
          care possible.
        </p>
      </div>
    </section>
  );
};

export default LeadershipHeroSection;
