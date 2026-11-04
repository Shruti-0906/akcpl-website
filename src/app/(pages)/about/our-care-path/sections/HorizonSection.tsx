import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const PATHWAYS = [
  {
    num: "i",
    name: (
      <>
        Living-Related <em className="text-tertiary italic">Donor</em>
      </>
    ),
    desc: "Family-donor evaluation, immunological workup, surgical scheduling. The most direct pathway.",
  },
  {
    num: "ii",
    name: (
      <>
        Paired Kidney Exchange{" "}
        <em className="text-tertiary italic">via ASTRA</em>
      </>
    ),
    desc: "When a family donor is not a match. AKC operates one of India's most active paired-exchange registries.",
  },
  {
    num: "iii",
    name: (
      <>
        Deceased Donor <em className="text-tertiary italic">Waitlist</em>
      </>
    ),
    desc: "Registration support, eligibility certification, ongoing waitlist management across state and national programmes.",
  },
  {
    num: "iv",
    name: (
      <>
        Fusion <em className="text-tertiary italic">Pathways</em>
      </>
    ),
    desc: "AKC's research-driven model linking the waitlist and PKE registry opening additional matching possibilities.",
  },
] as const;

const HorizonSection = () => {
  return (
    <section
      className={cn("relative overflow-hidden bg-white py-32.5", GUTTER)}
    >
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow label="The Horizon · In Detail" className="text-black" />
          <h2 className="mt-5 section-heading text-black">
            Every transplant-eligible patient{" "}
            <em className="text-primary-subtle italic">
              deserves to know every pathway.
            </em>
          </h2>
          <div className="mt-5 flex flex-col gap-5 font-roboto text-[17px] leading-5.5 font-light text-[#393f42]">
            <p>
              For most dialysis patients,{" "}
              <strong className="font-bold">
                a transplant is the best clinical outcome available to them
              </strong>{" "}
              &mdash; longer survival, better quality of life, freedom from the
              schedule. Yet many patients in India never have the conversation,
              often because nobody on their care team initiated it.
            </p>
            <p>
              AKC initiates it.{" "}
              <em className="text-tertiary italic">
                Every patient who is medically eligible is offered active
                counselling about transplantation, walked through the donor
                pathways available to them, and supported through the process if
                they choose to pursue it.
              </em>{" "}
              Encouragement is not ambient &mdash; it is structured into the
              care plan.
            </p>
          </div>
        </div>

        <div className="rounded-sm border border-[#e0f2f9] bg-[#e0f2f9] p-9">
          <Eyebrow label="// Four Pathways" className="text-black" />
          <h3 className="mt-3.5 section-heading text-black">
            How AKC{" "}
            <em className="text-primary-subtle italic">opens the door</em> to
            transplantation.
          </h3>

          <ul className="mt-6 flex flex-col">
            {PATHWAYS.map((pathway, index) => (
              <li
                key={pathway.num}
                className={
                  index < PATHWAYS.length - 1
                    ? "grid grid-cols-[42px_1fr] gap-4.5 border-b border-[#d1e2e9] py-4.5"
                    : "grid grid-cols-[42px_1fr] gap-4.5 pt-4.5"
                }
              >
                <span className="pt-0.5 text-right font-cormorant text-2xl leading-none text-[#00b3ff] italic">
                  {pathway.num}
                </span>
                <div>
                  <p className="mb-1 font-roboto text-[19px] font-medium tracking-[-0.005em] text-secondary">
                    {pathway.name}
                  </p>
                  <p className="font-roboto text-[17px] leading-5.5 font-light text-[#393f42]">
                    {pathway.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HorizonSection;
