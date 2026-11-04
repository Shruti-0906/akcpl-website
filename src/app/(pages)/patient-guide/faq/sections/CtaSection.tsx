import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const CtaSection = () => (
  <section className={cn("bg-white py-14 text-center sm:py-20", GUTTER)}>
    <Eyebrow
      label="When You Need More Than a Page"
      className="mb-5 inline-flex text-[14px] font-normal text-black"
    />

    <p className="mb-9 font-cormorant text-[22px] leading-[32px] font-bold tracking-[-0.015em] text-black sm:text-[26px] sm:leading-[38px] lg:text-[32px] lg:leading-[46px]">
      A web page can answer common questions.{" "}
      <em className="text-primary-subtle italic">
        It cannot answer yours specifically.
      </em>{" "}
      <strong className="font-bold">
        Your nephrologist, your dialysis nurse, and your care team
      </strong>{" "}
      are the people who can. This page exists to help you ask better questions
      when you see them.
    </p>

    <div className="flex flex-col flex-wrap justify-center gap-[18px] sm:flex-row">
      <a
        href="#"
        className="inline-flex items-center justify-center gap-2 rounded border border-primary-subtle bg-primary-subtle px-8 py-4 font-roboto text-sm font-bold tracking-[0.04em] text-white hover:border-primary-light hover:bg-primary-light"
      >
        Find your nearest centre
        <span aria-hidden="true">→</span>
      </a>
      <a
        href="#"
        className="inline-flex items-center justify-center gap-2 rounded border border-[#363636] px-8 py-4 font-roboto text-sm font-bold tracking-[0.04em] text-[#363636] hover:border-primary-light hover:text-primary-light"
      >
        Speak to your care team
        <span aria-hidden="true">→</span>
      </a>
    </div>
  </section>
);

export default CtaSection;
