import { ArrowRight } from "lucide-react";

import { Button, Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const StoryContinuesSection = () => {
  return (
    <section
      id="story-continues"
      className={cn("bg-white py-14 lg:py-20", GUTTER)}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
        <Eyebrow
          label="The Story Continues"
          className="justify-center font-medium text-black/80"
        />

        <p className="font-cormorant text-2xl leading-relaxed font-medium text-black sm:text-3xl">
          <span className="text-primary-subtle italic">
            Eighteen years ago,
          </span>{" "}
          four nephrologists, a philanthropist, and an unwillingness to accept
          the state of Indian dialysis came together in a city that didn&apos;t
          make it easy. The same institution today operates across fourteen
          states, has published peer-reviewed research papers, and has delivered
          more than 6.2 million dialysis sessions.{" "}
          <span className="text-primary-subtle italic">
            The next chapter is already being written.
          </span>
        </p>

        <Button
          href="/centres"
          variant="outline"
          className="mt-2 rounded-sm px-8 py-4"
        >
          See our centres across India
          <ArrowRight aria-hidden="true" className="size-4" />
        </Button>
      </div>
    </section>
  );
};

export default StoryContinuesSection;
