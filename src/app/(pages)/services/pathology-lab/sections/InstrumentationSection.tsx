import { GUTTER } from "@/constants";

const VENDORS = [
  {
    name: (
      <>
        <em>Roche</em>
      </>
    ),
    domain: "Immunology & Infectious Serology",
  },
  {
    name: (
      <>
        <em>Sysmex</em>
      </>
    ),
    domain: "Haematology & Clinical Pathology",
  },
  {
    name: (
      <>
        Ortho <em>Clinical Diagnostics</em>
      </>
    ),
    domain: "Clinical Chemistry",
  },
  {
    name: (
      <>
        TOSOH <em>India</em>
      </>
    ),
    domain: "HPLC",
  },
  {
    name: (
      <>
        Biomerieux <em>India</em>
      </>
    ),
    domain: "Microbiology",
  },
] as const;

const InstrumentationSection = () => (
  <section className={`bg-[#e0f2f9] py-16 lg:py-30 ${GUTTER}`}>
    <div>
      <div className="mb-12">
        <div className="mb-5 flex items-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
          <span className="h-px w-6 bg-black" />
          Instrumentation
        </div>
        <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
          The platforms{" "}
          <span className="text-primary-subtle italic">we run on.</span>
        </h2>
        <p className="mt-5 font-roboto text-[16.5px] leading-relaxed text-[#393f42]">
          AKCPL is equipped with Fully Automated Analysers for{" "}
          <strong className="font-bold">
            Biochemistry, Haematology, Immunoassay, Infectious Serology,
            Clinical Pathology and Microbiology
          </strong>{" "}
          diagnostics. Every analyser is connected to our LIS, and from LIS
          directly into Axis EMR.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
        {VENDORS.map((vendor, index) => (
          <div
            key={index}
            className="rounded-sm border border-primary-subtle bg-white p-5.5 text-center"
          >
            <div className="font-roboto text-lg leading-tight font-bold text-secondary [&_em]:font-normal [&_em]:text-primary-subtle [&_em]:italic">
              {vendor.name}
            </div>
            <div className="mt-1.5 font-roboto text-[9.5px] leading-snug font-bold tracking-[0.16em] text-[#393f42] uppercase">
              {vendor.domain}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InstrumentationSection;
