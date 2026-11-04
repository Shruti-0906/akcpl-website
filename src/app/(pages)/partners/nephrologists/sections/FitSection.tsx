import { SectionLabel } from "../components";

const FitSection = () => (
  <section className="relative bg-[#e0f2f9] py-[130px]">
    <div className="relative z-[2] mx-auto w-full px-6 sm:px-10 lg:px-14.5">
      <div className="mx-auto mb-16 text-center">
        <SectionLabel inline>An Honest Word About Fit</SectionLabel>
        <h2 className="mb-4 font-cormorant text-[clamp(36px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black [&_em]:text-primary-subtle [&_em]:italic">
          Who this partnership <em>is</em> for —<br />
          and who it isn&apos;t.
        </h2>
        <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-normal [&_strong]:text-inherit">
          Not every nephrologist wants what AKC offers, and the partnership is
          built more honestly on that admission than on any pitch.
        </p>
      </div>
      <div className="relative rounded-[2px] bg-[#e9f7fd] px-9 py-10 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-primary-subtle before:content-['']">
        <div className="mb-3.5 font-roboto text-[10.5px] leading-[normal] font-bold tracking-[0.22em] text-primary-subtle uppercase">
          This is for the nephrologist who…
        </div>
        <h3 className="mb-6 font-cormorant text-2xl leading-[1.25] font-bold tracking-[-0.005em] text-secondary [&_em]:text-[#00b3ff] [&_em]:italic">
          Wants <em>leverage, scale, and an institution</em> — without giving up
          clinical work.
        </h3>
        <ul className="flex list-none flex-col gap-3.5 [&_li]:relative [&_li]:pl-6 [&_li]:text-[15.5px] [&_li]:leading-[1.6] [&_li]:text-[#393f42] [&_li]:before:absolute [&_li]:before:-top-px [&_li]:before:left-0 [&_li]:before:font-cormorant [&_li]:before:text-lg [&_li]:before:font-bold [&_li]:before:text-primary-subtle [&_li]:before:content-['+']">
          <li>
            Has built a strong clinical reputation and is ready for the next
            area
          </li>
          <li>
            Is frustrated by how much non-clinical work their practice demands
          </li>
          <li>Wants to do research again, but cannot do it alone</li>
          <li>
            Believes Indian kidney care should have a national institution — and
            wants to help build it
          </li>
          <li>
            Values audited clinical standards and prospective data capture
          </li>
          <li>
            Is willing to teach, mentor, and contribute beyond their own clinic
          </li>
          <li>
            Sees the next twenty years of their career as expansion, not as
            winding down
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default FitSection;
