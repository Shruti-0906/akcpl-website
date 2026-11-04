import { GUTTER } from "@/constants";

/** Reference .btn-primary / .btn-ghost — shared sizing. */
const BTN =
  "inline-flex items-center gap-2 rounded-[4px] px-8 py-4 font-roboto text-sm font-bold tracking-[0.04em]";

const DietCtaSection = () => (
  <section id="cta" className={`bg-white py-16 text-center lg:py-20 ${GUTTER}`}>
    <span className="mb-5 block text-[56px] leading-none" aria-hidden="true">
      🍽️
    </span>

    <h2 className="mb-4 font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
      Want to consult{" "}
      <span className="text-primary-subtle italic">a Dietician?</span>
    </h2>

    <p className="mb-4 font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
      AKC&apos;s renal dietitian will review your latest lab results, your CKD
      stage, your regional cuisine, your family&apos;s cooking style, and your
      personal food preferences — and create a weekly menu that protects your
      kidneys while keeping you firmly in the joy of eating. All via the AXIS
      Diet Module, delivered to your phone.
    </p>

    <div className="flex flex-wrap justify-center gap-3.5">
      <a
        href="/contact"
        className={`${BTN} border border-primary-subtle bg-primary-subtle text-white hover:opacity-90`}
      >
        📞 Book a Dietitian Appointment <span aria-hidden="true">→</span>
      </a>
      <a
        href="https://www.apexkidneycare.com/akc_new/images/Diet.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={`${BTN} border border-[rgb(92,92,92)]/20 text-black/80 hover:border-primary-subtle hover:text-primary-subtle`}
      >
        Download Renal Diet Guide (PDF)
      </a>
    </div>
  </section>
);

export default DietCtaSection;
