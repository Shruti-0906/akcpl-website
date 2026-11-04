import { Eyebrow, KidneyIcon } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const QaFrameworkHeroSection = () => (
  <section
    id="home"
    className={cn(
      "relative flex min-h-[calc(100vh-135px)] items-center overflow-hidden bg-hero-depth",
      GUTTER,
    )}
  >
    <div aria-hidden="true" className="absolute inset-0 z-0 bg-hero-grid" />

    <KidneyIcon />

    <div className="relative z-2 w-full max-w-180 py-16 lg:py-0">
      <Eyebrow
        label="Clinical Quality Assurance & Governance Framework"
        className="mb-5 text-[14px] font-normal text-white"
      />

      <h1 className="mb-7 font-cormorant text-[clamp(40px,6vw,62px)] leading-[1.05] font-light tracking-[-0.01em] text-white">
        Setting the Gold Standard in Patient Safety &amp;{" "}
        <em className="text-[#00b3ff] italic">Dialysis Excellence</em>
      </h1>

      <p className="mb-5 font-roboto text-[15px] leading-[1.7] font-light text-white sm:text-[17px]">
        At <strong className="font-bold">Apex Kidney Care (AKC)</strong>,
        clinical excellence is not an option&mdash;it is our baseline.
        Delivering hemodialysis and renal care requires uncompromised precision,
        rigorous infection control, and continuous monitoring.
      </p>

      <p className="font-roboto text-[15px] leading-[1.7] font-light text-white sm:text-[17px]">
        Our{" "}
        <strong className="font-bold">
          Clinical Quality Assurance &amp; Governance Framework
        </strong>{" "}
        is a multi-tiered, nephrologist-led system designed to standardize
        operations, mitigate clinical risks, and achieve predictable,
        high-quality patient outcomes across every AKC-managed center in India.
      </p>
    </div>
  </section>
);

export default QaFrameworkHeroSection;
