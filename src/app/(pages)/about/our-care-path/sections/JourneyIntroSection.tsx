import { Eyebrow } from "@/components";

const JourneyIntroSection = () => {
  return (
    <section className="bg-[#e0f2f9] pt-30 pb-15 text-center">
      <div className="mx-auto max-w-220 px-8">
        <Eyebrow label="The Care Journey" className="inline-flex text-black" />
        <h2 className="mt-5 section-heading text-black">
          Six chapters,{" "}
          <em className="text-primary-subtle italic">
            told from the patient&rsquo;s side.
          </em>
        </h2>
        <p className="mt-5 font-roboto text-[17px] leading-5.5 font-light text-[#393f42]">
          From the first nervous walk through the door to the moment a patient
          gets the call about a possible transplant &mdash; the care looks
          different at each stage, and yet the principles are the same.
        </p>
      </div>
    </section>
  );
};

export default JourneyIntroSection;
