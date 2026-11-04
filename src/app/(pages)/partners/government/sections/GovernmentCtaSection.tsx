import { Button, Eyebrow } from "@/components";
import { cn } from "@/lib";

const GOV_GUTTER = "px-6 sm:px-10 lg:px-15";

const CI_TITLE =
  "font-cormorant text-[clamp(36px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black";

const CI_BODY =
  "mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42]";

const LABEL =
  "mb-5 text-sm leading-[normal] text-black [&>span]:w-6 [&>span]:opacity-100";

const TITLE_EM = "text-primary-subtle italic";

const GovernmentCtaSection = () => (
  <section
    id="government-contact"
    className={cn("scroll-mt-20 bg-white py-20 text-center", GOV_GUTTER)}
  >
    <Eyebrow label="How to Engage" className={cn(LABEL, "inline-flex")} />

    <h2 className={cn(CI_TITLE, "mb-4")}>
      Begin the conversation.{""}
      <em className={TITLE_EM}>We have time, and patience, and substance.</em>
    </h2>

    <p className={CI_BODY}>
      AKC&apos;s government and policy engagements are led directly by our
      founders and the office of the CEO. The materials below open the
      conversation; the depth that follows is private, structured, and as fast
      or as patient as the partner requires.
    </p>

    <Button href="/contact" className="mt-4">
      Get in Touch with us
    </Button>
  </section>
);

export default GovernmentCtaSection;
