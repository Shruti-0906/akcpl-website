import Image from "next/image";

const PartnershipThesisSection = () => (
  <section className="relative overflow-hidden bg-white py-[110px] before:pointer-events-none before:absolute before:inset-0 before:bg-noise before:opacity-[0.04] before:mix-blend-multiply before:content-['']">
    <div className="relative z-[2] mx-auto w-full px-6 sm:px-10 lg:px-14.5">
      <p className="relative m-0 max-w-none pt-12 pb-9 font-cormorant text-[30px] leading-[1.3] font-normal tracking-[-0.012em] text-black italic before:absolute before:-top-px before:left-0 before:h-[3px] before:w-15 before:bg-primary-subtle before:content-[''] [&_strong]:font-cormorant [&_strong]:font-bold [&_strong]:text-[#00b3ff] [&>span]:mt-8 [&>span]:block [&>span]:font-roboto [&>span]:text-[11px] [&>span]:font-bold [&>span]:tracking-[0.22em] [&>span]:text-tertiary [&>span]:uppercase [&>span]:not-italic">
        What AKC offers a nephrologist is the{" "}
        <strong>institutional leverage</strong> their training prepared them for
        and their career has not yet given them — financial leverage on
        operations, intellectual leverage from real data, academic leverage from
        a research substrate, reputational leverage from being inside the
        institution that is increasingly setting the standard of Indian kidney
        care.
        <span>The Partnership Thesis</span>
      </p>
      <div className="mt-2.5 grid grid-cols-1 gap-16 border-t border-[#ccc] pt-16 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-normal [&_strong]:text-inherit">
            Most senior Indian nephrologists reach a quiet plateau by their
            mid-forties. Patient volumes are steady. Reputation is established.
            Income is comfortable. <strong>And something stops growing.</strong>{" "}
            The academic work falls away. The skills don&apos;t deepen. The
            career, which began with so much intellectual ambition in
            fellowship, narrows imperceptibly into a routine.
          </p>
          <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-normal [&_strong]:text-inherit">
            This is not a failure of talent. It is a failure of{" "}
            <em>platform</em>. The platform that would let a clinician keep
            growing — data, research infrastructure, peer colleagues, an
            institutional voice — almost doesn&apos;t exist outside the
            country&apos;s handful of academic centres.
          </p>
          <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-normal [&_strong]:text-inherit">
            AKC was built, in part, to fix this. The six dimensions that follow
            are not a sales pitch. They are{" "}
            <strong>
              the honest case for what a partner nephrologist can expect to gain
            </strong>{" "}
            from being inside the institution — alongside the work, the
            standards, and the discipline that the institution will also expect
            from them.
          </p>
        </div>
        <Image
          src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Nephrologists+-+Partnership+Thesis+Section.jpg"
          alt="Kidney Health"
          width={800}
          height={434}
          className="aspect-[52/31] h-auto w-full max-w-[420px] justify-self-end border border-white object-cover object-center shadow-[0_12px_24px_rgba(0,0,0,0.16)]"
        />
      </div>
      <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-normal [&_strong]:text-inherit">
        Read it as a colleague would.{" "}
        <em>If any of it does not ring true, push back.</em> The partnership
        conversations that work best at AKC have always been the ones that began
        with honest scepticism.
      </p>
    </div>
  </section>
);

export default PartnershipThesisSection;
