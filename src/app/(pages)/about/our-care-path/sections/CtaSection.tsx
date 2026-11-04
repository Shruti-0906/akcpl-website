import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const CtaSection = () => {
  return (
    <section className="bg-white py-20 text-center">
      <div className={cn(GUTTER, "mx-auto max-w-7xl")}>
        <Eyebrow label="The Care Promise" className="inline-flex text-black" />

        <p className="mt-5 mb-7.5 font-cormorant text-2xl md:text-3xl leading-11.5 font-bold tracking-[-0.015em] text-black">
          A dialysis patient at an AKC centre will be treated with{" "}
          <em className="text-primary-subtle italic">
            the most rigorous clinical care we know how to deliver,
          </em>{" "}
          <strong className="font-bold">
            and with the human warmth that the next ten years of their life will
            demand.
          </strong>{" "}
          Both. Always.{" "}
          <em className="text-primary-subtle italic">That is the promise.</em>
        </p>

        <div className="flex flex-wrap justify-center gap-4.5">
          <a
            href="/centres"
            className="inline-flex items-center gap-2 rounded border border-primary-subtle bg-primary-subtle px-8 py-4 font-roboto text-[14px] font-bold tracking-[0.04em] text-white transition-opacity hover:opacity-90"
          >
            Find a centre near you
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
