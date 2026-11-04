import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const TRIPLET = [
  {
    numeral: "I",
    name: "Vision",
    text: (
      <>
        Transforming
        <br />
        kidney care.
      </>
    ),
  },
  {
    numeral: "II",
    name: "Mission",
    text: (
      <>
        Four commitments to
        <br />
        get there.
      </>
    ),
  },
  {
    numeral: "III",
    name: "Values",
    text: (
      <>
        Integrity. Collaboration.
        <br />
        Excellence. Empathy.
      </>
    ),
  },
] as const;

const ClosingSection = () => {
  return (
    <section className={cn("bg-white py-14 text-center lg:py-20", GUTTER)}>
      <div className="flex flex-col items-center gap-8">
        <Eyebrow label="How They Fit Together" className="text-black" />

        <h2 className="font-cormorant text-2xl leading-snug font-bold text-black sm:text-3xl lg:text-[38px] lg:leading-11.25">
          <span className="text-primary-subtle italic">
            The vision points the direction.
          </span>{" "}
          The mission describes the work.
          <br className="hidden lg:inline" />
          <strong className="font-bold">
            The values define the conduct.
          </strong>{" "}
          Together they form an institution
          <br className="hidden lg:inline" />
          that means what it says,{" "}
          <span className="text-primary-subtle italic">
            and acts accordingly.
          </span>
        </h2>

        <div className="mt-12 grid w-full gap-8 border-t border-[rgba(229,192,123,0.25)] pt-12 sm:grid-cols-3">
          {TRIPLET.map((item) => (
            <div
              key={item.numeral}
              className="flex flex-col items-center gap-2.5"
            >
              <span className="font-cormorant text-3xl leading-none text-secondary italic">
                {item.numeral}
              </span>
              <p className="font-roboto text-[10.5px] font-bold tracking-[0.24em] text-secondary uppercase">
                {item.name}
              </p>
              <p className="font-roboto text-[17px] leading-[1.45] tracking-[-0.005em] text-black italic">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
