import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const CELLS = [
  {
    value: <em className="text-[0.85em] font-semibold italic">2011</em>,
    label: "Founded",
    sub: "Founded under the Apex Academia umbrella by AKC.",
  },
  {
    value: "15",
    label: "Years of Training",
    sub: "Continuous operation as one of India's longest-running dialysis technology schools.",
  },
  {
    value: (
      <span className="text-[0.62em] font-normal tracking-[-0.01em] italic">
        {"{trained}"}
      </span>
    ),
    label: "Alumni Trained",
    sub: "Technicians and nurses trained, credentialed, and placed across India.",
  },
  {
    value: "TISS",
    label: "+ MSBSVET",
    sub: "Affiliated with TISS, empowering future dialysis professionals with trusted academic credentials.",
  },
] as const;

const NumbersSection = () => (
  <section className={cn("relative bg-[#e0f2f9] py-32.5", GUTTER)}>
    <div className="mx-auto mb-14 text-center">
      {/* White on this pale band reads as a faint watermark rather than a
          heading, which is the intent. */}
      <Eyebrow
        label="By the Numbers"
        className="mb-5 inline-flex text-[14px] font-normal text-secondary"
      />

      <h2 className="mb-4 font-cormorant text-[clamp(30px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
        Fifteen years{" "}
        <em className="text-primary-subtle italic">of training, in figures.</em>
      </h2>

      <p className="font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
        The cumulative scale of the Apex School of Dialysis Technology&rsquo;s
        contribution to India&rsquo;s nephrology workforce.
      </p>
    </div>

    <div className="grid gap-px overflow-hidden rounded-[2px] sm:grid-cols-2 lg:grid-cols-4">
      {CELLS.map((cell) => (
        <div
          key={cell.label}
          className="relative w-full bg-white px-7.5 py-10.5"
        >
          <p className="mb-3.5 font-roboto text-[58px] leading-none font-semibold tracking-[-0.028em] text-primary-subtle">
            {cell.value}
          </p>
          <p className="mb-2 font-roboto text-[16px] leading-[1.4] font-bold tracking-[0.18em] text-secondary uppercase">
            {cell.label}
          </p>
          <p className="font-roboto text-[13.5px] leading-[1.5] text-[#393f42] italic">
            {cell.sub}
          </p>
        </div>
      ))}
    </div>

    <p className="mt-6.25 text-center font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
      figures · <span>AKC operating data</span> · {"{trained}"} placeholder to
      be populated by Apex School records
    </p>
  </section>
);

export default NumbersSection;
