import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import TransplantTypeCard from "../components/TransplantTypeCard";
import { TRANSPLANT_TYPES } from "../components/transplantTypes";
import { CI_BODY, CI_TITLE } from "../components/text";

const TypesSection = () => (
  <section className={cn("relative bg-white py-32.5", GUTTER)}>
    <div>
      <div className="mb-14 text-center">
        <Eyebrow
          label="Types of Transplant"
          className="mb-5 inline-flex text-white"
        />
        <h2 className={cn(CI_TITLE, "mb-4")}>
          Not one path. <em>Several.</em>
        </h2>
        <p className={CI_BODY}>
          Depending on your situation and the availability of a donor, your
          transplant may take one of the following forms.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {TRANSPLANT_TYPES.map((type, index) => (
        <div key={index} className="h-full">
          <TransplantTypeCard type={type} index={index} />
        </div>
      ))}
    </div>
  </section>
);

export default TypesSection;
