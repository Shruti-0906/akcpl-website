import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const STEPS = [
  {
    num: "i",
    name: (
      <>
        Foundation <em className="font-normal italic">Year</em>
      </>
    ),
    text: "Classroom instruction in nephrology, dialysis principles, water treatment, infection control. Theory and supervised practical sessions.",
  },
  {
    num: "ii",
    name: (
      <>
        Clinical <em className="font-normal italic">Practicum</em>
      </>
    ),
    text: "Extensive hands-on training at AKC's 250 centres — the largest clinical practicum network in Indian dialysis education.",
  },
  {
    num: "iii",
    name: (
      <>
        Certification{" "}
        <em className="font-normal italic">&amp; Credentialing</em>
      </>
    ),
    text: "Examination, BLS certification, and the issue of TISS MSBSVET-affiliated qualifications recognised across the industry.",
  },
  {
    num: "iv",
    name: (
      <>
        Placement <em className="font-normal italic">Pathway</em>
      </>
    ),
    text: "Direct placement support into AKC's network, hospital partners, government PPP centres, and other dialysis providers across India.",
  },
  {
    num: "v",
    name: (
      <>
        Career <em className="font-normal italic">Progression</em>
      </>
    ),
    text: "Senior technician, in-charge roles, training faculty, biomedical specialisation, supervisory and regional positions over time.",
  },
] as const;

const CareerOutcomeSection = () => (
  <section
    className={cn(
      // The reference section is centred: its `.outcome` class collides with a
      // stat-cell rule elsewhere in the stylesheet that carries text-align:center,
      // which its own overrides never reset. Hence the inline-flex eyebrows.
      "relative overflow-hidden bg-[linear-gradient(135deg,#0075a9_0%,#001f34_70%)] py-32.5 text-center text-[#F5F0E8]",
      GUTTER,
    )}
  >
    <div className="relative z-[2]">
      <div className="mb-16">
        <Eyebrow
          label="The Career Outcome"
          className="mb-5 inline-flex text-[14px] font-normal text-white"
        />

        <h2 className="mb-4 font-cormorant text-[clamp(30px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-white">
          What happens{" "}
          <em className="text-primary-subtle italic">after graduation.</em>
        </h2>

        <p className="font-roboto text-[17px] leading-[22px] font-light text-[rgba(251,248,243,0.72)]">
          A graduate of the Apex School of Dialysis Technology does not leave
          the institute looking for a job. They leave with a{" "}
          <strong className="font-normal">
            credential, a network, and a career arc
          </strong>{" "}
          that has been mapped out by the same institution that employs more
          than 1,850 people across the country. The path is structured,
          well-trodden, and visible from day one.
        </p>
      </div>

      <div className="mt-12 rounded-[2px] border border-white/[0.06] bg-white/5 px-8 py-12 lg:px-13">
        <Eyebrow
          label="The Graduate Career Arc"
          className="mb-5 inline-flex text-[14px] font-normal text-white"
        />

        <h3 className="mb-7.5 font-cormorant text-[28px] leading-[1.05] font-bold tracking-[-0.015em] text-white sm:text-[36px]">
          From classroom{" "}
          <em className="text-primary-subtle italic">to clinical floor</em>{" "}
          &mdash; in five stages.
        </h3>

        <div className="flex flex-col gap-3.5">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="grid items-center gap-6 rounded-[2px] border border-[rgba(229,192,123,0.12)] bg-black/[0.18] px-6 py-5 sm:grid-cols-[60px_1fr_2fr]"
            >
              <p className="text-center font-roboto text-[36px] leading-none font-light tracking-[-0.018em] text-[#F5F0E8] italic">
                {step.num}
              </p>
              <p className="font-roboto text-[18px] leading-[1.25] font-bold tracking-[-0.005em] text-[#F5F0E8]">
                {step.name}
              </p>
              <p className="font-roboto text-[14.5px] leading-[1.6] text-[rgba(251,248,243,0.7)]">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2px] border border-l-[3px] border-primary-subtle border-l-primary-subtle bg-[linear-gradient(135deg,#0075a9_0%,#001f34_70%)] px-10 py-8">
          <p className="font-roboto text-[18px] leading-[1.45] font-light tracking-[-0.005em] text-white italic">
            <strong className="font-normal text-white not-italic">
              A substantial proportion of AKC&rsquo;s 750+ technicians and
              nurses
            </strong>{" "}
            are graduates of the Apex School. Many graduates also work at
            hospitals, government dialysis centres, and dialysis providers{" "}
            <em className="italic">across India and abroad</em> &mdash; the
            credential travels.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CareerOutcomeSection;
