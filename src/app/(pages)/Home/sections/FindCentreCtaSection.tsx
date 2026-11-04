import { Button } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const FindCentreCtaSection = () => (
  <section
    id="find-a-centre"
    className={cn("bg-white py-8 text-center lg:py-10", GUTTER)}
  >
    <Button href="/centres#network">
      Find a Centre Near You <span aria-hidden="true">&rarr;</span>
    </Button>
  </section>
);

export default FindCentreCtaSection;
