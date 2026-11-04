import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const WorryScoreSection = () => {
  return (
    <section className={cn("bg-[#e0f2f9] py-20 lg:py-12.5", GUTTER)}>
      <div className="mb-14">
        <Eyebrow label="The Worry Score" className="text-black" />

        <h2 className="mt-5 mb-4 font-cormorant text-3xl leading-[1.05] font-bold tracking-[-0.015em] text-black sm:text-4xl lg:text-[52px]">
          What patients{" "}
          <em className="text-primary-subtle italic">worried about</em> before.
          <br />
          And what they actually{" "}
          <em className="text-primary-subtle italic">found.</em>
        </h2>

        <p className="font-roboto text-[15px] leading-relaxed font-light text-[#393f42] sm:text-[17px] sm:leading-5.5">
          Before starting home HD, patients carried significant anxiety
          about safety, comfort, emergency response, care quality, and cost.{" "}
          <strong className="font-normal">
            AKC measured these worry levels before the patient started home HD,
            and then again after they had been on the modality.
          </strong>{" "}
          The change is one of the clearest signals in the dataset.
        </p>
      </div>

      <div className="relative rounded-[3px] bg-white p-6 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-primary-subtle before:content-[''] sm:p-10">
        <p className="max-w-2xl font-roboto text-[15px] leading-[1.55] text-tertiary italic sm:text-[17px]">
          The largest improvements are in{" "}
          <em className="font-bold text-primary-subtle not-italic">
            safety, care quality, and emergency response
          </em>{" "}
          by the three areas where patients had the deepest pre-treatment fears.
          Once the programme is running in the home, those fears collapse.
        </p>
      </div>

      <div className="mt-9 border-l-[3px] border-primary-subtle bg-[#0e7c7b]/6 p-[24px_24px] sm:p-[32px_36px]">
        <p className="font-roboto text-6xl leading-[0.85] font-light tracking-[-0.028em] text-black sm:text-[84px]">
          60
          <span className="text-4xl text-[#7a9580] sm:text-5xl">%</span>
        </p>

        <h3 className="mt-4 mb-2.5 font-roboto text-xl leading-[1.2] font-normal tracking-[-0.012em] text-secondary sm:text-2xl">
          Of patients report{" "}
          <em className="text-[#7a9580] italic">an improved quality of life</em>{" "}
          on home HD.
        </h3>

        <p className="font-roboto text-[15px] leading-[1.7] text-[#2a2a2a] sm:text-[17px]">
          The improvement shows up in{" "}
          <strong className="font-bold text-secondary">
            worklife continuity, social life, or both.
          </strong>{" "}
          When the dialysis schedule stops dictating where the patient can be,
          life expands to include the things dialysis had pushed out.
        </p>
      </div>
    </section>
  );
};

export default WorryScoreSection;
