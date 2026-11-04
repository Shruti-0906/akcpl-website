import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const ExpertQuoteSection = () => (
  <section className={cn("bg-white py-22.5", GUTTER)}>
    <div>
      <figure className="relative rounded-[22px] border border-[#ccc] bg-white px-14 py-13.5 shadow-[0_0_15px_rgba(0,0,0,0.05)] max-[600px]:px-7 max-[600px]:py-9.5">
        <span
          aria-hidden="true"
          className="absolute top-12.5 left-12.5 hidden font-roboto text-[90px] leading-[0.6] text-tertiary sm:block"
        >
          &ldquo;
        </span>

        <blockquote className="relative z-2 font-roboto text-[clamp(20px,2.6vw,30px)] leading-[1.5] font-normal text-secondary italic sm:ml-7.5">
          For the first time in decades, a change in the basic principles of
          dialysis has turned out to be genuinely meaningful for patients.
          Hemodiafiltration can be considered a superior alternative to
          standard dialysis.
        </blockquote>

        <figcaption className="mt-6.5 flex items-center gap-3.5 sm:ml-7.5">
          <span aria-hidden="true" className="h-0.5 w-9 shrink-0 bg-tertiary" />
          {/*
            The source colours this line with `var(--muted)`, a variable it
            never defines, so it inherits `body { color: var(--white) }` and
            reads white-on-white. Only the `<b>`, which has a valid
            `var(--navy)`, is legible on the original page.
          */}
          <span className="font-roboto text-sm text-white">
            <b className="font-bold text-secondary">
              Reflecting the conclusions of Prof. Bernard Canaud - University of
              Montpellier, France
            </b>{" "}
            and colleagues across the CONVINCE trial and their 2024{" "}
            <em className="italic">Lancet</em> meta-analysis
          </span>
        </figcaption>
      </figure>
    </div>
  </section>
);

export default ExpertQuoteSection;
