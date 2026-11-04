import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const ClosingSection = () => (
  <section className={cn("relative bg-white py-20 text-center", GUTTER)}>
    <Eyebrow
      label="A School Worth Choosing"
      className="mb-5 inline-flex text-[14px] font-normal text-black"
    />

    <p className="mb-9 font-cormorant text-[22px] leading-[32px] font-bold tracking-[-0.015em] text-black sm:text-[26px] sm:leading-[38px] lg:text-[32px] lg:leading-[46px]">
      A dialysis qualification is more than a job.{" "}
      <em className="text-primary-subtle italic">
        It is a stable, respectable career
      </em>{" "}
      in a field where demand is growing faster than the country can train
      people for it.{" "}
      <strong className="font-bold">
        The Apex School of Dialysis Technology will take you from beginner to
        credentialed professional in two years
      </strong>{" "}
      &mdash; and the AKC network is waiting for you on the other side.
    </p>

    <div className="flex flex-col flex-wrap justify-center gap-[18px] sm:flex-row">
      <a
        href="#apply"
        className="inline-flex items-center justify-center gap-2 rounded border border-primary-subtle bg-primary-subtle px-8 py-4 font-roboto text-sm font-bold tracking-[0.04em] text-white hover:border-primary-light hover:bg-primary-light"
      >
        Apply for admission
        <span aria-hidden="true">→</span>
      </a>
      <a
        href="#"
        className="inline-flex items-center justify-center gap-2 rounded border border-[#363636] px-8 py-4 font-roboto text-sm font-bold tracking-[0.04em] text-[#363636] hover:border-primary-light hover:text-primary-light"
      >
        Speak to an advisor
        <span aria-hidden="true">→</span>
      </a>
    </div>
  </section>
);

export default ClosingSection;
