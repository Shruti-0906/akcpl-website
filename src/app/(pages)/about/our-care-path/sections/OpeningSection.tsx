import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const OpeningSection = () => {
  return (
    <section className={cn("bg-white py-30", GUTTER)}>
      <div>
        <Eyebrow label="Before Anything Else" className="text-black" />

        <h2 className="mt-5 font-cormorant text-[32px] leading-11.5 font-bold tracking-[-0.015em] text-black">
          A dialysis patient is not{" "}
          <em className="text-primary-subtle italic">a treatment.</em> They are{" "}
          <strong className="font-bold">
            a person walking into the room this morning
          </strong>{" "}
          &mdash; with a job, a family, a fear, and a quiet hope of being
          treated well.{" "}
          <em className="text-primary-subtle italic">
            How they are received in the first sixty seconds matters as much as
            how the next four hours are run.
          </em>
        </h2>

        <div className="mt-6 flex flex-col gap-5 font-roboto text-[17px] leading-5.5 font-light text-[#393f42]">
          <p>
            Most of the work of running a dialysis network is invisible to the
            patient. The water purification plant. The machine calibration. The
            quality audits. The data infrastructure. The protocols. The training
            pipeline.{" "}
            <strong className="font-bold">
              These exist so that the patient does not have to think about them.
            </strong>
          </p>
          <p>
            What the patient does experience is everything that surrounds the
            four hours in the chair &mdash; the way the technician says good
            morning. Whether anyone notices that today they look more tired than
            usual. Whether a question is answered in plain language or with
            jargon. Whether dignity is the default or an exception.{" "}
            <em className="text-tertiary italic">That is the care.</em>
          </p>
          <p>
            Below is how AKC tries to do it. Six chapters of an ordinary day in
            the life of an AKC dialysis patient.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OpeningSection;
