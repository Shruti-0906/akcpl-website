import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const COMMITMENTS = [
  {
    numeral: "i",
    title: (
      <>
        Advance kidney care{" "}
        <em className="text-primary-subtle italic">from cure to prevention.</em>
      </>
    ),
    description:
      "For too long, kidney care in India has meant treating disease after it has progressed. AKC's mission is to push the institution upstream, toward early CKD detection, slowing progression, preventing dialysis where possible. The best dialysis is the one a patient never needs.",
  },
  {
    numeral: "ii",
    title: (
      <>
        Cultivate a{" "}
        <em className="text-primary-subtle italic">
          compassionate, respectful, transparent
        </em>{" "}
        ecosystem.
      </>
    ),
    description:
      "Kidney care is not delivered by AKC alone. It involves patients, families, referring physicians, dietitians, surgeons, transplant teams, government partners, and philanthropists. Our mission is to make this ecosystem one of compassion, mutual respect, and openness about outcomes.",
  },
  {
    numeral: "iii",
    title: (
      <>
        Impact{" "}
        <em className="text-primary-subtle italic">
          lives, careers, and the institution.
        </em>
      </>
    ),
    description:
      "Three audiences, served simultaneously: patients whose lives our work touches directly; healthcare professionals whose careers we help shape through training and opportunity; and the institution itself, built on values rather than on quarterly results. A value-based organisation is one where all three thrive together.",
  },
  {
    numeral: "iv",
    title: (
      <>
        Leverage{" "}
        <em className="text-primary-subtle italic">
          innovation and modern technology.
        </em>
      </>
    ),
    description:
      "From Axis EMR (our in-house clinical platform) and the IRDS dashboard, to ASTRA's paired exchange algorithm and our IIT Bombay operations-research collaboration, technology and innovation are not auxiliary at AKC. They are how we make the network match international standards while remaining affordable.",
  },
] as const;

const MissionSection = () => {
  return (
    <section id="mission" className={cn("bg-white py-16 lg:py-27.5", GUTTER)}>
      <div className="flex flex-col">
        <div className="flex items-start gap-6 border-b border-black/10 pb-8">
          <span className="font-cormorant text-5xl leading-none text-black italic lg:text-6xl">
            II
          </span>
          <div className="flex flex-col gap-2 pt-2">
            <Eyebrow
              label="Chapter Two · The path of work"
              className="text-black"
            />
            <h2 className="section-heading text-black">
              Our <span className="text-primary-subtle italic">mission</span>.
            </h2>
          </div>
        </div>

        <div className="mt-8 mb-14 flex flex-col gap-3.75 font-roboto text-[17px] leading-5.5 font-light text-[#393f42]">
          <p>
            A vision is a destination. A mission is{" "}
            <em className="text-tertiary italic">
              how the institution works toward it every day
            </em>
            . AKC&rsquo;s mission is articulated as{" "}
            <strong className="font-bold">four commitments</strong>, four lenses
            through which every decision in the institution gets evaluated.
          </p>
          <p>
            These are not aspirations. They are{" "}
            <em className="text-tertiary italic">operating instructions</em>,
            binding on how we plan, what we build, who we hire, and what we
            choose not to do.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {COMMITMENTS.map((commitment) => (
            <div
              key={commitment.numeral}
              className="grid grid-cols-[40px_1fr] gap-4 rounded-sm border border-[#c7e4ef] bg-[#e0f2f9]/30 p-6 sm:grid-cols-[60px_1fr] sm:gap-6 lg:p-9"
            >
              <span className="font-cormorant text-5xl leading-none text-secondary-light italic">
                {commitment.numeral}
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="section-heading text-3xl lg:text-4xl text-black">
                  {commitment.title}
                </h3>
                <p className="font-roboto text-[17px] leading-5.5 font-light text-[#393f42]">
                  {commitment.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9 rounded-[0_2px_2px_0] border-l-2 border-primary-subtle bg-primary-subtle/[0.06] px-7 py-6.5 font-roboto text-[17px] leading-5.5 font-light text-[#393f42]">
          <p>
            <strong className="font-bold">
              The four mission lines are not independent.
            </strong>{" "}
            Prevention <em className="text-tertiary italic">requires</em> the
            ecosystem. The ecosystem{" "}
            <em className="text-tertiary italic">requires</em> values-based
            behaviour. Values-based behaviour{" "}
            <em className="text-tertiary italic">requires</em> technology to
            keep work accountable.{" "}
            <strong className="font-bold">
              The whole only works as a whole.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
