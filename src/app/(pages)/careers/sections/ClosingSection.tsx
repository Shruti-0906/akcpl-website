import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import SendCvButton from "../components/SendCvButton";

const ClosingSection = () => (
  <section
    id="apply"
    className={cn(
      "relative scroll-mt-33 bg-white py-20 text-center lg:py-24",
      GUTTER,
    )}
  >
    <Eyebrow
      label="A final word"
      className="mb-5 inline-flex text-[14px] font-normal text-secondary"
    />

    <p className="mx-auto mb-10 max-w-[1700px] font-cormorant text-[clamp(21px,2.1vw,29px)] leading-normal font-semibold text-black">
      <em className="text-primary-subtle italic">If you join AKC,</em> you will
      spend your career in a place where the patient is visible, the team is
      real, and the work is consequential every single day. You will grow. You
      will be taught.{" "}
      <em className="text-primary-subtle italic">
        You will leave better than you arrived &mdash; and you&rsquo;ll have
        helped a lot of patients along the way.
      </em>
    </p>

    <SendCvButton />
  </section>
);

export default ClosingSection;
