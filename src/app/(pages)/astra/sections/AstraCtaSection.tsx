import { Button } from "@/components/ui";
import { GUTTER } from "@/constants";

const AstraCtaSection = () => (
  <section
    id="register"
    className={`scroll-mt-36 bg-white py-16 text-center lg:py-20 ${GUTTER}`}
  >
    <div>
      <div className="mb-5 flex items-center justify-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
        <span className="h-px w-6 bg-black" />
        The ASTRA Promise
      </div>

      <p className="mb-9 font-cormorant text-4xl leading-11.5 font-bold text-black">
        <em className="text-primary-subtle italic">
          The kidney is already in the family.
        </em>{" "}
        <em className="text-primary-subtle italic">
          The willingness is already there.
        </em>{" "}
        <strong className="font-bold">
          What&apos;s needed is a registry, an algorithm, and the coordination
          to bring two families together.
        </strong>{" "}
        ASTRA has been that registry for India for thirteen years — and the door
        is open to every nephrologist with an incompatible pair waiting to be
        matched.
      </p>

      <div className="flex flex-wrap justify-center gap-4.5">
        <Button href="#" className="rounded-sm">
          Register a pair with ASTRA →
        </Button>
        <Button href="#" variant="outline" className="rounded-sm">
          Speak to your nephrologist →
        </Button>
      </div>
    </div>
  </section>
);

export default AstraCtaSection;
