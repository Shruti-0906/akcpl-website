import { Button } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const ContactSection = () => {
  return (
    <section id="contact" className={cn("bg-[#022E40] py-14 lg:py-20", GUTTER)}>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="flex flex-col gap-3">
          <h2 className="section-heading font-medium text-white">
            Ready to be part of something
            <span className="block text-primary italic">that matters?</span>
          </h2>
          <p className="font-roboto text-sm leading-relaxed text-white/70 sm:text-base">
            Whether you&apos;re a patient, clinician, hospital, corporate chain,
            investor, or policymaker - the conversation starts here.
          </p>
        </div>

        <Button
          href="/contact"
          variant="outline"
          className="shrink-0 self-start rounded-lg border-primary/70 px-8 py-4 text-white hover:border-primary hover:bg-primary/10 lg:self-auto"
        >
          Get in touch with us
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
