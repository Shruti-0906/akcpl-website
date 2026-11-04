import { Button } from "@/components";

import { SectionLabel } from "../components";

const ConversationSection = () => (
  <section className="relative bg-white py-20 text-center">
    <div className="relative z-[2] mx-auto w-full px-6 sm:px-10 lg:px-14.5">
      <SectionLabel inline>A Conversation, Not a Pitch</SectionLabel>
      <h2 className="mb-4 font-cormorant text-[clamp(36px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black [&_em]:text-primary-subtle [&_em]:italic">
        The best partnerships at AKC have always begun with
        <br />
        <em>honest scepticism.</em>
      </h2>
      <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_strong]:font-normal [&_strong]:text-inherit">
        Bring your questions. Push back on what we have written. Tell us where
        you think we&apos;re wrong. The conversations that have led to
        AKC&apos;s strongest partnerships have always been the ones where the
        nephrologist arrived as a sceptic — and left, if at all, as a colleague.
      </p>
      <Button href="/contact" className="mt-4">
        Get in Touch with us
      </Button>
    </div>
  </section>
);

export default ConversationSection;
