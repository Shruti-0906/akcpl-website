import { cn } from "@/lib";

import { GUTTER } from "@/constants";

const STEPS = [
  {
    num: "01",
    icon: "M9 2v3M15 2v3M6 9h12M5 5h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z",
    title: (
      <>
        Sample <em className="text-primary-subtle italic">collected</em>
      </>
    ),
    text: (
      <>
        At your{" "}
        <strong className="font-bold text-secondary">
          AKC dialysis centre, the AKCPL collection point, or your home
        </strong>{" "}
        via the home collection team.
      </>
    ),
  },
  {
    num: "02",
    icon: "M3 12l5-9 5 14 4-7h4",
    title: (
      <>
        Logistics &amp; <em className="text-primary-subtle italic">tracking</em>
      </>
    ),
    text: (
      <>
        The{" "}
        <strong className="font-bold text-secondary">
          12 hrs logistics chain
        </strong>{" "}
        moves samples to AKCPL&apos;s centralised lab at Goregaon — tracked
        end-to-end.
      </>
    ),
  },
  {
    num: "03",
    icon: "M12 12m-9 0a9 9 0 1018 0 9 9 0 10-18 0M12 12m-3 0a3 3 0 106 0 3 3 0 10-6 0M12 3v2M12 19v2M3 12h2M19 12h2",
    title: (
      <>
        Analysis <em className="text-primary-subtle italic">run</em>
      </>
    ),
    text: (
      <>
        Tests run on{" "}
        <strong className="font-bold text-secondary">
          Leading diagnostics platforms
        </strong>{" "}
        of Ortho Clinical Diagnostics, Biomerieux India, Sysmex, Roche
        Diagnostics &amp; TOSOH India.
      </>
    ),
  },
  {
    num: "04",
    icon: "M3 4h18v14a2 2 0 01-2 2H5a2 2 0 01-2-2zM3 8h18M7 12h6M7 15h10",
    title: (
      <>
        Direct push <em className="text-primary-subtle italic">to EMR</em>
      </>
    ),
    text: (
      <>
        Results flow{" "}
        <strong className="font-bold text-secondary">
          directly into Axis EMR
        </strong>{" "}
        — no PDF, no manual re-entry, no transcription error.{" "}
        <em className="italic">Patient timeline updates in real time.</em>
      </>
    ),
  },
  {
    num: "05",
    icon: "M3 17l6-6 4 4 8-8M14 7h7v7",
    title: (
      <>
        Trend &amp; <em className="text-primary-subtle italic">insight</em>
      </>
    ),
    text: (
      <>
        Nephrologists see{" "}
        <strong className="font-bold text-secondary">
          longitudinal trends, cohort comparisons, and automatic flags
        </strong>{" "}
        — not just the latest value.
      </>
    ),
  },
] as const;

const FlowSection = () => (
  <section className={`bg-[#e0f2f9] py-16 lg:py-32.5 ${GUTTER}`}>
    <div>
      <div className="text-center">
        <div className="mb-5 flex items-center justify-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
          <span className="h-px w-6 bg-black" />
          Sample to Insight
        </div>
        <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
          Five steps.{" "}
          <span className="text-primary-subtle italic">One institution.</span>
        </h2>
        <p className="mt-5 font-roboto text-[17px] text-[#393f42] italic">
          Here&apos;s what happens when you give a blood sample at an AKC centre
          — from the moment the needle leaves your arm to the moment your
          nephrologist sees a meaningful pattern.
        </p>
      </div>

      <div className="relative mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        <div className="absolute top-[42px] right-[6%] left-[6%] hidden h-0.5 bg-[linear-gradient(90deg,#009ee3,#0075a9,#fdebc4)] lg:block" />

        {STEPS.map((step) => (
          <div key={step.num} className="relative text-center">
            <div className="relative z-10 mx-auto mb-5 grid size-[84px] place-items-center rounded-full border-2 border-primary-subtle bg-white shadow-[0_0_0_6px_#F5F0E8]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                className="size-[34px] text-primary-subtle"
              >
                <path d={step.icon} />
              </svg>
            </div>

            <div className="mb-5 flex items-center justify-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
              <span className="h-px w-6 bg-black" />
              {step.num}
            </div>
            <div className="font-cormorant text-2xl font-bold text-black">
              {step.title}
            </div>
            <p className="mt-2 font-roboto text-[13.5px] leading-relaxed text-[#404040]">
              {step.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-r-sm border-l-2 border-primary-subtle bg-[#0e7c7b]/[0.06] px-7 py-6">
        <p className="font-roboto text-[17px] leading-[1.45] text-[#393f42]">
          <strong className="font-bold">
            This is the operational difference between a third-party lab and an
            institutional diagnostic arm.
          </strong>{" "}
          Same sample. Different value extracted from it.
        </p>
      </div>
    </div>
  </section>
);

export default FlowSection;
