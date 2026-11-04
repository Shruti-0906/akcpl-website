import { CountUp, Eyebrow, KidneyIcon } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const MILESTONES = [
  { value: "2003", label: "The Founding", detail: "Conversation Begins" },
  { value: "2008", label: "First AKC Dialysis", detail: "Session Delivered" },
  { value: "18", label: "Years Since", detail: "The Founding" },
  { value: "250+", label: "Centres Across", detail: "14 States Today" },
  { value: "1,850", label: "Coworkers" },
] as const;

const StoryHeroSection = () => {
  return (
    <section id="story-hero" className="flex flex-col bg-depth">
      <div
        className={cn(
          "relative flex flex-1 items-center overflow-hidden py-16 lg:py-24",
          GUTTER,
        )}
      >
        <KidneyIcon />

        <div className="relative flex max-w-5xl flex-col gap-5 sm:gap-6">
          <Eyebrow
            label="Our Story · Since 2008 Eighteen Years of Apex"
            className="text-white/70"
          />

          <h1 className="section-heading font-semibold text-white">
            It began with a{" "}
            <span className="text-primary italic">conversation</span>
            <span className="block">on the sidelines of a conference.</span>
          </h1>

          <p className="font-roboto text-sm leading-relaxed text-white sm:text-base">
            In 2003, four young nephrologists in Mumbai found themselves
            discussing the same problem at the same conference. India&apos;s
            dialysis sector was nowhere near where it needed to be. The
            conversation that began on the sidelines that week did not end. It
            continued every week, for four years, until on Independence Day
            2008, the first AKC dialysis session was delivered. This is the
            story of the eighteen years since.
          </p>
        </div>
      </div>

      <div className={cn("border-t border-white/10 bg-depth-band", GUTTER)}>
        <div className="flex flex-wrap justify-center gap-y-8 py-8 lg:flex-nowrap lg:gap-y-0 lg:divide-x lg:divide-white/15">
          {MILESTONES.map((milestone, index) => (
            <div
              key={index}
              className="basis-1/2 text-center sm:basis-1/3 lg:basis-1/5 lg:px-6 lg:text-left lg:first:pl-0"
            >
              <p className="font-roboto text-3xl font-semibold text-primary-light lg:text-[40px]">
                <CountUp value={milestone.value} />
              </p>
              <p className="mt-1 font-roboto text-[0.7rem] tracking-wider text-[#AED7E9] uppercase">
                {milestone.label}
                {"detail" in milestone && (
                  <span className="block">{milestone.detail}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryHeroSection;
