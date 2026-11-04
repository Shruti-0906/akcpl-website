import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const VisionSection = () => {
  return (
    <section id="vision" className={cn("bg-[#e0f2f9] py-16 lg:py-27.5", GUTTER)}>
      <div className="flex flex-col">
        <div className="flex items-start gap-6 border-b border-black/10 pb-8">
          <span className="font-cormorant text-5xl leading-none text-black italic lg:text-6xl">
            I
          </span>
          <div className="flex flex-col gap-2 pt-2">
            <Eyebrow
              label="Chapter One · The destination"
              className="text-black"
            />
            <h2 className="section-heading text-black">
              Our <span className="text-primary-subtle italic">vision</span>.
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[340px_1fr] lg:gap-20">
          <div
            className="mx-auto flex size-62 flex-col items-center justify-center gap-3 rounded-full text-center sm:size-75 lg:size-85"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #5bc5f2, #009ee3 30%, #003e68 75%)",
              boxShadow: "0 0 0 1px #009ee3, 0 0 0 8px #fff, 0 0 0 9px #003e68",
            }}
          >
            <p className="font-roboto text-[10.5px] font-bold tracking-[0.28em] text-white uppercase">
              {"// Our Vision"}
            </p>
            <p className="px-5 font-roboto text-2xl leading-[1.15] font-bold text-white sm:px-8 sm:text-[30px]">
              Transforming
              <br />
              <span className="italic">Kidney Care.</span>
            </p>
          </div>

          <div className="flex flex-col gap-5.5 font-roboto text-base leading-relaxed text-secondary/70 sm:text-[18.5px] sm:leading-[1.85]">
            <p>
              Three words. Stated simply, because{" "}
              <em className="text-secondary-light italic">
                the destination should be possible to say in one sentence.
              </em>
            </p>
            <p>
              India&rsquo;s kidney care landscape is not where it needs to be.{" "}
              <strong className="font-bold text-secondary">
                Hundreds of thousands of patients live without access to quality
                dialysis. Many more progress through chronic kidney disease
                without ever seeing a nephrologist.
              </strong>{" "}
              Treatment, when it does arrive, is often unaffordable, fragmented,
              or delivered at a quality that falls short of international
              standards.
            </p>
            <p>
              <em className="text-secondary-light italic">
                Transforming kidney care
              </em>{" "}
              means none of those things has to remain true.{" "}
              <strong className="font-bold text-secondary">
                It means a country where dialysis is accessible regardless of
                geography or income. Where CKD is caught early and slowed. Where
                transplant becomes a realistic option, not a privilege.
              </strong>{" "}
              Where the quality of treatment a patient receives in a small town
              matches what they would have received in a major metro.
            </p>
            <p>
              This is what AKC has been working toward for{" "}
              <em className="text-secondary-light italic">eighteen years</em>.
              The work is far from done. The vision keeps the institution
              pointed in one direction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
